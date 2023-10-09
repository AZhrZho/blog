"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[822],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},p=Object.keys(e);for(i=0;i<p.length;i++)t=p[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(i=0;i<p.length;i++)t=p[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),s=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return i.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||p;return t?i.createElement(g,o(o({ref:n},c),{},{components:t})):i.createElement(g,o({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,o=new Array(p);o[0]=m;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r[u]="string"==typeof e?e:a,o[1]=r;for(var s=2;s<p;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6564:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>p,metadata:()=>r,toc:()=>s});var i=t(7462),a=(t(7294),t(3905));const p={slug:"run-wpf-on-generic-host",title:"\u5982\u4f55\u4f18\u96c5\u5730\u4e3aWPF\u6dfb\u52a0\u4f9d\u8d56\u6ce8\u5165",authors:"AZ",tags:["c#","wpf"]},o=void 0,r={permalink:"/blog/run-wpf-on-generic-host",source:"@site/blog/2023-10-09-run-wpf-on-generic-host/index.md",title:"\u5982\u4f55\u4f18\u96c5\u5730\u4e3aWPF\u6dfb\u52a0\u4f9d\u8d56\u6ce8\u5165",description:"WPF\u4f5c\u4e3a\u4e00\u95e8\u53e4\u8001\u7684\u6280\u672f\uff0c\u5728\u5f53\u524d\u4ecd\u7136\u4e3aWindows\u5ba2\u6237\u7aef\u5f00\u53d1\u7684\u9996\u9009\u6846\u67b6\u4e4b\u4e00\u3002\u867d\u7136WPF\u5e76\u4e0d\u8fc7\u65f6\uff0c\u4f46\u4e0d\u5c11\u5f00\u53d1\u8005\u4e5f\u5e0c\u671b\u5c06\u4e00\u4e9b\u73b0\u4ee3\u5316\u7684\u6280\u672f\u5f15\u5165\u5176\u4e2d\uff0c\u4ee5\u63d0\u9ad8\u5f00\u53d1\u4f53\u9a8c\uff0c\u5982\u4f9d\u8d56\u6ce8\u5165\u3002\u4f9d\u8d56\u6ce8\u5165\u65e9\u5df2\u4e0d\u662f\u65b0\u9c9c\u6280\u672f\uff0c\u4f46\u4f5c\u4e3aC#\u5f00\u53d1\u8005\uff0c\u6211\u4eec\u60f3\u8981\u7684\u66f4\u591a\u3002",date:"2023-10-09T00:00:00.000Z",formattedDate:"October 9, 2023",tags:[{label:"c#",permalink:"/blog/tags/c"},{label:"wpf",permalink:"/blog/tags/wpf"}],readingTime:6.895,hasTruncateMarker:!0,authors:[{name:"zhuoqiang.li",title:"\u662f\u4e2a\u5b66\u751f",url:"https://github.com/AZhrZho",imageURL:"https://github.com/AZhrZho.png",key:"AZ"}],frontMatter:{slug:"run-wpf-on-generic-host",title:"\u5982\u4f55\u4f18\u96c5\u5730\u4e3aWPF\u6dfb\u52a0\u4f9d\u8d56\u6ce8\u5165",authors:"AZ",tags:["c#","wpf"]},prevItem:{title:"\u57fa\u4e8eDDA\u548cFFMPEG\u7684\u9ad8\u6027\u80fd\u684c\u9762\u6d41\u6355\u83b7",permalink:"/blog/desktop-stream-capture"},nextItem:{title:"C#\u4e0eC++\u4e92\u64cd\u4f5c\u6280\u672f\u6982\u8ff0",permalink:"/blog/cs-cpp-interop"}},l={authorsImageUrls:[void 0]},s=[{value:"\u8bbe\u7f6e\u5165\u53e3\u70b9",id:"\u8bbe\u7f6e\u5165\u53e3\u70b9",level:2},{value:"\u4f7f\u7528Host\u627f\u8f7dWpf\u5e94\u7528",id:"\u4f7f\u7528host\u627f\u8f7dwpf\u5e94\u7528",level:2},{value:"\u5982\u4f55\u4f18\u96c5\u5730\u5173\u95ed\u5e94\u7528",id:"\u5982\u4f55\u4f18\u96c5\u5730\u5173\u95ed\u5e94\u7528",level:2}],c={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"WPF\u4f5c\u4e3a\u4e00\u95e8\u53e4\u8001\u7684\u6280\u672f\uff0c\u5728\u5f53\u524d\u4ecd\u7136\u4e3aWindows\u5ba2\u6237\u7aef\u5f00\u53d1\u7684\u9996\u9009\u6846\u67b6\u4e4b\u4e00\u3002\u867d\u7136WPF\u5e76\u4e0d\u8fc7\u65f6\uff0c\u4f46\u4e0d\u5c11\u5f00\u53d1\u8005\u4e5f\u5e0c\u671b\u5c06\u4e00\u4e9b\u73b0\u4ee3\u5316\u7684\u6280\u672f\u5f15\u5165\u5176\u4e2d\uff0c\u4ee5\u63d0\u9ad8\u5f00\u53d1\u4f53\u9a8c\uff0c\u5982\u4f9d\u8d56\u6ce8\u5165\u3002\u4f9d\u8d56\u6ce8\u5165\u65e9\u5df2\u4e0d\u662f\u65b0\u9c9c\u6280\u672f\uff0c\u4f46\u4f5c\u4e3aC#\u5f00\u53d1\u8005\uff0c\u6211\u4eec\u60f3\u8981\u7684\u66f4\u591a\u3002"),(0,a.kt)("h1",{id:"\u4e3a\u4ec0\u4e48\u8981\u4f9d\u8d56\u6ce8\u5165"},"\u4e3a\u4ec0\u4e48\u8981\u4f9d\u8d56\u6ce8\u5165"),(0,a.kt)("p",null,"\u5982\u679c\u53ea\u662f\u4e3a\u4e86\u4f7f\u7528\u4f9d\u8d56\u6ce8\u5165\uff0c\u90a3\u4e48\u5b9e\u73b0\u8d77\u6765\u975e\u5e38\u5bb9\u6613\u3002\u4e00\u822c\u7684\u505a\u6cd5\u662f\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"Application.OnStartUp()"),"\u4e2d\u6ce8\u518c\u670d\u52a1\u5e76\u521b\u5efa",(0,a.kt)("inlineCode",{parentName:"p"},"IServiceProvider"),"\u5bf9\u8c61\u3002\u800c\u672c\u6587\u63a2\u8ba8\u7684\u5e76\u975e\u662f\u5355\u7eaf\u7684\u4f9d\u8d56\u6ce8\u5165\uff0c\u800c\u662f\u5e0c\u671b\u5728\u901a\u7528\u4e3b\u673a\u4e2d\u8fd0\u884cWPF\u5e94\u7528\uff0c\u7c7b\u4f3cASP.Net\u5e94\u7528\u3002"),(0,a.kt)("admonition",{title:"\u901a\u7528\u4e3b\u673a(Generic Host)",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u901a\u7528\u4e3b\u673a\u662f\u5c01\u88c5\u5e94\u7528\u8d44\u6e90\u548c\u751f\u5b58\u671f\u529f\u80fd\u7684\u5bf9\u8c61\uff0c\u4e3b\u8981\u529f\u80fd\u6709\uff1a"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u4f9d\u8d56\u6ce8\u5165"),(0,a.kt)("li",{parentName:"ul"},"\u65e5\u5fd7"),(0,a.kt)("li",{parentName:"ul"},"\u914d\u7f6e"),(0,a.kt)("li",{parentName:"ul"},"IHostedService"))),(0,a.kt)("p",null,"\u7531\u4e8e\u901a\u7528\u4e3b\u673a\u7684\u901a\u7528\u6027\uff0c\u8bb8\u591a\u73b0\u4ee3\u5316\u7684.NET\u5e93\u90fd\u662f\u9488\u5bf9\u5176\u6784\u5efa\u7684\u3002\u5728\u901a\u7528\u4e3b\u673a\u4e2d\u8fd0\u884cWPF\u5e94\u7528\uff0c\u4e5f\u5c31\u610f\u5473\u7740\u80fd\u591f\u5728WPF\u5e94\u7528\u4e2d\u4f7f\u7528\u8fd9\u4e9b\u5e93\u63d0\u4f9b\u7684\u4e30\u5bcc\u529f\u80fd\u4e86\u3002"),(0,a.kt)("h1",{id:"\u5982\u4f55\u5b9e\u73b0"},"\u5982\u4f55\u5b9e\u73b0"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4ece\u9ed8\u8ba4\u7684Wpf\u6a21\u677f\u5f00\u59cb\u8fdb\u884c\u9b54\u6539\u3002\u9ed8\u8ba4Wpf\u5e94\u7528\u6ca1\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"Program.cs"),"\uff0c\u4e5f\u6ca1\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"Main"),"\u65b9\u6cd5\u4f5c\u4e3a\u5165\u53e3\u70b9\uff0c\u800c\u662f\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"APP"),"\u7c7b\u4f5c\u4e3a\u5165\u53e3\u3002\u867d\u7136\u6211\u4eec\u53ef\u4ee5\u5728APP\u7c7b\u4e2d\u6784\u9020Host\uff0c\u4f46\u8fd9\u6837\u542c\u8d77\u6765\u5c31\u4e0d\u4f18\u96c5\u3002Host\u4f5c\u4e3a\u627f\u8f7d\u6574\u4e2a\u5e94\u7528\u7684\u5bf9\u8c61\uff0c\u5e94\u8be5\u5148\u4e8eAPP\u6784\u9020\u3002"),(0,a.kt)("h2",{id:"\u8bbe\u7f6e\u5165\u53e3\u70b9"},"\u8bbe\u7f6e\u5165\u53e3\u70b9"),(0,a.kt)("p",null,"C#\u5e94\u7528\u7684\u5165\u53e3\u70b9\u4e00\u822c\u90fd\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"Main"),"\uff0cWpf\u5e94\u7528\u4e3a\u4ec0\u4e48\u4e0d\u662f\uff1f\u4e8b\u51fa\u53cd\u5e38\u5fc5\u6709\u5996\uff0c\u89c2\u5bdf",(0,a.kt)("inlineCode",{parentName:"p"},"App"),"\u7c7b\u7684\u5b9a\u4e49\uff0c\u53d1\u73b0\u5b83\u662f\u4e2a\u5206\u90e8\u7c7b\uff0c\u901a\u8fc7\u5f15\u7528\u8ffd\u8e2a\u627e\u5230\u5b83\u7684\u53e6\u4e00\u90e8\u5206\uff0c\u679c\u7136\u662f\u7531\u5de5\u5177\u81ea\u52a8\u751f\u6210\u7684\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'public partial class App : System.Windows.Application \n{\n    [System.Diagnostics.DebuggerNonUserCodeAttribute()]\n    [System.CodeDom.Compiler.GeneratedCodeAttribute("PresentationBuildTasks", "7.0.9.0")]\n    public void InitializeComponent() {\n        \n        #line 5 "..\\..\\..\\App.xaml"\n        this.StartupUri = new System.Uri("MainWindow.xaml", System.UriKind.Relative);\n        \n        #line default\n        #line hidden\n    }\n    \n    [System.STAThreadAttribute()]\n    [System.Diagnostics.DebuggerNonUserCodeAttribute()]\n    [System.CodeDom.Compiler.GeneratedCodeAttribute("PresentationBuildTasks", "7.0.9.0")]\n    public static void Main() {\n        WpfOnHost.App app = new WpfOnHost.App();\n        app.InitializeComponent();\n        app.Run();\n    }\n}\n')),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u5728\u81ea\u52a8\u751f\u6210\u7684Main\u65b9\u6cd5\u4e2d\uff0c\u521b\u5efa\u4e86App\u7684\u5b9e\u4f8b\u5e76\u521d\u59cb\u5316\uff0c\u7136\u540e\u8fd0\u884c\u3002\u6211\u4eec\u8981\u505a\u7684\u5c31\u662f\u66ff\u6362\u6389\u8fd9\u4e2aMain\u65b9\u6cd5\uff0c\u6539\u7528\u6211\u4eec\u81ea\u5df1\u7684\u3002\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u9879\u76ee\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"EnableDefaultApplicationDefinition"),"\u5c5e\u6027\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"\u4f7fWpf\u5e94\u7528\u4e0d\u81ea\u52a8\u751f\u6210Main\u65b9\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"  <PropertyGroup>\n    <OutputType>WinExe</OutputType>\n    <TargetFramework>net7.0-windows</TargetFramework>\n    <Nullable>enable</Nullable>\n    <UseWPF>true</UseWPF>\n    \x3c!-- highlight-next-line --\x3e\n    <EnableDefaultApplicationDefinition>false</EnableDefaultApplicationDefinition>\n  </PropertyGroup>\n")),(0,a.kt)("p",null,"\u91cd\u65b0\u751f\u6210\u9879\u76ee\uff0c\u518d\u770b\u81ea\u52a8\u751f\u6210\u7684\u90e8\u5206\uff0c\u5df2\u7ecf\u6ca1\u6709Main\u65b9\u6cd5\u4e86\u3002\u8fd9\u65f6\u6211\u4eec\u5c31\u53ef\u4ee5\u65b0\u5efa\u81ea\u5df1\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Program.cs"),"\u4e86\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="Program.cs"',title:'"Program.cs"'},"class Program\n{\n    [STAThread]\n    public static void Main(string[] args)\n    {\n        var app = new App();\n        app.Run(new MainWindow());\n    }\n}\n")),(0,a.kt)("p",null,"\u4e3a\u4e86\u4fdd\u8bc1App\u7c7b\u6b63\u786e\u521d\u59cb\u5316\uff0c\u628a",(0,a.kt)("inlineCode",{parentName:"p"},"InitializeComponent()"),"\u653e\u5230App\u7684\u6784\u9020\u5668\u4e2d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="App.xaml.cs"',title:'"App.xaml.cs"'},"public partial class App : Application\n{\n    public App()\n    {\n        InitializeComponent();\n    }\n}\n")),(0,a.kt)("p",null,"\u5e76\u987a\u624b\u628a",(0,a.kt)("inlineCode",{parentName:"p"},"App.xaml"),"\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},'StartupUri="MainWindow.xaml"'),"\u5220\u6389\u3002\u6b64\u65f6\u5e94\u7528\u5e94\u8be5\u662f\u53ef\u4ee5\u6b63\u5e38\u8fd0\u884c\u5e76\u663e\u793a\u4e3b\u7a97\u53e3\u7684\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528host\u627f\u8f7dwpf\u5e94\u7528"},"\u4f7f\u7528Host\u627f\u8f7dWpf\u5e94\u7528"),(0,a.kt)("p",null,"\u6dfb\u52a0\u4f9d\u8d56\u6ce8\u5165\u548c\u901a\u7528\u4e3b\u673a\u7684\u4f9d\u8d56\u5230\u9879\u76ee\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'  <ItemGroup>\n    <PackageReference Include="Microsoft.Extensions.DependencyInjection" Version="7.0.0" />\n    <PackageReference Include="Microsoft.Extensions.Hosting" Version="7.0.1" />\n  </ItemGroup>\n')),(0,a.kt)("p",null,"\u6539\u5199",(0,a.kt)("inlineCode",{parentName:"p"},"Program.cs"),"\uff0c\u521b\u5efa\u5e76\u8fd0\u884cHost\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="Program.cs"',title:'"Program.cs"'},"[STAThread]\nclass Program\n{\n    public static void Main(string[] args)\n    {\n        var hostBuilder = Host.CreateDefaultBuilder(args);\n\n        hostBuilder.ConfigureServices(services =>\n        {\n            // \u914d\u7f6e\u670d\u52a1\u548c\u4f9d\u8d56\u6ce8\u5165\n        });\n\n        hostBuilder.Build().Run();\n    }\n}\n")),(0,a.kt)("p",null,"\u73b0\u5728\u7684\u95ee\u9898\u5c31\u662f\u5982\u4f55\u5728Host\u4e2d\u8fd0\u884cWpf\u5e94\u7528\u3002\u6700\u4f18\u96c5\u7684\u505a\u6cd5\u663e\u7136\u662f\u5c06Wpf\u5e94\u7528\u4f5c\u4e3a\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"HostedService"),"\u8fd0\u884c\uff0c\u540c\u65f6\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"App"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"MainWindow"),"\u90fd\u6ce8\u5165\u5230\u5bb9\u5668\u4e2d\u3002\u4e3a\u6b64\u9700\u8981\u5b9e\u73b0\u4e00\u4e2a\u901a\u7528\u7684WpfHostedService\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="WpfHostedService.cs"',title:'"WpfHostedService.cs"'},"class WpfHostedService<TApplication, TMainWindow> : IHostedService\n        where TApplication : Application\n        where TMainWindow : Window\n{\n    public WpfHostedService(TApplication application, TMainWindow mainWindow)\n    {\n        this.application = application;\n        this.mainWindow = mainWindow;\n    }\n\n    private readonly TApplication application;\n    private readonly TMainWindow mainWindow;\n\n    public Task StartAsync(CancellationToken cancellationToken)\n    {\n        application.Run(mainWindow);\n        return Task.CompletedTask;\n    }\n\n    public Task StopAsync(CancellationToken cancellationToken)\n    {\n        return Task.CompletedTask;\n    }\n}\n")),(0,a.kt)("p",null,"\u7136\u540e\u5728\u914d\u7f6e\u4e2d\u8fdb\u884c\u6ce8\u5165\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="Program.cs"',title:'"Program.cs"'},"hostBuilder.ConfigureServices(services =>\n{\n    // \u914d\u7f6e\u670d\u52a1\u548c\u4f9d\u8d56\u6ce8\u5165\n    // highlight-start\n    services.AddSingleton<App>();\n    services.AddTransient<MainWindow>();\n    services.AddHostedService<WpfHostedService<App, MainWindow>>();\n    // highlight-end\n});\n")),(0,a.kt)("p",null,"\u6b64\u65f6\u5e94\u7528\u80fd\u591f\u6b63\u5e38\u8fd0\u884c\uff0c\u4e14\u4eceApp\u5f00\u59cb\u5c31\u652f\u6301\u4f7f\u7528Host\u4e2d\u7684\u5168\u90e8\u529f\u80fd\u4e86\u3002"),(0,a.kt)("h2",{id:"\u5982\u4f55\u4f18\u96c5\u5730\u5173\u95ed\u5e94\u7528"},"\u5982\u4f55\u4f18\u96c5\u5730\u5173\u95ed\u5e94\u7528"),(0,a.kt)("p",null,"\u5e94\u7528\u867d\u7136\u53ef\u4ee5\u6b63\u5e38\u542f\u52a8\uff0c\u4f46\u662f\u5173\u95ed\u4e3b\u7a97\u53e3\u540e\u8fdb\u7a0b\u4e0d\u4f1a\u7ed3\u675f\u3002\u8fd9\u65f6\u56e0\u4e3a\u867d\u7136\u5173\u95ed\u4e3b\u7a97\u53e3\u540eWpf\u7684Application\u5df2\u7ecfShutdown\u4e86\uff0c\u4f46\u7ed3\u675f\u7684\u53ea\u662f\u627f\u8f7dApplication\u7684Service\uff0c\u800cHost\u8fd8\u4f1a\u7ee7\u7eed\u8fd0\u884c\u3002"),(0,a.kt)("p",null,"\u5f53\u7136\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u5173\u95ed\u7a97\u53e3\u65f6\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"Environment.Exit"),"\u76f4\u63a5\u5173\u95ed\u6574\u4e2a\u8fdb\u7a0b\uff0c\u4f46\u8fd9\u6837\u663e\u7136\u4e0d\u4f18\u96c5\u3002\u6b64\u5916\uff0c\u4eceHost\u7684\u58f0\u660e\u5468\u671f\u6765\u8003\u8651\uff0c\u6b63\u786e\u7684\u505a\u6cd5\u5e94\u8be5\u662fHost\u7684\u5173\u95ed\u5f15\u8d77Application\u7684\u5173\u95ed\uff0c\u5728Host\u5173\u95ed\u4e4b\u524d\uff0cApplication\u4e0d\u5e94\u5f53\u5173\u95ed\u3002\u6362\u53e5\u8bdd\u8bf4\uff0cApplication\u7684\u751f\u547d\u5468\u671f\u5e94\u4f9d\u8d56\u4e8eHost\uff0c\u800c\u4e0e\u4e3b\u7a97\u53e3\u65e0\u5173\u3002"),(0,a.kt)("p",null,"Host\u4e5f\u63d0\u4f9b\u4e86\u751f\u547d\u5468\u671f\u7ba1\u7406\u5bf9\u8c61\uff0c\u901a\u8fc7\u5b83\u53ef\u4ee5\u4f18\u96c5\u5730\u5173\u95ed\u6574\u4e2aHost"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="WpfHostedService.cs"',title:'"WpfHostedService.cs"'},"class WpfHostedService<TApplication, TMainWindow> : IHostedService\n        where TApplication : Application\n        where TMainWindow : Window\n{\n    public WpfHostedService(TApplication application, TMainWindow mainWindow,\n        // highlight-next-line\n        IHostApplicationLifetime hostApplicationLifetime)\n    {\n        this.application = application;\n        this.mainWindow = mainWindow;\n\n        // Host\u5173\u95ed\u65f6\uff0c\u5173\u95edApplication\n        // highlight-next-line\n        hostApplicationLifetime.ApplicationStopping.Register(application.Shutdown);\n    }\n\n    // ...\n\n    public Task StartAsync(CancellationToken cancellationToken)\n    {\n        // \u8bbe\u7f6eApplication\u58f0\u660e\u5468\u671f\u4e0eMainWindow\u65e0\u5173\n        // highlight-next-line\n        application.ShutdownMode = ShutdownMode.OnExplicitShutdown;\n        application.Run(mainWindow);\n        return Task.CompletedTask;\n    }\n\n    // ...\n}\n")),(0,a.kt)("p",null,"\u5728\u9700\u8981\u5173\u95ed\u5e94\u7528\u7684\u5730\u65b9\uff0c\u6ce8\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"IHostApplicationLifetime"),"\u5bf9\u8c61\u5e76\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"StopApplication()"),"\uff0c\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="MainWindow.xaml.cs"',title:'"MainWindow.xaml.cs"'},"public partial class MainWindow : Window\n{\n    public MainWindow(IHostApplicationLifetime hostApplicationLifetime)\n    {\n        InitializeComponent();\n        this.hostApplicationLifetime = hostApplicationLifetime;\n    }\n\n    private readonly IHostApplicationLifetime hostApplicationLifetime;\n\n    protected override void OnClosed(EventArgs e)\n    {\n        // highlight-next-line\n        hostApplicationLifetime.StopApplication();\n    }\n}\n")),(0,a.kt)("p",null,"\u8fd9\u6837\u5c31\u5b9e\u73b0\u4e86Wpf\u5e94\u7528\u7684\u751f\u547d\u5468\u671f\u4e0eHost\u540c\u6b65\u3002"),(0,a.kt)("h1",{id:"\u5c01\u88c5\u8d77\u6765"},"\u5c01\u88c5\u8d77\u6765"),(0,a.kt)("p",null,"\u8fd9\u4e48\u4f18\u96c5\u7684\u4e1c\u897f\uff0c\u5982\u679c\u80fd\u590d\u7528\u5c31\u66f4\u4f18\u96c5\u4e86\u3002\u4f5c\u8005\u5c06\u5176\u5c01\u88c5\u4e3a\u4e00\u4e2a\u5305",(0,a.kt)("inlineCode",{parentName:"p"},"AyatoPack"),"\uff0c\u4f7f\u7528\u65f6\u53ea\u9700\u8981\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="Program.cs"',title:'"Program.cs"'},"AyatoHost.Run<App, MainWindow>(args, hostBuilder =>\n{\n    // \u5728\u8fd9\u91cc\u914d\u7f6e\u5176\u4ed6\u670d\u52a1\u548c\u4f9d\u8d56\u6ce8\u5165\n});\n")),(0,a.kt)("p",null,"\u6e90\u7801\u5728",(0,a.kt)("a",{parentName:"p",href:"https://github.com/AZhrZho"},"\u8fd9\u91cc"),"\uff0c\u6b22\u8fce\u54c1\u9274\u3002"))}d.isMDXComponent=!0}}]);