(self.webpackChunk=self.webpackChunk||[]).push([[735],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o().createContext({}),s=function(e){var t=o().useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return o().createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o().createElement(o().Fragment,{},t)}},f=o().forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=n,m=p["".concat(a,".").concat(f)]||p[f]||d[f]||i;return r?o().createElement(m,c(c({ref:t},u),{},{components:r})):o().createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return o().createElement.apply(null,a)}return o().createElement.apply(null,r)}f.displayName="MDXCreateElement"},57375:function(e,t,r){"use strict";var n=r(9526),o=r(67294),i=r.n(o),a=function(e){function t(t){var r;return r=e.call(this,t)||this,t.url?r.url=t.url:r.url=r.props.urls[0].url,r.id="video"+r.url.split("").reduce((function(e,t){return(e<<5)-e+t.charCodeAt(0)|0}),0),r}(0,n.Z)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=this;this.timer=setTimeout((function(){return e.initPlayer()}),100)},r.initPlayer=function(){if(!(this.props.urls.length<1)){var e=Object.assign({},this.props);e.id=this.id,e.url=this.url,new Player(e).emit("resourceReady",e.urls)}},r.componentWillUnmount=function(){clearTimeout(this.timer)},r.render=function(){return i().createElement("div",{id:this.id})},t}(i().Component);a.defaultProps={urls:[],poster:"",autoplay:!1,loop:!1,videoInit:!1,fluid:!0,playbackRate:[.75,1,1.25,1.5,2],defaultPlaybackRate:1,download:!0,pip:!1,keyShortcut:"on",airplay:!0,lang:"zh-cn",playsinline:!1,definitionActive:"hover","x5-video-player-type":"h5","x5-video-player-fullscreen":!0,"x5-video-orientation":"landscape"},t.Z=a},86337:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return f}});var n=r(74034),o=r(79973),i=(r(67294),r(3905)),a=r(57375),c=["components"],l={title:"\u4ec0\u4e48\u662f\u5143\u6570\u636e\uff1f",sidebar_label:"\u4ec0\u4e48\u662f\u5143\u6570\u636e\uff1f",hide_table_of_contents:!0,background:"/img/banner/service-overview-lg.png"},u=void 0,s={unversionedId:"videos/lesson-metadata",id:"videos/lesson-metadata",isDocsHomePage:!1,title:"\u4ec0\u4e48\u662f\u5143\u6570\u636e\uff1f",description:"<Video",source:"@site/../docs/videos/lesson-metadata.mdx",sourceDirName:"videos",slug:"/videos/lesson-metadata",permalink:"/videos/lesson-metadata",version:"current",frontMatter:{title:"\u4ec0\u4e48\u662f\u5143\u6570\u636e\uff1f",sidebar_label:"\u4ec0\u4e48\u662f\u5143\u6570\u636e\uff1f",hide_table_of_contents:!0,background:"/img/banner/service-overview-lg.png"},sidebar:"\u89c6\u9891",previous:{title:"\u5982\u4f55\u521b\u5efa\u6279\u51c6\u8fc7\u7a0b\uff1f",permalink:"/videos/approval_process"},next:{title:"\u5982\u4f55\u5b9e\u73b0\u5143\u6570\u636e\u7684\u7248\u672c\u7ba1\u7406\uff1f",permalink:"/videos/lesson-metadata-synchronize"}},p=[],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(a.Z,{poster:"https://vod.steedos.com/image/cover/273D6FB669D94148889E5FE7A26A3D13-6-2.png",autoplay:!0,urls:[{name:"\u9ad8\u6e05",url:"https://vod.steedos.com/video/40072181-177297095c2-0000-0000-009-c59e0.mp4"},{name:"\u6807\u6e05",url:"https://vod.steedos.com/e0806fe35af74dccbec6d3a471ce686c/2b4088549d9c43408e9c3e2d3abbd333-6026bf2e9f9751565b0d211fea93967b-ld.mp4.mp4"}],mdxType:"Video"}))}f.isMDXComponent=!0}}]);