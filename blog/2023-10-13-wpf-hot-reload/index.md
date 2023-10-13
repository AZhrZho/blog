---
slug: wpf-hot-reload
title: 附加进程调试时启用WPF热重载
authors: AZ
tags: [c#, wpf]
---

WPF从.Net framework 4.8开始原生支持热重载，由于复杂场景下XAML设计器无法实现所见即所得，该特性能够极大提升WPF应用开发的效率。然而Visual Studio默认只支持运行调试时的热重载，对于附加调试的场景，还需要一些额外的设置。

<!--truncate-->

## 设置环境变量
XAML热重载要求在应用程序启动时将环境变量`ENABLE_XAML_DIAGNOSTICS_SOURCE_INFO`设置为`1`，在Visual Studio中运行调试时，工具会自动设置该变量。但是在附加调试时需要手动设置。

最方便的方法是直接添加一个系统或用户变量，也可以在被调试进程启动时设置临时变量。

## 生成热重载信息
热重载依赖编译期间生成的一些数据，在附加进程调试时，这些数据不会自动生成。因此需要为待调试XAML所在的csproj添加以下Property：

```xml
<XamlDebuggingInformation>True</XamlDebuggingInformation>
```

配置以上两点即可支持附加进程调试时的XAML热重载。

## WPF中XAML热重载的局限性
热重载虽然方便，但也有局限性，也就是说不是任何改动都可以热重载的。在WPF中存在如下局限：

- 无法在运行时为组件添加事件处理器
- 无法在运行时添加新的XAML文件
- 不能修改Nuget包

另外需区分XMAL热重载和C#热重载，XAML热重载在 **.net framework 4.8** 即可用，而如果要在运行时修改C#代码，则至少需要 **.net6** 才可支持。

> 参考：
>
> 1. [WPF 和 UWP 应用的 XAML 热重载](https://learn.microsoft.com/zh-cn/visualstudio/xaml-tools/xaml-hot-reload?view=vs-2022)
> 2. [XAML 热重载疑难解答](https://learn.microsoft.com/zh-cn/troubleshoot/developer/visualstudio/tools-utilities/xaml-hot-reload-troubleshooting?view=vs-2022)