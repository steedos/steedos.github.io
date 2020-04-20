(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{175:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return i}));var r=n(1),a=n(6),o=(n(0),n(382)),c={title:"\u6570\u636e\u6e90"},s={id:"developer/datasource",title:"\u6570\u636e\u6e90",description:"\u6570\u636e\u6e90\u7528\u4e8e\u5b9a\u4e49\u6570\u636e\u5e93\u8fde\u63a5\u65b9\u5f0f\uff0c\u4e1a\u52a1\u5bf9\u8c61\u901a\u8fc7\u5bf9\u5e94\u7684\u6570\u636e\u6e90\u4fdd\u5b58\u6570\u636e\u3002Steedos\u7cfb\u7edf\u5c42\u4f7f\u7528MongoDB\u6570\u636e\u5e93\uff0cSteedos\u7684\u6807\u51c6\u5bf9\u8c61\u90fd\u4fdd\u5b58\u5728\u9ed8\u8ba4\u6570\u636e\u6e90\u4e2d\u3002\u5f00\u53d1\u4eba\u5458\u4e5f\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u8fde\u63a5\u5176\u4ed6\u5e38\u7528\u7684\u6570\u636e\u6e90\uff0c\u5305\u62ecSQL Server\u3001Oracle\u3001MySQL\u3001PostgreSQL\u3002",source:"@site/../docs/developer/datasource.md",permalink:"/developer/datasource",sidebar:"Steedos \u5f00\u53d1\u6587\u6863",previous:{title:"steedos-config",permalink:"/developer/steedos_config"},next:{title:"\u4e1a\u52a1\u5bf9\u8c61",permalink:"/developer/object"}},l=[{value:"\u4f7f\u7528steedos-config\u914d\u7f6e\u6570\u636e\u6e90",id:"\u4f7f\u7528steedos-config\u914d\u7f6e\u6570\u636e\u6e90",children:[]},{value:"\u4f7f\u7528\u4ee3\u7801\u5b9a\u4e49\u6570\u636e\u6e90",id:"\u4f7f\u7528\u4ee3\u7801\u5b9a\u4e49\u6570\u636e\u6e90",children:[]},{value:"\u9ed8\u8ba4\u6570\u636e\u6e90",id:"\u9ed8\u8ba4\u6570\u636e\u6e90",children:[]},{value:"\u52a0\u8f7d\u4e1a\u52a1\u5bf9\u8c61",id:"\u52a0\u8f7d\u4e1a\u52a1\u5bf9\u8c61",children:[]}],b={rightToc:l};function i(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u6570\u636e\u6e90\u7528\u4e8e\u5b9a\u4e49\u6570\u636e\u5e93\u8fde\u63a5\u65b9\u5f0f\uff0c\u4e1a\u52a1\u5bf9\u8c61\u901a\u8fc7\u5bf9\u5e94\u7684\u6570\u636e\u6e90\u4fdd\u5b58\u6570\u636e\u3002Steedos\u7cfb\u7edf\u5c42\u4f7f\u7528MongoDB\u6570\u636e\u5e93\uff0cSteedos\u7684\u6807\u51c6\u5bf9\u8c61\u90fd\u4fdd\u5b58\u5728\u9ed8\u8ba4\u6570\u636e\u6e90\u4e2d\u3002\u5f00\u53d1\u4eba\u5458\u4e5f\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u8fde\u63a5\u5176\u4ed6\u5e38\u7528\u7684\u6570\u636e\u6e90\uff0c\u5305\u62ecSQL Server\u3001Oracle\u3001MySQL\u3001PostgreSQL\u3002"),Object(o.b)("h2",{id:"\u4f7f\u7528steedos-config\u914d\u7f6e\u6570\u636e\u6e90"},"\u4f7f\u7528steedos-config\u914d\u7f6e\u6570\u636e\u6e90"),Object(o.b)("p",null,"\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u5728\u9879\u76ee\u914d\u7f6e\u6587\u4ef6\uff08steedos-config.yml\uff09\u4e2d\u5b9a\u4e49\u6570\u636e\u6e90\u3002"),Object(o.b)("p",null,"\u4ee5\u4e0b\u914d\u7f6e\u6587\u4ef6\u8fde\u63a5\u4e86\u4e24\u4e2a\u6570\u636e\u6e90\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"datasources:\n  default:\n    connection:\n      driver: mongo\n      url: mongodb://192.168.0.21/steedos\n  mattermost:\n    connection:\n      driver: postgres\n      url: postgresql://user:password@192.168.0.21:5432/mattermost\n")),Object(o.b)("h2",{id:"\u4f7f\u7528\u4ee3\u7801\u5b9a\u4e49\u6570\u636e\u6e90"},"\u4f7f\u7528\u4ee3\u7801\u5b9a\u4e49\u6570\u636e\u6e90"),Object(o.b)("p",null,"\u6700\u7b80\u5355\u548c\u6700\u5e38\u7528\u7684\u65b9\u6cd5\u662f\u4f7f\u7528",Object(o.b)("inlineCode",{parentName:"p"},"createConnection"),"\u548c",Object(o.b)("inlineCode",{parentName:"p"},"createConnections"),"\u51fd\u6570\u3002"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"createConnection")," \u521b\u5efa\u5355\u4e2a\u8fde\u63a5\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'import { createConnection, Connection } from "@steedos/objectql";\n\nconst connection = await createConnection({\n  name: "mysql",\n  driver: "mysql",\n  host: "localhost",\n  port: 3306,\n  username: "test",\n  password: "test",\n  database: "test"\n});\n')),Object(o.b)("p",null,"\u53ea\u4f7f\u7528",Object(o.b)("inlineCode",{parentName:"p"},"url"),"\u548c",Object(o.b)("inlineCode",{parentName:"p"},"type"),"\u4e5f\u53ef\u4ee5\u8fdb\u884c\u8fde\u63a5\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'createConnection({\n  name: "postgres",  \n  driver: "postgres",\n  url: "postgres://test:test@localhost/test"\n});\n')),Object(o.b)("h2",{id:"\u9ed8\u8ba4\u6570\u636e\u6e90"},"\u9ed8\u8ba4\u6570\u636e\u6e90"),Object(o.b)("p",null,"\u9ed8\u8ba4\u6570\u636e\u6e90\u4f7f\u7528MongoDB\u6570\u636e\u5e93\uff0c\u4ee5default\u547d\u540d\uff0cSteedos\u7684\u5185\u6838",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./standard_objects"}),"\u6807\u51c6\u4e1a\u52a1\u5bf9\u8c61"),"\u5747\u8fd0\u884c\u4e8e\u6b64\u6570\u636e\u6e90\u4e2d\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"datasources:\n  default:\n    connection:\n      url: mongodb://192.168.0.21/steedos\n")),Object(o.b)("p",null,"\u914d\u7f6e\u6307\u5b9a\u6570\u636e\u5e93\u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u4f8b\u5982\u7ed9steedos\u6570\u636e\u5e93\u914d\u7f6e\u7528\u6237\uff1asteedos  \u5bc6\u7801\uff1apwd\uff0c\u5177\u6709\u8bfb\u5199\u6743\u9650"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'use steedos\ndb.createUser({user: "steedos", pwd: "pwd", roles: [ { role: "readWrite", db: "steedos" } ] } )\n')),Object(o.b)("p",null,"\u7528\u6237\u6743\u9650\u914d\u7f6e\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Read\uff1a\u5141\u8bb8\u7528\u6237\u8bfb\u53d6\u6307\u5b9a\u6570\u636e\u5e93\nreadWrite\uff1a\u5141\u8bb8\u7528\u6237\u8bfb\u5199\u6307\u5b9a\u6570\u636e\u5e93\ndbAdmin\uff1a\u5141\u8bb8\u7528\u6237\u5728\u6307\u5b9a\u6570\u636e\u5e93\u4e2d\u6267\u884c\u7ba1\u7406\u51fd\u6570\uff0c\u5982\u7d22\u5f15\u521b\u5efa\u3001\u5220\u9664\uff0c\u67e5\u770b\u7edf\u8ba1\u6216\u8bbf\u95eesystem.profile\nuserAdmin\uff1a\u5141\u8bb8\u7528\u6237\u5411system.users\u96c6\u5408\u5199\u5165\uff0c\u53ef\u4ee5\u627e\u6307\u5b9a\u6570\u636e\u5e93\u91cc\u521b\u5efa\u3001\u5220\u9664\u548c\u7ba1\u7406\u7528\u6237\nclusterAdmin\uff1a\u53ea\u5728admin\u6570\u636e\u5e93\u4e2d\u53ef\u7528\uff0c\u8d4b\u4e88\u7528\u6237\u6240\u6709\u5206\u7247\u548c\u590d\u5236\u96c6\u76f8\u5173\u51fd\u6570\u7684\u7ba1\u7406\u6743\u9650\u3002\nreadAnyDatabase\uff1a\u53ea\u5728admin\u6570\u636e\u5e93\u4e2d\u53ef\u7528\uff0c\u8d4b\u4e88\u7528\u6237\u6240\u6709\u6570\u636e\u5e93\u7684\u8bfb\u6743\u9650\nreadWriteAnyDatabase\uff1a\u53ea\u5728admin\u6570\u636e\u5e93\u4e2d\u53ef\u7528\uff0c\u8d4b\u4e88\u7528\u6237\u6240\u6709\u6570\u636e\u5e93\u7684\u8bfb\u5199\u6743\u9650\nuserAdminAnyDatabase\uff1a\u53ea\u5728admin\u6570\u636e\u5e93\u4e2d\u53ef\u7528\uff0c\u8d4b\u4e88\u7528\u6237\u6240\u6709\u6570\u636e\u5e93\u7684userAdmin\u6743\u9650\ndbAdminAnyDatabase\uff1a\u53ea\u5728admin\u6570\u636e\u5e93\u4e2d\u53ef\u7528\uff0c\u8d4b\u4e88\u7528\u6237\u6240\u6709\u6570\u636e\u5e93\u7684dbAdmin\u6743\u9650\u3002\nroot\uff1a\u53ea\u5728admin\u6570\u636e\u5e93\u4e2d\u53ef\u7528\u3002\u8d85\u7ea7\u8d26\u53f7\uff0c\u8d85\u7ea7\u6743\u9650\n")),Object(o.b)("p",null,"\u901a\u8fc7\u4fee\u6539\u6570\u636e\u5e93\u914d\u7f6e\u6587\u4ef6mongod.conf\uff0c\u8bbe\u7f6eauth=true\uff0c\u5f00\u542f\u7528\u6237\u9a8c\u8bc1"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"auth=true\n")),Object(o.b)("p",null,"\u5f53\u6570\u636e\u5e93\u914d\u7f6e\u4e86\u7528\u6237\u9a8c\u8bc1\u65f6\uff0c\u9700\u8981\u5728\u8fde\u63a5\u65f6\u914d\u7f6e\u7528\u6237\u540d\u548c\u5bc6\u7801"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"datasources:\n  default:\n    connection:\n      url: mongodb://user:password@192.168.0.21/steedos\n")),Object(o.b)("p",null,"\u5f53\u6570\u636e\u5e93\u662f\u4ee5\u96c6\u7fa4\u65b9\u5f0f\u8d77\u670d\u52a1\u65f6\uff0c\u8fde\u63a5\u65f6\u8fd8\u9700\u8981\u914d\u7f6ereplicaSet\u540d\u79f0\uff0c\u4f8b\u5982replicaSet\u4e3asteedos"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"datasources:\n  default:\n    connection:\n      url: mongodb://user:password@192.168.0.21/steedos?replicaSet=steedos\n")),Object(o.b)("h2",{id:"\u52a0\u8f7d\u4e1a\u52a1\u5bf9\u8c61"},"\u52a0\u8f7d\u4e1a\u52a1\u5bf9\u8c61"),Object(o.b)("p",null,"\u5728\u5b9a\u4e49\u6570\u636e\u6e90\u65f6\uff0c\u901a\u8fc7\u914d\u7f6e objectFiles \u5c5e\u6027\uff0c\u53ef\u4ee5\u52a0\u8f7d",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/developer/object"}),"\u4e1a\u52a1\u5bf9\u8c61"),"\u5230\u6570\u636e\u6e90\u4e2d\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'datasources:\n  default:\n    connection:\n      url: mongodb://192.168.0.21/steedos\n    objectFiles:\n      - "./src/default/"\n  mattermost:\n    connection:\n      driver: postgres\n      url: postgresql://user:password@192.168.0.21:5432/mattermost\n    objectFiles:\n      - "./src/mattermost/"\n')))}i.isMDXComponent=!0},382:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),i=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},d=function(e){var t=i(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=i(n),u=r,m=d["".concat(c,".").concat(u)]||d[u]||p[u]||o;return n?a.a.createElement(m,s({ref:t},b,{components:n})):a.a.createElement(m,s({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var b=2;b<o;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);