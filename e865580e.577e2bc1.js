(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{312:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(1),c=n(6),b=(n(0),n(335)),r={title:"Object"},l={id:"developer/objectql_object",title:"Object",description:"## \u5bf9\u8c61\u662f\u4ec0\u4e48?\r",source:"@site/../docs/developer/objectql_object.md",permalink:"/docs/developer/objectql_object",editUrl:"https://github.com/steedos/steedos-website/edit/master/website/../docs/developer/objectql_object.md",sidebar:"\u5f00\u53d1",previous:{title:"ConnectionOptions",permalink:"/docs/developer/objectql_datasource"},next:{title:"\u5feb\u901f\u5411\u5bfc",permalink:"/docs/plugins/index"}},i=[{value:"\u5bf9\u8c61\u662f\u4ec0\u4e48?",id:"\u5bf9\u8c61\u662f\u4ec0\u4e48",children:[]},{value:"\u6279\u91cf\u67e5\u8be2 find",id:"\u6279\u91cf\u67e5\u8be2-find",children:[]},{value:"\u67e5\u8be2\u5355\u6761\u8bb0\u5f55 findOne",id:"\u67e5\u8be2\u5355\u6761\u8bb0\u5f55-findone",children:[]},{value:"\u63d2\u5165 insert",id:"\u63d2\u5165-insert",children:[]},{value:"\u63d2\u5165 directInsert",id:"\u63d2\u5165-directinsert",children:[]},{value:"\u66f4\u65b0\u5355\u6761\u8bb0\u5f55 updateOne",id:"\u66f4\u65b0\u5355\u6761\u8bb0\u5f55-updateone",children:[]},{value:"\u6279\u91cf\u66f4\u65b0\u8bb0\u5f55 updateMany",id:"\u6279\u91cf\u66f4\u65b0\u8bb0\u5f55-updatemany",children:[]},{value:"\u66f4\u65b0\u8bb0\u5f55 directUpdate",id:"\u66f4\u65b0\u8bb0\u5f55-directupdate",children:[]},{value:"\u5220\u9664\u5355\u6761\u8bb0\u5f55 delete",id:"\u5220\u9664\u5355\u6761\u8bb0\u5f55-delete",children:[]},{value:"\u5220\u9664\u8bb0\u5f55 directDelete",id:"\u5220\u9664\u8bb0\u5f55-directdelete",children:[]}],o={rightToc:i},s="wrapper";function p(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(b.b)(s,Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"\u5bf9\u8c61\u662f\u4ec0\u4e48"},"\u5bf9\u8c61\u662f\u4ec0\u4e48?"),Object(b.b)("p",null,"\u5bf9\u8c61\u662f\u4e00\u4e2a\u6620\u5c04\u5230\u6570\u636e\u5e93\u8868\uff08\u6216\u4f7f\u7528 MongoDB \u65f6\u7684\u96c6\u5408\uff09\u7684\u914d\u7f6e\u6587\u4ef6\u3002\n\u4f60\u53ef\u4ee5\u901a\u8fc7\u5b9a\u4e49yml\u6587\u4ef6\u6765\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61\uff1a"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"name: user\nfields:\n  id:\n    type: number\n    primary: true\n  name:\n    type: string\n  isActive:\n    type: boolean\n")),Object(b.b)("p",null,"\u8fd9\u5c06\u521b\u5efa\u4ee5\u4e0b\u6570\u636e\u5e93\u8868\uff1a"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"+-------------+--------------+----------------------------+\n|                          user                           |\n+-------------+--------------+----------------------------+\n| id          | int(11)      | PRIMARY KEY AUTO_INCREMENT |\n| name        | varchar(255) |                            |\n| isActive    | boolean      |                            |\n+-------------+--------------+----------------------------+\n")),Object(b.b)("p",null,"\u57fa\u672c\u5bf9\u8c61\u7531\u5217\u548c\u5173\u7cfb\u7ec4\u6210\u3002\n\u6bcf\u4e2a\u5bf9\u8c61",Object(b.b)("strong",{parentName:"p"},"\u5fc5\u987b"),"\u6709\u4e00\u4e2a\u4e3b\u5217\uff08\u5982\u679c\u4f7f\u7528 MongoDB\uff0c\u5219\u4e3a _id \u5217\uff09\u3002"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u6bcf\u4e2a\u5bf9\u8c61\u90fd\u5fc5\u987b\u5728Connection\u9009\u9879\u4e2d\u6ce8\u518c\uff0c\u4f60\u53ef\u4ee5\u6307\u5b9a\u5305\u542b\u6240\u6709\u5bf9\u8c61\u7684\u6574\u4e2a\u76ee\u5f55\uff0c \u8be5\u76ee\u5f55\u4e0b\u6240\u6709\u5bf9\u8c61\u90fd\u5c06\u88ab\u52a0\u8f7d\u3002")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'import { createConnection, Connection } from "@steedos/objectql";\n\nconst connection: Connection = await createConnection({\n    type: "mysql",\n    host: "localhost",\n    port: 3306,\n    username: "test",\n    password: "test",\n    database: "test",\n    objectFiles: ["./objects/"]\n});\n')),Object(b.b)("h2",{id:"\u6279\u91cf\u67e5\u8be2-find"},"\u6279\u91cf\u67e5\u8be2 find"),Object(b.b)("p",null,"\u6309\u6307\u5b9a\u6761\u4ef6\u67e5\u8be2\u8bb0\u5f55\uff0c\u5e76\u8fd4\u56de\u8bb0\u5f55\u6570\u7ec4\u3002\u672a\u627e\u5230\u65f6\u8fd4\u56de\u7a7a\u6570\u7ec4[]\u3002"),Object(b.b)("p",null,"\u67e5\u8be2\u6761\u4ef6\u5305\u62ec\u4ee5\u4e0b\u53c2\u6570\uff1a"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"fields: \u5b57\u6bb5\u540d\u6570\u7ec4"),Object(b.b)("li",{parentName:"ul"},"filters: \u67e5\u8be2\u6761\u4ef6\u6570\u7ec4"),Object(b.b)("li",{parentName:"ul"},"sort: \u6392\u5e8f\u89c4\u5219"),Object(b.b)("li",{parentName:"ul"},"top: \u8fd4\u56de\u8bb0\u5f55\u6570"),Object(b.b)("li",{parentName:"ul"},"skip: \u8df3\u8fc7\u8bb0\u5f55\u6570\uff0c\u901a\u5e38\u7528\u4e8e\u5206\u9875\u663e\u793a\u3002")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"  const posts = await connection.getObject(\"posts\").find({\n      fields: ['name', 'body', 'likesCount'],\n      filters: [['likesCount', '>', 10], ['likesCount', '<', 20]],\n      top: 20,\n      skip: 0,\n      sort: 'likesCount desc'\n  });\n  // SELECT TOP 20 name, body, likesCount\n  // FROM posts\n  // WHERE likesCount > 10 AND likesCount < 20\n  // ORDER BY likesCount desc\n")),Object(b.b)("h2",{id:"\u67e5\u8be2\u5355\u6761\u8bb0\u5f55-findone"},"\u67e5\u8be2\u5355\u6761\u8bb0\u5f55 findOne"),Object(b.b)("p",null,"\u67e5\u8be2\u5e76\u8fd4\u56de\u4e00\u6761\u8bb0\u5f55\u3002"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"  const post = await connection.getObject(\"posts\").findOne('5dcbb48f735bba40b3ebbe1a');\n  // SELECT * from posts where _id = '5dcbb48f735bba40b3ebbe1a'\n")),Object(b.b)("h2",{id:"\u63d2\u5165-insert"},"\u63d2\u5165 insert"),Object(b.b)("p",null,"\u63d2\u5165\u4e00\u6761\u8bb0\u5f55\uff0c\u53c2\u6570\u4e3a\u8bb0\u5f55\u5185\u5bb9\u3002\u8fd4\u56de\u63d2\u5165\u4e4b\u540e\u7684\u8bb0\u5f55\uff0c\u5305\u62ec_id\u5b57\u6bb5\u3002"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"  const posts = await connection.getObject(\"posts\").insert({\n      name: 'Hello'\n      body: 'Hello from samples'\n      likesCount: 100\n  });\n")),Object(b.b)("h2",{id:"\u63d2\u5165-directinsert"},"\u63d2\u5165 directInsert"),Object(b.b)("p",null,"\u8c03\u7528\u65b9\u5f0f\u540c insert\uff0c\u4f46\u4e0d\u6267\u884c\u89e6\u53d1\u5668"),Object(b.b)("h2",{id:"\u66f4\u65b0\u5355\u6761\u8bb0\u5f55-updateone"},"\u66f4\u65b0\u5355\u6761\u8bb0\u5f55 updateOne"),Object(b.b)("p",null,"\u53c2\u6570"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"_id: \u9700\u8981\u66f4\u65b0\u7684\u8bb0\u5f55_id"),Object(b.b)("li",{parentName:"ul"},"doc: \u9700\u8981\u66f4\u65b0\u7684\u8bb0\u5f55\u5185\u5bb9\u3002")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"  const posts = await connection.getObject(\"posts\").updateOne('5dcbb48f735bba40b3ebbe1a', {\n      name: 'Hello'\n      likesCount: 100\n  });\n  // UPDATE posts set name = 'Hello' and likesCount = 100 \n  // WHERE _id = '5dcbb48f735bba40b3ebbe1a'\n")),Object(b.b)("h2",{id:"\u6279\u91cf\u66f4\u65b0\u8bb0\u5f55-updatemany"},"\u6279\u91cf\u66f4\u65b0\u8bb0\u5f55 updateMany"),Object(b.b)("p",null,"\u53c2\u6570"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"filters: \u67e5\u8be2\u6761\u4ef6"),Object(b.b)("li",{parentName:"ul"},"doc: \u9700\u8981\u66f4\u65b0\u7684\u8bb0\u5f55\u5185\u5bb9\u3002")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"  const posts = await connection.getObject(\"posts\").updateMany([['likesCount', '>', '20']], {\n      likesCount: 20\n  });\n  // UPDATE posts set likesCount = 20\n  // WHERE likesCount > 20\n")),Object(b.b)("h2",{id:"\u66f4\u65b0\u8bb0\u5f55-directupdate"},"\u66f4\u65b0\u8bb0\u5f55 directUpdate"),Object(b.b)("p",null,"\u8c03\u7528\u65b9\u5f0f\u540c updateMany\uff0c\u4f46\u4e0d\u6267\u884c\u89e6\u53d1\u5668"),Object(b.b)("h2",{id:"\u5220\u9664\u5355\u6761\u8bb0\u5f55-delete"},"\u5220\u9664\u5355\u6761\u8bb0\u5f55 delete"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"  const posts = await connection.getObject(\"posts\").delete('5dcbb48f735bba40b3ebbe1a');\n  // DELETE FROM posts WHERE _id = '5dcbb48f735bba40b3ebbe1a'\n")),Object(b.b)("h2",{id:"\u5220\u9664\u8bb0\u5f55-directdelete"},"\u5220\u9664\u8bb0\u5f55 directDelete"),Object(b.b)("p",null,"\u8c03\u7528\u65b9\u5f0f\u540c directDelete\uff0c\u4f46\u4e0d\u6267\u884c\u89e6\u53d1\u5668"))}p.isMDXComponent=!0},335:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return p}));var a=n(0),c=n.n(a),b=c.a.createContext({}),r=function(e){var t=c.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=r(e.components);return c.a.createElement(b.Provider,{value:t},e.children)};var i="mdxType",o={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},s=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,l=e.parentName,i=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),s=r(n),p=a,d=s[l+"."+p]||s[p]||o[p]||b;return n?c.a.createElement(d,Object.assign({},{ref:t},i,{components:n})):c.a.createElement(d,Object.assign({},{ref:t},i))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,r=new Array(b);r[0]=s;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[i]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<b;p++)r[p]=n[p];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);