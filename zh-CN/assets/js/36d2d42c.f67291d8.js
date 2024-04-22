"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6207],{6919:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=s(74848),t=s(28453);const o={sidebar_position:3},l="\u5bf9\u8c61\u5173\u7cfb",r={id:"no-code/customize/object-relationship",title:"\u5bf9\u8c61\u5173\u7cfb",description:"Steedos\u7684\u5f3a\u5927\u6570\u636e\u6a21\u578b\u5141\u8bb8\u60a8\u901a\u8fc7\u5b9a\u4e49\u5bf9\u8c61\u4e4b\u95f4\u7684\u5173\u7cfb\u6765\u6784\u5efa\u590d\u6742\u7684\u6570\u636e\u7ed3\u6784\u3002\u8fd9\u4e9b\u5173\u7cfb\u662f\u5982\u4f55\u5c06\u5404\u79cd\u6570\u636e\u70b9\u8054\u7cfb\u5728\u4e00\u8d77\uff0c\u5e76\u5728\u6574\u4e2a\u5e73\u53f0\u4e2d\u5171\u4eab\u6570\u636e\u7684\u57fa\u7840\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/no-code/customize/object-relationship.md",sourceDirName:"no-code/customize",slug:"/no-code/customize/object-relationship",permalink:"/zh-CN/no-code/customize/object-relationship",draft:!1,unlisted:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/no-code/customize/object-relationship.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"platform",previous:{title:"\u65e5\u671f\u65f6\u95f4\u516c\u5f0f\u8ba1\u7b97",permalink:"/zh-CN/no-code/customize/formula/datetime"},next:{title:"\u81ea\u5b9a\u4e49\u6309\u94ae",permalink:"/zh-CN/no-code/customize/button"}},c={},d=[{value:"\u652f\u6301\u7684\u5bf9\u8c61\u5173\u7cfb",id:"\u652f\u6301\u7684\u5bf9\u8c61\u5173\u7cfb",level:2},{value:"\u67e5\u627e\u5173\u7cfb(Lookup Relationships)",id:"\u67e5\u627e\u5173\u7cfblookup-relationships",level:5},{value:"\u4e3b\u8868\u5b50\u8868\u5173\u7cfb(Master-Detail Relationships)",id:"\u4e3b\u8868\u5b50\u8868\u5173\u7cfbmaster-detail-relationships",level:5},{value:"\u591a\u5bf9\u591a\u5173\u7cfb(Many-to-Many Relationships)",id:"\u591a\u5bf9\u591a\u5173\u7cfbmany-to-many-relationships",level:5},{value:"\u914d\u7f6e\u5bf9\u8c61\u5173\u7cfb",id:"\u914d\u7f6e\u5bf9\u8c61\u5173\u7cfb",level:3}];function a(e){const n={h1:"h1",h2:"h2",h3:"h3",h5:"h5",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u5bf9\u8c61\u5173\u7cfb",children:"\u5bf9\u8c61\u5173\u7cfb"}),"\n",(0,i.jsx)(n.p,{children:"Steedos\u7684\u5f3a\u5927\u6570\u636e\u6a21\u578b\u5141\u8bb8\u60a8\u901a\u8fc7\u5b9a\u4e49\u5bf9\u8c61\u4e4b\u95f4\u7684\u5173\u7cfb\u6765\u6784\u5efa\u590d\u6742\u7684\u6570\u636e\u7ed3\u6784\u3002\u8fd9\u4e9b\u5173\u7cfb\u662f\u5982\u4f55\u5c06\u5404\u79cd\u6570\u636e\u70b9\u8054\u7cfb\u5728\u4e00\u8d77\uff0c\u5e76\u5728\u6574\u4e2a\u5e73\u53f0\u4e2d\u5171\u4eab\u6570\u636e\u7684\u57fa\u7840\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u652f\u6301\u7684\u5bf9\u8c61\u5173\u7cfb",children:"\u652f\u6301\u7684\u5bf9\u8c61\u5173\u7cfb"}),"\n",(0,i.jsx)(n.p,{children:"\u5bf9\u8c61\u5173\u7cfb\u5b9a\u4e49\u4e86\u4e0d\u540c\u5bf9\u8c61\uff08\u6216\u6570\u636e\u8868\uff09\u4e4b\u95f4\u7684\u8fde\u63a5\u65b9\u5f0f\u3002\u5728Steedos\u4e2d\uff0c\u60a8\u53ef\u4ee5\u8bbe\u7f6e\u4e09\u79cd\u4e3b\u8981\u7c7b\u578b\u7684\u5173\u7cfb\uff1a\u67e5\u627e\u5173\u7cfb(Lookup Relationships)\u3001\u4e3b\u8868\u5b50\u8868\u5173\u7cfb(Master-Detail Relationships)\u548c\u591a\u5bf9\u591a\u5173\u7cfb(Many-to-Many Relationships)\u3002"}),"\n",(0,i.jsx)(n.h5,{id:"\u67e5\u627e\u5173\u7cfblookup-relationships",children:"\u67e5\u627e\u5173\u7cfb(Lookup Relationships)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u63cf\u8ff0"}),": \u67e5\u627e\u5173\u7cfb\u662f\u4e24\u4e2a\u5bf9\u8c61\u4e4b\u95f4\u6700\u7b80\u5355\u7684\u5173\u7cfb\u7c7b\u578b\uff0c\u5b83\u7c7b\u4f3c\u4e8e\u6570\u636e\u5e93\u4e2d\u7684\u5916\u952e\u5173\u7cfb\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u7528\u9014"}),": \u5f53\u4e24\u4e2a\u5bf9\u8c61\u76f8\u5173\u8054\u4f46\u5e76\u4e0d\u4e25\u683c\u4f9d\u8d56\u5bf9\u65b9\u65f6\u4f7f\u7528\u3002\u4f8b\u5982\uff0c\u8054\u7cfb\u4eba\u53ef\u80fd\u4e0e\u4e00\u4e2a\u8d26\u6237\u5173\u8054\uff0c\u4f46\u4e5f\u53ef\u4ee5\u72ec\u7acb\u5b58\u5728\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"\u4e3b\u8868\u5b50\u8868\u5173\u7cfbmaster-detail-relationships",children:"\u4e3b\u8868\u5b50\u8868\u5173\u7cfb(Master-Detail Relationships)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u63cf\u8ff0"}),": \u4e3b\u8868\u5b50\u8868\u5173\u7cfb\u66f4\u4e3a\u4e25\u683c\uff0c\u8be6\u7ec6\u5bf9\u8c61\u7684\u751f\u547d\u5468\u671f\u4f9d\u8d56\u4e8e\u4e3b\u5bf9\u8c61\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u7528\u9014"}),": \u7528\u4e8e\u5f53\u5220\u9664\u4e3b\u5bf9\u8c61\u65f6\uff0c\u4e5f\u9700\u8981\u5220\u9664\u6240\u6709\u76f8\u5173\u7684\u8be6\u7ec6\u5bf9\u8c61\u7684\u60c5\u51b5\u3002\u4f8b\u5982\uff0c\u8ba2\u5355\u9879\u4f9d\u8d56\u4e8e\u8ba2\u5355\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"\u591a\u5bf9\u591a\u5173\u7cfbmany-to-many-relationships",children:"\u591a\u5bf9\u591a\u5173\u7cfb(Many-to-Many Relationships)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u63cf\u8ff0"}),": \u5f53\u60a8\u9700\u8981\u5c06\u4e24\u79cd\u7c7b\u578b\u7684\u5bf9\u8c61\u4ee5\u591a\u5bf9\u591a\u7684\u65b9\u5f0f\u5173\u8054\u65f6\uff0c\u53ef\u4ee5\u5c06\u5173\u7cfb\u5b57\u6bb5\u5b9a\u4e49\u4e3a\u6570\u7ec4\u7c7b\u578b\u5b57\u6bb5\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u7528\u9014"}),": \u6570\u7ec4\u7c7b\u578b\u5b57\u6bb5\u53ef\u4ee5\u540c\u65f6\u7ed1\u5b9a\u591a\u6761\u8bb0\u5f55\uff0c\u4f8b\u5982\u7ed9\u4efb\u52a1\u521b\u5efa\u4e00\u4e2a \u5904\u7406\u4eba \u7684\u5b57\u6bb5\uff0c\u914d\u7f6e\u4e3a\u591a\u9009\uff0c\u4e00\u4e2a\u4efb\u52a1\u53ef\u4ee5\u7ba1\u7406\u5230\u591a\u4e2a\u5904\u7406\u4eba\uff0c\u6bcf\u4e2a\u5904\u7406\u4eba\u4e5f\u4f1a\u6709\u5404\u81ea\u7684\u4efb\u52a1\u6e05\u5355\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u914d\u7f6e\u5bf9\u8c61\u5173\u7cfb",children:"\u914d\u7f6e\u5bf9\u8c61\u5173\u7cfb"}),"\n",(0,i.jsx)(n.p,{children:"\u901a\u8fc7\u521b\u5efa\u67e5\u627e\u5173\u7cfb\u5b57\u6bb5(Lookup Relationships)\u3001\u4e3b\u8868\u5b50\u8868\u5173\u7cfb\u5b57\u6bb5(Master-Detail Relationships)\uff0c\u53ef\u4ee5\u8bbe\u5b9a\u5bf9\u8c61\u4e4b\u95f4\u7684\u5173\u7cfb\u3002"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u521b\u5efa\u5173\u7cfb\u5b57\u6bb5"}),": \u5728\u5bf9\u8c61\u7684\u5b57\u6bb5\u8bbe\u7f6e\u4e2d\uff0c\u9009\u62e9\u6dfb\u52a0\u65b0\u5b57\u6bb5\u5e76\u9009\u62e9\u5173\u7cfb\u7c7b\u578b\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u8bbe\u7f6e\u5173\u7cfb\u5c5e\u6027"}),": \u6839\u636e\u5173\u7cfb\u7c7b\u578b\uff0c\u914d\u7f6e\u5fc5\u8981\u7684\u5c5e\u6027\uff0c\u5982\u76f8\u5173\u5bf9\u8c61\u3001\u7ea7\u8054\u5220\u9664\u89c4\u5219\u7b49\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u66f4\u65b0\u9875\u9762\u5e03\u5c40"}),": \u786e\u4fdd\u65b0\u7684\u5173\u7cfb\u5b57\u6bb5\u6dfb\u52a0\u5230\u76f8\u5173\u5bf9\u8c61\u7684\u9875\u9762\u5e03\u5c40\u4e2d\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u8bbe\u7f6e\u6743\u9650"}),": \u6839\u636e\u9700\u8981\u66f4\u65b0\u7528\u6237\u7684\u914d\u7f6e\u6587\u4ef6\u548c\u6743\u9650\u96c6\u4ee5\u8bbf\u95ee\u65b0\u7684\u5173\u7cfb\u5b57\u6bb5\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u901a\u8fc7\u6b63\u786e\u914d\u7f6e\u5bf9\u8c61\u5173\u7cfb\uff0c\u60a8\u53ef\u4ee5\u786e\u4fdd\u6570\u636e\u7684\u5b8c\u6574\u6027\uff0c\u4f18\u5316\u7528\u6237\u4f53\u9a8c\uff0c\u5e76\u4f7f\u62a5\u544a\u548c\u4eea\u8868\u677f\u66f4\u52a0\u5f3a\u5927\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>r});var i=s(96540);const t={},o=i.createContext(t);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);