(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{440:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return f}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i({},r,{},e)),t},s=function(e){var r=p(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(t),d=n,f=s["".concat(c,".").concat(d)]||s[d]||b[d]||a;return t?o.a.createElement(f,i({ref:r},l,{components:t})):o.a.createElement(f,i({ref:r},l))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},76:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return u})),t.d(r,"default",(function(){return p}));var n=t(1),o=t(6),a=(t(0),t(440)),c={title:"\u670d\u52a1\u7aefAPI",sidebar_label:"API"},i={unversionedId:"developer/api/router",id:"developer/api/router",isDocsHomePage:!1,title:"\u670d\u52a1\u7aefAPI",description:"\u5728\u7cfb\u7edf\u4e2d\uff0c\u53ef\u4ee5\u5b9a\u4e49API\u5904\u7406\u76f8\u5173\u7684\u4e1a\u52a1\u903b\u8f91\u5e76\u8fd4\u56de\u7ed3\u679c\u3002",source:"@site/../docs/developer/api/router.md",slug:"/developer/api/router",permalink:"/developer/api/router",version:"current",sidebar_label:"API",sidebar:"\u5f00\u53d1\u4eba\u5458",previous:{title:"JWT",permalink:"/developer/api/api_jwt"}},u=[{value:"\u58f0\u660e\u81ea\u5b9a\u4e49API",id:"\u58f0\u660e\u81ea\u5b9a\u4e49api",children:[]},{value:"\u4f7f\u7528\u4ee3\u7801\u7f16\u5199\u5b9e\u4f8b",id:"\u4f7f\u7528\u4ee3\u7801\u7f16\u5199\u5b9e\u4f8b",children:[]},{value:"\u4f7f\u7528\u4ee3\u7801\u7f16\u5199\u5b9e\u4f8b (\u767b\u5f55\u8ba4\u8bc1)",id:"\u4f7f\u7528\u4ee3\u7801\u7f16\u5199\u5b9e\u4f8b-\u767b\u5f55\u8ba4\u8bc1",children:[]}],l={rightToc:u};function p(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u5728\u7cfb\u7edf\u4e2d\uff0c\u53ef\u4ee5\u5b9a\u4e49API\u5904\u7406\u76f8\u5173\u7684\u4e1a\u52a1\u903b\u8f91\u5e76\u8fd4\u56de\u7ed3\u679c\u3002"),Object(a.b)("h3",{id:"\u58f0\u660e\u81ea\u5b9a\u4e49api"},"\u58f0\u660e\u81ea\u5b9a\u4e49API"),Object(a.b)("p",null,"\u6587\u4ef6\u89c4\u8303"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u6587\u4ef6\u540d\u79f0\u5fc5\u987b\u4ee5 ",Object(a.b)("inlineCode",{parentName:"li"},".router.js")," \u7ed3\u5c3e, \u6bd4\u5982: ",Object(a.b)("inlineCode",{parentName:"li"},"xxx.router.js")),Object(a.b)("li",{parentName:"ul"},"\u6587\u4ef6\u5fc5\u987b\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"li"},"exports.default ")," \u5bfc\u51fa\u4e00\u4e2a ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"http://expressjs.com/en/4x/api.html#router"}),"express.Router")," \u7684\u5b9e\u4f8b")),Object(a.b)("h3",{id:"\u4f7f\u7528\u4ee3\u7801\u7f16\u5199\u5b9e\u4f8b"},"\u4f7f\u7528\u4ee3\u7801\u7f16\u5199\u5b9e\u4f8b"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"  const express = require(\"express\");\n  const router = express.Router();\n\n  router.get('/path', async function (req, res) {\n      res.status(200).send({message: 'test ok'});\n  });\n  exports.default = router;\n")),Object(a.b)("h3",{id:"\u4f7f\u7528\u4ee3\u7801\u7f16\u5199\u5b9e\u4f8b-\u767b\u5f55\u8ba4\u8bc1"},"\u4f7f\u7528\u4ee3\u7801\u7f16\u5199\u5b9e\u4f8b (\u767b\u5f55\u8ba4\u8bc1)"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u8ba4\u8bc1\u5904\u7406\u5668: ",Object(a.b)("inlineCode",{parentName:"li"},"core.requireAuthentication"),", \u8ba4\u8bc1\u6210\u529f, \u5219\u53ef\u4ee5\u5728req\u4e2d\u83b7\u53d6\u5230\u5f53\u524d\u7528\u6237\u4fe1\u606f",Object(a.b)("inlineCode",{parentName:"li"},"req.user")," ; \u8ba4\u8bc1\u5931\u8d25, \u5219\u4f1a\u8fd4\u56de401\u9519\u8bef")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"  const express = require(\"express\");\n  const router = express.Router();\n  const core = require('@steedos/core');\n\n  router.get('/path', core.requireAuthentication, async function (req, res) {\n      res.status(200).send({message: 'test ok'});\n  });\n  exports.default = router;\n")))}p.isMDXComponent=!0}}]);