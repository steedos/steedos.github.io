(self.webpackChunk=self.webpackChunk||[]).push([[9191],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return i},kt:function(){return v}});var n=t(67294),o=t.n(n);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o().createContext({}),u=function(e){var r=o().useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},i=function(e){var r=u(e.components);return o().createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o().createElement(o().Fragment,{},r)}},f=o().forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),i=u(t),f=n,v=i["".concat(a,".").concat(f)]||i[f]||d[f]||s;return t?o().createElement(v,c(c({ref:r},l),{},{components:t})):o().createElement(v,c({ref:r},l))}));function v(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,a=new Array(s);a[0]=f;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<s;l++)a[l]=t[l];return o().createElement.apply(null,a)}return o().createElement.apply(null,t)}f.displayName="MDXCreateElement"},58715:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=t(74034),o=t(79973),s=(t(67294),t(3905)),a=["components"],c={title:"\u5347\u7ea7\u7248\u672c"},p=void 0,l={unversionedId:"developer/steedos_server",id:"developer/steedos_server",isDocsHomePage:!1,title:"\u5347\u7ea7\u7248\u672c",description:"package.json: \u4e3b\u8981\u7528\u4e8e\u914d\u7f6e\u9879\u76ee\u4f9d\u8d56\u7684npm\u5305\uff0c\u4f4d\u4e8e\u9879\u76ee\u7684\u6839\u76ee\u5f55\u3002",source:"@site/../docs/developer/steedos_server.md",sourceDirName:"developer",slug:"/developer/steedos_server",permalink:"/developer/steedos_server",version:"current",frontMatter:{title:"\u5347\u7ea7\u7248\u672c"}},u=[{value:"\u5347\u7ea7 steedos-server \u7248\u672c",id:"\u5347\u7ea7-steedos-server-\u7248\u672c",children:[]}],i={toc:u};function d(e){var r=e.components,t=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"package.json: \u4e3b\u8981\u7528\u4e8e\u914d\u7f6e\u9879\u76ee\u4f9d\u8d56\u7684npm\u5305\uff0c\u4f4d\u4e8e\u9879\u76ee\u7684\u6839\u76ee\u5f55\u3002"),(0,s.kt)("p",null,'\u800c\u5347\u7ea7 steedos-server \u7248\u672c\uff0c\u53ef\u901a\u8fc7\u4fee\u6539package.json\u4e2d\u7684"dependencies"\u4e0b\u7684"steedos-server"\u7248\u672c\u53f7\uff0c\u6765\u66f4\u65b0\u53d1\u5305\u7684\u6700\u65b0\u7248\u672c\u3002'),(0,s.kt)("h2",{id:"\u5347\u7ea7-steedos-server-\u7248\u672c"},"\u5347\u7ea7 steedos-server \u7248\u672c"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},'"dependencies": {\n        "@steedos/accounts": "1.19.10",\n        "@steedos/plugin-enterprise": "^1.20.15",\n        "@steedos/steedos-plugin-workflow": "^2.0.10",\n        "dotenv-flow": "^3.1.0",\n        "steedos-server": "1.21.8"\n')),(0,s.kt)("p",null,'\u4f8b\u5982\uff1a"steedos-server"\u4ece"1.21.0"\u66f4\u6539\u4e3a\u6700\u65b0\u7248\u672c"1.21.8"\u540e\uff0c\u4fdd\u5b58package.json\u6587\u4ef6\uff0c\u5e76\u5728\u7ec8\u7aef\u6267\u884cyarn\u5b89\u88c5\u76f8\u5173\u4f9d\u8d56\u5305\u540e\uff0c\u7ee7\u7eed\u6267\u884c\uff1a'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"yarn start\n")),(0,s.kt)("p",null,"\u6210\u529f\u91cd\u542f\u670d\u52a1\uff0c\u5373\u5b8c\u6210\u5347\u7ea7 steedos-server \u7248\u672c\u3002"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u67e5\u8be2\u6700\u65b0 steedos-server \u7248\u672c\u53f7\uff0c\u53ef\u901a\u8fc7 ",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/steedos-server"},"https://www.npmjs.com/package/steedos-server")," \u8bbf\u95ee\u3002")))}d.isMDXComponent=!0}}]);