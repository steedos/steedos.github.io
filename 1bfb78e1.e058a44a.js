(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{370:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},d=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,j=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return n?r.a.createElement(j,i({ref:t},b,{components:n})):r.a.createElement(j,i({ref:t},b))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var b=2;b<o;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(6),o=(n(0),n(370)),c={},i={id:"developer/api/odata_standard_api",title:"odata_standard_api",description:"## \u63d0\u4f9b\u7ed9\u7528\u6237\u4f7f\u7528\u7684 odata \u6807\u51c6\u51fd\u6570",source:"@site/../docs/developer/api/odata_standard_api.md",permalink:"/developer/api/odata_standard_api"},l=[{value:"\u63d0\u4f9b\u7ed9\u7528\u6237\u4f7f\u7528\u7684 odata \u6807\u51c6\u51fd\u6570",id:"\u63d0\u4f9b\u7ed9\u7528\u6237\u4f7f\u7528\u7684-odata-\u6807\u51c6\u51fd\u6570",children:[{value:"\u67e5\u8be2\u4e00\u6761\u8bb0\u5f55",id:"\u67e5\u8be2\u4e00\u6761\u8bb0\u5f55",children:[]},{value:"\u67e5\u8be2\u591a\u6761\u8bb0\u5f55",id:"\u67e5\u8be2\u591a\u6761\u8bb0\u5f55",children:[]},{value:"\u65b0\u589e\u8bb0\u5f55",id:"\u65b0\u589e\u8bb0\u5f55",children:[]},{value:"\u4fee\u6539\u4e00\u6761\u8bb0\u5f55",id:"\u4fee\u6539\u4e00\u6761\u8bb0\u5f55",children:[]},{value:"\u5220\u9664\u4e00\u6761\u8bb0\u5f55",id:"\u5220\u9664\u4e00\u6761\u8bb0\u5f55",children:[]}]}],b={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u63d0\u4f9b\u7ed9\u7528\u6237\u4f7f\u7528\u7684-odata-\u6807\u51c6\u51fd\u6570"},"\u63d0\u4f9b\u7ed9\u7528\u6237\u4f7f\u7528\u7684 odata \u6807\u51c6\u51fd\u6570"),Object(o.b)("h3",{id:"\u67e5\u8be2\u4e00\u6761\u8bb0\u5f55"},"\u67e5\u8be2\u4e00\u6761\u8bb0\u5f55"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"api:Steedos.odata.get(object_name, id, field_name)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u53c2\u6570\u4ecb\u7ecd\uff1a - object_name:\u5bf9\u8c61\u540d/\u8868\u540d - id:\u8981\u67e5\u8be2\u8bb0\u5f55\u7684 id - field_name:\u8981\u67e5\u8be2\u7684\u5b57\u6bb5")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u5b9e\u4f8b\uff1a"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u65e0 field_name: \u8c03\u7528",Object(o.b)("inlineCode",{parentName:"li"},'Steedos.odata.get("qhd_informations","pKLcEGHsWXD5YmhY8")'),"\u8fd4\u56de\uff1a")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "_id": "pKLcEGHsWXD5YmhY8",\n  "title": "\u4e5d\u516c\u53f8\u7d27\u5bc6\u7ed3\u5408\u94c1\u8def\u96c6\u4e2d\u4fee\uff0c\u5b8c\u621070\u9879\u8bbe\u5907\u7ef4\u4fee\u6539\u9020\u5de5\u4f5c\uff0c\u4e3a\u751f\u4ea7\u8fd0\u884c\u63d0\u4f9b\u5f3a\u5927\u652f\u6491",\n  "company": "\u4e5d\u516c\u53f8",\n  "content": "4\u6708\u4efd\uff0c\u4e5d\u516c\u53f8\u7d27\u5bc6\u7ed3\u5408\u94c1\u8def\u96c6\u4e2d\u4fee\uff0c\u5b8c\u621070\u9879\u91cd\u70b9\u8bbe\u5907\u7ef4\u4fee\u3001\u6539\u9020\u5de5\u4f5c\uff0c\u4e3a\u751f\u4ea7\u8fd0\u884c\u4fdd\u9a7e\u62a4\u822a\u3002\u4e00\u662f\u5f3a\u5316\u4e1a\u52a1\u7cfb\u7edf\u4e0e\u8bbe\u5907\u7cfb\u7edf\u534f\u540c\u914d\u5408\uff0c\u6839\u636e\u751f\u4ea7\u5b9e\u9645\uff0c\u5229\u7528\u4f5c\u4e1a\u95f4\u9699\uff0c\u5468\u5bc6\u5236\u5b9a\u8bbe\u5907\u68c0\u4fee\u548c\u4fdd\u517b\u5de5\u4f5c\u8ba1\u5212\u3002\u4e8c\u662f\u52a0\u5f3a\u5f00\u5de5\u524d\u3001\u5f00\u5de5\u4e2d\u3001\u5b8c\u5de5\u540e\u7ba1\u7406\u63a7\u5236\uff0c\u5f00\u597d\u6d3b\u524d\u4f1a\uff0c\u7406\u987a\u7ef4\u4fee\u6d41\u7a0b\uff0c\u660e\u786e\u6ce8\u610f\u4e8b\u9879\u548c\u9a8c\u6536\u6807\u51c6\uff0c\u786e\u4fdd\u7ef4\u4fee\u8d28\u91cf\u548c\u7ef4\u4fee\u6548\u7387\u3002\u4e09\u662f\u5236\u5b9a\u300a\u94c1\u8def\u5f00\u5929\u7a97\u671f\u95f4\u7ef4\u4fee\u5b89\u5168\u91cd\u70b9\u5f3a\u8c03\u5185\u5bb9\u300b\uff0c\u52a0\u5f3a\u5bf9\u4f5c\u4e1a\u73b0\u573a\u7684\u5b89\u5168\u76d1\u7763\u68c0\u67e5\u548c\u7ba1\u7406\u5de5\u4f5c\uff0c\u89c4\u8303\u4e86\u73b0\u573a\u7ef4\u4fee\u4f5c\u4e1a\uff0c\u6709\u6548\u675c\u7edd\u4e86\u5b89\u5168\u98ce\u9669\u3002",\n  "owner": "hC6oJuGgdjXDRXrDL",\n  "space": "Af8eM6mAHo7wMDqD3",\n  "created": "2018-04-28T12:05:52.789Z",\n  "modified": "2018-04-28T12:05:52.789Z",\n  "created_by": "hC6oJuGgdjXDRXrDL",\n  "modified_by": "hC6oJuGgdjXDRXrDL",\n  "score": 0\n}\n')),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},'\u6709 field_name: \u8c03\u7528`Steedos.odata.get("qhd_informations","pKLcEGHsWXD5YmhY8","title,company") \u8fd4\u56de\uff1a')),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "_id": "pKLcEGHsWXD5YmhY8",\n  "title": "\u4e5d\u516c\u53f8\u7d27\u5bc6\u7ed3\u5408\u94c1\u8def\u96c6\u4e2d\u4fee\uff0c\u5b8c\u621070\u9879\u8bbe\u5907\u7ef4\u4fee\u6539\u9020\u5de5\u4f5c\uff0c\u4e3a\u751f\u4ea7\u8fd0\u884c\u63d0\u4f9b\u5f3a\u5927\u652f\u6491",\n  "company": "\u4e5d\u516c\u53f8"\n}\n')))),Object(o.b)("h3",{id:"\u67e5\u8be2\u591a\u6761\u8bb0\u5f55"},"\u67e5\u8be2\u591a\u6761\u8bb0\u5f55"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'api:Steedos.odata.query("qhd_informations", options)')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u53c2\u6570\u4ecb\u7ecd\uff1a - object_name:\u5bf9\u8c61\u540d/\u8868\u540d - options:\u67e5\u8be2\u9009\u9879\uff08\u5305\u62ec\u8981\u67e5\u8be2\u7684\u8bb0\u5f55\u6570\uff0c\u8981\u67e5\u8be2\u7684\u5b57\u6bb5\uff0c\u67e5\u8be2\u6761\u4ef6\u7b49\uff09")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u5b9e\u4f8b\uff1a"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'options = { top: 3, select: [ "title", "company", "content", "owner", "score_point", "created" ], filter: [["company", "=", \'\u4e8c\u516c\u53f8\']] }')),Object(o.b)("li",{parentName:"ul"},"\u8c03\u7528",Object(o.b)("inlineCode",{parentName:"li"},"Steedos.odata.query(object_name, options)")," \u8fd4\u56de\uff1a")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "_id": "oKBpn3mjpASADkNg4",\n    "title": "\u4e8c\u516c\u53f8\u515a\u59d4\u7a81\u51fa\u201c\u5bb6\u56ed\u6587\u5316\u201d\uff0c\u4e94\u4e3e\u63aa\u6df1\u5316\u804c\u5de5\u4e4b\u5bb6\u5efa\u8bbe",\n    "company": "\u4e8c\u516c\u53f8",\n    "content": "\u4e8c\u516c\u53f8\u515a\u59d4\u7a81\u51fa\u201c\u5bb6\u56ed\u6587\u5316\u201d\uff0c\u4e94\u4e3e\u63aa\u6df1\u5316\u804c\u5de5\u4e4b\u5bb6\u5efa\u8bbe\u3002\u4e00\u662f\u5efa\u8bbe\u201c\u5b66\u4e60\u5bb6\u56ed\u201d\uff0c\u4f9d\u6258\u5168\u603b\u201c\u804c\u5de5\u4e66\u5c4b\u201d\uff0c\u5f00\u5c55\u804c\u5de5\u5b66\u5148\u3001\u8bfb\u4e66\u5206\u4eab\u3001\u5ea7\u8c08\u7814\u8ba8\u7b49\u6d3b\u52a8\uff0c\u79ef\u6781\u521b\u5efa\u5b66\u4e60\u578b\u73ed\u7ec4\uff0c\u6380\u8d77\u201c\u5b66\u77e5\u8bc6\u3001\u7ec3\u6280\u672f\u3001\u63d0\u7d20\u8d28\u201d\u70ed\u6f6e\u3002\u4e8c\u662f\u5efa\u8bbe\u201c\u521b\u65b0\u5bb6\u56ed\u201d\uff0c\u56f4\u7ed5\u843d\u5b9e\u201c\u4e09\u4e8c\u4e00\u4e00\u201d\u804c\u5de5\u6280\u80fd\u63d0\u5347\u52a9\u63a8\u6d3b\u52a8\uff0c\u5f00\u5c55\u5c97\u4f4d\u6280\u672f\u57f9\u8bad\u3001\u6280\u80fd\u7ec3\u5175\u3001\u6280\u80fd\u7ade\u8d5b\u548c\u201c\u4e94\u5c0f\u201d\u521b\u65b0\u6210\u679c\u6d3b\u52a8\uff0c\u63d0\u9ad8\u804c\u5de5\u521b\u65b0\u6c34\u5e73\u3001\u6280\u672f\u80fd\u529b\u3002\u4e09\u662f\u5efa\u8bbe\u201c\u73af\u5883\u5bb6\u56ed\u201d\uff0c\u521b\u5efa\u73af\u5883\u536b\u751f\u6587\u660e\u4e2d\u5c0f\u5bb6\uff0c\u63d0\u5347\u73af\u5883\u6587\u5316\u5efa\u8bbe\u6c34\u5e73\u3002\u56db\u662f\u5efa\u8bbe\u201c\u5b89\u5168\u5bb6\u56ed\u201d\uff0c\u843d\u5b9e\u804c\u5de5\u4e4b\u5bb6\u5b89\u5168\u6587\u5316\u5efa\u8bbe\uff0c\u5f00\u5c55\u5de5\u4f1a\u52b3\u52a8\u4fdd\u62a4\u76d1\u7763\u68c0\u67e5\u3001\u6d88\u9632\u201c\u5fae\u4e92\u52a8\u201d\u6d3b\u52a8\uff0c\u5229\u7528\u5fae\u4fe1\u516c\u4f17\u53f7\u666e\u53ca\u6d88\u9632\u6cd5\u5f8b\u6cd5\u89c4\u548c\u6d88\u9632\u5b89\u5168\u77e5\u8bc6\uff0c\u6253\u9020\u5b89\u5168\u578b\u73ed\u7ec4\u3002\u4e94\u662f\u5efa\u8bbe\u201c\u6c11\u4e3b\u5bb6\u56ed\u201d\uff0c\u6df1\u5316\u6c11\u4e3b\u7ba1\u7406\uff0c\u5f00\u5c55\u4f01\u52a1\u516c\u5f00\u3001\u56f0\u96be\u5e2e\u6276\u3001\u5973\u804c\u5de5\u6743\u76ca\u5de5\u4f5c\uff0c\u4e25\u683c\u843d\u5b9e\u804c\u4ee3\u4f1a\u5404\u9879\u804c\u6743\uff0c\u6df1\u5165\u7814\u7a76\u804c\u5de5\u4ee3\u8868\u63d0\u6848\uff0c\u4fdd\u969c\u804c\u5de5\u77e5\u60c5\u6743\u3001\u53c2\u4e0e\u6743\u3001\u8868\u8fbe\u6743\u3001\u76d1\u7763\u6743\u3002\uff08\u4e8c\u516c\u53f8\uff09",\n    "created": "2018-04-25T02:45:26.473Z",\n    "owner": "mjLZP2v5FCvzJCKJd",\n    "score_point": ["\u6b63\u5e38\u4f7f\u7528"]\n  },\n  {\n    "_id": "95sXQMmoYCAH43hEP",\n    "title": "\u4e8c\u516c\u53f8\u5f00\u5c55\u7c89\u5c18\u9632\u63a7\u5e94\u6025\u6f14\u7ec3",\n    "company": "\u4e8c\u516c\u53f8",\n    "content": "4\u670824\u65e5\uff0c\u4e8c\u516c\u53f8\u5728\u7164\u4e8c\u671f2\u53f7\u7ffb\u5806\u7ebf\u5f00\u5c55\u7c89\u5c18\u9632\u63a7\u5e94\u6025\u6f14\u7ec3\u3002\u672c\u6b21\u6f14\u7ec3\u4ee5\u7164\u4e8c\u671fB2D\u5806\u6599\u673a\u6b63\u5e38\u4f5c\u4e1a\u3001\u5355\u673a\u6d12\u6c34\u8bbe\u5907\u6295\u7528\u60c5\u51b5\u4e0b\u5806\u6599\u4f5c\u4e1a\u4f9d\u7136\u8d77\u5c18\u4e3a\u80cc\u666f\uff0c\u4f9d\u636e\u516c\u53f8\u300a\u73af\u4fdd\u5de5\u4f5c\u5e94\u6025\u5904\u7f6e\u65b9\u6848\u300b\u7b49\u5236\u5ea6\uff0c\u4ece\u573a\u666f\u8bbe\u7f6e\uff0c\u53f0\u8bcd\u5bf9\u8bdd\uff0c\u5404\u73af\u8282\u8fde\u7eed\u6027\u7b49\u65b9\u9762\u5236\u5b9a\u6f14\u7ec3\u8ba1\u5212\u30024\u4e2a\u53c2\u6f14\u79d1\u961f\u6839\u636e\u6f14\u7ec3\u8ba1\u5212\u5bf9\u53d1\u73b0\u8d77\u5c18\u81f3\u8d77\u5c18\u60c5\u51b5\u5f97\u5230\u6291\u5236\u7684\u5168\u8fc7\u7a0b\u8fdb\u884c\u5b9e\u6218\u6f14\u7ec3\uff0c\u68c0\u9a8c\u7c89\u5c18\u9632\u63a7\u65b9\u6848\u7684\u53ef\u64cd\u4f5c\u6027\u548c\u79d1\u5b66\u6027\u3002\u5176\u4ed66\u4e2a\u57fa\u5c42\u961f\u7684\u73af\u4fdd\u5de5\u4f5c\u4eba\u5458\u6839\u636e\u5c97\u4f4d\u804c\u8d23\u5728\u76f8\u5e94\u6d41\u7a0b\u8282\u70b9\u5b9e\u5730\u89c2\u6469\u3002\u6f14\u7ec3\u7ed3\u675f\u540e\u5bf9\u6f14\u7ec3\u8fc7\u7a0b\u8fdb\u884c\u8bc4\u4f30\u5e76\u5efa\u7acb\u6863\u6848\uff0c\u540c\u65f6\u4f9d\u636e\u8bc4\u4f30\u7ed3\u679c\u8fdb\u4e00\u6b65\u5b8c\u5584\u6f14\u7ec3\u8ba1\u5212\u3001\u5f3a\u5316\u76f8\u5173\u5c97\u4f4d\u4eba\u5458\u57f9\u8bad\uff0c\u5f62\u6210\u7ba1\u7406\u95ed\u73af\uff0c\u63d0\u9ad8\u516c\u53f8\u7c89\u5c18\u9632\u63a7\u5e94\u6025\u5e94\u5bf9\u5de5\u4f5c\u7684\u7ecf\u9a8c\u548c\u80fd\u529b\u3002\uff08\u4e8c\u516c\u53f8\uff09",\n    "created": "2018-04-25T05:24:23.419Z",\n    "owner": "vBz55fGYthKLiBm9G",\n    "score_point": ["\u6b63\u5e38\u4f7f\u7528"]\n  },\n  {\n    "_id": "kXq837CoqQinSwEAo",\n    "title": "\u4e8c\u516c\u53f8\u515a\u59d4\u4e09\u4e2a\u201c\u65e9\u201d\uff0c\u4e25\u9632\u201c\u56db\u98ce\u201d\u53cd\u5f39\u56de\u6f6e",\n    "company": "\u4e8c\u516c\u53f8",\n    "content": "\u4e8c\u516c\u53f8\u515a\u59d4\u6293\u597d\u4e09\u4e2a\u201c\u65e9\u201d, \u4e25\u9632\u201c\u56db\u98ce\u201d\u53cd\u5f39\u56de\u6f6e\u3002\u4e00\u662f\u8b66\u793a\u6559\u80b2\u201c\u65e9\u201d\u9884\u9632\u3002\u6301\u7eed\u5b9e\u65bd\u4ee5\u5ec9\u6d01\u6587\u5316\u3001\u6848\u4f8b\u8b66\u793a\u3001\u5ec9\u6d01\u63d0\u9192\u4e3a\u4e3b\u8981\u5185\u5bb9\u7684\u515a\u98ce\u5efa\u8bbe\u4e0e\u53cd\u8150\u5021\u5ec9\u6559\u80b2\uff0c\u5ba3\u4f20\u5b66\u4e60\u300a\u4e2d\u5171\u6cb3\u5317\u6e2f\u53e3\u96c6\u56e2\u6709\u9650\u516c\u53f8\u7eaa\u59d4\u5173\u4e8e\u59dc\u654f\u7b49\u4eba\u8fdd\u7eaa\u95ee\u9898\u5904\u7406\u60c5\u51b5\u7684\u901a\u62a5\u300b\uff0c\u53d1\u6325\u5148\u8fdb\u5178\u578b\u5f15\u9886\u793a\u8303\u548c\u53cd\u9762\u5178\u578b\u8b66\u793a\u6559\u80b2\u4f5c\u7528\u3002 \u4e8c\u662f\u5ec9\u6d01\u6587\u5316\u201c\u65e9\u201d\u5ba3\u4f20\u3002\u5f00\u5c55\u201c\u8bb2\u653f\u6cbb\u3001\u5b88\u7eaa\u5f8b\u3001\u8f6c\u4f5c\u98ce\u201d\u4e3b\u9898\u8b66\u793a\u6559\u80b2\u6d3b\u52a8\uff0c\u5c06\u4e3b\u9898\u6559\u80b2\u5185\u5bb9\u7eb3\u5165\u515a\u7ec4\u7ec7\u7406\u8bba\u4e2d\u5fc3\u7ec4\u5b66\u4e60\u8ba1\u5212\uff0c\u5217\u4e3a\u515a\u5458\u5e72\u90e8\u57f9\u8bad\u5b89\u6392\uff0c\u4e0d\u65ad\u63d0\u9ad8\u515a\u5458\u5e72\u90e8\u653f\u6cbb\u89c9\u609f\u3002\u4e09\u662f\u5ec9\u6d01\u63d0\u9192\u201c\u65e9\u201d\u90e8\u7f72\u3002\u6293\u4f4f\u201c\u6e05\u660e\u201d\u201c\u4e94\u4e00\u201d\u91cd\u8981\u8282\u70b9\uff0c\u52a0\u5f3a\u91cd\u70b9\u5c97\u4f4d\u4eba\u5458\u5ec9\u6d01\u63d0\u9192\uff0c\u9488\u5bf9\u91cd\u70b9\u90e8\u4f4d\u3001\u91cd\u70b9\u4eba\u5458\u3001\u91cd\u70b9\u73af\u8282\u8fdb\u884c\u81ea\u67e5\uff0c\u624e\u5b9e\u5f00\u5c55\u5de1\u89c6\u5de1\u5bdf\u201c\u56de\u5934\u770b\u201d\u5de5\u4f5c\uff0c\u63a8\u8fdb\u7ea0\u6b63\u201c\u56db\u98ce\u201d\u548c\u4f5c\u98ce\u7eaa\u5f8b\u4e13\u9879\u6574\u6cbb\uff0c\u4ece\u6839\u672c\u4e0a\u675c\u7edd\u201c\u56db\u98ce\u201d\u95ee\u9898\u53d1\u751f\u3002\uff08\u4e8c\u516c\u53f8\uff09",\n    "created": "2018-04-23T06:31:13.047Z",\n    "owner": "Rssm7LPpNJqT35mLF",\n    "score_point": ["\u6b63\u5e38\u4f7f\u7528"]\n  }\n]\n')))),Object(o.b)("h3",{id:"\u65b0\u589e\u8bb0\u5f55"},"\u65b0\u589e\u8bb0\u5f55"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"api :Steedos.odata.insert(object_name, doc)"),Object(o.b)("li",{parentName:"ul"},"\u53c2\u6570\u4ecb\u7ecd\uff1a - object_name:\u5bf9\u8c61\u540d/\u8868\u540d - doc:\u63d2\u5165\u7684\u6570\u636e"),Object(o.b)("li",{parentName:"ul"},"\u5b9e\u4f8b\uff1a",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'doc = { "title":"abc", "company":"\u4e00\u516c\u53f8"\uff0c "content":"\u4e00\u516c\u53f8\u4e00\u5b63\u5ea6\u4eba\u4e8b\u8c03\u52a8" }')),Object(o.b)("li",{parentName:"ul"},"\u8c03\u7528",Object(o.b)("inlineCode",{parentName:"li"},'Steedos.odata.insert("qhd_informations", doc)')," \u8fd4\u56de\uff1a")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "_id": "kXcYfS6yRd8GDwzhz",\n  "title": "abc",\n  "company": "\u4e00\u516c\u53f8\u4e00\u5b63\u5ea6\u4eba\u4e8b\u8c03\u52a8",\n  "content": "\u4e00\u516c\u53f8\u4e00\u5b63\u5ea6\u4eba\u4e8b\u8c03\u52a8",\n  "space": "Af8eM6mAHo7wMDqD3",\n  "created": "2018-05-09T07:21:18.907Z",\n  "modified": "2018-05-09T07:21:18.907Z",\n  "created_by": "Mpb5vnogRxGLqoyoR",\n  "modified_by": "Mpb5vnogRxGLqoyoR",\n  "score": 0\n}\n')))),Object(o.b)("h3",{id:"\u4fee\u6539\u4e00\u6761\u8bb0\u5f55"},"\u4fee\u6539\u4e00\u6761\u8bb0\u5f55"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"api :Steedos.odata.update(object_name, id, doc)"),Object(o.b)("li",{parentName:"ul"},"\u53c2\u6570\u4ecb\u7ecd\uff1a - object_name:\u5bf9\u8c61\u540d/\u8868\u540d - doc:\u63d2\u5165\u7684\u6570\u636e"),Object(o.b)("li",{parentName:"ul"},"\u5b9e\u4f8b\uff1a",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'doc = { "title":"\u4e8c\u516c\u53f8\u4e00\u5b63\u5ea6\u4eba\u4e8b\u8c03\u52a8", "company":"\u4e8c\u516c\u53f8"\uff0c "content":"\u4e8c\u516c\u53f8\u4e00\u5b63\u5ea6\u4eba\u4e8b\u8c03\u52a8" }')),Object(o.b)("li",{parentName:"ul"},"\u8c03\u7528",Object(o.b)("inlineCode",{parentName:"li"},'Steedos.odata.update("qhd_informations","kXcYfS6yRd8GDwzhz" doc)'))))),Object(o.b)("h3",{id:"\u5220\u9664\u4e00\u6761\u8bb0\u5f55"},"\u5220\u9664\u4e00\u6761\u8bb0\u5f55"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"api : Steedos.odata.delete(object_name, id)"),Object(o.b)("li",{parentName:"ul"},"\u53c2\u6570\u4ecb\u7ecd\uff1a - object_name:\u5bf9\u8c61\u540d/\u8868\u540d - id:\u8981\u5220\u9664\u6570\u636e\u7684 id"),Object(o.b)("li",{parentName:"ul"},"\u5b9e\u4f8b\uff1a",Object(o.b)("inlineCode",{parentName:"li"},'\u8c03\u7528\uff1aSteedos.odata.delete("qhd_informations","kXcYfS6yRd8GDwzhz")'))))}p.isMDXComponent=!0}}]);