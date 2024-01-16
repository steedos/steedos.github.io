"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1764],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2895:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>I,contentTitle:()=>D,default:()=>V,frontMatter:()=>T,metadata:()=>O,toc:()=>C});var n=r(7462),o=r(7294),a=r(3905),l=r(6010),i=r(2466),s=r(6550),u=r(1980),c=r(7392),p=r(12);function d(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:o}}=e;return{value:t,label:r,attributes:n,default:o}}))}function m(e){const{values:t,children:r}=e;return(0,o.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.k6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})}),[a,n])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,a=m(e),[l,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[s,u]=y({queryString:r,groupId:n}),[c,d]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,p.Nk)(r);return[n,(0,o.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:n}),g=(()=>{const e=s??c;return f({value:e,tabValues:a})?e:null})();(0,o.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!f({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),d(e)}),[u,d,a]),tabValues:a}}var h=r(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:r,selectedValue:a,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),n=u[r].value;n!==a&&(p(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:i}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":a===t})}),r??t)})))}function v(e){let{lazy:t,children:r,selectedValue:n}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=g(e);return o.createElement("div",{className:(0,l.Z)("tabs-container",b.tabList)},o.createElement(k,(0,n.Z)({},e,t)),o.createElement(v,(0,n.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return o.createElement(N,(0,n.Z)({key:String(t)},e))}const S={tabItem:"tabItem_Ymn6"};function E(e){let{children:t,hidden:r,className:n}=e;return o.createElement("div",{role:"tabpanel",className:(0,l.Z)(S.tabItem,n),hidden:r},t)}const T={sidebar_label:"Docker",sidebar_position:1},D="Steedos Docker Deployment Guide",O={unversionedId:"deploy/deploy-docker",id:"deploy/deploy-docker",title:"Steedos Docker Deployment Guide",description:"This document will guide you on how to deploy the Steedos platform on your server using Docker.",source:"@site/docs/deploy/deploy-docker.md",sourceDirName:"deploy",slug:"/deploy/deploy-docker",permalink:"/deploy/deploy-docker",draft:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/docs/deploy/deploy-docker.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Docker",sidebar_position:1},sidebar:"platform",previous:{title:"Self Hosting",permalink:"/deploy"},next:{title:"Intranet",permalink:"/deploy/intranet"}},I={},C=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Deployment Steps",id:"deployment-steps",level:2},{value:"1. Prepare Configuration File",id:"1-prepare-configuration-file",level:3},{value:"2. Start Containers",id:"2-start-containers",level:3},{value:"3. Verify Deployment",id:"3-verify-deployment",level:3},{value:"Configuration and Optimization",id:"configuration-and-optimization",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Updates and Maintenance",id:"updates-and-maintenance",level:2},{value:"Further Reading",id:"further-reading",level:2}],P={toc:C},_="wrapper";function V(e){let{components:t,...r}=e;return(0,a.kt)(_,(0,n.Z)({},P,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"steedos-docker-deployment-guide"},"Steedos Docker Deployment Guide"),(0,a.kt)("p",null,"This document will guide you on how to deploy the Steedos platform on your server using Docker."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Before you begin, ensure that your system meets the following requirements:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker")," (version 20.10.7 or higher)"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"Docker-Compose")," (version 1.29.2 or higher)"),(0,a.kt)("li",{parentName:"ol"},"Ensure that server ports (such as 80, 443) are open for external access"),(0,a.kt)("li",{parentName:"ol"},"If deploying Steedos Enterprise Edition, you need to obtain a license first")),(0,a.kt)("h2",{id:"deployment-steps"},"Deployment Steps"),(0,a.kt)("h3",{id:"1-prepare-configuration-file"},"1. Prepare Configuration File"),(0,a.kt)("p",null,"Create a file named ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," and fill in the following content:"),(0,a.kt)(w,{queryString:"current-edition",mdxType:"Tabs"},(0,a.kt)(E,{label:"Community Edition",value:"community_edition",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.9"\n\nservices:\n\n  steedos:\n    image: steedos/steedos-community:latest\n    ports:\n      - "80:80"        # Steedos\n      - "27017:27017"  # MongoDB\n      - "9001:9001"    # Supervisor\n      - "6379:6379"    # Redis\n    environment:\n      - ROOT_URL=http://127.0.0.1\n      - NPM_REGISTRY_URL=https://registry.npmmirror.com\n    volumes:\n      - "./steedos-storage:/steedos-storage"\n\n'))),(0,a.kt)(E,{label:"Enterprise Edition",value:"enterprise_edition",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.9"\n\nservices:\n\n  steedos-enterprise:\n    image: steedos/steedos-enterprise:latest\n    container_name: steedos-enterprise\n    ports:\n      - "80:80"        # Steedos\n      - "27017:27017"  # MongoDB\n      - "9001:9001"    # Supervisor\n      - "6379:6379"    # Redis\n    environment:\n      - ROOT_URL=http://127.0.0.1\n      - NPM_REGISTRY_URL=https://registry.npmmirror.com\n      - STEEDOS_LICENSE=trial\n    tty: true\n    volumes:\n      - "./steedos-storage:/steedos-storage"\n')))),(0,a.kt)("p",null,"Please adjust the environment variables and ports according to your actual situation."),(0,a.kt)("h3",{id:"2-start-containers"},"2. Start Containers"),(0,a.kt)("p",null,"In the directory containing the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file, run the following command to start the Steedos and MongoDB containers:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n")),(0,a.kt)("h3",{id:"3-verify-deployment"},"3. Verify Deployment"),(0,a.kt)("p",null,"After deployment, you can verify that Steedos is running successfully by accessing ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost")," (or your configured address) through a browser."),(0,a.kt)("h2",{id:"configuration-and-optimization"},"Configuration and Optimization"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Security"),": To enhance security, it is recommended to configure SSL/TLS and ensure that all communications are conducted via HTTPS."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Backup"),": Regularly back up your MongoDB database to prevent data loss."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Performance Monitoring"),": Use Docker or third-party tools to monitor the performance and resource usage of Steedos containers.")),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"If you encounter problems during deployment, check the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ensure all environment variables are correctly set."),(0,a.kt)("li",{parentName:"ul"},"Check the Docker container logs for error messages."),(0,a.kt)("li",{parentName:"ul"},"Ensure server ports are not blocked by a firewall.")),(0,a.kt)("h2",{id:"updates-and-maintenance"},"Updates and Maintenance"),(0,a.kt)("p",null,"When Steedos releases a new version, you can update your deployment with the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Stop the currently running containers:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose down\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Pull the latest Steedos image:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose pull\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Restart the containers:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n")),(0,a.kt)("p",null,"Ensure you back up your data before updating."),(0,a.kt)("h2",{id:"further-reading"},"Further Reading"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/deploy/steedos-config"},"Configuring Steedos Instances"))))}V.isMDXComponent=!0}}]);