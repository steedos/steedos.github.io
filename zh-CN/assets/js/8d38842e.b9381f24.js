"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1355],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7737:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const s={title:"\u5355\u70b9\u767b\u5f55 API",description:"\u901a\u8fc7jwt\u5b9e\u73b0\u5916\u63a5\u5e94\u7528\u4e0esteedos\u5e73\u53f0\u53cc\u5411\u5355\u70b9\u767b\u5f55\u3002"},i=void 0,a={unversionedId:"developer/integration/api-jwt-sso",id:"developer/integration/api-jwt-sso",title:"\u5355\u70b9\u767b\u5f55 API",description:"\u901a\u8fc7jwt\u5b9e\u73b0\u5916\u63a5\u5e94\u7528\u4e0esteedos\u5e73\u53f0\u53cc\u5411\u5355\u70b9\u767b\u5f55\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/developer/integration/api-jwt-sso.mdx",sourceDirName:"developer/integration",slug:"/developer/integration/api-jwt-sso",permalink:"/zh-CN/developer/integration/api-jwt-sso",draft:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/developer/integration/api-jwt-sso.mdx",tags:[],version:"current",frontMatter:{title:"\u5355\u70b9\u767b\u5f55 API",description:"\u901a\u8fc7jwt\u5b9e\u73b0\u5916\u63a5\u5e94\u7528\u4e0esteedos\u5e73\u53f0\u53cc\u5411\u5355\u70b9\u767b\u5f55\u3002"},sidebar:"developer",previous:{title:"\u7cfb\u7edf\u96c6\u6210",permalink:"/zh-CN/developer/integration/"},next:{title:"Node-Red",permalink:"/zh-CN/developer/integration/node-red"}},l={},p=[{value:"\u5916\u63a5\u5e94\u7528\u767b\u5f55\u5230steedos",id:"\u5916\u63a5\u5e94\u7528\u767b\u5f55\u5230steedos",level:2},{value:"\u51c6\u5907\u4e8b\u9879",id:"\u51c6\u5907\u4e8b\u9879",level:3},{value:"\u8fc7\u7a0b\u63cf\u8ff0",id:"\u8fc7\u7a0b\u63cf\u8ff0",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"steedos\u767b\u5f55\u5230\u5916\u63a5\u5e94\u7528",id:"steedos\u767b\u5f55\u5230\u5916\u63a5\u5e94\u7528",level:2},{value:"\u8fc7\u7a0b\u63cf\u8ff0",id:"\u8fc7\u7a0b\u63cf\u8ff0-1",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5916\u63a5\u5e94\u7528\u767b\u5f55\u5230steedos"},"\u5916\u63a5\u5e94\u7528\u767b\u5f55\u5230steedos"),(0,o.kt)("h3",{id:"\u51c6\u5907\u4e8b\u9879"},"\u51c6\u5907\u4e8b\u9879"),(0,o.kt)("p",null,"1\u3001 steedos\u5e73\u53f0\u9700\u8981\u914d\u7f6e\u73af\u5883\u53d8\u91cf\u5f00\u542f\u5355\u70b9\u767b\u5f55\u529f\u80fd\uff0c\u5728 .env.local\u4e2d\u6dfb\u52a0:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-env"},"# JWT SSO\nSTEEDOS_IDENTITY_JWT_ENABLED=true\n")),(0,o.kt)("h3",{id:"\u8fc7\u7a0b\u63cf\u8ff0"},"\u8fc7\u7a0b\u63cf\u8ff0"),(0,o.kt)("p",null,"1\u3001\u5916\u63a5\u5e94\u7528\u5728\u81ea\u5b9a\u4e49\u670d\u52a1\u7aef\u63a5\u53e3\u4e2d\u751f\u6210jwt"),(0,o.kt)("p",null,"2\u3001\u5916\u63a5\u5e94\u7528\u5728\u6d4f\u89c8\u5668\u7aef\u8df3\u8f6c\u81f3steedos\u63a5\u53e3 GET {root_url}/accounts/jwt/login?t={jwt}&redirect={redirectURL} \u5b9e\u73b0\u5355\u70b9\u767b\u5f55\uff1b"),(0,o.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("p",null,"1\u3001steedos\u91cc\u65b0\u5efa\u5e94\u7528 \u6307\u5b9a\u597d API\u540d\u79f0\uff08\u5982\uff1afinance\uff09\u3001API\u5bc6\u94a5\uff08\u5982\uff1aapp_api_secret\uff09\uff1b"),(0,o.kt)("p",null,"2\u3001\u5916\u63a5\u5e94\u7528\u524d\u7aef\u6309\u94ae\u8c03\u7528\u81ea\u5b9a\u4e49\u63a5\u53e3\uff08\u5982\uff1aGET /api/get/token\uff09\uff0c\u5728\u81ea\u5b9a\u4e49\u63a5\u53e3\u4e2d\u751f\u6210jwt\uff1b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n    sso: function (object_name, record_id) {\n        const getTokenURL = '/api/get/token'; // \u81ea\u5b9a\u4e49\u63a5\u53e3\n\n        // \u751f\u6210\u4ee4\u724c\n        const result = Steedos.authRequest(getTokenURL, {\n            type: 'GET',\n            async: false,\n            contentType: 'application/json'\n        });\n\n        const token = result.token;\n        const PLATFORM_ROOT_URL = 'https://5000-steedos-steedosprojectt-5apf195eq37.ws-us77.gitpod.io' // steedos\u8bbf\u95ee\u5730\u5740\uff0c\u7531steedos\u63d0\u4f9b\n        // \u8df3\u8f6c\u5230steedos\n        window.open(`${PLATFORM_ROOT_URL}/accounts/jwt/login?t=${token}&redirect=${PLATFORM_ROOT_URL}`, '_blank') // \u6d4f\u89c8\u5668\u6253\u5f00\u65b0\u7a97\u53e3\n\n    },\n    ssoVisible: function () {\n        return true\n    }\n}\n")),(0,o.kt)("p",null,"3\u3001\u81ea\u5b9a\u4e49\u670d\u52a1\u7aef\u63a5\u53e3\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// nodejs\u793a\u4f8b\nconst express = require(\"express\");\nconst router = express.Router();\nconst core = require('@steedos/core');\nconst jwt = require('jsonwebtoken');\n\n/**\n * \u751f\u6210\u4ee4\u724c\n */\nrouter.get('/api/get/token', core.requireAuthentication, async function (req, res) {\n    const userSession = req.user;\n\n    var secret = 'app_api_secret' // \u5e94\u7528\u7684API \u5bc6\u94a5\uff0c\u7531steedos\u63d0\u4f9b\n    var options = { expiresIn: 30 } // 30\u79d2\u6709\u6548\n    var token = jwt.sign({\n        profile: {\n            email: userSession.email // \u5f53\u524d\u7528\u6237\u90ae\u4ef6\n        },\n        app_code: 'finance' // \u5e94\u7528\u7684API \u540d\u79f0\uff0c\u7531steedos\u63d0\u4f9b\n    }, secret, options);\n\n    res.status(200).send({\n        token: token\n    });\n});\nexports.default = router;\n")),(0,o.kt)("h2",{id:"steedos\u767b\u5f55\u5230\u5916\u63a5\u5e94\u7528"},"steedos\u767b\u5f55\u5230\u5916\u63a5\u5e94\u7528"),(0,o.kt)("h3",{id:"\u8fc7\u7a0b\u63cf\u8ff0-1"},"\u8fc7\u7a0b\u63cf\u8ff0"),(0,o.kt)("p",null,"1\u3001steedos\u91cc\u65b0\u5efa\u5e94\u7528\uff0c\u6307\u5b9a\u597d \u5916\u90e8\u94fe\u63a5\u3001API\u5bc6\u94a5\uff1b"),(0,o.kt)("p",null,"2\u3001\u5e94\u7528\u7a0b\u5e8f\u542f\u52a8\u5668\u4e2d\u70b9\u51fb\u5916\u63a5\u5e94\u7528\u8df3\u8f6c\u5230\u5916\u90e8\u94fe\u63a5\u5e76\u5728url\u4e0a\u5e26\u4e0a t \u53c2\u6570"),(0,o.kt)("p",null,"3\u3001\u5916\u63a5\u5e94\u7528\u89e3\u6790 t \u53c2\u6570\uff0c\u6210\u529f\u540e\u8df3\u8f6c\u5230\u5e94\u7528\u5185"),(0,o.kt)("h3",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b"),(0,o.kt)("p",null,"1\u3001steedos\u91cc\u65b0\u5efa\u5e94\u7528\uff0c\u6307\u5b9a\u5916\u90e8\u94fe\u63a5\uff08\u5982\uff1aGET ",(0,o.kt)("a",{parentName:"p",href:"https://5000-steedos-steedosprojectt-5apf195eq37.ws-us77.gitpod.io/api/sso"},"https://5000-steedos-steedosprojectt-5apf195eq37.ws-us77.gitpod.io/api/sso")," \uff09\u3001API\u5bc6\u94a5\uff08\u5982\uff1aapp_api_secret\uff09"),(0,o.kt)("p",null,"2\u3001\u5e94\u7528\u7a0b\u5e8f\u542f\u52a8\u5668\u4e2d\u70b9\u51fb\u5916\u63a5\u5e94\u7528\u8df3\u8f6c\u5230\u5916\u90e8\u94fe\u63a5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"https://5000-steedos-steedosprojectt-5apf195eq37.ws-us77.gitpod.io/api/sso?t=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvYmplY3RfbmFtZSI6InNwYWNlX3VzZXJzIiwiZG9jIjp7Il9pZCI6IkFGTkVuQ3hiU29HRWc0b2NmIiwibmFtZSI6Inh4eCIsInVzZXJuYW1lIjoieHh4eHh4IiwiZW1haWwiOiJzQHMuY29tIn0sImlhdCI6MTY2OTI2NjA0NiwiZXhwIjoxNjY5MjY5NjQ2fQ.qeld2kTl5zjLGjCWgk3cb6UPEPlqmzMaME20mo_t-t4\n")),(0,o.kt)("p",null,"3\u3001\u5916\u63a5\u5e94\u7528\u89e3\u6790\u4ee4\u724c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// nodejs \u793a\u4f8b\nconst express = require(\"express\");\nconst router = express.Router();\nconst jwt = require('jsonwebtoken')\n\nrouter.get('/api/sso', async function (req, res) {\n    console.log(req.query)\n    // {\n    //     t: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvYmplY3RfbmFtZSI6InNwYWNlX3VzZXJzIiwiZG9jIjp7Il9pZCI6IkFGTkVuQ3hiU29HRWc0b2NmIiwibmFtZSI6Inh4eCIsInVzZXJuYW1lIjoieHh4eHh4IiwiZW1haWwiOiJzQHMuY29tIn0sImlhdCI6MTY2OTI2NjA0NiwiZXhwIjoxNjY5MjY5NjQ2fQ.qeld2kTl5zjLGjCWgk3cb6UPEPlqmzMaME20mo_t-t4'\n    // }\n    const payload = jwt.verify(req.query.t, 'app_api_secret') // \u4f7f\u7528\u914d\u7f6e\u7684 API\u5bc6\u94a5 \u9a8c\u8bc1\u5e76\u89e3\u6790\u4fe1\u606f\n    console.log(payload)\n    // {\n    //     profile: {\n    //         name: 'xxx',\n    //         username: 'xxxxxx',\n    //         email: 's@s.com'\n    //     },\n    //     iat: 1669266046,\n    //     exp: 1669269646\n    // }\n\n    res.status(200).send({ message: 'router ok' });\n});\nexports.default = router;\n")))}d.isMDXComponent=!0}}]);