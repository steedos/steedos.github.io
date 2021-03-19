(window.webpackJsonp=window.webpackJsonp||[]).push([[173,48,323],{230:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));var l=a(0),r=a.n(l);a(508),a(496),a(499),a(498);function s(){return r.a.createElement("div",null,r.a.createElement("div",{class:"max-w-screen-xl mx-auto text-center py-24 px-4 sm:px-6 lg:py-36 lg:px-8"},r.a.createElement("h2",{class:"text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"},"\u611f\u8c22\u60a8\u586b\u5199\u6b64\u8868\u5355",r.a.createElement("br",null),"\u6211\u4eec\u7684\u5ba2\u6237\u7ecf\u7406\u4f1a\u5c3d\u5feb\u8054\u7cfb\u60a8\u3002"),r.a.createElement("p",{class:"mt-6 text-xl leading-6 text-gray-500"},"\u5982\u6709\u7591\u95ee\uff0c\u6b22\u8fce\u62e8\u6253\u54a8\u8be2\u70ed\u7ebf\uff1a400-820-1612\u3002"),r.a.createElement("div",{class:"mt-8 flex justify-center"},r.a.createElement("div",{class:"inline-flex rounded-md shadow"},r.a.createElement("a",{href:"/videos/",class:"inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 hover:text-white focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"},"\u89c6\u9891\u6f14\u793a")),r.a.createElement("div",{class:"ml-3 inline-flex"},r.a.createElement("a",{href:"/help/",class:"inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue-700 bg-blue-100 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out"},"\u5e2e\u52a9\u6587\u6863")))))}},496:function(e,t,a){"use strict";var l=a(497),r=a(0),s=a.n(r);class n extends s.a.Component{constructor(e){super(e),e.url?this.url=e.url:this.url=this.props.urls[0].url,this.id="video"+this.url.split("").reduce(((e,t)=>(e<<5)-e+t.charCodeAt(0)|0),0)}componentDidMount(){this.timer=setTimeout((()=>this.initPlayer()),100)}initPlayer(){if(this.props.urls.length<1)return;let e=Object.assign({},this.props);e.id=this.id,e.url=this.url,new Player(e).emit("resourceReady",e.urls)}componentWillUnmount(){clearTimeout(this.timer)}render(){return s.a.createElement("div",{id:this.id})}}Object(l.a)(n,"defaultProps",{urls:[],poster:"",autoplay:!1,loop:!1,videoInit:!1,fluid:!0,playbackRate:[.75,1,1.25,1.5,2],defaultPlaybackRate:1,download:!0,pip:!1,keyShortcut:"on",airplay:!0,lang:"zh-cn",playsinline:!1,definitionActive:"hover","x5-video-player-type":"h5","x5-video-player-fullscreen":!0,"x5-video-orientation":"landscape"}),t.a=n},497:function(e,t,a){"use strict";function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return l}))},498:function(e,t,a){"use strict";var l=a(5),r=a(0),s=a.n(r),n=function(e){function t(){return e.apply(this,arguments)||this}return Object(l.a)(t,e),t.prototype.render=function(){return s.a.createElement("div",{class:"bg-gray-50"},s.a.createElement("div",{class:"max-w-screen-xl mx-auto pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-28"},s.a.createElement("h2",{class:"text-3xl leading-9 font-extrabold text-gray-900"},"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54"),s.a.createElement("div",{class:"mt-6 border-t-2 border-gray-100 pt-10"},s.a.createElement("dl",{class:"md:grid md:grid-cols-2 md:gap-8"},s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("dt",{class:"text-lg leading-6 font-medium text-gray-900"},"\u4ec0\u4e48\u662f\u534e\u708e\u9b54\u65b9\uff1f"),s.a.createElement("dd",{class:"mt-2"},s.a.createElement("p",{class:"text-base leading-6 text-gray-500"},"\u534e\u708e\u9b54\u65b9\u662f\u65b0\u4e00\u4ee3\u7684\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0\uff0c\u57fa\u4e8e\u5546\u4e1a\u667a\u80fd\u548c\u6a21\u578b\u9a71\u52a8\uff0c\u5f00\u53d1\u4eba\u5458\u65e0\u9700\u7f16\u5199\u4ee3\u7801\u5c31\u80fd\u6784\u5efa\u529f\u80fd\u5f3a\u5927\u7684\u4e2a\u6027\u5316\u5e94\u7528\u3002"))),s.a.createElement("div",{class:"mt-12"},s.a.createElement("dt",{class:"text-lg leading-6 font-medium text-gray-900"},"\u534e\u708e\u9b54\u65b9\u7684\u4f18\u52bf\u662f\u4ec0\u4e48\uff1f"),s.a.createElement("dd",{class:"mt-2"},s.a.createElement("p",{class:"text-base leading-6 text-gray-500"},"\u534e\u708e\u9b54\u65b9\u521b\u65b0\u7684\u4f7f\u7528\u5143\u6570\u636e\u5b9a\u4e49\u4e1a\u52a1\u6a21\u578b\uff0c\u5e76\u53ef\u5728\u5fc5\u8981\u65f6\u7f16\u5199\u4ee3\u7801\uff0c\u60a8\u5f00\u53d1\u7684\u9879\u76ee\u6e90\u7801\u53ef\u4ee5\u4fdd\u5b58\u5230\u7248\u672c\u5e93\u4e2d\u5b9e\u73b0\u7248\u672c\u8fed\u4ee3\uff0c\u5bf9\u4e8e\u5927\u578b\u9879\u76ee\u4e5f\u65b9\u4fbf\u591a\u4eba\u534f\u4f5c\u3002"))),s.a.createElement("div",{class:"mt-12"},s.a.createElement("dt",{class:"text-lg leading-6 font-medium text-gray-900"},"\u4e3a\u4ec0\u4e48\u5f00\u6e90\uff1f"),s.a.createElement("dd",{class:"mt-2"},s.a.createElement("p",{class:"text-base leading-6 text-gray-500"},"\u6bcf\u4e2a\u8f6f\u4ef6\u516c\u53f8\u90fd\u9700\u8981\u4e00\u5957\u4f4e\u4ee3\u7801\u5f00\u53d1\u5de5\u5177\uff0c\u4f46\u662f\u5355\u72ec\u5f00\u53d1\u548c\u7ef4\u62a4\u4e00\u5957\u8fd9\u6837\u7684\u5e73\u53f0\u6210\u672c\u5de8\u5927\u3002\u534e\u708e\u5e0c\u671b\u4e0e\u5f00\u6e90\u793e\u533a\u5171\u540c\u6253\u9020\u4e2d\u56fd\u6700\u4f18\u79c0\u7684\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0\u3002"))),s.a.createElement("div",{class:"mt-12"},s.a.createElement("dt",{class:"text-lg leading-6 font-medium text-gray-900"},"\u5f00\u6e90\u7248\u6709\u4ec0\u4e48\u9650\u5236\uff1f"),s.a.createElement("dd",{class:"mt-2"},s.a.createElement("p",{class:"text-base leading-6 text-gray-500"},s.a.createElement("a",{href:"https://github.com/steedos/steedos-platform/",target:"_blank",class:" text-gray-700"},"\u534e\u708e\u9b54\u65b9\u5f00\u6e90\u7248"),"\u57fa\u4e8e",s.a.createElement("a",{href:"https://choosealicense.com/licenses/mit/",target:"_blank",class:" text-gray-700"},"MIT\u534f\u8bae"),"\uff0c\u5185\u7f6e\u534e\u708e\u9b54\u65b9\u5341\u5927\u5f15\u64ce\uff0c\u5b8c\u5168\u514d\u8d39\u3002\u57fa\u4e8e\u534e\u708e\u9b54\u65b9\u5f00\u53d1\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u53ef\u4ee5\u5355\u72ec\u5b9a\u4ef7\u9500\u552e\u3002")))),s.a.createElement("div",{class:"mt-12 md:mt-0"},s.a.createElement("div",null,s.a.createElement("dt",{class:"text-lg leading-6 font-medium text-gray-900"},"\u4f20\u7edf\u5f00\u53d1\u65b9\u5f0f\u4e0d\u597d\u5417\uff1f\u4e3a\u4ec0\u4e48\u8981\u5b66\u4e60\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0\uff1f"),s.a.createElement("dd",{class:"mt-2"},s.a.createElement("p",{class:"text-base leading-6 text-gray-500"},"\u4f20\u7edf\u6a21\u5f0f\u5f00\u53d1\u4f01\u4e1a\u8f6f\u4ef6\u7cfb\u7edf\u9700\u8981\u5927\u91cf\u7684\u6295\u8d44\uff0c\u9700\u8981\u4e1a\u52a1\u90e8\u95e8\u63d0\u51fa\u7cbe\u51c6\u7684\u4e1a\u52a1\u9700\u6c42\uff0c\u4e0d\u4f46\u521d\u671f\u5f00\u53d1\u6210\u672c\u9ad8\uff0c\u4e00\u65e6\u7cfb\u7edf\u5efa\u6210\u540e\uff0c\u4fee\u6539\u548c\u5347\u7ea7\u7684\u6210\u672c\u4e5f\u5f88\u6602\u8d35\u3002"))),s.a.createElement("div",{class:"mt-12"},s.a.createElement("dt",{class:"text-lg leading-6 font-medium text-gray-900"},"\u4ec0\u4e48\u662f\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0\uff1f"),s.a.createElement("dd",{class:"mt-2"},s.a.createElement("p",{class:"text-base leading-6 text-gray-500"},"\u4f4e\u4ee3\u7801\u5f00\u53d1\u662f\u4e00\u79cd\u5168\u65b0\u7684\u5f00\u53d1\u65b9\u5f0f\uff0c\u901a\u8fc7\u628a\u6807\u51c6\u529f\u80fd\u7ec4\u4ef6\u5316\uff0c\u4e1a\u52a1\u9700\u6c42\u914d\u7f6e\u5316\uff0c\u6539\u53d8\u5e94\u7528\u4ea4\u4ed8\u548c\u7ba1\u7406\u7684\u6a21\u5f0f\uff0c\u5927\u5927\u7f29\u51cf\u5e94\u7528\u4ea4\u4ed8\u7684\u5468\u671f\u3002"))),s.a.createElement("div",{class:"mt-12"},s.a.createElement("dt",{class:"text-lg leading-6 font-medium text-gray-900"},"\u4f7f\u7528\u534e\u708e\u9b54\u65b9\u5f00\u53d1\u7cfb\u7edf\u6709\u4ec0\u4e48\u597d\u5904\uff1f"),s.a.createElement("dd",{class:"mt-2"},s.a.createElement("p",{class:"text-base leading-6 text-gray-500"},"\u4f7f\u7528\u534e\u708e\u9b54\u65b9\u5f00\u53d1\u7684\u4e1a\u52a1\u7cfb\u7edf\uff0c\u57fa\u4e8e\u6a21\u578b\u9a71\u52a8\uff0c\u517c\u5177\u654f\u6377\u6027\u3001\u7075\u6d3b\u6027\u548c\u5f00\u653e\u6027\uff0c\u53ef\u4ee5\u6839\u636e\u4e1a\u52a1\u9700\u6c42\u968f\u65f6\u8c03\u6574\u3001\u65e0\u7f1d\u8fed\u4ee3\uff0c\u5e2e\u52a9\u4e1a\u52a1\u52a0\u901f\u521b\u65b0\uff0c\u63d0\u5347\u7ade\u4e89\u529b\u3002"))),s.a.createElement("div",{class:"mt-12"},s.a.createElement("dt",{class:"text-lg leading-6 font-medium text-gray-900"},"\u534e\u708e\u9b54\u65b9\u9002\u5408\u5f00\u53d1\u54ea\u4e00\u7c7b\u7cfb\u7edf\uff1f"),s.a.createElement("dd",{class:"mt-2"},s.a.createElement("p",{class:"text-base leading-6 text-gray-500"},"\u534e\u708e\u9b54\u65b9\u6bd4\u8f83\u9002\u5408\u5f00\u53d1\u4f01\u4e1a\u7ba1\u7406\u7c7b\u7684\u5e94\u7528\uff0c\u4f8b\u5982OA\u3001CRM\u3001\u8fdb\u9500\u5b58\u3001ERP\u3001\u9879\u76ee\u7ba1\u7406\u3001\u8ba2\u5355\u7ba1\u7406\u3001\u5e93\u5b58\u7ba1\u7406\uff0c\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u5404\u79cd\u667a\u80fd\u5316\u4e1a\u52a1\u7cfb\u7edf\u7684\u540e\u53f0\u6570\u636e\u5e73\u53f0\u3002"))))))))},t}(s.a.Component);t.a=n},499:function(e,t,a){"use strict";var l=a(5),r=a(0),s=a.n(r),n=a(496),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(l.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.description,l=e.items,r=e.imageUrl,c=e.imageClass,m=e.videoUrl,i=e.imagePosition,d=e.containerClass,o=e.theme,g="lg:col-start-1",x="lg:col-start-2";"left"===i&&(g="lg:col-start-2",x="lg:col-start-1"),c||(c="lg:max-w-xl rounded-lg shadow-lg"),d||(d=""),o||(o="green");var u=s.a.createElement("img",{src:r});return m&&(u=s.a.createElement(n.a,{poster:r,autoplay:!1,urls:[{name:"\u9ad8\u6e05",url:m}]})),s.a.createElement("div",{className:"lg:py-12 py-8 overflow-hidden "+d},s.a.createElement("div",{className:"relative mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl"},s.a.createElement("div",{className:"relative lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center"},s.a.createElement("div",{className:g},s.a.createElement("div",{className:"text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl"},t),s.a.createElement("div",{className:"mt-3 text-lg text-gray-500"},a),s.a.createElement("dl",{className:"mt-10 space-y-10"},l&&l.map((function(e,t){var a=e.title,l=e.description;return s.a.createElement("div",{className:"flex"},s.a.createElement("div",{className:"flex-shrink-0"},s.a.createElement("svg",{className:"h-6 w-6 text-"+o+"-400",viewBox:"0 0 20 20",fill:"currentColor"},s.a.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"}))),s.a.createElement("div",{className:"ml-4"},a&&s.a.createElement("div",{className:"mb-2 text-lg leading-6 font-medium text-gray-900"},a),l&&s.a.createElement("div",{className:"text-base text-gray-500"},l)))})))),r&&s.a.createElement("div",{className:"mt-10 mx-4 relative lg:mt-0 "+x},s.a.createElement("svg",{className:"absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden",width:"784",height:"404",fill:"none",viewBox:"0 0 784 404"},s.a.createElement("defs",null,s.a.createElement("pattern",{id:"ca9667ae-9f92-4be7-abcb-9e3d727f2941",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse"},s.a.createElement("rect",{x:"0",y:"0",width:"4",height:"4",className:"text-gray-200",fill:"currentColor"}))),s.a.createElement("rect",{width:"784",height:"404",fill:"url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"})),s.a.createElement("div",{className:"relative mx-auto w-full sm:mx-4 overflow-hidden "+c},s.a.createElement("div",{className:"relative block w-full focus:outline-none focus:shadow-outline"},u))))))},t}(s.a.Component);t.a=c},510:function(e,t,a){"use strict";var l=a(0),r=a.n(l);class s extends r.a.Component{render(){return r.a.createElement("div",null,r.a.createElement("div",{className:"bg-gray-100"},r.a.createElement("div",{className:"max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8"},r.a.createElement("div",{className:"xl:grid xl:grid-cols-3 xl:gap-8"},r.a.createElement("div",{className:"xl:col-span-1"},r.a.createElement("img",{className:"h-10",src:"/img/logo_platform.png",alt:"\u534e\u708e\u9b54\u65b9"}),r.a.createElement("p",{className:"mt-8 text-gray-500 text-base leading-6"},"\u534e\u708e\u9b54\u65b9\u57fa\u4e8e\u5546\u4e1a\u667a\u80fd\u548c\u6a21\u578b\u9a71\u52a8\uff0c\u5373\u4f7f\u662f\u4e0d\u61c2\u7f16\u7a0b\u7684\u4e1a\u52a1\u4eba\u5458\uff0c\u4e5f\u80fd\u8f7b\u677e\u4fbf\u6377\u5730\u521b\u5efa\u667a\u80fd\u5316\u3001\u79fb\u52a8\u5316\u7684\u4f01\u4e1a\u5e94\u7528\u3002"),r.a.createElement("div",{className:"mt-8 flex"},r.a.createElement("a",{href:"tel://4008201612",className:"text-gray-400 hover:text-gray-500"},r.a.createElement("span",{className:"sr-only"},"Phone"),r.a.createElement("svg",{viewBox:"0 0 20 20",fill:"currentColor",class:"phone w-6 h-6"},r.a.createElement("path",{d:"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"}))),r.a.createElement("a",{href:"https://github.com/steedos/steedos-platform/",className:"ml-6 text-gray-400 hover:text-gray-500"},r.a.createElement("span",{className:"sr-only"},"GitHub"),r.a.createElement("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24"},r.a.createElement("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"}))))),r.a.createElement("div",{class:"mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2"},r.a.createElement("div",{class:"md:grid md:grid-cols-2 md:gap-8"},r.a.createElement("div",null,r.a.createElement("h4",{className:"text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"},"\u5e73\u53f0"),r.a.createElement("ul",{className:"mt-4"},r.a.createElement("li",null,r.a.createElement("a",{href:"/platform/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u5e73\u53f0\u6982\u89c8")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/platform/lowcode/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u4f4e\u4ee3\u7801")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/platform/cases",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u5ba2\u6237\u6848\u4f8b")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/pricing/platform",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u7248\u672c\u4e0e\u62a5\u4ef7")))),r.a.createElement("div",{className:"mt-12 md:mt-0"},r.a.createElement("h4",{className:"text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"},"\u5e94\u7528\u5e02\u573a"),r.a.createElement("ul",{className:"mt-4"},r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/appstore/labs/contract",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u5408\u540c\u7ba1\u7406")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/appstore/labs/sales",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u9500\u552e\u7ba1\u7406")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/appstore/labs/purchase",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u91c7\u8d2d\u7ba1\u7406")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/appstore/labs/cost",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u8d39\u63a7\u7ba1\u7406")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/appstore/labs/project",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u9879\u76ee\u7ba1\u7406")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/appstore/labs/workflow",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u6d41\u7a0b\u5ba1\u6279")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/appstore/labs/okr",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"OKR \u76ee\u6807\u7ba1\u7406"))))),r.a.createElement("div",{class:"md:grid md:grid-cols-2 md:gap-8"},r.a.createElement("div",null,r.a.createElement("h4",{className:"text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"},"\u89c6\u9891\u6f14\u793a"),r.a.createElement("ul",{className:"mt-4"},r.a.createElement("li",null,r.a.createElement("a",{href:"/videos/steedos-digital-transformation/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u6570\u5b57\u5316\u8f6c\u578b")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/videos/steedos-platform-features/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u4f4e\u4ee3\u7801\u5f00\u53d1")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/videos/lesson-object/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u96f6\u4ee3\u7801\u5f00\u53d1")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/videos/workflow/admin-contracts",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u81ea\u5b9a\u4e49\u6d41\u7a0b")))),r.a.createElement("div",{className:"mt-12 md:mt-0"},r.a.createElement("h4",{className:"text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"},"\u5173\u4e8e"),r.a.createElement("ul",{className:"mt-4"},r.a.createElement("li",null,r.a.createElement("a",{href:"/company/about-us",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u5173\u4e8e\u6211\u4eec")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/company/customers",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u6210\u529f\u6848\u4f8b")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"/company/contact-us",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u8054\u7cfb\u6211\u4eec")),r.a.createElement("li",{className:"mt-4"},r.a.createElement("a",{href:"tel://4008201612",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"400-820-1612"))))))),r.a.createElement("div",{className:"mt-12 border-t border-gray-200 pt-8"},r.a.createElement("p",{className:"text-base leading-6 text-gray-500 xl:text-center"},"\xa9 2020 \u534e\u708e\u8f6f\u4ef6. \u4fdd\u7559\u6240\u6709\u6743\u5229."),r.a.createElement("nav",{class:"-mx-5 -my-2 flex flex-wrap justify-center","aria-label":"Footer"},r.a.createElement("div",{class:"px-3 py-2"},r.a.createElement("a",{href:"/cn",class:"text-base text-gray-500 hover:text-gray-900"},"\u4e2d\u6587")),r.a.createElement("div",{class:"px-3 py-2"},r.a.createElement("a",{href:"https://www.steedos.org/",class:"text-base text-gray-500 hover:text-gray-900"},"English"))),r.a.createElement("div",{className:"flex justify-center mt-10"},r.a.createElement("div",{className:"text-center mr-8"},r.a.createElement("img",{className:"h-36 w-36 mb-2",src:"/assets/github/platform/cn/QR_wechat_developers.jpg",title:"\u5f00\u53d1\u4eba\u5458\u5fae\u4fe1\u7fa4"}),r.a.createElement("div",null,"\u5f00\u53d1\u4eba\u5458\u5fae\u4fe1\u7fa4")),r.a.createElement("div",{className:"text-center mr-8"},r.a.createElement("img",{className:"h-36 w-36 mb-2",src:"/assets/github/platform/cn/business_consulting.jpg",title:"\u5546\u52a1\u54a8\u8be2"}),r.a.createElement("div",null,"\u5546\u52a1\u54a8\u8be2")),r.a.createElement("div",{className:"text-center"},r.a.createElement("img",{className:"h-36 w-36 mb-2",src:"/assets/github/platform/cn/public_number.jpg",title:"\u5fae\u4fe1\u516c\u4f17\u53f7"}),r.a.createElement("div",null,"\u5fae\u4fe1\u516c\u4f17\u53f7")))))))}}t.a=s}}]);