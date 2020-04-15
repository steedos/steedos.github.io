(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{213:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(1),o=t(6),a=(t(0),t(380)),c={title:"\u8868\u5355\u4e8b\u4ef6"},i={id:"developer/object_form",title:"\u8868\u5355\u4e8b\u4ef6",description:"## \u8868\u5355\u89e6\u53d1\u5668\r",source:"@site/../docs/developer/object_form.md",permalink:"/developer/object_form",sidebar:"Steedos \u5f00\u53d1\u6587\u6863",previous:{title:"\u64cd\u4f5c\u6309\u94ae",permalink:"/developer/object_action"},next:{title:"Connection",permalink:"/developer/objectql_connection"}},l=[{value:"\u8868\u5355\u89e6\u53d1\u5668",id:"\u8868\u5355\u89e6\u53d1\u5668",children:[{value:"initialValues",id:"initialvalues",children:[]},{value:"onSubmit",id:"onsubmit",children:[]},{value:"validate",id:"validate",children:[]}]}],u={rightToc:l};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u8868\u5355\u89e6\u53d1\u5668"},"\u8868\u5355\u89e6\u53d1\u5668"),Object(a.b)("h3",{id:"initialvalues"},"initialValues"),Object(a.b)("p",null,"\u8868\u5355\u521d\u59cb\u5316\u6570\u636e\u65f6\u6267\u884c\u3002"),Object(a.b)("p",null,"initialValues \u53ef\u4ee5\u5b9a\u4e49\u4e3a\u540c\u6b65\u51fd\u6570\u6216\u662f\u5f02\u6b65\u51fd\u6570\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),'form:\n  initialValues: function () {\n      return {\n          name: "Hello World",\n          code: "hello_world\n      }\n  }\n')),Object(a.b)("h3",{id:"onsubmit"},"onSubmit"),Object(a.b)("p",null,"\u8868\u5355\u63d0\u4ea4\u65f6\u6267\u884c\u3002\u4f20\u5165\u8868\u5355\u4e2d\u7684\u5b57\u6bb5\u503c\uff0c\u5982\u679c\u6210\u529f\u8fd4\u56deundefined\uff0c\u5982\u679c\u5931\u8d25\u8fd4\u56de\u9519\u8bef\u6570\u7ec4\u3002"),Object(a.b)("p",null,"onSubmit \u53ef\u4ee5\u5b9a\u4e49\u4e3a\u540c\u6b65\u51fd\u6570\u6216\u662f\u5f02\u6b65\u51fd\u6570\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),'form:\n  onSubmit: function (formValues) {\n      return {\n          // \u8c03\u7528 ajax \u67e5\u8be2\u670d\u52a1\u7aef\n          code: "code \u5b57\u6bb5\u4e0d\u80fd\u91cd\u590d"\n      }\n  }\n')),Object(a.b)("h3",{id:"validate"},"validate"),Object(a.b)("p",null,"\u8868\u5355\u5b57\u6bb5\u4fee\u6539\u65f6\u6267\u884c\u3002\u4f20\u5165\u8868\u5355\u4e2d\u7684\u5b57\u6bb5\u503c\uff0c\u5982\u679c\u6210\u529f\u8fd4\u56deundefined\uff0c\u5982\u679c\u5931\u8d25\u8fd4\u56de\u9519\u8bef\u6570\u7ec4\u3002"),Object(a.b)("p",null,"validate \u53ef\u4ee5\u5b9a\u4e49\u4e3a\u540c\u6b65\u51fd\u6570\u6216\u662f\u5f02\u6b65\u51fd\u6570\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),'form:\n  validate: function (formValues) {\n      return {\n          // \u8c03\u7528 ajax \u67e5\u8be2\u670d\u52a1\u7aef\n          code: "code \u5b57\u6bb5\u4e0d\u80fd\u91cd\u590d"\n      }\n  }\n')))}p.isMDXComponent=!0},380:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i({},n,{},e)),t},b=function(e){var n=p(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=p(t),f=r,m=b["".concat(c,".").concat(f)]||b[f]||d[f]||a;return t?o.a.createElement(m,i({ref:n},u,{components:t})):o.a.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);