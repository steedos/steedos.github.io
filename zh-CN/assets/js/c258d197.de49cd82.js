"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4442],{57358:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>p});var n=s(74848),i=s(28453);const r={title:"\u6982\u89c8",sidebar_position:.1},o="Steedos API \u7b80\u4ecb",d={id:"developer/api/overview",title:"\u6982\u89c8",description:"Steedos\u63d0\u4f9b\u4e86\u4e00\u5957\u5168\u9762\u7684\u5f3a\u5927API\uff0c\u4e3a\u4f01\u4e1a\u96c6\u6210\u3001\u5f00\u53d1\u548c\u529f\u80fd\u589e\u5f3a\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u9009\u9879\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/developer/api/overview.md",sourceDirName:"developer/api",slug:"/developer/api/overview",permalink:"/zh-CN/developer/api/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/developer/api/overview.md",tags:[],version:"current",sidebarPosition:.1,frontMatter:{title:"\u6982\u89c8",sidebar_position:.1},sidebar:"developer",previous:{title:"API \u5411\u5bfc",permalink:"/zh-CN/developer/api/"},next:{title:"\u63a5\u53e3\u9a8c\u8bc1",permalink:"/zh-CN/developer/api/api-validate"}},l={},p=[{value:"\u6982\u89c8",id:"\u6982\u89c8",level:2},{value:"Steedos API\u7684\u7c7b\u578b",id:"steedos-api\u7684\u7c7b\u578b",level:2},{value:"REST API",id:"rest-api",level:3},{value:"GraphQL API",id:"graphql-api",level:3},{value:"\u5143\u6570\u636eAPI",id:"\u5143\u6570\u636eapi",level:3},{value:"Steedos API\u7684\u597d\u5904",id:"steedos-api\u7684\u597d\u5904",level:2},{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba",level:2}];function a(e){const t={h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"steedos-api-\u7b80\u4ecb",children:"Steedos API \u7b80\u4ecb"}),"\n",(0,n.jsx)(t.p,{children:"Steedos\u63d0\u4f9b\u4e86\u4e00\u5957\u5168\u9762\u7684\u5f3a\u5927API\uff0c\u4e3a\u4f01\u4e1a\u96c6\u6210\u3001\u5f00\u53d1\u548c\u529f\u80fd\u589e\u5f3a\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u9009\u9879\u3002"}),"\n",(0,n.jsx)(t.h2,{id:"\u6982\u89c8",children:"\u6982\u89c8"}),"\n",(0,n.jsx)(t.p,{children:"API\uff08\u5e94\u7528\u7a0b\u5e8f\u7f16\u7a0b\u63a5\u53e3\uff09\u662f\u73b0\u4ee3\u6570\u5b57\u4ea4\u4e92\u7684\u652f\u67f1\u3002\u901a\u8fc7Steedos\u7684\u591a\u5143\u5316API\u96c6\uff0c\u7ec4\u7ec7\u73b0\u5728\u53ef\u4ee5\u65e0\u7f1d\u5730\u5c06Steedos\u4e0e\u5176\u4ed6\u5916\u90e8\u670d\u52a1\u3001\u7cfb\u7edf\u548c\u6570\u636e\u6e90\u96c6\u6210\u3002\u8fd9\u79cd\u96c6\u6210\u5bf9\u4e8e\u516c\u53f8\u81ea\u52a8\u5316\u6d41\u7a0b\u3001\u540c\u6b65\u6570\u636e\u4ee5\u53ca\u6269\u5c55\u5176Steedos\u89e3\u51b3\u65b9\u6848\u7684\u6838\u5fc3\u529f\u80fd\u81f3\u5173\u91cd\u8981\u3002"}),"\n",(0,n.jsx)(t.h2,{id:"steedos-api\u7684\u7c7b\u578b",children:"Steedos API\u7684\u7c7b\u578b"}),"\n",(0,n.jsx)(t.p,{children:"Steedos\u63d0\u4f9b\u591a\u79cdAPI\uff0c\u6bcf\u79cd\u90fd\u662f\u4e3a\u7279\u5b9a\u76ee\u7684\u800c\u8bbe\u8ba1\u7684\uff0c\u786e\u4fdd\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u627e\u5230\u5b8c\u7f8e\u7b26\u5408\u5176\u9700\u6c42\u7684API\u3002\u4e00\u4e9b\u7a81\u51fa\u7684Steedos API\u5305\u62ec\uff1a"}),"\n",(0,n.jsx)(t.h3,{id:"rest-api",children:"REST API"}),"\n",(0,n.jsx)(t.p,{children:"Steedos\u7684REST API\u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u4f7f\u7528\u6807\u51c6\u7684HTTP\u65b9\u6cd5\uff08\u5982GET\u3001POST\u3001DELETE\u548cPATCH\uff09\u6765\u64cd\u4f5c\u6570\u636e\u3002\u5b83\u53ef\u4ee5\u901a\u8fc7URI\u8def\u5f84\u8bbf\u95ee\uff0c\u7528\u6237\u53ef\u4ee5\u53d1\u9001\u8bf7\u6c42\u5e76\u4ee5JSON\u6216XML\u683c\u5f0f\u63a5\u6536\u54cd\u5e94\u3002\u5f53\u60a8\u4f7f\u7528\u79fb\u52a8\u5e94\u7528\u7a0b\u5e8f\u548c\u7f51\u7edc\u9879\u76ee\u65f6\uff0c\u8fd9\u4e2aAPI\u975e\u5e38\u5b8c\u7f8e\u3002"}),"\n",(0,n.jsx)(t.h3,{id:"graphql-api",children:"GraphQL API"}),"\n",(0,n.jsx)(t.p,{children:"GraphQL\uff0c\u7531Facebook\u521b\u5efa\u7684\u4e00\u79cd\u67e5\u8be2\u8bed\u8a00\uff0c\u652f\u6301\u58f0\u660e\u5f0f\u6570\u636e\u83b7\u53d6\uff0c\u5ba2\u6237\u7aef\u53ef\u4ee5\u51c6\u786e\u6307\u5b9a\u5b83\u4eceAPI\u9700\u8981\u7684\u6570\u636e\u3002\u4e0e\u8fd4\u56de\u56fa\u5b9a\u6570\u636e\u7ed3\u6784\u7684\u591a\u4e2a\u7aef\u70b9\u4e0d\u540c\uff0cGraphQL\u670d\u52a1\u5668\u64cd\u4f5c\u4e00\u4e2a\u7aef\u70b9\uff0c\u5e76\u7cbe\u786e\u54cd\u5e94\u5ba2\u6237\u7aef\u8bf7\u6c42\u7684\u6570\u636e\u3002"}),"\n",(0,n.jsx)(t.p,{children:"Steedos GraphQL API\u96c6\u6210\u4e86\u8fd9\u79cd\u5f3a\u5927\u7684\u67e5\u8be2\u8bed\u8a00\uff0c\u5b9e\u73b0\u4e86\u4e00\u79cd\u66f4\u6709\u6548\u7684\u65b9\u5f0f\u6765\u5904\u7406\u5b58\u50a8\u5728Steedos\u73af\u5883\u4e2d\u7684\u4e30\u5bcc\u6570\u636e\u3002\u8fd9\u4e2aAPI\u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u4f7f\u7528GraphQL\u8bfb\u53d6\u3001\u521b\u5efa\u3001\u4fee\u6539\u548c\u5220\u9664Steedos\u6570\u636e\u3002\u5b83\u65e8\u5728\u63d0\u4f9b\u66f4\u6d41\u7545\u3001\u66f4\u76f4\u89c2\u3001\u66f4\u5bf9\u5f00\u53d1\u4eba\u5458\u53cb\u597d\u7684\u65b9\u5f0f\u4e0eSteedos\u7684\u5927\u91cf\u4e1a\u52a1\u6570\u636e\u8fdb\u884c\u4ea4\u4e92\u3002"}),"\n",(0,n.jsx)(t.h3,{id:"\u5143\u6570\u636eapi",children:"\u5143\u6570\u636eAPI"}),"\n",(0,n.jsx)(t.p,{children:"\u5143\u6570\u636eAPI\u662f\u9700\u8981\u68c0\u7d22\u3001\u90e8\u7f72\u3001\u521b\u5efa\u3001\u66f4\u65b0\u6216\u5220\u9664\u7ec4\u7ec7\u5143\u6570\u636e\u5b9a\u5236\u7684\u5f00\u53d1\u4eba\u5458\u7684\u5f3a\u5927\u5de5\u5177\u3002\u5b83\u5bf9\u4e8e\u7ba1\u7406\u5b9a\u5236\u548c\u6784\u5efa\u53ef\u4ee5\u7ba1\u7406\u5143\u6570\u636e\u6a21\u578b\uff08\u800c\u4e0d\u662f\u6570\u636e\u672c\u8eab\uff09\u7684\u5de5\u5177\u975e\u5e38\u5b9d\u8d35\u3002"}),"\n",(0,n.jsx)(t.h2,{id:"steedos-api\u7684\u597d\u5904",children:"Steedos API\u7684\u597d\u5904"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"\u65e0\u7f1d\u96c6\u6210\uff1a"})," \u8f7b\u677e\u5730\u5c06Steedos\u4e0e\u5176\u4ed6\u5e73\u53f0\u3001\u670d\u52a1\u548c\u8f6f\u4ef6\u8fde\u63a5\u8d77\u6765\uff0c\u6253\u7834\u4fe1\u606f\u5b64\u5c9b\uff0c\u4fc3\u8fdb\u8de8\u5e73\u53f0\u529f\u80fd\u3002"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"\u81ea\u52a8\u5316\u548c\u6548\u7387\uff1a"})," \u81ea\u52a8\u5316\u6570\u636e\u4f20\u8f93\uff0c\u5728\u7cfb\u7edf\u4e4b\u95f4\u5b9e\u65f6\u540c\u6b65\uff0c\u5e76\u5728\u4e0d\u9700\u8981\u4eba\u5de5\u5e72\u9884\u7684\u60c5\u51b5\u4e0b\u66f4\u65b0\u6570\u636e\uff0c\u4ece\u800c\u63d0\u9ad8\u64cd\u4f5c\u6548\u7387\u3002"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"\u5b9a\u5236\u5316\uff1a"})," \u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u5728Steedos\u5e73\u53f0\u4e4b\u4e0a\u6784\u5efa\u5b9a\u5236\u89e3\u51b3\u65b9\u6848\uff0c\u786e\u4fddCRM\u7cfb\u7edf\u5b8c\u7f8e\u5730\u4e0e\u4e1a\u52a1\u9700\u6c42\u548c\u5de5\u4f5c\u6d41\u7a0b\u76f8\u534f\u8c03\u3002"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"\u7ed3\u8bba",children:"\u7ed3\u8bba"}),"\n",(0,n.jsx)(t.p,{children:"Steedos API\u5bf9\u4e8e\u73b0\u4ee3\u4f01\u4e1a\u6765\u8bf4\u662f\u4e0d\u53ef\u6216\u7f3a\u7684\uff0c\u5b83\u8d4b\u4e88\u4e86\u4f01\u4e1a\u8d85\u8d8a\u6807\u51c6\u529f\u80fd\uff0c\u521b\u5efa\u91cf\u8eab\u5b9a\u505a\u3001\u96c6\u6210\u548c\u81ea\u52a8\u5316\u89e3\u51b3\u65b9\u6848\u7684\u80fd\u529b\u3002\u901a\u8fc7\u5229\u7528\u8fd9\u4e9bAPI\uff0c\u516c\u53f8\u53ef\u4ee5\u663e\u8457\u63d0\u9ad8\u5176\u64cd\u4f5c\u6548\u7387\u3001\u5ba2\u6237\u5173\u7cfb\u7ba1\u7406\u548c\u6574\u4f53\u751f\u4ea7\u529b\u3002"})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>d});var n=s(96540);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);