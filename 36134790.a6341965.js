(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{136:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(1),o=r(6),i=(r(0),r(418)),a=r(419),c={title:"\u7528\u6237\u6559\u7a0b\uff1a\u5982\u4f55\u586b\u5355\u4e0e\u5ba1\u6279",sidebar_label:"\u586b\u5355\u4e0e\u5ba1\u6279",hide_table_of_contents:!0,background:"/img/banner/service-overview-lg.png"},u={unversionedId:"videos/workflow/user-contracts",id:"videos/workflow/user-contracts",isDocsHomePage:!1,title:"\u7528\u6237\u6559\u7a0b\uff1a\u5982\u4f55\u586b\u5355\u4e0e\u5ba1\u6279",description:"<Video",source:"@site/../docs/videos/workflow/user-contracts.md",slug:"/videos/workflow/user-contracts",permalink:"/videos/workflow/user-contracts",version:"current",sidebar_label:"\u586b\u5355\u4e0e\u5ba1\u6279"},l=[],s={rightToc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)(a.a,{poster:"https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/workflow/user-contracts.jpg",autoplay:!0,urls:[{name:"\u9ad8\u6e05",url:"https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/workflow/user-contracts.mp4"}],mdxType:"Video"}))}p.isMDXComponent=!0},418:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return y}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,y=p["".concat(a,".").concat(d)]||p[d]||f[d]||i;return r?o.a.createElement(y,c({ref:t},l,{components:r})):o.a.createElement(y,c({ref:t},l))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},419:function(e,t,r){"use strict";var n=r(4),o=r(420),i=r(0),a=r.n(i),c=function(e){function t(t){var r;return r=e.call(this,t)||this,t.url?r.url=t.url:r.url=r.props.urls[0].url,r.id="video"+r.url.split("").reduce((function(e,t){return(e<<5)-e+t.charCodeAt(0)|0}),0),r}Object(n.a)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=this;this.timer=setTimeout((function(){return e.initPlayer()}),100)},r.initPlayer=function(){if(!(this.props.urls.length<1)){var e=Object.assign({},this.props);e.id=this.id,e.url=this.url,new Player(e).emit("resourceReady",e.urls)}},r.componentWillUnmount=function(){clearTimeout(this.timer)},r.render=function(){return a.a.createElement("div",{id:this.id})},t}(a.a.Component);Object(o.a)(c,"defaultProps",{urls:[],poster:"",autoplay:!1,loop:!1,videoInit:!1,fluid:!0,playbackRate:[.75,1,1.25,1.5,2],defaultPlaybackRate:1,download:!0,pip:!1,keyShortcut:"on",airplay:!0,lang:"zh-cn",playsinline:!1,definitionActive:"hover","x5-video-player-type":"h5","x5-video-player-fullscreen":!0,"x5-video-orientation":"landscape"}),t.a=c},420:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))}}]);