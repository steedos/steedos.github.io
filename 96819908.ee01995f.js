(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{311:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return u}));var r=t(1),a=t(6),o=(t(0),t(495)),p={title:"\u65b0\u589e"},c={unversionedId:"developer/api/graphql_add",id:"developer/api/graphql_add",isDocsHomePage:!1,title:"\u65b0\u589e",description:"\x3c!-- ### \u5728graphql\u754c\u9762\u4e2d\u65b0\u589e\u6570\u636e",source:"@site/../docs/developer/api/graphql_add.md",slug:"/developer/api/graphql_add",permalink:"/developer/api/graphql_add",version:"current",sidebar:"\u6587\u6863",previous:{title:"\u67e5\u8be2",permalink:"/developer/api/graphql_query"},next:{title:"\u7f16\u8f91",permalink:"/developer/api/graphql_edit"}},i=[],l={rightToc:i};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u5728 Steedos \u4e2d\u901a\u8fc7 GraphQL API \u8fdb\u884c\u6570\u636e\u63d2\u5165\u65f6\uff0c\u9700\u8981\u5c06\u524d\u7f00",Object(o.b)("inlineCode",{parentName:"p"},"query"),"\u66ff\u6362\u4e3a",Object(o.b)("inlineCode",{parentName:"p"},"mutation")),Object(o.b)("p",null,"\u793a\u4f8b\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),'mutation {\n  tasks__insert(data:{name:"Task One"}) {\n    name\n    _id\n  }\n}\n')),Object(o.b)("p",null,"\u5176\u4e2d\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"tasks"),"\u4ee3\u8868\u8981\u63d2\u5165\u8bb0\u5f55\u7684\u5bf9\u8c61\u540d\u79f0\uff0c",Object(o.b)("inlineCode",{parentName:"p"},'{name:"Task One"}'),"\u4ee3\u8868\u8981\u63d2\u5165\u7684JSON\u6570\u636e"),Object(o.b)("p",null,"\u5173\u952e\u5b57",Object(o.b)("inlineCode",{parentName:"p"},"__insert"),"\u8868\u793a\u901a\u8fc7 GraphQL API \u5728 Steedos \u4e0a\u63d2\u5165\u4e00\u6761\u8bb0\u5f55\u3002"),Object(o.b)("p",null,"\u7ed3\u679c\u5982\u4e0b\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),'{\n  "data": {\n    "tasks__insert": {\n      "name": "Task One",\n      "_id": "5cb98489d09a343e14daae95"\n    }\n  }\n}\n')),Object(o.b)("p",null,"\u5f53\u901a\u8fc7 Steedos \u4e0a\u7684 GraphQL API \u63d2\u5165\u6570\u636e\u65f6\uff0c\u53ea\u80fd\u63d2\u5165\u5177\u6709\u63d2\u5165\u6743\u9650\u7684\u5bf9\u8c61\u7684\u8bb0\u5f55\uff0c\u8be6\u60c5\u89c1",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/developer/api/graphql"}),"\u6570\u636e\u6743\u9650"),"\u3002"))}u.isMDXComponent=!0},495:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},b=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=u(t),s=r,m=b["".concat(p,".").concat(s)]||b[s]||d[s]||o;return t?a.a.createElement(m,c({ref:n},l,{components:t})):a.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=s;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var l=2;l<o;l++)p[l]=t[l];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);