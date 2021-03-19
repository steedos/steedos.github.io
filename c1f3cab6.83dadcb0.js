(window.webpackJsonp=window.webpackJsonp||[]).push([[340],{398:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(1),r=n(6),c=(n(0),n(495)),o={title:"\u63d2\u5165"},i={unversionedId:"developer/api/odata_add",id:"developer/api/odata_add",isDocsHomePage:!1,title:"\u63d2\u5165",description:"\u901a\u8fc7\u5bf9\u8981\u53ea\u80fd\u589e\u6570\u636e\u7684\u5bf9\u8c61\u7684 URI \u6267\u884c HTTP POST \u8bf7\u6c42\u53ef\u521b\u5efa\u65b0\u8bb0\u5f55\u6216\u5b9e\u4f53\u3002 POST \u8bf7\u6c42\u4f7f\u7528 JSON \u683c\u5f0f\u5728\u5176\u6b63\u6587\u4e2d\u5305\u62ec\u65b0\u8bb0\u5f55\u3002\u670d\u52a1\u5668\u4f1a\u4e3a\u8bf7\u6c42\u4e2d\u672a\u6307\u5b9a\u7684\u4efb\u4f55\u5c5e\u6027\u6307\u6d3e\u9ed8\u8ba4\u503c\uff0c\u5e76\u8fd4\u56de\u6210\u529f\u521b\u5efa\u7684\u8bb0\u5f55\u3002",source:"@site/../docs/developer/api/odata_add.md",slug:"/developer/api/odata_add",permalink:"/developer/api/odata_add",version:"current",sidebar:"\u6587\u6863",previous:{title:"\u8bfb\u53d6",permalink:"/developer/api/odata_get"},next:{title:"\u66f4\u65b0",permalink:"/developer/api/odata_edit"}},p=[{value:"\u63a5\u53e3\u4fe1\u606f",id:"\u63a5\u53e3\u4fe1\u606f",children:[]}],l={rightToc:p};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u901a\u8fc7\u5bf9\u8981\u53ea\u80fd\u589e\u6570\u636e\u7684\u5bf9\u8c61\u7684 URI \u6267\u884c HTTP POST \u8bf7\u6c42\u53ef\u521b\u5efa\u65b0\u8bb0\u5f55\u6216\u5b9e\u4f53\u3002 POST \u8bf7\u6c42\u4f7f\u7528 JSON \u683c\u5f0f\u5728\u5176\u6b63\u6587\u4e2d\u5305\u62ec\u65b0\u8bb0\u5f55\u3002\u670d\u52a1\u5668\u4f1a\u4e3a\u8bf7\u6c42\u4e2d\u672a\u6307\u5b9a\u7684\u4efb\u4f55\u5c5e\u6027\u6307\u6d3e\u9ed8\u8ba4\u503c\uff0c\u5e76\u8fd4\u56de\u6210\u529f\u521b\u5efa\u7684\u8bb0\u5f55\u3002"),Object(c.b)("h3",{id:"\u63a5\u53e3\u4fe1\u606f"},"\u63a5\u53e3\u4fe1\u606f"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u8bf7\u6c42\u65b9\u6cd5\uff1aPOST")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u8bf7\u6c42\u63a5\u53e3\uff1a/api/v4/#{object_name}")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u63a5\u53e3\u8bf4\u660e\uff1a"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"object_name\uff1a\u521b\u5efa\u5bf9\u8c61\u7684\u5bf9\u8c61\u540d"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u8bf7\u6c42\u53c2\u6570\u8bf4\u660e\uff1a"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"body \u4ee5 JSON \u5f62\u5f0f\u5b58\u50a8\u8bb0\u5f55"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"response \u8bf4\u660e\uff1a"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u8fd4\u56de\u521b\u5efa\u6210\u529f\u7684\u8bb0\u5f55"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u793a\u4f8b\u5982\u4e0b\uff1a"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"HTTP \u8bf7\u6c42")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),' curl \\\n   -X POST https://beta.steedos.com/api/v4/contacts \\\n   -H \'Content-Type: application/json\' \\\n   -b \'X-Space-Token=55090bbe52...aXpwo\' \\\n   -d \'{ name: "\u5f20\u4e09", mobile: "18969565966", company: "\u4e0a\u6d77\u67d0\u67d0\u516c\u53f8", address: "\u4e0a\u6d77\u5e02\u5f90\u6c47\u533a\u67d0\u67d0\u8857\u9053" }\'\n')),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"HTTP \u54cd\u5e94")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),' HTTP/1.1 201 Created\n\n {\n     "@odata.id": "https://beta.steedos.com/api/odata/v4/Af8e****DqD3/contacts(\'hbysEccFT2fXjHtpd\')",\n     "@odata.etag": "W/\\"08D589720BBB3DB1\\"",\n     "@odata.editLink": "https://beta.steedos.com/api/odata/v4/Af8e****DqD3/contacts(\'hbysEccFT2fXjHtpd\')",\n     "_id": "hbysEccFT2fXjHtpd",\n     "name": "\u5f20\u4e09",\n     "mobile": "18969565966",\n     "company": "\u4e0a\u6d77\u67d0\u67d0\u516c\u53f8",\n     "address": "\u4e0a\u6d77\u5e02\u5f90\u6c47\u533a\u67d0\u67d0\u8857\u9053"\n    "owner": {\n        "_id": "hPgDcEd9vKQxwndQR",\n        "name": "\u7cfb\u7edf\u7ba1\u7406\u5458"\n    }\n     "created": "2018-03-29T08:50:35.092Z",\n     "modified": "2018-03-29T08:50:44.990Z",\n     "created_by": "qjcwDX3icX3KnZJhZ",\n     "modified_by": "qjcwDX3icX3KnZJhZ",\n     "score": 0\n }\n')))))}b.isMDXComponent=!0},495:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},d=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=b(n),m=a,s=d["".concat(o,".").concat(m)]||d[m]||u[m]||c;return n?r.a.createElement(s,i({ref:t},l,{components:n})):r.a.createElement(s,i({ref:t},l))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);