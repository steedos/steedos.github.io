"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7063],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=i(r),m=a,k=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(k,l(l({ref:t},c),{},{components:r})):n.createElement(k,l({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294),a=r(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>N});var n=r(7462),a=r(7294),o=r(6010),l=r(2466),s=r(6550),u=r(1980),i=r(7392),c=r(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=d(e),[l,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,i]=k({queryString:r,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),b=(()=>{const e=u??p;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),f(e)}),[i,f,o]),tabValues:o}}var b=r(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:r,selectedValue:s,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),n=i[r].value;n!==s&&(p(t),u(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},i.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":s===t})}),r??t)})))}function h(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function g(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},a.createElement(y,(0,n.Z)({},e,t)),a.createElement(h,(0,n.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return a.createElement(g,(0,n.Z)({key:String(t)},e))}},6041:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>k,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905)),o=r(4866),l=r(5162);const s={sidebar_label:"Docker \u90e8\u7f72",sidebar_position:1},u="Steedos Docker \u90e8\u7f72\u6307\u5357",i={unversionedId:"deploy/deploy-docker",id:"deploy/deploy-docker",title:"Steedos Docker \u90e8\u7f72\u6307\u5357",description:"\u672c\u6587\u6863\u5c06\u6307\u5bfc\u60a8\u5982\u4f55\u4f7f\u7528 Docker \u5728\u60a8\u7684\u670d\u52a1\u5668\u4e0a\u90e8\u7f72 Steedos \u5e73\u53f0\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/deploy/deploy-docker.md",sourceDirName:"deploy",slug:"/deploy/deploy-docker",permalink:"/zh-CN/deploy/deploy-docker",draft:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/deploy/deploy-docker.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Docker \u90e8\u7f72",sidebar_position:1},sidebar:"platform",previous:{title:"\u79c1\u6709\u90e8\u7f72",permalink:"/zh-CN/deploy"},next:{title:"\u8fdc\u7a0b\u73af\u5883\u8bd5\u7528",permalink:"/zh-CN/deploy/gitpod"}},c={},p=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u90e8\u7f72\u6b65\u9aa4",id:"\u90e8\u7f72\u6b65\u9aa4",level:2},{value:"1. \u51c6\u5907\u914d\u7f6e\u6587\u4ef6",id:"1-\u51c6\u5907\u914d\u7f6e\u6587\u4ef6",level:3},{value:"2. \u542f\u52a8\u5bb9\u5668",id:"2-\u542f\u52a8\u5bb9\u5668",level:3},{value:"3. \u9a8c\u8bc1\u90e8\u7f72",id:"3-\u9a8c\u8bc1\u90e8\u7f72",level:3},{value:"\u914d\u7f6e\u548c\u4f18\u5316",id:"\u914d\u7f6e\u548c\u4f18\u5316",level:2},{value:"\u6545\u969c\u6392\u9664",id:"\u6545\u969c\u6392\u9664",level:2},{value:"\u66f4\u65b0\u548c\u7ef4\u62a4",id:"\u66f4\u65b0\u548c\u7ef4\u62a4",level:2},{value:"\u8fdb\u4e00\u6b65\u9605\u8bfb",id:"\u8fdb\u4e00\u6b65\u9605\u8bfb",level:2}],d={toc:p},m="wrapper";function k(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"steedos-docker-\u90e8\u7f72\u6307\u5357"},"Steedos Docker \u90e8\u7f72\u6307\u5357"),(0,a.kt)("p",null,"\u672c\u6587\u6863\u5c06\u6307\u5bfc\u60a8\u5982\u4f55\u4f7f\u7528 Docker \u5728\u60a8\u7684\u670d\u52a1\u5668\u4e0a\u90e8\u7f72 Steedos \u5e73\u53f0\u3002"),(0,a.kt)("h2",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,a.kt)("p",null,"\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u60a8\u7684\u7cfb\u7edf\u6ee1\u8db3\u4ee5\u4e0b\u8981\u6c42\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker")," (\u7248\u672c 20.10.7 \u6216\u66f4\u9ad8\u7248\u672c)"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"Docker-Compose")," (\u7248\u672c 1.29.2 \u6216\u66f4\u9ad8\u7248\u672c)"),(0,a.kt)("li",{parentName:"ol"},"\u786e\u4fdd\u670d\u52a1\u5668\u7aef\u53e3\uff08\u5982 80, 443\uff09\u5df2\u5f00\u653e\uff0c\u4ee5\u4fbf\u5916\u90e8\u8bbf\u95ee"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u90e8\u7f72 Steedos \u4f01\u4e1a\u7248\uff0c\u9700\u8981\u5148\u83b7\u5f97\u8bb8\u53ef\u8bc1")),(0,a.kt)("h2",{id:"\u90e8\u7f72\u6b65\u9aa4"},"\u90e8\u7f72\u6b65\u9aa4"),(0,a.kt)("h3",{id:"1-\u51c6\u5907\u914d\u7f6e\u6587\u4ef6"},"1. \u51c6\u5907\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," \u7684\u6587\u4ef6\uff0c\u5e76\u586b\u5165\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,a.kt)(o.Z,{queryString:"current-edition",mdxType:"Tabs"},(0,a.kt)(l.Z,{label:"\u793e\u533a\u7248",value:"community_edition",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.9"\n\nservices:\n\n  steedos:\n    image: steedos/steedos-community:latest\n    ports:\n      - "80:80"        # Steedos\n      - "27017:27017"  # MongoDB\n      - "9001:9001"    # Supervisor\n      - "6379:6379"    # Redis\n    environment:\n      - ROOT_URL=http://127.0.0.1\n      - NPM_REGISTRY_URL=https://registry.npmmirror.com\n    volumes:\n      - "./steedos-storage:/steedos-storage"\n'))),(0,a.kt)(l.Z,{label:"\u4f01\u4e1a\u7248",value:"enterprise_edition",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.9"\n\nservices:\n\n  steedos-enterprise:\n    image: steedos/steedos-enterprise:latest\n    container_name: steedos-enterprise\n    ports:\n      - "80:80"        # Steedos\n      - "27017:27017"  # MongoDB\n      - "9001:9001"    # Supervisor\n      - "6379:6379"    # Redis\n    environment:\n      - ROOT_URL=http://127.0.0.1\n      - STEEDOS_LICENSE= # \u8bf7\u5c06\u6b64\u5904\u66ff\u6362\u4e3a\u60a8\u7684 Steedos \u4f01\u4e1a\u7248\u8bb8\u53ef\u8bc1\n      - NPM_CACHE_ENABLED=true\n      - NPM_CACHE_PACKAGE_CONTENT=true\n      - NPM_REGISTRY_URL=https://registry.npmmirror.com\n    tty: true\n    volumes:\n      - "./steedos-storage:/steedos-storage"\n')))),(0,a.kt)("p",null,"\u8bf7\u6839\u636e\u60a8\u7684\u5b9e\u9645\u60c5\u51b5\u8c03\u6574\u73af\u5883\u53d8\u91cf\u548c\u7aef\u53e3\u3002"),(0,a.kt)("h3",{id:"2-\u542f\u52a8\u5bb9\u5668"},"2. \u542f\u52a8\u5bb9\u5668"),(0,a.kt)("p",null,"\u5728\u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," \u6587\u4ef6\u7684\u76ee\u5f55\u4e2d\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u542f\u52a8 Steedos \u548c MongoDB \u5bb9\u5668\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n")),(0,a.kt)("h3",{id:"3-\u9a8c\u8bc1\u90e8\u7f72"},"3. \u9a8c\u8bc1\u90e8\u7f72"),(0,a.kt)("p",null,"\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u6d4f\u89c8\u5668\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost"),"\uff08\u6216\u60a8\u914d\u7f6e\u7684\u5176\u4ed6\u5730\u5740\uff09\u6765\u9a8c\u8bc1 Steedos \u662f\u5426\u6210\u529f\u8fd0\u884c\u3002"),(0,a.kt)("h2",{id:"\u914d\u7f6e\u548c\u4f18\u5316"},"\u914d\u7f6e\u548c\u4f18\u5316"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5b89\u5168\u6027"),"\uff1a\u4e3a\u4e86\u63d0\u9ad8\u5b89\u5168\u6027\uff0c\u5efa\u8bae\u914d\u7f6e SSL/TLS\uff0c\u5e76\u786e\u4fdd\u6240\u6709\u901a\u4fe1\u90fd\u901a\u8fc7 HTTPS \u8fdb\u884c\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5907\u4efd"),"\uff1a\u5b9a\u671f\u5907\u4efd\u60a8\u7684 MongoDB \u6570\u636e\u5e93\uff0c\u4ee5\u9632\u6b62\u6570\u636e\u4e22\u5931\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6027\u80fd\u76d1\u63a7"),"\uff1a\u4f7f\u7528 Docker \u6216\u7b2c\u4e09\u65b9\u5de5\u5177\u76d1\u63a7 Steedos \u5bb9\u5668\u7684\u6027\u80fd\u548c\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\u3002")),(0,a.kt)("h2",{id:"\u6545\u969c\u6392\u9664"},"\u6545\u969c\u6392\u9664"),(0,a.kt)("p",null,"\u5982\u679c\u5728\u90e8\u7f72\u8fc7\u7a0b\u4e2d\u9047\u5230\u95ee\u9898\uff0c\u8bf7\u68c0\u67e5\u4ee5\u4e0b\u4e8b\u9879\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u6240\u6709\u73af\u5883\u53d8\u91cf\u90fd\u5df2\u6b63\u786e\u8bbe\u7f6e\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u68c0\u67e5 Docker \u5bb9\u5668\u7684\u65e5\u5fd7\u4ee5\u83b7\u53d6\u9519\u8bef\u4fe1\u606f\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u670d\u52a1\u5668\u7aef\u53e3\u6ca1\u6709\u88ab\u9632\u706b\u5899\u963b\u6b62\u3002")),(0,a.kt)("h2",{id:"\u66f4\u65b0\u548c\u7ef4\u62a4"},"\u66f4\u65b0\u548c\u7ef4\u62a4"),(0,a.kt)("p",null,"\u5f53 Steedos \u53d1\u5e03\u65b0\u7248\u672c\u65f6\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\u66f4\u65b0\u60a8\u7684\u90e8\u7f72\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u505c\u6b62\u5f53\u524d\u8fd0\u884c\u7684\u5bb9\u5668\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose down\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u9700\u8981\u540c\u65f6\u6e05\u7406volume\u6570\u636e\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose down -v")," \u547d\u4ee4\u3002")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u62c9\u53d6\u6700\u65b0\u7684 Steedos \u955c\u50cf\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose pull\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u91cd\u65b0\u542f\u52a8\u5bb9\u5668\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n")),(0,a.kt)("p",null,"\u786e\u4fdd\u5728\u66f4\u65b0\u524d\u5907\u4efd\u60a8\u7684\u6570\u636e\u3002"),(0,a.kt)("h2",{id:"\u8fdb\u4e00\u6b65\u9605\u8bfb"},"\u8fdb\u4e00\u6b65\u9605\u8bfb"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/deploy/steedos-config"},"\u914d\u7f6e Steedos \u5b9e\u4f8b"))))}k.isMDXComponent=!0}}]);