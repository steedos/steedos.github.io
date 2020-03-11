(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{229:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return b})),n.d(a,"metadata",(function(){return o})),n.d(a,"rightToc",(function(){return l})),n.d(a,"default",(function(){return s}));var t=n(1),c=n(6),r=(n(0),n(267)),b={title:"\u5b89\u88c5\u5f00\u53d1\u73af\u5883(Linux)"},o={id:"developer/linux",title:"\u5b89\u88c5\u5f00\u53d1\u73af\u5883(Linux)",description:"Steedos\u9879\u76ee\u57fa\u4e8eNodeJS\u5f00\u53d1\uff0c\u9ed8\u8ba4\u4f7f\u7528MongoDB\u6570\u636e\u5e93\u3002\u60a8\u53ef\u4ee5\u5728 Windows\u3001Mac \u6216 Linux \u73af\u5883\u4e2d\u521b\u5efa\u3001\u5f00\u53d1\u548c\u8fd0\u884cSteedos\u9879\u76ee\u3002",source:"@site/../docs/developer/linux.md",permalink:"/docs/developer/linux"},l=[{value:"\u5b89\u88c5NodeJS 10.x\u7248\u672c",id:"\u5b89\u88c5nodejs-10x\u7248\u672c",children:[]},{value:"\u5b89\u88c5yarn",id:"\u5b89\u88c5yarn",children:[]},{value:"\u5b89\u88c5MongoDB",id:"\u5b89\u88c5mongodb",children:[]},{value:"\u5b89\u88c5 steedos \u5ba2\u6237\u7aef\u5de5\u5177",id:"\u5b89\u88c5-steedos-\u5ba2\u6237\u7aef\u5de5\u5177",children:[]},{value:"\u5b89\u88c5\u7248\u672c\u7ba1\u7406\u5de5\u5177\uff08\u53ef\u9009\uff09",id:"\u5b89\u88c5\u7248\u672c\u7ba1\u7406\u5de5\u5177\uff08\u53ef\u9009\uff09",children:[]},{value:"\u5b89\u88c5\u6e90\u7801\u7f16\u8f91\u5de5\u5177 (\u53ef\u9009)",id:"\u5b89\u88c5\u6e90\u7801\u7f16\u8f91\u5de5\u5177-\u53ef\u9009",children:[]}],d={rightToc:l},i="wrapper";function s(e){var a=e.components,n=Object(c.a)(e,["components"]);return Object(r.b)(i,Object(t.a)({},d,n,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Steedos\u9879\u76ee\u57fa\u4e8eNodeJS\u5f00\u53d1\uff0c\u9ed8\u8ba4\u4f7f\u7528MongoDB\u6570\u636e\u5e93\u3002\u60a8\u53ef\u4ee5\u5728 Windows\u3001Mac \u6216 Linux \u73af\u5883\u4e2d\u521b\u5efa\u3001\u5f00\u53d1\u548c\u8fd0\u884cSteedos\u9879\u76ee\u3002"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u662fLinux\u73af\u5883\uff0c\u8bf7\u7ee7\u7eed\u9605\u8bfb\u672c\u6587\uff0c\u5b8c\u6210\u5f00\u53d1\u73af\u5883\u7684\u5b89\u88c5\u3002"),Object(r.b)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u662fWindows\u73af\u5883\uff0c\u8bf7\u53c2\u8003 ",Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"/docs/developer/guide"}),"\u5b89\u88c5\u5f00\u53d1\u73af\u5883(Windows)")," \u3002"),Object(r.b)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u662fMac\u73af\u5883\uff0c\u8bf7\u53c2\u8003",Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"/docs/developer/mac"}),"\u5b89\u88c5\u5f00\u53d1\u73af\u5883(Mac)"),"\u3002")),Object(r.b)("h2",{id:"\u5b89\u88c5nodejs-10x\u7248\u672c"},"\u5b89\u88c5NodeJS 10.x\u7248\u672c"),Object(r.b)("h5",{id:"\u4e0b\u8f7dnodejs-10x"},"\u4e0b\u8f7dNodeJS 10.x"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"wget https://nodejs.org/download/release/v10.17.0/node-v10.17.0-linux-x64.tar.gz\n")),Object(r.b)("h5",{id:"\u89e3\u538b"},"\u89e3\u538b"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"tar -zxvf node -v10.17.0-linux-x64.tar.gz\n")),Object(r.b)("h5",{id:"\u5c06node\u79fb\u5230usrlocalnode"},"\u5c06node\u79fb\u5230/usr/local/node"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"mv node-v10.17.0-linux-x64 /usr/local/node\n")),Object(r.b)("h5",{id:"\u914d\u7f6e\u73af\u5883\u53d8\u91cf"},"\u914d\u7f6e\u73af\u5883\u53d8\u91cf"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"vi /etc/profile\nexport PATH=$PATH:/usr/local/node/bin\n")),Object(r.b)("h5",{id:"\u67e5\u770bnode\u7248\u672c"},"\u67e5\u770bnode\u7248\u672c"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"node -v\n")),Object(r.b)("h5",{id:"\u5b89\u88c5npm"},"\u5b89\u88c5npm"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"sodu apt install npm\n")),Object(r.b)("h5",{id:"\u67e5\u770bnpm\u7248\u672c"},"\u67e5\u770bnpm\u7248\u672c"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"npm -v\n")),Object(r.b)("h2",{id:"\u5b89\u88c5yarn"},"\u5b89\u88c5yarn"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"node install yarn\n")),Object(r.b)("h2",{id:"\u5b89\u88c5mongodb"},"\u5b89\u88c5MongoDB"),Object(r.b)("h5",{id:"\u4e0b\u8f7d"},"\u4e0b\u8f7d"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"curl -O https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.6.17.tgz\n")),Object(r.b)("h5",{id:"\u89e3\u538b-1"},"\u89e3\u538b"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"tar -zxvf mongodb-linux-x86_64-3.6.17.tgz\n")),Object(r.b)("p",null,"\u5c06\u89e3\u538b\u5305\u62f7\u8d1d\u5230\u6307\u5b9a\u76ee\u5f55"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"mv mongodb-linux-x86_64-3.6.17/ /usr/local/mongodb\n")),Object(r.b)("p",null,"MongoDB \u7684\u53ef\u6267\u884c\u6587\u4ef6\u4f4d\u4e8ebin\u76ee\u5f55\u4e0b\uff0c\u6240\u4ee5\u53ef\u4ee5\u5c06\u5176\u6dfb\u52a0\u5230PATH\u8def\u5f84\u4e2d\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"export PATH=<mongodb-install-directory>/bin:$PATH\n")),Object(r.b)("h5",{id:"\u521b\u5efa\u6570\u636e\u5e93\u76ee\u5f55"},"\u521b\u5efa\u6570\u636e\u5e93\u76ee\u5f55"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"mkdir -p /data/db\n")),Object(r.b)("h5",{id:"\u542f\u52a8mongodb\u670d\u52a1"},"\u542f\u52a8MongoDB\u670d\u52a1"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"./mongod\n")),Object(r.b)("h2",{id:"\u5b89\u88c5-steedos-\u5ba2\u6237\u7aef\u5de5\u5177"},"\u5b89\u88c5 steedos \u5ba2\u6237\u7aef\u5de5\u5177"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"yarn global add steedos-cli\n")),Object(r.b)("h2",{id:"\u5b89\u88c5\u7248\u672c\u7ba1\u7406\u5de5\u5177\uff08\u53ef\u9009\uff09"},"\u5b89\u88c5\u7248\u672c\u7ba1\u7406\u5de5\u5177\uff08\u53ef\u9009\uff09"),Object(r.b)("p",null,"\u8bf7\u5b89\u88c5 ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://desktop.github.com/"})," Github Desktop")," ,\u7528\u4e8e\u7ba1\u7406\u9879\u76ee\u6e90\u7801\u3002\u5982\u679c\u60a8\u8fd8\u6ca1\u6709Github\u8d26\u6237\uff0c\u5efa\u8bae\u60a8\u5148\u6ce8\u518c\u4e00\u4e2a\u3002"),Object(r.b)("h2",{id:"\u5b89\u88c5\u6e90\u7801\u7f16\u8f91\u5de5\u5177-\u53ef\u9009"},"\u5b89\u88c5\u6e90\u7801\u7f16\u8f91\u5de5\u5177 (\u53ef\u9009)"),Object(r.b)("p",null,"\u8bf7\u5b89\u88c5 ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://code.visualstudio.com/"}),"Visual Studio Code"),"\u3002\u5e76\u5b89\u88c5 Steedos \u96c6\u6210\u63d2\u4ef6",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml"}),"redhat.vscode-yaml")," ,\u60a8\u5728\u7f16\u5199\u914d\u7f6e\u6587\u4ef6\u65f6\u5982\u679c\u6709\u8bed\u6cd5\u9519\u8bef\uff0cVisual Studio Code \u4f1a\u81ea\u52a8\u63d0\u793a\u3002"))}s.isMDXComponent=!0},267:function(e,a,n){"use strict";n.d(a,"a",(function(){return o})),n.d(a,"b",(function(){return s}));var t=n(0),c=n.n(t),r=c.a.createContext({}),b=function(e){var a=c.a.useContext(r),n=a;return e&&(n="function"==typeof e?e(a):Object.assign({},a,e)),n},o=function(e){var a=b(e.components);return c.a.createElement(r.Provider,{value:a},e.children)};var l="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return c.a.createElement(c.a.Fragment,{},a)}},i=Object(t.forwardRef)((function(e,a){var n=e.components,t=e.mdxType,r=e.originalType,o=e.parentName,l=function(e,a){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===a.indexOf(t)&&(n[t]=e[t]);return n}(e,["components","mdxType","originalType","parentName"]),i=b(n),s=t,p=i[o+"."+s]||i[s]||d[s]||r;return n?c.a.createElement(p,Object.assign({},{ref:a},l,{components:n})):c.a.createElement(p,Object.assign({},{ref:a},l))}));function s(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=n.length,b=new Array(r);b[0]=i;var o={};for(var d in a)hasOwnProperty.call(a,d)&&(o[d]=a[d]);o.originalType=e,o[l]="string"==typeof e?e:t,b[1]=o;for(var s=2;s<r;s++)b[s]=n[s];return c.a.createElement.apply(null,b)}return c.a.createElement.apply(null,n)}i.displayName="MDXCreateElement"}}]);