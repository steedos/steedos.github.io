"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1346],{67631:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(74848),s=r(28453),o=r(3514);const i={sidebar_position:30},a="User Guide",l={id:"getting-started/user/README",title:"User Guide",description:"Steedos Platform is a comprehensive low-code development platform that allows users to build custom applications tailored to their unique business needs. It provides a flexible and intuitive environment for users to design, develop, and deploy applications with minimal coding required. Whether you're looking to manage customer relationships, streamline internal processes, or analyze data, Steedos Platform offers the versatility and scalability to meet your objectives.",source:"@site/docs/getting-started/user/README.md",sourceDirName:"getting-started/user",slug:"/getting-started/user/",permalink:"/getting-started/user/",draft:!1,unlisted:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/docs/getting-started/user/README.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"platform",previous:{title:"Lesson 4: Workflow Rules",permalink:"/getting-started/tutorials/the-basics/workflow-rules"},next:{title:"Steedos Interface",permalink:"/getting-started/user/overview"}},c={},u=[];function d(e){const t={h1:"h1",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"user-guide",children:"User Guide"}),"\n",(0,n.jsx)(t.p,{children:"Steedos Platform is a comprehensive low-code development platform that allows users to build custom applications tailored to their unique business needs. It provides a flexible and intuitive environment for users to design, develop, and deploy applications with minimal coding required. Whether you're looking to manage customer relationships, streamline internal processes, or analyze data, Steedos Platform offers the versatility and scalability to meet your objectives."}),"\n","\n",(0,n.jsx)(o.A,{})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},3514:(e,t,r)=>{r.d(t,{A:()=>v});r(96540);var n=r(18215),s=r(84142),o=r(28774),i=r(53465),a=r(16654),l=r(21312),c=r(51107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=r(74848);function m(e){let{href:t,children:r}=e;return(0,d.jsx)(o.A,{href:t,className:(0,n.A)("card padding--lg",u.cardContainer),children:r})}function p(e){let{href:t,icon:r,title:s,description:o}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(c.A,{as:"h2",className:(0,n.A)("text--truncate",u.cardTitle),title:s,children:[r," ",s]}),o&&(0,d.jsx)("p",{className:(0,n.A)("text--truncate",u.cardDescription),title:o,children:o})]})}function f(e){let{item:t}=e;const r=(0,s.Nr)(t),n=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,l.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,d.jsx)(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function h(e){let{item:t}=e;const r=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,s.cC)(t.docId??void 0);return(0,d.jsx)(p,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(h,{item:t});case"category":return(0,d.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const r=(0,s.$S)();return(0,d.jsx)(v,{items:r.items,className:t})}function v(e){const{items:t,className:r}=e;if(!t)return(0,d.jsx)(x,{...e});const o=(0,s.d1)(t);return(0,d.jsx)("section",{className:(0,n.A)("row",r),children:o.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}},53465:(e,t,r)=>{r.d(t,{W:()=>c});var n=r(96540),s=r(44586);const o=["zero","one","two","few","many","other"];function i(e){return o.filter((t=>e.includes(t)))}const a={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),a}}),[e])}function c(){const e=l();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const s=r.select(t),o=r.pluralForms.indexOf(s);return n[Math.min(o,n.length-1)]}(r,t,e)}}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>a});var n=r(96540);const s={},o=n.createContext(s);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);