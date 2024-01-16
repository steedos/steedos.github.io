"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2043],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=l,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return n?o.createElement(f,r(r({ref:t},p),{},{components:n})):o.createElement(f,r({ref:t},p))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,r=new Array(a);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:l,r[1]=i;for(var d=2;d<a;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4572:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=n(7462),l=(n(7294),n(3905));const a={sidebar_label:"Environment Setup",sidebar_position:.2},r="Environment Setup",i={unversionedId:"developer/setup/setup-env",id:"developer/setup/setup-env",title:"Environment Setup",description:"1. Install Node.js",source:"@site/docs/developer/setup/setup-env.md",sourceDirName:"developer/setup",slug:"/developer/setup/setup-env",permalink:"/developer/setup/setup-env",draft:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/docs/developer/setup/setup-env.md",tags:[],version:"current",sidebarPosition:.2,frontMatter:{sidebar_label:"Environment Setup",sidebar_position:.2},sidebar:"developer",previous:{title:"Overview",permalink:"/developer/setup/overview"},next:{title:"Sample Project on GitHub",permalink:"/developer/setup/sample-repository"}},s={},d=[{value:"1. Install Node.js",id:"1-install-nodejs",level:3},{value:"Install yarn command",id:"install-yarn-command",level:4},{value:"Install steedos command",id:"install-steedos-command",level:4},{value:"2. Install MongoDB",id:"2-install-mongodb",level:3},{value:"Configure MongoDB cluster mode startup (Windows)",id:"configure-mongodb-cluster-mode-startup-windows",level:4},{value:"3. Install Redis",id:"3-install-redis",level:3},{value:"4. Install VS Code",id:"4-install-vs-code",level:3}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"environment-setup"},"Environment Setup"),(0,l.kt)("h3",{id:"1-install-nodejs"},"1. Install Node.js"),(0,l.kt)("p",null,"Download and install the latest version of Node.js 14 (14.21.3) from the official website ",(0,l.kt)("a",{parentName:"p",href:"https://nodejs.org/download/release/v14.21.3/"},"14.21.3"),". Please click to download and install."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},'During the installation process, please select "Automatically install the necessary tools" to install the required tools automatically.')),(0,l.kt)("h4",{id:"install-yarn-command"},"Install yarn command"),(0,l.kt)("p",null,"After installing Node.js, open the terminal and execute the following command to install yarn:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm install -g yarn\n")),(0,l.kt)("h4",{id:"install-steedos-command"},"Install steedos command"),(0,l.kt)("p",null,"Install or update the Steedos CLI command tool:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm i steedos-cli --global\n")),(0,l.kt)("h3",{id:"2-install-mongodb"},"2. Install MongoDB"),(0,l.kt)("p",null,"Refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/v4.4/administration/install-community/"},"MongoDB Installation Documentation")," to install the database."),(0,l.kt)("p",null,"During the installation, please select to install MongoDB Compass, which is a visualization operation tool that comes with the Mongo windows installation package."),(0,l.kt)("p",null,"After successful installation, add the installation path to the system environment variables, for example: C:\\Program Files\\MongoDB\\Server\\4.4\\bin"),(0,l.kt)("h4",{id:"configure-mongodb-cluster-mode-startup-windows"},"Configure MongoDB cluster mode startup (Windows)"),(0,l.kt)("p",null,"Modify the mongod.cfg in the MongoDB installation path, for example: C:\\Program Files\\MongoDB\\Server\\4.4\\bin\\mongod.cfg"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# mongod.conf\n\n# for documentation of all options, see:\n#   http://docs.mongodb.org/manual/reference/configuration-options/\n\n# Where and how to store data.\n...\n\n# Find replication, remove # and add a line of configuration\nreplication:\n  # The following configuration must be indented by two spaces\n  replSetName: rs0\n")),(0,l.kt)("p",null,"Find the MongoDB service in Task Manager-Services and right-click to restart."),(0,l.kt)("h3",{id:"3-install-redis"},"3. Install Redis"),(0,l.kt)("p",null,"Refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://redis.io/docs/install/install-redis/"},"Redis Installation Documentation"),"."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"After installing Redis, the following configuration needs to be added to the Redis configuration file, for example: C:\\Program Files\\Redis\\redis.windows.conf, to prevent Redis error messages when starting the project: Redis-sub client is disconnected.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"client-output-buffer-limit normal 0 0 0\nclient-output-buffer-limit pubsub 0 0 0\nclient-output-buffer-limit slave 0 0 0\n")),(0,l.kt)("h3",{id:"4-install-vs-code"},"4. Install VS Code"),(0,l.kt)("p",null,'Visual Studio Code (abbreviated as "VS Code") is a cross-platform source code editor by Microsoft, running on Mac OS X, Windows, and Linux, aimed at writing modern Web and cloud applications.'),(0,l.kt)("p",null,"Download the installation package from the ",(0,l.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"VS Code official website")," and install and run VS Code."))}u.isMDXComponent=!0}}]);