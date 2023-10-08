---
slug: cs-cpp-interop
title: C#与C++互操作技术概述
authors: AZ
tags: [c#, c++]
---

c#和c++是两种优秀的语言，在一些情况下需要实现二者之间的互操作性（Interop），即C#调用C++编写的代码，或C++调用C#编写的代码。本文将介绍常见的几种C#和C++之间的互操作技术，并讨论其优缺点。

<!--truncate-->

# CSharp调用C++
C#调用C、C++代码有三种常见技术，分别为`P/Invoke`、 `c++/clr`和 `COM组件`。下面将分别进行介绍。
## 使用P/Invoke
P/Invoke即Platform Invoke，平台调用技术，是C#方面的技术，允许开发者在C#代码中导入**C标准导出**的**函数**并进行调用。这意味着，如果想利用P/Invoke技术在C#中调用C++代码，则C++代码必须满足以下条件：

1. 必须是全局函数，不能包含在类中
2. 必须使用标准C导出

> c++中使用`extern "C" __declspec( dllexport )`创建标准C导出

相应地，在C#代码中使用`[DllImport]`特性导入函数并使用。由于此类调用是从托管代码调用非托管代码，在C#导入时还需处理参数的封送（Marshaling）。具体而言，常见的参数封送规则如下：

- 由于C++中有多种字符串表示法，若参数中包含字符串，需指定字符串类别（参数上使用`[MarshalAs]`特性，默认为C风格字符串）
- `int/float/bool`等基本值类型可直接对应。需要注意的是，c++中的`long`对应的是`int`，而`long long`才对应`long`
- 所有指针，无论是单指针还是多重指针，全部对应为`IntPtr`。若需要在C#中进行指针操作，优先使用`System.Runtime.Interop`命名空间下的方法。若不能满足，则可以开启`unsafe`，直接将指针对应为指针类型并操作
- 参数中的结构体/共用体对应为C#中的`struct`，但对应`struct`中的字段分布需要手动指定，保证和c++中的一致

P/Invoke是C#互操作中最常见的技术，其优势在于c/c++方面只需很少的修改或不用修改，就能在C#中直接导入，最常见的例子就是C#调用Windows API，例如`PostMessage`：

```cpp
// c++声明：
BOOL PostMessageW(
  [in, optional] HWND   hWnd,
  [in]           UINT   Msg,
  [in]           WPARAM wParam,
  [in]           LPARAM lParam
);
```

```cs
// c# 导入
[DllImport("user32.dll", EntryPoint = "PostMessageW")]
public static extern bool PostMessage(IntPtr hWnd, uint msg, IntPtr wParam, IntPtr lParam);
```

但这种方式的缺点也很明显，由于需要处理跨越托管代码边界传参时的封送，性能相对要低一些。另外，如果原函数调用中涉及很多指针和结构体，C#方面的处理就会很繁琐。就拿上面的`PostMessage`举例，`wParam`和`lParam`都是指向结构体的指针，而结构体的类型是由`msg`参数确定的。这意味着如果需要发送的消息种类比较多，就需要把每种结构体严格写出来，在调用时还需要转为`IntPtr`。而实际在`PostMesssage`涉及的结构体的定义中很多还嵌套着其它结构体和指针，总之就是非常麻烦。

因此，P/Invoke适用于调用c/c++编写的参数和返回值类型较简单且固定的函数，比如`FindWindow`:

```cs
[DllImport("user32.dll")]
static extern IntPtr FindWindow(string lpClassName, string lpWindowName);
```

## 使用C++/CLR
c++/clr是VC的一种神奇的技术，它允许生成的dll中同时包含托管代码和非托管代码，也就是说，通过这种技术编写的dll，既可以被c++项目引用，又可以被c#项目引用，因此非常适合做c++和c#之间的互操作。WPF框架底层就大量使用了该技术，来实现框架与系统底层的交互。

这种方式的优点在于，开发者可以任意控制托管代码和非托管代码的边界，甚至可以在同一个函数中既调用原生c++的代码，又调用c#编写的程序集中的类和方法；既可以将程序集中的类和方法封装成c++的类和函数供c++调用，又可以将c++的类和函数封装成程序集供c#调用。而缺点在于，使用c++编写面向CLR代码需要使用一种特殊的语法，有额外的学习成本。

例如将Windows API中的`SendInput`函数封装为c#可用的程序集:

```cpp
public ref class NativeInput
{
private:
    NativeInput();
    ~NativeInput();
public:
    static void SendKey(array<WORD>^ key);
    static void SendUnicode(array<WORD>^ unicodes);
};
```
可以看到，使用c++定义CLR的类需要使用`ref class`，而CLR中的数组定义为`array<Type>^`，其它语法则与c++基本一致。方法的实现如下：

```cpp
void NativeInput::SendKey(array<WORD>^ keys)
{
    const int length = keys->Length * 2;
    LPINPUT inputs = new INPUT[length];
    ZeroMemory(inputs, sizeof(INPUT) * length);

    for (int i = 0; i < keys->Length; i++)
    {
	inputs[i].type = INPUT_KEYBOARD;
	inputs[i].ki.wVk = keys[i];
    }
    for (int i = keys->Length; i < length; i++)
    {
	inputs[i].type = INPUT_KEYBOARD;
	inputs[i].ki.wVk = keys[i - keys->Length];
	inputs[i].ki.dwFlags = KEYEVENTF_KEYUP;
    }
    SendInput(length, inputs, sizeof(INPUT));
    delete[](inputs);
}

void NativeInput::SendUnicode(array<WORD>^ unicodes)
{
   // ...
}
```
相当于把纯c++的调用封装为c#的程序集，c#只需要引入dll，就可以直接调用`NativeInput.SendKey()`和`NativeInput.SendUnicode()`。而同样的功能如果使用`P/Invoke`，则需要额外声明代码中出现的所有常量和结构体。

## 利用COM组件
利用COM组件也可以实现c++和c#之间的互操作，而且可以实现双向互操作。因为C#和C++都可以编写COM组件，也都可以在程序中使用COM组件。由于COM组件编程较为繁琐，一般不使用这种方式。较为常见的例子是C#导入系统中已有的COM组件并使用，很少自己写COM组件并由C#调用。读者可自行了解并尝试。

# C++调用CSharp 

与C#调用C++相比，C++调用C#的技术不太常用，但也有一些场景：

- 希望在C++中复用已有的C#编写的代码
- 一些功能使用C++编写比较麻烦，而C#很方便

共有四种方法可供选择，分别为：`c++/clr`、`使用CLR API`、`COM组件`、`.NET AOT配合运行时链接`。其中，`使用CLR API`、`COM组件`这两种方法较为繁琐，不实用，感兴趣的读者可自行了解。`c++/clr`的方式上文已经提到过，不再赘述。本文将重点介绍`利用.NET AOT配合运行时链接`的方法实现c++调用c#代码。

## .NET7的Native AOT简介

在传统认知中，C#程序的运行必须依赖.net运行时，无论是`.net framework`，还是新的`.net core`都是如此。究其原因，C#代码编译后的产物为IL（中间语言），必须在CLR（公共语言运行时）中由JIT（即时编译器）在运行时编译为本机代码执行。关键就在于C#程序是在运行时才被编译为最终可以直接运行的代码。

与JIT（运行时即时编译）相对的是AOT（预先编译）。AOT编译器能够在编译期就将中间语言编译为本机代码，因此AOT编译的产物与C语言编译链接的产物类似，可以直接在本地运行，不依赖CLR。

而C#语言终于.NET7中引入了AOT编译器，意味着能够编写出不依赖.net运行时的程序了，即使AOT编译存在一些限制。但它依然为其它语言调用c#的互操作提供了一种更简单的方法。


## C++运行时动态链接
基于AOT的互操作，其基本原理是C#代码使用AOT编译，并使用标准C导出函数；C++就可以在运行时动态链接dll，获取到对应名称的函数并调用。此处需要区分运行时链接和动态链接。我们平时说的动态链接其实指的是编译时动态链接，为方便说明，下面列出所有的c++链接方式：


| 链接方式 | 编译时依赖 | 运行时依赖 | 链接执行 
|--|--|--|--|
| 静态链接 | 静态链接库和头文件 | 无 | 编译时 
| 编译时动态链接 | 动态链接导入库和头文件 | 动态链接库 | 程序启动时
| 运行时动态链接 | 无 | 动态链接库 | 程序运行时的任意时刻 

由于C#经过AOT编译后只输出动态链接库文件，所以我们在C++中使用时需采取运行时动态链接的方式。具体实现可分为`Windows`和`Linux`:

- Windows下使用[`LoadLibrary`](https://learn.microsoft.com/zh-cn/windows/win32/api/libloaderapi/nf-libloaderapi-loadlibraryw)函数加载动态链接库，之后使用[`GetProcAddress`](https://learn.microsoft.com/zh-cn/windows/win32/api/libloaderapi/nf-libloaderapi-getprocaddress)函数获取符号名称对应的地址
- Linux下对应函数为`dlopen`和`dlsym`

## 使用 .NET AOT实现C++调用C#代码的示例
### C#项目建立与配置

> 需要使用VS2022并安装.NET7 SDK

第一步，新建一个C#类库项目，并在后续步骤中选择.NET7

第二步，在公共类中添加**静态公共方法**，并添加`[UnmanagedCallersOnly]`特性。以下示例代码实现一个可被c++调用的获取日期是星期几的函数：

```cs
[UnmanagedCallersOnly(EntryPoint = "GetDayOfWeek")]
public static int GetDayOfWeek(nint lpDate, nint lpDay)
{
    try
    {
        var dateStr = Marshal.PtrToStringUni(lpDate);
        if (string.IsNullOrEmpty(dateStr)) return -1;

        var dateTime = DateTime.Parse(dateStr);

        Marshal.StructureToPtr(dateTime.DayOfWeek, lpDay, false);
        return 0;
    }
    catch
    {
        return -1;
    }
}
```
该函数符合c风格api，使用`lpDate`指针传入日期字符串，使用`lpDay`指针传出星期几的整数，并使用返回值标志函数执行是否成功。需要注意的是，代码使用`Marshal.PtrToStringUni`方法从指针读入字符串，并使用`Marshal.StructureToPtr`方法将数据写入指针。如果开启不安全代码，可以直接在C#中使用指针，以上代码可改写为：

```cs
[UnmanagedCallersOnly(EntryPoint = "GetDayOfWeek")]
public unsafe static int GetDayOfWeek(char* lpDate, int* lpDay)
{
    try
    {
        var dateStr = new string(lpDate);
        if (string.IsNullOrEmpty(dateStr)) return -1;

        var dateTime = DateTime.Parse(dateStr);

        *lpDay = (int)dateTime.DayOfWeek;
        return 0;
    }
    catch
    {
        return -1;
    }
}
```
这样写的好处是代码更清晰明了，但也增加了指针越界的风险。

第三步，在项目配置中添加以下内容：

```xml
<PublishAot>true</PublishAot>
```
以上选项开启AOT编译。
接着进行发布，创建发布配置后，修改目标运行时为对应平台，保存后点击发布，在`bin\Release\net7.0\publish\win-x64`目录下可以看到编译输出的dll。

> .net7仅支持发布时AOT，.net8将支持编译时AOT

### C++调用示例
新建一个c++控制台项目，代码如下：

```cpp
#include <iostream>
#include <Windows.h>

// 声明C#中定义的函数形式
typedef HRESULT (*GetDayOfWeakProc)(LPCWSTR, LPDWORD);

int main()
{
    // 动态加载dll
    HMODULE hAotDll = LoadLibrary(L"AOTDemoLib.dll");
    if (hAotDll == NULL) return -1;

    // 获取函数指针
    GetDayOfWeakProc getDayOfWeak = (GetDayOfWeakProc)GetProcAddress(hAotDll, "GetDayOfWeek");
    if (getDayOfWeak == NULL) return -1;

    DWORD iDayOfWeek = 0;
    // 伪函数形式调用C#中导出的函数
    HRESULT hr = getDayOfWeak(L"2023/07/05", &iDayOfWeek);
    if (FAILED(hr)) return hr;

    std::cout << "2023/07/05 is day" << iDayOfWeek;
    return 0;
}
```
**在运行之前，需要把C#输出的dll复制到c++的输出目录中：**

> 可以通过设置编译前脚本自动实现这一步

然后运行，可以看到正确的输出结果，即2023年7月5日是周三。



