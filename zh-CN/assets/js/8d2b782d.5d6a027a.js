"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6152],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=c(t),d=r,g=s["".concat(i,".").concat(d)]||s[d]||u[d]||o;return t?a.createElement(g,l(l({ref:n},m),{},{components:t})):a.createElement(g,l({ref:n},m))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[s]="string"==typeof e?e:r,l[1]=p;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7156:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const o={},l="\u6570\u636e\u6620\u5c04",p={unversionedId:"developer/micro-page/amis/data_mapping",id:"developer/micro-page/amis/data_mapping",title:"\u6570\u636e\u6620\u5c04",description:"\u6570\u636e\u6620\u5c04\u662f\u4e00\u79cd\u5f3a\u5927\u7684\u529f\u80fd\uff0c\u5b83\u5141\u8bb8\u7528\u6237\u901a\u8fc7\u4f7f\u7528\u6a21\u677f\u5b57\u7b26\u4e32\uff0c\u5982 $ \u6216 $xxx\uff0c\u6765\u83b7\u53d6\u5f53\u524d\u6570\u636e\u94fe\u4e2d\u7684\u53d8\u91cf\u503c\u3002\u8fd9\u79cd\u65b9\u6cd5\u4e3b\u8981\u7528\u4e8e\u6a21\u677f\u5b57\u7b26\u4e32\u3001\u81ea\u5b9a\u4e49 API \u8bf7\u6c42\u6570\u636e\u4f53\u683c\u5f0f\u7b49\u573a\u666f\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/developer/micro-page/amis/4_data_mapping.md",sourceDirName:"developer/micro-page/amis",slug:"/developer/micro-page/amis/data_mapping",permalink:"/zh-CN/developer/micro-page/amis/data_mapping",draft:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/developer/micro-page/amis/4_data_mapping.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"developer",previous:{title:"\u6a21\u677f\u6e32\u67d3",permalink:"/zh-CN/developer/micro-page/amis/tpl"},next:{title:"\u8868\u8fbe\u5f0f",permalink:"/zh-CN/developer/micro-page/amis/expression"}},i={},c=[{value:"\u81ea\u5b9a\u4e49 API \u8bf7\u6c42\u4f53\u6570\u636e\u683c\u5f0f",id:"\u81ea\u5b9a\u4e49-api-\u8bf7\u6c42\u4f53\u6570\u636e\u683c\u5f0f",level:3},{value:"\u590d\u6742\u914d\u7f6e",id:"\u590d\u6742\u914d\u7f6e",level:3},{value:"\u4ece\u6570\u7ec4\u63d0\u53d6\u503c",id:"\u4ece\u6570\u7ec4\u63d0\u53d6\u503c",level:3},{value:"Namespace",id:"namespace",level:3}],m={toc:c},s="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(s,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6570\u636e\u6620\u5c04"},"\u6570\u636e\u6620\u5c04"),(0,r.kt)("p",null,"\u6570\u636e\u6620\u5c04\u662f\u4e00\u79cd\u5f3a\u5927\u7684\u529f\u80fd\uff0c\u5b83\u5141\u8bb8\u7528\u6237\u901a\u8fc7\u4f7f\u7528\u6a21\u677f\u5b57\u7b26\u4e32\uff0c\u5982 ${xxx} \u6216 $xxx\uff0c\u6765\u83b7\u53d6\u5f53\u524d\u6570\u636e\u94fe\u4e2d\u7684\u53d8\u91cf\u503c\u3002\u8fd9\u79cd\u65b9\u6cd5\u4e3b\u8981\u7528\u4e8e\u6a21\u677f\u5b57\u7b26\u4e32\u3001\u81ea\u5b9a\u4e49 API \u8bf7\u6c42\u6570\u636e\u4f53\u683c\u5f0f\u7b49\u573a\u666f\u3002"),(0,r.kt)("h3",{id:"\u81ea\u5b9a\u4e49-api-\u8bf7\u6c42\u4f53\u6570\u636e\u683c\u5f0f"},"\u81ea\u5b9a\u4e49 API \u8bf7\u6c42\u4f53\u6570\u636e\u683c\u5f0f"),(0,r.kt)("p",null,"\u5728\u8868\u5355\u63d0\u4ea4\u63a5\u53e3\u65f6\uff0c\u5982\u679c AMIS \u9ed8\u8ba4\u7684\u8bf7\u6c42\u4f53\u6570\u636e\u683c\u5f0f\u4e0d\u7b26\u5408\u4f60\u7684\u9884\u671f\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u6570\u636e\u6620\u5c04\u6765\u5b9a\u5236\u6240\u9700\u7684\u6570\u636e\u683c\u5f0f\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u7684\u540e\u7aef\u63a5\u53e3\u4ec5\u652f\u6301\u7279\u5b9a\u7684\u8f93\u5165\u6570\u636e\n\u7ed3\u6784\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e API \u7684 ",(0,r.kt)("strong",{parentName:"p"},"data")," \u5c5e\u6027\u6765\u5b9e\u73b0\u6570\u636e\u683c\u5f0f\u7684\u81ea\u5b9a\u4e49\u3002\n\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "page",\n  "body": {\n    "type": "form",\n    "api": {\n      "method": "post",\n      "url": "/amis/api/mock2/form/saveForm",\n      "data": {\n        "userName": "${name}",\n        "userEmail": "${email}"\n      }\n    },\n    "body": [\n      {\n        "type": "input-text",\n        "name": "name",\n        "label": "\u59d3\u540d\uff1a"\n      },\n      {\n        "name": "email",\n        "type": "input-text",\n        "label": "\u90ae\u7bb1\uff1a"\n      }\n    ]\n  }\n}\n')),(0,r.kt)("h3",{id:"\u590d\u6742\u914d\u7f6e"},"\u590d\u6742\u914d\u7f6e"),(0,r.kt)("p",null,"AMIS \u5141\u8bb8\u4f7f\u7528 & \u4f5c\u4e3a\u6570\u636e\u6620\u5c04\u7684\u952e\uff0c\u4ee5\u5c55\u5f00\u6240\u914d\u7f6e\u7684\u53d8\u91cf\u3002\u8fd9\u610f\u5473\u7740\u4f60\u53ef\u4ee5\u5c06\u4e00\u4e2a\u5bf9\u8c61\u4e2d\u7684\u6240\u6709\u5c5e\u6027\u5c55\u5f00\u5e76\u62fc\u63a5\u5728 data \u4e2d\u3002\n\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "page",\n  "body": {\n    "type": "form",\n    "data": {\n      "a": "1",\n      "b": "2",\n      "c": {\n        "e": "3",\n        "f": "4",\n        "g": "5"\n      }\n    },\n    "api": {\n      "url": "/amis/api/mock2/form/saveForm",\n      "method": "post",\n      "data": {\n        "name": "${name}",\n        "email": "${email}",\n        "e": "${c.e}",\n        "f": "${c.f}",\n        "g": "${c.g}"\n      }\n    },\n    "body": [\n      {\n        "type": "input-text",\n        "name": "name",\n        "label": "\u59d3\u540d\uff1a"\n      },\n      {\n        "name": "email",\n        "type": "input-text",\n        "label": "\u90ae\u7bb1\uff1a"\n      }\n    ]\n  }\n}\n')),(0,r.kt)("h3",{id:"\u4ece\u6570\u7ec4\u63d0\u53d6\u503c"},"\u4ece\u6570\u7ec4\u63d0\u53d6\u503c"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u914d\u7f6e API \u7684 data \u5c5e\u6027\u6765\u4ec5\u63d0\u53d6\u6570\u7ec4\u4e2d\u7684\u7279\u5b9a\u53d8\u91cf\uff0c\u5e76\u7ec4\u6210\u65b0\u7684\u6570\u7ec4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "page",\n  "body": {\n    "type": "form",\n    "api": {\n      "method": "post",\n      "url": "/amis/api/mock2/form/saveForm",\n      "data": {\n        "items": {\n          "$table": {\n            "a": "${a}",\n            "c": "${c}"\n          }\n        }\n      }\n    },\n    "body": [\n      {\n        "type": "input-table",\n        "name": "table",\n        "label": "table",\n        "columns": [\n          {\n            "label": "A",\n            "name": "a"\n          },\n          {\n            "label": "B",\n            "name": "b"\n          }\n        ],\n        "value": [\n          {\n            "a": "a1",\n            "b": "b1",\n            "c": "c1"\n          },\n          {\n            "a": "a2",\n            "b": "b2",\n            "c": "c2"\n          }\n        ]\n      }\n    ]\n  }\n}\n')),(0,r.kt)("h3",{id:"namespace"},"Namespace"),(0,r.kt)("p",null,"AMIS \u652f\u6301\u4ece\u4e0d\u540c\u7684\u547d\u540d\u7a7a\u95f4\u4e2d\u83b7\u53d6\u6570\u636e\uff0c\u5982\u5168\u5c40\u53d8\u91cf\u3001localStorage\u3001sessionStorage \u548c cookies\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"window \u5373\u5168\u5c40\u53d8\u91cf"),(0,r.kt)("li",{parentName:"ul"},"ls \u5373 localStorage\uff0c \u5982\u679c\u503c\u662f json \u5bf9\u8c61\uff0c\u53ef\u4ee5\u76f4\u63a5\u5f53\u5bf9\u8c61\u7528\u6bd4\u5982\uff1a${ls:xxxxxlocalStrorageKey.xxxx}"),(0,r.kt)("li",{parentName:"ul"},"ss \u5373 sessionStorage\uff0c\u540c\u4e0a\u3002"),(0,r.kt)("li",{parentName:"ul"},"cookie \u5373 cookies\uff0c\u540c\u4e0a")),(0,r.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "page",\n  "body": "\u5f53\u524d\u9875\u9762\u6807\u9898\u4e3a\uff1a<span class=\'label label-info\'>${window:document[title]}</span>"\n}\n')))}u.isMDXComponent=!0}}]);