(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{325:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return b}));var r=t(1),a=t(6),l=(t(0),t(381)),c={title:"\u914d\u7f6e\u4e1a\u52a1\u5bf9\u8c61"},o={id:"developer/guide_object",title:"\u914d\u7f6e\u4e1a\u52a1\u5bf9\u8c61",description:"\u6a21\u677f\u9879\u76ee\u5185\u7f6e\u4e86\u51e0\u4e2a [\u4e1a\u52a1\u5bf9\u8c61](object.md) \u63cf\u8ff0\u6587\u4ef6\uff0c\u4ee5 .object.yml \u7ed3\u5c3e\u3002\r",source:"@site/../docs/developer/guide_object.md",permalink:"/developer/guide_object",sidebar:"\u534e\u708e\u9b54\u65b9\u5f00\u53d1\u6587\u6863",previous:{title:"\u521b\u5efa\u9879\u76ee",permalink:"/developer/guide_create"},next:{title:"\u4e1a\u52a1\u5bf9\u8c61\u5173\u8054",permalink:"/developer/guide_relationship"}},i=[{value:"\u521b\u5efa\u4e1a\u52a1\u5bf9\u8c61\uff1a\u4e1a\u52a1\u4f19\u4f34",id:"\u521b\u5efa\u4e1a\u52a1\u5bf9\u8c61\uff1a\u4e1a\u52a1\u4f19\u4f34",children:[]},{value:"\u6dfb\u52a0\u5b57\u6bb5\uff1a\u540d\u79f0\u3001\u7535\u8bdd\u3001\u90ae\u7bb1...",id:"\u6dfb\u52a0\u5b57\u6bb5\uff1a\u540d\u79f0\u3001\u7535\u8bdd\u3001\u90ae\u7bb1",children:[]},{value:"\u8bbe\u7f6e\u89c6\u56fe\uff1a\u6240\u6709\u4e1a\u52a1\u4f19\u4f34",id:"\u8bbe\u7f6e\u89c6\u56fe\uff1a\u6240\u6709\u4e1a\u52a1\u4f19\u4f34",children:[]},{value:"\u5b9a\u4e49\u6743\u9650\uff1a\u6240\u6709\u4eba\u90fd\u80fd\u589e\u5220\u6539",id:"\u5b9a\u4e49\u6743\u9650\uff1a\u6240\u6709\u4eba\u90fd\u80fd\u589e\u5220\u6539",children:[]},{value:"\u4fee\u6539\u5e94\u7528\uff1a\u589e\u52a0\u4e1a\u52a1\u4f19\u4f34",id:"\u4fee\u6539\u5e94\u7528\uff1a\u589e\u52a0\u4e1a\u52a1\u4f19\u4f34",children:[]},{value:"\u8fd0\u884c\u5e76\u67e5\u770b\u6548\u679c",id:"\u8fd0\u884c\u5e76\u67e5\u770b\u6548\u679c",children:[]}],u={rightToc:i};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u6a21\u677f\u9879\u76ee\u5185\u7f6e\u4e86\u51e0\u4e2a ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/developer/object"}),"\u4e1a\u52a1\u5bf9\u8c61")," \u63cf\u8ff0\u6587\u4ef6\uff0c\u4ee5 .object.yml \u7ed3\u5c3e\u3002"),Object(l.b)("p",null,"Steedos \u7684\u795e\u5947\u4e4b\u5904\u6b63\u5728\u4e8e\u6b64\uff0c\u4f60\u53ea\u9700\u8981\u4fee\u6539\u4e1a\u52a1\u5bf9\u8c61\u914d\u7f6e\u6587\u4ef6\u5e76\u91cd\u65b0\u542f\u52a8\u670d\u52a1\uff0c\u6574\u4e2a\u7cfb\u7edf\u7684\u529f\u80fd\u90fd\u4f1a\u81ea\u52a8\u968f\u4e4b\u53d8\u5316\u3002"),Object(l.b)("p",null,"\u5982\u679c\u4f60\u4e0d\u9700\u8981\u76f8\u5173\u7684\u4e1a\u52a1\u5bf9\u8c61\uff0c\u76f4\u63a5\u5220\u9664\u5373\u53ef\u3002"),Object(l.b)("h2",{id:"\u521b\u5efa\u4e1a\u52a1\u5bf9\u8c61\uff1a\u4e1a\u52a1\u4f19\u4f34"},"\u521b\u5efa\u4e1a\u52a1\u5bf9\u8c61\uff1a\u4e1a\u52a1\u4f19\u4f34"),Object(l.b)("p",null,"\u5728src\u9879\u76ee\u6e90\u7801\u4e2d\u521b\u5efa\u4e00\u4e2a\u540d\u4e3aaccounts.object.yml\u6587\u4ef6\uff0c\u5f00\u5934\u914d\u7f6e\u4ee5\u4e0b\u5185\u5bb9\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"name: accounts\nlable: \u4e1a\u52a1\u4f19\u4f34\nicon: accounts\n")),Object(l.b)("h2",{id:"\u6dfb\u52a0\u5b57\u6bb5\uff1a\u540d\u79f0\u3001\u7535\u8bdd\u3001\u90ae\u7bb1"},"\u6dfb\u52a0\u5b57\u6bb5\uff1a\u540d\u79f0\u3001\u7535\u8bdd\u3001\u90ae\u7bb1..."),Object(l.b)("p",null,"\u5728accounts.object.yml\u4e2d\uff0c\u7ee7\u7eed\u914d\u7f6e\u76f8\u5173\u5b57\u6bb5:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"fields:\n  name:\n    label: \u540d\u79f0\n    type: text\n    defaultValue: ''\n    description: ''\n    inlineHelpText: ''\n    searchable: true\n    required: true\n    sortable: true\n  credit_code:\n    type: text\n    label: \u7edf\u4e00\u793e\u4f1a\u4fe1\u7528\u4ee3\u7801\n    inlineHelpText: '\u7cfb\u7edf\u6309\u7167\u6b64\u5b57\u6bb5\u6821\u9a8c\u91cd\u590d\uff0c\u907f\u514d\u91cd\u590d\u5f55\u5165\u5355\u4f4d\u4fe1\u606f\u3002'\n    required: true\n  priority:\n    label: \u4f18\u5148\u7ea7\n    type: select\n    sortable: true\n    options:\n      - label: \u9ad8\n        value: high\n      - label: \u4e2d\n        value: normal\n      - label: \u4f4e\n        value: low\n    filterable: true\n  registered_capital:\n    type: currency\n    label: \u6ce8\u518c\u8d44\u91d1\n    scale: 2\n  website:\n    type: url\n    label: \u7f51\u5740\n  phone:\n    type: text\n    label: \u7535\u8bdd\n    defaultValue: ''\n  email:\n    type: text\n    label: \u90ae\u7bb1\n  description:\n    label: \u5907\u6ce8\n    type: textarea\n    is_wide: true\n    name: description\n")),Object(l.b)("h2",{id:"\u8bbe\u7f6e\u89c6\u56fe\uff1a\u6240\u6709\u4e1a\u52a1\u4f19\u4f34"},"\u8bbe\u7f6e\u89c6\u56fe\uff1a\u6240\u6709\u4e1a\u52a1\u4f19\u4f34"),Object(l.b)("p",null,"\u5728accounts.object.yml\u4e2d\uff0c\u7ee7\u7eed\u914d\u7f6e\u4e1a\u52a1\u5bf9\u8c61\u7684\u89c6\u56fe:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"list_views:\n  all:\n    label: \u6240\u6709\u4e1a\u52a1\u4f19\u4f34\n    columns:\n      - name\n      - priority\n      - owner\n      - modified\n    filter_scope: space\n")),Object(l.b)("h2",{id:"\u5b9a\u4e49\u6743\u9650\uff1a\u6240\u6709\u4eba\u90fd\u80fd\u589e\u5220\u6539"},"\u5b9a\u4e49\u6743\u9650\uff1a\u6240\u6709\u4eba\u90fd\u80fd\u589e\u5220\u6539"),Object(l.b)("p",null,"\u5728accounts.object.yml\u4e2d\uff0c\u7ee7\u7eed\u914d\u7f6e\u4e1a\u52a1\u5bf9\u8c61\u7684\u6743\u9650\u96c6:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"permission_set:\n    user:\n        allowCreate: true\n        allowDelete: true\n        allowEdit: true\n        allowRead: true\n        modifyAllRecords: true\n        viewAllRecords: true\n")),Object(l.b)("h2",{id:"\u4fee\u6539\u5e94\u7528\uff1a\u589e\u52a0\u4e1a\u52a1\u4f19\u4f34"},"\u4fee\u6539\u5e94\u7528\uff1a\u589e\u52a0\u4e1a\u52a1\u4f19\u4f34"),Object(l.b)("p",null,"\u4fee\u6539src\u4e0b\u7684oa.app.yml\uff0c\u589e\u52a0\uff1a\u4e1a\u52a1\u4f19\u4f34 accounts"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"objects: \n  - instances\n  - accounts\n  - cms_posts\n  - announcements\n  - space_users\n  - tasks\n  - events\n")),Object(l.b)("h2",{id:"\u8fd0\u884c\u5e76\u67e5\u770b\u6548\u679c"},"\u8fd0\u884c\u5e76\u67e5\u770b\u6548\u679c"),Object(l.b)("p",null,Object(l.b)("img",Object(r.a)({parentName:"p"},{src:"/assets/guide_3.png",alt:"\u4e1a\u52a1\u4f19\u4f34"}))))}b.isMDXComponent=!0},381:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),b=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o({},n,{},e)),t},p=function(e){var n=b(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=b(t),d=r,m=p["".concat(c,".").concat(d)]||p[d]||s[d]||l;return t?a.a.createElement(m,o({ref:n},u,{components:t})):a.a.createElement(m,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,c=new Array(l);c[0]=d;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var u=2;u<l;u++)c[u]=t[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);