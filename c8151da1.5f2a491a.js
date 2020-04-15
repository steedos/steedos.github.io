(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{315:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return b})),t.d(n,"default",(function(){return i}));var r=t(1),a=t(6),c=(t(0),t(381)),l={title:"steedos-config"},o={id:"developer/steedos_config",title:"steedos-config",description:"steedos-config.yml \u7528\u4e8e\u914d\u7f6e\u7cfb\u7edf\u53c2\u6570\uff0c\u4f4d\u4e8e\u9879\u76ee\u7684\u6839\u76ee\u5f55\u3002\r",source:"@site/../docs/developer/steedos_config.md",permalink:"/developer/steedos_config",sidebar:"\u534e\u708e\u9b54\u65b9\u5f00\u53d1\u6587\u6863",previous:{title:"\u591a\u5355\u4f4d\u6743\u9650\u63a7\u5236",permalink:"/developer/guide_companies"},next:{title:"\u6570\u636e\u6e90",permalink:"/developer/datasource"}},b=[{value:"\u6570\u636e\u6e90",id:"\u6570\u636e\u6e90",children:[]},{value:"\u63d2\u4ef6",id:"\u63d2\u4ef6",children:[]},{value:"\u767b\u5f55\u754c\u9762\u914d\u7f6e",id:"\u767b\u5f55\u754c\u9762\u914d\u7f6e",children:[]},{value:"Web\u670d\u52a1URL",id:"web\u670d\u52a1url",children:[]},{value:"\u6587\u4ef6\u5b58\u50a8",id:"\u6587\u4ef6\u5b58\u50a8",children:[]},{value:"\u90ae\u4ef6\u914d\u7f6e",id:"\u90ae\u4ef6\u914d\u7f6e",children:[]},{value:"\u53d1\u9001\u77ed\u4fe1\u914d\u7f6e",id:"\u53d1\u9001\u77ed\u4fe1\u914d\u7f6e",children:[]},{value:"\u5bc6\u7801\u89c4\u5219\u914d\u7f6e",id:"\u5bc6\u7801\u89c4\u5219\u914d\u7f6e",children:[]}],u={rightToc:b};function i(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"steedos-config.yml \u7528\u4e8e\u914d\u7f6e\u7cfb\u7edf\u53c2\u6570\uff0c\u4f4d\u4e8e\u9879\u76ee\u7684\u6839\u76ee\u5f55\u3002"),Object(c.b)("h2",{id:"\u6570\u636e\u6e90"},"\u6570\u636e\u6e90"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"datasources:\n  default:\n    connection:\n      url: mongodb://127.0.0.1/steedos\n\n")),Object(c.b)("h2",{id:"\u63d2\u4ef6"},"\u63d2\u4ef6"),Object(c.b)("p",null,"\u914d\u7f6e\u5f53\u524d\u9879\u76ee\u4e2d\u542f\u7528\u7684\u63d2\u4ef6\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u8bf7\u6ce8\u610f\uff0c\u5728\u542f\u7528\u63d2\u4ef6\u524d\uff0c\u8bf7\u786e\u4fdd\u63d2\u4ef6\u6e90\u7801\u901a\u8fc7 yarn add \u7684\u65b9\u5f0f\u52a0\u5165\u5230\u9879\u76ee\u4e2d\u3002")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),'plugins:\n  - "@steedos/app-contracts"\n  - "@steedos/accounts"\n')),Object(c.b)("h2",{id:"\u767b\u5f55\u754c\u9762\u914d\u7f6e"},"\u767b\u5f55\u754c\u9762\u914d\u7f6e"),Object(c.b)("p",null,"\u914d\u7f6e\u767b\u5f55\u754c\u9762\u76f8\u5173\u53c2\u6570\uff0c\u4f8b\u5982\u662f\u5426\u5141\u8bb8\u6ce8\u518c\u3001\u662f\u5426\u5141\u8bb8\u4fee\u6539\u5bc6\u7801\u3001\u662f\u5426\u5141\u8bb8\u521b\u5efa\u4f01\u4e1a\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"tenant:\n  _id:\n  name: Steedos\n  logo_url:\n  background_url:\n  enable_register: true\n  enable_forget_password: true\n  enable_create_tenant: true\n  enable_mobile: false\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"enable_register: \u542f\u7528\u6ce8\u518c\u529f\u80fd"),Object(c.b)("li",{parentName:"ul"},"enable_forget_password: \u542f\u7528\u5fd8\u8bb0\u5bc6\u7801\u529f\u80fd"),Object(c.b)("li",{parentName:"ul"},"enable_create_tenant: \u542f\u7528\u5de5\u4f5c\u533a\u6ce8\u518c\u529f\u80fd"),Object(c.b)("li",{parentName:"ul"},"enable_mobile: \u542f\u7528\u624b\u673a\u7aef\u754c\u9762")),Object(c.b)("h2",{id:"web\u670d\u52a1url"},"Web\u670d\u52a1URL"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"services:\n  steedos: /\n")),Object(c.b)("h2",{id:"\u6587\u4ef6\u5b58\u50a8"},"\u6587\u4ef6\u5b58\u50a8"),Object(c.b)("p",null,"\u914d\u7f6e\u9644\u4ef6\u5b58\u50a8\u7684\u76f8\u5173\u53c2\u6570\u3002"),Object(c.b)("p",null,"\u9644\u4ef6\u53ef\u4ee5\u4fdd\u5b58\u5728\u672c\u5730\uff0c\u4e5f\u53ef\u4ee5\u4fdd\u5b58\u5728\u963f\u91cc\u4e91\u6216\u662fAWS S3\u670d\u52a1\u4e2d\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"public:\n  cfs:\n    storage: local\ncfs:\n  local:\n    folder: /storage\n  aliyun:\n    region:\n    internal: false,\n    bucket:\n    folder:\n    accessKeyId:\n    secretAccessKey:\n  aws:\n    region:\n    bucket:\n    folder:\n    accessKeyId:\n    secretAccessKey:\n")),Object(c.b)("h2",{id:"\u90ae\u4ef6\u914d\u7f6e"},"\u90ae\u4ef6\u914d\u7f6e"),Object(c.b)("p",null,"\u914d\u7f6eSMTP\u670d\u52a1\u7684\u76f8\u5173\u53c2\u6570\uff0c\u7528\u4e8e\u7cfb\u7edf\u53d1\u9001\u63a8\u9001\u90ae\u4ef6\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"email:\n  host:\n  port: 465\n  username:\n  password:\n  secure: true\n  from:\n")),Object(c.b)("h2",{id:"\u53d1\u9001\u77ed\u4fe1\u914d\u7f6e"},"\u53d1\u9001\u77ed\u4fe1\u914d\u7f6e"),Object(c.b)("p",null,"\u914d\u7f6e\u624b\u673a\u77ed\u4fe1\u670d\u52a1\uff0c\u7528\u4e8e\u901a\u8fc7\u624b\u673a\u77ed\u4fe1\u767b\u5f55\u548c\u63a5\u53d7\u8d26\u6237\u63d0\u9192\u6d88\u606f\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"sms:\n  twilio:\n    FROM:\n    ACCOUNT_SID:\n    AUTH_TOKEN:\n  qcloud:\n    smsqueue_interval: 1000\n    sdkappid:\n    appkey:\n    signname:\n")),Object(c.b)("h2",{id:"\u5bc6\u7801\u89c4\u5219\u914d\u7f6e"},"\u5bc6\u7801\u89c4\u5219\u914d\u7f6e"),Object(c.b)("p",null,"\u914d\u7f6e\u5bc6\u7801\u7684\u6821\u9a8c\u89c4\u5219\uff0c\u4f8b\u5982\u6700\u5c0f\u957f\u5ea6\uff0c\u662f\u5426\u5fc5\u987b\u5305\u542b\u6570\u5b57\u3001\u5927\u5199\u5b57\u6bcd\u3001\u5c0f\u5199\u5b57\u6bcd\u548c\u5b57\u7b26\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"password:\n  minimum_length: 10\n  lowercase: true\n  number: true\n  uppercase: true\n  symbol: true\n")))}i.isMDXComponent=!0},381:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),i=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o({},n,{},e)),t},s=function(e){var n=i(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,u=b(e,["components","mdxType","originalType","parentName"]),s=i(t),d=r,m=s["".concat(l,".").concat(d)]||s[d]||p[d]||c;return t?a.a.createElement(m,o({ref:n},u,{components:t})):a.a.createElement(m,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,l=new Array(c);l[0]=d;var o={};for(var b in n)hasOwnProperty.call(n,b)&&(o[b]=n[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<c;u++)l[u]=t[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);