(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{201:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(1),c=r(6),a=(r(0),r(440)),o={title:"\u96f6\u4ee3\u7801 - \u5916\u90e8\u6570\u636e\u6e90",sidebar_label:"\u5916\u90e8\u6570\u636e\u6e90"},l={unversionedId:"help/no-code/object_datasources",id:"help/no-code/object_datasources",isDocsHomePage:!1,title:"\u96f6\u4ee3\u7801 - \u5916\u90e8\u6570\u636e\u6e90",description:"\u6570\u636e\u6e90\u7528\u4e8e\u5b9a\u4e49\u6570\u636e\u5e93\u8fde\u63a5\u65b9\u5f0f\uff0c\u4e1a\u52a1\u5bf9\u8c61\u901a\u8fc7\u5bf9\u5e94\u7684\u6570\u636e\u6e90\u4fdd\u5b58\u6570\u636e\u3002\u9664\u4e86\u4f7f\u7528\u9ed8\u8ba4\u6570\u636e\u6e90\uff0c\u534e\u708e\u9b54\u65b9\u96f6\u4ee3\u7801\u529f\u80fd\uff0c\u53ef\u4ee5\u901a\u8fc7\u586b\u5199\u8868\u5355\u7684\u5f62\u5f0f\uff0c\u914d\u7f6e\u6570\u636e\u6e90\u7684\u76f8\u5173\u4fe1\u606f\uff0c\u5373\u53ef\u5b8c\u6210\u5916\u90e8\u6570\u636e\u6e90\u7684\u8fde\u63a5\uff0c\u5305\u62ecSQL Server\u3001Oracle\u3001MySQL\u3001PostgreSQL\u7b49\u3002",source:"@site/../docs/help/no-code/object_datasources.md",slug:"/help/no-code/object_datasources",permalink:"/help/no-code/object_datasources",version:"current",sidebar_label:"\u5916\u90e8\u6570\u636e\u6e90",sidebar:"\u6587\u6863",previous:{title:"\u6253\u5370\u62a5\u4ef7\u5355\u8be6\u7ec6\u4fe1\u606f",permalink:"/help/word_template/examples"},next:{title:"\u5728\u7ebf\u8868\u5355",permalink:"/help/no-code/object_web_forms"}},s=[{value:"\u521b\u5efa\u5916\u90e8\u6570\u636e\u6e90-SQL Server",id:"\u521b\u5efa\u5916\u90e8\u6570\u636e\u6e90-sql-server",children:[]},{value:"\u521b\u5efa\u5916\u90e8\u6570\u636e\u6e90-MySQL",id:"\u521b\u5efa\u5916\u90e8\u6570\u636e\u6e90-mysql",children:[]}],i={rightToc:s};function u(e){var t=e.components,o=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u6570\u636e\u6e90\u7528\u4e8e\u5b9a\u4e49\u6570\u636e\u5e93\u8fde\u63a5\u65b9\u5f0f\uff0c\u4e1a\u52a1\u5bf9\u8c61\u901a\u8fc7\u5bf9\u5e94\u7684\u6570\u636e\u6e90\u4fdd\u5b58\u6570\u636e\u3002\u9664\u4e86\u4f7f\u7528\u9ed8\u8ba4\u6570\u636e\u6e90\uff0c\u534e\u708e\u9b54\u65b9\u96f6\u4ee3\u7801\u529f\u80fd\uff0c\u53ef\u4ee5\u901a\u8fc7\u586b\u5199\u8868\u5355\u7684\u5f62\u5f0f\uff0c\u914d\u7f6e\u6570\u636e\u6e90\u7684\u76f8\u5173\u4fe1\u606f\uff0c\u5373\u53ef\u5b8c\u6210\u5916\u90e8\u6570\u636e\u6e90\u7684\u8fde\u63a5\uff0c\u5305\u62ecSQL Server\u3001Oracle\u3001MySQL\u3001PostgreSQL\u7b49\u3002"),Object(a.b)("h2",{id:"\u521b\u5efa\u5916\u90e8\u6570\u636e\u6e90-sql-server"},"\u521b\u5efa\u5916\u90e8\u6570\u636e\u6e90-SQL Server"),Object(a.b)("p",null,"\u8fdb\u5165\u201c\u8bbe\u7f6e\u201d-\u201c\u5bf9\u8c61\u8bbe\u7f6e\u201d-\u201c\u5916\u90e8\u6570\u636e\u6e90\u201d\uff0c\u65b0\u5efa\u4e00\u4e2adrivertest\u5916\u90e8\u6570\u636e\u6e90\uff0c\u6570\u636e\u5e93\u7c7b\u578b\u9009\u62e9\u201cSqlServer\u201d\uff0c\u5e76\u4f9d\u6b21\u8f93\u5165\u540d\u79f0(\u4e00\u822c\u4e3a\u82f1\u6587)\u3001\u663e\u793a\u540d\u79f0\u3001\u8fde\u63a5\u6570\u636e\u5e93\u7684url\uff0curl\u683c\u5f0f\u4e3a\uff1amssql://\u7ba1\u7406\u5458\u8d26\u53f7:\u5bc6\u7801@\u670d\u52a1\u5668\u5730\u5740:1433/\u6570\u636e\u5e93\u3002"),Object(a.b)("p",null,Object(a.b)("img",{alt:"\u96f6\u4ee3\u7801-\u5916\u90e8\u6570\u636e\u6e90Sql",src:r(716).default})),Object(a.b)("h2",{id:"\u521b\u5efa\u5916\u90e8\u6570\u636e\u6e90-mysql"},"\u521b\u5efa\u5916\u90e8\u6570\u636e\u6e90-MySQL"),Object(a.b)("p",null,"\u8ddfSQL\u4e00\u6837\uff0c\u518d\u65b0\u5efa\u4e00\u4e2adriver_test\u5916\u90e8\u6570\u636e\u6e90\uff0c\u6570\u636e\u5e93\u7c7b\u578b\u9009\u62e9\u201cMySql\u201d\uff0c\u5e76\u4f9d\u6b21\u8f93\u5165\u540d\u79f0(\u4e00\u822c\u4e3a\u82f1\u6587)\u3001\u663e\u793a\u540d\u79f0\uff0c\u5e76\u914d\u7f6e\u5206\u7ec4\u9879\u3010\u5176\u4ed6\u8fde\u63a5\u9009\u9879\u3011\uff1a\u670d\u52a1\u5668\u5730\u5740\u3001\u7aef\u53e3\u3001\u6570\u636e\u5e93\u3001\u7528\u6237\u540d\u3001\u5bc6\u7801\uff0c\u6765\u66ff\u4ee3\u4e0a\u9762\u7684\u8fde\u63a5\u6570\u636e\u5e93\u7684url\uff0c\u4fdd\u5b58\u5e76\u8fdb\u884c\u6d4b\u8bd5\u94fe\u63a5\uff0c\u63d0\u793a\u8fde\u63a5\u6210\u529f\u5373\u5b8c\u6210\u3002"),Object(a.b)("p",null,Object(a.b)("img",{alt:"\u96f6\u4ee3\u7801-\u5916\u90e8\u6570\u636e\u6e90MySql",src:r(717).default})),Object(a.b)("p",null,Object(a.b)("img",{alt:"\u96f6\u4ee3\u7801-\u5916\u90e8\u6570\u636e\u6e90MySql",src:r(718).default})),Object(a.b)("p",null,"\u5f53\u70b9\u51fb\u6d4b\u8bd5\u94fe\u63a5\u540e\uff0c\u51fa\u73b0\u5982\u4e0b\u56fe\u63d0\u793a\u65f6\uff0c\u8bf7\u5728\u9879\u76ee\u7ec8\u7aef\u4e2d\u8f93\u5165'yarn add mysql'\u8fdb\u884cmysql\u63d2\u4ef6\u5b89\u88c5\uff0c\u5e76\u91cd\u542f\u670d\u52a1\u8fd0\u884c\uff0c\u518d\u6b21\u5c1d\u8bd5\u6d4b\u8bd5\u94fe\u63a5\u5373\u53ef\u63d0\u793a\u201c\u8fde\u63a5\u6210\u529f\u201d\u3002"),Object(a.b)("p",null,Object(a.b)("img",{alt:"\u96f6\u4ee3\u7801-\u5916\u90e8\u6570\u636e\u6e90MySql",src:r(719).default})),Object(a.b)("p",null,Object(a.b)("img",{alt:"\u96f6\u4ee3\u7801-\u5916\u90e8\u6570\u636e\u6e90MySql",src:r(720).default})))}u.isMDXComponent=!0},440:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),c=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var i=c.a.createContext({}),u=function(e){var t=c.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},p=function(e){var t=u(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,f=p["".concat(o,".").concat(d)]||p[d]||b[d]||a;return r?c.a.createElement(f,l({ref:t},i,{components:r})):c.a.createElement(f,l({ref:t},i))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var i=2;i<a;i++)o[i]=r[i];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},716:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/sqlserver_new-12a0cfdc53025d0f8f1ac5c1b05118c6.png"},717:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/mysql_new-4f6a0c6280dca2d8e5c746ccb5291bdf.png"},718:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/mysql_datasource-d8458a57b304be29eb0a6bd94adb484b.png"},719:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/mysql_error-e852b08fcef80a10f5df9eee899cedda.png"},720:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/mysql_yarn-de136d11cf5b870788dbff9c1a093587.png"}}]);