(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{371:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a({},t,{},e)),n},u=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(l,".").concat(d)]||u[d]||b[d]||o;return n?i.a.createElement(f,a({ref:t},s,{components:n})):i.a.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var s=2;s<o;s++)l[s]=n[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},380:function(e,t,n){"use strict";var r,i,o,l=n(0),a=n.n(l);class c extends a.a.Component{constructor(e){super(e),this.id="video-"+Math.random().toString(36).substring(5)}componentDidMount(){this.timer=setTimeout(()=>this.initPlayer(),100)}initPlayer(){if(this.props.urls.length<1)return;let e=Object.assign({},this.props);e.url||(e.url=this.props.urls[0].url),e.id=this.id,this.player=new Player(e),this.player.emit("resourceReady",e.urls)}componentWillUnmount(){clearTimeout(this.timer),this.player&&this.player.destroy&&this.player.destroy(!0)}render(){return a.a.createElement("div",{id:this.id})}}o={urls:[],poster:"",autoplay:!1,loop:!1,videoInit:!0,fluid:!0,playbackRate:[.75,1,1.25,1.5,2],defaultPlaybackRate:1,download:!0,pip:!1,keyShortcut:"on",airplay:!0,lang:"zh-cn",playsinline:!1,definitionActive:"hover","x5-video-player-type":"h5","x5-video-player-fullscreen":!0,"x5-video-orientation":"landscape"},(i="defaultProps")in(r=c)?Object.defineProperty(r,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[i]=o;t.a=c},60:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(1),i=n(6),o=(n(0),n(371)),l=n(380),a={title:"\u4f4e\u4ee3\u7801\u5f00\u53d1\u6559\u7a0b\uff1a\u5982\u4f55\u521b\u5efa\u5b50\u8868",sidebar_label:"\u4e1a\u52a1\u5bf9\u8c61\u5173\u8054",hide_table_of_contents:!0,hide_title:!0,background:"/img/banner/service-overview-lg.png"},c={id:"videos/lesson-object-relationship",title:"\u4f4e\u4ee3\u7801\u5f00\u53d1\u6559\u7a0b\uff1a\u5982\u4f55\u521b\u5efa\u5b50\u8868",description:"<Video ",source:"@site/../docs/videos/lesson-object-relationship.md",permalink:"/videos/lesson-object-relationship",sidebar_label:"\u4e1a\u52a1\u5bf9\u8c61\u5173\u8054",sidebar:"\u89c6\u9891",previous:{title:"\u4f4e\u4ee3\u7801\u5f00\u53d1\u6559\u7a0b\uff1a\u5982\u4f55\u521b\u5efa\u81ea\u5b9a\u4e49\u5e94\u7528\u7a0b\u5e8f\uff1f",permalink:"/videos/lesson-object"}},s=[{value:"\u534e\u708e\u9b54\u65b9\u4f4e\u4ee3\u7801\u5f00\u53d1\u6559\u7a0b\uff1a\u5982\u4f55\u521b\u5efa\u5b50\u8868",id:"\u534e\u708e\u9b54\u65b9\u4f4e\u4ee3\u7801\u5f00\u53d1\u6559\u7a0b\uff1a\u5982\u4f55\u521b\u5efa\u5b50\u8868",children:[{value:"\u7b2c\u4e00\u6b65\uff0c\u521b\u5efa\u4e00\u4e2a\u4ed8\u6b3e\u4e1a\u52a1\u5bf9\u8c61",id:"\u7b2c\u4e00\u6b65\uff0c\u521b\u5efa\u4e00\u4e2a\u4ed8\u6b3e\u4e1a\u52a1\u5bf9\u8c61",children:[]},{value:"\u7b2c\u4e8c\u6b65\uff0c\u5c06\u4ed8\u6b3e\u8bbe\u7f6e\u4e3a\u5408\u540c\u8868\u7684\u5b50\u8868\uff0c\u5e76\u6dfb\u52a0\u76f8\u5173\u5b57\u6bb5",id:"\u7b2c\u4e8c\u6b65\uff0c\u5c06\u4ed8\u6b3e\u8bbe\u7f6e\u4e3a\u5408\u540c\u8868\u7684\u5b50\u8868\uff0c\u5e76\u6dfb\u52a0\u76f8\u5173\u5b57\u6bb5",children:[]},{value:"\u7b2c\u4e09\u6b65\uff0c\u914d\u7f6e\u4ed8\u6b3e\u5217\u8868\u89c6\u56fe",id:"\u7b2c\u4e09\u6b65\uff0c\u914d\u7f6e\u4ed8\u6b3e\u5217\u8868\u89c6\u56fe",children:[]},{value:"\u7b2c\u56db\u6b65\uff0c\u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f",id:"\u7b2c\u56db\u6b65\uff0c\u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f",children:[]}]}],p={rightToc:s};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(l.a,{poster:"https://www-steedos-com.oss-cn-beijing.aliyuncs.com/videos/creator/steedos-object-relationship.jpg",autoplay:!0,urls:[{name:"\u9ad8\u6e05",url:"https://www-steedos-com.oss-cn-beijing.aliyuncs.com/videos/creator/steedos-object-relationship.mp4"}],mdxType:"Video"}),Object(o.b)("h2",{id:"\u534e\u708e\u9b54\u65b9\u4f4e\u4ee3\u7801\u5f00\u53d1\u6559\u7a0b\uff1a\u5982\u4f55\u521b\u5efa\u5b50\u8868"},"\u534e\u708e\u9b54\u65b9\u4f4e\u4ee3\u7801\u5f00\u53d1\u6559\u7a0b\uff1a\u5982\u4f55\u521b\u5efa\u5b50\u8868"),Object(o.b)("p",null,"\u534e\u708e\u9b54\u65b9\u662f\u65b0\u4e00\u4ee3\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0\uff0c\u672c\u6559\u7a0b\u4ee5\u5408\u540c\u7ba1\u7406\u4e3a\u4f8b\uff0c\u4e3a\u60a8\u6f14\u793a\u5982\u4f55\u4e3a\u5408\u540c\u521b\u5efa\u4e00\u4e2a\u4ed8\u6b3e\u5b50\u8868\u3002"),Object(o.b)("p",null,"\u4e3b\u8981\u5305\u62ec\u4ee5\u4e0b\u5185\u5bb9\uff1a\n\u7b2c\u4e00\u6b65\uff0c\u521b\u5efa\u4e00\u4e2a\u4ed8\u6b3e\u4e1a\u52a1\u5bf9\u8c61\uff1b\n\u7b2c\u4e8c\u6b65\uff0c\u5c06\u4ed8\u6b3e\u8bbe\u7f6e\u4e3a\u5408\u540c\u8868\u7684\u5b50\u8868\uff0c\u5e76\u6dfb\u52a0\u76f8\u5173\u5b57\u6bb5\uff1b\n\u7b2c\u4e09\u6b65\uff0c\u914d\u7f6e\u4ed8\u6b3e\u5217\u8868\u89c6\u56fe\uff1b\n\u7b2c\u56db\u6b65\uff0c\u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f\uff1b"),Object(o.b)("p",null,"\u4e0b\u9762\u6211\u4e3a\u5927\u5bb6\u6f14\u793a\u4e00\u4e0b\u5177\u4f53\u7684\u64cd\u4f5c\u8fc7\u7a0b\u3002"),Object(o.b)("p",null,"\u9996\u5148\u767b\u5f55\u534e\u708e\u9b54\u65b9\uff0c\u8fdb\u5165\u5230\u7ba1\u7406\u5458\u8bbe\u7f6e\u754c\u9762\u3002"),Object(o.b)("h3",{id:"\u7b2c\u4e00\u6b65\uff0c\u521b\u5efa\u4e00\u4e2a\u4ed8\u6b3e\u4e1a\u52a1\u5bf9\u8c61"},"\u7b2c\u4e00\u6b65\uff0c\u521b\u5efa\u4e00\u4e2a\u4ed8\u6b3e\u4e1a\u52a1\u5bf9\u8c61"),Object(o.b)("p",null,"\u70b9\u51fb\u5bf9\u8c61\u7ba1\u7406\u3002\u65b0\u5efa\u4e00\u4e2a\u4ed8\u6b3e\u4e1a\u52a1\u5bf9\u8c61\uff0c\u4f9d\u6b21\u8f93\u5165\u5bf9\u8c61\u540d\uff0c\u663e\u793a\u540d\u79f0\uff0c\u9009\u62e9\u5408\u9002\u56fe\u6807\uff0c\u70b9\u51fb\u5b8c\u6210\u3002"),Object(o.b)("h3",{id:"\u7b2c\u4e8c\u6b65\uff0c\u5c06\u4ed8\u6b3e\u8bbe\u7f6e\u4e3a\u5408\u540c\u8868\u7684\u5b50\u8868\uff0c\u5e76\u6dfb\u52a0\u76f8\u5173\u5b57\u6bb5"},"\u7b2c\u4e8c\u6b65\uff0c\u5c06\u4ed8\u6b3e\u8bbe\u7f6e\u4e3a\u5408\u540c\u8868\u7684\u5b50\u8868\uff0c\u5e76\u6dfb\u52a0\u76f8\u5173\u5b57\u6bb5"),Object(o.b)("p",null,"\u4e3a\u4e86\u628a\u4ed8\u6b3e\u6302\u5230\u5408\u540c\u8868\u4e0b\u9762\u4f5c\u4e3a\u5b50\u8868\uff0c\u6211\u4eec\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u201c\u76f8\u5173\u5408\u540c\u201d\u7684\u5b57\u6bb5\uff0c\u5b57\u6bb5\u7c7b\u578b\u9009\u62e9\u201c\u4e3b\u8868/\u5b50\u8868\u201d\uff0c\u5728\u5f15\u7528\u5bf9\u8c61\u4e2d\u9009\u62e9\u201c\u5408\u540c\u201d\u3002"),Object(o.b)("p",null,"\u901a\u8fc7\u8bbe\u7f6e\u201c\u4e3b\u8868/\u5b50\u8868\u201d\u7c7b\u578b\u7684\u5b57\u6bb5\uff0c\u4e24\u4e2a\u8868\u4e4b\u95f4\u81ea\u52a8\u521b\u5efa\u4e86\u5173\u8054\u5173\u7cfb\u3002"),Object(o.b)("p",null,"\u70b9\u51fb\u8fdb\u5165\u5408\u540c\u5217\u8868\uff0c\u9009\u62e9\u4e00\u4e2a\u5408\u540c\uff0c\u8fdb\u5165\u8be6\u60c5\u9875\uff0c\u53ef\u4ee5\u770b\u5230\uff0c\u9664\u4e86\u4e4b\u524d\u7684\u9644\u4ef6\u5b50\u8868\uff0c\u591a\u4e86\u4e00\u4e2a\u4ed8\u6b3e\u5b50\u8868\uff0c\u70b9\u51fb\u65b0\u5efa\u53ef\u4ee5\u76f4\u63a5\u4e3a\u5f53\u524d\u5408\u540c\u521b\u5efa\u4e00\u6761\u201c\u4ed8\u6b3e\u201d\u8bb0\u5f55\u3002"),Object(o.b)("p",null,"\u5bf9\u4e8e\u4ed8\u6b3e\u7684\u4e1a\u52a1\u6765\u8bf4\uff0c\u6211\u4eec\u8fd8\u5fc5\u987b\u8981\u6dfb\u52a0\u76f8\u5173\u7684\u4e1a\u52a1\u5b57\u6bb5\uff0c\u4f8b\u5982\u6536\u6b3e\u65b9\u3001\u8ba1\u5212\u4ed8\u6b3e\u65f6\u95f4\u3001\u4ed8\u6b3e\u91d1\u989d\u3001\u5df2\u5b8c\u6210\u7b49\u3002"),Object(o.b)("h3",{id:"\u7b2c\u4e09\u6b65\uff0c\u914d\u7f6e\u4ed8\u6b3e\u5217\u8868\u89c6\u56fe"},"\u7b2c\u4e09\u6b65\uff0c\u914d\u7f6e\u4ed8\u6b3e\u5217\u8868\u89c6\u56fe"),Object(o.b)("p",null,"\u5728\u4ed8\u6b3e\u4e1a\u52a1\u5bf9\u8c61\u4e0b\uff0c\u70b9\u51fb\u7f16\u8f91\u5217\u8868\u89c6\u56fe\uff0c\u628a\u9700\u8981\u663e\u793a\u5728\u5217\u8868\u9875\u4e0a\u7684\u65b0\u589e\u5b57\u6bb5\u4f9d\u6b21\u6dfb\u52a0\u8fdb\u53bb\u3002"),Object(o.b)("h3",{id:"\u7b2c\u56db\u6b65\uff0c\u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f"},"\u7b2c\u56db\u6b65\uff0c\u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f"),Object(o.b)("p",null,"\u70b9\u51fb\u5e94\u7528\u7a0b\u5e8f\u8bbe\u7f6e\uff0c\u70b9\u51fb\u8fdb\u5165\u5408\u540c\u7ba1\u7406\u8be6\u60c5\u9875\uff0c\u83dc\u5355\u9879\u9009\u62e9\u52a0\u4e0a\u521a\u521b\u5efa\u7684\u201c\u4ed8\u6b3e\u201d\u3002"),Object(o.b)("p",null,"\u70b9\u51fb\u8fdb\u5165\u65b0\u7248\u7684\u5408\u540c\u7ba1\u7406\u5e94\u7528\uff0c\u53ef\u4ee5\u770b\u5230\u65b0\u589e\u7684\u4e3b\u83dc\u5355\u680f\uff1a\u4ed8\u6b3e\u3002"),Object(o.b)("p",null,"\u5728\u5408\u540c\u5217\u8868\u9875\u9009\u4e2d\u4e00\u4e2a\u5408\u540c\uff0c\u53ef\u4ee5\u67e5\u770b\u4e0e\u8be5\u5408\u540c\u76f8\u5173\u7684\u4ed8\u6b3e\u8bb0\u5f55\uff0c\u5e76\u4e14\u53ef\u4ee5\u5feb\u901f\u521b\u5efa\u3002"),Object(o.b)("p",null,"\u70b9\u51fb\u4ed8\u6b3e\u53ef\u4ee5\u76f4\u63a5\u67e5\u770b\u4ed8\u6b3e\u7684\u603b\u5217\u8868\uff0c\u6c47\u603b\u663e\u793a\u4e86\u6240\u6709\u5408\u540c\u7684\u4ed8\u6b3e\u8bb0\u5f55\u3002"))}u.isMDXComponent=!0}}]);