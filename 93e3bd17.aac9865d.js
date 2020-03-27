(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{288:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return i})),r.d(n,"rightToc",(function(){return p})),r.d(n,"default",(function(){return u}));var t=r(1),a=r(9),l=(r(0),r(400)),c={title:"\u670d\u52a1\u7aef\u63d2\u4ef6"},i={id:"plugins/plugin_server",title:"\u670d\u52a1\u7aef\u63d2\u4ef6",description:"\u901a\u8fc7\u5b9a\u4e49\u670d\u52a1\u7aef\u63d2\u4ef6\uff0c\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u521b\u5efa/\u7ee7\u627f\u4e1a\u52a1\u5bf9\u8c61\uff0c\u6216\u662f\u5f00\u53d1\u670d\u52a1\u7aefAPI\u3002",source:"@site/../docs/plugins/plugin_server.md",permalink:"/plugins/plugin_server",sidebar:"\u534e\u708eaPaaS\u5f00\u53d1\u5e73\u53f0",previous:{title:"\u5feb\u901f\u5411\u5bfc",permalink:"/plugins/index"},next:{title:"Web App \u63d2\u4ef6",permalink:"/plugins/plugin_webapp"}},p=[{value:"\u521b\u5efa\u63d2\u4ef6",id:"\u521b\u5efa\u63d2\u4ef6",children:[]},{value:"\u521d\u59cb\u5316\u63d2\u4ef6",id:"\u521d\u59cb\u5316\u63d2\u4ef6",children:[{value:"\u63d2\u4ef6\u540d\u79f0 name",id:"\u63d2\u4ef6\u540d\u79f0-name",children:[]}]},{value:"\u63d2\u4ef6\u914d\u7f6e",id:"\u63d2\u4ef6\u914d\u7f6e",children:[{value:"\u5b9a\u4e49\u670d\u52a1\u7aefAPI",id:"\u5b9a\u4e49\u670d\u52a1\u7aefapi",children:[]},{value:"\u63d2\u4ef6\u521d\u59cb\u5316",id:"\u63d2\u4ef6\u521d\u59cb\u5316",children:[]}]}],o={rightToc:p},s="wrapper";function u(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)(s,Object(t.a)({},o,r,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u901a\u8fc7\u5b9a\u4e49\u670d\u52a1\u7aef\u63d2\u4ef6\uff0c\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u521b\u5efa/\u7ee7\u627f\u4e1a\u52a1\u5bf9\u8c61\uff0c\u6216\u662f\u5f00\u53d1\u670d\u52a1\u7aefAPI\u3002"),Object(l.b)("p",null,"\u4ee5\u4e0b\u6559\u7a0b\u521b\u5efa\u4e00\u4e2aHello World\u670d\u52a1\u7aef\u63d2\u4ef6\u3002"),Object(l.b)("h2",{id:"\u521b\u5efa\u63d2\u4ef6"},"\u521b\u5efa\u63d2\u4ef6"),Object(l.b)("p",null,"\u521b\u5efa\u5e76\u8df3\u8f6c\u5230\u63d2\u4ef6\u6587\u4ef6\u5939\u3002"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"cd {project_root}\nmkdir .plugins\ncd .plugins\nmkdir hello-world-plugin\ncd hello-world-plugin\n")),Object(l.b)("h2",{id:"\u521d\u59cb\u5316\u63d2\u4ef6"},"\u521d\u59cb\u5316\u63d2\u4ef6"),Object(l.b)("p",null,"\u521b\u5efa\u4e00\u4e2a package.json \u6587\u4ef6"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "hello-world-plugin",\n  "version": "0.0.1",\n  "description": "Hello World",\n  "main": "server/main.js"\n}\n')),Object(l.b)("h3",{id:"\u63d2\u4ef6\u540d\u79f0-name"},"\u63d2\u4ef6\u540d\u79f0 name"),Object(l.b)("p",null,"package.json \u4e2d\u5b9a\u4e49\u7684 npm \u5305\u540d\u79f0\uff0c\u5c31\u662f\u63d2\u4ef6\u540d\u79f0\u3002"),Object(l.b)("h2",{id:"\u63d2\u4ef6\u914d\u7f6e"},"\u63d2\u4ef6\u914d\u7f6e"),Object(l.b)("p",null,"\u6bcf\u4e2a\u63d2\u4ef6\u5fc5\u987b\u5b9a\u4e49\u4e00\u4e2a\u63d2\u4ef6\u914d\u7f6e\u6587\u4ef6 ",Object(l.b)("a",Object(t.a)({parentName:"p"},{href:"/plugins/plugin_config"}),"plugin.config.yml")," \u6587\u4ef6\u3002"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"server:\n  main: server/main.js\n")),Object(l.b)("p",null,"\u914d\u7f6e\u6587\u4ef6\u63cf\u8ff0\u7684 server/main\uff0c\u5fc5\u987b\u4e0e package.json \u4e2d\u4fdd\u6301\u4e00\u81f4\u3002"),Object(l.b)("h3",{id:"\u5b9a\u4e49\u670d\u52a1\u7aefapi"},"\u5b9a\u4e49\u670d\u52a1\u7aefAPI"),Object(l.b)("p",null,"\u53ef\u4ee5\u5728\u63d2\u4ef6\u4e2d\u5b9a\u4e49 Express Routes\uff0c\u5e76\u5728\u63d2\u4ef6\u521d\u59cb\u5316\u51fd\u6570\u4e2d\u6ce8\u518c\u76f8\u5173\u8def\u7531\u3002"),Object(l.b)("p",null,"\u521b\u5efa\u4e00\u4e2a router.js \u6587\u4ef6\uff0c\u5e76\u6dfb\u52a0\u4ee5\u4e0b\u4ee3\u7801\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"const express = require('express')\nconst router = express.Router();\n\nrouter.get('/hello', async (req, res) => {\n    if (req.user){\n        res.status(200).send('Hello ' + req.user.name);\n        res.end();\n    } else {\n        res.status(403).send('Sorry, access denied.');\n        res.end();\n    }\n    return;\n}\n")),Object(l.b)("h3",{id:"\u63d2\u4ef6\u521d\u59cb\u5316"},"\u63d2\u4ef6\u521d\u59cb\u5316"),Object(l.b)("p",null,"\u5728main\u6587\u4ef6\u4e2d\uff0c\u5fc5\u987b\u5b9a\u4e49\u5e76\u5bfc\u51fa init \u51fd\u6570\uff0c\u4f9b Steedos \u5728\u63d2\u4ef6\u521d\u59cb\u5316\u65f6\u8c03\u7528\u3002"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"const router = require(\"router\");\n\nexport function init(context) {\n    // \u6267\u884c\u63d2\u4ef6\u521d\u59cb\u5316\u3002\n    context.app.use('/.plugins/hello-world/api', router);\n}\n")),Object(l.b)("p",null,"context\u4e2d\u5305\u542b\u4ee5\u4e0b\u53c2\u6570\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"app: express \u670d\u52a1\u7aef\uff0c\u7528\u4e8e\u5f15\u5165\u8def\u7531\u3002"),Object(l.b)("li",{parentName:"ul"},"settings: \u9879\u76ee steedos-config.yml \u4e2d\u914d\u7f6e\u7684\u6240\u6709\u53c2\u6570\u3002")))}u.isMDXComponent=!0},400:function(e,n,r){"use strict";r.d(n,"a",(function(){return i})),r.d(n,"b",(function(){return u}));var t=r(0),a=r.n(t),l=a.a.createContext({}),c=function(e){var n=a.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):Object.assign({},n,e)),r},i=function(e){var n=c(e.components);return a.a.createElement(l.Provider,{value:n},e.children)};var p="mdxType",o={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=Object(t.forwardRef)((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,i=e.parentName,p=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===n.indexOf(t)&&(r[t]=e[t]);return r}(e,["components","mdxType","originalType","parentName"]),s=c(r),u=t,b=s[i+"."+u]||s[u]||o[u]||l;return r?a.a.createElement(b,Object.assign({},{ref:n},p,{components:r})):a.a.createElement(b,Object.assign({},{ref:n},p))}));function u(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=r.length,c=new Array(l);c[0]=s;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[p]="string"==typeof e?e:t,c[1]=i;for(var u=2;u<l;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);