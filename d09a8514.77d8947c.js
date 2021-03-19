(window.webpackJsonp=window.webpackJsonp||[]).push([[360],{417:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(1),o=r(6),a=(r(0),r(495)),c={title:"\u6ce8\u9500"},l={unversionedId:"developer/api/api_logout",id:"developer/api/api_logout",isDocsHomePage:!1,title:"\u6ce8\u9500",description:"\u6ce8\u9500\u5f53\u524d\u767b\u5f55\u7684\u7528\u6237\u3002",source:"@site/../docs/developer/api/api_logout.md",slug:"/developer/api/api_logout",permalink:"/developer/api/api_logout",version:"current",sidebar:"\u6587\u6863",previous:{title:"\u9a8c\u8bc1\u767b\u5f55\u72b6\u6001",permalink:"/developer/api/api_validate"},next:{title:"\u6d41\u7a0b\u89e6\u53d1\u5668",permalink:"/help/workflow/flow_webhooks"}},i=[{value:"URL",id:"url",children:[]},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570",children:[]}],p={rightToc:i};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u6ce8\u9500\u5f53\u524d\u767b\u5f55\u7684\u7528\u6237\u3002"),Object(a.b)("h3",{id:"url"},"URL"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"POST 'http://localhost:5000/accounts/logout'\n")),Object(a.b)("h3",{id:"\u8bf7\u6c42\u53c2\u6570"},"\u8bf7\u6c42\u53c2\u6570"),Object(a.b)("p",null,"\u901a\u8fc7 Header Authorization \u4f20\u5165 API Key \u7684\u503c\u3002"),Object(a.b)("p",null,"\u4f8b\u5982\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"Authorization : Bearer apikey,Gooseneoeu7ABoJC0FQq4Q5DcqNPebL87Jyc27NMCrd\n")),Object(a.b)("p",null,"\u793a\u4f8b\u5982\u4e0b\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"})," curl \\\n   -X POST\uff1ahttp://192.168.0.95:5080/accounts/logout\n   -b Authorization : Bearer apikey,Gooseneoeu7ABoJC0FQq4Q5DcqNPebL87Jyc27NMCrd\n")),Object(a.b)("p",null,"\u8fd4\u56de\u7ed3\u679c\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"null\n")))}u.isMDXComponent=!0},495:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},b=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,f=b["".concat(c,".").concat(d)]||b[d]||s[d]||a;return r?o.a.createElement(f,l({ref:t},p,{components:r})):o.a.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var p=2;p<a;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);