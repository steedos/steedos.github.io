(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{283:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(1),a=(r(0),r(438));const o={title:"\u5220\u9664"},c={unversionedId:"developer/api/odata_delete",id:"developer/api/odata_delete",isDocsHomePage:!1,title:"\u5220\u9664",description:"\u901a\u8fc7 DELETE \u8bf7\u6c42\u5220\u9664\u4e1a\u52a1\u6570\u636e\u3002",source:"@site/../docs/developer/api/odata_delete.md",slug:"/developer/api/odata_delete",permalink:"/developer/api/odata_delete",version:"current",sidebar:"\u5f00\u53d1\u4eba\u5458",previous:{title:"\u66f4\u65b0",permalink:"/developer/api/odata_edit"},next:{title:"\u81ea\u5b9a\u4e49\u51fd\u6570",permalink:"/developer/api/odata_functions"}},i=[{value:"\u63a5\u53e3\u4fe1\u606f",id:"\u63a5\u53e3\u4fe1\u606f",children:[]}],l={rightToc:i};function p({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u901a\u8fc7 DELETE \u8bf7\u6c42\u5220\u9664\u4e1a\u52a1\u6570\u636e\u3002"),Object(a.b)("h3",{id:"\u63a5\u53e3\u4fe1\u606f"},"\u63a5\u53e3\u4fe1\u606f"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u8bf7\u6c42\u65b9\u6cd5\uff1aDELETE")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u8bf7\u6c42\u63a5\u53e3\uff1a/api/v4/{object_name}/{record_id}")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u63a5\u53e3\u8bf4\u660e\uff1a"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"object_name\uff1a\u5220\u9664\u5bf9\u8c61\u7684\u5bf9\u8c61\u540d"),Object(a.b)("li",{parentName:"ul"},"record_id\uff1a\u5220\u9664\u8bb0\u5f55\u7684\u4e3b\u952e ID"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u8bf7\u6c42\u53c2\u6570\u8bf4\u660e\uff1a"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u65e0"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"response \u8bf4\u660e\uff1a"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u5220\u9664\u6210\u529f\u540e\uff0c\u5c06\u8fd4\u56de\u72b6\u6001\u7801 200"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"\u793a\u4f8b\u5982\u4e0b\uff1a"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"HTTP \u8bf7\u6c42")),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," curl \\\n   -X DELETE https://beta.steedos.com/api/odata/v4/Af8e****DqD3/contacts/hbysEccFT2fXjHtpd \\\n   -b 'X-Space-Token=55090bbe52...aXpwo'\n")))))}p.isMDXComponent=!0},438:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(r),m=n,s=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?a.a.createElement(s,i({ref:t},p,{components:r})):a.a.createElement(s,i({ref:t},p))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);