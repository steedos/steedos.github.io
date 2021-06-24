(window.webpackJsonp=window.webpackJsonp||[]).push([[370],{441:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return i}));var a=t(3),r=t(7),o=(t(0),t(510)),c={title:"\u5b89\u88c5\u5f00\u53d1\u73af\u5883(Linux)"},l={unversionedId:"developer/linux",id:"developer/linux",isDocsHomePage:!1,title:"\u5b89\u88c5\u5f00\u53d1\u73af\u5883(Linux)",description:"Steedos\u9879\u76ee\u57fa\u4e8eNodeJS\u5f00\u53d1\uff0c\u9ed8\u8ba4\u4f7f\u7528MongoDB\u6570\u636e\u5e93\u3002\u60a8\u53ef\u4ee5\u5728 Windows\u3001Mac \u6216 Linux \u73af\u5883\u4e2d\u521b\u5efa\u3001\u5f00\u53d1\u548c\u8fd0\u884cSteedos\u9879\u76ee\u3002",source:"@site/../docs/developer/linux.md",slug:"/developer/linux",permalink:"/developer/linux",version:"current"},b=[{value:"\u5b89\u88c5NodeJS 10.x\u7248\u672c",id:"\u5b89\u88c5nodejs-10x\u7248\u672c",children:[]},{value:"\u5b89\u88c5yarn",id:"\u5b89\u88c5yarn",children:[]},{value:"\u5b89\u88c5MongoDB",id:"\u5b89\u88c5mongodb",children:[]},{value:"\u5b89\u88c5 steedos \u5ba2\u6237\u7aef\u5de5\u5177",id:"\u5b89\u88c5-steedos-\u5ba2\u6237\u7aef\u5de5\u5177",children:[]},{value:"\u5b89\u88c5\u7248\u672c\u7ba1\u7406\u5de5\u5177\uff08\u53ef\u9009\uff09",id:"\u5b89\u88c5\u7248\u672c\u7ba1\u7406\u5de5\u5177\uff08\u53ef\u9009\uff09",children:[]},{value:"\u5b89\u88c5\u6e90\u7801\u7f16\u8f91\u5de5\u5177 (\u53ef\u9009)",id:"\u5b89\u88c5\u6e90\u7801\u7f16\u8f91\u5de5\u5177-\u53ef\u9009",children:[]}],d={toc:b};function i(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Steedos\u9879\u76ee\u57fa\u4e8eNodeJS\u5f00\u53d1\uff0c\u9ed8\u8ba4\u4f7f\u7528MongoDB\u6570\u636e\u5e93\u3002\u60a8\u53ef\u4ee5\u5728 Windows\u3001Mac \u6216 Linux \u73af\u5883\u4e2d\u521b\u5efa\u3001\u5f00\u53d1\u548c\u8fd0\u884cSteedos\u9879\u76ee\u3002"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u662fLinux\u73af\u5883\uff0c\u8bf7\u7ee7\u7eed\u9605\u8bfb\u672c\u6587\uff0c\u5b8c\u6210\u5f00\u53d1\u73af\u5883\u7684\u5b89\u88c5\u3002"),Object(o.b)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u662fWindows\u73af\u5883\uff0c\u8bf7\u53c2\u8003 ",Object(o.b)("a",{parentName:"li",href:"/developer/guide"},"\u5b89\u88c5\u5f00\u53d1\u73af\u5883(Windows)")," \u3002"),Object(o.b)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u662fMac\u73af\u5883\uff0c\u8bf7\u53c2\u8003",Object(o.b)("a",{parentName:"li",href:"/developer/mac"},"\u5b89\u88c5\u5f00\u53d1\u73af\u5883(Mac)"),"\u3002")),Object(o.b)("h2",{id:"\u5b89\u88c5nodejs-10x\u7248\u672c"},"\u5b89\u88c5NodeJS 10.x\u7248\u672c"),Object(o.b)("h5",{id:"\u4e0b\u8f7dnodejs-10x"},"\u4e0b\u8f7dNodeJS 10.x"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"wget https://nodejs.org/download/release/v10.17.0/node-v10.17.0-linux-x64.tar.gz\n")),Object(o.b)("h5",{id:"\u89e3\u538b"},"\u89e3\u538b"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"tar -zxvf node -v10.17.0-linux-x64.tar.gz\n")),Object(o.b)("h5",{id:"\u5c06node\u79fb\u5230usrlocalnode"},"\u5c06node\u79fb\u5230/usr/local/node"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"mv node-v10.17.0-linux-x64 /usr/local/node\n")),Object(o.b)("h5",{id:"\u914d\u7f6e\u73af\u5883\u53d8\u91cf"},"\u914d\u7f6e\u73af\u5883\u53d8\u91cf"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"vi /etc/profile\nexport PATH=$PATH:/usr/local/node/bin\n")),Object(o.b)("h5",{id:"\u67e5\u770bnode\u7248\u672c"},"\u67e5\u770bnode\u7248\u672c"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"node -v\n")),Object(o.b)("h5",{id:"\u5b89\u88c5npm"},"\u5b89\u88c5npm"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"sodu apt install npm\n")),Object(o.b)("h5",{id:"\u67e5\u770bnpm\u7248\u672c"},"\u67e5\u770bnpm\u7248\u672c"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"npm -v\n")),Object(o.b)("h2",{id:"\u5b89\u88c5yarn"},"\u5b89\u88c5yarn"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"node install yarn\n")),Object(o.b)("h2",{id:"\u5b89\u88c5mongodb"},"\u5b89\u88c5MongoDB"),Object(o.b)("h5",{id:"\u4e0b\u8f7d"},"\u4e0b\u8f7d"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"curl -O https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.6.17.tgz\n")),Object(o.b)("h5",{id:"\u89e3\u538b-1"},"\u89e3\u538b"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"tar -zxvf mongodb-linux-x86_64-3.6.17.tgz\n")),Object(o.b)("p",null,"\u5c06\u89e3\u538b\u5305\u62f7\u8d1d\u5230\u6307\u5b9a\u76ee\u5f55"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"mv mongodb-linux-x86_64-3.6.17/ /usr/local/mongodb\n")),Object(o.b)("p",null,"MongoDB \u7684\u53ef\u6267\u884c\u6587\u4ef6\u4f4d\u4e8ebin\u76ee\u5f55\u4e0b\uff0c\u6240\u4ee5\u53ef\u4ee5\u5c06\u5176\u6dfb\u52a0\u5230PATH\u8def\u5f84\u4e2d\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"export PATH=<mongodb-install-directory>/bin:$PATH\n")),Object(o.b)("h5",{id:"\u521b\u5efa\u6570\u636e\u5e93\u76ee\u5f55"},"\u521b\u5efa\u6570\u636e\u5e93\u76ee\u5f55"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /data/db\n")),Object(o.b)("h5",{id:"\u542f\u52a8mongodb\u670d\u52a1"},"\u542f\u52a8MongoDB\u670d\u52a1"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"./mongod\n")),Object(o.b)("h2",{id:"\u5b89\u88c5-steedos-\u5ba2\u6237\u7aef\u5de5\u5177"},"\u5b89\u88c5 steedos \u5ba2\u6237\u7aef\u5de5\u5177"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"yarn global add steedos-cli\n")),Object(o.b)("h2",{id:"\u5b89\u88c5\u7248\u672c\u7ba1\u7406\u5de5\u5177\uff08\u53ef\u9009\uff09"},"\u5b89\u88c5\u7248\u672c\u7ba1\u7406\u5de5\u5177\uff08\u53ef\u9009\uff09"),Object(o.b)("p",null,"\u8bf7\u5b89\u88c5 ",Object(o.b)("a",{parentName:"p",href:"https://desktop.github.com/"}," Github Desktop")," ,\u7528\u4e8e\u7ba1\u7406\u9879\u76ee\u6e90\u7801\u3002\u5982\u679c\u60a8\u8fd8\u6ca1\u6709Github\u8d26\u6237\uff0c\u5efa\u8bae\u60a8\u5148\u6ce8\u518c\u4e00\u4e2a\u3002"),Object(o.b)("h2",{id:"\u5b89\u88c5\u6e90\u7801\u7f16\u8f91\u5de5\u5177-\u53ef\u9009"},"\u5b89\u88c5\u6e90\u7801\u7f16\u8f91\u5de5\u5177 (\u53ef\u9009)"),Object(o.b)("p",null,"\u8bf7\u5b89\u88c5 ",Object(o.b)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"Visual Studio Code"),"\u3002\u5e76\u5b89\u88c5 Steedos \u96c6\u6210\u63d2\u4ef6",Object(o.b)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml"},"redhat.vscode-yaml")," ,\u60a8\u5728\u7f16\u5199\u914d\u7f6e\u6587\u4ef6\u65f6\u5982\u679c\u6709\u8bed\u6cd5\u9519\u8bef\uff0cVisual Studio Code \u4f1a\u81ea\u52a8\u63d0\u793a\u3002"))}i.isMDXComponent=!0},510:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=r.a.createContext({}),i=function(e){var n=r.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=i(e.components);return r.a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=b(e,["components","mdxType","originalType","parentName"]),u=i(t),s=a,m=u["".concat(c,".").concat(s)]||u[s]||p[s]||o;return t?r.a.createElement(m,l(l({ref:n},d),{},{components:t})):r.a.createElement(m,l({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=s;var l={};for(var b in n)hasOwnProperty.call(n,b)&&(l[b]=n[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var d=2;d<o;d++)c[d]=t[d];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);