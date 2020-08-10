(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{374:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},s=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(r),d=n,f=s["".concat(c,".").concat(d)]||s[d]||b[d]||o;return r?a.a.createElement(f,i({ref:t},l,{components:r})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},72:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(1),a=r(6),o=(r(0),r(374)),c={title:"\u81ea\u5b9a\u4e49API",sidebar_label:"API"},i={id:"developer/api/router",title:"\u81ea\u5b9a\u4e49API",description:"\u5728\u7cfb\u7edf\u4e2d\uff0c\u53ef\u4ee5\u5b9a\u4e49API\u5904\u7406\u76f8\u5173\u7684\u4e1a\u52a1\u903b\u8f91\u5e76\u8fd4\u56de\u7ed3\u679c\u3002",source:"@site/../docs/developer/api/router.md",permalink:"/developer/api/router",sidebar_label:"API",sidebar:"\u534e\u708eAPI",previous:{title:"JWT",permalink:"/developer/api/api_jwt"}},u=[{value:"\u58f0\u660e\u81ea\u5b9a\u4e49API",id:"\u58f0\u660e\u81ea\u5b9a\u4e49api",children:[]},{value:"\u4f7f\u7528\u4ee3\u7801\u7f16\u5199\u5b9e\u4f8b",id:"\u4f7f\u7528\u4ee3\u7801\u7f16\u5199\u5b9e\u4f8b",children:[]},{value:"\u4f7f\u7528\u4ee3\u7801\u7f16\u5199\u5b9e\u4f8b (\u767b\u5f55\u8ba4\u8bc1)",id:"\u4f7f\u7528\u4ee3\u7801\u7f16\u5199\u5b9e\u4f8b-\u767b\u5f55\u8ba4\u8bc1",children:[]}],l={rightToc:u};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u5728\u7cfb\u7edf\u4e2d\uff0c\u53ef\u4ee5\u5b9a\u4e49API\u5904\u7406\u76f8\u5173\u7684\u4e1a\u52a1\u903b\u8f91\u5e76\u8fd4\u56de\u7ed3\u679c\u3002"),Object(o.b)("h3",{id:"\u58f0\u660e\u81ea\u5b9a\u4e49api"},"\u58f0\u660e\u81ea\u5b9a\u4e49API"),Object(o.b)("p",null,"\u6587\u4ef6\u89c4\u8303"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u6587\u4ef6\u540d\u79f0\u5fc5\u987b\u4ee5 ",Object(o.b)("inlineCode",{parentName:"li"},".router.js")," \u7ed3\u5c3e, \u6bd4\u5982: ",Object(o.b)("inlineCode",{parentName:"li"},"xxx.router.js")),Object(o.b)("li",{parentName:"ul"},"\u6587\u4ef6\u5fc5\u987b\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"li"},"exports.default ")," \u5bfc\u51fa\u4e00\u4e2a ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"http://expressjs.com/en/4x/api.html#router"}),"express.Router")," \u7684\u5b9e\u4f8b")),Object(o.b)("h3",{id:"\u4f7f\u7528\u4ee3\u7801\u7f16\u5199\u5b9e\u4f8b"},"\u4f7f\u7528\u4ee3\u7801\u7f16\u5199\u5b9e\u4f8b"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"  const express = require(\"express\");\n  const router = express.Router();\n\n  router.get('/path', async function (req, res) {\n      res.status(200).send({message: 'test ok'});\n  });\n  exports.default = router;\n")),Object(o.b)("h3",{id:"\u4f7f\u7528\u4ee3\u7801\u7f16\u5199\u5b9e\u4f8b-\u767b\u5f55\u8ba4\u8bc1"},"\u4f7f\u7528\u4ee3\u7801\u7f16\u5199\u5b9e\u4f8b (\u767b\u5f55\u8ba4\u8bc1)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u8ba4\u8bc1\u5904\u7406\u5668: ",Object(o.b)("inlineCode",{parentName:"li"},"core.requireAuthentication"),", \u8ba4\u8bc1\u6210\u529f, \u5219\u53ef\u4ee5\u5728req\u4e2d\u83b7\u53d6\u5230\u5f53\u524d\u7528\u6237\u4fe1\u606f",Object(o.b)("inlineCode",{parentName:"li"},"req.user")," ; \u8ba4\u8bc1\u5931\u8d25, \u5219\u4f1a\u8fd4\u56de401\u9519\u8bef")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"  const express = require(\"express\");\n  const router = express.Router();\n  const core = require('@steedos/core');\n\n  router.get('/path', core.requireAuthentication, async function (req, res) {\n      res.status(200).send({message: 'test ok'});\n  });\n  exports.default = router;\n")))}p.isMDXComponent=!0}}]);