(window.webpackJsonp=window.webpackJsonp||[]).push([[374],{431:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return c}));var r=n(1),a=(n(0),n(438));const o={title:"GraphQL \u7b80\u4ecb"},l={unversionedId:"developer/api/graphql",id:"developer/api/graphql",isDocsHomePage:!1,title:"GraphQL \u7b80\u4ecb",description:"\u5f53\u4f60\u5728 Steedos \u4e2d\u914d\u7f6e\u4e86\u5bf9\u8c61\u4ee5\u540e\uff0cSteedos \u4e3a\u4f60\u81ea\u52a8\u751f\u6210 GraphQL API\u3002",source:"@site/../docs/developer/api/graphql.md",slug:"/developer/api/graphql",permalink:"/developer/api/graphql",version:"current",sidebar:"\u5f00\u53d1\u4eba\u5458",previous:{title:"\u6570\u636e\u5b57\u5178",permalink:"/developer/api/odata_metadata"},next:{title:"\u8ba4\u8bc1",permalink:"/developer/api/graphql_auth"}},p=[{value:"\u8fd0\u884c\u4e00\u4e2agraphql\u670d\u52a1\u5668",id:"\u8fd0\u884c\u4e00\u4e2agraphql\u670d\u52a1\u5668",children:[]}],i={rightToc:p};function c({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u5f53\u4f60\u5728 Steedos \u4e2d\u914d\u7f6e\u4e86\u5bf9\u8c61\u4ee5\u540e\uff0cSteedos \u4e3a\u4f60\u81ea\u52a8\u751f\u6210 ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.graphql.org/"}),"GraphQL")," API\u3002"),Object(a.b)("p",null,"\u4f8b\u5982\u4f60\u5b9a\u4e49\u4e86\u5bf9\u8c61 Post"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"name: Post\nfields:\n  name:\n    type: String\n  description:\n    type: String\n  isPublished:\n    type: Boolean\n  owner:\n    label: Author\n    type: master_detail\n    reference_to: User\n")),Object(a.b)("p",null,"Steedos \u81ea\u52a8\u751f\u6210\u4ee5\u4e0b GraphQL Schema"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"type User {\n  id: ID,\n  name: String\n  username: String\n}\ntype Post {\n  id: ID\n  name: String\n  description: String\n  isPublished: String\n  author: User\n}\n\ntype Query {\n  Posts(where): [Post]\n  Post(id: String): Post\n}\n\ntype Mutation {\n  createPost(data):Post\n  updatePost(data):Post\n  deletePost(id: String):Post\n}\n")),Object(a.b)("h3",{id:"\u8fd0\u884c\u4e00\u4e2agraphql\u670d\u52a1\u5668"},"\u8fd0\u884c\u4e00\u4e2agraphql\u670d\u52a1\u5668"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u4f7f\u7528",Object(a.b)("inlineCode",{parentName:"li"},"@steedos/objectql"),"\u5305\u63d0\u4f9b\u7684\u65b9\u6cd5",Object(a.b)("inlineCode",{parentName:"li"},"getSteedosSchema"),"\u83b7\u53d6\u5230schema\u5bf9\u8c61"),Object(a.b)("li",{parentName:"ul"},"\u4f7f\u7528schema\u5bf9\u8c61\u7684",Object(a.b)("inlineCode",{parentName:"li"},"addDataSource"),"\u65b9\u6cd5\u6dfb\u52a0\u6570\u636e\u6e90"),Object(a.b)("li",{parentName:"ul"},"\u6dfb\u52a0\u597d\u6570\u636e\u6e90\u4e4b\u540e\u8c03\u7528",Object(a.b)("inlineCode",{parentName:"li"},"@steedos/objectql"),"\u5305\u63d0\u4f9b\u7684",Object(a.b)("inlineCode",{parentName:"li"},"getGraphQLRoutes"),"\u65b9\u6cd5\u83b7\u53d6",Object(a.b)("inlineCode",{parentName:"li"},"express.Router()"),"\u5bf9\u8c61, \u793a\u4f8b\u5982\u4e0b\uff1a")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { getSteedosSchema, getGraphQLRoutes } from '@steedos/objectql';\nimport express = require('express');\n\nlet schema = getSteedosSchema();\n// \u6dfb\u52a0\u9ed8\u8ba4\u6570\u636e\u6e90 default\u5373\u4e3a\u6b64\u6570\u636e\u6e90\u7684name\nschema.addDataSource('default', {\n    driver: \"mongo\",\n    url: 'mongodb://127.0.0.1:27017/steedos',\n    objects: {\n        post: {\n            fields: {\n                title: {\n                    type: \"text\",\n                    inlineHelpText: \"fsdafas\"\n                }\n            }\n        }\n    }\n})\n// \u83b7\u53d6\u6839\u636e\u4f20\u5165\u7684datasource\u751f\u6210\u7684express\u7684router\u5bf9\u8c61\nlet route = getGraphQLRoutes(schema.getDataSource('default'));\n\n// \u5c06\u83b7\u53d6\u7684route\u7ed1\u5b9a\u5230\u81ea\u5b9a\u4e49\u7684express\u5bf9\u8c61\u4e2d\nlet app = express();\napp.use('/customUrl', route);\napp.listen(3000)\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u901a\u8fc7",Object(a.b)("inlineCode",{parentName:"li"},"http://localhost:3000/customUrl/default"),"\u5373\u53ef\u8bbf\u95ee\u5230graphql\u5ba2\u6237\u7aef\u63a7\u5236\u53f0")))}c.isMDXComponent=!0},438:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p({},t,{},e)),n},u=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,m=u["".concat(l,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(m,p({ref:t},c,{components:n})):a.a.createElement(m,p({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=b;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);