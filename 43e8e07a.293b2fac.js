(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{186:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return i}));var r=t(3),o=t(7),a=(t(0),t(510)),c={title:"\u5916\u90e8\u6570\u636e\u6e90"},s={unversionedId:"developer/datasource",id:"developer/datasource",isDocsHomePage:!1,title:"\u5916\u90e8\u6570\u636e\u6e90",description:"\u6570\u636e\u6e90\u7528\u4e8e\u5b9a\u4e49\u6570\u636e\u5e93\u8fde\u63a5\u65b9\u5f0f\uff0c\u4e1a\u52a1\u5bf9\u8c61\u901a\u8fc7\u5bf9\u5e94\u7684\u6570\u636e\u6e90\u4fdd\u5b58\u6570\u636e\u3002Steedos\u7cfb\u7edf\u5c42\u4f7f\u7528MongoDB\u6570\u636e\u5e93\uff0cSteedos\u7684\u6807\u51c6\u5bf9\u8c61\u90fd\u4fdd\u5b58\u5728\u9ed8\u8ba4\u6570\u636e\u6e90\u4e2d\u3002\u5f00\u53d1\u4eba\u5458\u4e5f\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u8fde\u63a5\u5176\u4ed6\u5e38\u7528\u7684\u6570\u636e\u6e90\uff0c\u5305\u62ecSQL Server\u3001Oracle\u3001MySQL\u3001PostgreSQL\u3002",source:"@site/../docs/developer/datasource.md",slug:"/developer/datasource",permalink:"/developer/datasource",version:"current",sidebar:"\u6587\u6863",previous:{title:"\u5bf9\u8c61",permalink:"/developer/objectql_object"},next:{title:"\u6807\u51c6\u4e1a\u52a1\u5bf9\u8c61",permalink:"/developer/standard_objects"}},l=[{value:"\u4f7f\u7528steedos-config\u914d\u7f6e\u6570\u636e\u6e90",id:"\u4f7f\u7528steedos-config\u914d\u7f6e\u6570\u636e\u6e90",children:[]},{value:"\u52a0\u8f7d\u4e1a\u52a1\u5bf9\u8c61",id:"\u52a0\u8f7d\u4e1a\u52a1\u5bf9\u8c61",children:[]},{value:"\u4f7f\u7528\u4ee3\u7801\u5b9a\u4e49\u6570\u636e\u6e90",id:"\u4f7f\u7528\u4ee3\u7801\u5b9a\u4e49\u6570\u636e\u6e90",children:[]},{value:"\u9ed8\u8ba4\u6570\u636e\u6e90",id:"\u9ed8\u8ba4\u6570\u636e\u6e90",children:[]},{value:"\u5b9a\u4e49\u7a7a\u5e93\u521d\u59cb\u5316\u5efa\u8868\u7684\u8bed\u8a00",id:"\u5b9a\u4e49\u7a7a\u5e93\u521d\u59cb\u5316\u5efa\u8868\u7684\u8bed\u8a00",children:[]}],d={toc:l};function i(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u6570\u636e\u6e90\u7528\u4e8e\u5b9a\u4e49\u6570\u636e\u5e93\u8fde\u63a5\u65b9\u5f0f\uff0c\u4e1a\u52a1\u5bf9\u8c61\u901a\u8fc7\u5bf9\u5e94\u7684\u6570\u636e\u6e90\u4fdd\u5b58\u6570\u636e\u3002Steedos\u7cfb\u7edf\u5c42\u4f7f\u7528MongoDB\u6570\u636e\u5e93\uff0cSteedos\u7684\u6807\u51c6\u5bf9\u8c61\u90fd\u4fdd\u5b58\u5728\u9ed8\u8ba4\u6570\u636e\u6e90\u4e2d\u3002\u5f00\u53d1\u4eba\u5458\u4e5f\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u8fde\u63a5\u5176\u4ed6\u5e38\u7528\u7684\u6570\u636e\u6e90\uff0c\u5305\u62ecSQL Server\u3001Oracle\u3001MySQL\u3001PostgreSQL\u3002"),Object(a.b)("h2",{id:"\u4f7f\u7528steedos-config\u914d\u7f6e\u6570\u636e\u6e90"},"\u4f7f\u7528steedos-config\u914d\u7f6e\u6570\u636e\u6e90"),Object(a.b)("p",null,"\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u5728\u9879\u76ee\u914d\u7f6e\u6587\u4ef6\uff08steedos-config.yml\uff09\u4e2d\u5b9a\u4e49\u6570\u636e\u6e90\u3002"),Object(a.b)("p",null,"mongodb\u662f\u5fc5\u9009\u7684\u9ed8\u8ba4\u6570\u636e\u6e90\uff0c\u4e0d\u53ef\u5220\u9664\uff0c\u4f46\u53ef\u4ee5\u914d\u7f6e\u591a\u4e2a\u989d\u5916\u7684\u7b2c\u4e09\u65b9\u6570\u636e\u6e90\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},'datasources:\n  default:\n    connection:\n      driver: mongo\n      url: mongodb://192.168.0.21/steedos\n  drivertest:\n    connection:\n      driver: mysql\n      url: mysql://admin:password@192.168.0.198:3306/driver-test\n  forecast:\n    connection:\n      driver: mssql\n      host: 192.168.0.190\n      port: 1433\n      username: sa\n      password: password\n      database: forecast\n    objectFiles:\n      - "./forecast/**" \n')),Object(a.b)("h2",{id:"\u52a0\u8f7d\u4e1a\u52a1\u5bf9\u8c61"},"\u52a0\u8f7d\u4e1a\u52a1\u5bf9\u8c61"),Object(a.b)("p",null,"\u5728\u5b9a\u4e49\u6570\u636e\u6e90\u65f6\uff0c\u901a\u8fc7\u914d\u7f6e objectFiles \u5c5e\u6027\uff0c\u53ef\u4ee5\u52a0\u8f7d",Object(a.b)("a",{parentName:"p",href:"/developer/object"},"\u4e1a\u52a1\u5bf9\u8c61"),"\u5230\u6570\u636e\u6e90\u4e2d\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},'datasources:\n  default:\n    connection:\n      url: mongodb://192.168.0.21/steedos\n    objectFiles:\n      - "./src/default/"\n  mattermost:\n    connection:\n      driver: postgres\n      url: postgresql://user:password@192.168.0.21:5432/mattermost\n    objectFiles:\n      - "./src/mattermost/"\n')),Object(a.b)("h2",{id:"\u4f7f\u7528\u4ee3\u7801\u5b9a\u4e49\u6570\u636e\u6e90"},"\u4f7f\u7528\u4ee3\u7801\u5b9a\u4e49\u6570\u636e\u6e90"),Object(a.b)("p",null,"\u6700\u7b80\u5355\u548c\u6700\u5e38\u7528\u7684\u65b9\u6cd5\u662f\u4f7f\u7528",Object(a.b)("inlineCode",{parentName:"p"},"createConnection"),"\u548c",Object(a.b)("inlineCode",{parentName:"p"},"createConnections"),"\u51fd\u6570\u3002"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"createConnection")," \u521b\u5efa\u5355\u4e2a\u8fde\u63a5\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},'import { createConnection, Connection } from "@steedos/objectql";\n\nconst connection = await createConnection({\n  name: "mysql",\n  driver: "mysql",\n  host: "localhost",\n  port: 3306,\n  username: "test",\n  password: "test",\n  database: "test"\n});\n')),Object(a.b)("p",null,"\u53ea\u4f7f\u7528",Object(a.b)("inlineCode",{parentName:"p"},"url"),"\u548c",Object(a.b)("inlineCode",{parentName:"p"},"type"),"\u4e5f\u53ef\u4ee5\u8fdb\u884c\u8fde\u63a5\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'createConnection({\n  name: "postgres",  \n  driver: "postgres",\n  url: "postgres://test:test@localhost/test"\n});\n')),Object(a.b)("h2",{id:"\u9ed8\u8ba4\u6570\u636e\u6e90"},"\u9ed8\u8ba4\u6570\u636e\u6e90"),Object(a.b)("p",null,"\u9ed8\u8ba4\u6570\u636e\u6e90\u4f7f\u7528MongoDB\u6570\u636e\u5e93\uff0c\u4ee5default\u547d\u540d\uff0cSteedos\u7684\u5185\u6838",Object(a.b)("a",{parentName:"p",href:"./standard_objects"},"\u6807\u51c6\u4e1a\u52a1\u5bf9\u8c61"),"\u5747\u8fd0\u884c\u4e8e\u6b64\u6570\u636e\u6e90\u4e2d\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"datasources:\n  default:\n    connection:\n      url: mongodb://192.168.0.21/steedos\n")),Object(a.b)("p",null,"\u914d\u7f6e\u6307\u5b9a\u6570\u636e\u5e93\u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u4f8b\u5982\u7ed9steedos\u6570\u636e\u5e93\u914d\u7f6e\u7528\u6237\uff1asteedos  \u5bc6\u7801\uff1apwd\uff0c\u5177\u6709\u8bfb\u5199\u6743\u9650"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'use steedos\ndb.createUser({user: "steedos", pwd: "pwd", roles: [ { role: "readWrite", db: "steedos" } ] } )\n')),Object(a.b)("p",null,"\u7528\u6237\u6743\u9650\u914d\u7f6e\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"Read\uff1a\u5141\u8bb8\u7528\u6237\u8bfb\u53d6\u6307\u5b9a\u6570\u636e\u5e93\nreadWrite\uff1a\u5141\u8bb8\u7528\u6237\u8bfb\u5199\u6307\u5b9a\u6570\u636e\u5e93\ndbAdmin\uff1a\u5141\u8bb8\u7528\u6237\u5728\u6307\u5b9a\u6570\u636e\u5e93\u4e2d\u6267\u884c\u7ba1\u7406\u51fd\u6570\uff0c\u5982\u7d22\u5f15\u521b\u5efa\u3001\u5220\u9664\uff0c\u67e5\u770b\u7edf\u8ba1\u6216\u8bbf\u95eesystem.profile\nuserAdmin\uff1a\u5141\u8bb8\u7528\u6237\u5411system.users\u96c6\u5408\u5199\u5165\uff0c\u53ef\u4ee5\u627e\u6307\u5b9a\u6570\u636e\u5e93\u91cc\u521b\u5efa\u3001\u5220\u9664\u548c\u7ba1\u7406\u7528\u6237\nclusterAdmin\uff1a\u53ea\u5728admin\u6570\u636e\u5e93\u4e2d\u53ef\u7528\uff0c\u8d4b\u4e88\u7528\u6237\u6240\u6709\u5206\u7247\u548c\u590d\u5236\u96c6\u76f8\u5173\u51fd\u6570\u7684\u7ba1\u7406\u6743\u9650\u3002\nreadAnyDatabase\uff1a\u53ea\u5728admin\u6570\u636e\u5e93\u4e2d\u53ef\u7528\uff0c\u8d4b\u4e88\u7528\u6237\u6240\u6709\u6570\u636e\u5e93\u7684\u8bfb\u6743\u9650\nreadWriteAnyDatabase\uff1a\u53ea\u5728admin\u6570\u636e\u5e93\u4e2d\u53ef\u7528\uff0c\u8d4b\u4e88\u7528\u6237\u6240\u6709\u6570\u636e\u5e93\u7684\u8bfb\u5199\u6743\u9650\nuserAdminAnyDatabase\uff1a\u53ea\u5728admin\u6570\u636e\u5e93\u4e2d\u53ef\u7528\uff0c\u8d4b\u4e88\u7528\u6237\u6240\u6709\u6570\u636e\u5e93\u7684userAdmin\u6743\u9650\ndbAdminAnyDatabase\uff1a\u53ea\u5728admin\u6570\u636e\u5e93\u4e2d\u53ef\u7528\uff0c\u8d4b\u4e88\u7528\u6237\u6240\u6709\u6570\u636e\u5e93\u7684dbAdmin\u6743\u9650\u3002\nroot\uff1a\u53ea\u5728admin\u6570\u636e\u5e93\u4e2d\u53ef\u7528\u3002\u8d85\u7ea7\u8d26\u53f7\uff0c\u8d85\u7ea7\u6743\u9650\n")),Object(a.b)("p",null,"\u901a\u8fc7\u4fee\u6539\u6570\u636e\u5e93\u914d\u7f6e\u6587\u4ef6mongod.conf\uff0c\u8bbe\u7f6eauth=true\uff0c\u5f00\u542f\u7528\u6237\u9a8c\u8bc1"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"auth=true\n")),Object(a.b)("p",null,"\u5f53\u6570\u636e\u5e93\u914d\u7f6e\u4e86\u7528\u6237\u9a8c\u8bc1\u65f6\uff0c\u9700\u8981\u5728\u8fde\u63a5\u65f6\u914d\u7f6e\u7528\u6237\u540d\u548c\u5bc6\u7801"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"datasources:\n  default:\n    connection:\n      url: mongodb://user:password@192.168.0.21/steedos\n")),Object(a.b)("p",null,"\u5f53\u6570\u636e\u5e93\u662f\u4ee5\u96c6\u7fa4\u65b9\u5f0f\u8d77\u670d\u52a1\u65f6\uff0c\u8fde\u63a5\u65f6\u8fd8\u9700\u8981\u914d\u7f6ereplicaSet\u540d\u79f0\uff0c\u4f8b\u5982replicaSet\u4e3asteedos"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"datasources:\n  default:\n    connection:\n      url: mongodb://user:password@192.168.0.21/steedos?replicaSet=steedos\n")),Object(a.b)("h2",{id:"\u5b9a\u4e49\u7a7a\u5e93\u521d\u59cb\u5316\u5efa\u8868\u7684\u8bed\u8a00"},"\u5b9a\u4e49\u7a7a\u5e93\u521d\u59cb\u5316\u5efa\u8868\u7684\u8bed\u8a00"),Object(a.b)("p",null,"\u5728\u521b\u5efa\u8868\u65f6\u53ef\u6307\u5b9a\u6570\u636e\u5e93\u4e2d\u8868\u7684\u8bed\u8a00"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},'datasources:\n  default:\n    locale: zh # \u503c\u6765\u6e90 https://docs.mongodb.com/manual/reference/collation-locales-defaults/#collation-languages-locales\n    connection:\n      url: mongodb://192.168.0.21/steedos\n    objectFiles:\n      - "./src/default/"\n')))}i.isMDXComponent=!0},510:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=o.a.createContext({}),i=function(e){var n=o.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},b=function(e){var n=i(e.components);return o.a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),b=i(t),u=r,m=b["".concat(c,".").concat(u)]||b[u]||p[u]||a;return t?o.a.createElement(m,s(s({ref:n},d),{},{components:t})):o.a.createElement(m,s({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var d=2;d<a;d++)c[d]=t[d];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);