(self.webpackChunk=self.webpackChunk||[]).push([[492],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294),o=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o().createContext({}),u=function(e){var t=o().useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o().createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o().createElement(o().Fragment,{},t)}},b=o().forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,a=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,d=p["".concat(a,".").concat(b)]||p[b]||f[b]||l;return n?o().createElement(d,c(c({ref:t},i),{},{components:n})):o().createElement(d,c({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var i=2;i<l;i++)a[i]=n[i];return o().createElement.apply(null,a)}return o().createElement.apply(null,n)}b.displayName="MDXCreateElement"},72124:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return i},toc:function(){return u},default:function(){return f}});var r=n(74034),o=n(79973),l=(n(67294),n(3905)),a=["components"],c={title:"MongoDB\u53ef\u89c6\u5316\u5de5\u5177--Robo 3T \u4f7f\u7528\u6559\u7a0b"},s=void 0,i={unversionedId:"developer/install/robo3t_tutorial",id:"developer/install/robo3t_tutorial",isDocsHomePage:!1,title:"MongoDB\u53ef\u89c6\u5316\u5de5\u5177--Robo 3T \u4f7f\u7528\u6559\u7a0b",description:"1\u3001\u6253\u5f00Robo 3T\uff0c\u70b9\u51fb\u5de6\u4e0a\u89d2\u7684 create\u521b\u5efa\u4e00\u4e2a\u8fde\u63a5\uff0c\u7ed9\u8be5\u8fde\u63a5\u8d77\u4e2a\u540d\u5b57\uff0c\u5982\uff1alocalhost, \u4f7f\u7528\u9ed8\u8ba4\u5730\u5740 localhost \u548c \u7aef\u53e327017 \u5373\u53ef\uff0c\u70b9\u51fbsave\u4fdd\u5b58\u3002\u5982\u4e0b\u56fe\u6240\u793a",source:"@site/../docs/developer/install/robo3t_tutorial.md",sourceDirName:"developer/install",slug:"/developer/install/robo3t_tutorial",permalink:"/developer/install/robo3t_tutorial",version:"current",frontMatter:{title:"MongoDB\u53ef\u89c6\u5316\u5de5\u5177--Robo 3T \u4f7f\u7528\u6559\u7a0b"}},u=[{value:"1\u3001\u6253\u5f00Robo 3T\uff0c\u70b9\u51fb\u5de6\u4e0a\u89d2\u7684 create\u521b\u5efa\u4e00\u4e2a\u8fde\u63a5\uff0c\u7ed9\u8be5\u8fde\u63a5\u8d77\u4e2a\u540d\u5b57\uff0c\u5982\uff1alocalhost, \u4f7f\u7528\u9ed8\u8ba4\u5730\u5740 localhost \u548c \u7aef\u53e327017 \u5373\u53ef\uff0c\u70b9\u51fbsave\u4fdd\u5b58\u3002\u5982\u4e0b\u56fe\u6240\u793a",id:"1\u3001\u6253\u5f00robo-3t\uff0c\u70b9\u51fb\u5de6\u4e0a\u89d2\u7684-create\u521b\u5efa\u4e00\u4e2a\u8fde\u63a5\uff0c\u7ed9\u8be5\u8fde\u63a5\u8d77\u4e2a\u540d\u5b57\uff0c\u5982\uff1alocalhost-\u4f7f\u7528\u9ed8\u8ba4\u5730\u5740-localhost-\u548c-\u7aef\u53e327017-\u5373\u53ef\uff0c\u70b9\u51fbsave\u4fdd\u5b58\u3002\u5982\u4e0b\u56fe\u6240\u793a",children:[]},{value:"2\u3001\u70b9\u51fb\u4fdd\u5b58\u540e\uff0c\u5c31\u4f1a\u5728\u754c\u9762\u770b\u5230\u5982\u4e0b\u56fe\u6240\u793a",id:"2\u3001\u70b9\u51fb\u4fdd\u5b58\u540e\uff0c\u5c31\u4f1a\u5728\u754c\u9762\u770b\u5230\u5982\u4e0b\u56fe\u6240\u793a",children:[]},{value:"3\u3001\u53cc\u51fb localhost \u8fde\u63a5\u5230 MongoDB \u5e76\u8fdb\u5165\u4ea4\u4e92\u754c\u9762; \u6211\u4eec\u53ef\u4ee5\u770b\u5230\u6211\u4eec\u672c\u5730\u6570\u636e\u5e93\u7684\u8868\u4fe1\u606f\u5982\u4e0b\uff1a",id:"3\u3001\u53cc\u51fb-localhost-\u8fde\u63a5\u5230-mongodb-\u5e76\u8fdb\u5165\u4ea4\u4e92\u754c\u9762-\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u6211\u4eec\u672c\u5730\u6570\u636e\u5e93\u7684\u8868\u4fe1\u606f\u5982\u4e0b\uff1a",children:[]},{value:"4\u3001\u53f3\u952e\u6570\u636e\u5e93\u6253\u5f00Shell",id:"4\u3001\u53f3\u952e\u6570\u636e\u5e93\u6253\u5f00shell",children:[]},{value:"5\u3001\u6279\u91cf\u63d2\u5165\uff08\u9ed8\u8ba4\u662f\u4e0d\u652f\u6279\u91cf\u64cd\u4f5c\uff0c\u53ea\u80fd\u7528for\u5faa\u73af\uff09",id:"5\u3001\u6279\u91cf\u63d2\u5165\uff08\u9ed8\u8ba4\u662f\u4e0d\u652f\u6279\u91cf\u64cd\u4f5c\uff0c\u53ea\u80fd\u7528for\u5faa\u73af\uff09",children:[]},{value:"6\u3001\u67e5\u8be2\u6570\u636e",id:"6\u3001\u67e5\u8be2\u6570\u636e",children:[]}],p={toc:u};function f(e){var t=e.components,c=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"1\u3001\u6253\u5f00robo-3t\uff0c\u70b9\u51fb\u5de6\u4e0a\u89d2\u7684-create\u521b\u5efa\u4e00\u4e2a\u8fde\u63a5\uff0c\u7ed9\u8be5\u8fde\u63a5\u8d77\u4e2a\u540d\u5b57\uff0c\u5982\uff1alocalhost-\u4f7f\u7528\u9ed8\u8ba4\u5730\u5740-localhost-\u548c-\u7aef\u53e327017-\u5373\u53ef\uff0c\u70b9\u51fbsave\u4fdd\u5b58\u3002\u5982\u4e0b\u56fe\u6240\u793a"},"1\u3001\u6253\u5f00Robo 3T\uff0c\u70b9\u51fb\u5de6\u4e0a\u89d2\u7684 create\u521b\u5efa\u4e00\u4e2a\u8fde\u63a5\uff0c\u7ed9\u8be5\u8fde\u63a5\u8d77\u4e2a\u540d\u5b57\uff0c\u5982\uff1alocalhost, \u4f7f\u7528\u9ed8\u8ba4\u5730\u5740 localhost \u548c \u7aef\u53e327017 \u5373\u53ef\uff0c\u70b9\u51fbsave\u4fdd\u5b58\u3002\u5982\u4e0b\u56fe\u6240\u793a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"subscription",src:n(24337).Z})),(0,l.kt)("h3",{id:"2\u3001\u70b9\u51fb\u4fdd\u5b58\u540e\uff0c\u5c31\u4f1a\u5728\u754c\u9762\u770b\u5230\u5982\u4e0b\u56fe\u6240\u793a"},"2\u3001\u70b9\u51fb\u4fdd\u5b58\u540e\uff0c\u5c31\u4f1a\u5728\u754c\u9762\u770b\u5230\u5982\u4e0b\u56fe\u6240\u793a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"subscription",src:n(85214).Z})),(0,l.kt)("h3",{id:"3\u3001\u53cc\u51fb-localhost-\u8fde\u63a5\u5230-mongodb-\u5e76\u8fdb\u5165\u4ea4\u4e92\u754c\u9762-\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u6211\u4eec\u672c\u5730\u6570\u636e\u5e93\u7684\u8868\u4fe1\u606f\u5982\u4e0b\uff1a"},"3\u3001\u53cc\u51fb localhost \u8fde\u63a5\u5230 MongoDB \u5e76\u8fdb\u5165\u4ea4\u4e92\u754c\u9762; \u6211\u4eec\u53ef\u4ee5\u770b\u5230\u6211\u4eec\u672c\u5730\u6570\u636e\u5e93\u7684\u8868\u4fe1\u606f\u5982\u4e0b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"subscription",src:n(68592).Z})),(0,l.kt)("h3",{id:"4\u3001\u53f3\u952e\u6570\u636e\u5e93\u6253\u5f00shell"},"4\u3001\u53f3\u952e\u6570\u636e\u5e93\u6253\u5f00Shell"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"subscription",src:n(12252).Z})),(0,l.kt)("h3",{id:"5\u3001\u6279\u91cf\u63d2\u5165\uff08\u9ed8\u8ba4\u662f\u4e0d\u652f\u6279\u91cf\u64cd\u4f5c\uff0c\u53ea\u80fd\u7528for\u5faa\u73af\uff09"},"5\u3001\u6279\u91cf\u63d2\u5165\uff08\u9ed8\u8ba4\u662f\u4e0d\u652f\u6279\u91cf\u64cd\u4f5c\uff0c\u53ea\u80fd\u7528for\u5faa\u73af\uff09"),(0,l.kt)("p",null,"\u5728\u521a\u521a\u6253\u5f00\u7684shell\u7a97\u53e3\u8f93\u5165\u5982\u4e0b\u4ee3\u7801, \u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"subscription",src:n(64789).Z})),(0,l.kt)("p",null,"\u6570\u636e\u63d2\u5165\u5b8c\u6210\u540e\uff0c\u6211\u4eec\u518d\u6765\u770b\u4e0b\u6570\u636e\u5e93\u4f1a\u65b0\u589e\u4e0a\u9762\u51e0\u6761\u6570\u636e\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"subscription",src:n(35862).Z})),(0,l.kt)("h3",{id:"6\u3001\u67e5\u8be2\u6570\u636e"},"6\u3001\u67e5\u8be2\u6570\u636e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"6.1\u3001\u6839\u636e\u67e5\u8be2\u6761\u4ef6\u6765\u67e5\u8be2\u6570\u636e\uff0c\u5982\u4e0b\u65b9\u6cd5\u6240\u793a\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"{<\u5b57\u6bb5\u540d>:<\u5b57\u6bb5\u503c>}\n")),(0,l.kt)("p",null,"\u67e5\u8be2\u8bed\u53e5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"}," db.users.find({userName: 'longen---0'});\n")),(0,l.kt)("p",null,"\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"subscription",src:n(33203).Z})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"6.2\u3001\u53ef\u4ee5\u5728\u67e5\u8be2\u9009\u62e9\u5668\u4e2d\u6307\u5b9a\u9700\u8981\u67e5\u8be2\u7684\u5b57\u6bb5\u5e76\u9650\u5b9a\u5b57\u6bb5\u503c\u7684\u8303\u56f4\uff0c\u5982\u4e0b\u65b9\u6cd5\u6240\u793a\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"{<\u5b57\u6bb5\u540d>:{$in:[<\u5b57\u6bb5\u503c1>,<\u5b57\u6bb5\u503c2>...]}}\n")),(0,l.kt)("p",null,"\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"subscription",src:n(28363).Z})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"6.3\u3001\u6307\u5b9a\u591a\u4e2a\u5b57\u6bb5\u8fdb\u884c\u67e5\u8be2")),(0,l.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u6765\u67e5\u8be2\u8fd9\u4e9b\u6570\u636e\u4e2d type \u5b57\u6bb5\u503c\u7b49\u4e8e 'food', \u4e14 price\u5b57\u6bb5\u503c\u5c0f\u4e8e10\u7684\u6570\u636e\uff0c\u5982\u4e0b\u4ee3\u7801\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"db.users.find({type:'food', price:{$lt:10}});\n")),(0,l.kt)("p",null,"\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"subscription",src:n(80931).Z})),(0,l.kt)("p",null,"\u7b49\u7b49\uff0c\u67e5\u8be2\u8bed\u53e5\u548cmongodb\u67e5\u8be2\u8bed\u53e5\u7c7b\u578b\u76f8\u540c\u3002"))}f.isMDXComponent=!0},24337:function(e,t,n){"use strict";t.Z=n.p+"assets/images/robo3t01-d06336ffb0dd431fa84932620073294b.png"},85214:function(e,t,n){"use strict";t.Z=n.p+"assets/images/robo3t02-554dda442fa930dc535e63ee7338e61a.png"},68592:function(e,t,n){"use strict";t.Z=n.p+"assets/images/robo3t03-26706cc9dfabcbd87fa27c5a8d1a00cf.png"},12252:function(e,t,n){"use strict";t.Z=n.p+"assets/images/robo3t04-aefdb7ab46b336c25716cfca7f8f830a.png"},64789:function(e,t,n){"use strict";t.Z=n.p+"assets/images/robo3t05-bfbf97aeeea13c8565fe4f5bf4975d56.png"},35862:function(e,t,n){"use strict";t.Z=n.p+"assets/images/robo3t06-1b4b8aec1ba4a1f1c1dabe271b7488d5.png"},33203:function(e,t,n){"use strict";t.Z=n.p+"assets/images/robo3t07-eaae647cb8b2818b6485d24c0ab02647.png"},28363:function(e,t,n){"use strict";t.Z=n.p+"assets/images/robo3t08-01e4ef4083581c7ec8fb6a6403330bc0.png"},80931:function(e,t,n){"use strict";t.Z=n.p+"assets/images/robo3t09-e21706763418f645296e869867bbea72.png"}}]);