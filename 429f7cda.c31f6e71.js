(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{177:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(6),i=(n(0),n(401)),c={title:"\u64cd\u4f5c\u6309\u94ae"},l={id:"developer/object_action",title:"\u64cd\u4f5c\u6309\u94ae",description:"\u7cfb\u7edf\u5185\u7f6e\u4e09\u4e2a\u57fa\u672c\u64cd\u4f5c\uff1a\u65b0\u589e(`standard_new`)\u3001\u4fee\u6539(`standard_edit`)\u3001\u5220\u9664(`standard_delete`)\u3002",source:"@site/../docs/developer/object_action.md",permalink:"/developer/object_action",sidebar:"Steedos \u5f00\u53d1\u6587\u6863",previous:{title:"\u5bf9\u8c61\u6d41\u7a0b\u6620\u5c04",permalink:"/developer/object_workflow"},next:{title:"\u8868\u5355\u4e8b\u4ef6",permalink:"/developer/object_form"}},o=[{value:"\u58f0\u660e\u5bf9\u8c61\u7684\u64cd\u4f5c\u6309\u94ae",id:"\u58f0\u660e\u5bf9\u8c61\u7684\u64cd\u4f5c\u6309\u94ae",children:[]},{value:"\u58f0\u660e\u64cd\u4f5c\u6309\u94ae\u7684\u52a8\u4f5c",id:"\u58f0\u660e\u64cd\u4f5c\u6309\u94ae\u7684\u52a8\u4f5c",children:[]},{value:"\u4f7f\u7528\u4ee3\u7801\u7f16\u5199\u64cd\u4f5c\u6309\u94ae\u5b9e\u4f8b",id:"\u4f7f\u7528\u4ee3\u7801\u7f16\u5199\u64cd\u4f5c\u6309\u94ae\u5b9e\u4f8b",children:[]}],b={rightToc:o};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u7cfb\u7edf\u5185\u7f6e\u4e09\u4e2a\u57fa\u672c\u64cd\u4f5c\uff1a\u65b0\u589e(",Object(i.b)("inlineCode",{parentName:"p"},"standard_new"),")\u3001\u4fee\u6539(",Object(i.b)("inlineCode",{parentName:"p"},"standard_edit"),")\u3001\u5220\u9664(",Object(i.b)("inlineCode",{parentName:"p"},"standard_delete"),")\u3002"),Object(i.b)("p",null,"\u5728\u6b64\u57fa\u7840\u4e0a\uff0c\u7528\u6237\u53ef\u4ee5\u81ea\u5b9a\u4e49\u6309\u94ae\uff0c\u5e76\u7f16\u5199javascript\u811a\u672c\u6267\u884c\u60f3\u8981\u7684\u64cd\u4f5c\u3002"),Object(i.b)("h3",{id:"\u58f0\u660e\u5bf9\u8c61\u7684\u64cd\u4f5c\u6309\u94ae"},"\u58f0\u660e\u5bf9\u8c61\u7684\u64cd\u4f5c\u6309\u94ae"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"xxx.object.yml")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"label: \u6309\u94ae\u663e\u793a\u6807\u7b7e"),Object(i.b)("li",{parentName:"ul"},"on: \u663e\u793a\u4f4d\u7f6e ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},'"list" \u4e3a\u5217\u8868\u5b9a\u4e49action\uff0c\u53ea\u663e\u793a\u5728\u5217\u8868\u53f3\u4e0a\u89d2'),Object(i.b)("li",{parentName:"ul"},'"record" \u4e3a\u8bb0\u5f55\u5b9a\u4e49action\uff0c\u663e\u793a\u5728\u8bb0\u5f55\u67e5\u770b\u9875\u53f3\u4e0a\u89d2\uff0c\u4ee5\u53ca\u5217\u8868\u89c6\u56fe\u4e2d\u6bcf\u9879\u7684\u4e0b\u62c9\u83dc\u5355\u4e2d'),Object(i.b)("li",{parentName:"ul"},'"record_more" \u4e3a\u8bb0\u5f55\u5b9a\u4e49action\uff0c\u663e\u793a\u5728\u8bb0\u5f55\u67e5\u770b\u9875\u53f3\u4e0a\u89d2\u7684\u201c\u66f4\u591a\u201d\u4e0b\u62c9\u83dc\u5355\u4e2d\uff0c\u4ee5\u53ca\u5217\u8868\u89c6\u56fe\u4e2d\u6bcf\u9879\u7684\u4e0b\u62c9\u83dc\u5355\u4e2d'),Object(i.b)("li",{parentName:"ul"},'"list_item" \u4e3a\u8bb0\u5f55\u5b9a\u4e49action\uff0c\u53ea\u663e\u793a\u5728\u5217\u8868\u89c6\u56fe\u4e2d\u6bcf\u9879\u7684\u4e0b\u62c9\u83dc\u5355\u4e2d'),Object(i.b)("li",{parentName:"ul"},'"record_only" \u4e3a\u8bb0\u5f55\u5b9a\u4e49action\uff0c\u53ea\u663e\u793a\u5728\u8bb0\u5f55\u67e5\u770b\u9875\u53f3\u4e0a\u89d2'),Object(i.b)("li",{parentName:"ul"},'"record_only_more" \u4e3a\u8bb0\u5f55\u5b9a\u4e49action\uff0c\u53ea\u663e\u793a\u5728\u8bb0\u5f55\u67e5\u770b\u9875\u53f3\u4e0a\u89d2\u7684\u201c\u66f4\u591a\u201d\u4e0b\u62c9\u83dc\u5355\u4e2d'))),Object(i.b)("li",{parentName:"ul"},"sort: \u6392\u5e8f\u53f7\uff0c\u663e\u793a\u65f6\uff0c\u6309\u7167\u4ece\u5c0f\u5230\u8fbe\u987a\u5e8f\u6392\u5217\u3002\u7f16\u8f91action\u7684sort\u9ed8\u8ba4\u4e3a0")),Object(i.b)("h3",{id:"\u58f0\u660e\u64cd\u4f5c\u6309\u94ae\u7684\u52a8\u4f5c"},"\u58f0\u660e\u64cd\u4f5c\u6309\u94ae\u7684\u52a8\u4f5c"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"xxx.action.js")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"listenTo: \u5bf9\u8c61\u540d\u79f0\uff0c\u9009\u586b\u3002\u5982\u679c\u6ca1\u6709\u5b9a\u4e49\u6b64\u5c5e\u6027\uff0c\u5219\u53d6\u6587\u4ef6\u540d\u4e2d\u7b2c\u4e00\u4e2a ",Object(i.b)("inlineCode",{parentName:"li"},".")," \u4e4b\u524d\u7684\u6587\u5b57\u4f5c\u4e3alistenTo\u7684\u503c"),Object(i.b)("li",{parentName:"ul"},"[\u64cd\u4f5c\u6309\u94ae\u540d\u79f0]",": Function(object_name, record_id), \u6309\u94ae\u70b9\u51fb\u540e\u8981\u6267\u884c\u7684javascript\u811a\u672c",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u53c2\u6570",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"object_name: \u5bf9\u8c61\u540d\u79f0"),Object(i.b)("li",{parentName:"ul"},"record_id: \u8bb0\u5f55\u552f\u4e00\u6807\u8bc6"))),Object(i.b)("li",{parentName:"ul"},"this",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"object_name: \u5bf9\u8c61\u540d\u79f0"),Object(i.b)("li",{parentName:"ul"},"record_id: \u8bb0\u5f55\u552f\u4e00\u6807\u8bc6, \u4ec5",Object(i.b)("inlineCode",{parentName:"li"},"on"),"\u4e3a",Object(i.b)("inlineCode",{parentName:"li"},"record"),"\u3001",Object(i.b)("inlineCode",{parentName:"li"},"record_more"),"\u3001",Object(i.b)("inlineCode",{parentName:"li"},"record_only"),"\u65f6\u5b58\u5728"),Object(i.b)("li",{parentName:"ul"},"object: \u5bf9\u8c61"),Object(i.b)("li",{parentName:"ul"},"action: \u64cd\u4f5c"),Object(i.b)("li",{parentName:"ul"},"record: \u5f53\u524d\u8bb0\u5f55, \u4ec5",Object(i.b)("inlineCode",{parentName:"li"},"on"),"\u4e3a",Object(i.b)("inlineCode",{parentName:"li"},"record"),"\u3001",Object(i.b)("inlineCode",{parentName:"li"},"record_more"),"\u3001",Object(i.b)("inlineCode",{parentName:"li"},"record_only"),"\u65f6\u5b58\u5728"))))),Object(i.b)("li",{parentName:"ul"},"[\u64cd\u4f5c\u6309\u94ae\u540d\u79f0]","Visible: Function(object_name, record_id, record_permissions) | boolean, \u7528\u6237\u63a7\u5236\u6309\u94ae\u662f\u5426\u663e\u793a",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u8fd4\u56de\u503c\uff1a boolean;"),Object(i.b)("li",{parentName:"ul"},"\u53c2\u6570",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"object_name: \u5bf9\u8c61\u540d\u79f0"),Object(i.b)("li",{parentName:"ul"},"record_id: \u8bb0\u5f55\u552f\u4e00\u6807\u8bc6"),Object(i.b)("li",{parentName:"ul"},"record_permissions: \u8bb0\u5f55\u6743\u9650")))))),Object(i.b)("h3",{id:"\u4f7f\u7528\u4ee3\u7801\u7f16\u5199\u64cd\u4f5c\u6309\u94ae\u5b9e\u4f8b"},"\u4f7f\u7528\u4ee3\u7801\u7f16\u5199\u64cd\u4f5c\u6309\u94ae\u5b9e\u4f8b"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"test.object.yml")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"...\nactions:\n  openWindow:\n    label: \u6253\u5f00\u7f51\u7ad9\n    on: list\n  standard_new:\n    visible: false //\u7981\u7528\u65b0\u589e\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"test.action.js")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"module.exports = {\n  openWindow: function(){\n    window.open('https://www.steedos.com');\n  },\n\n  openWindowVisible: function(){\n    //... \u63a7\u5236\u6b64action\u662f\u5426\u663e\u793a\n    return true\n  }\n}\n")))}p.isMDXComponent=!0},401:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,j=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?a.a.createElement(j,l({ref:t},b,{components:n})):a.a.createElement(j,l({ref:t},b))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var b=2;b<i;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);