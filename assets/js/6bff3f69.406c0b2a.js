(self.webpackChunk=self.webpackChunk||[]).push([[115],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o().createContext({}),s=function(e){var t=o().useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return o().createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o().createElement(o().Fragment,{},t)}},d=o().forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,m=p["".concat(a,".").concat(d)]||p[d]||f[d]||i;return r?o().createElement(m,c(c({ref:t},u),{},{components:r})):o().createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return o().createElement.apply(null,a)}return o().createElement.apply(null,r)}d.displayName="MDXCreateElement"},57375:function(e,t,r){"use strict";var n=r(9526),o=r(67294),i=r.n(o),a=function(e){function t(t){var r;return r=e.call(this,t)||this,t.url?r.url=t.url:r.url=r.props.urls[0].url,r.id="video"+r.url.split("").reduce((function(e,t){return(e<<5)-e+t.charCodeAt(0)|0}),0),r}(0,n.Z)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=this;this.timer=setTimeout((function(){return e.initPlayer()}),100)},r.initPlayer=function(){if(!(this.props.urls.length<1)){var e=Object.assign({},this.props);e.id=this.id,e.url=this.url,new Player(e).emit("resourceReady",e.urls)}},r.componentWillUnmount=function(){clearTimeout(this.timer)},r.render=function(){return i().createElement("div",{id:this.id})},t}(i().Component);a.defaultProps={urls:[],poster:"",autoplay:!1,loop:!1,videoInit:!1,fluid:!0,playbackRate:[.75,1,1.25,1.5,2],defaultPlaybackRate:1,download:!0,pip:!1,keyShortcut:"on",airplay:!0,lang:"zh-cn",playsinline:!1,definitionActive:"hover","x5-video-player-type":"h5","x5-video-player-fullscreen":!0,"x5-video-orientation":"landscape"},t.Z=a},54645:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var n=r(74034),o=r(79973),i=(r(67294),r(3905)),a=r(57375),c=["components"],l={title:"\u5982\u4f55\u81ea\u5b9a\u4e49\u5ba1\u6279\u6d41\u7a0b\uff1f",sidebar_label:"\u5982\u4f55\u81ea\u5b9a\u4e49\u5ba1\u6279\u6d41\u7a0b\uff1f",hide_table_of_contents:!0},u=void 0,s={unversionedId:"videos/workflow/admin-contracts",id:"videos/workflow/admin-contracts",isDocsHomePage:!1,title:"\u5982\u4f55\u81ea\u5b9a\u4e49\u5ba1\u6279\u6d41\u7a0b\uff1f",description:"<Video",source:"@site/../docs/videos/workflow/admin-contracts.mdx",sourceDirName:"videos/workflow",slug:"/videos/workflow/admin-contracts",permalink:"/videos/workflow/admin-contracts",version:"current",frontMatter:{title:"\u5982\u4f55\u81ea\u5b9a\u4e49\u5ba1\u6279\u6d41\u7a0b\uff1f",sidebar_label:"\u5982\u4f55\u81ea\u5b9a\u4e49\u5ba1\u6279\u6d41\u7a0b\uff1f",hide_table_of_contents:!0},sidebar:"\u89c6\u9891",previous:{title:"\u5206\u6790\u60a8\u7684\u6570\u636e",permalink:"/videos/report"},next:{title:"\u5982\u4f55\u586b\u5355\u4e0e\u5ba1\u6279\uff1f",permalink:"/videos/workflow/user-contracts"}},p=[],f={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(a.Z,{poster:"https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/workflow/admin-contracts.jpg",autoplay:!0,urls:[{name:"\u9ad8\u6e05",url:"https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/workflow/admin-contracts.mp4"}],mdxType:"Video"}))}d.isMDXComponent=!0}}]);