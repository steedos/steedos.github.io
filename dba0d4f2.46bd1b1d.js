(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{355:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return b}));var o=t(1),c=t(9),a=(t(0),t(397)),r={title:"Connection"},i={id:"developer/objectql_connection",title:"Connection",description:"## \u4ec0\u4e48\u662f`Connection`\r",source:"@site/../docs/developer/objectql_connection.md",permalink:"/developer/objectql_connection",sidebar:"\u534e\u708e\u5f00\u53d1\u5e73\u53f0",previous:{title:"\u8868\u5355\u4e8b\u4ef6",permalink:"/developer/object_form"},next:{title:"Object",permalink:"/developer/objectql_object"}},p=[{value:"\u4ec0\u4e48\u662f<code>Connection</code>",id:"\u4ec0\u4e48\u662fconnection",children:[]},{value:"\u521b\u5efa\u65b0\u7684\u8fde\u63a5",id:"\u521b\u5efa\u65b0\u7684\u8fde\u63a5",children:[]},{value:"\u4f7f\u7528\u8fde\u63a5",id:"\u4f7f\u7528\u8fde\u63a5",children:[]},{value:"\u83b7\u53d6\u5bf9\u8c61",id:"\u83b7\u53d6\u5bf9\u8c61",children:[]}],l={rightToc:p},s="wrapper";function b(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(a.b)(s,Object(o.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u4ec0\u4e48\u662fconnection"},"\u4ec0\u4e48\u662f",Object(a.b)("inlineCode",{parentName:"h2"},"Connection")),Object(a.b)("p",null,"\u53ea\u6709\u5728\u5efa\u7acb\u8fde\u63a5\u540e\u624d\u80fd\u4e0e\u6570\u636e\u5e93\u8fdb\u884c\u4ea4\u4e92\u3002\nObjectQL \u7684",Object(a.b)("inlineCode",{parentName:"p"},"Connection"),"\u4e0d\u4f1a\u50cf\u770b\u8d77\u6765\u90a3\u6837\u8bbe\u7f6e\u5355\u4e2a\u6570\u636e\u5e93\u8fde\u63a5\uff0c\u800c\u662f\u8bbe\u7f6e\u8fde\u63a5\u6c60\u3002\n\u5982\u679c\u4f7f\u7528",Object(a.b)("inlineCode",{parentName:"p"},"createConnection"),"\u51fd\u6570\u8bbe\u7f6e\u8fde\u63a5\uff0c\u5219\u4f1a\u81ea\u52a8\u8c03\u7528",Object(a.b)("inlineCode",{parentName:"p"},"connect"),"\u65b9\u6cd5\u3002\u8c03\u7528",Object(a.b)("inlineCode",{parentName:"p"},"close"),"\u65f6\u4f1a\u65ad\u5f00\u8fde\u63a5\uff08\u5173\u95ed\u6c60\u4e2d\u7684\u6240\u6709\u8fde\u63a5\uff09\u3002\n\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ea\u80fd\u5728\u5e94\u7528\u7a0b\u5e8f\u542f\u52a8\u65f6\u521b\u5efa\u4e00\u6b21\u8fde\u63a5\uff0c\u5e76\u5728\u5b8c\u5168\u4f7f\u7528\u6570\u636e\u5e93\u540e\u5173\u95ed\u5b83\u3002\u5b9e\u9645\u4e0a\uff0c\u5982\u679c\u8981\u4e3a\u7ad9\u70b9\u6784\u5efa\u540e\u7aef\uff0c\u5e76\u4e14\u540e\u7aef\u670d\u52a1\u5668\u59cb\u7ec8\u4fdd\u6301\u8fd0\u884c,\u5219\u4e0d\u9700\u8981\u5173\u95ed\u8fde\u63a5\u3002"),Object(a.b)("h2",{id:"\u521b\u5efa\u65b0\u7684\u8fde\u63a5"},"\u521b\u5efa\u65b0\u7684\u8fde\u63a5"),Object(a.b)("p",null,"\u6709\u591a\u79cd\u65b9\u6cd5\u53ef\u4ee5\u521b\u5efa\u8fde\u63a5\u3002\u4f46\u662f\u6700\u7b80\u5355\u548c\u6700\u5e38\u7528\u7684\u65b9\u6cd5\u662f\u4f7f\u7528",Object(a.b)("inlineCode",{parentName:"p"},"createConnection"),"\u548c",Object(a.b)("inlineCode",{parentName:"p"},"createConnections"),"\u51fd\u6570\u3002"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"createConnection")," \u521b\u5efa\u5355\u4e2a\u8fde\u63a5\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),'import { createConnection, Connection } from "@steedos/objectql";\n\nconst connection = await createConnection({\n  name: "mysql",\n  driver: "mysql",\n  host: "localhost",\n  port: 3306,\n  username: "test",\n  password: "test",\n  database: "test"\n});\n')),Object(a.b)("p",null,"\u53ea\u4f7f\u7528",Object(a.b)("inlineCode",{parentName:"p"},"url"),"\u548c",Object(a.b)("inlineCode",{parentName:"p"},"type"),"\u4e5f\u53ef\u4ee5\u8fdb\u884c\u8fde\u63a5\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'createConnection({\n  name: "postgres",  \n  driver: "postgres",\n  url: "postgres://test:test@localhost/test"\n});\n')),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"createConnections")," \u521b\u5efa\u591a\u4e2a\u8fde\u63a5:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),'import { createConnections, Connection } from "@steedos/objectql";\n\nconst connections = await createConnections([\n  {\n    name: "default",\n    driver: "mysql",\n    host: "localhost",\n    port: 3306,\n    username: "test",\n    password: "test",\n    database: "test"\n  },\n  {\n    name: "test2-connection",\n    driver: "mysql",\n    host: "localhost",\n    port: 3306,\n    username: "test",\n    password: "test",\n    database: "test2"\n  }\n]);\n')),Object(a.b)("p",null,"\u8fd9\u4e24\u79cd\u65b9\u5f0f\u90fd\u6839\u636e\u4f60\u4f20\u9012\u7684\u8fde\u63a5\u9009\u9879\u521b\u5efa",Object(a.b)("inlineCode",{parentName:"p"},"Connection"),"\uff0c\u5e76\u8c03\u7528",Object(a.b)("inlineCode",{parentName:"p"},"connect"),"\u65b9\u6cd5\u3002\u53e6\u5916\u4f60\u4e5f\u53ef\u4ee5\u5728\u9879\u76ee\u7684\u6839\u76ee\u5f55\u4e2d\u521b\u5efa\u4e00\u4e2a",Object(a.b)("inlineCode",{parentName:"p"},"ormconfig.json"),"\u6587\u4ef6\uff0c",Object(a.b)("inlineCode",{parentName:"p"},"createConnection"),"\u548c",Object(a.b)("inlineCode",{parentName:"p"},"createConnections"),"\u5c06\u81ea\u52a8\u4ece\u6b64\u6587\u4ef6\u4e2d\u8bfb\u53d6\u8fde\u63a5\u9009\u9879\u3002\u9879\u76ee\u7684\u6839\u76ee\u5f55\u4e0e",Object(a.b)("inlineCode",{parentName:"p"},"node_modules"),"\u76ee\u5f55\u7684\u7ea7\u522b\u76f8\u540c\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),'import { createConnection, createConnections, Connection } from "@steedos/objectql";\n\n// createConnection\u5c06\u4eceormconfig.json / ormconfig.js / ormconfig.yml / ormconfig.env / ormconfig.xml \u6587\u4ef6\u6216\u7279\u6b8a\u73af\u5883\u53d8\u91cf\u4e2d\u52a0\u8f7d\u8fde\u63a5\u9009\u9879\nconst connection: Connection = await createConnection();\n\n// \u4f60\u53ef\u4ee5\u6307\u5b9a\u8981\u521b\u5efa\u7684\u8fde\u63a5\u7684\u540d\u79f0\n// \uff08\u5982\u679c\u7701\u7565\u540d\u79f0\uff0c\u5219\u5c06\u521b\u5efa\u6ca1\u6709\u6307\u5b9a\u540d\u79f0\u7684\u8fde\u63a5\uff09\nconst secondConnection: Connection = await createConnection("test2-connection");\n\n// \u5982\u679c\u8c03\u7528createConnections\u800c\u4e0d\u662fcreateConnection\n// \u5b83\u5c06\u521d\u59cb\u5316\u5e76\u8fd4\u56deormconfig\u6587\u4ef6\u4e2d\u5b9a\u4e49\u7684\u6240\u6709\u8fde\u63a5\nconst connections: Connection[] = await createConnections();\n')),Object(a.b)("p",null,"\u4e0d\u540c\u7684\u8fde\u63a5\u5fc5\u987b\u5177\u6709\u4e0d\u540c\u7684\u540d\u79f0\u9ed8\u3002\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u672a\u6307\u5b9a\u8fde\u63a5\u540d\u79f0\uff0c\u5219\u4e3a",Object(a.b)("inlineCode",{parentName:"p"},"default"),"\u3002\n\u901a\u5e38\u5728\u4f60\u4f7f\u7528\u591a\u4e2a\u6570\u636e\u5e93\u6216\u591a\u4e2a\u8fde\u63a5\u914d\u7f6e\u65f6\u624d\u4f1a\u4f7f\u7528\u591a\u8fde\u63a5\u3002"),Object(a.b)("p",null,"\u521b\u5efa\u8fde\u63a5\u540e\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",Object(a.b)("inlineCode",{parentName:"p"},"getConnection"),"\u51fd\u6570\u4ece\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u4efb\u4f55\u4f4d\u7f6e\u4f7f\u7528\u5b83\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),'import { getConnection } from "type@steedos/objectqlorm";\n\n// \u53ef\u4ee5\u5728\u8c03\u7528createConnection\u540e\u4f7f\u7528\u5e76\u89e3\u6790\nconst connection = getConnection();\n\n// \u5982\u679c\u4f60\u6709\u591a\u4e2a\u8fde\u63a5\uff0c\u5219\u53ef\u4ee5\u6309\u540d\u79f0\u83b7\u53d6\u8fde\u63a5\nconst secondConnection = getConnection("test2-connection");\n')),Object(a.b)("h2",{id:"\u4f7f\u7528\u8fde\u63a5"},"\u4f7f\u7528\u8fde\u63a5"),Object(a.b)("p",null,"\u8bbe\u7f6e\u8fde\u63a5\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528",Object(a.b)("inlineCode",{parentName:"p"},"getConnection"),"\u51fd\u6570\u5728\u5e94\u7528\u7a0b\u5e8f\u7684\u4efb\u4f55\u4f4d\u7f6e\u4f7f\u7528\u5b83\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { getConnection } from \"@steedos/objectql\";\nimport { User } from \"../entity/User\";\n\nexport class UserController {\n  getAll() {\n    return getConnection().find('users', {username: 'god'});\n  }\n}\n")),Object(a.b)("p",null,"\u4f7f\u7528 Connection\uff0c\u4f60\u53ef\u4ee5\u5bf9\u5bf9\u8c61\u6267\u884c\u6570\u636e\u5e93\u64cd\u4f5c\u3002\u6709\u5173\u5b83\u4eec\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"api_object.md"}),"Object API")," \u6587\u6863\u3002"),Object(a.b)("p",null,"\u4f46\u4e00\u822c\u6765\u8bf4\uff0c\u4f60\u4e0d\u8981\u592a\u591a\u4f7f\u7528",Object(a.b)("inlineCode",{parentName:"p"},"Connection"),"\u3002\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ea\u9700\u521b\u5efa\u8fde\u63a5\u5e76\u4f7f\u7528",Object(a.b)("inlineCode",{parentName:"p"},"getObject()"),"\u548c\u6765\u8bbf\u95ee\u8fde\u63a5\u7684\u7ba1\u7406\u5668\u548c\u5b58\u50a8\u5e93\uff0c\u800c\u65e0\u9700\u76f4\u63a5\u4f7f\u7528\u8fde\u63a5\u5bf9\u8c61\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),'import { getObject } from "@steedos/objectql";\n\nexport class UserController {\n  getAll() {\n    return getObject("users").find({username: \'god\'});\n  }\n}\n')),Object(a.b)("h2",{id:"\u83b7\u53d6\u5bf9\u8c61"},"\u83b7\u53d6\u5bf9\u8c61"),Object(a.b)("p",null,"\u4f7f\u7528 getObject \u51fd\u6570\u53ef\u4ee5\u83b7\u53d6\u6b64\u8fde\u63a5\u4e0b\u7684\u5bf9\u8c61\uff0c\u4f7f\u7528",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"api_object.md"}),"Object API"),"\u6267\u884c\u67e5\u8be2\u64cd\u4f5c\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"  const posts = await connection.getObject(\"posts\").find({\n      fields: ['name', 'body', 'likesCount'],\n      filters: [['likesCount', '>', 10]],\n      top: 20,\n      skip: 0,\n      sort: 'likesCount desc'\n  });\n")))}b.isMDXComponent=!0},397:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return b}));var o=t(0),c=t.n(o),a=c.a.createContext({}),r=function(e){var n=c.a.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},i=function(e){var n=r(e.components);return c.a.createElement(a.Provider,{value:n},e.children)};var p="mdxType",l={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},s=Object(o.forwardRef)((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===n.indexOf(o)&&(t[o]=e[o]);return t}(e,["components","mdxType","originalType","parentName"]),s=r(t),b=o,m=s[i+"."+b]||s[b]||l[b]||a;return t?c.a.createElement(m,Object.assign({},{ref:n},p,{components:t})):c.a.createElement(m,Object.assign({},{ref:n},p))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=s;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:o,r[1]=i;for(var b=2;b<a;b++)r[b]=t[b];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);