(self.webpackChunk=self.webpackChunk||[]).push([[2406],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return f}});var l=t(67294),r=t.n(l);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r().createContext({}),p=function(e){var n=r().useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return r().createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r().createElement(r().Fragment,{},n)}},m=r().forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,a=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=p(t),m=l,f=d["".concat(a,".").concat(m)]||d[m]||s[m]||i;return t?r().createElement(f,o(o({ref:n},c),{},{components:t})):r().createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,a=new Array(i);a[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var c=2;c<i;c++)a[c]=t[c];return r().createElement.apply(null,a)}return r().createElement.apply(null,t)}m.displayName="MDXCreateElement"},99571:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var l=t(74034),r=t(79973),i=(t(67294),t(3905)),a=["components"],o={title:"\u5217\u8868\u89c6\u56fe"},u=void 0,c={unversionedId:"developer/listview",id:"developer/listview",isDocsHomePage:!1,title:"\u5217\u8868\u89c6\u56fe",description:"\u5217\u8868\u89c6\u56fe\u7528\u6765\u5b9a\u4e49\u6570\u636e\u5217\u8868\u7684\u663e\u793a\u6837\u5f0f\uff0c\u5217\u8868\u89c6\u56fe\u53ef\u4ee5\u5b9a\u4e49\u663e\u793a\u7684\u5b57\u6bb5\u3001\u7b5b\u9009\u6761\u4ef6\u548c\u6392\u5e8f\u89c4\u5219\u7b49\u53c2\u6570\u3002 \u4f8b\u5982\u5bf9\u4e8e\u4efb\u52a1(Task)\u5bf9\u8c61\uff0c\u53ef\u4ee5\u5b9a\u4e49\u5f85\u529e\u4efb\u52a1\u3001\u5df2\u529e\u4efb\u52a1\u3001\u4ea4\u529e\u4efb\u52a1\u7b49\u591a\u4e2a\u89c6\u56fe\u3002",source:"@site/../docs/developer/listview.md",sourceDirName:"developer",slug:"/developer/listview",permalink:"/developer/listview",version:"current",frontMatter:{title:"\u5217\u8868\u89c6\u56fe"},sidebar:"\u6587\u6863",previous:{title:"\u7cfb\u7edf\u5185\u7f6e\u5b57\u6bb5",permalink:"/developer/inline_field"},next:{title:"\u5bf9\u8c61\u6743\u9650",permalink:"/developer/object_permission"}},p=[{value:"\u5217\u8868\u89c6\u56fe\u914d\u7f6e",id:"\u5217\u8868\u89c6\u56fe\u914d\u7f6e",children:[{value:"\u540d\u79f0 name",id:"\u540d\u79f0-name",children:[]},{value:"\u663e\u793a\u540d\u79f0 label",id:"\u663e\u793a\u540d\u79f0-label",children:[]},{value:"\u8fc7\u6ee4\u6761\u4ef6 filters",id:"\u8fc7\u6ee4\u6761\u4ef6-filters",children:[]},{value:"\u5217 columns",id:"\u5217-columns",children:[]},{value:"\u6392\u5e8f\u89c4\u5219 sort",id:"\u6392\u5e8f\u89c4\u5219-sort",children:[]},{value:"\u7528\u6237\u7b5b\u9009\u5b57\u6bb5 filter_fields",id:"\u7528\u6237\u7b5b\u9009\u5b57\u6bb5-filter_fields",children:[]},{value:"\u6eda\u52a8\u6761\u6837\u5f0f scrolling_mode",id:"\u6eda\u52a8\u6761\u6837\u5f0f-scrolling_mode",children:[]},{value:"\u8fc7\u6ee4\u8303\u56f4 filter_scope",id:"\u8fc7\u6ee4\u8303\u56f4-filter_scope",children:[]},{value:"\u5171\u4eab shared",id:"\u5171\u4eab-shared",children:[]}]},{value:"\u6700\u8fd1\u67e5\u770b\u89c6\u56fe",id:"\u6700\u8fd1\u67e5\u770b\u89c6\u56fe",children:[]},{value:"\u5217\u8868\u89c6\u56fe\u7528\u6237\u754c\u9762",id:"\u5217\u8868\u89c6\u56fe\u7528\u6237\u754c\u9762",children:[{value:"\u5feb\u901f\u7f16\u8f91",id:"\u5feb\u901f\u7f16\u8f91",children:[]},{value:"\u591a\u884c\u7f16\u8f91",id:"\u591a\u884c\u7f16\u8f91",children:[]},{value:"\u8c03\u6574\u5217\u8868\u6837\u5f0f",id:"\u8c03\u6574\u5217\u8868\u6837\u5f0f",children:[]},{value:"\u6570\u636e\u7b5b\u9009",id:"\u6570\u636e\u7b5b\u9009",children:[]},{value:"\u7ec4\u5408\u6392\u5e8f",id:"\u7ec4\u5408\u6392\u5e8f",children:[]}]},{value:"\u79fb\u52a8\u7aef\u5217\u8868\u89c6\u56fe\u914d\u7f6e",id:"\u79fb\u52a8\u7aef\u5217\u8868\u89c6\u56fe\u914d\u7f6e",children:[]}],d={toc:p};function s(e){var n=e.components,o=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,l.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5217\u8868\u89c6\u56fe\u7528\u6765\u5b9a\u4e49\u6570\u636e\u5217\u8868\u7684\u663e\u793a\u6837\u5f0f\uff0c\u5217\u8868\u89c6\u56fe\u53ef\u4ee5\u5b9a\u4e49\u663e\u793a\u7684\u5b57\u6bb5\u3001\u7b5b\u9009\u6761\u4ef6\u548c\u6392\u5e8f\u89c4\u5219\u7b49\u53c2\u6570\u3002 \u4f8b\u5982\u5bf9\u4e8e\u4efb\u52a1(Task)\u5bf9\u8c61\uff0c\u53ef\u4ee5\u5b9a\u4e49\u5f85\u529e\u4efb\u52a1\u3001\u5df2\u529e\u4efb\u52a1\u3001\u4ea4\u529e\u4efb\u52a1\u7b49\u591a\u4e2a\u89c6\u56fe\u3002"),(0,i.kt)("p",null,"\u6700\u7ec8\u7528\u6237\u5728\u754c\u9762\u4e0a\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u5207\u6362\u5217\u8868\u89c6\u56fe\uff0c\u589e\u52a0\u65b0\u7684",(0,i.kt)("a",{parentName:"p",href:"/developer/object_filter_conditions"},"\u7b5b\u9009\u6761\u4ef6"),"\uff0c\u4e5f\u53ef\u4ee5\u81ea\u5b9a\u4e49\u81ea\u5df1\u7684\u5217\u8868\u89c6\u56fe\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u5217\u8868\u89c6\u56fe\u6548\u679c",src:t(57368).Z})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'list_views:\n  priority_high:\n    label: \u91cd\u8981\u5ba2\u6237\n    columns:\n      - name\n      - priority\n      - owner\n      - modified\n    filters: [["priority", "=", "high"]]\n    filter_fields: ["priority", "owner", "modified"]\n    sort: [["modified", "asc"]]\n')),(0,i.kt)("h2",{id:"\u5217\u8868\u89c6\u56fe\u914d\u7f6e"},"\u5217\u8868\u89c6\u56fe\u914d\u7f6e"),(0,i.kt)("h3",{id:"\u540d\u79f0-name"},"\u540d\u79f0 name"),(0,i.kt)("p",null,"\u6bcf\u4e2a\u5bf9\u8c61\u4e0b\u7684\u89c6\u56fe\u540d\u79f0\u5fc5\u987b\u662f\u552f\u4e00\u7684\u3002\u89c6\u56fe\u540d\u79f0\u5fc5\u987b\u4ee5\u82f1\u6587\u5f00\u5934\uff0c\u7b26\u5408\u547d\u540d\u89c4\u8303\u3002"),(0,i.kt)("h3",{id:"\u663e\u793a\u540d\u79f0-label"},"\u663e\u793a\u540d\u79f0 label"),(0,i.kt)("p",null,"\u5217\u8868\u89c6\u56fe\u7684\u663e\u793a\u540d\u79f0\u663e\u793a\u5728\u5217\u8868\u5de6\u4e0a\u89d2\uff0c\u7528\u6237\u53ef\u4ee5\u70b9\u51fb\u4e0b\u62c9\u7bad\u5934\u5207\u6362\u5217\u8868\u89c6\u56fe\u3002\n\u5982\u679c\u672a\u8bbe\u7f6e\uff0c\u5219\u9ed8\u8ba4\u4e3a\u5217\u8868\u89c6\u56fe\u540d\u79f0\u3002"),(0,i.kt)("h3",{id:"\u8fc7\u6ee4\u6761\u4ef6-filters"},"\u8fc7\u6ee4\u6761\u4ef6 filters"),(0,i.kt)("p",null,"\u53ef\u4ee5\u8bbe\u5b9a\u5217\u8868\u89c6\u56fe\u7684",(0,i.kt)("a",{parentName:"p",href:"/developer/object_filter"},"\u8fc7\u6ee4\u6761\u4ef6(filters)"),"\uff0c\u53ea\u6709\u7b26\u5408\u8fc7\u6ee4\u6761\u4ef6\u7684\u6570\u636e\u624d\u4f1a\u663e\u793a\u5728\u5217\u8868\u4e2d\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'filters: [["priority", "=", "high"]]\n')),(0,i.kt)("h3",{id:"\u5217-columns"},"\u5217 columns"),(0,i.kt)("p",null,"\u5b9a\u4e49\u5728\u5217\u8868\u89c6\u56fe\u663e\u793a\u7684\u5217(columns)\uff1a\u5217\u8868\u4e0a\u663e\u793a\u54ea\u4e9b\u5b57\u6bb5\uff0c\u4ee5\u53ca\u663e\u793a\u7684\u5148\u540e\u987a\u5e8f\u3002\ncolumns\u9700\u5b9a\u4e49\u4e3a\u6570\u7ec4\uff0c\u5143\u7d20\u4e3a\u53ef\u4ee5\u662f\u5b57\u6bb5\u540d\u79f0\uff0c\u4e5f\u53ef\u4ee5\u662f\u4e00\u4e2a\u5217\u63cf\u8ff0\u5bf9\u8c61\u3002"),(0,i.kt)("p",null,"\u7b80\u8981\u5b9a\u4e49\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'columns: ["name", "priority", "owner", "modified"]\n')),(0,i.kt)("p",null,"\u9ad8\u7ea7\u5b9a\u4e49\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"columns: \n  - name\n  - field: priority \n    width: 100\n    wrap: true\n  - owner\n  - modified\n")),(0,i.kt)("p",null,"\u5217\u63cf\u8ff0\u5bf9\u8c61\u5c5e\u6027\u5982\u4e0b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"field: \u5b57\u6bb5\u540d\u3002"),(0,i.kt)("li",{parentName:"ul"},"width: \u5b57\u6bb5\u5bbd\u5ea6\uff0c\u4e0d\u586b\u5199\u4e3a\u81ea\u52a8\u5bbd\u5ea6\u3002"),(0,i.kt)("li",{parentName:"ul"},"wrap: \u663e\u793a\u6b64\u5b57\u6bb5\u65f6\u662f\u5426\u81ea\u52a8\u6362\u884c\uff0c\u9ed8\u8ba4\u4e3a\u4e0d\u6362\u884c\uff0c\u8d85\u51fa\u90e8\u5206\u663e\u793a\u4e3a... \u3002")),(0,i.kt)("h3",{id:"\u6392\u5e8f\u89c4\u5219-sort"},"\u6392\u5e8f\u89c4\u5219 sort"),(0,i.kt)("p",null,"\u5b9a\u4e86\u5217\u8868\u6570\u636e\u7684\u6392\u5e8f\u89c4\u5219\uff0c\u53ef\u4ee5\u8bbe\u5b9a\u591a\u4e2a\u5b57\u6bb5\u7684\u7ec4\u5408\u6392\u5e8f\u3002\u5982\u679c\u672a\u6307\u5b9a\uff0c\u9ed8\u8ba4\u7684\u6392\u5e8f\u89c4\u5219\u662f\u6309\u521b\u5efa\u65f6\u95f4\u5012\u5e8f\u6392\u5217\uff0c\u4e5f\u5c31\u662f\u5982\u4e0b\u4ee3\u7801\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'sort: [["create_date", "desc"]]\n')),(0,i.kt)("p",null,"\b\u6216"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"sort:\n  - field_name: create_date\n    order: desc\n")),(0,i.kt)("h3",{id:"\u7528\u6237\u7b5b\u9009\u5b57\u6bb5-filter_fields"},"\u7528\u6237\u7b5b\u9009\u5b57\u6bb5 filter_fields"),(0,i.kt)("p",null,"\u5217\u8868\u89c6\u56fe\u7684\u53f3\u4fa7\u6709\u8fc7\u6ee4\u5668\uff0c\u7528\u6237\u70b9\u51fb\u8fdb\u5165\u540e\u9ed8\u8ba4\u5c31\u6709\u8fd9\u4e9b\u9ed8\u8ba4\u7684\u8fc7\u6ee4\u5b57\u6bb5\uff0c\u53ef\u5feb\u901f\u8bbe\u7f6e\u8fc7\u6ee4\u6761\u4ef6\uff0c\u663e\u793a\u51fa\u7b26\u5408\u6761\u4ef6\u7684\u6570\u636e\u3002\nfilter_fields\u9700\u5b9a\u4e49\u4e3a\u6570\u7ec4\uff0c\u5143\u7d20\u4e3a\u5bf9\u8c61\u7684\u5b57\u6bb5\u540d\u79f0\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'filter_fields: ["priority", "owner", "modified"]\n')),(0,i.kt)("h3",{id:"\u6eda\u52a8\u6761\u6837\u5f0f-scrolling_mode"},"\u6eda\u52a8\u6761\u6837\u5f0f scrolling_mode"),(0,i.kt)("p",null,"\u5b9a\u4e49\u6570\u636e\u5217\u8868\u7684\u6eda\u52a8\u6761\u663e\u793a\u6837\u5f0f\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"standard\uff1a\u6309\u7167\u4f20\u7edf\u7684\u5206\u9875\u663e\u793a\uff0c\u70b9\u51fb\u9875\u7801\u52a0\u8f7d\u5bf9\u5e94\u9875\u9762\u7684\u6570\u636e\u3002"),(0,i.kt)("li",{parentName:"ul"},"virtual\uff1a\u901a\u8fc7\u6eda\u52a8\u6761\u5207\u6362\u9875\u9762\uff0c\u5f53\u6eda\u52a8\u5230\u5bf9\u5e94\u9875\u9762\u65f6\uff0c\u4f1a\u8fdc\u7a0b\u52a0\u8f7d\u6570\u636e\u3002"),(0,i.kt)("li",{parentName:"ul"},"infinite\uff1a\u6eda\u52a8\u5237\u65b0\uff0c\u521d\u59cb\u53ea\u52a0\u8f7d\u7b2c\u4e00\u9875\uff0c\u4e00\u8fb9\u6eda\u52a8\u4e00\u8fb9\u52a0\u8f7d\u4e0b\u4e00\u9875\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'scrolling_mode: "standard" # or "virtual" | "infinite"\n')),(0,i.kt)("h3",{id:"\u8fc7\u6ee4\u8303\u56f4-filter_scope"},"\u8fc7\u6ee4\u8303\u56f4 filter_scope"),(0,i.kt)("p",null,"\u76ee\u524d\u53ea\u652f\u6301\u4e24\u79cd\u8fc7\u6ee4\u8303\u56f4\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5de5\u4f5c\u533a space \uff08\u9ed8\u8ba4\uff09\uff1a\u53ea\u80fd\u5f53\u524d\u5de5\u4f5c\u533a\u7684\u6570\u636e"),(0,i.kt)("li",{parentName:"ul"},"\u6211\u7684 mine\uff1a\u53ea\u80fd\u67e5\u770b\u5f53\u524d\u767b\u5f55\u7528\u6237\u7684\u6570\u636e")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'filter_scope: "mine"\n')),(0,i.kt)("h3",{id:"\u5171\u4eab-shared"},"\u5171\u4eab shared"),(0,i.kt)("p",null,"\u8bbe\u7f6e\u662f\u5426\u5171\u4eab\u8be5\u89c6\u56fe\u7ed9\u5de5\u4f5c\u533a\u5176\u4ed6\u4eba\u5458\u3002\u53ea\u6709\u5de5\u4f5c\u533a\u7ba1\u7406\u5458\u53ef\u4ee5\u521b\u5efa\u5171\u4eab\u89c6\u56fe\uff0c\u5171\u4eab\u7684\u89c6\u56fe\u5de5\u4f5c\u533a\u5185\u6240\u6709\u7528\u6237\u90fd\u80fd\u770b\u5230\uff0c\u975e\u5171\u4eab\u7684\u89c6\u56fe\u53ea\u6709\u521b\u5efa\u8005\u81ea\u5df1\u53ef\u7528\u3002\n\u5f00\u53d1\u4eba\u5458\u7528\u4ee3\u7801\u5b9a\u4e49\u7684\u5217\u8868\u89c6\u56fe\u9ed8\u8ba4\u90fd\u662f\u5171\u4eab\u89c6\u56fe\u3002"),(0,i.kt)("h2",{id:"\u6700\u8fd1\u67e5\u770b\u89c6\u56fe"},"\u6700\u8fd1\u67e5\u770b\u89c6\u56fe"),(0,i.kt)("p",null,"\u7cfb\u7edf\u5185\u7f6e\u4e86\u4e00\u4e2arecent\u89c6\u56fe\uff0c\u7528\u4e8e\u663e\u793a\u7528\u6237\u5404\u81ea\u6700\u8fd1\u67e5\u770b\u7684\u8bb0\u5f55\u3002\u5f00\u53d1\u4eba\u5458\u53ea\u53ef\u4ee5\u4e3a\u6700\u8fd1\u67e5\u770b\u89c6\u56fe\u5b9a\u4e49 label\u3001 columns\uff0c\u5176\u4ed6\u53c2\u6570\u4e0d\u8d77\u4f5c\u7528\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"list_views:\n  recent:\n    label: \u6700\u8fd1\u67e5\u770b\n    columns:\n      - name\n      - priority\n      - owner\n      - modified\n")),(0,i.kt)("h2",{id:"\u5217\u8868\u89c6\u56fe\u7528\u6237\u754c\u9762"},"\u5217\u8868\u89c6\u56fe\u7528\u6237\u754c\u9762"),(0,i.kt)("h3",{id:"\u5feb\u901f\u7f16\u8f91"},"\u5feb\u901f\u7f16\u8f91"),(0,i.kt)("p",null,"\u53cc\u51fb\u5217\u8868\u4e2d\u7684\u5b57\u6bb5\uff0c\u53ef\u4ee5\u5feb\u901f\u7f16\u8f91\u6b64\u5b57\u6bb5\u7684\u5185\u5bb9\u3002"),(0,i.kt)("h3",{id:"\u591a\u884c\u7f16\u8f91"},"\u591a\u884c\u7f16\u8f91"),(0,i.kt)("p",null,"\u4f7f\u7528\u5217\u8868\u5de6\u4fa7\u7684\u68c0\u67e5\u6846\u9009\u4e2d\u591a\u6761\u8bb0\u5f55\uff0c\u7136\u540e\u518d\u53cc\u51fb\u5b57\u6bb5\uff0c\u53ef\u4ee5\u4e00\u6b21\u4fee\u6539\u591a\u6761\u8bb0\u5f55\u7684\u5185\u5bb9\u3002"),(0,i.kt)("h3",{id:"\u8c03\u6574\u5217\u8868\u6837\u5f0f"},"\u8c03\u6574\u5217\u8868\u6837\u5f0f"),(0,i.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u62d6\u62c9\u8c03\u6574\u5b57\u6bb5\u5bbd\u5ea6\uff0c\u4ee5\u53ca\u5b57\u6bb5\u663e\u793a\u7684\u5148\u540e\u987a\u5e8f\u3002"),(0,i.kt)("h3",{id:"\u6570\u636e\u7b5b\u9009"},"\u6570\u636e\u7b5b\u9009"),(0,i.kt)("p",null,"\u70b9\u51fb\u53f3\u4fa7\u7684\u8fc7\u6ee4\u5668\u56fe\u6807\uff0c\u4f1a\u5217\u51fa\u6b64\u5217\u8868\u89c6\u56fe\u4e2d\u6307\u5b9a\u7684\u5e38\u7528\u8fc7\u6ee4\u5b57\u6bb5\u3002\u9009\u4e2d\u5b57\u6bb5\u53ef\u4ee5\u8bbe\u5b9a\u7b5b\u9009\u6761\u4ef6\u3002\u70b9\u51fb\u201c\u6dfb\u52a0\u7b5b\u9009\u6761\u4ef6\u201d\uff0c\u53ef\u4ee5\u589e\u52a0\u65b0\u7684\u7b5b\u9009\u5b57\u6bb5\u3002"),(0,i.kt)("h3",{id:"\u7ec4\u5408\u6392\u5e8f"},"\u7ec4\u5408\u6392\u5e8f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9009\u4e2d\u9700\u8981\u6392\u5e8f\u7684\u7b2c\u4e00\u4e2a\u5b57\u6bb5\uff0c\u70b9\u51fb\u5217\u6807\u9898\u53ef\u4ee5\u6392\u5e8f\uff0c\u518d\u70b9\u4e00\u6b21\u53ef\u4ee5\u5207\u6362\u6392\u5e8f\u987a\u5e8f"),(0,i.kt)("li",{parentName:"ul"},"\u5728\u5217\u8868\u9898\u4e0a\u70b9\u51fb\u53f3\u952e\uff0c\u6216\u662f\u6309\u4f4f(SHIFT\u952e)\u518d\u70b9\u51fb\u5217\u6807\u9898\uff0c\u53ef\u4ee5\u8bbe\u5b9a\u591a\u4e2a\u5b57\u6bb5\u7684\u7ec4\u5408\u6392\u5e8f\u3002")),(0,i.kt)("h2",{id:"\u79fb\u52a8\u7aef\u5217\u8868\u89c6\u56fe\u914d\u7f6e"},"\u79fb\u52a8\u7aef\u5217\u8868\u89c6\u56fe\u914d\u7f6e"),(0,i.kt)("p",null,"\u5f53\u624b\u673a\u7aef\u663e\u793a\u7684\u5217\u533a\u522b\u4e8ePC\u7aef\u65f6\uff0c\u9700\u8981\u5355\u72ec\u914d\u7f6emobile_columns\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"list_views:\n  all:\n    label: \u6240\u6709\u5355\u4f4d\n    columns:\n      - field: name\n        width: 100\n        wrap: true\n      - priority\n      - owner\n      - modified\n    mobile_columns: \n      - amount\n      - field: priority\n    filter_fields:\n      - priority\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728\u79fb\u52a8\u7aef\u4f1a\u8bc6\u522bmobile_columns\u6765\u663e\u793a\u5bf9\u5e94\u7684\u5217\uff0c\u5982\u679c\u4e3a\u7a7a\u5219\u53d6\u5176columns"),(0,i.kt)("li",{parentName:"ul"},"columns/mobile_columns\u53ef\u4ee5\u914d\u7f6e\u4e3a\u5b57\u6bb5\u540d\uff0c\u4e5f\u53ef\u4ee5\u914d\u7f6e\u4e3a\u5bf9\u8c61\uff0c\u914d\u7f6e\u4e3a\u5bf9\u8c61\u65f6columns\u652f\u6301",(0,i.kt)("inlineCode",{parentName:"li"},"field,width,wrap"),"\u5c5e\u6027\uff0cmobile_columns\u6682\u65f6\u53ea\u652f\u6301",(0,i.kt)("inlineCode",{parentName:"li"},"field"),"\u5c5e\u6027")))}s.isMDXComponent=!0},57368:function(e,n,t){"use strict";n.Z=t.p+"assets/images/listview_guide-3667b25f936926be40c1167352a66a93.png"}}]);