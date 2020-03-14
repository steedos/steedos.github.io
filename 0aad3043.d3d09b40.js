(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(1),r=n(6),i=(n(0),n(329)),o={title:"OData \u7b80\u4ecb"},c={id:"api/odata",title:"OData \u7b80\u4ecb",description:"\u5f00\u653e\u6570\u636e\u534f\u8bae\uff08Open Data Protocol\uff0c\u7f29\u5199OData\uff09\u662f\u4e00\u79cd\u63cf\u8ff0\u5982\u4f55\u521b\u5efa\u548c\u8bbf\u95eeRestful\u670d\u52a1\u7684OASIS\u6807\u51c6\u3002\u8be5\u6807\u51c6\u7531\u5fae\u8f6f\u53d1\u8d77\uff0c\u524d\u4e09\u4e2a\u7248\u672c1.0\u30012.0\u30013.0\u90fd\u662f\u5fae\u8f6f\u5f00\u653e\u6807\u51c6\u3002\u7b2c\u56db\u4e2a\u7248\u672c4.0\u4e8e2014\u5e743\u670817\u65e5\u5728OASIS\u6295\u7968\u901a\u8fc7\u6210\u4e3a\u5f00\u653e\u5de5\u4e1a\u6807\u51c6\u3002\r",source:"@site/../docs/api/odata.md",permalink:"/docs/api/odata",sidebar:"API",previous:{title:"\u5e94\u7528\u96c6\u6210",permalink:"/docs/api/index"},next:{title:"\u8eab\u4efd\u9a8c\u8bc1",permalink:"/docs/api/odata_auth"}},l=[{value:"\u8bbf\u95ee\u5730\u5740",id:"\u8bbf\u95ee\u5730\u5740",children:[]},{value:"\u63a5\u53e3\u8fd4\u56de\u72b6\u6001\u7801\u8bf4\u660e",id:"\u63a5\u53e3\u8fd4\u56de\u72b6\u6001\u7801\u8bf4\u660e",children:[]}],p={rightToc:l},u="wrapper";function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)(u,Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u5f00\u653e\u6570\u636e\u534f\u8bae\uff08Open Data Protocol\uff0c\u7f29\u5199OData\uff09\u662f\u4e00\u79cd\u63cf\u8ff0\u5982\u4f55\u521b\u5efa\u548c\u8bbf\u95eeRestful\u670d\u52a1\u7684OASIS\u6807\u51c6\u3002\u8be5\u6807\u51c6\u7531\u5fae\u8f6f\u53d1\u8d77\uff0c\u524d\u4e09\u4e2a\u7248\u672c1.0\u30012.0\u30013.0\u90fd\u662f\u5fae\u8f6f\u5f00\u653e\u6807\u51c6\u3002\u7b2c\u56db\u4e2a\u7248\u672c4.0\u4e8e2014\u5e743\u670817\u65e5\u5728OASIS\u6295\u7968\u901a\u8fc7\u6210\u4e3a\u5f00\u653e\u5de5\u4e1a\u6807\u51c6\u3002"),Object(i.b)("p",null,"Steedos API \u9075\u5faa OData \u534f\u8bae\uff0c\u5f00\u53d1\u4eba\u5458\u5b9a\u4e49\u7684\u6240\u6709\u4e1a\u52a1\u5bf9\u8c61\uff0c\u5747\u53ef\u81ea\u52a8\u751f\u6210\u6807\u51c6 OData \u63a5\u53e3\u3002"),Object(i.b)("h2",{id:"\u8bbf\u95ee\u5730\u5740"},"\u8bbf\u95ee\u5730\u5740"),Object(i.b)("p",null," All API access is through HTTP(S) requests at ",Object(i.b)("inlineCode",{parentName:"p"},"your-steedos-url.com/api/v4"),". All request and response bodies are ",Object(i.b)("inlineCode",{parentName:"p"},"application/json"),"."),Object(i.b)("h2",{id:"\u63a5\u53e3\u8fd4\u56de\u72b6\u6001\u7801\u8bf4\u660e"},"\u63a5\u53e3\u8fd4\u56de\u72b6\u6001\u7801\u8bf4\u660e"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"200\uff1a\u8bf7\u6c42\u6267\u884c\u6210\u529f"),Object(i.b)("li",{parentName:"ul"},"400\uff1a\u65e0\u6cd5\u6210\u529f\u89e3\u6790\u8bf7\u6c42\uff0cURL\u5728\u8bed\u6cd5\u6216\u8bed\u4e49\u4e0a\u53ef\u80fd\u4e0d\u6b63\u786e"),Object(i.b)("li",{parentName:"ul"},"401\uff1a\u672a\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1"),Object(i.b)("li",{parentName:"ul"},"403\uff1a\u6ca1\u6709\u8bbf\u95ee\u8be5\u5b9e\u4f53\u7684\u6743\u9650"),Object(i.b)("li",{parentName:"ul"},"404\uff1a\u672a\u627e\u5230\u76f8\u5173\u8bb0\u5f55"),Object(i.b)("li",{parentName:"ul"},"405\uff1a\u4e0d\u80fd\u5bf9\u8be5\u8bb0\u5f55\u6267\u884c\u6b64\u8bf7\u6c42"),Object(i.b)("li",{parentName:"ul"},"406\uff1a\u65e0\u6cd5\u6ee1\u8db3\u5b9e\u4f53/\u5b9e\u4f53\u5bb9\u5668/\u5b9e\u4f53\u96c6\u5728\u63a5\u53d7\u6807\u5934\u4e2d\u6307\u5b9a\u7684\u8bf7\u6c42\u683c\u5f0f"),Object(i.b)("li",{parentName:"ul"},"413\uff1a\u8fd4\u56de\u6570\u636e\u8fc7\u5927"),Object(i.b)("li",{parentName:"ul"},"500\uff1a\u5185\u90e8\u670d\u52a1\u5668\u9519\u8bef"),Object(i.b)("li",{parentName:"ul"},"501\uff1a\u670d\u52a1\u4e0d\u53ef\u7528")))}s.isMDXComponent=!0},329:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a),i=r.a.createContext({}),o=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=o(e.components);return r.a.createElement(i.Provider,{value:t},e.children)};var l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),u=o(n),s=a,b=u[c+"."+s]||u[s]||p[s]||i;return n?r.a.createElement(b,Object.assign({},{ref:t},l,{components:n})):r.a.createElement(b,Object.assign({},{ref:t},l))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[l]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);