(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(6),c=(n(0),n(341)),o={title:"\u7f16\u8f91"},i={id:"api/graphql_edit",title:"\u7f16\u8f91",description:"### \u5728graphql\u754c\u9762\u4e2d\u7f16\u8f91\u6570\u636e\r",source:"@site/..\\docs\\api\\graphql_edit.md",permalink:"/docs/api/graphql_edit",sidebar:"API",previous:{title:"\u65b0\u589e",permalink:"/docs/api/graphql_add"},next:{title:"\u5220\u9664",permalink:"/docs/api/graphql_delete"}},l=[{value:"\u5728graphql\u754c\u9762\u4e2d\u7f16\u8f91\u6570\u636e",id:"\u5728graphql\u754c\u9762\u4e2d\u7f16\u8f91\u6570\u636e",children:[]}],p={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"\u5728graphql\u754c\u9762\u4e2d\u7f16\u8f91\u6570\u636e"},"\u5728graphql\u754c\u9762\u4e2d\u7f16\u8f91\u6570\u636e"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u65b9\u6cd5\u540d\u683c\u5f0f\u4e3a\uff1a {\u5b9a\u4e49\u7684object.name}_UPDATE_ONE"),Object(c.b)("li",{parentName:"ul"},"\u63a5\u53d7\u4e00\u4e2a\u53c2\u6570",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"_id:String\u7c7b\u578b"),Object(c.b)("li",{parentName:"ul"},"data:JSON\u7c7b\u578b"))),Object(c.b)("li",{parentName:"ul"},"\u5982\uff1a")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'mutation {\n  organizations_UPDATE_ONE(_id:"5cb98489d09a343e14daae95", data:{name:"\u8d22\u52a1\u90e8"})\n}\n')),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u7ed3\u679c\u8fd4\u56de\u66f4\u65b0\u540e\u7684\u6570\u636e\uff1a")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "organizations_INSERT_ONE": {\n      "name": "\u8d22\u52a1\u90e8",\n      "_id": "5cb98489d09a343e14daae95"\n    }\n  }\n}\n')))}u.isMDXComponent=!0},341:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},b=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=u(n),f=r,m=b["".concat(o,".").concat(f)]||b[f]||d[f]||c;return n?a.a.createElement(m,i({ref:t},p,{components:n})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<c;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);