"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[428],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var l=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var _=l.createContext({}),S=function(e){var n=l.useContext(_),t=n;return e&&(t="function"==typeof e?e(n):E(E({},n),e)),t},s=function(e){var n=S(e.components);return l.createElement(_.Provider,{value:n},e.children)},i="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},c=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,_=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),i=S(t),c=r,u=i["".concat(_,".").concat(c)]||i[c]||p[c]||a;return t?l.createElement(u,E(E({ref:n},s),{},{components:t})):l.createElement(u,E({ref:n},s))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,E=new Array(a);E[0]=c;var o={};for(var _ in n)hasOwnProperty.call(n,_)&&(o[_]=n[_]);o.originalType=e,o[i]="string"==typeof e?e:r,E[1]=o;for(var S=2;S<a;S++)E[S]=t[S];return l.createElement.apply(null,E)}return l.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1939:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>_,contentTitle:()=>E,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>S});var l=t(7462),r=(t(7294),t(3905));const a={title:"\u5b9e\u4f8b\u914d\u7f6e"},E=void 0,o={unversionedId:"deploy/steedos-config",id:"deploy/steedos-config",title:"\u5b9e\u4f8b\u914d\u7f6e",description:"\u672c\u9875\u9762\u63d0\u4f9b\u4e86\u5982\u4f55\u914d\u7f6e\u60a8\u81ea\u6258\u7ba1\u7684 Steedos \u5b9e\u4f8b\u7684\u6307\u5357\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/deploy/steedos-config.md",sourceDirName:"deploy",slug:"/deploy/steedos-config",permalink:"/zh-CN/deploy/steedos-config",draft:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/deploy/steedos-config.md",tags:[],version:"current",frontMatter:{title:"\u5b9e\u4f8b\u914d\u7f6e"},sidebar:"platform",previous:{title:"\u7eaf\u5185\u7f51\u90e8\u7f72",permalink:"/zh-CN/deploy/intranet"},next:{title:"\u6784\u5efa\u5e94\u7528\u7a0b\u5e8f",permalink:"/zh-CN/no-code/application/"}},_={},S=[{value:"\u5fc5\u9700\u7684\u914d\u7f6e",id:"\u5fc5\u9700\u7684\u914d\u7f6e",level:2},{value:"\u767b\u5f55\u5c4f\u5e55",id:"\u767b\u5f55\u5c4f\u5e55",level:2},{value:"\u9644\u4ef6\u5b58\u50a8",id:"\u9644\u4ef6\u5b58\u50a8",level:2},{value:"\u672c\u5730\u6587\u4ef6\u7cfb\u7edf",id:"\u672c\u5730\u6587\u4ef6\u7cfb\u7edf",level:3},{value:"S3",id:"s3",level:3},{value:"\u9644\u4ef6\u533f\u540d\u4e0b\u8f7d",id:"\u9644\u4ef6\u533f\u540d\u4e0b\u8f7d",level:3},{value:"\u63a8\u9001\u901a\u77e5",id:"\u63a8\u9001\u901a\u77e5",level:2},{value:"\u7535\u5b50\u90ae\u4ef6\u914d\u7f6e",id:"\u7535\u5b50\u90ae\u4ef6\u914d\u7f6e",level:2},{value:"\u77ed\u4fe1\u914d\u7f6e",id:"\u77ed\u4fe1\u914d\u7f6e",level:2},{value:"OIDC \u8eab\u4efd\u9a8c\u8bc1",id:"oidc-\u8eab\u4efd\u9a8c\u8bc1",level:2},{value:"\u5b9a\u65f6\u4efb\u52a1",id:"\u5b9a\u65f6\u4efb\u52a1",level:2},{value:"\u8d26\u6237\u76f8\u5173",id:"\u8d26\u6237\u76f8\u5173",level:2},{value:"\u5bc6\u7801\u89c4\u5219\u914d\u7f6e",id:"\u5bc6\u7801\u89c4\u5219\u914d\u7f6e",level:2}],s={toc:S},i="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(i,(0,l.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u9875\u9762\u63d0\u4f9b\u4e86\u5982\u4f55\u914d\u7f6e\u60a8\u81ea\u6258\u7ba1\u7684 Steedos \u5b9e\u4f8b\u7684\u6307\u5357\u3002"),(0,r.kt)("h2",{id:"\u5fc5\u9700\u7684\u914d\u7f6e"},"\u5fc5\u9700\u7684\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5e73\u53f0\nPORT=80\nROOT_URL=http://localhost\n\n# \u6570\u636e\u5e93\nMONGO_URL=mongodb://127.0.0.1:27017/steedos\nMONGO_OPLOG_URL=mongodb://127.0.0.1:27017/local\n\n# \u5fae\u670d\u52a1\u901a\u4fe1 (https://moleculer.services/zh/docs/0.14/networking.html)\nTRANSPORTER=redis://127.0.0.1:6379\n\n# \u7f13\u5b58 https://moleculer.services/zh/docs/0.14/caching.html\nCACHER=redis://127.0.0.1:6379/1\n\n")),(0,r.kt)("h2",{id:"\u767b\u5f55\u5c4f\u5e55"},"\u767b\u5f55\u5c4f\u5e55"),(0,r.kt)("p",null,"\u914d\u7f6e\u4e0e\u767b\u5f55\u5c4f\u5e55\u76f8\u5173\u7684\u53c2\u6570\uff0c\u4f8b\u5982\u662f\u5426\u5141\u8bb8\u6ce8\u518c\uff0c\u662f\u5426\u5141\u8bb8\u4fee\u6539\u5bc6\u7801\uff0c\u662f\u5426\u5141\u8bb8\u521b\u5efa\u516c\u53f8\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5141\u8bb8\u8d26\u6237\u521b\u5efa\uff0c\u9ed8\u8ba4\u5728\u6570\u636e\u5e93\u4e3a\u7a7a\u65f6\u4e3a true\nSTEEDOS_TENANT_ENABLE_REGISTER=true  \n# \u5141\u8bb8\u5bc6\u7801\u6062\u590d\uff0c\u8bbe\u7f6e\u4e3a true \u5c06\u663e\u793a\u94fe\u63a5\u4ee5\u68c0\u7d22\u5bc6\u7801\uff0c\u9ed8\u8ba4\u4e3a false\u3002\nSTEEDOS_TENANT_ENABLE_FORGET_PASSWORD=true  \n# \u5141\u8bb8\u521b\u5efa\u516c\u53f8\uff0c\u9ed8\u8ba4\u4ec5\u5728\u6570\u636e\u5e93\u4e3a\u7a7a\u65f6\u5141\u8bb8\nSTEEDOS_TENANT_ENABLE_CREATE_TENANT=false \n# \u5141\u8bb8\u5bc6\u7801\u767b\u5f55\uff0c\u9ed8\u8ba4\u5bf9\u4e8e\u6ce8\u518c\u548c\u767b\u5f55\u90fd\u662f\u542f\u7528\u7684\u3002\u9ed8\u8ba4\u4e3a true\nSTEEDOS_TENANT_ENABLE_PASSWORD_LOGIN=true \n# \u5f3a\u5236\u7ed1\u5b9a\u7535\u5b50\u90ae\u4ef6\uff0c\u767b\u5f55\u540e\u9700\u8981\u8f93\u5165\u5e76\u9a8c\u8bc1\u7535\u5b50\u90ae\u4ef6\u3002\u9ed8\u8ba4\u4e3a false\nSTEEDOS_TENANT_ENABLE_BIND_EMAIL=false \n# \u5f3a\u5236\u7ed1\u5b9a\u624b\u673a\u53f7\u7801\uff0c\u767b\u5f55\u540e\u9700\u8981\u8f93\u5165\u5e76\u9a8c\u8bc1\u624b\u673a\u53f7\u7801\u3002\u9ed8\u8ba4\u4e3a false\nSTEEDOS_TENANT_ENABLE_BIND_MOBILE=false \n# \u5141\u8bb8\u4f7f\u7528\u7535\u5b50\u90ae\u4ef6\u9a8c\u8bc1\u7801\u767b\u5f55\uff0c\u9ed8\u8ba4\u5bf9\u4e8e\u6ce8\u518c\u548c\u767b\u5f55\u542f\u7528\u6b64\u65b9\u6cd5\u3002\nSTEEDOS_TENANT_ENABLE_EMAIL_CODE_LOGIN=false \n# \u5141\u8bb8\u4f7f\u7528\u624b\u673a\u9a8c\u8bc1\u7801\u767b\u5f55\uff0c\u9ed8\u8ba4\u5bf9\u4e8e\u6ce8\u518c\u548c\u767b\u5f55\u542f\u7528\u6b64\u65b9\u6cd5\u3002\nSTEEDOS_TENANT_ENABLE_MOBILE_CODE_LOGIN=false \n# \u9ed8\u8ba4\u662f43\u4e2a\u5b57\u7b26\u7684\u5b57\u7b26\u4e32\uff0c\u6bcf\u6b21\u670d\u52a1\u91cd\u542f\u65f6\u90fd\u4f1a\u751f\u6210\u65b0\u503c\nSTEEDOS_TENANT_TOKEN_SECRET=  \n# \u9ed8\u8ba4\u662f90d\nSTEEDOS_TENANT_ACCESS_TOKEN_EXPIRES_IN= \n# \u9ed8\u8ba4\u662f7d\nSTEEDOS_TENANT_REFRESH_TOKEN_EXPIRES_IN=  \n")),(0,r.kt)("h1",{id:"\u5143\u6570\u636e\u540c\u6b65"},"\u5143\u6570\u636e\u540c\u6b65"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"METADATA_SERVER=http://localhost:5000\nMETADATA_APIKEY=\n")),(0,r.kt)("h2",{id:"\u9644\u4ef6\u5b58\u50a8"},"\u9644\u4ef6\u5b58\u50a8"),(0,r.kt)("p",null,"\u914d\u7f6e\u4e0e\u9644\u4ef6\u5b58\u50a8\u76f8\u5173\u7684\u53c2\u6570\u3002"),(0,r.kt)("h3",{id:"\u672c\u5730\u6587\u4ef6\u7cfb\u7edf"},"\u672c\u5730\u6587\u4ef6\u7cfb\u7edf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"STEEDOS_CFS_STORE=local\nSTEEDOS_STORAGE_DIR=/steedos-storage\n")),(0,r.kt)("h3",{id:"s3"},"S3"),(0,r.kt)("p",null,"\u9644\u4ef6\u53ef\u4ee5\u5b58\u50a8\u5728\u652f\u6301 S3 \u534f\u8bae\u7684\u670d\u52a1\u5668\u4e0a\uff0c\u5305\u62ec AWS\u3001\u963f\u91cc\u4e91\u3001\u817e\u8baf\u4e91\u5b58\u50a8\u670d\u52a1\uff0c\u6216\u79c1\u6709\u90e8\u7f72\u7684 minio \u670d\u52a1\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"STEEDOS_CFS_STORE=S3\nSTEEDOS_CFS_AWS_S3_ENDPOINT=https://s3.cn-northwest-1.amazonaws.com.cn\nSTEEDOS_CFS_AWS_S3_REGION=cn-northwest-1\nSTEEDOS_CFS_AWS_S3_SIGNATURE_VERSION=v4\nSTEEDOS_CFS_AWS_S3_BUCKET=steedos\nSTEEDOS_CFS_AWS_S3_ACCESS_KEY_ID=xxxxxxxx\nSTEEDOS_CFS_AWS_S3_SECRET_ACCESS_KEY=xxxxxxxx\n")),(0,r.kt)("h3",{id:"\u9644\u4ef6\u533f\u540d\u4e0b\u8f7d"},"\u9644\u4ef6\u533f\u540d\u4e0b\u8f7d"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u7cfb\u7edf\u4e2d\u4e0a\u4f20\u7684\u5934\u50cf\u3001\u56fe\u7247\u548c\u9644\u4ef6\u9700\u8981\u767b\u5f55\u624d\u80fd\u4e0b\u8f7d\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u8bbe\u7f6e\u4ee5\u4e0b\u53d8\u91cf\u8fdb\u884c\u533f\u540d\u4e0b\u8f7d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u9009\u9879\u5305\u62ec\u5934\u50cf\u3001\u56fe\u7247\u3001\u6587\u4ef6\uff0c\u9ed8\u8ba4\u4e3a\u5934\u50cf\nSTEEDOS_CFS_DOWNLOAD_PUBLIC=avatars,images \n")),(0,r.kt)("h2",{id:"\u63a8\u9001\u901a\u77e5"},"\u63a8\u9001\u901a\u77e5"),(0,r.kt)("p",null,"\u914d\u7f6e\u79fb\u52a8\u63a8\u9001\u901a\u77e5\u7684\u53c2\u6570\uff0c\u7528\u4e8e\u5728 Steedos \u79fb\u52a8\u5e94\u7528\u4e0a\u63a5\u6536\u901a\u77e5\u6d88\u606f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# iOS\nSTEEDOS_PUSH_APN_DATA=\n\n# \u534e\u4e3a\nSTEEDOS_GCM_APIKEY=xxx\nSTEEDOS_GCM_PROJECT_NUMBER=xxx\nSTEEDOS_PUSH_HUAWEI_APPID=\nSTEEDOS_PUSH_HUAWEI_APPPKGNAME=\nSTEEDOS_PUSH_HUAWEI_APPSECRET=\n\n# \u5c0f\u7c73\nSTEEDOS_GCM_APIKEY=xxx\nSTEEDOS_GCM_PROJECT_NUMBER=xxx\nSTEEDOS_PUSH_MI_APPSECRET=\nSTEEDOS_PUSH_MI_PRODUCTION=\n")),(0,r.kt)("h2",{id:"\u7535\u5b50\u90ae\u4ef6\u914d\u7f6e"},"\u7535\u5b50\u90ae\u4ef6\u914d\u7f6e"),(0,r.kt)("p",null,"\u4e3a\u7cfb\u7edf\u63a8\u9001\u7535\u5b50\u90ae\u4ef6\u914d\u7f6e SMTP \u670d\u52a1\u53c2\u6570\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"STEEDOS_EMAIL_FROM=\u534e\u708e\u9b54\u65b9 <noreply@xxx.com>\nSTEEDOS_EMAIL_URL=smtps://xxxxxxx:xxxxxxxxx@email.xxxx.amazonaws.com:465/\nSTEEDOS_EMAIL_HOST=email.xxxx.amazonaws.com\nSTEEDOS_EMAIL_PORT=465\nSTEEDOS_EMAIL_USERNAME=xxxxx\nSTEEDOS_EMAIL_PASSWORD=xxxxx\nSTEEDOS_CRON_MAILQUEUE_INTERVAL=3000 # \u90ae\u4ef6\u5b9a\u65f6\u5668\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2\n")),(0,r.kt)("h2",{id:"\u77ed\u4fe1\u914d\u7f6e"},"\u77ed\u4fe1\u914d\u7f6e"),(0,r.kt)("p",null,"\u4e3a\u7cfb\u7edf\u914d\u7f6e\u77ed\u4fe1\u53d1\u9001\uff0c\u76ee\u524d\u652f\u6301\u914d\u7f6e\u817e\u8baf\u4e91\u77ed\u4fe1\u53d1\u9001\u670d\u52a1\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"STEEDOS_SMS_QCLOUD_SDKAPPID=xxxxxx\nSTEEDOS_SMS_QCLOUD_APPKEY=xxxxxx\nSTEEDOS_SMS_QCLOUD_SIGNNAME=\u3010\u534e\u708e\u9b54\u65b9\u3011 # \u6b64\u914d\u7f6e\u4e3a\u817e\u8baf\u77ed\u4fe1\u670d\u52a1\u4e2d\u7684\u7b7e\u540d\u6a21\u677f\u540d\u79f0\nSTEEDOS_CRON_SMSQUEUE_INTERVAL=3000 # \u77ed\u4fe1\u5b9a\u65f6\u5668\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2\n")),(0,r.kt)("h2",{id:"oidc-\u8eab\u4efd\u9a8c\u8bc1"},"OIDC \u8eab\u4efd\u9a8c\u8bc1"),(0,r.kt)("p",null,"\u4f01\u4e1a\u7248\uff1a\u914d\u7f6e OpenID Connect \u5355\u70b9\u767b\u5f55\u7684\u53c2\u6570\uff0c\u53ef\u4ee5\u8fde\u63a5\u5230 Keycloak \u670d\u52a1\u5668\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# OpenID Connect\nSTEEDOS_IDENTITY_OIDC_ENABLED=true\nSTEEDOS_IDENTITY_OIDC_CONFIG_URL=https://id.steedos.cn/realms/master/.well-known/openid-configuration\nSTEEDOS_IDENTITY_OIDC_CLIENT_ID=steedos-oidc-public\nSTEEDOS_IDENTITY_OIDC_CLIENT_SECRET=none\nSTEEDOS_IDENTITY_OIDC_NAME=Steedos ID\nSTEEDOS_IDENTITY_OIDC_LOGO=\nSTEEDOS_IDENTITY_OIDC_REQUIRE_LOCAL_ACCOUNT=false\n")),(0,r.kt)("h2",{id:"\u5b9a\u65f6\u4efb\u52a1"},"\u5b9a\u65f6\u4efb\u52a1"),(0,r.kt)("p",null,"\u914d\u7f6e\u5b9a\u65f6\u4efb\u52a1\u7684\u5c5e\u6027\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6267\u884c\u6570\u636e\u5e93\u7d22\u5f15\u7684\u65f6\u95f4\uff0c\u5982\u201c0 0 * * * *\u201d\u4e0a\u8ff0\u610f\u5473\u7740\u6bcf\u5c0f\u65f6\u6267\u884c\u4e00\u6b21\u7d22\u5f15\u64cd\u4f5c\u3002\u73b0\u6709\u7d22\u5f15\u4e0d\u4f1a\u91cd\u65b0\u521b\u5efa\u3002\nSTEEDOS_CRON_BUILD_INDEX=\"0 0 * * * *\"\n\n# \u5de5\u4f5c\u6d41\u89c4\u5219\u961f\u5217\u7684\u6267\u884c\u65f6\u95f4\uff0c\u57fa\u4e8e\u65f6\u95f4\u7684\u5de5\u4f5c\u6d41\u64cd\u4f5c\u4f9d\u8d56\u4e8e\u6b64\u914d\u7f6e\uff0c\u5982\u201c*/11 * * * *\u201d\u4e0a\u8ff0\u610f\u5473\u7740\u6bcf\u5206\u949f\u884c\u4e00\u6b21\u3002\nSTEEDOS_CRON_WORKFLOW_RULE='*/1 * * * *'\n\n# \u90ae\u4ef6\u961f\u5217\u7684\u8f6e\u8be2\u95f4\u9694\uff0c\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\u3002\nSTEEDOS_CRON_MAILQUEUE_INTERVAL=10000\n\n# \u63a8\u9001\u901a\u77e5\u961f\u5217\u7684\u8f6e\u8be2\u95f4\u9694\uff0c\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\u3002\nSTEEDOS_CRON_PUSH_INTERVAL=1000\n\n# webhook \u961f\u5217\u7684\u8f6e\u8be2\u95f4\u9694\uff0c\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\u3002\nSTEEDOS_CRON_WEBHOOKQUEUE_INTERVAL=10000\n\n# \u5b9e\u65f6\u6d88\u606f\u961f\u5217\u7684\u8f6e\u8be2\u95f4\u9694\uff0c\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\u3002\nSTEEDOS_CRON_MESSAGINGQUEUE_INTERVAL=1000\n\n# \u5bf9\u8c61\u6d41\u7a0b\u540c\u6b65\u961f\u5217\u7684\u8f6e\u8be2\u95f4\u9694\uff0c\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\u3002\nSTEEDOS_CRON_INSTANCERECORDQUEUE_INTERVAL=10000\n")),(0,r.kt)("h2",{id:"\u8d26\u6237\u76f8\u5173"},"\u8d26\u6237\u76f8\u5173"),(0,r.kt)("p",null,"\u914d\u7f6e\u8d26\u6237\u76f8\u5173\u53c2\u6570\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"accounts:\n  mobile_phone_locales: ['zh-CN']\n  mobile_regexp: '^[0-9]{11}$'\n    is_username_skip_minrequiredlength: true\n    UTF8_Names_Validation: '[A-Za-z0-9-_.\\u00C0-\\u017F\\u4e00-\\u9fa5]'\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"mobile_phone_locales: \u6b64\u53c2\u6570\u4f18\u5148\u3002\u624b\u673a\u53f7\u672c\u5730\u5316\uff0c\u914d\u7f6e\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"zh-CN"),"\u8868\u793a\u4f7f\u7528\u4e2d\u56fd\u768411\u4f4d\u624b\u673a\u53f7\uff0c\u8981\u652f\u6301\u5176\u4ed6\u56fd\u5bb6\u624b\u673a\u53f7\u8bf7\u53c2\u8003\xa0",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/validator"},"validator"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"mobile_regexp: \u624b\u673a\u53f7\u683c\u5f0f\u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u4f7f\u7528\u4e00\u4e2a\u6b63\u5219\u8868\u8fbe\u5f0f\u6765\u63cf\u8ff0\u6b63\u786e\u7684\u624b\u673a\u53f7\u683c\u5f0f\u3002"),(0,r.kt)("li",{parentName:"ul"},"is_username_skip_minrequiredlength\uff1a\u662f\u5426\u8df3\u8fc7\u7528\u6237\u540d\u6700\u5c0f\u4f4d\u6570\u9650\u5236\uff0c\u9ed8\u8ba4\u6700\u5c0f\u4e3a6\u4f4d\u3002"),(0,r.kt)("li",{parentName:"ul"},"UTF8_Names_Validation: \u7528\u6237\u540d\u89c4\u5219\u6b63\u5219\u8868\u8fbe\u5f0f\u3002")),(0,r.kt)("h2",{id:"\u5bc6\u7801\u89c4\u5219\u914d\u7f6e"},"\u5bc6\u7801\u89c4\u5219\u914d\u7f6e"),(0,r.kt)("p",null,"\u5bc6\u7801\u7684\u590d\u6742\u5ea6\u662f\u901a\u8fc7password.policy \u5c5e\u6027\u6765\u63a7\u5236\u7684\uff0c\u503c\u4e3a\u6b63\u5219\u8868\u8fbe\u5f0f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'public:\n  password:\n    policy: ^[A-Za-z0-9]{8,}$\n    policyError: "\u5bc6\u7801\u4e0d\u80fd\u5c11\u4e8e8\u4f4d"\n    policies:\n      - policy: 123\n        policyError: "\u5bc6\u7801\u5fc5\u987b\u5305\u542b123"\n      - policy: 456\n        policyError: "\u5bc6\u7801\u5fc5\u987b\u5305\u542b456"\n    policyFunction: !\n      function(password){\n        if(password === \'12345678\'){\n          throw new Error(\'\u5bc6\u7801\u4e0d\u80fd\u662f12345678\');\n        }\n      }\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"public.password.policyFunction: string Function. \u81ea\u5b9a\u4e49\u9a8c\u8bc1\u51fd\u6570(1\u4e2a\u53c2\u6570: \u7528\u6237\u8f93\u5165\u7684password), \u53ef\u901a\u8fc7import\u7b49\u624b\u6bb5\u5f15\u5165\u9a8c\u8bc1\u5e93. \u6216\u8005\u76f4\u63a5\u7f16\u5199\u9a8c\u8bc1\u89c4\u5219. \u4e0d\u7b26\u5408\u89c4\u5219\u65f6, \u76f4\u63a5throw error\u5373\u53ef."),(0,r.kt)("li",{parentName:"ul"},"public.password.policies: Array<{policy: '\u6b63\u5219\u8868\u8fbe\u5f0f', policyError: '\u4e0d\u7b26\u5408\u8868\u8fbe\u5f0f\u65f6\u7684\u63d0\u793a\u6d88\u606f'}>")),(0,r.kt)("p",null,"\u914d\u7f6e\u4e86\u591a\u4e2a\u5bc6\u7801\u89c4\u5219\u65f6\u4f1a\u540c\u65f6\u751f\u6548\uff0c\u4e0a\u8ff0\u793a\u4f8b\u4e2d\u914d\u7f6e\u7684\u89c4\u5219\u662f\u4f1a\u540c\u65f6\u751f\u6548\u7684\u3002"))}p.isMDXComponent=!0}}]);