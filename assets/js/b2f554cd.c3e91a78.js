"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[477],{10:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"cs-cpp-interop","metadata":{"permalink":"/blog/cs-cpp-interop","source":"@site/blog/2023-10-08-cs-cpp-interop/index.md","title":"C#\u4e0eC++\u4e92\u64cd\u4f5c\u6280\u672f\u6982\u8ff0","description":"c#\u548cc++\u662f\u4e24\u79cd\u4f18\u79c0\u7684\u8bed\u8a00\uff0c\u5728\u4e00\u4e9b\u60c5\u51b5\u4e0b\u9700\u8981\u5b9e\u73b0\u4e8c\u8005\u4e4b\u95f4\u7684\u4e92\u64cd\u4f5c\u6027\uff08Interop\uff09\uff0c\u5373C#\u8c03\u7528C++\u7f16\u5199\u7684\u4ee3\u7801\uff0c\u6216C++\u8c03\u7528C#\u7f16\u5199\u7684\u4ee3\u7801\u3002\u672c\u6587\u5c06\u4ecb\u7ecd\u5e38\u89c1\u7684\u51e0\u79cdC#\u548cC++\u4e4b\u95f4\u7684\u4e92\u64cd\u4f5c\u6280\u672f\uff0c\u5e76\u8ba8\u8bba\u5176\u4f18\u7f3a\u70b9\u3002","date":"2023-10-08T00:00:00.000Z","formattedDate":"October 8, 2023","tags":[{"label":"csharp","permalink":"/blog/tags/csharp"},{"label":"c++","permalink":"/blog/tags/c"}],"readingTime":13.865,"hasTruncateMarker":true,"authors":[{"name":"zhuoqiang.li","title":"\u662f\u4e2a\u5b66\u751f","url":"https://github.com/AZhrZho","imageURL":"https://github.com/AZhrZho.png","key":"AZ"}],"frontMatter":{"slug":"cs-cpp-interop","title":"C#\u4e0eC++\u4e92\u64cd\u4f5c\u6280\u672f\u6982\u8ff0","authors":"AZ","tags":["csharp","c++"]},"nextItem":{"title":"\u53cb\u60c5\u94fe\u63a5","permalink":"/blog/friends"}},"content":"c#\u548cc++\u662f\u4e24\u79cd\u4f18\u79c0\u7684\u8bed\u8a00\uff0c\u5728\u4e00\u4e9b\u60c5\u51b5\u4e0b\u9700\u8981\u5b9e\u73b0\u4e8c\u8005\u4e4b\u95f4\u7684\u4e92\u64cd\u4f5c\u6027\uff08Interop\uff09\uff0c\u5373C#\u8c03\u7528C++\u7f16\u5199\u7684\u4ee3\u7801\uff0c\u6216C++\u8c03\u7528C#\u7f16\u5199\u7684\u4ee3\u7801\u3002\u672c\u6587\u5c06\u4ecb\u7ecd\u5e38\u89c1\u7684\u51e0\u79cdC#\u548cC++\u4e4b\u95f4\u7684\u4e92\u64cd\u4f5c\u6280\u672f\uff0c\u5e76\u8ba8\u8bba\u5176\u4f18\u7f3a\u70b9\u3002\\n\\n\x3c!--truncate--\x3e\\n\\n# CSharp\u8c03\u7528C++\\nC#\u8c03\u7528C\u3001C++\u4ee3\u7801\u6709\u4e09\u79cd\u5e38\u89c1\u6280\u672f\uff0c\u5206\u522b\u4e3a`P/Invoke`\u3001 `c++/clr`\u548c `COM\u7ec4\u4ef6`\u3002\u4e0b\u9762\u5c06\u5206\u522b\u8fdb\u884c\u4ecb\u7ecd\u3002\\n## \u4f7f\u7528P/Invoke\\nP/Invoke\u5373Platform Invoke\uff0c\u5e73\u53f0\u8c03\u7528\u6280\u672f\uff0c\u662fC#\u65b9\u9762\u7684\u6280\u672f\uff0c\u5141\u8bb8\u5f00\u53d1\u8005\u5728C#\u4ee3\u7801\u4e2d\u5bfc\u5165**C\u6807\u51c6\u5bfc\u51fa**\u7684**\u51fd\u6570**\u5e76\u8fdb\u884c\u8c03\u7528\u3002\u8fd9\u610f\u5473\u7740\uff0c\u5982\u679c\u60f3\u5229\u7528P/Invoke\u6280\u672f\u5728C#\u4e2d\u8c03\u7528C++\u4ee3\u7801\uff0c\u5219C++\u4ee3\u7801\u5fc5\u987b\u6ee1\u8db3\u4ee5\u4e0b\u6761\u4ef6\uff1a\\n\\n1. \u5fc5\u987b\u662f\u5168\u5c40\u51fd\u6570\uff0c\u4e0d\u80fd\u5305\u542b\u5728\u7c7b\u4e2d\\n2. \u5fc5\u987b\u4f7f\u7528\u6807\u51c6C\u5bfc\u51fa\\n\\n> c++\u4e2d\u4f7f\u7528`extern \\"C\\" __declspec( dllexport )`\u521b\u5efa\u6807\u51c6C\u5bfc\u51fa\\n\\n\u76f8\u5e94\u5730\uff0c\u5728C#\u4ee3\u7801\u4e2d\u4f7f\u7528`[DllImport]`\u7279\u6027\u5bfc\u5165\u51fd\u6570\u5e76\u4f7f\u7528\u3002\u7531\u4e8e\u6b64\u7c7b\u8c03\u7528\u662f\u4ece\u6258\u7ba1\u4ee3\u7801\u8c03\u7528\u975e\u6258\u7ba1\u4ee3\u7801\uff0c\u5728C#\u5bfc\u5165\u65f6\u8fd8\u9700\u5904\u7406\u53c2\u6570\u7684\u5c01\u9001\uff08Marshaling\uff09\u3002\u5177\u4f53\u800c\u8a00\uff0c\u5e38\u89c1\u7684\u53c2\u6570\u5c01\u9001\u89c4\u5219\u5982\u4e0b\uff1a\\n\\n- \u7531\u4e8eC++\u4e2d\u6709\u591a\u79cd\u5b57\u7b26\u4e32\u8868\u793a\u6cd5\uff0c\u82e5\u53c2\u6570\u4e2d\u5305\u542b\u5b57\u7b26\u4e32\uff0c\u9700\u6307\u5b9a\u5b57\u7b26\u4e32\u7c7b\u522b\uff08\u53c2\u6570\u4e0a\u4f7f\u7528`[MarshalAs]`\u7279\u6027\uff0c\u9ed8\u8ba4\u4e3aC\u98ce\u683c\u5b57\u7b26\u4e32\uff09\\n- `int/float/bool`\u7b49\u57fa\u672c\u503c\u7c7b\u578b\u53ef\u76f4\u63a5\u5bf9\u5e94\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0cc++\u4e2d\u7684`long`\u5bf9\u5e94\u7684\u662f`int`\uff0c\u800c`long long`\u624d\u5bf9\u5e94`long`\\n- \u6240\u6709\u6307\u9488\uff0c\u65e0\u8bba\u662f\u5355\u6307\u9488\u8fd8\u662f\u591a\u91cd\u6307\u9488\uff0c\u5168\u90e8\u5bf9\u5e94\u4e3a`IntPtr`\u3002\u82e5\u9700\u8981\u5728C#\u4e2d\u8fdb\u884c\u6307\u9488\u64cd\u4f5c\uff0c\u4f18\u5148\u4f7f\u7528`System.Runtime.Interop`\u547d\u540d\u7a7a\u95f4\u4e0b\u7684\u65b9\u6cd5\u3002\u82e5\u4e0d\u80fd\u6ee1\u8db3\uff0c\u5219\u53ef\u4ee5\u5f00\u542f`unsafe`\uff0c\u76f4\u63a5\u5c06\u6307\u9488\u5bf9\u5e94\u4e3a\u6307\u9488\u7c7b\u578b\u5e76\u64cd\u4f5c\\n- \u53c2\u6570\u4e2d\u7684\u7ed3\u6784\u4f53/\u5171\u7528\u4f53\u5bf9\u5e94\u4e3aC#\u4e2d\u7684`struct`\uff0c\u4f46\u5bf9\u5e94`struct`\u4e2d\u7684\u5b57\u6bb5\u5206\u5e03\u9700\u8981\u624b\u52a8\u6307\u5b9a\uff0c\u4fdd\u8bc1\u548cc++\u4e2d\u7684\u4e00\u81f4\\n\\nP/Invoke\u662fC#\u4e92\u64cd\u4f5c\u4e2d\u6700\u5e38\u89c1\u7684\u6280\u672f\uff0c\u5176\u4f18\u52bf\u5728\u4e8ec/c++\u65b9\u9762\u53ea\u9700\u5f88\u5c11\u7684\u4fee\u6539\u6216\u4e0d\u7528\u4fee\u6539\uff0c\u5c31\u80fd\u5728C#\u4e2d\u76f4\u63a5\u5bfc\u5165\uff0c\u6700\u5e38\u89c1\u7684\u4f8b\u5b50\u5c31\u662fC#\u8c03\u7528Windows API\uff0c\u4f8b\u5982`PostMessage`\uff1a\\n\\n```cpp\\n// c++\u58f0\u660e\uff1a\\nBOOL PostMessageW(\\n  [in, optional] HWND   hWnd,\\n  [in]           UINT   Msg,\\n  [in]           WPARAM wParam,\\n  [in]           LPARAM lParam\\n);\\n```\\n\\n```cs\\n// c# \u5bfc\u5165\\n[DllImport(\\"user32.dll\\", EntryPoint = \\"PostMessageW\\")]\\npublic static extern bool PostMessage(IntPtr hWnd, uint msg, IntPtr wParam, IntPtr lParam);\\n```\\n\\n\u4f46\u8fd9\u79cd\u65b9\u5f0f\u7684\u7f3a\u70b9\u4e5f\u5f88\u660e\u663e\uff0c\u7531\u4e8e\u9700\u8981\u5904\u7406\u8de8\u8d8a\u6258\u7ba1\u4ee3\u7801\u8fb9\u754c\u4f20\u53c2\u65f6\u7684\u5c01\u9001\uff0c\u6027\u80fd\u76f8\u5bf9\u8981\u4f4e\u4e00\u4e9b\u3002\u53e6\u5916\uff0c\u5982\u679c\u539f\u51fd\u6570\u8c03\u7528\u4e2d\u6d89\u53ca\u5f88\u591a\u6307\u9488\u548c\u7ed3\u6784\u4f53\uff0cC#\u65b9\u9762\u7684\u5904\u7406\u5c31\u4f1a\u5f88\u7e41\u7410\u3002\u5c31\u62ff\u4e0a\u9762\u7684`PostMessage`\u4e3e\u4f8b\uff0c`wParam`\u548c`lParam`\u90fd\u662f\u6307\u5411\u7ed3\u6784\u4f53\u7684\u6307\u9488\uff0c\u800c\u7ed3\u6784\u4f53\u7684\u7c7b\u578b\u662f\u7531`msg`\u53c2\u6570\u786e\u5b9a\u7684\u3002\u8fd9\u610f\u5473\u7740\u5982\u679c\u9700\u8981\u53d1\u9001\u7684\u6d88\u606f\u79cd\u7c7b\u6bd4\u8f83\u591a\uff0c\u5c31\u9700\u8981\u628a\u6bcf\u79cd\u7ed3\u6784\u4f53\u4e25\u683c\u5199\u51fa\u6765\uff0c\u5728\u8c03\u7528\u65f6\u8fd8\u9700\u8981\u8f6c\u4e3a`IntPtr`\u3002\u800c\u5b9e\u9645\u5728`PostMesssage`\u6d89\u53ca\u7684\u7ed3\u6784\u4f53\u7684\u5b9a\u4e49\u4e2d\u5f88\u591a\u8fd8\u5d4c\u5957\u7740\u5176\u5b83\u7ed3\u6784\u4f53\u548c\u6307\u9488\uff0c\u603b\u4e4b\u5c31\u662f\u975e\u5e38\u9ebb\u70e6\u3002\\n\\n\u56e0\u6b64\uff0cP/Invoke\u9002\u7528\u4e8e\u8c03\u7528c/c++\u7f16\u5199\u7684\u53c2\u6570\u548c\u8fd4\u56de\u503c\u7c7b\u578b\u8f83\u7b80\u5355\u4e14\u56fa\u5b9a\u7684\u51fd\u6570\uff0c\u6bd4\u5982`FindWindow`:\\n\\n```cs\\n[DllImport(\\"user32.dll\\")]\\nstatic extern IntPtr FindWindow(string lpClassName, string lpWindowName);\\n```\\n\\n## \u4f7f\u7528C++/CLR\\nc++/clr\u662fVC\u7684\u4e00\u79cd\u795e\u5947\u7684\u6280\u672f\uff0c\u5b83\u5141\u8bb8\u751f\u6210\u7684dll\u4e2d\u540c\u65f6\u5305\u542b\u6258\u7ba1\u4ee3\u7801\u548c\u975e\u6258\u7ba1\u4ee3\u7801\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u901a\u8fc7\u8fd9\u79cd\u6280\u672f\u7f16\u5199\u7684dll\uff0c\u65e2\u53ef\u4ee5\u88abc++\u9879\u76ee\u5f15\u7528\uff0c\u53c8\u53ef\u4ee5\u88abc#\u9879\u76ee\u5f15\u7528\uff0c\u56e0\u6b64\u975e\u5e38\u9002\u5408\u505ac++\u548cc#\u4e4b\u95f4\u7684\u4e92\u64cd\u4f5c\u3002WPF\u6846\u67b6\u5e95\u5c42\u5c31\u5927\u91cf\u4f7f\u7528\u4e86\u8be5\u6280\u672f\uff0c\u6765\u5b9e\u73b0\u6846\u67b6\u4e0e\u7cfb\u7edf\u5e95\u5c42\u7684\u4ea4\u4e92\u3002\\n\\n\u8fd9\u79cd\u65b9\u5f0f\u7684\u4f18\u70b9\u5728\u4e8e\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u4efb\u610f\u63a7\u5236\u6258\u7ba1\u4ee3\u7801\u548c\u975e\u6258\u7ba1\u4ee3\u7801\u7684\u8fb9\u754c\uff0c\u751a\u81f3\u53ef\u4ee5\u5728\u540c\u4e00\u4e2a\u51fd\u6570\u4e2d\u65e2\u8c03\u7528\u539f\u751fc++\u7684\u4ee3\u7801\uff0c\u53c8\u8c03\u7528c#\u7f16\u5199\u7684\u7a0b\u5e8f\u96c6\u4e2d\u7684\u7c7b\u548c\u65b9\u6cd5\uff1b\u65e2\u53ef\u4ee5\u5c06\u7a0b\u5e8f\u96c6\u4e2d\u7684\u7c7b\u548c\u65b9\u6cd5\u5c01\u88c5\u6210c++\u7684\u7c7b\u548c\u51fd\u6570\u4f9bc++\u8c03\u7528\uff0c\u53c8\u53ef\u4ee5\u5c06c++\u7684\u7c7b\u548c\u51fd\u6570\u5c01\u88c5\u6210\u7a0b\u5e8f\u96c6\u4f9bc#\u8c03\u7528\u3002\u800c\u7f3a\u70b9\u5728\u4e8e\uff0c\u4f7f\u7528c++\u7f16\u5199\u9762\u5411CLR\u4ee3\u7801\u9700\u8981\u4f7f\u7528\u4e00\u79cd\u7279\u6b8a\u7684\u8bed\u6cd5\uff0c\u6709\u989d\u5916\u7684\u5b66\u4e60\u6210\u672c\u3002\\n\\n\u4f8b\u5982\u5c06Windows API\u4e2d\u7684`SendInput`\u51fd\u6570\u5c01\u88c5\u4e3ac#\u53ef\u7528\u7684\u7a0b\u5e8f\u96c6:\\n\\n```cpp\\npublic ref class NativeInput\\n{\\nprivate:\\n    NativeInput();\\n    ~NativeInput();\\npublic:\\n    static void SendKey(array<WORD>^ key);\\n    static void SendUnicode(array<WORD>^ unicodes);\\n};\\n```\\n\u53ef\u4ee5\u770b\u5230\uff0c\u4f7f\u7528c++\u5b9a\u4e49CLR\u7684\u7c7b\u9700\u8981\u4f7f\u7528`ref class`\uff0c\u800cCLR\u4e2d\u7684\u6570\u7ec4\u5b9a\u4e49\u4e3a`array<Type>^`\uff0c\u5176\u5b83\u8bed\u6cd5\u5219\u4e0ec++\u57fa\u672c\u4e00\u81f4\u3002\u65b9\u6cd5\u7684\u5b9e\u73b0\u5982\u4e0b\uff1a\\n\\n```cpp\\nvoid NativeInput::SendKey(array<WORD>^ keys)\\n{\\n    const int length = keys->Length * 2;\\n    LPINPUT inputs = new INPUT[length];\\n    ZeroMemory(inputs, sizeof(INPUT) * length);\\n\\n    for (int i = 0; i < keys->Length; i++)\\n    {\\n\\tinputs[i].type = INPUT_KEYBOARD;\\n\\tinputs[i].ki.wVk = keys[i];\\n    }\\n    for (int i = keys->Length; i < length; i++)\\n    {\\n\\tinputs[i].type = INPUT_KEYBOARD;\\n\\tinputs[i].ki.wVk = keys[i - keys->Length];\\n\\tinputs[i].ki.dwFlags = KEYEVENTF_KEYUP;\\n    }\\n    SendInput(length, inputs, sizeof(INPUT));\\n    delete[](inputs);\\n}\\n\\nvoid NativeInput::SendUnicode(array<WORD>^ unicodes)\\n{\\n   // ...\\n}\\n```\\n\u76f8\u5f53\u4e8e\u628a\u7eafc++\u7684\u8c03\u7528\u5c01\u88c5\u4e3ac#\u7684\u7a0b\u5e8f\u96c6\uff0cc#\u53ea\u9700\u8981\u5f15\u5165dll\uff0c\u5c31\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528`NativeInput.SendKey()`\u548c`NativeInput.SendUnicode()`\u3002\u800c\u540c\u6837\u7684\u529f\u80fd\u5982\u679c\u4f7f\u7528`P/Invoke`\uff0c\u5219\u9700\u8981\u989d\u5916\u58f0\u660e\u4ee3\u7801\u4e2d\u51fa\u73b0\u7684\u6240\u6709\u5e38\u91cf\u548c\u7ed3\u6784\u4f53\u3002\\n\\n## \u5229\u7528COM\u7ec4\u4ef6\\n\u5229\u7528COM\u7ec4\u4ef6\u4e5f\u53ef\u4ee5\u5b9e\u73b0c++\u548cc#\u4e4b\u95f4\u7684\u4e92\u64cd\u4f5c\uff0c\u800c\u4e14\u53ef\u4ee5\u5b9e\u73b0\u53cc\u5411\u4e92\u64cd\u4f5c\u3002\u56e0\u4e3aC#\u548cC++\u90fd\u53ef\u4ee5\u7f16\u5199COM\u7ec4\u4ef6\uff0c\u4e5f\u90fd\u53ef\u4ee5\u5728\u7a0b\u5e8f\u4e2d\u4f7f\u7528COM\u7ec4\u4ef6\u3002\u7531\u4e8eCOM\u7ec4\u4ef6\u7f16\u7a0b\u8f83\u4e3a\u7e41\u7410\uff0c\u4e00\u822c\u4e0d\u4f7f\u7528\u8fd9\u79cd\u65b9\u5f0f\u3002\u8f83\u4e3a\u5e38\u89c1\u7684\u4f8b\u5b50\u662fC#\u5bfc\u5165\u7cfb\u7edf\u4e2d\u5df2\u6709\u7684COM\u7ec4\u4ef6\u5e76\u4f7f\u7528\uff0c\u5f88\u5c11\u81ea\u5df1\u5199COM\u7ec4\u4ef6\u5e76\u7531C#\u8c03\u7528\u3002\u8bfb\u8005\u53ef\u81ea\u884c\u4e86\u89e3\u5e76\u5c1d\u8bd5\u3002\\n\\n# C++\u8c03\u7528CSharp \\n\\n\u4e0eC#\u8c03\u7528C++\u76f8\u6bd4\uff0cC++\u8c03\u7528C#\u7684\u6280\u672f\u4e0d\u592a\u5e38\u7528\uff0c\u4f46\u4e5f\u6709\u4e00\u4e9b\u573a\u666f\uff1a\\n\\n- \u5e0c\u671b\u5728C++\u4e2d\u590d\u7528\u5df2\u6709\u7684C#\u7f16\u5199\u7684\u4ee3\u7801\\n- \u4e00\u4e9b\u529f\u80fd\u4f7f\u7528C++\u7f16\u5199\u6bd4\u8f83\u9ebb\u70e6\uff0c\u800cC#\u5f88\u65b9\u4fbf\\n\\n\u5171\u6709\u56db\u79cd\u65b9\u6cd5\u53ef\u4f9b\u9009\u62e9\uff0c\u5206\u522b\u4e3a\uff1a`c++/clr`\u3001`\u4f7f\u7528CLR API`\u3001`COM\u7ec4\u4ef6`\u3001`.NET AOT\u914d\u5408\u8fd0\u884c\u65f6\u94fe\u63a5`\u3002\u5176\u4e2d\uff0c`\u4f7f\u7528CLR API`\u3001`COM\u7ec4\u4ef6`\u8fd9\u4e24\u79cd\u65b9\u6cd5\u8f83\u4e3a\u7e41\u7410\uff0c\u4e0d\u5b9e\u7528\uff0c\u611f\u5174\u8da3\u7684\u8bfb\u8005\u53ef\u81ea\u884c\u4e86\u89e3\u3002`c++/clr`\u7684\u65b9\u5f0f\u4e0a\u6587\u5df2\u7ecf\u63d0\u5230\u8fc7\uff0c\u4e0d\u518d\u8d58\u8ff0\u3002\u672c\u6587\u5c06\u91cd\u70b9\u4ecb\u7ecd`\u5229\u7528.NET AOT\u914d\u5408\u8fd0\u884c\u65f6\u94fe\u63a5`\u7684\u65b9\u6cd5\u5b9e\u73b0c++\u8c03\u7528c#\u4ee3\u7801\u3002\\n\\n## .NET7\u7684Native AOT\u7b80\u4ecb\\n\\n\u5728\u4f20\u7edf\u8ba4\u77e5\u4e2d\uff0cC#\u7a0b\u5e8f\u7684\u8fd0\u884c\u5fc5\u987b\u4f9d\u8d56.net\u8fd0\u884c\u65f6\uff0c\u65e0\u8bba\u662f`.net framework`\uff0c\u8fd8\u662f\u65b0\u7684`.net core`\u90fd\u662f\u5982\u6b64\u3002\u7a76\u5176\u539f\u56e0\uff0cC#\u4ee3\u7801\u7f16\u8bd1\u540e\u7684\u4ea7\u7269\u4e3aIL\uff08\u4e2d\u95f4\u8bed\u8a00\uff09\uff0c\u5fc5\u987b\u5728CLR\uff08\u516c\u5171\u8bed\u8a00\u8fd0\u884c\u65f6\uff09\u4e2d\u7531JIT\uff08\u5373\u65f6\u7f16\u8bd1\u5668\uff09\u5728\u8fd0\u884c\u65f6\u7f16\u8bd1\u4e3a\u672c\u673a\u4ee3\u7801\u6267\u884c\u3002\u5173\u952e\u5c31\u5728\u4e8eC#\u7a0b\u5e8f\u662f\u5728\u8fd0\u884c\u65f6\u624d\u88ab\u7f16\u8bd1\u4e3a\u6700\u7ec8\u53ef\u4ee5\u76f4\u63a5\u8fd0\u884c\u7684\u4ee3\u7801\u3002\\n\\n\u4e0eJIT\uff08\u8fd0\u884c\u65f6\u5373\u65f6\u7f16\u8bd1\uff09\u76f8\u5bf9\u7684\u662fAOT\uff08\u9884\u5148\u7f16\u8bd1\uff09\u3002AOT\u7f16\u8bd1\u5668\u80fd\u591f\u5728\u7f16\u8bd1\u671f\u5c31\u5c06\u4e2d\u95f4\u8bed\u8a00\u7f16\u8bd1\u4e3a\u672c\u673a\u4ee3\u7801\uff0c\u56e0\u6b64AOT\u7f16\u8bd1\u7684\u4ea7\u7269\u4e0eC\u8bed\u8a00\u7f16\u8bd1\u94fe\u63a5\u7684\u4ea7\u7269\u7c7b\u4f3c\uff0c\u53ef\u4ee5\u76f4\u63a5\u5728\u672c\u5730\u8fd0\u884c\uff0c\u4e0d\u4f9d\u8d56CLR\u3002\\n\\n\u800cC#\u8bed\u8a00\u7ec8\u4e8e.NET7\u4e2d\u5f15\u5165\u4e86AOT\u7f16\u8bd1\u5668\uff0c\u610f\u5473\u7740\u80fd\u591f\u7f16\u5199\u51fa\u4e0d\u4f9d\u8d56.net\u8fd0\u884c\u65f6\u7684\u7a0b\u5e8f\u4e86\uff0c\u5373\u4f7fAOT\u7f16\u8bd1\u5b58\u5728\u4e00\u4e9b\u9650\u5236\u3002\u4f46\u5b83\u4f9d\u7136\u4e3a\u5176\u5b83\u8bed\u8a00\u8c03\u7528c#\u7684\u4e92\u64cd\u4f5c\u63d0\u4f9b\u4e86\u4e00\u79cd\u66f4\u7b80\u5355\u7684\u65b9\u6cd5\u3002\\n\\n\\n## C++\u8fd0\u884c\u65f6\u52a8\u6001\u94fe\u63a5\\n\u57fa\u4e8eAOT\u7684\u4e92\u64cd\u4f5c\uff0c\u5176\u57fa\u672c\u539f\u7406\u662fC#\u4ee3\u7801\u4f7f\u7528AOT\u7f16\u8bd1\uff0c\u5e76\u4f7f\u7528\u6807\u51c6C\u5bfc\u51fa\u51fd\u6570\uff1bC++\u5c31\u53ef\u4ee5\u5728\u8fd0\u884c\u65f6\u52a8\u6001\u94fe\u63a5dll\uff0c\u83b7\u53d6\u5230\u5bf9\u5e94\u540d\u79f0\u7684\u51fd\u6570\u5e76\u8c03\u7528\u3002\u6b64\u5904\u9700\u8981\u533a\u5206\u8fd0\u884c\u65f6\u94fe\u63a5\u548c\u52a8\u6001\u94fe\u63a5\u3002\u6211\u4eec\u5e73\u65f6\u8bf4\u7684\u52a8\u6001\u94fe\u63a5\u5176\u5b9e\u6307\u7684\u662f\u7f16\u8bd1\u65f6\u52a8\u6001\u94fe\u63a5\uff0c\u4e3a\u65b9\u4fbf\u8bf4\u660e\uff0c\u4e0b\u9762\u5217\u51fa\u6240\u6709\u7684c++\u94fe\u63a5\u65b9\u5f0f\uff1a\\n\\n\\n| \u94fe\u63a5\u65b9\u5f0f | \u7f16\u8bd1\u65f6\u4f9d\u8d56 | \u8fd0\u884c\u65f6\u4f9d\u8d56 | \u94fe\u63a5\u6267\u884c \\n|--|--|--|--|\\n| \u9759\u6001\u94fe\u63a5 | \u9759\u6001\u94fe\u63a5\u5e93\u548c\u5934\u6587\u4ef6 | \u65e0 | \u7f16\u8bd1\u65f6 \\n| \u7f16\u8bd1\u65f6\u52a8\u6001\u94fe\u63a5 | \u52a8\u6001\u94fe\u63a5\u5bfc\u5165\u5e93\u548c\u5934\u6587\u4ef6 | \u52a8\u6001\u94fe\u63a5\u5e93 | \u7a0b\u5e8f\u542f\u52a8\u65f6\\n| \u8fd0\u884c\u65f6\u52a8\u6001\u94fe\u63a5 | \u65e0 | \u52a8\u6001\u94fe\u63a5\u5e93 | \u7a0b\u5e8f\u8fd0\u884c\u65f6\u7684\u4efb\u610f\u65f6\u523b \\n\\n\u7531\u4e8eC#\u7ecf\u8fc7AOT\u7f16\u8bd1\u540e\u53ea\u8f93\u51fa\u52a8\u6001\u94fe\u63a5\u5e93\u6587\u4ef6\uff0c\u6240\u4ee5\u6211\u4eec\u5728C++\u4e2d\u4f7f\u7528\u65f6\u9700\u91c7\u53d6\u8fd0\u884c\u65f6\u52a8\u6001\u94fe\u63a5\u7684\u65b9\u5f0f\u3002\u5177\u4f53\u5b9e\u73b0\u53ef\u5206\u4e3a`Windows`\u548c`Linux`:\\n\\n- Windows\u4e0b\u4f7f\u7528[`LoadLibrary`](https://learn.microsoft.com/zh-cn/windows/win32/api/libloaderapi/nf-libloaderapi-loadlibraryw)\u51fd\u6570\u52a0\u8f7d\u52a8\u6001\u94fe\u63a5\u5e93\uff0c\u4e4b\u540e\u4f7f\u7528[`GetProcAddress`](https://learn.microsoft.com/zh-cn/windows/win32/api/libloaderapi/nf-libloaderapi-getprocaddress)\u51fd\u6570\u83b7\u53d6\u7b26\u53f7\u540d\u79f0\u5bf9\u5e94\u7684\u5730\u5740\\n- Linux\u4e0b\u5bf9\u5e94\u51fd\u6570\u4e3a`dlopen`\u548c`dlsym`\\n\\n## \u4f7f\u7528 .NET AOT\u5b9e\u73b0C++\u8c03\u7528C#\u4ee3\u7801\u7684\u793a\u4f8b\\n### C#\u9879\u76ee\u5efa\u7acb\u4e0e\u914d\u7f6e\\n\\n> \u9700\u8981\u4f7f\u7528VS2022\u5e76\u5b89\u88c5.NET7 SDK\\n\\n\u7b2c\u4e00\u6b65\uff0c\u65b0\u5efa\u4e00\u4e2aC#\u7c7b\u5e93\u9879\u76ee\uff0c\u5e76\u5728\u540e\u7eed\u6b65\u9aa4\u4e2d\u9009\u62e9.NET7\\n\\n\u7b2c\u4e8c\u6b65\uff0c\u5728\u516c\u5171\u7c7b\u4e2d\u6dfb\u52a0**\u9759\u6001\u516c\u5171\u65b9\u6cd5**\uff0c\u5e76\u6dfb\u52a0`[UnmanagedCallersOnly]`\u7279\u6027\u3002\u4ee5\u4e0b\u793a\u4f8b\u4ee3\u7801\u5b9e\u73b0\u4e00\u4e2a\u53ef\u88abc++\u8c03\u7528\u7684\u83b7\u53d6\u65e5\u671f\u662f\u661f\u671f\u51e0\u7684\u51fd\u6570\uff1a\\n\\n```cs\\n[UnmanagedCallersOnly(EntryPoint = \\"GetDayOfWeek\\")]\\npublic static int GetDayOfWeek(nint lpDate, nint lpDay)\\n{\\n    try\\n    {\\n        var dateStr = Marshal.PtrToStringUni(lpDate);\\n        if (string.IsNullOrEmpty(dateStr)) return -1;\\n\\n        var dateTime = DateTime.Parse(dateStr);\\n\\n        Marshal.StructureToPtr(dateTime.DayOfWeek, lpDay, false);\\n        return 0;\\n    }\\n    catch\\n    {\\n        return -1;\\n    }\\n}\\n```\\n\u8be5\u51fd\u6570\u7b26\u5408c\u98ce\u683capi\uff0c\u4f7f\u7528`lpDate`\u6307\u9488\u4f20\u5165\u65e5\u671f\u5b57\u7b26\u4e32\uff0c\u4f7f\u7528`lpDay`\u6307\u9488\u4f20\u51fa\u661f\u671f\u51e0\u7684\u6574\u6570\uff0c\u5e76\u4f7f\u7528\u8fd4\u56de\u503c\u6807\u5fd7\u51fd\u6570\u6267\u884c\u662f\u5426\u6210\u529f\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4ee3\u7801\u4f7f\u7528`Marshal.PtrToStringUni`\u65b9\u6cd5\u4ece\u6307\u9488\u8bfb\u5165\u5b57\u7b26\u4e32\uff0c\u5e76\u4f7f\u7528`Marshal.StructureToPtr`\u65b9\u6cd5\u5c06\u6570\u636e\u5199\u5165\u6307\u9488\u3002\u5982\u679c\u5f00\u542f\u4e0d\u5b89\u5168\u4ee3\u7801\uff0c\u53ef\u4ee5\u76f4\u63a5\u5728C#\u4e2d\u4f7f\u7528\u6307\u9488\uff0c\u4ee5\u4e0a\u4ee3\u7801\u53ef\u6539\u5199\u4e3a\uff1a\\n\\n```cs\\n[UnmanagedCallersOnly(EntryPoint = \\"GetDayOfWeek\\")]\\npublic unsafe static int GetDayOfWeek(char* lpDate, int* lpDay)\\n{\\n    try\\n    {\\n        var dateStr = new string(lpDate);\\n        if (string.IsNullOrEmpty(dateStr)) return -1;\\n\\n        var dateTime = DateTime.Parse(dateStr);\\n\\n        *lpDay = (int)dateTime.DayOfWeek;\\n        return 0;\\n    }\\n    catch\\n    {\\n        return -1;\\n    }\\n}\\n```\\n\u8fd9\u6837\u5199\u7684\u597d\u5904\u662f\u4ee3\u7801\u66f4\u6e05\u6670\u660e\u4e86\uff0c\u4f46\u4e5f\u589e\u52a0\u4e86\u6307\u9488\u8d8a\u754c\u7684\u98ce\u9669\u3002\\n\\n\u7b2c\u4e09\u6b65\uff0c\u5728\u9879\u76ee\u914d\u7f6e\u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9\uff1a\\n\\n```xml\\n<PublishAot>true</PublishAot>\\n```\\n\u4ee5\u4e0a\u9009\u9879\u5f00\u542fAOT\u7f16\u8bd1\u3002\\n\u63a5\u7740\u8fdb\u884c\u53d1\u5e03\uff0c\u521b\u5efa\u53d1\u5e03\u914d\u7f6e\u540e\uff0c\u4fee\u6539\u76ee\u6807\u8fd0\u884c\u65f6\u4e3a\u5bf9\u5e94\u5e73\u53f0\uff0c\u4fdd\u5b58\u540e\u70b9\u51fb\u53d1\u5e03\uff0c\u5728`bin\\\\Release\\\\net7.0\\\\publish\\\\win-x64`\u76ee\u5f55\u4e0b\u53ef\u4ee5\u770b\u5230\u7f16\u8bd1\u8f93\u51fa\u7684dll\u3002\\n\\n> .net7\u4ec5\u652f\u6301\u53d1\u5e03\u65f6AOT\uff0c.net8\u5c06\u652f\u6301\u7f16\u8bd1\u65f6AOT\\n\\n### C++\u8c03\u7528\u793a\u4f8b\\n\u65b0\u5efa\u4e00\u4e2ac++\u63a7\u5236\u53f0\u9879\u76ee\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a\\n\\n```cpp\\n#include <iostream>\\n#include <Windows.h>\\n\\n// \u58f0\u660eC#\u4e2d\u5b9a\u4e49\u7684\u51fd\u6570\u5f62\u5f0f\\ntypedef HRESULT (*GetDayOfWeakProc)(LPCWSTR, LPDWORD);\\n\\nint main()\\n{\\n    // \u52a8\u6001\u52a0\u8f7ddll\\n    HMODULE hAotDll = LoadLibrary(L\\"AOTDemoLib.dll\\");\\n    if (hAotDll == NULL) return -1;\\n\\n    // \u83b7\u53d6\u51fd\u6570\u6307\u9488\\n    GetDayOfWeakProc getDayOfWeak = (GetDayOfWeakProc)GetProcAddress(hAotDll, \\"GetDayOfWeek\\");\\n    if (getDayOfWeak == NULL) return -1;\\n\\n    DWORD iDayOfWeek = 0;\\n    // \u4f2a\u51fd\u6570\u5f62\u5f0f\u8c03\u7528C#\u4e2d\u5bfc\u51fa\u7684\u51fd\u6570\\n    HRESULT hr = getDayOfWeak(L\\"2023/07/05\\", &iDayOfWeek);\\n    if (FAILED(hr)) return hr;\\n\\n    std::cout << \\"2023/07/05 is day\\" << iDayOfWeek;\\n    return 0;\\n}\\n```\\n**\u5728\u8fd0\u884c\u4e4b\u524d\uff0c\u9700\u8981\u628aC#\u8f93\u51fa\u7684dll\u590d\u5236\u5230c++\u7684\u8f93\u51fa\u76ee\u5f55\u4e2d\uff1a**\\n\\n> \u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u7f16\u8bd1\u524d\u811a\u672c\u81ea\u52a8\u5b9e\u73b0\u8fd9\u4e00\u6b65\\n\\n\u7136\u540e\u8fd0\u884c\uff0c\u53ef\u4ee5\u770b\u5230\u6b63\u786e\u7684\u8f93\u51fa\u7ed3\u679c\uff0c\u53732023\u5e747\u67085\u65e5\u662f\u5468\u4e09\u3002"},{"id":"friends","metadata":{"permalink":"/blog/friends","source":"@site/blog/2023-10-07-friends.md","title":"\u53cb\u60c5\u94fe\u63a5","description":"","date":"2023-10-07T00:00:00.000Z","formattedDate":"October 7, 2023","tags":[],"readingTime":0,"hasTruncateMarker":false,"authors":[{"name":"Token\u56e2\u961f","title":"\u52a1\u5b9e \xb7 \u9ad8\u6548 \xb7 \u6587\u5316 \xb7 \u89c4\u8303","url":"https://itoken.team","image_url":"https://itoken.team/static/media/favicon.ico","imageURL":"https://itoken.team/static/media/favicon.ico"},{"name":"DGGua","title":"CS student @wuhan University of Technology","url":"https://github.com/DGGua","image_url":"https://github.com/DGGua.png","imageURL":"https://github.com/DGGua.png"},{"name":"DismissedLight","title":"barely did nothing.","url":"https://github.com/Lightczx","image_url":"https://github.com/Lightczx.png","imageURL":"https://github.com/Lightczx.png"},{"name":"FeliksLv","title":"FeliksLv","url":"https://blog.kcqnly.club","image_url":"https://github.com/FeliksLv01.png","imageURL":"https://github.com/FeliksLv01.png"},{"name":"Misaka","title":"\u7a77\u5219\u72ec\u5584\u5176\u8eab\uff0c\u8fbe\u5219\u517c\u6d4e\u5929\u4e0b","url":"https://www.amghank.cn","image_url":"https://github.com/ganyunhan.png","imageURL":"https://github.com/ganyunhan.png"},{"name":"Platelets","title":"Master from HUST.","url":"https://github.com/CodingPlatelets","image_url":"https://github.com/CodingPlatelets.png","imageURL":"https://github.com/CodingPlatelets.png"},{"name":"Perinze","title":"Perinze","url":"https://github.com/Perinze","image_url":"https://github.com/Perinze.png","imageURL":"https://github.com/Perinze.png"},{"name":"Saicem","title":"Do something fun.","url":"https://github.com/Saicem","image_url":"https://github.com/Saicem.png","imageURL":"https://github.com/Saicem.png"}],"frontMatter":{"slug":"friends","title":"\u53cb\u60c5\u94fe\u63a5","authors":[{"name":"Token\u56e2\u961f","title":"\u52a1\u5b9e \xb7 \u9ad8\u6548 \xb7 \u6587\u5316 \xb7 \u89c4\u8303","url":"https://itoken.team","image_url":"https://itoken.team/static/media/favicon.ico","imageURL":"https://itoken.team/static/media/favicon.ico"},{"name":"DGGua","title":"CS student @wuhan University of Technology","url":"https://github.com/DGGua","image_url":"https://github.com/DGGua.png","imageURL":"https://github.com/DGGua.png"},{"name":"DismissedLight","title":"barely did nothing.","url":"https://github.com/Lightczx","image_url":"https://github.com/Lightczx.png","imageURL":"https://github.com/Lightczx.png"},{"name":"FeliksLv","title":"FeliksLv","url":"https://blog.kcqnly.club","image_url":"https://github.com/FeliksLv01.png","imageURL":"https://github.com/FeliksLv01.png"},{"name":"Misaka","title":"\u7a77\u5219\u72ec\u5584\u5176\u8eab\uff0c\u8fbe\u5219\u517c\u6d4e\u5929\u4e0b","url":"https://www.amghank.cn","image_url":"https://github.com/ganyunhan.png","imageURL":"https://github.com/ganyunhan.png"},{"name":"Platelets","title":"Master from HUST.","url":"https://github.com/CodingPlatelets","image_url":"https://github.com/CodingPlatelets.png","imageURL":"https://github.com/CodingPlatelets.png"},{"name":"Perinze","title":"Perinze","url":"https://github.com/Perinze","image_url":"https://github.com/Perinze.png","imageURL":"https://github.com/Perinze.png"},{"name":"Saicem","title":"Do something fun.","url":"https://github.com/Saicem","image_url":"https://github.com/Saicem.png","imageURL":"https://github.com/Saicem.png"}]},"prevItem":{"title":"C#\u4e0eC++\u4e92\u64cd\u4f5c\u6280\u672f\u6982\u8ff0","permalink":"/blog/cs-cpp-interop"}},"content":""}]}')}}]);