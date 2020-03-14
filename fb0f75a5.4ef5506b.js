(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{319:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(1),r=t(6),i=(t(0),t(329)),o={title:"\u8868\u5355\u4e8b\u4ef6"},c={id:"object_form",title:"\u8868\u5355\u4e8b\u4ef6",description:"## \u8868\u5355\u89e6\u53d1\u5668\r",source:"@site/../docs/object_form.md",permalink:"/docs/object_form",sidebar:"\u5f00\u53d1\u5e73\u53f0",previous:{title:"\u64cd\u4f5c\u6309\u94ae",permalink:"/docs/object_action"},next:{title:"Connection",permalink:"/docs/developer/objectql_connection"}},l=[{value:"\u8868\u5355\u89e6\u53d1\u5668",id:"\u8868\u5355\u89e6\u53d1\u5668",children:[{value:"initialValues",id:"initialvalues",children:[]},{value:"onSubmit",id:"onsubmit",children:[]},{value:"validate",id:"validate",children:[]}]}],u={rightToc:l},d="wrapper";function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)(d,Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"\u8868\u5355\u89e6\u53d1\u5668"},"\u8868\u5355\u89e6\u53d1\u5668"),Object(i.b)("h3",{id:"initialvalues"},"initialValues"),Object(i.b)("p",null,"\u8868\u5355\u521d\u59cb\u5316\u6570\u636e\u65f6\u6267\u884c\u3002"),Object(i.b)("p",null,"initialValues \u53ef\u4ee5\u5b9a\u4e49\u4e3a\u540c\u6b65\u51fd\u6570\u6216\u662f\u5f02\u6b65\u51fd\u6570\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),'form:\n  initialValues: function () {\n      return {\n          name: "Hello World",\n          code: "hello_world\n      }\n  }\n')),Object(i.b)("h3",{id:"onsubmit"},"onSubmit"),Object(i.b)("p",null,"\u8868\u5355\u63d0\u4ea4\u65f6\u6267\u884c\u3002\u4f20\u5165\u8868\u5355\u4e2d\u7684\u5b57\u6bb5\u503c\uff0c\u5982\u679c\u6210\u529f\u8fd4\u56deundefined\uff0c\u5982\u679c\u5931\u8d25\u8fd4\u56de\u9519\u8bef\u6570\u7ec4\u3002"),Object(i.b)("p",null,"onSubmit \u53ef\u4ee5\u5b9a\u4e49\u4e3a\u540c\u6b65\u51fd\u6570\u6216\u662f\u5f02\u6b65\u51fd\u6570\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),'form:\n  onSubmit: function (formValues) {\n      return {\n          // \u8c03\u7528 ajax \u67e5\u8be2\u670d\u52a1\u7aef\n          code: "code \u5b57\u6bb5\u4e0d\u80fd\u91cd\u590d"\n      }\n  }\n')),Object(i.b)("h3",{id:"validate"},"validate"),Object(i.b)("p",null,"\u8868\u5355\u5b57\u6bb5\u4fee\u6539\u65f6\u6267\u884c\u3002\u4f20\u5165\u8868\u5355\u4e2d\u7684\u5b57\u6bb5\u503c\uff0c\u5982\u679c\u6210\u529f\u8fd4\u56deundefined\uff0c\u5982\u679c\u5931\u8d25\u8fd4\u56de\u9519\u8bef\u6570\u7ec4\u3002"),Object(i.b)("p",null,"validate \u53ef\u4ee5\u5b9a\u4e49\u4e3a\u540c\u6b65\u51fd\u6570\u6216\u662f\u5f02\u6b65\u51fd\u6570\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),'form:\n  validate: function (formValues) {\n      return {\n          // \u8c03\u7528 ajax \u67e5\u8be2\u670d\u52a1\u7aef\n          code: "code \u5b57\u6bb5\u4e0d\u80fd\u91cd\u590d"\n      }\n  }\n')))}p.isMDXComponent=!0},329:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return p}));var a=t(0),r=t.n(a),i=r.a.createContext({}),o=function(e){var n=r.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},c=function(e){var n=o(e.components);return r.a.createElement(i.Provider,{value:n},e.children)};var l="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}(e,["components","mdxType","originalType","parentName"]),d=o(t),p=a,b=d[c+"."+p]||d[p]||u[p]||i;return t?r.a.createElement(b,Object.assign({},{ref:n},l,{components:t})):r.a.createElement(b,Object.assign({},{ref:n},l))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c[l]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);