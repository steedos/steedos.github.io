(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{222:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(1),r=n(6),i=(n(0),n(335)),c={title:"\u7f16\u8f91"},o={id:"api/graphql_edit",title:"\u7f16\u8f91",description:"### \u5728graphql\u754c\u9762\u4e2d\u7f16\u8f91\u6570\u636e",source:"@site/../docs/api/graphql_edit.md",permalink:"/docs/api/graphql_edit",editUrl:"https://github.com/steedos/steedos-website/edit/master/website/../docs/api/graphql_edit.md",sidebar:"API",previous:{title:"\u65b0\u589e",permalink:"/docs/api/graphql_add"},next:{title:"\u5220\u9664",permalink:"/docs/api/graphql_delete"}},l=[{value:"\u5728graphql\u754c\u9762\u4e2d\u7f16\u8f91\u6570\u636e",id:"\u5728graphql\u754c\u9762\u4e2d\u7f16\u8f91\u6570\u636e",children:[]}],p={rightToc:l},d="wrapper";function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)(d,Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"\u5728graphql\u754c\u9762\u4e2d\u7f16\u8f91\u6570\u636e"},"\u5728graphql\u754c\u9762\u4e2d\u7f16\u8f91\u6570\u636e"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u65b9\u6cd5\u540d\u683c\u5f0f\u4e3a\uff1a {\u5b9a\u4e49\u7684object.name}_UPDATE_ONE"),Object(i.b)("li",{parentName:"ul"},"\u63a5\u53d7\u4e00\u4e2a\u53c2\u6570",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"_id:String\u7c7b\u578b"),Object(i.b)("li",{parentName:"ul"},"data:JSON\u7c7b\u578b"))),Object(i.b)("li",{parentName:"ul"},"\u5982\uff1a")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'mutation {\n  organizations_UPDATE_ONE(_id:"5cb98489d09a343e14daae95", data:{name:"\u8d22\u52a1\u90e8"})\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u7ed3\u679c\u8fd4\u56de\u66f4\u65b0\u540e\u7684\u6570\u636e\uff1a")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "organizations_INSERT_ONE": {\n      "name": "\u8d22\u52a1\u90e8",\n      "_id": "5cb98489d09a343e14daae95"\n    }\n  }\n}\n')))}u.isMDXComponent=!0},335:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a),i=r.a.createContext({}),c=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},o=function(e){var t=c(e.components);return r.a.createElement(i.Provider,{value:t},e.children)};var l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,s=d[o+"."+u]||d[u]||p[u]||i;return n?r.a.createElement(s,Object.assign({},{ref:t},l,{components:n})):r.a.createElement(s,Object.assign({},{ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[l]="string"==typeof e?e:a,c[1]=o;for(var u=2;u<i;u++)c[u]=n[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);