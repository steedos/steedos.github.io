"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6500],{89369:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var t=n(74848),r=n(28453);const o={title:"\u6982\u89c8",sidebar_position:.1},d="Steedos DX \u9879\u76ee",i={id:"developer/setup/overview",title:"\u6982\u89c8",description:"Steedos DX \u9879\u76ee\u662f\u4e00\u79cd\u7528\u4e8e\u7ba1\u7406\u548c\u5f00\u53d1 Steedos \u5e94\u7528\u7a0b\u5e8f\u7684\u5de5\u4f5c\u6d41\u65b9\u6cd5\uff0c\u5f3a\u8c03\u6e90\u4ee3\u7801\u9a71\u52a8\u7684\u65b9\u6cd5\uff0c\u4ee5\u5b9e\u73b0\u66f4\u6709\u6548\u7684\u7248\u672c\u63a7\u5236\u548c\u56e2\u961f\u534f\u4f5c\u3002Steedos DX \u9879\u76ee\u6587\u4ef6\u5939\u901a\u5e38\u5305\u542b\u4ee5\u4e0b\u5143\u7d20\uff1a",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/developer/setup/overview.md",sourceDirName:"developer/setup",slug:"/developer/setup/overview",permalink:"/zh-CN/developer/setup/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/developer/setup/overview.md",tags:[],version:"current",sidebarPosition:.1,frontMatter:{title:"\u6982\u89c8",sidebar_position:.1},sidebar:"developer",previous:{title:"\u8bbe\u7f6e\u9879\u76ee",permalink:"/zh-CN/developer/setup/"},next:{title:"\u73af\u5883\u51c6\u5907",permalink:"/zh-CN/developer/setup/setup-env"}},l={},a=[{value:"\u9879\u76ee\u7ed3\u6784",id:"\u9879\u76ee\u7ed3\u6784",level:2},{value:"steedos-packages",id:"steedos-packages",level:3},{value:"steedos-platform",id:"steedos-platform",level:3},{value:"package.json",id:"packagejson",level:3},{value:"Steedos DX \u5f00\u53d1\u6d41\u7a0b",id:"steedos-dx-\u5f00\u53d1\u6d41\u7a0b",level:2}];function c(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"steedos-dx-\u9879\u76ee",children:"Steedos DX \u9879\u76ee"}),"\n",(0,t.jsx)(s.p,{children:"Steedos DX \u9879\u76ee\u662f\u4e00\u79cd\u7528\u4e8e\u7ba1\u7406\u548c\u5f00\u53d1 Steedos \u5e94\u7528\u7a0b\u5e8f\u7684\u5de5\u4f5c\u6d41\u65b9\u6cd5\uff0c\u5f3a\u8c03\u6e90\u4ee3\u7801\u9a71\u52a8\u7684\u65b9\u6cd5\uff0c\u4ee5\u5b9e\u73b0\u66f4\u6709\u6548\u7684\u7248\u672c\u63a7\u5236\u548c\u56e2\u961f\u534f\u4f5c\u3002Steedos DX \u9879\u76ee\u6587\u4ef6\u5939\u901a\u5e38\u5305\u542b\u4ee5\u4e0b\u5143\u7d20\uff1a"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"\u5143\u6570\u636e"}),"\uff1a\u8fd9\u4e9b\u5305\u62ec\u6240\u6709\u975e\u7f16\u7801\u914d\u7f6e\uff0c\u5982\u5bf9\u8c61\u5b9a\u4e49\u3001\u5b57\u6bb5\u3001\u5e03\u5c40\u3001\u6d41\u7a0b\u3001\u9a8c\u8bc1\u89c4\u5219\u7b49\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"\u6e90\u4ee3\u7801"}),"\uff1a\u8fd9\u91cc\u5305\u542b\u5e94\u7528\u7a0b\u5e8f\u7684\u6240\u6709\u6e90\u4ee3\u7801\uff0c\u5305\u62ec\u5fae\u670d\u52a1\u3001\u89e6\u53d1\u5668\u3001REST API\u3001\u89c6\u89c9\u7ec4\u4ef6\u3001\u5fae\u9875\u9762\u7b49\uff0c\u8fd9\u4e9b\u90fd\u5728\u4e00\u4e2a\u7ed3\u6784\u5316\u76ee\u5f55\u4e2d\u6709\u6761\u7406\u5730\u7ec4\u7ec7\u8d77\u6765\uff0c\u4ee5\u4fdd\u6301\u6574\u6d01\u548c\u53ef\u7ba1\u7406\u6027\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"\u8d44\u6e90\u6587\u4ef6"}),"\uff1a\u8fd9\u53ef\u80fd\u5305\u62ec\u9759\u6001\u8d44\u6e90\uff0c\u5982\u56fe\u50cf\u3001\u6837\u5f0f\u8868\u3001JavaScript \u6587\u4ef6\u7b49\uff0c\u589e\u5f3a\u7528\u6237\u754c\u9762\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"\u9879\u76ee\u7ed3\u6784",children:"\u9879\u76ee\u7ed3\u6784"}),"\n",(0,t.jsx)(s.p,{children:"Steedos DX \u9879\u76ee\u6709\u7279\u5b9a\u7684\u9879\u76ee\u7ed3\u6784\u548c\u6e90\u683c\u5f0f\u3002\u6e90\u683c\u5f0f\u4f7f\u7528\u7684\u6587\u4ef6\u96c6\u548c\u6587\u4ef6\u6269\u5c55\u540d\u4e0e Metadata API \u4f7f\u7528\u7684\u4e0d\u540c\u3002\u5f53\u60a8\u4f7f\u7528\u9879\u76ee\u68c0\u7d22\u5f00\u59cb\u547d\u4ee4\u4ece org \u68c0\u7d22\u5143\u6570\u636e\u65f6\uff0cSteedos CLI \u5c06\u5176\u4ee5\u6e90\u683c\u5f0f\u5b58\u50a8\u5728\u60a8\u7684\u9879\u76ee\u4e2d\u3002\u5f53\u60a8\u90e8\u7f72\u5143\u6570\u636e\u65f6\uff0cSteedos CLI \u5c06\u5176\u8f6c\u6362\u4e3a Metadata API \u6240\u9700\u7684\u683c\u5f0f\u3002"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"my-project\n\u251c\u2500\u2500 steedos-packages\n\u2502   \u251c\u2500\u2500 package1\n\u2502   \u251c\u2500\u2500 package2\n\u2502   \u2514\u2500\u2500 package3\n\u251c\u2500\u2500 steedos-platform\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 moleculer.config.js\n"})}),"\n",(0,t.jsx)(s.h3,{id:"steedos-packages",children:"steedos-packages"}),"\n",(0,t.jsx)(s.p,{children:"\u5f53\u60a8\u521b\u5efa Steedos DX \u9879\u76ee\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u5728\u672c\u5730\u521b\u5efa\u591a\u4e2a\u5305\u76ee\u5f55\u6765\u5c06\u5143\u6570\u636e\u7ec4\u7ec7\u6210\u903b\u8f91\u5206\u7ec4\u3002\u60a8\u53ef\u4ee5\u5c06\u7c7b\u4f3c\u7684\u4ee3\u7801\u548c\u6e90\u4ee3\u7801\u5206\u7ec4\u5230\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u6216\u81ea\u5b9a\u4e49\u4e2d\uff0c\u4ee5\u66f4\u597d\u5730\u7ec4\u7ec7\u60a8\u56e2\u961f\u7684\u5b58\u50a8\u5e93\u3002"}),"\n",(0,t.jsx)(s.h3,{id:"steedos-platform",children:"steedos-platform"}),"\n",(0,t.jsx)(s.p,{children:"\u8981\u5f00\u53d1\u4e00\u4e2a\u5305\uff0c\u60a8\u9700\u8981\u8fde\u63a5\u5230\u4e00\u4e2a Steedos Platform \u90e8\u7f72\u3002\u5bfc\u822a\u5230 'steedos-platform' \u6587\u4ef6\u5939\u4ee5\u542f\u52a8\u672c\u5730 Steedos Platform\u3002"}),"\n",(0,t.jsx)(s.h3,{id:"packagejson",children:"package.json"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"package.json"})," \u6587\u4ef6\u5728\u51e0\u4e4e\u6240\u6709\u6d89\u53ca Node.js \u7684\u9879\u76ee\u4e2d\u90fd\u662f\u57fa\u672c\u5143\u7d20\u3002\u5b83\u4f5c\u4e3a\u5b9a\u4e49\u9879\u76ee\u4e2d\u6240\u9700\u7684\u5404\u79cd\u6a21\u5757\u4ee5\u53ca\u5176\u4ed6\u914d\u7f6e\u7ec6\u8282\u7684\u57fa\u7840\u6765\u6e90\u3002"]}),"\n",(0,t.jsx)(s.h2,{id:"steedos-dx-\u5f00\u53d1\u6d41\u7a0b",children:"Steedos DX \u5f00\u53d1\u6d41\u7a0b"}),"\n",(0,t.jsx)(s.p,{children:"\u6574\u4e2a\u8fc7\u7a0b\u5f3a\u8c03\u654f\u6377\u5f00\u53d1\u3001\u6301\u7eed\u96c6\u6210\u548c\u6301\u7eed\u4ea4\u4ed8\uff0c\u4f7f\u56e2\u961f\u80fd\u591f\u5feb\u901f\u54cd\u5e94\u53d8\u5316\u5e76\u63d0\u9ad8\u4ea4\u4ed8\u8d28\u91cf\u3002"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"\u73af\u5883\u8bbe\u7f6e"}),"\uff1a\u5f00\u53d1\u8005\u9700\u8981\u8bbe\u7f6e\u4ed6\u4eec\u7684\u5f00\u53d1\u73af\u5883\uff0c\u5305\u62ec\u5b89\u88c5 Steedos CLI\u3001Visual Studio Code \u548c\u5176\u4ed6\u5fc5\u8981\u7684\u63d2\u4ef6\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"\u62c9\u53d6\u6e90\u4ee3\u7801"}),"\uff1a\u5229\u7528 Steedos CLI\uff0c\u5f00\u53d1\u8005\u4ece\u6e90\u4ee3\u7801\u4ed3\u5e93\u62c9\u53d6\u6700\u65b0\u7684\u6e90\u4ee3\u7801\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"\u672c\u5730\u5f00\u53d1\u548c\u8c03\u8bd5"}),"\uff1a\u5f00\u53d1\u8005\u5728\u4ed6\u4eec\u7684\u672c\u5730\u73af\u5883\u4e2d\u7f16\u5199\u548c\u8c03\u8bd5\u4ee3\u7801\uff0c\u4f7f\u7528\u50cf Nodejs Debugger \u8fd9\u6837\u7684\u5de5\u5177\u6765\u786e\u4fdd\u7cbe\u786e\u6027\u548c\u7a33\u5065\u6027\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"\u6e90\u4ee3\u7801\u63a7\u5236"}),"\uff1a\u5e94\u5b9a\u671f\u5c06\u66f4\u6539\u63d0\u4ea4\u5230\u7248\u672c\u63a7\u5236\u7cfb\u7edf\uff08\u5982 Git\uff09\uff0c\u4ee5\u4fbf\u5171\u4eab\u4fee\u6539\u5e76\u83b7\u53d6\u56e2\u961f\u6210\u5458\u7684\u4ee3\u7801\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"\u90e8\u7f72\u548c\u6d4b\u8bd5"}),"\uff1a\u901a\u8fc7 Steedos CLI\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u5c06\u672c\u5730\u66f4\u6539\u90e8\u7f72\u5230\u6d4b\u8bd5\u73af\u5883\u8fdb\u884c\u8fdb\u4e00\u6b65\u7684\u6d4b\u8bd5\u548c\u9a8c\u8bc1\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"\u4ee3\u7801\u5ba1\u67e5\u548c\u5408\u5e76"}),"\uff1a\u5728\u4ee3\u7801\u90e8\u7f72\u5230\u751f\u4ea7\u73af\u5883\u4e4b\u524d\u5e94\u8fdb\u884c\u4ee3\u7801\u5ba1\u67e5\u3002\u4e00\u65e6\u4ee3\u7801\u901a\u8fc7\u5ba1\u67e5\u548c\u6d4b\u8bd5\uff0c\u5b83\u53ef\u4ee5\u88ab\u5408\u5e76\u5230\u4e3b\u5206\u652f\u5e76\u90e8\u7f72\u5230\u751f\u4ea7\u73af\u5883\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.mermaid,{value:'graph TD\n  start["\u5f00\u59cb"] --\x3e setup["\u8bbe\u7f6e Steedos DX \u73af\u5883"]\n  setup --\x3e init["\u521d\u59cb\u5316\u9879\u76ee\u548c\u7248\u672c\u63a7\u5236"]\n  init --\x3e run["\u8fd0\u884c\u672c\u5730\u5f00\u53d1\u73af\u5883"]\n  run --\x3e develop["\u5f00\u53d1\u65b0\u529f\u80fd"]\n  develop --\x3e testLocal["\u672c\u5730\u6d4b\u8bd5\u548c\u8c03\u8bd5"]\n  testLocal --\x3e pushTest["\u5c06\u4ee3\u7801\u63a8\u9001\u5230\u6d4b\u8bd5\u73af\u5883"]\n  pushTest --\x3e executeTest["\u5728\u6d4b\u8bd5\u73af\u5883\u4e2d\u6267\u884c\u6240\u6709\u6d4b\u8bd5"]\n  executeTest --\x3e review["\u4ee3\u7801\u5ba1\u67e5\u548c\u8d28\u91cf\u68c0\u67e5"]\n  review --\x3e ready{"\u51c6\u5907\u521b\u5efa\u65b0\u7248\u672c\u5417?"}\n  ready --\x3e yes{\u662f}\n  ready --\x3e no{\u5426}\n  no --\x3e continue["\u7ee7\u7eed\u5f00\u53d1\u548c\u6d4b\u8bd5"]\n  continue --\x3e ready\n  yes --\x3e beta["\u521b\u5efa\u5e76\u53d1\u5e03\u5305\u7684 beta \u7248\u672c (npm)"]\n  beta --\x3e testBeta["\u5728 beta \u73af\u5883\u4e2d\u6d4b\u8bd5\u65b0\u5305\u7248\u672c"]\n  testBeta --\x3e fix["\u4fee\u590d\u5728 beta \u6d4b\u8bd5\u4e2d\u8bc6\u522b\u7684\u95ee\u9898"]\n  fix --\x3e releaseReady{"\u51c6\u5907\u53d1\u5e03\u5417?"}\n  releaseReady --\x3e releaseYes{\u662f}\n  releaseReady --\x3e releaseNo{\u5426}\n  releaseNo --\x3e fix\n  releaseYes --\x3e release["\u53d1\u5e03\u5305 (npm)"]\n  release --\x3e support["\u5305\u7ef4\u62a4\u548c\u5ba2\u6237\u652f\u6301"]\n  support --\x3e endNode["\u7ed3\u675f"]'})]})}function p(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>i});var t=n(96540);const r={},o=t.createContext(r);function d(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);