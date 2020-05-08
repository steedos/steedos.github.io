(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{335:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return i}));var a=n(1),r=n(6),c=(n(0),n(393)),o={title:"\u5b89\u88c5\u5f00\u53d1\u73af\u5883(Linux)"},b={id:"developer/linux",title:"\u5b89\u88c5\u5f00\u53d1\u73af\u5883(Linux)",description:"Steedos\u9879\u76ee\u57fa\u4e8eNodeJS\u5f00\u53d1\uff0c\u9ed8\u8ba4\u4f7f\u7528MongoDB\u6570\u636e\u5e93\u3002\u60a8\u53ef\u4ee5\u5728 Windows\u3001Mac \u6216 Linux \u73af\u5883\u4e2d\u521b\u5efa\u3001\u5f00\u53d1\u548c\u8fd0\u884cSteedos\u9879\u76ee\u3002",source:"@site/../docs/developer/linux.md",permalink:"/developer/linux"},l=[{value:"\u5b89\u88c5NodeJS 10.x\u7248\u672c",id:"\u5b89\u88c5nodejs-10x\u7248\u672c",children:[]},{value:"\u5b89\u88c5yarn",id:"\u5b89\u88c5yarn",children:[]},{value:"\u5b89\u88c5MongoDB",id:"\u5b89\u88c5mongodb",children:[]},{value:"\u5b89\u88c5 steedos \u5ba2\u6237\u7aef\u5de5\u5177",id:"\u5b89\u88c5-steedos-\u5ba2\u6237\u7aef\u5de5\u5177",children:[]},{value:"\u5b89\u88c5\u7248\u672c\u7ba1\u7406\u5de5\u5177\uff08\u53ef\u9009\uff09",id:"\u5b89\u88c5\u7248\u672c\u7ba1\u7406\u5de5\u5177\uff08\u53ef\u9009\uff09",children:[]},{value:"\u5b89\u88c5\u6e90\u7801\u7f16\u8f91\u5de5\u5177 (\u53ef\u9009)",id:"\u5b89\u88c5\u6e90\u7801\u7f16\u8f91\u5de5\u5177-\u53ef\u9009",children:[]}],d={rightToc:l};function i(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Steedos\u9879\u76ee\u57fa\u4e8eNodeJS\u5f00\u53d1\uff0c\u9ed8\u8ba4\u4f7f\u7528MongoDB\u6570\u636e\u5e93\u3002\u60a8\u53ef\u4ee5\u5728 Windows\u3001Mac \u6216 Linux \u73af\u5883\u4e2d\u521b\u5efa\u3001\u5f00\u53d1\u548c\u8fd0\u884cSteedos\u9879\u76ee\u3002"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u662fLinux\u73af\u5883\uff0c\u8bf7\u7ee7\u7eed\u9605\u8bfb\u672c\u6587\uff0c\u5b8c\u6210\u5f00\u53d1\u73af\u5883\u7684\u5b89\u88c5\u3002"),Object(c.b)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u662fWindows\u73af\u5883\uff0c\u8bf7\u53c2\u8003 ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/developer/guide"}),"\u5b89\u88c5\u5f00\u53d1\u73af\u5883(Windows)")," \u3002"),Object(c.b)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u662fMac\u73af\u5883\uff0c\u8bf7\u53c2\u8003",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/developer/mac"}),"\u5b89\u88c5\u5f00\u53d1\u73af\u5883(Mac)"),"\u3002")),Object(c.b)("h2",{id:"\u5b89\u88c5nodejs-10x\u7248\u672c"},"\u5b89\u88c5NodeJS 10.x\u7248\u672c"),Object(c.b)("h5",{id:"\u4e0b\u8f7dnodejs-10x"},"\u4e0b\u8f7dNodeJS 10.x"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"wget https://nodejs.org/download/release/v10.17.0/node-v10.17.0-linux-x64.tar.gz\n")),Object(c.b)("h5",{id:"\u89e3\u538b"},"\u89e3\u538b"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"tar -zxvf node -v10.17.0-linux-x64.tar.gz\n")),Object(c.b)("h5",{id:"\u5c06node\u79fb\u5230usrlocalnode"},"\u5c06node\u79fb\u5230/usr/local/node"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mv node-v10.17.0-linux-x64 /usr/local/node\n")),Object(c.b)("h5",{id:"\u914d\u7f6e\u73af\u5883\u53d8\u91cf"},"\u914d\u7f6e\u73af\u5883\u53d8\u91cf"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"vi /etc/profile\nexport PATH=$PATH:/usr/local/node/bin\n")),Object(c.b)("h5",{id:"\u67e5\u770bnode\u7248\u672c"},"\u67e5\u770bnode\u7248\u672c"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"node -v\n")),Object(c.b)("h5",{id:"\u5b89\u88c5npm"},"\u5b89\u88c5npm"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sodu apt install npm\n")),Object(c.b)("h5",{id:"\u67e5\u770bnpm\u7248\u672c"},"\u67e5\u770bnpm\u7248\u672c"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm -v\n")),Object(c.b)("h2",{id:"\u5b89\u88c5yarn"},"\u5b89\u88c5yarn"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"node install yarn\n")),Object(c.b)("h2",{id:"\u5b89\u88c5mongodb"},"\u5b89\u88c5MongoDB"),Object(c.b)("h5",{id:"\u4e0b\u8f7d"},"\u4e0b\u8f7d"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"curl -O https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.6.17.tgz\n")),Object(c.b)("h5",{id:"\u89e3\u538b-1"},"\u89e3\u538b"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"tar -zxvf mongodb-linux-x86_64-3.6.17.tgz\n")),Object(c.b)("p",null,"\u5c06\u89e3\u538b\u5305\u62f7\u8d1d\u5230\u6307\u5b9a\u76ee\u5f55"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mv mongodb-linux-x86_64-3.6.17/ /usr/local/mongodb\n")),Object(c.b)("p",null,"MongoDB \u7684\u53ef\u6267\u884c\u6587\u4ef6\u4f4d\u4e8ebin\u76ee\u5f55\u4e0b\uff0c\u6240\u4ee5\u53ef\u4ee5\u5c06\u5176\u6dfb\u52a0\u5230PATH\u8def\u5f84\u4e2d\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"export PATH=<mongodb-install-directory>/bin:$PATH\n")),Object(c.b)("h5",{id:"\u521b\u5efa\u6570\u636e\u5e93\u76ee\u5f55"},"\u521b\u5efa\u6570\u636e\u5e93\u76ee\u5f55"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mkdir -p /data/db\n")),Object(c.b)("h5",{id:"\u542f\u52a8mongodb\u670d\u52a1"},"\u542f\u52a8MongoDB\u670d\u52a1"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"./mongod\n")),Object(c.b)("h2",{id:"\u5b89\u88c5-steedos-\u5ba2\u6237\u7aef\u5de5\u5177"},"\u5b89\u88c5 steedos \u5ba2\u6237\u7aef\u5de5\u5177"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn global add steedos-cli\n")),Object(c.b)("h2",{id:"\u5b89\u88c5\u7248\u672c\u7ba1\u7406\u5de5\u5177\uff08\u53ef\u9009\uff09"},"\u5b89\u88c5\u7248\u672c\u7ba1\u7406\u5de5\u5177\uff08\u53ef\u9009\uff09"),Object(c.b)("p",null,"\u8bf7\u5b89\u88c5 ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://desktop.github.com/"})," Github Desktop")," ,\u7528\u4e8e\u7ba1\u7406\u9879\u76ee\u6e90\u7801\u3002\u5982\u679c\u60a8\u8fd8\u6ca1\u6709Github\u8d26\u6237\uff0c\u5efa\u8bae\u60a8\u5148\u6ce8\u518c\u4e00\u4e2a\u3002"),Object(c.b)("h2",{id:"\u5b89\u88c5\u6e90\u7801\u7f16\u8f91\u5de5\u5177-\u53ef\u9009"},"\u5b89\u88c5\u6e90\u7801\u7f16\u8f91\u5de5\u5177 (\u53ef\u9009)"),Object(c.b)("p",null,"\u8bf7\u5b89\u88c5 ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://code.visualstudio.com/"}),"Visual Studio Code"),"\u3002\u5e76\u5b89\u88c5 Steedos \u96c6\u6210\u63d2\u4ef6",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml"}),"redhat.vscode-yaml")," ,\u60a8\u5728\u7f16\u5199\u914d\u7f6e\u6587\u4ef6\u65f6\u5982\u679c\u6709\u8bed\u6cd5\u9519\u8bef\uff0cVisual Studio Code \u4f1a\u81ea\u52a8\u63d0\u793a\u3002"))}i.isMDXComponent=!0},393:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),i=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):b({},t,{},e)),n},p=function(e){var t=i(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=i(n),s=a,O=p["".concat(o,".").concat(s)]||p[s]||u[s]||c;return n?r.a.createElement(O,b({ref:t},d,{components:n})):r.a.createElement(O,b({ref:t},d))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=s;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:a,o[1]=b;for(var d=2;d<c;d++)o[d]=n[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);