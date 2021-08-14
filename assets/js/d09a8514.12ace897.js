(self.webpackChunk=self.webpackChunk||[]).push([[8278],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o().createContext({}),p=function(e){var t=o().useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return o().createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o().createElement(o().Fragment,{},t)}},d=o().forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(r),d=n,m=s["".concat(l,".").concat(d)]||s[d]||f[d]||a;return r?o().createElement(m,i(i({ref:t},c),{},{components:r})):o().createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return o().createElement.apply(null,l)}return o().createElement.apply(null,r)}d.displayName="MDXCreateElement"},77821:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var n=r(74034),o=r(79973),a=(r(67294),r(3905)),l=["components"],i={title:"\u6ce8\u9500"},u=void 0,c={unversionedId:"developer/api/api_logout",id:"developer/api/api_logout",isDocsHomePage:!1,title:"\u6ce8\u9500",description:"\u6ce8\u9500\u5f53\u524d\u767b\u5f55\u7684\u7528\u6237\u3002",source:"@site/../docs/developer/api/api_logout.md",sourceDirName:"developer/api",slug:"/developer/api/api_logout",permalink:"/developer/api/api_logout",version:"current",frontMatter:{title:"\u6ce8\u9500"},sidebar:"\u6587\u6863",previous:{title:"\u9a8c\u8bc1\u767b\u5f55\u72b6\u6001",permalink:"/developer/api/api_validate"},next:{title:"\u6d41\u7a0b\u89e6\u53d1\u5668",permalink:"/help/workflow/flow_webhooks"}},p=[{value:"URL",id:"url",children:[]},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570",children:[]}],s={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6ce8\u9500\u5f53\u524d\u767b\u5f55\u7684\u7528\u6237\u3002"),(0,a.kt)("h3",{id:"url"},"URL"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"POST 'http://localhost:5000/accounts/logout'\n")),(0,a.kt)("h3",{id:"\u8bf7\u6c42\u53c2\u6570"},"\u8bf7\u6c42\u53c2\u6570"),(0,a.kt)("p",null,"\u901a\u8fc7 Header Authorization \u4f20\u5165 API Key \u7684\u503c\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Authorization : Bearer apikey,Gooseneoeu7ABoJC0FQq4Q5DcqNPebL87Jyc27NMCrd\n")),(0,a.kt)("p",null,"\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"}," curl \\\n   -X POST\uff1ahttp://192.168.0.95:5080/accounts/logout\n   -b Authorization : Bearer apikey,Gooseneoeu7ABoJC0FQq4Q5DcqNPebL87Jyc27NMCrd\n")),(0,a.kt)("p",null,"\u8fd4\u56de\u7ed3\u679c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"null\n")))}f.isMDXComponent=!0}}]);