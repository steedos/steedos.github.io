"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7907],{3905:(e,t,l)=>{l.d(t,{Zo:()=>i,kt:()=>m});var n=l(7294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function s(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},i=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),c=u(l),k=r,m=c["".concat(p,".").concat(k)]||c[k]||d[k]||a;return l?n.createElement(m,o(o({ref:t},i),{},{components:l})):n.createElement(m,o({ref:t},i))}));function m(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,o=new Array(a);o[0]=k;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=l[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}k.displayName="MDXCreateElement"},2321:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=l(7462),r=(l(7294),l(3905));const a={title:"\u5b89\u88c5 Steedos Cli",sidebar_position:20},o=void 0,s={unversionedId:"developer/setup/steedos-cli",id:"developer/setup/steedos-cli",title:"\u5b89\u88c5 Steedos Cli",description:"\u4ecb\u7ecd",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/developer/setup/steedos-cli.md",sourceDirName:"developer/setup",slug:"/developer/setup/steedos-cli",permalink:"/zh-CN/developer/setup/steedos-cli",draft:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/developer/setup/steedos-cli.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"\u5b89\u88c5 Steedos Cli",sidebar_position:20},sidebar:"developer",previous:{title:"\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee",permalink:"/zh-CN/developer/setup/create-steedos-app"},next:{title:"\u8fd0\u884c\u9879\u76ee",permalink:"/zh-CN/developer/setup/project-start"}},p={},u=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u57fa\u672c\u547d\u4ee4",id:"\u57fa\u672c\u547d\u4ee4",level:2},{value:"\u663e\u793a\u5e2e\u52a9",id:"\u663e\u793a\u5e2e\u52a9",level:3},{value:"\u514b\u9686\u6837\u672c\u4ed3\u5e93",id:"\u514b\u9686\u6837\u672c\u4ed3\u5e93",level:3},{value:"\u5bfc\u822a\u81f3\u9879\u76ee",id:"\u5bfc\u822a\u81f3\u9879\u76ee",level:3},{value:"\u8bbe\u7f6e\u9ed8\u8ba4\u5305\u8def\u5f84",id:"\u8bbe\u7f6e\u9ed8\u8ba4\u5305\u8def\u5f84",level:3},{value:"\u6e90\u914d\u7f6e",id:"\u6e90\u914d\u7f6e",level:3},{value:"\u6e90\u90e8\u7f72",id:"\u6e90\u90e8\u7f72",level:3},{value:"\u6e90\u68c0\u7d22",id:"\u6e90\u68c0\u7d22",level:3},{value:"\u6545\u969c\u6392\u9664",id:"\u6545\u969c\u6392\u9664",level:2}],i={toc:u},c="wrapper";function d(e){let{components:t,...l}=e;return(0,r.kt)(c,(0,n.Z)({},i,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,r.kt)("p",null,"Steedos CLI \u662f\u4e00\u4e2a\u547d\u4ee4\u884c\u754c\u9762\u5de5\u5177\uff0c\u65e8\u5728\u7b80\u5316\u521b\u5efa\u3001\u7ba1\u7406\u548c\u90e8\u7f72 Steedos \u5e94\u7528\u7a0b\u5e8f\u7684\u6d41\u7a0b\u3002\u6709\u4e86 Steedos CLI\uff0c\u60a8\u53ef\u4ee5\u76f4\u63a5\u5728\u7ec8\u7aef\u4e2d\u8f7b\u677e\u5904\u7406\u5404\u79cd\u4efb\u52a1\uff0c\u6539\u5584\u5de5\u4f5c\u6d41\u7a0b\u5e76\u63d0\u9ad8\u751f\u4ea7\u529b\u3002"),(0,r.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Node.js\uff0814 \u7248\u6216\u66f4\u9ad8\u7248\u672c\uff09"),(0,r.kt)("li",{parentName:"ul"},"npm\uff08\u901a\u5e38\u968f Node.js \u4e00\u8d77\u63d0\u4f9b\uff09")),(0,r.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)("p",null,"\u8981\u5b89\u88c5 Steedos CLI\uff0c\u8bf7\u5728\u7ec8\u7aef\u4e2d\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g steedos-cli\n")),(0,r.kt)("p",null,"\u6b64\u547d\u4ee4\u5c06\u5728\u60a8\u7684\u7cfb\u7edf\u4e0a\u5168\u5c40\u5b89\u88c5 Steedos CLI\uff0c\u5141\u8bb8\u60a8\u4ece\u4efb\u4f55\u76ee\u5f55\u8bbf\u95ee\u5b83\u3002"),(0,r.kt)("h2",{id:"\u57fa\u672c\u547d\u4ee4"},"\u57fa\u672c\u547d\u4ee4"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u60a8\u53ef\u80fd\u5728\u9879\u76ee\u4e2d\u4f7f\u7528\u7684\u4e00\u4e9b\u57fa\u672c\u547d\u4ee4\uff1a"),(0,r.kt)("h3",{id:"\u663e\u793a\u5e2e\u52a9"},"\u663e\u793a\u5e2e\u52a9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"steedos help\n")),(0,r.kt)("h3",{id:"\u514b\u9686\u6837\u672c\u4ed3\u5e93"},"\u514b\u9686\u6837\u672c\u4ed3\u5e93"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/steedos-labs/contract\n")),(0,r.kt)("p",null,"\u5b89\u88c5\u4f9d\u8d56\u5e76\u8fd0\u884c\u9879\u76ee\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn\nyarn start\n")),(0,r.kt)("p",null,"\u5982\u679c\u662f\u7a7a\u6570\u636e\u5e93\uff0c\u7cfb\u7edf\u5c06\u63d0\u793a\u60a8\u6ce8\u518c\u5e10\u6237\u5e76\u521b\u5efa\u5de5\u4f5c\u533a\u3002"),(0,r.kt)("h3",{id:"\u5bfc\u822a\u81f3\u9879\u76ee"},"\u5bfc\u822a\u81f3\u9879\u76ee"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd my-project\n")),(0,r.kt)("h3",{id:"\u8bbe\u7f6e\u9ed8\u8ba4\u5305\u8def\u5f84"},"\u8bbe\u7f6e\u9ed8\u8ba4\u5305\u8def\u5f84"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u6b63\u5728\u5904\u7406\u591a\u5305\u9879\u76ee\uff0c\u60a8\u53ef\u80fd\u8fd8\u9700\u8981\u914d\u7f6e\u9ed8\u8ba4\u5305\u8def\u5f84\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u5728.env\u6587\u4ef6\u4e2d\u8bbe\u7f6e\u4ee5\u4e0b\u73af\u5883\u53d8\u91cf\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"DEFAULT_PACKAGE_PATH=steedos-packages/<my-package-dir>\n")),(0,r.kt)("h3",{id:"\u6e90\u914d\u7f6e"},"\u6e90\u914d\u7f6e"),(0,r.kt)("p",null,"\u8bbe\u7f6e\u5143\u6570\u636e\u540c\u6b65\u6240\u9700\u7684\u73af\u5883\u53d8\u91cf\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"steedos source:config\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5143\u6570\u636e\u670d\u52a1\u5668\uff1aMETADATA_SERVER \u662f\u60a8\u5e0c\u671b\u8fde\u63a5\u7684 Steedos \u670d\u52a1\u5668\u7684 ROOT_URL\uff0c\u53ef\u4ee5\u662f\u672c\u5730\u5f00\u53d1\u73af\u5883\u6216\u8fdc\u7a0b\u670d\u52a1\u5668\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5143\u6570\u636e API \u5bc6\u94a5\uff1aMETADATA_APIKEY \u7528\u4e8e\u9a8c\u8bc1\u60a8\u7684\u8eab\u4efd\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u7ba1\u7406\u5458\u51ed\u636e\u767b\u5f55 Steedos \u670d\u52a1\u5668\uff0c\u8f6c\u5230\u8bbe\u7f6e\u5e94\u7528\u7a0b\u5e8f\uff0c\u9009\u62e9 API \u5bc6\u94a5\u83dc\u5355\uff0c\u5e76\u521b\u5efa\u65b0\u7684 API \u5bc6\u94a5\u3002")),(0,r.kt)("p",null,"\u6b64\u547d\u4ee4\u5c06\u73af\u5883\u53d8\u91cf\u5199\u5165 .env.local \u6587\u4ef6\uff0c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"METADATA_SERVER=\nMETADATA_APIKEY=\n")),(0,r.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u76f4\u63a5\u8bbe\u7f6e\u4e0a\u8ff0\u73af\u5883\u53d8\u91cf\uff0c\u800c\u65e0\u9700\u8fd0\u884c\u547d\u4ee4\u3002"),(0,r.kt)("h3",{id:"\u6e90\u90e8\u7f72"},"\u6e90\u90e8\u7f72"),(0,r.kt)("p",null,"\u5c06\u5305\u6e90\u4ee3\u7801\u4e2d\u7684\u5143\u6570\u636e\u90e8\u7f72\u5230 steedos \u670d\u52a1\u5668\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"steedos source:deploy -p steedos-packages/contract\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-p")," \u60a8\u5e0c\u671b\u90e8\u7f72\u7684 steedos \u5305\u7684\u8def\u5f84")),(0,r.kt)("h3",{id:"\u6e90\u68c0\u7d22"},"\u6e90\u68c0\u7d22"),(0,r.kt)("p",null,"\u4ece steedos \u670d\u52a1\u5668\u68c0\u7d22\u5143\u6570\u636e\u5230\u5305\u6e90\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"steedos source:retrieve -p steedos-packages/contract\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-p")," \u60a8\u5e0c\u671b\u68c0\u7d22\u5230\u7684 steedos \u5305\u7684\u8def\u5f84\u3002")),(0,r.kt)("h2",{id:"\u6545\u969c\u6392\u9664"},"\u6545\u969c\u6392\u9664"),(0,r.kt)("p",null,"\u5982\u679c\u5728\u4f7f\u7528 Steedos CLI \u65f6\u9047\u5230\u95ee\u9898\uff0c\u8bf7\u8003\u8651\u4ee5\u4e0b\u6545\u969c\u6392\u9664\u6b65\u9aa4\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u68c0\u67e5\u60a8\u7684 Node.js \u548c npm \u7248\u672c\uff0c\u786e\u4fdd\u5b83\u4eec\u6ee1\u8db3\u5148\u51b3\u6761\u4ef6\u8981\u6c42\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u786e\u8ba4\u60a8\u5728\u6b63\u786e\u7684\u76ee\u5f55\u4e2d\u8fd0\u884c\u547d\u4ee4\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u66f4\u5177\u4f53\u7684\u9519\u8bef\uff0c\u8bf7\u53c2\u9605\u63a7\u5236\u53f0\u4e2d\u63d0\u4f9b\u7684\u9519\u8bef\u65e5\u5fd7\u3002")),(0,r.kt)("p",null,"\u5982\u679c\u95ee\u9898\u4ecd\u7136\u5b58\u5728\uff0c\u53ef\u4ee5\u8054\u7cfb\u652f\u6301\u793e\u533a\u6216\u67e5\u9605\u5b98\u65b9\u6587\u6863\u3002"))}d.isMDXComponent=!0}}]);