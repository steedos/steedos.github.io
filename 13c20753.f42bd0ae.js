(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{375:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var b=n.a.createContext({}),u=function(e){var t=n.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=u(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,m=p["".concat(i,".").concat(d)]||p[d]||s[d]||l;return r?n.a.createElement(m,c({ref:t},b,{components:r})):n.a.createElement(m,c({ref:t},b))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var b=2;b<l;b++)i[b]=r[b];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},377:function(e,t,r){"use strict";var a=r(0),n=r.n(a),l=r(49),i=r.n(l);class c extends n.a.Component{constructor(e){super(e);const t=Math.random().toString(36).substring(5);this.state={height:"50",sectionId:"section-"+t,backgroundId:"section-background-"+t}}componentDidMount(){this.updateHeight(),this.intervalUpdate=setInterval(this.updateHeight.bind(this),2e3)}componentWillUnmount(){clearInterval(this.intervalUpdate)}updateHeight(){const e=this.refs[this.state.sectionId].clientHeight;this.state.height!==e&&this.setState({height:e})}render(){let{background:e,height:t,padding:r,color:a}=this.props;return this.state.height!==t&&(t=this.state.height),e&&(e.startsWith("/")||e.startsWith("http"))&&(e="url("+e+")"),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:i.a.sectionBackground,id:this.state.backgroundId}),n.a.createElement("div",{className:i.a.section,ref:this.state.sectionId,id:this.state.sectionId},n.a.createElement("style",{dangerouslySetInnerHTML:{__html:`\n          #${this.state.sectionId} {\n            min-height: ${t}px;\n            color: ${a};\n          }\n          #${this.state.backgroundId} {\n            background: ${e};  \n            background-repeat: no-repeat;\n            background-position: top;\n            background-size: cover;\n            height: ${t}px;\n          }\n        `}}),r&&n.a.createElement("div",{style:{height:r+"px"}}),this.props.children,r&&n.a.createElement("div",{style:{height:r+"px"}})))}}c.defaultProps={padding:30,height:200,color:"black"},t.a=c},381:function(e,t,r){"use strict";function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return a}))},382:function(e,t,r){"use strict";var a=r(381),n=r(0),l=r.n(n);class i extends l.a.Component{constructor(e){super(e),e.url?this.url=e.url:this.url=this.props.urls[0].url,this.id="video"+this.url.split("").reduce((e,t)=>(e<<5)-e+t.charCodeAt(0)|0,0)}componentDidMount(){this.timer=setTimeout(()=>this.initPlayer(),100)}initPlayer(){if(console.log("initPlayer: "+this.id),this.props.urls.length<1)return;let e=Object.assign({},this.props);e.id=this.id,e.url=this.url,this.player=new Player(e),this.player.emit("resourceReady",e.urls)}componentWillUnmount(){clearTimeout(this.timer)}render(){return l.a.createElement("div",{id:this.id})}}Object(a.a)(i,"defaultProps",{urls:[],poster:"",autoplay:!1,loop:!1,videoInit:!1,fluid:!0,playbackRate:[.75,1,1.25,1.5,2],defaultPlaybackRate:1,download:!0,pip:!1,keyShortcut:"on",airplay:!0,lang:"zh-cn",playsinline:!1,definitionActive:"hover","x5-video-player-type":"h5","x5-video-player-fullscreen":!0,"x5-video-orientation":"landscape"}),t.a=i},78:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return b})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return s}));var a=r(1),n=r(6),l=(r(0),r(375)),i=r(382),c=r(377),o={title:"\u534e\u708e\u9b54\u65b9\u5f00\u53d1\u4eba\u5458",sidebar_label:"\u6982\u89c8",hide_table_of_contents:!0},b={id:"developer",title:"\u534e\u708e\u9b54\u65b9\u5f00\u53d1\u4eba\u5458",description:"\u534e\u708e\u9b54\u65b9\u662f[\u5f00\u6e90\u4f4e\u4ee3\u7801\u5f00\u53d1\u5de5\u5177](https://github.com/steedos/steedos-platform)\uff0c\u57fa\u4e8eNodeJS\u5f00\u53d1\uff0c\u4f7f\u7528yml\u6587\u4ef6\u5b9a\u4e49[\u4e1a\u52a1\u5bf9\u8c61](/developer/object/)\uff0c\u4f7f\u7528 javascript \u8bed\u6cd5\u7f16\u5199\u524d\u7aef\u548c\u540e\u7aef\u4e1a\u52a1\u903b\u8f91\u811a\u672c\u3002\u7cfb\u7edf\u5185\u6838\uff08\u4e1a\u52a1\u5bf9\u8c61\u7ba1\u7406\u3001\u8d26\u6237\u7ba1\u7406\u3001\u6743\u9650\u7ba1\u7406\u3001\u6d41\u7a0b\u5f15\u64ce\u3001\u62a5\u8868\u5f15\u64ce\uff09\u9700\u8fd0\u884c\u4e8e MongoDB \u6570\u636e\u5e93\uff0c\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u5b9a\u4e49[\u7b2c\u4e09\u65b9\u6570\u636e\u6e90](/developer/datasource/)\uff0c\u8fde\u63a5SQL Server\u3001Oracle\u7b49\u73b0\u6709\u7684\u4e1a\u52a1\u7cfb\u7edf\u6570\u636e\u5e93\u3002",source:"@site/../docs/developer.md",permalink:"/developer",sidebar_label:"\u6982\u89c8",sidebar:"\u5f00\u53d1\u4eba\u5458",next:{title:"\u5982\u4f55\u5b89\u88c5\u534e\u708e\u9b54\u65b9\uff1f",permalink:"/developer/deploy"}},u=[],p={rightToc:u};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u534e\u708e\u9b54\u65b9\u662f",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/steedos/steedos-platform"}),"\u5f00\u6e90\u4f4e\u4ee3\u7801\u5f00\u53d1\u5de5\u5177"),"\uff0c\u57fa\u4e8eNodeJS\u5f00\u53d1\uff0c\u4f7f\u7528yml\u6587\u4ef6\u5b9a\u4e49",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/developer/object/"}),"\u4e1a\u52a1\u5bf9\u8c61"),"\uff0c\u4f7f\u7528 javascript \u8bed\u6cd5\u7f16\u5199\u524d\u7aef\u548c\u540e\u7aef\u4e1a\u52a1\u903b\u8f91\u811a\u672c\u3002\u7cfb\u7edf\u5185\u6838\uff08\u4e1a\u52a1\u5bf9\u8c61\u7ba1\u7406\u3001\u8d26\u6237\u7ba1\u7406\u3001\u6743\u9650\u7ba1\u7406\u3001\u6d41\u7a0b\u5f15\u64ce\u3001\u62a5\u8868\u5f15\u64ce\uff09\u9700\u8fd0\u884c\u4e8e MongoDB \u6570\u636e\u5e93\uff0c\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u5b9a\u4e49",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/developer/datasource/"}),"\u7b2c\u4e09\u65b9\u6570\u636e\u6e90"),"\uff0c\u8fde\u63a5SQL Server\u3001Oracle\u7b49\u73b0\u6709\u7684\u4e1a\u52a1\u7cfb\u7edf\u6570\u636e\u5e93\u3002"),Object(l.b)("div",{class:"my-8 relative mx-auto w-full rounded-lg overflow-hidden shadow-lg  focus:outline-none focus:shadow-outline lg:max-w-md"},Object(l.b)(i.a,{poster:"https://www-steedos-com.oss-cn-beijing.aliyuncs.com/videos/creator/steedos-platform-features.jpg",autoplay:!1,urls:[{name:"\u6807\u6e05",url:"https://www-steedos-com.oss-cn-beijing.aliyuncs.com/videos/creator/steedos-platform-features-960.mp4"},{name:"\u9ad8\u6e05",url:"https://www-steedos-com.oss-cn-beijing.aliyuncs.com/videos/creator/steedos-platform-features.mp4"}],mdxType:"Video"})),Object(l.b)("p",null,"\u672c\u6559\u7a0b\u4ee5\u5408\u540c\u7ba1\u7406\u4e3a\u4f8b\uff0c\u6307\u5bfc\u4f60\u5982\u4f55\u4f7f\u7528\u534e\u708e\u9b54\u65b9\u521b\u5efa\u9879\u76ee\uff0c\u914d\u7f6e\u4e1a\u52a1\u5bf9\u8c61\uff0c\u7f16\u7a0b\u811a\u672c\uff0c\u5904\u7406\u4e1a\u52a1\u90e8\u95e8\u7684\u5404\u79cd\u4e2a\u6027\u5316\u9700\u6c42\u3002\u60a8\u5f00\u53d1\u7684\u65b0\u4e1a\u52a1\u7cfb\u7edf\u53ef\u4ee5\u90e8\u7f72\u5728\u672c\u5730\u8fd0\u884c\u3002"),Object(l.b)("h4",{id:"\u51c6\u5907\uff1a\u5b89\u88c5\u5f00\u53d1\u73af\u5883"},Object(l.b)("a",Object(a.a)({parentName:"h4"},{href:"/developer/deploy"}),"\u51c6\u5907\uff1a\u5b89\u88c5\u5f00\u53d1\u73af\u5883")),Object(l.b)("h4",{id:"\u6559\u7a0b1\uff1a\u521b\u5efa\u9879\u76ee"},Object(l.b)("a",Object(a.a)({parentName:"h4"},{href:"/developer/guide_create"}),"\u6559\u7a0b1\uff1a\u521b\u5efa\u9879\u76ee")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u521b\u5efasteedos\u9879\u76ee"),Object(l.b)("li",{parentName:"ul"},"\u5b89\u88c5\u4f9d\u8d56\u5305"),Object(l.b)("li",{parentName:"ul"},"\u8fd0\u884c\u7a7a\u9879\u76ee"),Object(l.b)("li",{parentName:"ul"},"\u6587\u4ef6\u5939\u7ed3\u6784"),Object(l.b)("li",{parentName:"ul"},"\u6ce8\u518c\u65b0\u8d26\u6237"),Object(l.b)("li",{parentName:"ul"},"\u521b\u5efa\u4f01\u4e1a/\u5de5\u4f5c\u533a"),Object(l.b)("li",{parentName:"ul"},"\u7cfb\u7edf\u4e3b\u9875\u9762")),Object(l.b)("h4",{id:"\u6559\u7a0b2\uff1a\u914d\u7f6e\u4e1a\u52a1\u5bf9\u8c61"},Object(l.b)("a",Object(a.a)({parentName:"h4"},{href:"/developer/guide_object"}),"\u6559\u7a0b2\uff1a\u914d\u7f6e\u4e1a\u52a1\u5bf9\u8c61")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u521b\u5efa\u4e1a\u52a1\u5bf9\u8c61\uff1a\u5408\u540c"),Object(l.b)("li",{parentName:"ul"},"\u6dfb\u52a0\u5b57\u6bb5"),Object(l.b)("li",{parentName:"ul"},"\u8bbe\u7f6e\u89c6\u56fe\uff1a\u6240\u6709\u5408\u540c"),Object(l.b)("li",{parentName:"ul"},"\u65b0\u589e\u89c6\u56fe\uff1a\u6211\u7684\u5408\u540c"),Object(l.b)("li",{parentName:"ul"},"\u5b9a\u4e49\u6743\u9650\uff1a\u666e\u901a\u7528\u6237\u53ea\u80fd\u67e5\u770b\u81ea\u5df1\u7684\u5408\u540c\uff0c\u5408\u540c\u7ba1\u7406\u5458\u548c\u7cfb\u7edf\u7ba1\u7406\u5458\u53ef\u4ee5\u67e5\u770b\u6240\u6709\u5408\u540c"),Object(l.b)("li",{parentName:"ul"},"\u4fee\u6539\u5e94\u7528\uff1a\u589e\u52a0\u5408\u540c"),Object(l.b)("li",{parentName:"ul"},"\u91cd\u542f\u670d\u52a1\u8fd0\u884c\u5e76\u67e5\u770b\u6548\u679c")),Object(l.b)("h4",{id:"\u6559\u7a0b3\uff1a\u4e1a\u52a1\u5bf9\u8c61\u5173\u8054"},Object(l.b)("a",Object(a.a)({parentName:"h4"},{href:"/developer/guide_relationship"}),"\u6559\u7a0b3\uff1a\u4e1a\u52a1\u5bf9\u8c61\u5173\u8054")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u521b\u5efa\u4e1a\u52a1\u5bf9\u8c61\uff1a\u4ed8\u6b3e\u8ba1\u5212"),Object(l.b)("li",{parentName:"ul"},"\u6dfb\u52a0\u5b57\u6bb5"),Object(l.b)("li",{parentName:"ul"},"\u4e1a\u52a1\u5bf9\u8c61\u5173\u8054\u5b57\u6bb5"),Object(l.b)("li",{parentName:"ul"},"\u914d\u7f6e\u9ed8\u8ba4\u89c6\u56fe\u548c\u6743\u9650"),Object(l.b)("li",{parentName:"ul"},"\u4fee\u6539\u9ed8\u8ba4\u5e94\u7528\uff1a\u53bb\u6389\u5408\u540c"),Object(l.b)("li",{parentName:"ul"},"\u65b0\u5efa\u81ea\u5b9a\u4e49\u5e94\u7528\uff1a\u5408\u540c\uff0c\u914d\u7f6e\u76f8\u5173\u7684\u4e1a\u52a1\u5bf9\u8c61"),Object(l.b)("li",{parentName:"ul"},"\u91cd\u542f\u670d\u52a1\u8fd0\u884c\u5e76\u67e5\u770b\u6548\u679c")),Object(l.b)("h4",{id:"\u6559\u7a0b4\uff1a\u914d\u7f6e\u89e6\u53d1\u5668"},Object(l.b)("a",Object(a.a)({parentName:"h4"},{href:"/developer/guide_trigger"}),"\u6559\u7a0b4\uff1a\u914d\u7f6e\u89e6\u53d1\u5668")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u4fee\u6539\u4e1a\u52a1\u5bf9\u8c61\u7684\u5b57\u6bb5"),Object(l.b)("li",{parentName:"ul"},"\u521b\u5efa\u89e6\u53d1\u5668"),Object(l.b)("li",{parentName:"ul"},"\u7f16\u5199\u89e6\u53d1\u7684\u6267\u884c\u4ee3\u7801\uff1a\u81ea\u52a8\u66f4\u65b0\u5f85\u6536\u91d1\u989d")),Object(l.b)("h4",{id:"\u6559\u7a0b5\uff1a\u81ea\u5b9a\u4e49\u64cd\u4f5c\u6309\u94ae"},Object(l.b)("a",Object(a.a)({parentName:"h4"},{href:"/developer/guide_button"}),"\u6559\u7a0b5\uff1a\u81ea\u5b9a\u4e49\u64cd\u4f5c\u6309\u94ae")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u521b\u5efa\u81ea\u5b9a\u4e49\u64cd\u4f5c\u6309\u94ae"),Object(l.b)("li",{parentName:"ul"},"\u7f16\u5199\u6309\u94ae\u7684\u6267\u884c\u4ee3\u7801\uff1a\u53d1\u9001\u90ae\u4ef6"),Object(l.b)("li",{parentName:"ul"},"\u91cd\u542f\u670d\u52a1\u8fd0\u884c\u5e76\u67e5\u770b\u6548\u679c")),Object(l.b)("h4",{id:"\u6559\u7a0b6\uff1a\u8bbe\u7f6e\u62a5\u8868"},Object(l.b)("a",Object(a.a)({parentName:"h4"},{href:"/developer/guide_report"}),"\u6559\u7a0b6\uff1a\u8bbe\u7f6e\u62a5\u8868")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u4fee\u6539\u5408\u540c\u5e94\u7528\uff1a\u589e\u52a0\u62a5\u8868reports"),Object(l.b)("li",{parentName:"ul"},"\u91cd\u542f\u670d\u52a1\u8fd0\u884c\u5e76\u67e5\u770b\u6548\u679c"),Object(l.b)("li",{parentName:"ul"},"\u5b9a\u4e49\u77e9\u9635\u578b\u62a5\u8868\uff1a\u5408\u540c\u5e74\u5ea6\u7edf\u8ba1")),Object(l.b)("h4",{id:"\u6559\u7a0b7\uff1a\u8bbe\u7f6e\u5408\u540c\u5ba1\u6279\u6d41\u7a0b"},Object(l.b)("a",Object(a.a)({parentName:"h4"},{href:"/developer/guide_flow"}),"\u6559\u7a0b7\uff1a\u8bbe\u7f6e\u5408\u540c\u5ba1\u6279\u6d41\u7a0b")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u914d\u7f6e\u8868\u5355"),Object(l.b)("li",{parentName:"ul"},"\u914d\u7f6e\u6d41\u7a0b"),Object(l.b)("li",{parentName:"ul"},"\u914d\u7f6e\u6743\u9650"),Object(l.b)("li",{parentName:"ul"},"\u8fd0\u884c\u5408\u540c\u5ba1\u6279\u6d41\u7a0b")),Object(l.b)("h4",{id:"\u6559\u7a0b8\uff1a\u5408\u540c\u5ba1\u6279\u81ea\u52a8\u8fdb\u5165\u5408\u540c\u53f0\u8d26"},Object(l.b)("a",Object(a.a)({parentName:"h4"},{href:"/developer/guide_sync"}),"\u6559\u7a0b8\uff1a\u5408\u540c\u5ba1\u6279\u81ea\u52a8\u8fdb\u5165\u5408\u540c\u53f0\u8d26")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u4fee\u6539\u8868\u5355\uff0c\u8bfb\u53d6\u5408\u4f5c\u4f19\u4f34\u6570\u636e"),Object(l.b)("li",{parentName:"ul"},"\u4fee\u6539\u7cfb\u7edf\u914d\u7f6e\uff0c\u8bbe\u7f6e\u540c\u6b65\u9891\u7387"),Object(l.b)("li",{parentName:"ul"},"\u4fee\u6539\u5e94\u7528\uff0c\u6253\u5f00\u5408\u540c\u7684\u914d\u7f6e\u5bf9\u8c61\u6d41\u7a0b\u5f00\u5173"),Object(l.b)("li",{parentName:"ul"},"\u91cd\u542f\u670d\u52a1"),Object(l.b)("li",{parentName:"ul"},"\u914d\u7f6e\u5bf9\u8c61\u6d41\u7a0b"),Object(l.b)("li",{parentName:"ul"},"\u8fd0\u884c\u5408\u540c\u5ba1\u6279\u6d41\u7a0b\uff0c\u786e\u8ba4\u540c\u6b65\u60c5\u51b5")),Object(l.b)("h4",{id:"\u6559\u7a0b9\uff1a\u591a\u5355\u4f4d\u6743\u9650\u63a7\u5236"},Object(l.b)("a",Object(a.a)({parentName:"h4"},{href:"/developer/guide_companies"}),"\u6559\u7a0b9\uff1a\u591a\u5355\u4f4d\u6743\u9650\u63a7\u5236")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u4fee\u6539\u5408\u4f5c\u4f19\u4f34\uff0c\u542f\u7528\u5206\u90e8\u5b57\u6bb5"),Object(l.b)("li",{parentName:"ul"},"\u4fee\u6539\u5408\u4f5c\u4f19\u4f34\uff0c\u4fee\u6539\u6743\u9650\u63a7\u5236"),Object(l.b)("li",{parentName:"ul"},"\u4fee\u6539\u5408\u540c\uff0c\u542f\u7528\u5206\u90e8\u5b57\u6bb5"),Object(l.b)("li",{parentName:"ul"},"\u4fee\u6539\u5408\u540c\uff0c\u4fee\u6539\u6743\u9650\u63a7\u5236"),Object(l.b)("li",{parentName:"ul"},"\u91cd\u542f\u670d\u52a1"),Object(l.b)("li",{parentName:"ul"},"\u914d\u7f6e\u5355\u4f4d\u6743\u9650\u5bf9\u5e94\u4eba\u5458"),Object(l.b)("li",{parentName:"ul"},"\u786e\u8ba4\u591a\u5355\u4f4d\u6743\u9650\u63a7\u5236\u6548\u679c")),Object(l.b)("h4",{id:"\u6559\u7a0b10\uff1a\u7b2c\u4e09\u65b9\u7cfb\u7edf\u63a5\u53e3\u96c6\u6210"},Object(l.b)("a",Object(a.a)({parentName:"h4"},{href:"/developer/guide_nc"}),"\u6559\u7a0b10\uff1a\u7b2c\u4e09\u65b9\u7cfb\u7edf\u63a5\u53e3\u96c6\u6210")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u589e\u52a0\u7533\u8bf7\u4ed8\u6b3e\u6309\u94ae"),Object(l.b)("li",{parentName:"ul"},"\u589e\u52a0\u7533\u8bf7\u4ed8\u6b3e\u7684\u6267\u884c"),Object(l.b)("li",{parentName:"ul"},"\u589e\u52a0\u8c03\u7528\u63a5\u53e3\u7684\u5177\u4f53\u6267\u884c"),Object(l.b)("li",{parentName:"ul"},"\u67e5\u770b\u63a5\u53e3\u7684\u5b9e\u9645\u8fd0\u884c\u6548\u679c")),Object(l.b)(c.a,{background:"#215ca0",padding:"50",mdxType:"Section"},Object(l.b)("div",{style:{color:"#FFFFFF"}},Object(l.b)("h1",{id:"\u5bf9\u4e8e\u534e\u708e\u9b54\u65b9\u6709\u7591\u95ee\uff1f\uff1f"},"\u5bf9\u4e8e\u534e\u708e\u9b54\u65b9\u6709\u7591\u95ee\uff1f\uff1f"),Object(l.b)("h1",{id:"\u626b\u63cf\u4ee5\u4e0b\u4e8c\u7ef4\u7801\uff0c\u6211\u4eec\u7684\u6280\u672f\u4e13\u5bb6\u4f1a\u4e3a\u60a8\u89e3\u7b54\u3002"},"\u626b\u63cf\u4ee5\u4e0b\u4e8c\u7ef4\u7801\uff0c\u6211\u4eec\u7684\u6280\u672f\u4e13\u5bb6\u4f1a\u4e3a\u60a8\u89e3\u7b54\u3002"),Object(l.b)("p",null,"\u6211\u4eec\u7684\u6280\u672f\u4e13\u5bb6\u62e5\u6709\u5341\u5e74\u4ee5\u4e0a\u7684\u7ba1\u7406\u8f6f\u4ef6\u5f00\u53d1\u7ecf\u9a8c\uff0c\u65e0\u8bba\u60a8\u8be2\u95ee\u6709\u5173\u534e\u708e\u9b54\u65b9\u5f00\u53d1\u5e73\u53f0\u7684\u529f\u80fd\u3001\u5b9a\u4ef7\u3001\u5b9e\u65bd\u6216\u4efb\u4f55\u5176\u4ed6\u65b9\u9762\u7684\u95ee\u9898\uff0c\u4ed6\u4eec\u90fd\u5c06\u968f\u65f6\u51c6\u5907\u4e3a\u60a8\u63d0\u4f9b\u5e2e\u52a9\u3002"),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"/assets/contact_by_weixin.png",alt:"\u5728\u7ebf\u54a8\u8be2"}))))))}s.isMDXComponent=!0}}]);