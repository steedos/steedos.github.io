(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{202:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return c})),a.d(n,"metadata",(function(){return l})),a.d(n,"rightToc",(function(){return o})),a.d(n,"default",(function(){return d}));var t=a(1),r=a(9),i=(a(0),a(397)),c={title:"\u65b0\u589e"},l={id:"api/graphql_add",title:"\u65b0\u589e",description:"### \u5728graphql\u754c\u9762\u4e2d\u65b0\u589e\u6570\u636e",source:"@site/../docs/api/graphql_add.md",permalink:"/api/graphql_add",sidebar:"\u534e\u708e\u5f00\u53d1\u5e73\u53f0 API",previous:{title:"\u67e5\u8be2",permalink:"/api/graphql_query"},next:{title:"\u7f16\u8f91",permalink:"/api/graphql_edit"}},o=[{value:"\u5728graphql\u754c\u9762\u4e2d\u65b0\u589e\u6570\u636e",id:"\u5728graphql\u754c\u9762\u4e2d\u65b0\u589e\u6570\u636e",children:[]}],p={rightToc:o},u="wrapper";function d(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(u,Object(t.a)({},p,a,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"\u5728graphql\u754c\u9762\u4e2d\u65b0\u589e\u6570\u636e"},"\u5728graphql\u754c\u9762\u4e2d\u65b0\u589e\u6570\u636e"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u65b9\u6cd5\u540d\u683c\u5f0f\u4e3a\uff1a {\u5b9a\u4e49\u7684object.name}_INSERT_ONE"),Object(i.b)("li",{parentName:"ul"},"\u63a5\u53d7\u4e00\u4e2a\u53c2\u6570",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"data:JSON\u683c\u5f0f"))),Object(i.b)("li",{parentName:"ul"},"\u5982\uff1a")),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-graphql"}),'mutation {\n  organizations_INSERT_ONE(data:{name:"\u8d22\u52a1\u90e8"})\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u7ed3\u679c\uff1a")),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "organizations_INSERT_ONE": {\n      "name": "\u8d22\u52a1\u90e8",\n      "_id": "5cb98489d09a343e14daae95"\n    }\n  }\n}\n')))}d.isMDXComponent=!0},397:function(e,n,a){"use strict";a.d(n,"a",(function(){return l})),a.d(n,"b",(function(){return d}));var t=a(0),r=a.n(t),i=r.a.createContext({}),c=function(e){var n=r.a.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):Object.assign({},n,e)),a},l=function(e){var n=c(e.components);return r.a.createElement(i.Provider,{value:n},e.children)};var o="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=Object(t.forwardRef)((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,l=e.parentName,o=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===n.indexOf(t)&&(a[t]=e[t]);return a}(e,["components","mdxType","originalType","parentName"]),u=c(a),d=t,b=u[l+"."+d]||u[d]||p[d]||i;return a?r.a.createElement(b,Object.assign({},{ref:n},o,{components:a})):r.a.createElement(b,Object.assign({},{ref:n},o))}));function d(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,c=new Array(i);c[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[o]="string"==typeof e?e:t,c[1]=l;for(var d=2;d<i;d++)c[d]=a[d];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);