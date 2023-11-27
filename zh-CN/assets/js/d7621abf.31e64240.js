"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6028],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),u=o,k=d["".concat(i,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(k,s(s({ref:t},c),{},{components:n})):r.createElement(k,s({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[d]="string"==typeof e?e:o,s[1]=p;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1782:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={title:"\u79c1\u6709\u90e8\u7f72"},s=void 0,p={unversionedId:"apps/getting-started/deploy",id:"apps/getting-started/deploy",title:"\u79c1\u6709\u90e8\u7f72",description:"\u9075\u5faa\u4ee5\u4e0b\u6b65\u9aa4\u5728Docker\u4e0a\u90e8\u7f72Steedos\u5e94\u7528\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/apps/getting-started/deploy.md",sourceDirName:"apps/getting-started",slug:"/apps/getting-started/deploy",permalink:"/zh-CN/apps/getting-started/deploy",draft:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/apps/getting-started/deploy.md",tags:[],version:"current",frontMatter:{title:"\u79c1\u6709\u90e8\u7f72"},sidebar:"apps",previous:{title:"\u4ec0\u4e48\u662f\u4f4e\u4ee3\u7801\u5e94\u7528?",permalink:"/zh-CN/apps/getting-started/overview"},next:{title:"\u652f\u51fa\u7ba1\u7406",permalink:"/zh-CN/apps/spend-management/"}},i={},l=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u5b89\u88c5 Steedos \u5e94\u7528",id:"\u5b89\u88c5-steedos-\u5e94\u7528",level:2},{value:"\u66f4\u591a\u9605\u8bfb",id:"\u66f4\u591a\u9605\u8bfb",level:2}],c={toc:l},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u9075\u5faa\u4ee5\u4e0b\u6b65\u9aa4\u5728Docker\u4e0a\u90e8\u7f72Steedos\u5e94\u7528\u3002"),(0,o.kt)("h2",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker")," (\u7248\u672c 20.10.7 \u6216\u66f4\u9ad8)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"Docker-Compose")," (\u7248\u672c 1.29.2 \u6216\u66f4\u9ad8)"),(0,o.kt)("li",{parentName:"ol"},"Steedos \u4f01\u4e1a\u7248\u8bb8\u53ef\u8bc1")),(0,o.kt)("h2",{id:"\u5b89\u88c5-steedos-\u5e94\u7528"},"\u5b89\u88c5 Steedos \u5e94\u7528"),(0,o.kt)("p",null,"\u5728\u60a8\u7684\u673a\u5668\u4e0a\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"steedos-apps"),"\u7684\u6587\u4ef6\u5939\u7528\u4e8e\u90e8\u7f72\u548c\u6570\u636e\u5b58\u50a8\u3002\u7136\u540e\uff0c\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"cd"),"\u547d\u4ee4\u5bfc\u822a\u5230\u6b64\u6587\u4ef6\u5939\uff0c\u5e76\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u64cd\u4f5c\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8054\u7cfb\u6211\u4eec\u83b7\u53d6 \u4f01\u4e1a\u7248\u8bb8\u53ef\u8bc1\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6587\u4ef6",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'version: "3.9"\n\nservices:\n\n  steedos-enterprise:\n    image: steedos/steedos-enterprise:latest\n    container_name: steedos-enterprise\n    ports:\n      - "80:80"    \n      - "443:443" \n      - "9001:9001"\n    environment:\n      - ROOT_URL=http://127.0.0.1\n      - TRANSPORTER=redis://redis:6379\n      - CACHER=redis://redis:6379/1\n      - STEEDOS_LICENSE=trial\n      - STEEDOS_LOG_LEVEL=info\n      - NPM_CACHE_ENABLED=true\n      - NPM_CACHE_PACKAGE_CONTENT=true\n      - NPM_REGISTRY_URL=https://registry.npmmirror.com\n    tty: true\n    volumes:\n      - "./storage:/steedos-storage"\n    depends_on:\n      redis:\n        condition: service_started\n  steedos-apps:\n    image: steedos/steedos-apps:latest\n    container_name: steedos-apps\n    environment:\n      - TRANSPORTER=redis://redis:6379\n      - CACHER=redis://redis:6379/1\n    depends_on:\n      redis:\n        condition: service_started\n  redis:\n    image: ecr.aws.steedos.cn/dockerhub/redis:6.2\n    command: "redis-server --save \\"\\" --appendonly no --loglevel warning"\n')),(0,o.kt)("p",null,"\u8fd9\u5c06\u5728\u5f53\u524d\u76ee\u5f55\u4fdd\u5b58\u6587\u4ef6\u3002"),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8Docker\u5bb9\u5668\u3002\u5982\u679c\u60a8\u6ca1\u6709\u8fd0\u884c",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose"),"\u7684\u6743\u9650\uff0c\u60a8\u53ef\u80fd\u9700\u8981\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"li"},"sudo"),"\u6765\u8fd0\u884c\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n")),(0,o.kt)("p",null,"\u5982\u679c\u672c\u5730\u4e0d\u5b58\u5728\u8be5\u955c\u50cf\uff0c\u6b64\u547d\u4ee4\u4f1a\u4e0b\u8f7d\u5fc5\u8981\u7684Docker\u955c\u50cf\u5e76\u542f\u52a8\u5bb9\u5668\u3002"),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"\u6253\u5f00 ",(0,o.kt)("a",{parentName:"li",href:"http://localhost"},"http://localhost")," \u5e76\u7b49\u5f85\u670d\u52a1\u5668\u542f\u52a8\u3002\u8fd9\u53ef\u80fd\u9700\u8981\u957f\u8fbe5\u5206\u949f\u7684\u65f6\u95f4\u3002\u4e00\u65e6\u670d\u52a1\u5668\u542f\u52a8\u5e76\u8fd0\u884c\uff0c\u60a8\u53ef\u4ee5\u5728 ",(0,o.kt)("a",{parentName:"li",href:"http://localhost"},"http://localhost")," \u8bbf\u95ee Steedos\u3002")),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u7ee7\u7eed\u9047\u5230\u95ee\u9898\uff0c\u8bf7\u8054\u7cfb ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@steedos.com"},"support@steedos.com"),"\u3002"),(0,o.kt)("h2",{id:"\u66f4\u591a\u9605\u8bfb"},"\u66f4\u591a\u9605\u8bfb"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/deploy/steedos-config"},"\u914d\u7f6e Steedos \u5b9e\u4f8b"))))}m.isMDXComponent=!0}}]);