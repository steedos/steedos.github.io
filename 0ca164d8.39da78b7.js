(window.webpackJsonp=window.webpackJsonp||[]).push([[15,29,288],{362:function(e,t,a){"use strict";var l=a(363),s=a(0),r=a.n(s);class c extends r.a.Component{constructor(e){super(e),e.url?this.url=e.url:this.url=this.props.urls[0].url,this.id="video"+this.url.split("").reduce((e,t)=>(e<<5)-e+t.charCodeAt(0)|0,0)}componentDidMount(){this.timer=setTimeout(()=>this.initPlayer(),100)}initPlayer(){if(this.props.urls.length<1)return;let e=Object.assign({},this.props);e.id=this.id,e.url=this.url,new Player(e).emit("resourceReady",e.urls)}componentWillUnmount(){clearTimeout(this.timer)}render(){return r.a.createElement("div",{id:this.id})}}Object(l.a)(c,"defaultProps",{urls:[],poster:"",autoplay:!1,loop:!1,videoInit:!1,fluid:!0,playbackRate:[.75,1,1.25,1.5,2],defaultPlaybackRate:1,download:!0,pip:!1,keyShortcut:"on",airplay:!0,lang:"zh-cn",playsinline:!1,definitionActive:"hover","x5-video-player-type":"h5","x5-video-player-fullscreen":!0,"x5-video-orientation":"landscape"}),t.a=c},363:function(e,t,a){"use strict";function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return l}))},367:function(e,t,a){"use strict";var l=a(0),s=a.n(l);class r extends s.a.Component{render(){return s.a.createElement("div",{class:"bg-white"},s.a.createElement("div",{class:"max-w-screen-xl mx-auto pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:pt-20 lg:pb-28 lg:px-8"},s.a.createElement("h2",{class:"text-3xl leading-9 font-extrabold text-gray-900"},"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54"),s.a.createElement("div",{class:"mt-6 border-t-2 border-gray-100 pt-10"},s.a.createElement("dl",{class:"md:grid md:grid-cols-2 md:gap-8"},s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("dt",{class:"text-lg leading-6 font-medium text-gray-900"},"\u4ec0\u4e48\u662f\u534e\u708e\u9b54\u65b9\uff1f"),s.a.createElement("dd",{class:"mt-2"},s.a.createElement("p",{class:"text-base leading-6 text-gray-500"},"\u534e\u708e\u9b54\u65b9\u662f\u65b0\u4e00\u4ee3\u7684\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0\uff0c\u57fa\u4e8e\u5546\u4e1a\u667a\u80fd\u548c\u6a21\u578b\u9a71\u52a8\uff0c\u5f00\u53d1\u4eba\u5458\u53ea\u9700\u7f16\u5199\u5c11\u91cf\u4ee3\u7801\u5c31\u53ef\u4ee5\u6784\u5efa\u529f\u80fd\u5f3a\u5927\u7684\u4e2a\u6027\u5316\u5e94\u7528\u3002"))),s.a.createElement("div",{class:"mt-12"},s.a.createElement("dt",{class:"text-lg leading-6 font-medium text-gray-900"},"\u534e\u708e\u9b54\u65b9\u7684\u4f18\u52bf\u662f\u4ec0\u4e48\uff1f"),s.a.createElement("dd",{class:"mt-2"},s.a.createElement("p",{class:"text-base leading-6 text-gray-500"},"\u534e\u708e\u9b54\u65b9\u521b\u65b0\u7684\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u5b9a\u4e49\u4e1a\u52a1\u6a21\u578b\uff0c\u901a\u8fc7\u4f4e\u4ee3\u7801\u7f16\u5199\u4e1a\u52a1\u903b\u8f91\uff0c\u60a8\u5f00\u53d1\u7684\u9879\u76ee\u6e90\u7801\u53ef\u4ee5\u4fdd\u5b58\u5230\u7248\u672c\u5e93\u4e2d\u5b9e\u73b0\u7248\u672c\u8fed\u4ee3\uff0c\u5bf9\u4e8e\u5927\u578b\u9879\u76ee\u4e5f\u65b9\u4fbf\u591a\u4eba\u534f\u4f5c\u3002"))),s.a.createElement("div",{class:"mt-12"},s.a.createElement("dt",{class:"text-lg leading-6 font-medium text-gray-900"},"\u4e3a\u4ec0\u4e48\u5f00\u6e90\uff1f"),s.a.createElement("dd",{class:"mt-2"},s.a.createElement("p",{class:"text-base leading-6 text-gray-500"},"\u4f4e\u4ee3\u7801\u662f\u5168\u65b0\u7684\u5f00\u53d1\u65b9\u5f0f\uff0c\u5728\u964d\u4f4e\u4ee3\u7801\u91cf\u7684\u540c\u65f6\uff0c\u5927\u5e45\u63d0\u5347\u4e86\u5f00\u53d1\u6548\u7387\u3002\u534e\u708e\u516c\u53f8\u5e0c\u671b\u901a\u8fc7\u5f00\u6e90\u5e76\u514d\u8d39\u7684\u65b9\u5f0f\uff0c\u4e0e\u5f00\u6e90\u793e\u533a\u5171\u540c\u6253\u9020\u4e2d\u56fd\u6700\u4f18\u79c0\u7684\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0\u3002"))),s.a.createElement("div",{class:"mt-12"},s.a.createElement("dt",{class:"text-lg leading-6 font-medium text-gray-900"},"\u5f00\u6e90\u793e\u533a\u7248\u6709\u4ec0\u4e48\u9650\u5236\uff1f"),s.a.createElement("dd",{class:"mt-2"},s.a.createElement("p",{class:"text-base leading-6 text-gray-500"},s.a.createElement("a",{href:"https://github.com/steedos/steedos-platform/",target:"_blank",class:" text-gray-700"},"\u534e\u708e\u9b54\u65b9\u5f00\u6e90\u793e\u533a\u7248"),"\u57fa\u4e8e",s.a.createElement("a",{href:"https://choosealicense.com/licenses/mit/",target:"_blank",class:" text-gray-700"},"MIT\u534f\u8bae"),"\uff0c\u7981\u7528\u4e86\u6d41\u7a0b\u5f15\u64ce\u3002\u57fa\u4e8e\u534e\u708e\u9b54\u65b9\u5f00\u53d1\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u53ef\u4ee5\u5728\u516c\u53f8\u5185\u90e8\u514d\u8d39\u4f7f\u7528\uff0c\u4e5f\u53ef\u4ee5\u9500\u552e\u7ed9\u7b2c\u4e09\u65b9\u516c\u53f8\u3002")))),s.a.createElement("div",{class:"mt-12 md:mt-0"},s.a.createElement("div",null,s.a.createElement("dt",{class:"text-lg leading-6 font-medium text-gray-900"},"\u4f20\u7edf\u5f00\u53d1\u65b9\u5f0f\u4e0d\u597d\u5417\uff1f\u4e3a\u4ec0\u4e48\u8981\u5b66\u4e60\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0\uff1f"),s.a.createElement("dd",{class:"mt-2"},s.a.createElement("p",{class:"text-base leading-6 text-gray-500"},"\u4f20\u7edf\u6a21\u5f0f\u5f00\u53d1\u4f01\u4e1a\u8f6f\u4ef6\u7cfb\u7edf\u9700\u8981\u5927\u91cf\u7684\u6295\u8d44\uff0c\u9700\u8981\u4e1a\u52a1\u90e8\u95e8\u63d0\u51fa\u7cbe\u51c6\u7684\u4e1a\u52a1\u9700\u6c42\uff0c\u4e00\u65e6\u7cfb\u7edf\u5efa\u6210\u540e\uff0c\u5c31\u5f88\u96be\u4fee\u6539\u548c\u5347\u7ea7\uff0c\u4f7f\u4f01\u4e1a\u80cc\u8d1f\u6c89\u91cd\u7684\u6570\u5b57\u503a\u52a1\u3002"))),s.a.createElement("div",{class:"mt-12"},s.a.createElement("dt",{class:"text-lg leading-6 font-medium text-gray-900"},"\u4ec0\u4e48\u662f\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0\uff1f"),s.a.createElement("dd",{class:"mt-2"},s.a.createElement("p",{class:"text-base leading-6 text-gray-500"},"\u4f4e\u4ee3\u7801\u5f00\u53d1\u662f\u4e00\u79cd\u5168\u65b0\u7684\u5f00\u53d1\u65b9\u5f0f\uff0c\u901a\u8fc7\u628a\u6807\u51c6\u529f\u80fd\u7ec4\u4ef6\u5316\uff0c\u4e1a\u52a1\u9700\u6c42\u914d\u7f6e\u5316\uff0c\u6539\u53d8\u5e94\u7528\u4ea4\u4ed8\u548c\u7ba1\u7406\u7684\u6a21\u5f0f\uff0c\u5927\u5927\u7f29\u51cf\u5e94\u7528\u4ea4\u4ed8\u7684\u5468\u671f\u3002"))),s.a.createElement("div",{class:"mt-12"},s.a.createElement("dt",{class:"text-lg leading-6 font-medium text-gray-900"},"\u4f7f\u7528\u534e\u708e\u9b54\u65b9\u5f00\u53d1\u7cfb\u7edf\u6709\u4ec0\u4e48\u597d\u5904\uff1f"),s.a.createElement("dd",{class:"mt-2"},s.a.createElement("p",{class:"text-base leading-6 text-gray-500"},"\u4f7f\u7528\u534e\u708e\u9b54\u65b9\u5f00\u53d1\u7684\u4e1a\u52a1\u7cfb\u7edf\uff0c\u57fa\u4e8e\u6a21\u578b\u9a71\u52a8\uff0c\u517c\u5177\u654f\u6377\u6027\u3001\u7075\u6d3b\u6027\u548c\u5f00\u653e\u6027\uff0c\u53ef\u4ee5\u6839\u636e\u4e1a\u52a1\u9700\u6c42\u968f\u65f6\u8c03\u6574\u3001\u65e0\u7f1d\u8fed\u4ee3\uff0c\u5e2e\u52a9\u4e1a\u52a1\u52a0\u901f\u521b\u65b0\uff0c\u63d0\u5347\u7ade\u4e89\u529b\u3002"))),s.a.createElement("div",{class:"mt-12"},s.a.createElement("dt",{class:"text-lg leading-6 font-medium text-gray-900"},"\u534e\u708e\u9b54\u65b9\u9002\u5408\u5f00\u53d1\u54ea\u4e00\u7c7b\u7cfb\u7edf\uff1f"),s.a.createElement("dd",{class:"mt-2"},s.a.createElement("p",{class:"text-base leading-6 text-gray-500"},"\u534e\u708e\u9b54\u65b9\u662f\u4e13\u4e1a\u7684\u4f01\u4e1a\u7ba1\u7406\u8f6f\u4ef6\u5f00\u53d1\u5de5\u5177\uff0c\u5185\u7f6e\u5341\u5927\u5f15\u64ce\uff0c\u5305\u542b\u4e86\u4e1a\u52a1\u5efa\u6a21\u3001\u4e1a\u52a1\u903b\u8f91\u5904\u7406\u3001\u6d41\u7a0b\u5ba1\u6279\u3001\u7ec4\u7ec7\u4e0e\u6743\u9650\u7ba1\u7406\u7b49\u4f01\u4e1a\u8f6f\u4ef6\u5173\u952e\u5fc5\u5907\u7684\u529f\u80fd\u3002"))))))))}}t.a=r},368:function(e,t,a){"use strict";var l=a(0),s=a.n(l),r=a(362);class c extends s.a.Component{render(){let{title:e,description:t,items:a,imageUrl:l,videoUrl:c,imagePosition:n,containerClass:m,theme:i}=this.props,o="lg:col-start-1",d="lg:col-start-2";"left"===n&&(o="lg:col-start-2",d="lg:col-start-1"),m||(m=""),i||(i="green");let g=s.a.createElement("img",{src:l});return c&&(g=s.a.createElement(r.a,{poster:l,autoplay:!1,urls:[{name:"\u9ad8\u6e05",url:c}]})),s.a.createElement("div",{className:"lg:py-12 py-8 overflow-hidden "+m},s.a.createElement("div",{className:"relative mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl"},s.a.createElement("div",{className:"relative lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center"},s.a.createElement("div",{className:o},s.a.createElement("h4",{className:"text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9"},e),s.a.createElement("p",{className:"mt-3 text-lg leading-7 text-gray-500"},t),s.a.createElement("ul",{className:"pl-0"},a&&a.map(({title:e,description:t},a)=>s.a.createElement("li",{className:"mt-6",key:a},s.a.createElement("div",{className:"flex"},s.a.createElement("div",{className:"flex-shrink-0"},s.a.createElement("svg",{className:"h-6 w-6 text-"+i+"-400",viewBox:"0 0 20 20",fill:"currentColor"},s.a.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"}))),s.a.createElement("div",{className:"ml-4"},e&&s.a.createElement("div",{className:"text-lg mb-2 leading-6 font-medium text-gray-900"},e),t&&s.a.createElement("p",{className:"mb-0 text-base leading-6 text-gray-500"},t))))))),l&&s.a.createElement("div",{className:"mt-10 mx-4 relative lg:mt-0 "+d},s.a.createElement("svg",{className:"absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden",width:"784",height:"404",fill:"none",viewBox:"0 0 784 404"},s.a.createElement("defs",null,s.a.createElement("pattern",{id:"ca9667ae-9f92-4be7-abcb-9e3d727f2941",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse"},s.a.createElement("rect",{x:"0",y:"0",width:"4",height:"4",className:"text-gray-200",fill:"currentColor"}))),s.a.createElement("rect",{width:"784",height:"404",fill:"url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"})),s.a.createElement("div",{className:"relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md sm:mx-4"},s.a.createElement("div",{className:"relative block w-full rounded-lg overflow-hidden focus:outline-none focus:shadow-outline"},g))))))}}t.a=c},371:function(e,t,a){"use strict";var l=a(0),s=a.n(l);a(362);class r extends s.a.Component{render(){return s.a.createElement("div",{class:"bg-gray-100"},s.a.createElement("div",{class:"py-8 lg:py-12 relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl"},s.a.createElement("h2",{class:"text-center text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10"},"\u6210\u529f\u6848\u4f8b"),s.a.createElement("div",{class:"mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8","data-theme":"light"},s.a.createElement("div",{class:"col-span-1 flex justify-center py-8 px-8 bg-gray-50"},s.a.createElement("img",{class:"max-h-12",src:"/assets/customers/dzug.png",alt:"\u5927\u4f17\u516c\u7528"})),s.a.createElement("div",{class:"col-span-1 flex justify-center py-8 px-8 bg-gray-50"},s.a.createElement("img",{class:"max-h-12",src:"/assets/customers/want_want.png",alt:"\u65fa\u65fa\u6295\u8d44"})),s.a.createElement("div",{class:"col-span-1 flex justify-center py-8 px-8 bg-gray-50"},s.a.createElement("img",{class:"max-h-12",src:"/assets/customers/picc.png",alt:"\u4eba\u4fdd\u8d44\u4ea7"})),s.a.createElement("div",{class:"col-span-1 flex justify-center py-8 px-8 bg-gray-50"},s.a.createElement("img",{class:"max-h-12",src:"/assets/customers/petro_china.png",alt:"\u629a\u987a\u77f3\u5316"})),s.a.createElement("div",{class:"col-span-1 flex justify-center py-8 px-8 bg-gray-50"},s.a.createElement("img",{class:"max-h-12",src:"/assets/customers/shanghai_gas.png",alt:"\u4e0a\u6d77\u71c3\u6c14"})),s.a.createElement("div",{class:"col-span-1 flex justify-center py-8 px-8 bg-gray-50"},s.a.createElement("img",{class:"max-h-12",src:"/assets/customers/hebei_port.png",alt:"\u6cb3\u5317\u6e2f\u53e3\u96c6\u56e2"})))))}}t.a=r},377:function(e,t,a){"use strict";var l=a(1),s=a(0),r=a.n(s),c=a(365),n=a(366),m=a(364),i=a(380),o=a(378),d=a(370),g=a(382),x=a(372),u=a(373),p=a(374),E=a(49),h=a.n(E),v=a(381),f=a(369);t.a=function(){let{siteConfig:{customFields:{navbar_items_us:e=[]},themeConfig:{navbar:{title:t="",items:a=[],hideOnScroll:E=!1}={},colorMode:{disableSwitch:b=!1}={}}},isClient:y}=Object(m.a)();const[w,N]=Object(s.useState)(!1),[k,j]=Object(s.useState)(!1),{isDarkTheme:_,setLightTheme:C,setDarkTheme:O}=Object(d.a)(),{navbarRef:U,isNavbarVisible:P}=Object(g.a)(E);let{logoLink:I,logoLinkProps:M,logoImageUrl:S,logoAlt:B}=Object(p.a)();const L=Object(f.useLocation)();L&&L.pathname.startsWith("/us")&&(a=e,I="/us/"),Object(x.a)(w);const R=Object(s.useCallback)(()=>{N(!0)},[N]),T=Object(s.useCallback)(()=>{N(!1)},[N]),A=Object(s.useCallback)(e=>e.target.checked?O():C(),[C,O]),z=Object(u.a)();Object(s.useEffect)(()=>{z===u.b.desktop&&N(!1)},[z]);const{leftItems:D,rightItems:V}=function(e){return{leftItems:e.filter(e=>{var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:"right")}),rightItems:e.filter(e=>{var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:"right")})}}(a);return r.a.createElement("nav",{ref:U,className:Object(c.a)("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":w,[h.a.navbarHideable]:E,[h.a.navbarHidden]:!P})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=a&&0!==a.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:R,onKeyDown:R},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(n.a,Object(l.a)({className:"navbar__brand",to:I},M),null!=S&&r.a.createElement("img",{key:y,className:"navbar__logo",src:S,alt:B}),null!=t&&r.a.createElement("strong",{className:Object(c.a)("navbar__title",{[h.a.hideLogoText]:k})},t)),D.map((e,t)=>r.a.createElement(v.a,Object(l.a)({},e,{key:t})))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},V.map((e,t)=>r.a.createElement(v.a,Object(l.a)({},e,{key:t}))),!b&&r.a.createElement(o.a,{className:h.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:_,onChange:A}),r.a.createElement(i.a,{handleSearchBarToggle:j,isSearchBarExpanded:k}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:T}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(n.a,Object(l.a)({className:"navbar__brand",onClick:T,to:I},M),null!=S&&r.a.createElement("img",{key:y,className:"navbar__logo",src:S,alt:B}),null!=t&&r.a.createElement("strong",{className:"navbar__title"},t)),!b&&w&&r.a.createElement(o.a,{"aria-label":"Dark mode toggle in sidebar",checked:_,onChange:A})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},a.map((e,t)=>r.a.createElement(v.a,Object(l.a)({mobile:!0},e,{onClick:T,key:t}))))))))}},379:function(e,t,a){"use strict";var l=a(0),s=a.n(l);class r extends s.a.Component{render(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"relative bg-blue-700"},s.a.createElement("div",{className:"max-w-screen-xl mx-auto py-8 px-4 lg:py-8 lg:flex lg:items-center lg:justify-between"},s.a.createElement("div",{className:""},s.a.createElement("div",{className:"text-xl mb-4 leading-6 font-semibold uppercase tracking-wider text-gray-300"},"\u5bf9\u4e8e\u534e\u708e\u9b54\u65b9\u6709\u7591\u95ee\uff1f\uff1f"),s.a.createElement("div",{className:"my-6 text-white text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10"},"\u5fae\u4fe1\u626b\u63cf\u4e8c\u7ef4\u7801\uff0c\u6211\u4eec\u7684\u6280\u672f\u4e13\u5bb6\u4f1a\u4e3a\u60a8\u89e3\u7b54\u3002"),s.a.createElement("p",{className:"mt-3 mb-0 text-lg leading-7 text-gray-300"},"\u6211\u4eec\u7684\u6280\u672f\u4e13\u5bb6\u62e5\u6709\u5341\u5e74\u4ee5\u4e0a\u7684\u7ba1\u7406\u8f6f\u4ef6\u5f00\u53d1\u7ecf\u9a8c\uff0c\u65e0\u8bba\u60a8\u8be2\u95ee\u6709\u5173\u534e\u708e\u9b54\u65b9\u7684\u529f\u80fd\u3001\u5b9a\u4ef7\u3001\u5b9e\u65bd\u6216\u4efb\u4f55\u5176\u4ed6\u65b9\u9762\u7684\u95ee\u9898\uff0c\u4ed6\u4eec\u90fd\u5c06\u968f\u65f6\u51c6\u5907\u4e3a\u60a8\u63d0\u4f9b\u5e2e\u52a9\u3002"),s.a.createElement("div",{className:"mt-3"},s.a.createElement("a",{href:"/form/trial",class:"inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-black bg-blue-300 hover:bg-blue-400 hover:text-black focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"},"\u9884\u7ea6\u4ea7\u54c1\u6f14\u793a"))),s.a.createElement("div",{className:"flex lg:flex-shrink-0"},s.a.createElement("img",{className:"h-48 w-48 mt-4",src:"/assets/contact_by_weixin.png"})))),s.a.createElement("div",{className:"bg-white"},s.a.createElement("div",{className:"max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8"},s.a.createElement("div",{className:"xl:grid xl:grid-cols-3 xl:gap-8"},s.a.createElement("div",{className:"xl:col-span-1"},s.a.createElement("img",{className:"h-10",src:"/img/logo_platform_white.png",alt:"\u534e\u708e\u9b54\u65b9"}),s.a.createElement("p",{className:"mt-8 text-gray-500 text-base leading-6"},"\u534e\u708e\u9b54\u65b9\u662f\u65b0\u4e00\u4ee3\u4f4e\u4ee3\u7801\u5e73\u53f0\uff0c\u57fa\u4e8e\u5546\u4e1a\u667a\u80fd\u548c\u6a21\u578b\u9a71\u52a8\uff0c\u53ef\u4ee5\u6309\u7167\u4e1a\u52a1\u90e8\u95e8\u7684\u9700\u6c42\uff0c\u8f7b\u677e\u4fbf\u6377\u5730\u521b\u5efa\u667a\u80fd\u5316\u3001\u79fb\u52a8\u5316\u3001\u4e2a\u6027\u5316\u7684\u5e94\u7528\u7a0b\u5e8f\u3002"),s.a.createElement("div",{className:"mt-8 flex"},s.a.createElement("a",{href:"tel://4008201612",className:"text-gray-400 hover:text-gray-500"},s.a.createElement("span",{className:"sr-only"},"Phone"),s.a.createElement("svg",{viewBox:"0 0 20 20",fill:"currentColor",class:"phone w-6 h-6"},s.a.createElement("path",{d:"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"}))),s.a.createElement("a",{href:"https://github.com/steedos/steedos-platform/",className:"ml-6 text-gray-400 hover:text-gray-500"},s.a.createElement("span",{className:"sr-only"},"GitHub"),s.a.createElement("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24"},s.a.createElement("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"}))))),s.a.createElement("div",{class:"mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2"},s.a.createElement("div",{class:"md:grid md:grid-cols-2 md:gap-8"},s.a.createElement("div",null,s.a.createElement("h4",{className:"text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"},"\u5e73\u53f0"),s.a.createElement("ul",{className:"mt-4"},s.a.createElement("li",null,s.a.createElement("a",{href:"/platform/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u5e73\u53f0\u6982\u89c8")),s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"/platform/lowcode/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u4f4e\u4ee3\u7801")),s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"/platform/cases",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u5ba2\u6237\u6848\u4f8b")),s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"/platform/pricing",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u7248\u672c\u4e0e\u62a5\u4ef7")))),s.a.createElement("div",{className:"mt-12 md:mt-0"},s.a.createElement("h4",{className:"text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"},"\u89e3\u51b3\u65b9\u6848"),s.a.createElement("ul",{className:"mt-4"},s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"/products/contract/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u5408\u540c\u7ba1\u7406")),s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"/products/sales/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u9500\u552e\u7ba1\u7406")),s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"/products/purchase/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u91c7\u8d2d\u7ba1\u7406")),s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"/products/cost/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u8d39\u63a7\u7ba1\u7406")),s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"/products/workflow/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u6d41\u7a0b\u7ba1\u7406"))))),s.a.createElement("div",{class:"md:grid md:grid-cols-2 md:gap-8"},s.a.createElement("div",null,s.a.createElement("h4",{className:"text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"},"\u89c6\u9891\u6f14\u793a"),s.a.createElement("ul",{className:"mt-4"},s.a.createElement("li",null,s.a.createElement("a",{href:"/videos/steedos-digital-transformation/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u6570\u5b57\u5316\u8f6c\u578b")),s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"/videos/steedos-platform-features/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u4f4e\u4ee3\u7801\u5f00\u53d1")),s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"/videos/lesson-object/",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u96f6\u4ee3\u7801\u5f00\u53d1")),s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"/videos/workflow/admin-contracts",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u81ea\u5b9a\u4e49\u6d41\u7a0b")))),s.a.createElement("div",{className:"mt-12 md:mt-0"},s.a.createElement("h4",{className:"text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase"},"\u5173\u4e8e"),s.a.createElement("ul",{className:"mt-4"},s.a.createElement("li",null,s.a.createElement("a",{href:"/company/about-us",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u5173\u4e8e\u6211\u4eec")),s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"/company/customers",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u6210\u529f\u6848\u4f8b")),s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"/company/contact-us",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"\u8054\u7cfb\u6211\u4eec")),s.a.createElement("li",{className:"mt-4"},s.a.createElement("a",{href:"tel://4008201612",className:"text-base leading-6 text-gray-500 hover:text-gray-900"},"400-820-1612"))))))),s.a.createElement("div",{className:"mt-12 border-t border-gray-200 pt-8"},s.a.createElement("p",{className:"text-base leading-6 text-gray-400 xl:text-center"},"\xa9 2020 \u534e\u708e\u8f6f\u4ef6. \u4fdd\u7559\u6240\u6709\u6743\u5229.")))))}}t.a=r},70:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return o}));var l=a(0),s=a.n(l),r=a(376),c=a(362),n=a(368),m=a(367),i=a(371);function o(){return s.a.createElement(r.a,{title:"\u534e\u708e\u9b54\u65b9\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0\u5b98\u7f51",description:"\u534e\u708e\u9b54\u65b9\u662f\u4e00\u6b3e\u968f\u9700\u5e94\u53d8\u7684\u7ba1\u7406\u8f6f\u4ef6\u5f00\u53d1\u5de5\u5177\uff0c\u65e8\u5728\u901a\u8fc7\u5176\u5f3a\u5927\u7684\u654f\u6377\u6027\u3001\u7075\u6d3b\u6027\u548c\u5f00\u653e\u6027\u5e2e\u52a9\u4f01\u4e1a\u521b\u65b0\u3001\u6269\u5c55\u548c\u96c6\u6210\u4f01\u4e1a\u4e1a\u52a1\u7cfb\u7edf\u3002\u57fa\u4e8e\u8be5\u5e73\u53f0\uff0c\u60a8\u53ef\u4ee5\u5feb\u901f\u521b\u5efa\u667a\u80fd\u5316\u3001\u79fb\u52a8\u5316\u7684\u4f01\u4e1a\u5e94\u7528\u3002",keywords:["\u4f4e\u4ee3\u7801,\u4f4e\u4ee3\u7801\u5f00\u53d1,\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0,\u5f00\u6e90\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0,\u5feb\u901f\u5f00\u53d1\u5e73\u53f0,\u5feb\u901f\u5f00\u53d1\u5de5\u5177,paas,\u96f6\u4ee3\u7801,\u96f6\u4ee3\u7801\u5f00\u53d1,\u96f6\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0"]},s.a.createElement("section",{className:"flex bg-cover bg-no-repeat bg-teal-200"},s.a.createElement("div",{className:"mx-auto px-4 my-12 max-w-screen-xl"},s.a.createElement("div",{className:"lg:grid lg:grid-cols-10 lg:gap-8"},s.a.createElement("div",{className:"sm:text-center md:mx-auto lg:col-span-6 lg:text-left"},s.a.createElement("div",{className:"text-lg font-semibold uppercase tracking-wide text-gray-700 sm:text-lg xl:text-xl"},"\u5f00\u6e90\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0"),s.a.createElement("h2",{className:"mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-5xl lg:text-5xl xl:text-6xl"},"\u534e\u708e\u9b54\u65b9",s.a.createElement("br",{className:"hidden md:inline"}),s.a.createElement("span",{className:"text-teal-700"},"\u4e3a\u4e1a\u52a1\u90e8\u95e8\u5feb\u901f\u6784\u5efa\u81ea\u5b9a\u4e49\u5e94\u7528\u7a0b\u5e8f")),s.a.createElement("p",{className:"mt-3 text-base text-gray-700 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"},"\u534e\u708e\u9b54\u65b9\u662f\u5f00\u6e90\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0\uff0c\u57fa\u4e8e\u5546\u4e1a\u667a\u80fd\u548c\u6a21\u578b\u9a71\u52a8\uff0c\u53ea\u9700\u7f16\u5199\u5c11\u91cf\u4ee3\u7801\uff0c\u5c31\u80fd\u8f7b\u677e\u4fbf\u6377\u5730\u521b\u5efa\u667a\u80fd\u5316\u3001\u79fb\u52a8\u5316\u7684\u4f01\u4e1a\u5e94\u7528\u3002"),s.a.createElement("div",{className:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"},s.a.createElement("div",{className:"rounded-md shadow"},s.a.createElement("a",{href:"/videos/steedos-platform-features/",target:"_blank",className:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10  hover:text-white"},"\u89c6\u9891\u4ecb\u7ecd")),s.a.createElement("div",{className:"mt-3 sm:mt-0 sm:ml-3"},s.a.createElement("a",{href:"/form/trial/",target:"_blank",className:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-teal-700 bg-teal-100 hover:text-teal-600 hover:bg-teal-50 focus:outline-none focus:shadow-outline-teal focus:border-teal-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"},"\u9884\u7ea6\u6f14\u793a")))),s.a.createElement("div",{className:"mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-4 lg:flex lg:items-center"},s.a.createElement("div",{className:"relative mx-auto w-full lg:max-w-md"},s.a.createElement("div",{className:"relative block w-full rounded-lg shadow-lg overflow-hidden focus:outline-none focus:shadow-outline"},s.a.createElement(c.a,{poster:"https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/creator/steedos-guide.jpg",autoplay:!1,urls:[{name:"\u9ad8\u6e05",url:"https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/creator/steedos-guide.mp4"}]}))))))),s.a.createElement("div",{className:"py-16 bg-gray-50 overflow-hidden bg-gray-100"},s.a.createElement("div",{className:"relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl"},s.a.createElement("svg",{className:"hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4",width:"404",height:"784",fill:"none",viewBox:"0 0 404 784"},s.a.createElement("defs",null,s.a.createElement("pattern",{id:"b1e6e422-73f8-40a6-b5d9-c8586e37e0e7",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse"},s.a.createElement("rect",{x:"0",y:"0",width:"4",height:"4",className:"text-gray-200",fill:"currentColor"}))),s.a.createElement("rect",{width:"404",height:"784",fill:"url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"})),s.a.createElement("div",{className:"relative"},s.a.createElement("h3",{className:"text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"},"\u5168\u65b0\u4f4e\u4ee3\u7801\u5f00\u53d1\u65b9\u5f0f\uff0c\u4ee3\u7801\u91cf\u51cf\u5c1190%\uff0c\u5f00\u53d1\u6548\u7387\u63d0\u5347\u5341\u500d"),s.a.createElement("p",{className:"mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-500"},"\u534e\u708e\u9b54\u65b9\u57fa\u4e8e\u5546\u4e1a\u667a\u80fd\u548c\u6a21\u578b\u9a71\u52a8\uff0c\u53ea\u9700\u7f16\u5199\u5c11\u91cf\u4ee3\u7801\uff0c\u5c31\u80fd\u8f7b\u677e\u4fbf\u6377\u5730\u521b\u5efa\u667a\u80fd\u5316\u3001\u79fb\u52a8\u5316\u7684\u4f01\u4e1a\u5e94\u7528\u3002"),s.a.createElement("div",{className:"relative mx-auto w-full lg:max-w-md mt-4"},s.a.createElement("div",{className:"relative block w-full rounded-lg shadow-lg overflow-hidden focus:outline-none focus:shadow-outline"},s.a.createElement(c.a,{poster:"https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/lowcode.jpeg",autoplay:!1,urls:[{name:"\u9ad8\u6e05",url:"https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/lowcode.mp4"}]})))))),s.a.createElement(n.a,{title:"\u6570\u636e\u5efa\u6a21",description:"\u534e\u708e\u9b54\u65b9\u5185\u7f6e\u529f\u80fd\u5f3a\u5927\u7684\u5efa\u6a21\u5f15\u64ce\uff0c\u53ef\u4ee5\u4efb\u610f\u914d\u7f6e\u4e1a\u52a1\u5b57\u6bb5\u3001\u5217\u8868\u89c6\u56fe\u3001\u9875\u9762\u5e03\u5c40\uff0c\u5373\u4f7f\u662f\u4e0d\u61c2\u7f16\u7a0b\u7684\u4e1a\u52a1\u4eba\u5458\uff0c\u4e5f\u80fd\u5feb\u901f\u521b\u5efa\u667a\u80fd\u5316\u3001\u79fb\u52a8\u5316\u7684\u4f01\u4e1a\u5e94\u7528\u7a0b\u5e8f\u3002",imageUrl:"https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/features-object.jpeg",videoUrl:"https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/features-object.mp4",imagePosition:"left",items:[{title:"\u4e1a\u52a1\u5bf9\u8c61",description:"\u4e1a\u52a1\u5bf9\u8c61\u76f8\u5f53\u4e8e\u6570\u636e\u5e93\u4e2d\u7684\u8868\uff0c\u7528\u4e8e\u4fdd\u5b58\u4e1a\u52a1\u7cfb\u7edf\u4e2d\u7684\u6838\u5fc3\u6570\u636e\u3002"},{title:"\u5217\u8868\u89c6\u56fe",description:"\u901a\u8fc7\u914d\u7f6e\u5217\u8868\u89c6\u56fe\uff0c\u6700\u7ec8\u7528\u6237\u53ef\u4ee5\u5feb\u6377\u7684\u5207\u6362\u591a\u4e2a\u67e5\u8be2\u6761\u4ef6\u3002"},{title:"\u9875\u9762\u5e03\u5c40",description:"\u9875\u9762\u5e03\u5c40\u63a7\u5236\u4e86\u8bb0\u5f55\u7684\u663e\u793a\u65b9\u5f0f\uff0c\u53ef\u4ee5\u6309\u7167\u7528\u6237\u6743\u9650\u5206\u914d\u4e0d\u540c\u7684\u9875\u9762\u5e03\u5c40\u3002"}]}),s.a.createElement(n.a,{title:"\u6a21\u578b\u9a71\u52a8\u754c\u9762",description:"\u6570\u636e\u5efa\u6a21\u5b8c\u6210\u4e4b\u540e\uff0c\u4e1a\u52a1\u7cfb\u7edf\u7684\u539f\u578b\u4e5f\u5c31\u81ea\u52a8\u751f\u6210\u4e86\u3002\u534e\u708e\u9b54\u65b9\u6839\u636e\u4e1a\u52a1\u6a21\u578b\uff0c\u52a8\u6001\u751f\u6210\u4e1a\u52a1\u7cfb\u7edf\u7684\u540e\u7aef\u670d\u52a1\u63a5\u53e3\u548c\u524d\u7aef\u64cd\u4f5c\u754c\u9762\u3002",imageUrl:"https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/features-ui.jpeg",videoUrl:"https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/features-ui.mp4",items:[{title:"\u5217\u8868\u89c6\u56fe",description:"\u5728\u5217\u8868\u89c6\u56fe\u4e2d\u6d4f\u89c8\u3001\u7b5b\u9009\u3001\u7f16\u8f91\u4e1a\u52a1\u6570\u636e\u3002"},{title:"\u8bb0\u5f55\u67e5\u770b\u89c6\u56fe",description:"\u663e\u793a\u5f53\u524d\u8bb0\u5f55\u8be6\u7ec6\u4fe1\u606f\uff0c\u4ee5\u53ca\u76f8\u5173\u7684\u5b50\u8868\u6570\u636e\u3002"}]}),s.a.createElement(n.a,{title:"\u4f4e\u4ee3\u7801\u5f00\u53d1\u4e1a\u52a1\u903b\u8f91",description:"\u534e\u708e\u9b54\u65b9\u63d0\u4f9b\u4e86\u4f4e\u4ee3\u7801\u5f00\u53d1\u7684\u5165\u53e3\uff0c\u5f00\u53d1\u4eba\u5458\u901a\u8fc7\u7f16\u5199\u4ee3\u7801\uff0c\u5c31\u80fd\u5b9e\u73b0\u7279\u5b9a\u6761\u4ef6\u4e0b\u7684\u81ea\u52a8\u8fd0\u884c\u3001\u622a\u505c\u3001\u56de\u6eda\u7b49\u4e1a\u52a1\u903b\u8f91\uff0c\u8ba9\u4e1a\u52a1\u5728\u65e0\u4eba\u503c\u5b88\u7684\u60c5\u51b5\u4e0b\u81ea\u52a8\u8fd0\u8f6c\uff0c\u9a71\u52a8\u6548\u7387\u63d0\u5347\u3002",imageUrl:"https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/features-lowcode.jpeg",videoUrl:"https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/features-lowcode.mp4",imagePosition:"left",containerClass:"bg-gray-100",items:[{title:"\u89e6\u53d1\u5668",description:"\u5f53\u670d\u52a1\u7aef\u6267\u884c\u6570\u636e\u589e\u5220\u6539\u67e5\u65f6\uff0c\u81ea\u52a8\u89e6\u53d1\u76f8\u5173\u4ee3\u7801\u3002"},{title:"\u64cd\u4f5c\u6309\u94ae",description:"\u57fa\u672c\u7684\u589e\u5220\u6539\u6309\u94ae\u7684\u57fa\u7840\u4e0a\uff0c\u4e3a\u4e1a\u52a1\u5bf9\u8c61\u589e\u52a0\u81ea\u5b9a\u4e49\u7684\u64cd\u4f5c\u6309\u94ae\u3002"},{title:"\u670d\u52a1\u7aefAPI",description:"\u81ea\u5b9a\u4e49\u670d\u52a1\u7aefAPI\uff0c\u7f16\u5199\u5fae\u670d\u52a1\uff0c\u5b9e\u73b0\u81ea\u52a8\u5316\u7684\u4e1a\u52a1\u5904\u7406\u3002"}]}),s.a.createElement("div",{class:"bg-gray-200"},s.a.createElement("div",{class:"max-w-screen-xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8"},s.a.createElement("h2",{class:"text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"},"\u60f3\u8981\u4e86\u89e3\u66f4\u591a\uff1f",s.a.createElement("br",null),"\u5728\u7ebf\u9884\u7ea6\u6211\u4eec\u7684\u6280\u672f\u4e13\u5bb6\uff0c\u4e3a\u60a8\u505a\u4ea7\u54c1\u6f14\u793a\u3002"),s.a.createElement("div",{class:"mt-8 flex justify-center"},s.a.createElement("div",{class:"inline-flex rounded-md shadow"},s.a.createElement("a",{href:"/form/trial",class:"inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-600 hover:text-white hover:bg-green-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"},"\u9884\u7ea6\u4ea7\u54c1\u6f14\u793a"))))),s.a.createElement(n.a,{title:"\u4ece\u4e00\u5f00\u59cb\u5c31\u8ba9\u5e94\u7528\u7a0b\u5e8f\u79fb\u52a8\u5316",description:"\u4f7f\u7528\u79fb\u52a8\u5e94\u7528\u7a0b\u5e8f\uff0c\u5b9e\u73b0\u4e1a\u52a1\u7684\u5168\u9762\u8f6c\u578b\u3002 \u63d0\u9ad8\u5458\u5de5\u751f\u4ea7\u529b\uff0c\u52a0\u5f3a\u5ba2\u6237\u8054\u7cfb\uff0c\u5e2e\u52a9\u5408\u4f5c\u4f19\u4f34\u53d6\u5f97\u66f4\u5927\u6210\u529f\u3002",imageUrl:"https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/features-mobile.jpeg",videoUrl:"https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/features-mobile.mp4",containerClass:"bg-gray-100",items:[{title:"\u6d88\u606f\u63a8\u9001",description:"\u6709\u65b0\u7684\u5f85\u5904\u7406\u4e8b\u9879\u65f6\uff0c\u534e\u708e\u9b54\u65b9\u624b\u673a\u5ba2\u6237\u7aef\u4f1a\u81ea\u52a8\u5f39\u51fa\u63a8\u9001\u63d0\u9192\u3002"},{title:"\u4e2a\u6027\u5316\u624b\u673a\u754c\u9762",description:"\u53ea\u9700\u7b80\u5355\u914d\u7f6e\uff0c\u5c31\u80fd\u5b9a\u5236\u4f60\u7684\u4e13\u5c5e\u624b\u673a\u5ba2\u6237\u7aef\u3002"}]}),s.a.createElement(n.a,{title:"\u6d41\u7a0b\u5f15\u64ce",description:"\u6db5\u76d6\u4e86\u6d41\u7a0b\u8bbe\u8ba1\u3001\u6d41\u7a0b\u8fd0\u884c\u3001\u7ba1\u7406\u7ef4\u62a4\u3001\u7edf\u8ba1\u5206\u6790\u4e0e\u6d41\u7a0b\u4f18\u5316\u7b49\u5404\u7c7b\u5de5\u5177\uff0c\u5e2e\u52a9\u4f01\u4e1a\u5feb\u901f\u90e8\u7f72\u3001\u6709\u6548\u76d1\u63a7\u5e76\u6301\u7eed\u4f18\u5316\u4e1a\u52a1\u6d41\u7a0b\u3002",imageUrl:"https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/features-flow.jpeg",videoUrl:"https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/features-flow.mp4",imagePosition:"left",items:[{title:"\u6d41\u7a0b\u8bbe\u8ba1",description:"\u56fe\u5f62\u5316\u6d41\u7a0b\u8bbe\u8ba1\u5de5\u5177\uff0c\u901a\u8fc7\u62d6\u62fd\u7684\u65b9\u5f0f\u5c31\u80fd\u521b\u5efa\u4e1a\u52a1\u6d41\u7a0b\u3002"},{title:"\u6d41\u7a0b\u8fd0\u884c",description:"\u7535\u8111\u3001\u5e73\u677f\u3001\u624b\u673a\u4e09\u5408\u4e00\u64cd\u4f5c\u754c\u9762\uff0c\u968f\u65f6\u968f\u5730\u5904\u7406\u5f85\u529e\u6587\u4ef6\u3002"},{title:"\u6570\u636e\u540c\u6b65",description:"\u53ea\u9700\u7b80\u5355\u914d\u7f6e\uff0c\u5c31\u80fd\u5b9e\u73b0\u5ba1\u6279\u5355\u4e0e\u4e1a\u52a1\u53f0\u8d26\u53cc\u5411\u540c\u6b65\u3002"}]}),s.a.createElement(n.a,{title:"\u62a5\u8868\u5f15\u64ce",description:"\u4f7f\u7528\u534e\u708e\u9b54\u65b9\u7684\u62a5\u8868\u5f15\u64ce\uff0c\u60a8\u53ef\u4ee5\u5feb\u901f\u914d\u7f6e\u7edf\u8ba1\u56fe\u8868\uff0c\u5305\u62ec\u6570\u636e\u5217\u8868\u3001\u5206\u7ec4\u62a5\u8868\u3001\u6570\u636e\u900f\u89c6\u56fe\u3001\u67f1\u72b6\u56fe\u3001\u997c\u56fe\u7b49\uff0c\u65b9\u4fbf\u67e5\u770b\u3001\u5206\u6790\u548c\u51b3\u7b56\u3002",imageUrl:"https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/features-report.jpeg",videoUrl:"https://www-steedos-com.oss-accelerate.aliyuncs.com/videos/steedos/features-report.mp4",imagePosition:"right",items:[{title:"\u62a5\u8868\u8bbe\u8ba1",description:"\u53ef\u89c6\u5316\u754c\u9762\uff0c\u4e1a\u52a1\u4eba\u5458\u53ef\u81ea\u4e3b\u914d\u7f6e\u7edf\u8ba1\u62a5\u8868\uff0c\u5206\u6790\u4e1a\u52a1\u6570\u636e\u3002"},{title:"\u62a5\u8868\u663e\u793a",description:"\u81ea\u52a8\u6309\u5f53\u524d\u7528\u6237\u6743\u9650\u8fc7\u6ee4\u62a5\u8868\u6570\u636e\uff0c\u52a8\u6001\u663e\u793a\u4e1a\u52a1\u7edf\u8ba1\u7ed3\u679c\u3002"},{title:"\u5bfc\u51faExcel",description:"\u534e\u708e\u9b54\u65b9\u4e2d\u7684\u6240\u6709\u6570\u636e\u53ca\u7edf\u8ba1\u62a5\u8868\u5747\u53ef\u5bfc\u51fa\u4e3aExcel\uff0c\u4ee5\u4fbf\u8fdb\u4e00\u6b65\u5206\u6790\u3002"}]}),s.a.createElement(i.a,null),s.a.createElement(m.a,null))}}}]);