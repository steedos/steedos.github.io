(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{276:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(1),r=n(6),o=(n(0),n(329)),p={title:"GraphQL \u7b80\u4ecb"},i={id:"api/graphql",title:"GraphQL \u7b80\u4ecb",description:"\u5f53\u4f60\u5728 Steedos \u4e2d\u914d\u7f6e\u4e86\u5bf9\u8c61\u4ee5\u540e\uff0cSteedos \u4e3a\u4f60\u81ea\u52a8\u751f\u6210 [GraphQL](http://www.graphql.org/) API\u3002\r",source:"@site/../docs/api/graphql.md",permalink:"/docs/api/graphql",sidebar:"API",previous:{title:"\u6570\u636e\u5b57\u5178",permalink:"/docs/api/odata_metadata"},next:{title:"\u8ba4\u8bc1",permalink:"/docs/api/graphql_auth"}},l=[{value:"\u8fd0\u884c\u4e00\u4e2agraphql\u670d\u52a1\u5668",id:"\u8fd0\u884c\u4e00\u4e2agraphql\u670d\u52a1\u5668",children:[]}],s={rightToc:l},c="wrapper";function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)(c,Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u5f53\u4f60\u5728 Steedos \u4e2d\u914d\u7f6e\u4e86\u5bf9\u8c61\u4ee5\u540e\uff0cSteedos \u4e3a\u4f60\u81ea\u52a8\u751f\u6210 ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.graphql.org/"}),"GraphQL")," API\u3002"),Object(o.b)("p",null,"\u4f8b\u5982\u4f60\u5b9a\u4e49\u4e86\u5bf9\u8c61 Post"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"name: Post\nfields:\n  name:\n    type: String\n  description:\n    type: String\n  isPublished:\n    type: Boolean\n  owner:\n    label: Author\n    type: master_detail\n    reference_to: User\n")),Object(o.b)("p",null,"Steedos \u81ea\u52a8\u751f\u6210\u4ee5\u4e0b GraphQL Schema"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type User {\n  id: ID,\n  name: String\n  username: String\n}\ntype Post {\n  id: ID\n  name: String\n  description: String\n  isPublished: String\n  author: User\n}\n\ntype Query {\n  Posts(where): [Post]\n  Post(id: String): Post\n}\n\ntype Mutation {\n  createPost(data):Post\n  updatePost(data):Post\n  deletePost(id: String):Post\n}\n")),Object(o.b)("h3",{id:"\u8fd0\u884c\u4e00\u4e2agraphql\u670d\u52a1\u5668"},"\u8fd0\u884c\u4e00\u4e2agraphql\u670d\u52a1\u5668"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u4f7f\u7528",Object(o.b)("inlineCode",{parentName:"li"},"@steedos/objectql"),"\u5305\u63d0\u4f9b\u7684\u65b9\u6cd5",Object(o.b)("inlineCode",{parentName:"li"},"getSteedosSchema"),"\u83b7\u53d6\u5230schema\u5bf9\u8c61"),Object(o.b)("li",{parentName:"ul"},"\u4f7f\u7528schema\u5bf9\u8c61\u7684",Object(o.b)("inlineCode",{parentName:"li"},"addDataSource"),"\u65b9\u6cd5\u6dfb\u52a0\u6570\u636e\u6e90"),Object(o.b)("li",{parentName:"ul"},"\u6dfb\u52a0\u597d\u6570\u636e\u6e90\u4e4b\u540e\u8c03\u7528",Object(o.b)("inlineCode",{parentName:"li"},"@steedos/objectql"),"\u5305\u63d0\u4f9b\u7684",Object(o.b)("inlineCode",{parentName:"li"},"getGraphQLRoutes"),"\u65b9\u6cd5\u83b7\u53d6",Object(o.b)("inlineCode",{parentName:"li"},"express.Router()"),"\u5bf9\u8c61, \u793a\u4f8b\u5982\u4e0b\uff1a")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { getSteedosSchema, getGraphQLRoutes } from '@steedos/objectql';\nimport express = require('express');\n\nlet schema = getSteedosSchema();\n// \u6dfb\u52a0\u9ed8\u8ba4\u6570\u636e\u6e90 default\u5373\u4e3a\u6b64\u6570\u636e\u6e90\u7684name\nschema.addDataSource('default', {\n    driver: \"mongo\",\n    url: 'mongodb://127.0.0.1:27017/steedos',\n    objects: {\n        post: {\n            fields: {\n                title: {\n                    type: \"text\",\n                    inlineHelpText: \"fsdafas\"\n                }\n            }\n        }\n    }\n})\n// \u83b7\u53d6\u6839\u636e\u4f20\u5165\u7684datasource\u751f\u6210\u7684express\u7684router\u5bf9\u8c61\nlet route = getGraphQLRoutes(schema.getDataSource('default'));\n\n// \u5c06\u83b7\u53d6\u7684route\u7ed1\u5b9a\u5230\u81ea\u5b9a\u4e49\u7684express\u5bf9\u8c61\u4e2d\nlet app = express();\napp.use('/customUrl', route);\napp.listen(3000)\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u901a\u8fc7",Object(o.b)("inlineCode",{parentName:"li"},"http://localhost:3000/customUrl/default"),"\u5373\u53ef\u8bbf\u95ee\u5230graphql\u5ba2\u6237\u7aef\u63a7\u5236\u53f0")))}u.isMDXComponent=!0},329:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a),o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)};var l="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},c=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,d=c[i+"."+u]||c[u]||s[u]||o;return n?r.a.createElement(d,Object.assign({},{ref:t},l,{components:n})):r.a.createElement(d,Object.assign({},{ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[l]="string"==typeof e?e:a,p[1]=i;for(var u=2;u<o;u++)p[u]=n[u];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);