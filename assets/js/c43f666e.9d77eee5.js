"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[384],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},f="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,g=f["".concat(c,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[f]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2628:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={slug:"wpf-hot-reload",title:"\u9644\u52a0\u8fdb\u7a0b\u8c03\u8bd5\u65f6\u542f\u7528WPF\u70ed\u91cd\u8f7d",authors:"AZ",tags:["c#","wpf"]},l=void 0,i={permalink:"/blog/wpf-hot-reload",source:"@site/blog/2023-10-13-wpf-hot-reload/index.md",title:"\u9644\u52a0\u8fdb\u7a0b\u8c03\u8bd5\u65f6\u542f\u7528WPF\u70ed\u91cd\u8f7d",description:"WPF\u4ece.Net framework 4.8\u5f00\u59cb\u539f\u751f\u652f\u6301\u70ed\u91cd\u8f7d\uff0c\u7531\u4e8e\u590d\u6742\u573a\u666f\u4e0bXAML\u8bbe\u8ba1\u5668\u65e0\u6cd5\u5b9e\u73b0\u6240\u89c1\u5373\u6240\u5f97\uff0c\u8be5\u7279\u6027\u80fd\u591f\u6781\u5927\u63d0\u5347WPF\u5e94\u7528\u5f00\u53d1\u7684\u6548\u7387\u3002\u7136\u800cVisual Studio\u9ed8\u8ba4\u53ea\u652f\u6301\u8fd0\u884c\u8c03\u8bd5\u65f6\u7684\u70ed\u91cd\u8f7d\uff0c\u5bf9\u4e8e\u9644\u52a0\u8c03\u8bd5\u7684\u573a\u666f\uff0c\u8fd8\u9700\u8981\u4e00\u4e9b\u989d\u5916\u7684\u8bbe\u7f6e\u3002",date:"2023-10-13T00:00:00.000Z",formattedDate:"October 13, 2023",tags:[{label:"c#",permalink:"/blog/tags/c"},{label:"wpf",permalink:"/blog/tags/wpf"}],readingTime:2.16,hasTruncateMarker:!0,authors:[{name:"zhuoqiang.li",title:"\u662f\u4e2a\u5b66\u751f",url:"https://github.com/AZhrZho",imageURL:"https://github.com/AZhrZho.png",key:"AZ"}],frontMatter:{slug:"wpf-hot-reload",title:"\u9644\u52a0\u8fdb\u7a0b\u8c03\u8bd5\u65f6\u542f\u7528WPF\u70ed\u91cd\u8f7d",authors:"AZ",tags:["c#","wpf"]},prevItem:{title:".NET8\u65b0\u589e\u7279\u6027\u5907\u5fd8\u5f55",permalink:"/blog/dotnet8-feature"},nextItem:{title:"\u5982\u4f55\u4f18\u96c5\u5730\u4e3aWPF\u6dfb\u52a0\u4f9d\u8d56\u6ce8\u5165",permalink:"/blog/run-wpf-on-generic-host"}},c={authorsImageUrls:[void 0]},p=[],u={toc:p},f="wrapper";function s(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"WPF\u4ece.Net framework 4.8\u5f00\u59cb\u539f\u751f\u652f\u6301\u70ed\u91cd\u8f7d\uff0c\u7531\u4e8e\u590d\u6742\u573a\u666f\u4e0bXAML\u8bbe\u8ba1\u5668\u65e0\u6cd5\u5b9e\u73b0\u6240\u89c1\u5373\u6240\u5f97\uff0c\u8be5\u7279\u6027\u80fd\u591f\u6781\u5927\u63d0\u5347WPF\u5e94\u7528\u5f00\u53d1\u7684\u6548\u7387\u3002\u7136\u800cVisual Studio\u9ed8\u8ba4\u53ea\u652f\u6301\u8fd0\u884c\u8c03\u8bd5\u65f6\u7684\u70ed\u91cd\u8f7d\uff0c\u5bf9\u4e8e\u9644\u52a0\u8c03\u8bd5\u7684\u573a\u666f\uff0c\u8fd8\u9700\u8981\u4e00\u4e9b\u989d\u5916\u7684\u8bbe\u7f6e\u3002"))}s.isMDXComponent=!0}}]);