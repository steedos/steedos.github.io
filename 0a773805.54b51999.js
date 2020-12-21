(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{418:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),s=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):a({},t,{},e)),n},u=function(e){var t=s(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),u=s(n),p=r,h=u["".concat(l,".").concat(p)]||u[p]||d[p]||c;return n?o.a.createElement(h,a({ref:t},b,{components:n})):o.a.createElement(h,a({ref:t},b))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=p;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var b=2;b<c;b++)l[b]=n[b];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},447:function(e,t,n){"use strict";var r=n(0),o=n.n(r),c=n(50),l=n.n(c);class a extends o.a.Component{constructor(e){super(e);const t=Math.random().toString(36).substring(5);this.state={height:"50",sectionId:"section-"+t,backgroundId:"section-background-"+t}}render(){let{background:e,height:t,padding:n,color:r}=this.props;return this.state.height!==t&&(t=this.state.height),e&&(e.startsWith("/")||e.startsWith("http"))&&(e="url("+e+")"),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:l.a.sectionBackground,id:this.state.backgroundId},o.a.createElement("div",{className:l.a.section,ref:this.state.sectionId,id:this.state.sectionId},o.a.createElement("style",{dangerouslySetInnerHTML:{__html:`\n          #${this.state.sectionId} {\n            color: ${r};\n            padding: ${n}px;\n          }\n          #${this.state.backgroundId} {\n            background: ${e};  \n            background-repeat: no-repeat;\n            background-position: top;\n            background-size: cover;\n          }\n        `}}),this.props.children)))}}a.defaultProps={padding:30,height:200,color:"black"},t.a=a},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(6),c=(n(0),n(418)),l=n(447),a={title:"\u5982\u4f55\u9009\u62e9\u6700\u597d\u7684\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0\uff1f",sidebar_label:"\u5982\u4f55\u9009\u62e9\uff1f",hide_table_of_contents:!0,background:"/img/banner/clouds-large-desktop.png",keywords:["\u4f4e\u4ee3\u7801","\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0","\u5f00\u6e90\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0","\u5feb\u901f\u5f00\u53d1\u5e73\u53f0","\u5feb\u901f\u5f00\u53d1\u5de5\u5177"]},i={unversionedId:"platform/why",id:"platform/why",isDocsHomePage:!1,title:"\u5982\u4f55\u9009\u62e9\u6700\u597d\u7684\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0\uff1f",description:"\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0\u662f\u73b0\u5728\u5f88\u706b\u7684\u8bdd\u9898\uff0c\u5e02\u573a\u4e0a\u7684\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0\uff0c\u4e3b\u8981\u6709\u4e24\u7c7b\u3002",source:"@site/../docs/platform/why.md",slug:"/platform/why",permalink:"/platform/why",version:"current",sidebar_label:"\u5982\u4f55\u9009\u62e9\uff1f"},b=[{value:"\u8981\u7ba1\u54ea\u4e9b\u6570\u636e\uff1f",id:"\u8981\u7ba1\u54ea\u4e9b\u6570\u636e\uff1f",children:[]},{value:"\u8981\u5904\u7406\u54ea\u4e9b\u4e1a\u52a1\u903b\u8f91\uff1f",id:"\u8981\u5904\u7406\u54ea\u4e9b\u4e1a\u52a1\u903b\u8f91\uff1f",children:[]},{value:"\u8981\u600e\u4e48\u8c03\u8bd5\uff1f",id:"\u8981\u600e\u4e48\u8c03\u8bd5\uff1f",children:[]},{value:"\u8981\u600e\u4e48\u7ba1\u7406\u7a0b\u5e8f\u7248\u672c\uff1f",id:"\u8981\u600e\u4e48\u7ba1\u7406\u7a0b\u5e8f\u7248\u672c\uff1f",children:[]},{value:"\u8981\u6539\u52a8\u7cfb\u7edf\u5185\u6838\u4e86\uff0c\u600e\u4e48\u529e\uff1f",id:"\u8981\u6539\u52a8\u7cfb\u7edf\u5185\u6838\u4e86\uff0c\u600e\u4e48\u529e\uff1f",children:[]},{value:"\u8981\u600e\u4e48\u63a7\u5236\u6570\u636e\u6743\u9650\uff1f",id:"\u8981\u600e\u4e48\u63a7\u5236\u6570\u636e\u6743\u9650\uff1f",children:[]},{value:"\u8981\u600e\u4e48\u5f00\u53d1\u4e1a\u52a1\u5ba1\u6279\uff1f",id:"\u8981\u600e\u4e48\u5f00\u53d1\u4e1a\u52a1\u5ba1\u6279\uff1f",children:[]},{value:"\u8981\u600e\u4e48\u5f00\u53d1\u7edf\u8ba1\u62a5\u8868\uff1f",id:"\u8981\u600e\u4e48\u5f00\u53d1\u7edf\u8ba1\u62a5\u8868\uff1f",children:[]},{value:"\u5f00\u53d1\u7684\u7cfb\u7edf\uff0c\u53ef\u4ee5\u7528\u4e8e\u5927\u578b\u9879\u76ee\u5417\uff1f",id:"\u5f00\u53d1\u7684\u7cfb\u7edf\uff0c\u53ef\u4ee5\u7528\u4e8e\u5927\u578b\u9879\u76ee\u5417\uff1f",children:[]},{value:"\u5f00\u53d1\u7684\u7cfb\u7edf\uff0c\u53ef\u4ee5\u4f7f\u7528\u624b\u673a\u8bbf\u95ee\u5417\uff1f",id:"\u5f00\u53d1\u7684\u7cfb\u7edf\uff0c\u53ef\u4ee5\u4f7f\u7528\u624b\u673a\u8bbf\u95ee\u5417\uff1f",children:[]},{value:"\u6570\u636e\u88ab\u7be1\u6539\u4e86\u600e\u4e48\u529e\uff1f",id:"\u6570\u636e\u88ab\u7be1\u6539\u4e86\u600e\u4e48\u529e\uff1f",children:[]},{value:"\u7a0b\u5e8f\u5458\u8981\u79bb\u804c\u4e86\u600e\u4e48\u529e\uff1f",id:"\u7a0b\u5e8f\u5458\u8981\u79bb\u804c\u4e86\u600e\u4e48\u529e\uff1f",children:[]},{value:"\u5f00\u53d1\u7684\u7cfb\u7edf\uff0c\u80fd\u5f53\u6210\u4ea7\u54c1\u9500\u552e\u5417\uff1f",id:"\u5f00\u53d1\u7684\u7cfb\u7edf\uff0c\u80fd\u5f53\u6210\u4ea7\u54c1\u9500\u552e\u5417\uff1f",children:[]},{value:"\u5bf9\u4e8e\u7a0b\u5e8f\u5458\u4e2a\u4eba\u53d1\u5c55\u6709\u5e2e\u52a9\u5417\uff1f",id:"\u5bf9\u4e8e\u7a0b\u5e8f\u5458\u4e2a\u4eba\u53d1\u5c55\u6709\u5e2e\u52a9\u5417\uff1f",children:[]},{value:"\u534e\u708e\u9b54\u65b9\u5f00\u6e90\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0",id:"\u534e\u708e\u9b54\u65b9\u5f00\u6e90\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0",children:[]}],s={rightToc:b};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0\u662f\u73b0\u5728\u5f88\u706b\u7684\u8bdd\u9898\uff0c\u5e02\u573a\u4e0a\u7684\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0\uff0c\u4e3b\u8981\u6709\u4e24\u7c7b\u3002"),Object(c.b)("p",null,"\u7b2c\u4e00\u7c7b\uff0c\u901a\u8fc7\u62d6\u62fd\u65b9\u5f0f\u5f00\u53d1App\u754c\u9762\uff0c\u6570\u636e\u6765\u6e90\u4e8e\u73b0\u6709\u7cfb\u7edf\u3002\u8fd9\u4e2a\u9886\u57df\u6709\u5f88\u591a\u65b0\u7684\u521b\u4e1a\u516c\u53f8\uff0c\u6bd4\u5982\u88ab\u897f\u95e8\u5b50\u6536\u8d2d\u7684Mendix\uff0c\u83b7\u5f97\u5927\u7b14\u878d\u8d44\u7684Outsystems\uff0c\u8fd8\u6709\u5fae\u8f6f\u5f00\u53d1\u4e86\u5f88\u591a\u5e74\u7684PowerApps\u3002\u8fd9\u4e9b\u53ef\u4ee5\u5e2e\u52a9\u4f01\u4e1a\u57fa\u4e8e\u73b0\u6709\u7cfb\u7edf\u5f00\u53d1\u65b0\u7684\u5e94\u7528\u754c\u9762\uff0c\u5c24\u5176\u662f\u5ef6\u4f38\u5230\u624b\u673a\u7aef\u3002"),Object(c.b)("p",null,"\u7b2c\u4e8c\u7c7b\uff0c\u4ece\u96f6\u5f00\u59cb\uff0c\u521b\u5efa\u4e1a\u52a1\u7cfb\u7edf\uff0c\u6216\u662f\u6784\u5efa\u4f01\u4e1a\u6570\u636e\u4e2d\u53f0\u3002\u8fd9\u4e2a\u9886\u57df\u9700\u8981\u5f88\u591a\u5e74\u7684\u6280\u672f\u79ef\u7d2f\uff0c\u9700\u8981\u901a\u8fc7\u6210\u767e\u4e0a\u5343\u4e2a\u9879\u76ee\u6c89\u6dc0\u5ba2\u6237\u9700\u6c42\uff0c\u624d\u80fd\u505a\u51fa\u597d\u7684\u5f00\u53d1\u5de5\u5177\u3002\u5982\u4f55\u628a\u57fa\u7840\u529f\u80fd\u6807\u51c6\u5316\uff0c\u5982\u4f55\u628a\u5dee\u5f02\u5316\u7684\u90e8\u5206\u63d0\u70bc\u51fa\u6765\u505a\u6210\u53ef\u914d\u7f6e\uff0c\u8fd9\u662f\u4e00\u4e2a\u975e\u5e38\u96be\u7684\u8bfe\u9898\u3002\u5728\u8fd9\u65b9\u9762\u6bd4\u8f83\u9886\u5148\u7684\u6709\u4ee5\u5f00\u53d1CRM\u5e76\u9010\u6b65\u8fdb\u5316\u7684Salesforce\uff0c \u5f00\u53d1ERP\u8d77\u5bb6\u7684Odoo \uff0c\u548c\u4e8c\u5341\u5e74\u5f00\u53d1\u7ecf\u9a8c\u7684BPM\u5382\u5546\u534e\u708e\u9b54\u65b9\u3002"),Object(c.b)("video",{src:"https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/creator/creator_object.mp4",controls:"controls",poster:"/assets/creator_object.png",width:"100%",autoplay:"autoplay",muted:"muted",loop:"loop",playsinline:"playsinline"},"your browser does not support the video tag"),Object(c.b)("p",null),Object(c.b)("p",null,"\u534e\u708e\u9b54\u65b9\u662f\u7b2c\u4e8c\u7c7b\uff0c\u5c31\u662f\u53ef\u4ee5\u5f00\u53d1\u5168\u65b0\u4e1a\u52a1\u7cfb\u7edf\u7684\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0\u3002"),Object(c.b)("p",null,"\u90a3\u7a0b\u5e8f\u5458\u9009\u62e9\u8fd9\u7c7b\u4f4e\u4ee3\u7801\u5f00\u53d1\u5de5\u5177\u9996\u5148\u5fc5\u987b\u8981\u8003\u8651\u54ea\u4e9b\u95ee\u9898\u5462\uff1f"),Object(c.b)("h2",{id:"\u8981\u7ba1\u54ea\u4e9b\u6570\u636e\uff1f"},"\u8981\u7ba1\u54ea\u4e9b\u6570\u636e\uff1f"),Object(c.b)("p",null,"\u6570\u636e\u662f\u7cfb\u7edf\u7684\u6838\u5fc3\uff0c\u7ba1\u7406\u54ea\u4e9b\u6570\u636e\uff0c\u7ba1\u7406\u54ea\u4e9b\u8981\u7d20\uff0c\u662f\u7cfb\u7edf\u5f00\u53d1\u9996\u8981\u8003\u8651\u7684\u95ee\u9898\u3002\u4f46\u95ee\u9898\u662f\u521a\u5f00\u59cb\u8bbe\u8ba1\u7cfb\u7edf\u7684\u65f6\u5019\u4e0d\u53ef\u80fd\u4e00\u4e0b\u5b50\u5168\u90e8\u60f3\u6e05\u695a\u3002\u8fd9\u65f6\u5019\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0\u7684\u4f18\u52bf\u5c31\u6765\u4e86\u3002\u901a\u8fc7\u914d\u7f6e\u5316\u7684\u65b9\u5f0f\u642d\u5efa\u7cfb\u7edf\u539f\u578b\uff0c\u4e00\u8fb9\u642d\u5efa\u4e00\u8fb9\u8fd0\u884c\u770b\u6548\u679c\uff0c\u6839\u636e\u6548\u679c\u9010\u6b65\u8c03\u6574\u548c\u5b8c\u5584\u3002\u5f88\u5feb\u5c31\u53ef\u4ee5\u642d\u5efa\u51fa\u7cfb\u7edf\u539f\u578b\u3002\u5373\u4f7f\u7cfb\u7edf\u6b63\u5f0f\u4e0a\u7ebf\u4e86\uff0c\u4e5f\u53ef\u4ee5\u968f\u65f6\u6309\u7167\u5ba2\u6237\u7684\u9700\u6c42\uff0c\u5feb\u901f\u4fee\u6539\u7cfb\u7edf\u914d\u7f6e\u3002"),Object(c.b)("h2",{id:"\u8981\u5904\u7406\u54ea\u4e9b\u4e1a\u52a1\u903b\u8f91\uff1f"},"\u8981\u5904\u7406\u54ea\u4e9b\u4e1a\u52a1\u903b\u8f91\uff1f"),Object(c.b)("p",null,"\u5f00\u53d1\u7cfb\u7edf\u7684\u6838\u5fc3\u76ee\u7684\u662f\u4e3a\u4e86\u63d0\u5347\u6548\u7387\uff0c\u51cf\u8f7b\u4eba\u5de5\u7684\u5de5\u4f5c\u91cf\u3002\u56e0\u6b64\u5fc5\u7136\u8981\u5904\u7406\u5f88\u591a\u590d\u6742\u7684\u4e1a\u52a1\u903b\u8f91\u3002\u6bd4\u5982\u5f00\u53d1\u5408\u540c\u4ed8\u6b3e\u7ba1\u7406\u7684\u65f6\u5019\u80af\u5b9a\u8981\u8ba1\u7b97\u5df2\u4ed8\u6b3e\u3001\u672a\u4ed8\u6b3e\u3002\u5f00\u53d1\u7269\u54c1\u74f4\u7528\u7684\u65f6\u5019\u8981\u6263\u9664\u5e93\u5b58\uff0c\u8fd9\u4e9b\u90fd\u9700\u8981\u7f16\u5199\u4e1a\u52a1\u903b\u8f91\u4ee3\u7801\u3002\u6210\u719f\u7684\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0\uff0c\u5e94\u8be5\u63d0\u4f9b\u5b8c\u6574\u7684\u5165\u53e3\uff0c\u8ba9\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u7f16\u5199\u5404\u79cd\u4e1a\u52a1\u903b\u8f91\u3002\u800c\u5e02\u9762\u4e0a\u5f88\u591a\u6240\u8c13\u96f6\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0\uff0c\u5728\u5f00\u53d1\u521d\u671f\u6216\u8bb8\u770b\u8d77\u6765\u5f88\u7f8e\u597d\uff0c\u4f46\u968f\u7740\u5f00\u53d1\u9700\u6c42\u7684\u6df1\u5165\uff0c\u5fc5\u7136\u662f\u7a0b\u5e8f\u5458\u7684\u5669\u68a6\u3002"),Object(c.b)("h2",{id:"\u8981\u600e\u4e48\u8c03\u8bd5\uff1f"},"\u8981\u600e\u4e48\u8c03\u8bd5\uff1f"),Object(c.b)("p",null,"\u65e2\u7136\u8981\u5199\u7a0b\u5e8f\uff0c\u90a3\u5fc5\u7136\u4f1a\u51fabug\uff0c\u8fd9\u662f\u5386\u53f2\u7684\u5fc5\u7136\uff0c\u65e0\u8bba\u4f60\u662f\u4ec0\u4e48\u795e\u4ed9\u7a0b\u5e8f\u5458\u90fd\u8981\u9762\u5bf9\u8fd9\u4e2a\u95ee\u9898\u3002\u5982\u679c\u662f\u5ba2\u6237\u7aef\u7684\u811a\u672c\uff0c\u8fd8\u53ef\u4ee5\u7528Chrome\u8fdb\u884c\u8c03\u8bd5\uff0c\u5982\u679c\u662f\u670d\u52a1\u7aef\u7684\u4ee3\u7801\u8be5\u600e\u4e48\u529e\u5462\uff1f\u534e\u708e\u9b54\u65b9\u521b\u5efa\u7684\u9879\u76ee\uff0c\u672c\u8eab\u5c31\u662f\u4e00\u4e2a\u6807\u51c6\u7684NodeJS\u9879\u76ee\uff0c\u53ef\u4ee5\u4f7f\u7528 Visual Studio Code \u8c03\u8bd5\uff0c\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u52a0\u5165\u65ad\u70b9\uff0c\u5355\u6b65\u6267\u884c\uff0c\u4e00\u5207\u90fd\u662f\u90a3\u4e48\u719f\u6089\uff0c\u90a3\u4e48\u4f18\u96c5\u3002"),Object(c.b)("h2",{id:"\u8981\u600e\u4e48\u7ba1\u7406\u7a0b\u5e8f\u7248\u672c\uff1f"},"\u8981\u600e\u4e48\u7ba1\u7406\u7a0b\u5e8f\u7248\u672c\uff1f"),Object(c.b)("p",null,"\u7a0b\u5e8f\u5458\u7684\u5927\u8111\u4e0d\u662f\u4e07\u80fd\u7684\uff0c\u4e0d\u53ef\u80fd\u8bb0\u4f4f\u6bcf\u6b21\u4fee\u6539\u7684\u5185\u5bb9\uff0c\u4f46\u662f\u7248\u672c\u7ba1\u7406\u5de5\u5177\u53ef\u4ee5\u3002\u7248\u672c\u7ba1\u7406\u662f\u4f18\u79c0\u7684\u7a0b\u5e8f\u5458\u5f00\u53d1\u7cfb\u7edf\u524d\u9996\u5148\u8981\u8003\u8651\u7684\u95ee\u9898\u3002\u5982\u679c\u662f\u5f00\u53d1\u7a0d\u5fae\u5927\u4e00\u70b9\u7684\u9879\u76ee\uff0c\u66f4\u9700\u8981\u591a\u4eba\u5408\u4f5c\u3002\u90a3\u5982\u4f55\u521b\u5efaissues\uff0c\u5982\u4f55\u8ffd\u8e2a\u6bcf\u4e00\u4e2a\u5f00\u53d1\u4eba\u5458\u6bcf\u6b21\u4fee\u6539\u7684\u5185\u5bb9\u5c31\u975e\u5e38\u91cd\u8981\u3002\u534e\u708e\u9b54\u65b9\u4f7f\u7528\u6e90\u7801\u7684\u65b9\u5f0f\u4fdd\u5b58\u6240\u6709\u7684\u4e1a\u52a1\u914d\u7f6e\u6587\u4ef6\u548c\u4e1a\u52a1\u903b\u8f91\u811a\u672c\uff0c\u5f00\u53d1\u4eba\u5458\u6240\u6709\u7684\u667a\u6167\u7ed3\u6676\u90fd\u53ef\u4ee5\u4fdd\u5b58\u5230Github\u7248\u672c\u5e93\u4e2d\uff0c\u5e76\u7ed3\u5408Github\u5f3a\u5927\u7684\u529f\u80fd\u53ef\u4ee5\u63d0\u4ea4\u3001\u56de\u9000\u3001\u521b\u5efa\u5206\u652f\u3001\u53d1\u5e03Release\uff0c\u8fd8\u662f\u90a3\u4e48\u719f\u6089\uff0c\u90a3\u4e48\u4f18\u96c5\u3002\u901a\u8fc7Gitbub Issues\uff0c\u4f60\u53ef\u4ee5\u628a\u5ba2\u6237\u63d0\u7684\u6bcf\u4e00\u4e2a\u9700\u6c42\u8bb0\u5f55\u4e0b\u6765\uff0c\u5e76\u4e0e\u6e90\u7801\u4fee\u6539\u5386\u53f2\u7ed1\u5b9a\uff0c\u5c06\u6765\u5ba2\u6237\u626f\u76ae\u7684\u65f6\u5019\uff0c\u8fd9\u662f\u975e\u5e38\u91cd\u8981\u7684\u8bc1\u636e \ud83d\ude0a\u3002"),Object(c.b)("h2",{id:"\u8981\u6539\u52a8\u7cfb\u7edf\u5185\u6838\u4e86\uff0c\u600e\u4e48\u529e\uff1f"},"\u8981\u6539\u52a8\u7cfb\u7edf\u5185\u6838\u4e86\uff0c\u600e\u4e48\u529e\uff1f"),Object(c.b)("p",null,"\u518d\u597d\u7684\u5f00\u53d1\u5e73\u53f0\u4e0d\u53ef\u80fd100%\u7684\u6ee1\u8db3\u5ba2\u6237\u9700\u6c42\uff0c\u5c24\u5176\u662f\u4e2d\u56fd\u7684\u7528\u6237\uff0c\u7ecf\u5e38\u4f1a\u63d0\u4e00\u4e9b\u5343\u5947\u767e\u602a\u7684\u9700\u6c42\u3002\u5f53\u7136\uff0c\u5bf9\u4e8e\u7edd\u5927\u90e8\u5206\u9700\u6c42\uff0c\u6211\u4eec\u662f\u5efa\u8bae\u5f00\u53d1\u4eba\u5458\u6309\u7167\u7cfb\u7edf\u63d0\u4f9b\u7684\u914d\u7f6e\u5165\u53e3\u53bb\u89e3\u51b3\uff0c\u800c\u4e0d\u662f\u6539\u52a8\u5185\u6838\u3002\u4f46\u662f\u5fc5\u987b\u8981\u6539\u52a8\u7684\u65f6\u5019\uff0c\u534e\u708e\u9b54\u65b9\u8d34\u5fc3\u7684\u5f00\u653e\u4e86\u6240\u6709\u5185\u6838\u6e90\u4ee3\u7801\uff0c\u5e76\u63d0\u4f9b\u5168\u7a0b\u6280\u672f\u6307\u5bfc\u670d\u52a1\uff0c\u534f\u52a9\u5f00\u53d1\u4eba\u5458\u76f4\u63a5\u4fee\u6539\u5185\u6838\u3002"),Object(c.b)("h2",{id:"\u8981\u600e\u4e48\u63a7\u5236\u6570\u636e\u6743\u9650\uff1f"},"\u8981\u600e\u4e48\u63a7\u5236\u6570\u636e\u6743\u9650\uff1f"),Object(c.b)("p",null,"\u65e2\u7136\u662f\u4e1a\u52a1\u7cfb\u7edf\uff0c\u6743\u9650\u63a7\u5236\u5c31\u663e\u5f97\u975e\u5e38\u91cd\u8981\u3002\u6211\u521b\u5efa\u7684\u6570\u636e\uff0c\u54ea\u4e9b\u4eba\u80fd\u770b\uff0c\u54ea\u4e9b\u4eba\u80fd\u6539\uff0c\u751a\u81f3\u54ea\u4e9b\u4eba\u80fd\u770b\u80fd\u6539\u54ea\u4e9b\u5b57\u6bb5\uff0c\u8fd9\u4e9b\u90fd\u8981\u63a7\u5236\u3002\u4f46\u5982\u679c\u8fd9\u4e9b\u63a7\u5236\u90fd\u5199\u5728\u4ee3\u7801\u4e2d\u90a3\u4e5f\u592a\u7d2f\u4e86\uff0c\u800c\u4e14\u4e0d\u5229\u4e8e\u540e\u671f\u7ef4\u62a4\u3002\u597d\u7684\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0\uff0c\u90fd\u8981\u5185\u7f6e\u4e00\u5957\u5b8c\u6574\u7684\u90e8\u95e8\u3001\u89d2\u8272\u3001\u6743\u9650\u63a7\u5236\u4f53\u7cfb\uff0c\u4e0d\u9700\u8981\u5f00\u53d1\u4eba\u5458\u4ecb\u5165\uff0c\u540e\u671f\u7cfb\u7edf\u7ba1\u7406\u5458\u5c31\u80fd\u63a5\u624b\u7cfb\u7edf\u7684\u6743\u9650\u8c03\u6574\u3002"),Object(c.b)("h2",{id:"\u8981\u600e\u4e48\u5f00\u53d1\u4e1a\u52a1\u5ba1\u6279\uff1f"},"\u8981\u600e\u4e48\u5f00\u53d1\u4e1a\u52a1\u5ba1\u6279\uff1f"),Object(c.b)("p",null,"\u5ba1\u6279\u662f\u4e2d\u56fd\u7ba1\u7406\u7684\u4e00\u5927\u7279\u8272\uff0c\u907f\u514d\u626f\u76ae\uff0c\u4e5f\u660e\u786e\u8d23\u4efb\u3002\u534e\u708e\u9b54\u65b9\u5185\u7f6e\u4e86\u7b26\u5408\u4e2d\u56fd\u7279\u8272\u6d41\u7a0b\u5f15\u64ce\uff0c\u5e76\u63d0\u4f9b\u4e86\u56fe\u5f62\u5316\u7684\u8868\u5355\u4e0e\u6d41\u7a0b\u8bbe\u8ba1\u5de5\u5177\uff0c\u4e0d\u9700\u8981\u5f00\u53d1\u4eba\u5458\u4ecb\u5165\uff0c\u7528\u6237\u7684\u7cfb\u7edf\u7ba1\u7406\u5458\u5c31\u80fd\u81ea\u4e3b\u914d\u7f6e\u3001\u76d1\u63a7\u3001\u7ba1\u7406\u4e1a\u52a1\u6d41\u7a0b\u3002\u6d41\u7a0b\u4e2d\u7684\u6570\u636e\u8fd8\u80fd\u901a\u8fc7\u914d\u7f6e\u81ea\u52a8\u5f52\u6863\u8fdb\u5165\u4e1a\u52a1\u53f0\u8d26\uff0c\u66f4\u662f\u7701\u6389\u4e86\u63a5\u53e3\u5f00\u53d1\u7684\u6210\u672c\u3002"),Object(c.b)("h2",{id:"\u8981\u600e\u4e48\u5f00\u53d1\u7edf\u8ba1\u62a5\u8868\uff1f"},"\u8981\u600e\u4e48\u5f00\u53d1\u7edf\u8ba1\u62a5\u8868\uff1f"),Object(c.b)("p",null,"\u5bf9\u4e8e\u7cfb\u7edf\u5f00\u53d1\u6765\u8bf4\uff0c\u540e\u671f\u7684\u6570\u636e\u5206\u6790\u975e\u5e38\u91cd\u8981\u3002\u534e\u708e\u9b54\u65b9\u5185\u7f6e\u4e86\u4e00\u5957\u62a5\u8868\u8bbe\u8ba1\u5de5\u5177\uff0c\u4e0d\u9700\u8981\u5f00\u53d1\u4eba\u5458\u4ecb\u5165\uff0c\u7528\u6237\u7684\u7cfb\u7edf\u7ba1\u7406\u5458\u5c31\u80fd\u81ea\u4e3b\u914d\u7f6e\u5404\u79cd\u62a5\u8868\uff0c\u5305\u62ec\u6570\u636e\u900f\u89c6\u56fe\u3002\u66f4\u795e\u5947\u7684\u662f\uff0c\u7cfb\u7edf\u5728\u751f\u6210\u62a5\u8868\u7684\u65f6\u5019\uff0c\u4f1a\u81ea\u52a8\u8ba1\u7b97\u5f53\u524d\u7528\u6237\u7684\u6743\u9650\uff0c\u540c\u4e00\u5f20\u62a5\u8868\uff0c\u6839\u636e\u7528\u6237\u6743\u9650\u4e0d\u540c\uff0c\u770b\u5230\u7684\u6570\u636e\u8303\u56f4\u4e5f\u4e0d\u540c\u3002\u5f53\u7136\uff0c\u5185\u7f6e\u7684\u62a5\u8868\u5de5\u5177\u4e0d\u662f\u4e07\u80fd\u7684\uff0c\u5bf9\u4e8e\u590d\u6742\u7684\u62a5\u8868\u9700\u6c42\uff0c\u534e\u708e\u9b54\u65b9\u4e5f\u63d0\u4f9b\u4e86\u7f16\u5199\u4ee3\u7801\u7684\u6a21\u5f0f\uff0c\u4f8b\u5982\u4f7f\u7528jsreport\u5f00\u53d1\u62a5\u8868\u3002"),Object(c.b)("h2",{id:"\u5f00\u53d1\u7684\u7cfb\u7edf\uff0c\u53ef\u4ee5\u7528\u4e8e\u5927\u578b\u9879\u76ee\u5417\uff1f"},"\u5f00\u53d1\u7684\u7cfb\u7edf\uff0c\u53ef\u4ee5\u7528\u4e8e\u5927\u578b\u9879\u76ee\u5417\uff1f"),Object(c.b)("p",null,"\u8fd9\u662f\u771f\u6b63\u7684\u96be\u9898\u3002\u5f00\u53d1\u4e00\u4e2a\u5c0f\u7cfb\u7edf\u7ed9\u51e0\u767e\u4e2a\u7528\u6237\u7528\u5f88\u591a\u7a0b\u5e8f\u5458\u90fd\u80fd\u505a\u5230\u3002\u4f46\u662f\u5982\u679c\u9762\u4e34\u6570\u5343\u3001\u6570\u4e07\u3001\u6570\u5341\u4e07\u7684\u7528\u6237\u91cf\uff0c\u5219\u5fc5\u987b\u8981\u67b6\u6784\u4e8e\u4e00\u5957\u53ef\u4ee5\u6301\u7eed\u6269\u5c55\u7684\u5e73\u53f0\u3002\u534e\u708e\u9b54\u65b9\u5185\u6838\u57fa\u4e8eNodeJS\u5f00\u53d1\uff0c\u53ef\u4ee5\u8f7b\u677e\u90e8\u7f72\u6210\u96c6\u7fa4\u6a21\u5f0f\uff0c\u540c\u65f6\u8fd0\u884c\u6570\u5341\u4e2a\u6570\u767e\u4e2a\u670d\u52a1\uff0c\u4e2a\u522b\u670d\u52a1\u5668\u5d29\u6e83\u5b8c\u5168\u4e0d\u4f1a\u5f71\u54cd\u7528\u6237\u4f7f\u7528\u3002\u800c\u6570\u636e\u5e93\u91c7\u7528MongoDB\uff0c\u4e5f\u53ef\u4ee5\u8f7b\u677e\u642d\u5efa\u6210\u96c6\u7fa4\u6a21\u5f0f\uff0c\u6570\u53f0\u3001\u6570\u5341\u53f0\u670d\u52a1\u5668\u540c\u65f6\u8fd0\u884c\uff0c\u66f4\u96be\u80fd\u53ef\u8d35\u7684\u662f\uff0c\u5373\u4f7f\u5176\u4e2d\u4e2a\u522b\u670d\u52a1\u5668\u5954\u6e83\uff0c\u7cfb\u7edf\u6570\u636e\u4e5f\u5b8c\u5168\u4e0d\u4f1a\u4e22\u5931\u3002"),Object(c.b)("h2",{id:"\u5f00\u53d1\u7684\u7cfb\u7edf\uff0c\u53ef\u4ee5\u4f7f\u7528\u624b\u673a\u8bbf\u95ee\u5417\uff1f"},"\u5f00\u53d1\u7684\u7cfb\u7edf\uff0c\u53ef\u4ee5\u4f7f\u7528\u624b\u673a\u8bbf\u95ee\u5417\uff1f"),Object(c.b)("p",null,"\u5bf9\u4e8e\u5f00\u53d1\u4eba\u5458\u6765\u8bf4\uff0c\u9002\u914d\u624b\u673a\u754c\u9762\u662f\u4e00\u4ef6\u5f88\u9ebb\u70e6\u7684\u4e8b\u60c5\u3002\u8981\u517c\u5bb9\u5b89\u5353\u3001\u82f9\u679c\u7cfb\u7edf\uff0c\u82f9\u679c\u7cfb\u7edf\u8981\u8003\u8651\u624b\u673a\u3001\u5e73\u677f\uff0c\u5b89\u5353\u7cfb\u7edf\u66f4\u662f\u8981\u8003\u8651\u5404\u79cd\u7248\u672c\uff0c\u8fd9\u4e0d\u542c\u8bf4\u534e\u4e3a\u8981\u51fa\u81ea\u5df1\u7684\u624b\u673a\u7cfb\u7edf\u4e86\uff1f\u7136\u800c\u8fd9\u4e9b\u90fd\u4e0d\u9700\u8981\u62c5\u5fc3\u3002\u534e\u708e\u9b54\u65b9\u5185\u7f6e\u4e86\u63d0\u4f9b\u4e86\u624b\u673a\u5ba2\u6237\u7aef\uff0c\u4f60\u6240\u6709\u7684\u5fe7\u601d\u6211\u4eec\u90fd\u4e3a\u4e86\u89e3\u51b3\u4e86\uff0c\u662f\u7684\uff0c\u4f60\u4ec0\u4e48\u90fd\u4e0d\u7528\u505a\uff0c\u4f60\u5f00\u53d1\u7684\u7cfb\u7edf\u5df2\u7ecf\u53ef\u4ee5\u7528\u624b\u673a\u5ba2\u6237\u7aef\u8bbf\u95ee\u4e86\u3002"),Object(c.b)("h2",{id:"\u6570\u636e\u88ab\u7be1\u6539\u4e86\u600e\u4e48\u529e\uff1f"},"\u6570\u636e\u88ab\u7be1\u6539\u4e86\u600e\u4e48\u529e\uff1f"),Object(c.b)("p",null,"\u65e2\u7136\u4e1a\u52a1\u7cfb\u7edf\u8981\u6570\u636e\u5171\u4eab\uff0c\u5fc5\u7136\u5b58\u5728\u591a\u4eba\u540c\u65f6\u7f16\u8f91\u4e00\u6761\u6570\u636e\u7684\u95ee\u9898\uff0c\u4f20\u7edf\u7684\u5f00\u53d1\u6a21\u5f0f\uff0c\u6570\u636e\u6539\u4e86\u5c31\u6539\u4e86\uff0c\u4fdd\u5b58\u5230\u6570\u636e\u5e93\u4e2d\uff0c\u7559\u4e0d\u4e0b\u4e00\u4e1d\u75d5\u8ff9\u3002\u597d\u7684\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0\uff0c\u5305\u62ecSalesforce\uff0c odoo \u548c\u534e\u708e\u9b54\u65b9\uff0c\u90fd\u63d0\u4f9b\u4e86\u4e00\u79cd\u8bb0\u5f55\u5ba1\u8ba1\u7684\u529f\u80fd\uff0c\u5bf9\u4e8e\u5173\u952e\u4e1a\u52a1\u8868\u53ef\u4ee5\u542f\u7528\u8bb0\u5f55\u5ba1\u8ba1\u529f\u80fd\uff0c\u8fd9\u6837\u7528\u6237\u7684\u6bcf\u4e00\u6b21\u4fee\u6539\u90fd\u4f1a\u7559\u4e0b\u75d5\u8ff9\uff0c\u4ec0\u4e48\u4eba\uff0c\u5728\u4ec0\u4e48\u65f6\u95f4\uff0c\u4fee\u6539\u4e86\u54ea\u4e2a\u5b57\u6bb5\uff0c\u4ece\u4ec0\u4e48\u503c\u6539\u6210\u4e86\u4ec0\u4e48\u503c\uff0c\u90fd\u4f1a\u5b8c\u6574\u7684\u8bb0\u5f55\u5907\u67e5\u3002"),Object(c.b)("h2",{id:"\u7a0b\u5e8f\u5458\u8981\u79bb\u804c\u4e86\u600e\u4e48\u529e\uff1f"},"\u7a0b\u5e8f\u5458\u8981\u79bb\u804c\u4e86\u600e\u4e48\u529e\uff1f"),Object(c.b)("p",null,"\u5bf9\u4e8e\u516c\u53f8\u6765\u8bf4\uff0c\u7a0b\u5e8f\u5458\u7684\u6d41\u52a8\u6027\u901a\u5e38\u662f\u4e00\u4e2a\u5927\u95ee\u9898\uff0c\u56e0\u4e3a\u5927\u578b\u7cfb\u7edf\u7684\u4ee3\u7801\u91cf\u975e\u5e38\u5927\uff0c\u4e00\u65e6\u6838\u5fc3\u7a0b\u5e8f\u5458\u79bb\u804c\uff0c\u5728\u7cfb\u7edf\u7ef4\u62a4\u3001\u6301\u7eed\u5f00\u53d1\u65b9\u9762\u90fd\u4f1a\u9762\u4e34\u6bd4\u8f83\u5927\u7684\u95ee\u9898\u3002\u800c\u4f7f\u7528\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0\u4e4b\u540e\uff0c\u56e0\u4e3a\u7a0b\u5e8f\u5458\u53ea\u9700\u8981\u7f16\u5199\u6838\u5fc3\u4e1a\u52a1\u903b\u8f91\uff0c\u4ee3\u7801\u91cf\u901a\u5e38\u53ea\u6709\u4f20\u7edf\u9879\u76ee\u76841%\u751a\u81f3\u66f4\u5c11\uff0c\u7ef4\u62a4\u548c\u4ea4\u63a5\u53d8\u5f97\u5bb9\u6613\u5f88\u591a\u3002\u800c\u7cfb\u7edf\u5185\u6838\u7531\u5382\u5546\u7edf\u4e00\u7ef4\u62a4\u3001\u5b9a\u671f\u5347\u7ea7\uff0c\u5c31\u7b97\u5185\u6838\u4ee3\u7801\u670910\u4ebf\u884c\uff0c\u4e5f\u5b8c\u5168\u4e0d\u7528\u62c5\u5fc3\u3002"),Object(c.b)("h2",{id:"\u5f00\u53d1\u7684\u7cfb\u7edf\uff0c\u80fd\u5f53\u6210\u4ea7\u54c1\u9500\u552e\u5417\uff1f"},"\u5f00\u53d1\u7684\u7cfb\u7edf\uff0c\u80fd\u5f53\u6210\u4ea7\u54c1\u9500\u552e\u5417\uff1f"),Object(c.b)("p",null,"\u65e2\u7136\u82b1\u4e86\u597d\u5927\u7684\u529b\u6c14\u5f00\u53d1\uff0c\u53ea\u5e94\u7528\u5728\u4e00\u4e2a\u9879\u76ee\u4e0a\u5f53\u7136\u662f\u592a\u6d6a\u8d39\u4e86\uff0c\u7edd\u5bf9\u5bf9\u4e0d\u8d77\u5f00\u53d1\u4eba\u5458\u7684\u5fc3\u8840\u548c\u516c\u53f8\u7684\u6295\u5165\u3002\u7c7b\u4f3cSalesforce\u3001Zoho Creator\u8fd9\u79cd\u5728\u7ebf\u7684\u5f00\u53d1\u5de5\u5177\uff0c\u4f60\u7684\u5f00\u53d1\u6210\u679c\u6ca1\u6709\u529e\u6cd5\u6253\u5305\u6210\u4f60\u7684\u4ea7\u54c1\u9500\u552e\u3002\u534e\u708e\u9b54\u65b9\u5b8c\u5168\u5f00\u6e90\uff0c\u5e76\u4e14\u5f00\u6e90\u793e\u533a\u7248\u5b8c\u5168\u514d\u8d39\u3002\u4f7f\u7528\u534e\u708e\u9b54\u65b9\u5f00\u53d1\u7684\u5e94\u7528\u7cfb\u7edf\uff0c\u53ef\u4ee5\u672c\u5730\u90e8\u7f72\uff0c\u53ef\u4ee5\u6253\u5305\u6210\u81ea\u5df1\u7684\u4ea7\u54c1\u9500\u552e\uff0c\u751a\u81f3\u53ef\u4ee5\u53d1\u5e03\u5230\u534e\u708e\u7684\u5e94\u7528\u5e02\u573a\uff0c\u7531\u534e\u708e\u548c\u5168\u7403\u5408\u4f5c\u4f19\u4f34\u5e2e\u4f60\u5171\u540c\u63a8\u5e7f\u3002"),Object(c.b)("h2",{id:"\u5bf9\u4e8e\u7a0b\u5e8f\u5458\u4e2a\u4eba\u53d1\u5c55\u6709\u5e2e\u52a9\u5417\uff1f"},"\u5bf9\u4e8e\u7a0b\u5e8f\u5458\u4e2a\u4eba\u53d1\u5c55\u6709\u5e2e\u52a9\u5417\uff1f"),Object(c.b)("p",null,"\u6548\u7387\u7684\u63d0\u9ad8\u63a8\u52a8\u793e\u4f1a\u7684\u8fdb\u6b65\u3002\u4ee5\u524d\u4f60\u53ef\u80fd\u662f\u516c\u53f8\u7814\u53d1\u90e8\u95e8\u4e0b\u7684\u4e00\u9897\u87ba\u4e1d\u9489\uff0c\u8d1f\u8d23\u4e1a\u52a1\u7cfb\u7edf\u67d0\u4e00\u4e2a\u529f\u80fd\u7684\u5f00\u53d1\u3002\u5207\u6362\u5230\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0\u4e4b\u540e\uff0c\u4f60\u4e00\u4e2a\u4eba\u53ef\u4ee5\u72ec\u7acb\u8d1f\u8d23\u4e00\u4e2a\u5927\u578b\u9879\u76ee\uff0c\u5f00\u53d1\u6548\u7387\u5927\u5e45\u63d0\u5347\u3002\u4f60\u7684\u5de5\u4f5c\u5185\u5bb9\u4e5f\u4f1a\u7531\u5199\u4e00\u4e9b\u67af\u71e5\u7684\u4ee3\u7801\uff0c\u8f6c\u53d8\u6210\u4e0e\u4e1a\u52a1\u4eba\u5458\u6c9f\u901a\uff0c\u5206\u6790\u9700\u6c42\uff0c\u8bbe\u8ba1\u6570\u636e\u6a21\u578b\uff0c\u7f16\u5199\u6838\u5fc3\u4e1a\u52a1\u903b\u8f91\uff0c\u9010\u6b65\u63d0\u5347\u5230\u4ea7\u54c1\u7ecf\u7406\u7684\u5c42\u6b21\uff0c\u800c\u4e14\u662f\u4e00\u4e2a\u6781\u5176\u7a00\u6709\u7684\u3001\u4f1a\u5199\u7a0b\u5e8f\u7684\u4ea7\u54c1\u7ecf\u7406 \ud83d\ude0a\u3002\u521b\u9020\u7684\u4ef7\u503c\u4e0d\u540c\u3002\u76f8\u4fe1\u672a\u6765\u80fd\u83b7\u5f97\u6536\u5165\u4e5f\u4f1a\u5927\u4e0d\u540c\u3002"),Object(c.b)(l.a,{background:"#f4f4f4",padding:"50",mdxType:"Section"},Object(c.b)("h2",{id:"\u534e\u708e\u9b54\u65b9\u5f00\u6e90\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0"},"\u534e\u708e\u9b54\u65b9\u5f00\u6e90\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0"),Object(c.b)("p",null,"\u534e\u708e\u9b54\u65b9\u521b\u65b0\u7684\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u63cf\u8ff0\u4e1a\u52a1\u6a21\u578b\u548c\u4e1a\u52a1\u529f\u80fd\uff0c\u5f00\u53d1\u4eba\u5458\u53ea\u9700\u8981\u7f16\u5199\u7b80\u5355\u7684\u914d\u7f6e\u6587\u4ef6\u5c31\u53ef\u4ee5\u6784\u5efa\u4f01\u4e1a\u7ea7\u5e94\u7528\u7a0b\u5e8f\uff0c\u6570\u767e\u9879\u7cfb\u7edf\u529f\u80fd\u90fd\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u53c2\u6570\u8fdb\u884c\u914d\u7f6e\u3002"),Object(c.b)("p",null,"\u914d\u7f6e\u6587\u4ef6\u548c\u4e0e\u4e1a\u52a1\u903b\u8f91\u76f8\u5173\u7684\u89e6\u53d1\u811a\u672c\uff0c\u5c31\u6784\u6210\u4e86\u4e00\u4e2a\u9879\u76ee\u7684\u6838\u5fc3\u6e90\u4ee3\u7801\uff0c\u7b80\u5355\u6613\u61c2\uff0c\u6613\u4e8e\u7ef4\u62a4\u3002\u5bf9\u4e8e\u5927\u578b\u9879\u76ee\uff0c\u6e90\u7801\u53ef\u4ee5\u8f7b\u677e\u4fdd\u5b58\u5230Github\uff0c\u53ef\u4ee5\u968f\u65f6\u8ffd\u8e2a\u5230\u5f00\u53d1\u4eba\u5458\u7684\u4fee\u6539\u5386\u53f2\u3002"),Object(c.b)("a",{class:"bg-blue-700 text-white px-5 py-3 font-semibold rounded hover:bg-blue-800 hover:text-white ml-3",href:"/developer/"},"\u514d\u8d39\u6559\u7a0b"),Object(c.b)("a",{class:"bg-blue-700 text-white px-5 py-3 font-semibold rounded hover:bg-blue-800 hover:text-white ml-3",href:"/platform/try/"},"\u8bd5\u7528"),Object(c.b)("p",null),Object(c.b)("video",{src:"https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/creator/creator_object.mp4",controls:"controls",poster:"/assets/creator_object.png",width:"100%",autoplay:"autoplay",muted:"muted",loop:"loop",playsinline:"playsinline"},"your browser does not support the video tag"),Object(c.b)("p",null)))}u.isMDXComponent=!0}}]);