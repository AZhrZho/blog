---
slug: run-wpf-on-generic-host
title: 如何优雅地为WPF添加依赖注入
authors: AZ
tags: [c#, wpf]
---

WPF作为一门古老的技术，在当前仍然为Windows客户端开发的首选框架之一。虽然WPF并不过时，但不少开发者也希望将一些现代化的技术引入其中，以提高开发体验，如依赖注入。依赖注入早已不是新鲜技术，但作为C#开发者，我们想要的更多。

<!--truncate-->

# 为什么要依赖注入

如果只是为了使用依赖注入，那么实现起来非常容易。一般的做法是在`Application.OnStartUp()`中注册服务并创建`IServiceProvider`对象。而本文探讨的并非是单纯的依赖注入，而是希望在通用主机中运行WPF应用，类似ASP.Net应用。

:::tip 通用主机(Generic Host)

通用主机是封装应用资源和生存期功能的对象，主要功能有：
- 依赖注入
- 日志
- 配置
- IHostedService

:::

由于通用主机的通用性，许多现代化的.NET库都是针对其构建的。在通用主机中运行WPF应用，也就意味着能够在WPF应用中使用这些库提供的丰富功能了。

# 如何实现
我们可以从默认的Wpf模板开始进行魔改。默认Wpf应用没有`Program.cs`，也没有`Main`方法作为入口点，而是以`APP`类作为入口。虽然我们可以在APP类中构造Host，但这样听起来就不优雅。Host作为承载整个应用的对象，应该先于APP构造。

## 设置入口点
C#应用的入口点一般都是`Main`，Wpf应用为什么不是？事出反常必有妖，观察`App`类的定义，发现它是个分部类，通过引用追踪找到它的另一部分，果然是由工具自动生成的：

```cs
public partial class App : System.Windows.Application 
{
    [System.Diagnostics.DebuggerNonUserCodeAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("PresentationBuildTasks", "7.0.9.0")]
    public void InitializeComponent() {
        
        #line 5 "..\..\..\App.xaml"
        this.StartupUri = new System.Uri("MainWindow.xaml", System.UriKind.Relative);
        
        #line default
        #line hidden
    }
    
    [System.STAThreadAttribute()]
    [System.Diagnostics.DebuggerNonUserCodeAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("PresentationBuildTasks", "7.0.9.0")]
    public static void Main() {
        WpfOnHost.App app = new WpfOnHost.App();
        app.InitializeComponent();
        app.Run();
    }
}
```

可以看到，在自动生成的Main方法中，创建了App的实例并初始化，然后运行。我们要做的就是替换掉这个Main方法，改用我们自己的。可以通过设置项目的`EnableDefaultApplicationDefinition`属性为`false`使Wpf应用不自动生成Main方法：

```xml
  <PropertyGroup>
    <OutputType>WinExe</OutputType>
    <TargetFramework>net7.0-windows</TargetFramework>
    <Nullable>enable</Nullable>
    <UseWPF>true</UseWPF>
    <!-- highlight-next-line -->
	<EnableDefaultApplicationDefinition>false</EnableDefaultApplicationDefinition>
  </PropertyGroup>
```

重新生成项目，再看自动生成的部分，已经没有Main方法了。这时我们就可以新建自己的`Program.cs`了。

```cs title="Program.cs"
class Program
{
    [STAThread]
    public static void Main(string[] args)
    {
        var app = new App();
        app.Run(new MainWindow());
    }
}
```

为了保证App类正确初始化，把`InitializeComponent()`放到App的构造器中：

```cs title="App.xaml.cs"
public partial class App : Application
{
    public App()
    {
        InitializeComponent();
    }
}
```

并顺手把`App.xaml`中的`StartupUri="MainWindow.xaml"`删掉。此时应用应该是可以正常运行并显示主窗口的。

## 使用Host承载Wpf应用
添加依赖注入和通用主机的依赖到项目：

```xml
  <ItemGroup>
	<PackageReference Include="Microsoft.Extensions.DependencyInjection" Version="7.0.0" />
	<PackageReference Include="Microsoft.Extensions.Hosting" Version="7.0.1" />
  </ItemGroup>
```

改写`Program.cs`，创建并运行Host：

```cs title="Program.cs"
[STAThread]
class Program
{
    public static void Main(string[] args)
    {
        var hostBuilder = Host.CreateDefaultBuilder(args);

        hostBuilder.ConfigureServices(services =>
        {
            // 配置服务和依赖注入
        });

        hostBuilder.Build().Run();
    }
}
```

现在的问题就是如何在Host中运行Wpf应用。最优雅的做法显然是将Wpf应用作为一个`HostedService`运行，同时将`App`和`MainWindow`都注入到容器中。为此需要实现一个通用的WpfHostedService：

```cs title="WpfHostedService.cs"
class WpfHostedService<TApplication, TMainWindow> : IHostedService
        where TApplication : Application
        where TMainWindow : Window
{
    public WpfHostedService(TApplication application, TMainWindow mainWindow)
    {
        this.application = application;
        this.mainWindow = mainWindow;
    }

    private readonly TApplication application;
    private readonly TMainWindow mainWindow;

    public Task StartAsync(CancellationToken cancellationToken)
    {
        application.Run(mainWindow);
        return Task.CompletedTask;
    }

    public Task StopAsync(CancellationToken cancellationToken)
    {
        return Task.CompletedTask;
    }
}
```

然后在配置中进行注入：

```cs title="Program.cs"
hostBuilder.ConfigureServices(services =>
{
    // 配置服务和依赖注入
    // highlight-start
    services.AddSingleton<App>();
    services.AddTransient<MainWindow>();
    services.AddHostedService<WpfHostedService<App, MainWindow>>();
    // highlight-end
});
```

此时应用能够正常运行，且从App开始就支持使用Host中的全部功能了。

## 如何优雅地关闭应用
应用虽然可以正常启动，但是关闭主窗口后进程不会结束。这时因为虽然关闭主窗口后Wpf的Application已经Shutdown了，但结束的只是承载Application的Service，而Host还会继续运行。

当然，我们可以在关闭窗口时调用`Environment.Exit`直接关闭整个进程，但这样显然不优雅。此外，从Host的声明周期来考虑，正确的做法应该是Host的关闭引起Application的关闭，在Host关闭之前，Application不应当关闭。换句话说，Application的生命周期应依赖于Host，而与主窗口无关。

Host也提供了生命周期管理对象，通过它可以优雅地关闭整个Host

```cs title="WpfHostedService.cs"
class WpfHostedService<TApplication, TMainWindow> : IHostedService
        where TApplication : Application
        where TMainWindow : Window
{
    public WpfHostedService(TApplication application, TMainWindow mainWindow,
        // highlight-next-line
        IHostApplicationLifetime hostApplicationLifetime)
    {
        this.application = application;
        this.mainWindow = mainWindow;

        // Host关闭时，关闭Application
        // highlight-next-line
        hostApplicationLifetime.ApplicationStopping.Register(application.Shutdown);
    }

    // ...

    public Task StartAsync(CancellationToken cancellationToken)
    {
        // 设置Application声明周期与MainWindow无关
        // highlight-next-line
        application.ShutdownMode = ShutdownMode.OnExplicitShutdown;
        application.Run(mainWindow);
        return Task.CompletedTask;
    }

    // ...
}
```

在需要关闭应用的地方，注入`IHostApplicationLifetime`对象并调用`StopApplication()`，如：

```cs title="MainWindow.xaml.cs"
public partial class MainWindow : Window
{
    public MainWindow(IHostApplicationLifetime hostApplicationLifetime)
    {
        InitializeComponent();
        this.hostApplicationLifetime = hostApplicationLifetime;
    }

    private readonly IHostApplicationLifetime hostApplicationLifetime;

    protected override void OnClosed(EventArgs e)
    {
        // highlight-next-line
        hostApplicationLifetime.StopApplication();
    }
}
```

这样就实现了Wpf应用的生命周期与Host同步。

# 封装起来
这么优雅的东西，如果能复用就更优雅了。作者将其封装为一个包`AyatoPack`，使用时只需要：

```cs title="Program.cs"
AyatoHost.Run<App, MainWindow>(args, hostBuilder =>
{
    // 在这里配置其他服务和依赖注入
});
```

源码在[这里](https://github.com/AZhrZho)，欢迎品鉴。