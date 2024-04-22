"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5125],{24611:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=o(74848),n=o(28453);const a={title:"RecordDetailRelatedList",description:"Steedos\u5fae\u9875\u9762\u5f15\u64ce\uff0c\u5185\u7f6e\u76f8\u5173\u8868\u7ec4\u4ef6 RecordDetailRelatedList\uff0c\u501f\u52a9amis\u6e32\u67d3\u5668\uff0c\u53ef\u4ee5\u5e2e\u52a9\u5f00\u53d1\u4eba\u5458\u5feb\u901f\u751f\u6210\u4e00\u4e2a\u529f\u80fd\u5b8c\u5584\u7684\u76f8\u5173\u8868\u89c6\u56fe\u7ec4\u4ef6\u3002"},s=void 0,i={id:"developer/micro-page/components/record_detail_related_list",title:"RecordDetailRelatedList",description:"Steedos\u5fae\u9875\u9762\u5f15\u64ce\uff0c\u5185\u7f6e\u76f8\u5173\u8868\u7ec4\u4ef6 RecordDetailRelatedList\uff0c\u501f\u52a9amis\u6e32\u67d3\u5668\uff0c\u53ef\u4ee5\u5e2e\u52a9\u5f00\u53d1\u4eba\u5458\u5feb\u901f\u751f\u6210\u4e00\u4e2a\u529f\u80fd\u5b8c\u5584\u7684\u76f8\u5173\u8868\u89c6\u56fe\u7ec4\u4ef6\u3002",source:"@site/docs/developer/micro-page/components/record_detail_related_list.mdx",sourceDirName:"developer/micro-page/components",slug:"/developer/micro-page/components/record_detail_related_list",permalink:"/developer/micro-page/components/record_detail_related_list",draft:!1,unlisted:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/docs/developer/micro-page/components/record_detail_related_list.mdx",tags:[],version:"current",frontMatter:{title:"RecordDetailRelatedList",description:"Steedos\u5fae\u9875\u9762\u5f15\u64ce\uff0c\u5185\u7f6e\u76f8\u5173\u8868\u7ec4\u4ef6 RecordDetailRelatedList\uff0c\u501f\u52a9amis\u6e32\u67d3\u5668\uff0c\u53ef\u4ee5\u5e2e\u52a9\u5f00\u53d1\u4eba\u5458\u5feb\u901f\u751f\u6210\u4e00\u4e2a\u529f\u80fd\u5b8c\u5584\u7684\u76f8\u5173\u8868\u89c6\u56fe\u7ec4\u4ef6\u3002"},sidebar:"developer",previous:{title:"RecordDetailHeader",permalink:"/developer/micro-page/components/record_detail_header"},next:{title:"API Guide",permalink:"/developer/api/"}},c={},d=[{value:"Basic Usage",id:"basic-usage",level:2}];function l(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"This is steedos related table view component, which is generally used to display a related child table list on the record details page. It displays the object-related table records as a table, and includes functionality for CRUD and other operation buttons."}),"\n",(0,r.jsx)(t.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,r.jsx)(t.p,{children:'The most basic usage is to configure the "Parent Object", "Parent Record", and "Related Object" properties of the component, which can then display a related table interface for a specific object record.'}),"\n",(0,r.jsx)(t.p,{children:'As shown below, we configure the "Parent Object" property of the related table to be the current object, the "Parent Record" property to be the current record, and the "Related Object" property to be "Contacts":'}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n    type: \'page\',\n    title: \'RecordDetailRelatedList\',\n    body: {\n        "type": "steedos-object-related-listview",\n        "objectApiName": "${objectName}",\n        "recordId": "${recordId}",\n        "relatedObjectApiName": "contacts"\n    },\n  }\n'})})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>i});var r=o(96540);const n={},a=r.createContext(n);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);