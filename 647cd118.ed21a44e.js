(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{238:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(510)),c={title:"\u5b89\u88c5\u5f00\u53d1\u73af\u5883(Mac)"},l={unversionedId:"developer/mac",id:"developer/mac",isDocsHomePage:!1,title:"\u5b89\u88c5\u5f00\u53d1\u73af\u5883(Mac)",description:"Steedos\u9879\u76ee\u57fa\u4e8eNodeJS\u5f00\u53d1\uff0c\u9ed8\u8ba4\u4f7f\u7528MongoDB\u6570\u636e\u5e93\u3002\u60a8\u53ef\u4ee5\u5728 Windows\u3001Mac \u6216 Linux \u73af\u5883\u4e2d\u521b\u5efa\u3001\u5f00\u53d1\u548c\u8fd0\u884cSteedos\u9879\u76ee\u3002",source:"@site/../docs/developer/mac.md",slug:"/developer/mac",permalink:"/developer/mac",version:"current"},b=[{value:"\u5b89\u88c5NodeJS",id:"\u5b89\u88c5nodejs",children:[]},{value:"\u5b89\u88c5\u6570\u636e\u5e93\u670d\u52a1\u5668",id:"\u5b89\u88c5\u6570\u636e\u5e93\u670d\u52a1\u5668",children:[]},{value:"\u5b89\u88c5 steedos \u5ba2\u6237\u7aef\u5de5\u5177",id:"\u5b89\u88c5-steedos-\u5ba2\u6237\u7aef\u5de5\u5177",children:[]},{value:"\u5b89\u88c5\u7248\u672c\u7ba1\u7406\u5de5\u5177\uff08\u53ef\u9009\uff09",id:"\u5b89\u88c5\u7248\u672c\u7ba1\u7406\u5de5\u5177\uff08\u53ef\u9009\uff09",children:[]},{value:"\u5b89\u88c5\u6e90\u7801\u7f16\u8f91\u5de5\u5177 (\u53ef\u9009)",id:"\u5b89\u88c5\u6e90\u7801\u7f16\u8f91\u5de5\u5177-\u53ef\u9009",children:[]}],i={toc:b};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Steedos\u9879\u76ee\u57fa\u4e8eNodeJS\u5f00\u53d1\uff0c\u9ed8\u8ba4\u4f7f\u7528MongoDB\u6570\u636e\u5e93\u3002\u60a8\u53ef\u4ee5\u5728 Windows\u3001Mac \u6216 Linux \u73af\u5883\u4e2d\u521b\u5efa\u3001\u5f00\u53d1\u548c\u8fd0\u884cSteedos\u9879\u76ee\u3002"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u662fMac\u73af\u5883\uff0c\u8bf7\u7ee7\u7eed\u9605\u8bfb\u672c\u6587\uff0c\u5b8c\u6210\u5f00\u53d1\u73af\u5883\u7684\u5b89\u88c5\u3002"),Object(o.b)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u662fWindows\u73af\u5883\uff0c\u8bf7\u53c2\u8003 ",Object(o.b)("a",{parentName:"li",href:"/developer/guide"},"\u5b89\u88c5\u5f00\u53d1\u73af\u5883(Windows)")," \u3002"),Object(o.b)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u662fLinux\u73af\u5883\uff0c\u8bf7\u53c2\u8003",Object(o.b)("a",{parentName:"li",href:"/developer/linux"},"\u5b89\u88c5\u5f00\u53d1\u73af\u5883(Linux)"),"\u3002")),Object(o.b)("h2",{id:"\u5b89\u88c5nodejs"},"\u5b89\u88c5NodeJS"),Object(o.b)("p",null,"\u8bf7\u5b89\u88c5\u4e0e\u64cd\u4f5c\u7cfb\u7edf\u5bf9\u5e94\u7684NodeJS v10.x\u7248\u672c",Object(o.b)("br",null),"\n\u5177\u4f53\u64cd\u4f5c\u5982\u4e0b\uff1a",Object(o.b)("br",null)),Object(o.b)("h5",{id:"\u5b89\u88c5brew"},"\u5b89\u88c5brew"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"\n')),Object(o.b)("h5",{id:"\u5b89\u88c5nvm"},"\u5b89\u88c5nvm"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"brew install nvm\n")),Object(o.b)("h5",{id:"\u4e0b\u8f7dyarn"},"\u4e0b\u8f7dyarn"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"brew install yarn\n")),Object(o.b)("h5",{id:"\u4e0b\u8f7dnodejs-v10x\u7248\u672c"},"\u4e0b\u8f7dNodeJS v10.x\u7248\u672c"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"npm install -g n\nsudo n 10.17.0\n")),Object(o.b)("h2",{id:"\u5b89\u88c5\u6570\u636e\u5e93\u670d\u52a1\u5668"},"\u5b89\u88c5\u6570\u636e\u5e93\u670d\u52a1\u5668"),Object(o.b)("p",null,"\u8bf7\u5b89\u88c5 ",Object(o.b)("a",{parentName:"p",href:"https://www.mongodb.com/download-center/community"},"MongoDB Community Server v3.6 \u7248\u672c")," ",Object(o.b)("br",null),"\n\u5177\u4f53\u64cd\u4f5c\u5982\u4e0b:",Object(o.b)("br",null)),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"\u7ec8\u7aef\u8f93\u5165\uff1a")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"brew tap mongodb/brew\nbrew install mongodb-community@3.6\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"mongo\u4f5c\u4e3a\u670d\u52a1\u8fd0\u884c")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"brew services start mongodb-community@3.6\n")),Object(o.b)("h2",{id:"\u5b89\u88c5-steedos-\u5ba2\u6237\u7aef\u5de5\u5177"},"\u5b89\u88c5 steedos \u5ba2\u6237\u7aef\u5de5\u5177"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"yarn global add steedos-cli\n")),Object(o.b)("h2",{id:"\u5b89\u88c5\u7248\u672c\u7ba1\u7406\u5de5\u5177\uff08\u53ef\u9009\uff09"},"\u5b89\u88c5\u7248\u672c\u7ba1\u7406\u5de5\u5177\uff08\u53ef\u9009\uff09"),Object(o.b)("p",null,"\u8bf7\u5b89\u88c5 ",Object(o.b)("a",{parentName:"p",href:"https://desktop.github.com/"}," Github Desktop")," ,\u7528\u4e8e\u7ba1\u7406\u9879\u76ee\u6e90\u7801\u3002\u5982\u679c\u60a8\u8fd8\u6ca1\u6709Github\u8d26\u6237\uff0c\u5efa\u8bae\u60a8\u5148\u6ce8\u518c\u4e00\u4e2a\u3002"),Object(o.b)("h2",{id:"\u5b89\u88c5\u6e90\u7801\u7f16\u8f91\u5de5\u5177-\u53ef\u9009"},"\u5b89\u88c5\u6e90\u7801\u7f16\u8f91\u5de5\u5177 (\u53ef\u9009)"),Object(o.b)("p",null,"\u8bf7\u5b89\u88c5 ",Object(o.b)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"Visual Studio Code"),"\u3002\u5e76\u5b89\u88c5 Steedos \u96c6\u6210\u63d2\u4ef6",Object(o.b)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml"},"redhat.vscode-yaml")," ,\u60a8\u5728\u7f16\u5199\u914d\u7f6e\u6587\u4ef6\u65f6\u5982\u679c\u6709\u8bed\u6cd5\u9519\u8bef\uff0cVisual Studio Code \u4f1a\u81ea\u52a8\u63d0\u793a\u3002"))}u.isMDXComponent=!0},510:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||s[d]||o;return n?a.a.createElement(m,l(l({ref:t},i),{},{components:n})):a.a.createElement(m,l({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<o;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);