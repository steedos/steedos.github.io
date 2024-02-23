"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6773],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52934:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={title:"SSO API",description:"\u901a\u8fc7jwt\u5b9e\u73b0\u5916\u63a5\u5e94\u7528\u4e0e\u9b54\u65b9\u5e73\u53f0\u53cc\u5411\u5355\u70b9\u767b\u5f55\u3002"},a=void 0,s={unversionedId:"developer/integration/api-jwt-sso",id:"developer/integration/api-jwt-sso",title:"SSO API",description:"\u901a\u8fc7jwt\u5b9e\u73b0\u5916\u63a5\u5e94\u7528\u4e0e\u9b54\u65b9\u5e73\u53f0\u53cc\u5411\u5355\u70b9\u767b\u5f55\u3002",source:"@site/docs/developer/integration/api-jwt-sso.mdx",sourceDirName:"developer/integration",slug:"/developer/integration/api-jwt-sso",permalink:"/developer/integration/api-jwt-sso",draft:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/docs/developer/integration/api-jwt-sso.mdx",tags:[],version:"current",frontMatter:{title:"SSO API",description:"\u901a\u8fc7jwt\u5b9e\u73b0\u5916\u63a5\u5e94\u7528\u4e0e\u9b54\u65b9\u5e73\u53f0\u53cc\u5411\u5355\u70b9\u767b\u5f55\u3002"},sidebar:"developer",previous:{title:"Integration",permalink:"/developer/integration/"},next:{title:"Node-Red",permalink:"/developer/integration/node-red"}},l={},p=[{value:"Logging into the Steedos from external applications.",id:"logging-into-the-steedos-from-external-applications",level:2},{value:"Preparation",id:"preparation",level:3},{value:"Next",id:"next",level:3},{value:"Example",id:"example",level:3},{value:"Login to External Applications via Steedos",id:"login-to-external-applications-via-steedos",level:2},{value:"Process Description",id:"process-description",level:3},{value:"Example",id:"example-1",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"logging-into-the-steedos-from-external-applications"},"Logging into the Steedos from external applications."),(0,o.kt)("h3",{id:"preparation"},"Preparation"),(0,o.kt)("p",null,"1\u3001 Steedos needs to be configured with environment variables enabled for single sign-on. Add the following to the .env.local file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-env"},"# JWT SSO\nSTEEDOS_IDENTITY_JWT_ENABLED=true\n")),(0,o.kt)("h3",{id:"next"},"Next"),(0,o.kt)("p",null,"1\u3001The external application generates a JWT in the custom server interface.\n2\u3001The external application redirects to Steedos interface using the following GET request: {root_url}/accounts/jwt/login?t={jwt}&redirect={redirectURL} to achieve single sign-on."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"1\u3001To create a new application in Steedos, you need to specify an API name (e.g. finance) and an API key (e.g. app_api_secret)."),(0,o.kt)("p",null,"2\u3001The external application's frontend button calls the custom API (e.g. GET /api/get/token) to generate a JWT."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n    sso: function (object_name, record_id) {\n        const getTokenURL = '/api/get/token'; \n\n        const result = Steedos.authRequest(getTokenURL, {\n            type: 'GET',\n            async: false,\n            contentType: 'application/json'\n        });\n\n        const token = result.token;\n        const PLATFORM_ROOT_URL = 'https://5000-steedos-steedosprojectt-5apf195eq37.ws-us77.gitpod.io' \n        window.open(`${PLATFORM_ROOT_URL}/accounts/jwt/login?t=${token}&redirect=${PLATFORM_ROOT_URL}`, '_blank') \n\n    },\n    ssoVisible: function () {\n        return true\n    }\n}\n")),(0,o.kt)("p",null,"3\u3001A custom server-side API needs to be implemented."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const express = require(\"express\");\nconst router = express.Router();\nconst core = require('@steedos/core');\nconst jwt = require('jsonwebtoken');\n\nrouter.get('/api/get/token', core.requireAuthentication, async function (req, res) {\n    const userSession = req.user;\n\n    var secret = 'app_api_secret' \n    var options = { expiresIn: 30 } \n    var token = jwt.sign({\n        profile: {\n            email: userSession.email \n        },\n        app_code: 'finance' \n    }, secret, options);\n\n    res.status(200).send({\n        token: token\n    });\n});\nexports.default = router;\n")),(0,o.kt)("h2",{id:"login-to-external-applications-via-steedos"},"Login to External Applications via Steedos"),(0,o.kt)("h3",{id:"process-description"},"Process Description"),(0,o.kt)("p",null,"1\u3001Create a new application in Steedos, specifying the external link and API key."),(0,o.kt)("p",null,'2\u3001Click on the external application in the launcher and redirect to the external link, passing the "t" parameter in the URL.'),(0,o.kt)("p",null,'3\u3001The external application parses the "t" parameter and redirects the user to the application.'),(0,o.kt)("h3",{id:"example-1"},"Example"),(0,o.kt)("p",null,"1\u3001Create a new application in Steedos and specify the external link (e.g. GET ",(0,o.kt)("a",{parentName:"p",href:"https://5000-steedos-steedosprojectt-5apf195eq37.ws-us77.gitpod.io/api/sso"},"https://5000-steedos-steedosprojectt-5apf195eq37.ws-us77.gitpod.io/api/sso"),") and API key (e.g. app_api_secret)."),(0,o.kt)("p",null,"2\u3001In the application launcher, click on the external application and you will be redirected to the external link."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"https://5000-steedos-steedosprojectt-5apf195eq37.ws-us77.gitpod.io/api/sso?t=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvYmplY3RfbmFtZSI6InNwYWNlX3VzZXJzIiwiZG9jIjp7Il9pZCI6IkFGTkVuQ3hiU29HRWc0b2NmIiwibmFtZSI6Inh4eCIsInVzZXJuYW1lIjoieHh4eHh4IiwiZW1haWwiOiJzQHMuY29tIn0sImlhdCI6MTY2OTI2NjA0NiwiZXhwIjoxNjY5MjY5NjQ2fQ.qeld2kTl5zjLGjCWgk3cb6UPEPlqmzMaME20mo_t-t4\n")),(0,o.kt)("p",null,"3\u3001To parse the token in the external application"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const express = require(\"express\");\nconst router = express.Router();\nconst jwt = require('jsonwebtoken')\n\nrouter.get('/api/sso', async function (req, res) {\n    console.log(req.query)\n    // {\n    //     t: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvYmplY3RfbmFtZSI6InNwYWNlX3VzZXJzIiwiZG9jIjp7Il9pZCI6IkFGTkVuQ3hiU29HRWc0b2NmIiwibmFtZSI6Inh4eCIsInVzZXJuYW1lIjoieHh4eHh4IiwiZW1haWwiOiJzQHMuY29tIn0sImlhdCI6MTY2OTI2NjA0NiwiZXhwIjoxNjY5MjY5NjQ2fQ.qeld2kTl5zjLGjCWgk3cb6UPEPlqmzMaME20mo_t-t4'\n    // }\n    const payload = jwt.verify(req.query.t, 'app_api_secret') \n    console.log(payload)\n    // {\n    //     profile: {\n    //         name: 'xxx',\n    //         username: 'xxxxxx',\n    //         email: 's@s.com'\n    //     },\n    //     iat: 1669266046,\n    //     exp: 1669269646\n    // }\n\n    res.status(200).send({ message: 'router ok' });\n});\nexports.default = router;\n")))}d.isMDXComponent=!0}}]);