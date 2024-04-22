"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7597],{95880:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var s=n(74848),o=n(28453);const c={sidebar_position:50},i="Custom Components",a={id:"developer/micro-page/custom_components",title:"Custom Components",description:"Introduction",source:"@site/docs/developer/micro-page/custom_components.md",sourceDirName:"developer/micro-page",slug:"/developer/micro-page/custom_components",permalink:"/developer/micro-page/custom_components",draft:!1,unlisted:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/docs/developer/micro-page/custom_components.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"developer",previous:{title:"Custom Styles",permalink:"/developer/micro-page/amis/styles"},next:{title:"Components Reference",permalink:"/developer/micro-page/components/"}},r={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Configuring Custom Asset Packages",id:"configuring-custom-asset-packages",level:2}];function m(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"custom-components",children:"Custom Components"}),"\n",(0,s.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://aisuda.bce.baidu.com/amis/en-US/docs",children:"Amis"})," itself provides a very rich set of component features, which can basically meet the UI interface needs of most business scenarios."]}),"\n",(0,s.jsx)(t.p,{children:"If you encounter a scenario that suits the development of custom components, you can also integrate custom components into the Amis designer through a custom asset package. This way, we can achieve any UI effect we want."}),"\n",(0,s.jsx)(t.h2,{id:"configuring-custom-asset-packages",children:"Configuring Custom Asset Packages"}),"\n",(0,s.jsxs)(t.p,{children:["As long as you configure the custom asset package URL in the environment variable ",(0,s.jsx)(t.code,{children:"STEEDOS_PUBLIC_PAGE_ASSETURLS"}),", Steedos will automatically load and integrate the related custom components into the Amis engine according to the resource package address configured in the asset package, which is very convenient."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"STEEDOS_PUBLIC_PAGE_ASSETURLS=https://unpkg.com/@steedos-widgets/example@0.0.6/dist/assets.json\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"The asset package URL just needs to be accessible. It can be the address of a package published to npm (unpkg.com), or any other address that can be accessed by the current service, such as an asset package address exposed in a remote development environment."})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var s=n(96540);const o={},c=s.createContext(o);function i(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);