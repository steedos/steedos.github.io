(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{259:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return u}));var r=n(1),l=n(6),a=(n(0),n(380)),i={title:"\u7b5b\u9009\u6761\u4ef6"},c={id:"developer/object_filter_conditions",title:"\u7b5b\u9009\u6761\u4ef6",description:"\u5b9a\u4e49\u89c6\u56fe\u6216\u62a5\u8868\u65f6\uff0c\u53ef\u4ee5\u540c\u65f6\u5b9a\u4e49\u7b5b\u9009\u6761\u4ef6\uff0c\u53ea\u6709\u7b26\u5408\u7b5b\u9009\u6761\u4ef6\u7684\u6570\u636e\u624d\u663e\u793a\u5728\u89c6\u56fe/\u62a5\u8868\u4e2d\u3002",source:"@site/../docs/developer/object_filter_conditions.md",permalink:"/developer/object_filter_conditions",sidebar:"Steedos \u5f00\u53d1\u6587\u6863",previous:{title:"\u7edf\u8ba1\u62a5\u8868",permalink:"/developer/reports"},next:{title:"\u5b57\u6bb5\u516c\u5f0f",permalink:"/developer/object_field_formula"}},o=[{value:"\u914d\u7f6e\u7b5b\u9009\u6761\u4ef6",id:"\u914d\u7f6e\u7b5b\u9009\u6761\u4ef6",children:[{value:"\u7b5b\u9009\u6761\u4ef6",id:"\u7b5b\u9009\u6761\u4ef6",children:[]},{value:"\u5b57\u6bb5\u540d field",id:"\u5b57\u6bb5\u540d-field",children:[]},{value:"\u8fd0\u7b97\u7b26 operation",id:"\u8fd0\u7b97\u7b26-operation",children:[]},{value:"\u53ea\u8bfb readonly",id:"\u53ea\u8bfb-readonly",children:[]},{value:"\u5fc5\u586b required",id:"\u5fc5\u586b-required",children:[]}]},{value:"\u7b5b\u9009\u903b\u8f91 filter_logic",id:"\u7b5b\u9009\u903b\u8f91-filter_logic",children:[]},{value:"\u7b5b\u9009\u503c value",id:"\u7b5b\u9009\u503c-value",children:[{value:"\u503c\u4e3a\u7a7a",id:"\u503c\u4e3a\u7a7a",children:[]},{value:"\u503c\u4e3a\u6570\u7ec4",id:"\u503c\u4e3a\u6570\u7ec4",children:[]},{value:"\u503c\u4e3a\u516c\u5f0f",id:"\u503c\u4e3a\u516c\u5f0f",children:[]},{value:"\u503c\u4e3a\u65e5\u671f\u3001\u65f6\u95f4",id:"\u503c\u4e3a\u65e5\u671f\u3001\u65f6\u95f4",children:[]},{value:"\u503c\u4e3a\u51fd\u6570",id:"\u503c\u4e3a\u51fd\u6570",children:[]}]},{value:"filters",id:"filters",children:[]}],b={rightToc:o};function u(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u5b9a\u4e49\u89c6\u56fe\u6216\u62a5\u8868\u65f6\uff0c\u53ef\u4ee5\u540c\u65f6\u5b9a\u4e49\u7b5b\u9009\u6761\u4ef6\uff0c\u53ea\u6709\u7b26\u5408\u7b5b\u9009\u6761\u4ef6\u7684\u6570\u636e\u624d\u663e\u793a\u5728\u89c6\u56fe/\u62a5\u8868\u4e2d\u3002"),Object(a.b)("p",null,"\u4e1a\u52a1\u4eba\u5458\u53ef\u4ee5\u5728\u524d\u53f0\u754c\u9762\u4fee\u6539\u7b5b\u9009\u6761\u4ef6\u3002"),Object(a.b)("h2",{id:"\u914d\u7f6e\u7b5b\u9009\u6761\u4ef6"},"\u914d\u7f6e\u7b5b\u9009\u6761\u4ef6"),Object(a.b)("h3",{id:"\u7b5b\u9009\u6761\u4ef6"},"\u7b5b\u9009\u6761\u4ef6"),Object(a.b)("p",null,"\u4f7f\u7528\u6570\u7ec4\u7684\u683c\u5f0f\u5b9a\u4e49\u4e00\u4e2a\u6216\u591a\u4e2a\u7b5b\u9009\u6761\u4ef6\u3002\u4f8b\u5982\u4ee5\u4e0b\u7b5b\u9009\u5668\u7528\u4e8e\u67e5\u8be2\u672c\u6708\u521b\u5efa\u7684\uff0c\u8d23\u4efb\u4eba\u662f\u672c\u4eba\u7684\u6570\u636e\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"filter_conditions:\n  - field: priority\n    operation: =\n    value:\n    required: true\n  - field: owner\n    operation: =\n    value: {userId}\n    readonly: true\n  - field: created\n    operation: =\n    value: this_month\n")),Object(a.b)("h3",{id:"\u5b57\u6bb5\u540d-field"},"\u5b57\u6bb5\u540d field"),Object(a.b)("p",null,"\u6b64\u7b5b\u9009\u6761\u4ef6\u5bf9\u5e94\u7684\u5b57\u6bb5\u540d\uff0c\u5fc5\u987b\u8bbe\u7f6e\u3002"),Object(a.b)("h3",{id:"\u8fd0\u7b97\u7b26-operation"},"\u8fd0\u7b97\u7b26 operation"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'"=": \u7b49\u4e8e'),Object(a.b)("li",{parentName:"ul"},'"!="/"',"<",">",'": \u4e0d\u7b49\u4e8e'),Object(a.b)("li",{parentName:"ul"},'">": \u5927\u4e8e'),Object(a.b)("li",{parentName:"ul"},'">=": \u5927\u4e8e\u7b49\u4e8e'),Object(a.b)("li",{parentName:"ul"},'"<": \u5c0f\u4e8e'),Object(a.b)("li",{parentName:"ul"},'"<=": \u5c0f\u4e8e\u7b49\u4e8e'),Object(a.b)("li",{parentName:"ul"},'"startswith": \u4ee5...\u5f00\u59cb'),Object(a.b)("li",{parentName:"ul"},'"notstartswith": \u4e0d\u4ee5...\u5f00\u59cb'),Object(a.b)("li",{parentName:"ul"},'"endswith": \u4ee5...\u7ed3\u675f'),Object(a.b)("li",{parentName:"ul"},'"notendswith": \u4e0d\u4ee5...\u7ed3\u675f'),Object(a.b)("li",{parentName:"ul"},'"contains": \u5305\u542b...'),Object(a.b)("li",{parentName:"ul"},'"notcontains": \u4e0d\u5305\u542b...'),Object(a.b)("li",{parentName:"ul"},'"in": \u5c5e\u4e8e\u6570\u7ec4\uff0c"in array" \u7b49\u6548\u4e8e"= array"'),Object(a.b)("li",{parentName:"ul"},'"notin": \u4e0d\u5c5e\u4e8e\u6570\u7ec4\uff0c"notin array" \u7b49\u6548\u4e8e"',"<",">",' array"'),Object(a.b)("li",{parentName:"ul"},'"between": \u8303\u56f4')),Object(a.b)("h3",{id:"\u53ea\u8bfb-readonly"},"\u53ea\u8bfb readonly"),Object(a.b)("p",null,"\u8868\u793a\u6b64\u7b5b\u9009\u6761\u4ef6\u53ea\u8bfb\uff0c\u4e1a\u52a1\u4eba\u5458\u5728\u754c\u9762\u4e0a\u4e0d\u5f97\u4fee\u6539\u3002\u901a\u5e38\u7528\u6765\u63a7\u5236\u6743\u9650\uff0c\u786e\u4fdd\u7528\u6237\u53ea\u80fd\u770b\u5230\u6388\u6743\u7684\u6570\u636e\u3002"),Object(a.b)("h3",{id:"\u5fc5\u586b-required"},"\u5fc5\u586b required"),Object(a.b)("p",null,"\u8868\u793a\u6b64\u7b5b\u9009\u6761\u4ef6\u5fc5\u987b\u8bbe\u5b9a\uff0c\u4e1a\u52a1\u4eba\u5458\u5728\u754c\u9762\u4e0a\u5fc5\u987b\u9009\u4e2d\u4e86value\uff0c\u624d\u4f1a\u663e\u793a\u5217\u8868\u89c6\u56fe\u6216\u62a5\u8868\u3002"),Object(a.b)("h2",{id:"\u7b5b\u9009\u903b\u8f91-filter_logic"},"\u7b5b\u9009\u903b\u8f91 filter_logic"),Object(a.b)("p",null,"\u7b5b\u9009\u5668\u4e2d\u914d\u7f6e\u7684\u591a\u4e2a\u7b5b\u9009\u6761\u4ef6\uff0c\u9ed8\u8ba4\u4f7f\u7528 and \u903b\u8f91\u8fdb\u884c\u7ec4\u5408\u3002"),Object(a.b)("p",null,"\u4e0b\u4e00\u4e2a\u7248\u672c\uff0c\u7528\u6237\u53ef\u4ee5\u81ea\u5b9a\u4e49\u903b\u8f91\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"filter_logic: 1 OR 2\nfilter_logic: (1 OR 2) AND 3\nfilter_logic: NOT (1 OR 2)\n")),Object(a.b)("h2",{id:"\u7b5b\u9009\u503c-value"},"\u7b5b\u9009\u503c value"),Object(a.b)("p",null,"\u5b9a\u4e49\u7b5b\u9009\u6761\u4ef6\u7684\u7b5b\u9009\u503c\u6216\u7b5b\u9009\u8303\u56f4\u3002"),Object(a.b)("h3",{id:"\u503c\u4e3a\u7a7a"},"\u503c\u4e3a\u7a7a"),Object(a.b)("p",null,"\u5f53\u503c\u4e3a\u7a7a\u65f6\uff0c\u8868\u793a\u7531\u4e1a\u52a1\u4eba\u5458\u5728\u754c\u9762\u4e0a\u624b\u5de5\u9009\u62e9\u7b5b\u9009\u503c\u3002"),Object(a.b)("h3",{id:"\u503c\u4e3a\u6570\u7ec4"},"\u503c\u4e3a\u6570\u7ec4"),Object(a.b)("p",null,"\u4ee5\u4e0b\u7b5b\u9009\u6761\u4ef6\u7528\u4e8e\u67e5\u8be2 priority \u662f (high or normal) \u7684\u6570\u636e\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"filter_conditions:\n  - field: priority\n    operation: =\n    value:\n      - high\n      - normal\n")),Object(a.b)("p",null,"\u5176\u4e2d\u7684 = \u66ff\u6362\u4e3a contains\uff0c\u6548\u679c\u76f8\u540c\u3002"),Object(a.b)("p",null,"\u4ee5\u4e0b\u7b5b\u9009\u6761\u4ef6\u7528\u4e8e\u67e5\u8be2 priority \u4e0d\u662f (high or normal) \u7684\u6570\u636e\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"filter_conditions:\n  - field: priority\n    operation: !=\n    value:\n      - high\n      - normal\n")),Object(a.b)("p",null,"\u5176\u4e2d\u7684 != \u66ff\u6362\u4e3a notcontains\uff0c\u6548\u679c\u76f8\u540c\u3002"),Object(a.b)("p",null,"\u4ee5\u4e0b\u7b5b\u9009\u6761\u4ef6\u7528\u4e8e\u67e5\u8be2 age \u5728 20\uff5e30 \u4e4b\u95f4\u7684\u6570\u636e\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"filter_conditions:\n  - field: age\n    operation: between\n    value:\n      - 20\n      - 30\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"between\u53ea\u652f\u6301\u6570\u503c\u53ca\u65e5\u671f\u65f6\u95f4\u7c7b\u578b\uff0c\u4e14\u7b5b\u9009\u503c\u5fc5\u987b\u662f\u4e24\u4e2a\u5143\u7d20\u7684\u6570\u7ec4\u683c\u5f0f")),Object(a.b)("h3",{id:"\u503c\u4e3a\u516c\u5f0f"},"\u503c\u4e3a\u516c\u5f0f"),Object(a.b)("p",null,"\u7b5b\u9009\u6761\u4ef6\u4e2d\u5141\u8bb8\u6307\u5b9auserContext\u4e2d\u7684\u53d8\u91cf\u503c\uff0c\u4f8b\u5982\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"value: {userId}\nvalue: {spaceId}\nvalue: {name}\n")),Object(a.b)("h3",{id:"\u503c\u4e3a\u65e5\u671f\u3001\u65f6\u95f4"},"\u503c\u4e3a\u65e5\u671f\u3001\u65f6\u95f4"),Object(a.b)("p",null,"\u65e5\u671f\u548c\u65f6\u95f4\u7c7b\u578b\u7684\u5b57\u6bb5\uff0c\u5728\u6570\u636e\u5e93\u4e2d\u4fdd\u5b58\u7684\u90fd\u662fUTC\u65f6\u95f4\u3002\u5176\u4e2d\u65e5\u671f\u7c7b\u578b\u5b57\u6bb5\u5bf9\u5e94\u7684\u662f00:00:00\u3002"),Object(a.b)("p",null,"\u67e5\u8be2\u65e5\u671f\u65f6\u95f4\u7c7b\u578b\u5b57\u6bb5\u65f6\uff0c\u5fc5\u987b\u5148\u628a\u65f6\u95f4\u8f6c\u6362\u4e3aUTC\u65f6\u95f4\u683c\u5f0f\u518d\u6267\u884c\u67e5\u8be2\u3002"),Object(a.b)("p",null,"\u4f8b\u5982\u60f3\u8981\u67e5\u8be2 \u521b\u5efa\u65e5\u671f\u4e3a\u5317\u4eac\u65f6\u95f4\u4e0b\u534813:00\u4ee5\u524d\u7684\u6587\u6863\uff0c\u9700\u8981\u5148\u5c06\u5317\u4eac\u65f6\u95f4\u8f6c\u6362\u4e3aGMT\u65f6\u95f4\u518d\u6267\u884c\u67e5\u8be2\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),'filter_conditions:\n  - field: created\n    operation: <=\n    value: "2019-08-06T07:00:00Z"\n')),Object(a.b)("h3",{id:"\u503c\u4e3a\u51fd\u6570"},"\u503c\u4e3a\u51fd\u6570"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),'filter_conditions:\n  - field: object_name\n  - operation: =\n  - value: !!js/function |\n      function () {\n        return "project_issues"\n      }\n')),Object(a.b)("h2",{id:"filters"},"filters"),Object(a.b)("p",null,"\u7528\u6237\u5b9a\u4e49\u7684 filter_conditions \u548c filter_logic\uff0cSteedos\u7ec4\u5408\u8ba1\u7b97\u4e4b\u540e\uff0c\u6210\u4e3a\u7528\u4e8e\u67e5\u8be2\u6570\u636e\u7684 ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/developer/object_filter"}),"\u8fc7\u6ee4\u6761\u4ef6 filters")," \u3002"))}u.isMDXComponent=!0},380:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j}));var r=n(0),l=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var b=l.a.createContext({}),u=function(e){var t=l.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return l.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},O=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=u(n),O=r,j=p["".concat(i,".").concat(O)]||p[O]||d[O]||a;return n?l.a.createElement(j,c({ref:t},b,{components:n})):l.a.createElement(j,c({ref:t},b))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=O;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<a;b++)i[b]=n[b];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);