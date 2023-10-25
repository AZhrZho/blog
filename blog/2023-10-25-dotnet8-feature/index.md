---
slug: dotnet8-feature
title: .NET8新增特性备忘录
authors: AZ
tags: [csharp, dotnet]
---

.Net8作为下一个LTS版本，带来了丰富的新特性。目前，.Net8已经发布RC2，距离正式版发布很近了。官网已针对RC2版本，详细介绍了.Net8的新特性，详见[官方文档](https://learn.microsoft.com/zh-cn/dotnet/core/whats-new/dotnet-8)。本文则是作者根据自己的理解，将个人感觉实用的特性做一整理与分享。

<!--truncate-->

## Json改进
### 命名策略
- `JsonNamingPolicy`新增`snake_case`和`kebab-case`的支持
- 支持反序列化到只读属性或字段
    - 将`JsonSerializerOptions.PreferredObjectCreationHandling`设置为`JsonObjectCreationHandling.Populate`
    - 或在类/属性/字段上设置`[JsonObjectCreationHandling(JsonObjectCreationHandling.Populate)]`来单独控制
- `[JsonConstructor]`支持非公共构造器
- `[JsonInclude]`可以将非公共成员加入序列化
- 流式反序列化支持，对表示一类对象的集合的大型json处理时可提升效率
    ```cs
    const string RequestUri = "https://api.contoso.com/books";
    using var client = new HttpClient();
    IAsyncEnumerable<Book> books = client.GetFromJsonAsAsyncEnumerable<Book>(RequestUri);

    await foreach (Book book in books)
    {
        Console.WriteLine($"Read book '{book.title}'");
    }

    public record Book(int id, string title, string author, int publishedYear);
    ```

## 时间抽象
新的 `TimeProvider` 类和 `ITimer` 接口添加了时间抽象功能，让你可以在测试中模拟时间（方便测试依赖时间的业务）

## UTF8改进

- 新增`IUtf8SpanFormattable`接口，用于向`Span<byte>`中写入对象的UTF-8表示形式
- 很多内置类型已添加该接口的实现
- 配合`Utf8.TryWrite`方法使用

> 支持的内部类型有: `Byte`、`Complex`、`Char`、`DateOnly`、`DateTime`、`DateTimeOffset`、`Decimal`、`Double`、`Guid`、`Half`、`IPAddress`、`IPNetwork`、`Int16`、`Int32`、`Int64`、`Int128`、`IntPtr`、`NFloat`、`SByte`、`Single`、`Rune`、`TimeOnly`、`TimeSpan`、`UInt16`、`UInt32`、`UInt64`、`UInt128`、`UIntPtr`、`Version`

## 随机性
- 添加`Random.GetItems<T>`方法
- 添加`Random.Shuffle<T>`方法

## 可用于性能改进的新类型
- 添加`FrozenDictionary`和`FrozenSet`，可用于仅初始设置值的字典与集合，提升读取性能
- 添加`System.Text.CompositeFormat`，用于优化编译时未知的格式字符串
    ```cs
    private static readonly CompositeFormat s_rangeMessage =
    CompositeFormat.Parse(LoadRangeMessageResource());

    // ...
    static string GetMessage(int min, int max) =>
        string.Format(CultureInfo.InvariantCulture, s_rangeMessage, min, max);
    ```
    :::tip 提示
    
    如果`string.Format`只用一次该格式字符串，没必要用这个。它的使用场景是多次使用编译时未知的同样的格式字符串，可节省每次调用时的分析开销

    :::
- 新的 System.IO.Hashing.XxHash3 和 System.IO.Hashing.XxHash128 类型可实现快速 XXH3 和 XXH128 哈希算法

## 数学运算
- SIMP支持改进
- 为浮点数添加`Lerp`方法，用于执行两个浮点数之间的线性内插

## 数据验证
- 新增`[Base64String]`验证是否为合法base64
- 新增`[AllowedValues]`和`[DeniedValues]`，用法如`[AllowedValues("apple", "banana", "mango")]`
    > 推测除验证外，也有利于Swagger Gen等文档生成工具识别

## HTTPS代理支持
- 可以通过设置`all_proxy`环境变量为`HttpClint`设置代理

## Native AOT支持
- 缩小了AOT应用发布大小
- 可以使用`dotnet new console --aot`直接创建AOT的项目
- 新增ios和macos的aot支持

## .NET SDK改进
- 可简化输出路径

    ::: tip

    若要选择使用新的输出路径格式，请在 Directory.Build.props 文件中使用以下属性之一：

    将 ArtifactsPath 属性添加到值 $(MSBuildThisFileDirectory)artifacts（或者添加到你希望的任何文件夹位置），或
    若要使用默认位置，只需将 UseArtifactsOutput 属性设置为 true。
    或者，运行 dotnet new buildprops --use-artifacts，模板将为你生成 Directory.Build.props 文件：

    ```xml
    <Project>
    <PropertyGroup>
        <ArtifactsPath>$(MSBuildThisFileDirectory)artifacts</ArtifactsPath>
    </PropertyGroup>
    </Project>
    ```

    :::
- 容器发布改进

## WPF改进
- 可开启RDP协议下的硬件加速
    ```xml
    <ItemGroup>
      <RuntimeHostConfigurationOption Include="Switch.System.Windows.Media.EnableHardwareAccelerationInRdp" Value="true" />
    </ItemGroup>
    ```
- 添加`OpenFolderDialog`
    > 史诗级更新，WPF没有文件夹选择器被骂了好几年（雾
