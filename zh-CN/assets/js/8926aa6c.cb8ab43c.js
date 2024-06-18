"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9785],{35900:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var d=s(74848),l=s(28453);const o={title:"\u7eaf\u5185\u7f51\u90e8\u7f72",sidebar_position:4,sidebar_class_name:"hidden"},r=void 0,c={id:"deploy/intranet",title:"\u7eaf\u5185\u7f51\u90e8\u7f72",description:"\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u5728 Ubuntu 20.04 \u7eaf\u5185\u7f51\u73af\u5883\u4e2d\u90e8\u7f72 Steedos\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/deploy/intranet.md",sourceDirName:"deploy",slug:"/deploy/intranet",permalink:"/zh-CN/deploy/intranet",draft:!1,unlisted:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/deploy/intranet.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u7eaf\u5185\u7f51\u90e8\u7f72",sidebar_position:4,sidebar_class_name:"hidden"},sidebar:"platform",previous:{title:"Kubernetes \u90e8\u7f72",permalink:"/zh-CN/deploy/deploy-k8s"},next:{title:"\u5b9e\u4f8b\u914d\u7f6e",permalink:"/zh-CN/deploy/steedos-config"}},t={},i=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"\u5b89\u88c5docker",id:"\u5b89\u88c5docker",level:2},{value:"\u5b89\u88c5 Steedos",id:"\u5b89\u88c5-steedos",level:2},{value:"\u7f13\u5b58unpkg",id:"\u7f13\u5b58unpkg",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:"\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u5728 Ubuntu 20.04 \u7eaf\u5185\u7f51\u73af\u5883\u4e2d\u90e8\u7f72 Steedos\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u5148\u51b3\u6761\u4ef6",children:"\u5148\u51b3\u6761\u4ef6"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"https://releases.ubuntu.com/20.04/",children:"Ubuntu"})," (\u7248\u672c 20.04) \u5185\u7f51\u670d\u52a1\u5668"]}),"\n",(0,d.jsx)(n.li,{children:"\u9884\u88c5\u4e86docker\u670d\u52a1\u7684linux\u670d\u52a1\u5668\uff0c\u9700\u8bbf\u95ee\u5916\u7f51"}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u5b89\u88c5docker",children:"\u5b89\u88c5docker"}),"\n",(0,d.jsx)(n.p,{children:"\u8bf7\u5728\u8054\u7f51\u7684Linux\u670d\u52a1\u5668\u4e0a\u8fdb\u884c\u4e0b\u8f7d\u64cd\u4f5c\uff1a"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u8bbf\u95ee\u94fe\u63a5 ",(0,d.jsx)(n.a,{href:"https://download.docker.com/linux/ubuntu/dists/focal/pool/stable/",children:"https://download.docker.com/linux/ubuntu/dists/focal/pool/stable/"})]}),"\n",(0,d.jsx)(n.li,{children:"\u6839\u636e\u9002\u7528\u7684\u67b6\u6784\uff08amd64\u3001armhf\u3001arm64\u6216s390x\uff09\u4e0b\u8f7d\u5185\u7f51\u73af\u5883\u4e0b\u6240\u9700\u8981\u7684deb\u6587\u4ef6\uff0c\u5e76\u4e0a\u4f20\u5230\u5185\u7f51\u670d\u52a1\u5668tmp\u8def\u5f84\u4e2d"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"# Docker Engine\ndocker-ce_24.0.7-1~ubuntu.20.04~focal_amd64.deb\n\n# Docker CLI\ndocker-ce-cli_24.0.7-1~ubuntu.20.04~focal_amd64.deb\n\n# Docker Container\ncontainerd.io_1.6.9-1_amd64.deb\n\n# Docker Compose\ndocker-compose-plugin_2.6.0~ubuntu-focal_amd64.deb\n"})}),"\n",(0,d.jsxs)(n.ol,{start:"3",children:["\n",(0,d.jsx)(n.li,{children:"\u8fdb\u5165\u5185\u7f51\u670d\u52a1\u5668tmp\u76ee\u5f55\uff0c\u5b89\u88c5.deb\u5305"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"sudo dpkg -i ./containerd.io_1.6.9-1_amd64.deb \\\n    ./docker-ce_24.0.7-1~ubuntu.20.04~focal_amd64.deb \\\n    ./docker-ce-cli_24.0.7-1~ubuntu.20.04~focal_amd64.deb \\\n    ./docker-compose-plugin_2.6.0~ubuntu-focal_amd64.deb\n"})}),"\n",(0,d.jsxs)(n.ol,{start:"4",children:["\n",(0,d.jsx)(n.li,{children:"\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u67e5\u770bdocker\u7248\u672c"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"docker -v\nDocker version 24.0.7, build afdd53b\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u5b89\u88c5-steedos",children:"\u5b89\u88c5 Steedos"}),"\n",(0,d.jsxs)(n.p,{children:["\u5728\u60a8\u7684\u5185\u7f51\u670d\u52a1\u5668\u4e0a\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,d.jsx)(n.code,{children:"steedos"})," \u7684\u6587\u4ef6\u5939\uff0c\u7528\u4e8e\u90e8\u7f72\u548c\u6570\u636e\u5b58\u50a8\u3002"]}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u8fdb\u5165 ",(0,d.jsx)(n.code,{children:"steedos"}),"\u6587\u4ef6\u5939\uff0c\u521b\u5efa ",(0,d.jsx)(n.code,{children:"docker-compose.yml"})," \u6587\u4ef6\uff1a"]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-yml",children:'version: "3.9"\n\nservices:\n\n  steedos:\n    image: steedos/steedos-community:2.6\n    ports:\n      - "80:80"    # Steedos\n      - "27017:27017"  # MongoDB\n      - "9001:9001"    # Supervisor\n      - "6379:6379"    # Redis\n    env_file:\n      - .env\n    volumes:\n      - "./steedos-storage:/steedos-storage"\n    environment:\n      - STEEDOS_UNPKG_URL=/unpkg/\n      - STEEDOS_SENTRY_ENABLED=false\n      - STEEDOS_PUBLIC_ANALYTICS_ENABLED=false\n'})}),"\n",(0,d.jsxs)(n.ol,{start:"2",children:["\n",(0,d.jsxs)(n.li,{children:["Create ",(0,d.jsx)(n.code,{children:".env"})," file:"]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"PORT=80\nROOT_URL=http://serverip\n"})}),"\n",(0,d.jsxs)(n.ol,{start:"3",children:["\n",(0,d.jsxs)(n.li,{children:["\u5728\u5916\u7f51\u670d\u52a1\u5668\u4e0a\u521b\u5efa",(0,d.jsx)(n.code,{children:"docker-compose.yml"}),"\uff0c\u6587\u4ef6\u5185\u5bb9\u4e0e\u5185\u7f51\u4e0a\u7684docker-compose.yml\u4e00\u81f4\uff0c\u67e5\u770b",(0,d.jsx)(n.code,{children:"docker-compose.yml"})," \u6587\u4ef6\u5e76\u4e0b\u8f7d\u76f8\u5173image"]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"docker pull steedos/steedos-community:2.6\n"})}),"\n",(0,d.jsxs)(n.ol,{start:"4",children:["\n",(0,d.jsx)(n.li,{children:"\u5c06\u4e0b\u8f7d\u597d\u7684\u955c\u50cf\u53e6\u5b58\u4e3arar\u683c\u5f0f\u6587\u4ef6\u5e76\u4e0a\u4f20\u5230\u5185\u7f51\u670d\u52a1\u5668tmp\u8def\u5f84\u4e2d"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"docker save -o steedos-community.rar steedos/steedos-community:2.6\n"})}),"\n",(0,d.jsxs)(n.ol,{start:"5",children:["\n",(0,d.jsx)(n.li,{children:"\u8fdb\u5165\u5185\u7f51\u670d\u52a1\u5668tmp\u8def\u5f84\u4e2d\u4f9d\u6b21\u52a0\u8f7d\u955c\u50cf"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"docker load < steedos-community.rar\n"})}),"\n",(0,d.jsxs)(n.ol,{start:"6",children:["\n",(0,d.jsx)(n.li,{children:"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8 Docker \u5bb9\u5668\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"docker compose up -d\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u7f13\u5b58unpkg",children:"\u7f13\u5b58unpkg"}),"\n",(0,d.jsx)(n.p,{children:"\u5185\u7f51\u73af\u5883\u4e2d\u9996\u6b21\u8bbf\u95ee\u4f1a\u84dd\u5c4f\uff0c\u8fd9\u65f6\u9700\u8981\u5728\u8054\u7f51\u670d\u52a1\u5668\u4e0a\u5c06\u8d44\u4ea7\u5305\u7f13\u5b58\u5230\u672c\u5730\u5e76\u4e0a\u4f20\u5230\u5185\u7f51\u670d\u52a1\u5668\uff0c\u8fdb\u5165\u5df2\u8054\u7f51\u7684Linux\u670d\u52a1\u5668\u4e0a\u8fdb\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u8fdb\u5165steedos\u6587\u4ef6\u5939\uff0c\u4fee\u6539 ",(0,d.jsx)(n.code,{children:"docker-compose.yml"})," \u6587\u4ef6\uff0c\u6dfb\u52a0\u73af\u5883\u53d8\u91cf\u7f13\u5b58unpkg\u5230\u672c\u5730\uff1a"]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-yaml",children:"    environment:\n      - NPM_CACHE_ENABLED=true\n      - NPM_CACHE_PACKAGE_INFO=true\n      - NPM_CACHE_PACKAGE_CONTENT=true\n      - NPM_REGISTRY_URL=https://registry.npmmirror.com\n"})}),"\n",(0,d.jsxs)(n.ol,{start:"2",children:["\n",(0,d.jsx)(n.li,{children:"\u542f\u52a8steedos\u670d\u52a1"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"docker compose up -d\n"})}),"\n",(0,d.jsxs)(n.ol,{start:"3",children:["\n",(0,d.jsxs)(n.li,{children:["\u5c06\u5f53\u524d\u8def\u5f84\u4e0b\u7684\u7f13\u5b58\u7684unpkg\u8d44\u4ea7\u5305\u6253\u5305\u6210 ",(0,d.jsx)(n.code,{children:"unpkg.tar.gz"}),"\uff0c\u4e0a\u4f20\u5230\u5185\u7f51\u670d\u52a1\u5668 ",(0,d.jsx)(n.code,{children:"steedos/storage"})," \u6587\u4ef6\u5939\u4e2d"]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"cd steedos/storage\ntar -czf unpkg.tar.gz unpkg\n"})}),"\n",(0,d.jsxs)(n.ol,{start:"4",children:["\n",(0,d.jsxs)(n.li,{children:["\u8fdb\u5165\u5185\u7f51\u670d\u52a1\u5668 ",(0,d.jsx)(n.code,{children:"steedos/storage"})," \u6587\u4ef6\u5939\u4e0b\uff0c\u89e3\u538b ",(0,d.jsx)(n.code,{children:"unpkg.tar.gz"})]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"cd steedos/storage\ntar -xzvf unpkg.tar.gz\n"})}),"\n",(0,d.jsxs)(n.ol,{start:"5",children:["\n",(0,d.jsxs)(n.li,{children:["\u8fdb\u5165\u5185\u7f51\u670d\u52a1\u5668 ",(0,d.jsx)(n.code,{children:"steedos"})," \u6587\u4ef6\u5939\u4e2d\uff0c\u91cd\u542fsteedos\u670d\u52a1"]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"cd steedos\ndocker compose down\ndocker compose up -d\n"})})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var d=s(96540);const l={},o=d.createContext(l);function r(e){const n=d.useContext(o);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),d.createElement(o.Provider,{value:n},e.children)}}}]);