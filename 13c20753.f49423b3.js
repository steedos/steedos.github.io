(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{370:function(e,s,t){"use strict";t.d(s,"a",(function(){return b})),t.d(s,"b",(function(){return _}));var l=t(0),i=t.n(l);function a(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}function c(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);s&&(l=l.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,l)}return t}function n(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?c(Object(t),!0).forEach((function(s){a(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}function d(e,s){if(null==e)return{};var t,l,i=function(e,s){if(null==e)return{};var t,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],s.indexOf(t)>=0||(i[t]=e[t]);return i}(e,s);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],s.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var r=i.a.createContext({}),o=function(e){var s=i.a.useContext(r),t=s;return e&&(t="function"==typeof e?e(s):n({},s,{},e)),t},b=function(e){var s=o(e.components);return i.a.createElement(r.Provider,{value:s},e.children)},u={inlineCode:"code",wrapper:function(e){var s=e.children;return i.a.createElement(i.a.Fragment,{},s)}},m=Object(l.forwardRef)((function(e,s){var t=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,r=d(e,["components","mdxType","originalType","parentName"]),b=o(t),m=l,_=b["".concat(c,".").concat(m)]||b[m]||u[m]||a;return t?i.a.createElement(_,n({ref:s},r,{components:t})):i.a.createElement(_,n({ref:s},r))}));function _(e,s){var t=arguments,l=s&&s.mdxType;if("string"==typeof e||l){var a=t.length,c=new Array(a);c[0]=m;var n={};for(var d in s)hasOwnProperty.call(s,d)&&(n[d]=s[d]);n.originalType=e,n.mdxType="string"==typeof e?e:l,c[1]=n;for(var r=2;r<a;r++)c[r]=t[r];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},371:function(e,s,t){"use strict";var l=t(4),i=t(0),a=t.n(i),c=t(49),n=t.n(c),d=function(e){function s(s){var t;t=e.call(this,s)||this;var l=Math.random().toString(36).substring(5);return t.state={height:"50",sectionId:"section-"+l,backgroundId:"section-background-"+l},t}Object(l.a)(s,e);var t=s.prototype;return t.componentDidMount=function(){this.updateHeight(),this.intervalUpdate=setInterval(this.updateHeight.bind(this),2e3)},t.componentWillUnmount=function(){clearInterval(this.intervalUpdate)},t.updateHeight=function(){var e=this.refs[this.state.sectionId].clientHeight;this.state.height!==e&&this.setState({height:e})},t.render=function(){var e=this.props,s=e.background,t=e.height,l=e.padding,i=e.color;return this.state.height!==t&&(t=this.state.height),s&&(s.startsWith("/")||s.startsWith("http"))&&(s="url("+s+")"),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:n.a.sectionBackground,id:this.state.backgroundId}),a.a.createElement("div",{className:n.a.section,ref:this.state.sectionId,id:this.state.sectionId},a.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n          #"+this.state.sectionId+" {\n            min-height: "+t+"px;\n            color: "+i+";\n          }\n          #"+this.state.backgroundId+" {\n            background: "+s+";  \n            background-repeat: no-repeat;\n            background-position: top;\n            background-size: cover;\n            height: "+t+"px;\n          }\n        "}}),l&&a.a.createElement("div",{style:{height:l+"px"}}),this.props.children,l&&a.a.createElement("div",{style:{height:l+"px"}})))},s}(a.a.Component);d.defaultProps={padding:30,height:200,color:"black"},s.a=d},76:function(e,s,t){"use strict";t.r(s),t.d(s,"frontMatter",(function(){return n})),t.d(s,"metadata",(function(){return d})),t.d(s,"rightToc",(function(){return r})),t.d(s,"default",(function(){return b}));var l=t(1),i=t(6),a=(t(0),t(370)),c=t(371),n={title:"\u534e\u708e\u9b54\u65b9\u6587\u6863",background:"/img/banner/clouds-large-desktop.png",hide_table_of_contents:!0},d={id:"developer",title:"\u534e\u708e\u9b54\u65b9\u6587\u6863",description:"\u534e\u708e\u9b54\u65b9\u662f\u4e00\u6b3e\u968f\u9700\u5e94\u53d8\u7684\u7ba1\u7406\u8f6f\u4ef6\u5f00\u53d1\u5de5\u5177\uff0c\u65e8\u5728\u901a\u8fc7\u5176\u5f3a\u5927\u7684\u654f\u6377\u6027\u3001\u7075\u6d3b\u6027\u548c\u5f00\u653e\u6027\u5e2e\u52a9\u4f01\u4e1a\u521b\u65b0\u3001\u6269\u5c55\u548c\u96c6\u6210\u4f01\u4e1a\u4e1a\u52a1\u7cfb\u7edf\u3002\u57fa\u4e8e\u8be5\u5e73\u53f0\uff0c\u60a8\u53ef\u4ee5\u5feb\u901f\u521b\u5efa\u667a\u80fd\u5316\u3001\u79fb\u52a8\u5316\u7684\u4f01\u4e1a\u5e94\u7528\u3002",source:"@site/../docs/developer.md",permalink:"/developer"},r=[],o={rightToc:r};function b(e){var s=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(l.a)({},o,t,{components:s,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u534e\u708e\u9b54\u65b9\u662f\u4e00\u6b3e\u968f\u9700\u5e94\u53d8\u7684\u7ba1\u7406\u8f6f\u4ef6\u5f00\u53d1\u5de5\u5177\uff0c\u65e8\u5728\u901a\u8fc7\u5176\u5f3a\u5927\u7684\u654f\u6377\u6027\u3001\u7075\u6d3b\u6027\u548c\u5f00\u653e\u6027\u5e2e\u52a9\u4f01\u4e1a\u521b\u65b0\u3001\u6269\u5c55\u548c\u96c6\u6210\u4f01\u4e1a\u4e1a\u52a1\u7cfb\u7edf\u3002\u57fa\u4e8e\u8be5\u5e73\u53f0\uff0c\u60a8\u53ef\u4ee5\u5feb\u901f\u521b\u5efa\u667a\u80fd\u5316\u3001\u79fb\u52a8\u5316\u7684\u4f01\u4e1a\u5e94\u7528\u3002"),Object(a.b)("div",{class:"slds-grid slds-wrap"},Object(a.b)("div",{class:"slds-p-around_small slds-size_1-of-1 slds-large-size_1-of-2"},Object(a.b)("a",{href:"https://www-steedos-com.oss-cn-beijing.aliyuncs.com/docs/%E5%8D%8E%E7%82%8E%E9%AD%94%E6%96%B9%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88%E6%89%8B%E5%86%8C.pdf",class:"slds-card slds-box slds-box_link slds-media"},Object(a.b)("div",{class:"slds-media__figure slds-media__figure_fixed-width slds-align_absolute-center"},Object(a.b)("div",{class:"slds-welcome-mat__tile-figure"},Object(a.b)("div",{class:"slds-welcome-mat__tile-icon-container"},Object(a.b)("span",{class:"slds-icon_container slds-icon-utility-animal_and_nature"},Object(a.b)("svg",{class:"slds-icon slds-icon-text-default","aria-hidden":"true"},Object(a.b)("use",{href:"/assets/icons/utility-sprite/svg/symbols.svg#company"})))))),Object(a.b)("div",{class:"slds-media__body"},Object(a.b)("div",{class:"slds-welcome-mat__tile-body"},Object(a.b)("h3",{class:"slds-welcome-mat__tile-title"},"\u534e\u708e\u9b54\u65b9\u7684\u5341\u5927\u5f15\u64ce"),Object(a.b)("p",{class:"slds-welcome-mat__tile-description"},"\u534e\u708e\u9b54\u65b9\u6280\u672f\u67b6\u6784\u3001\u96f6\u4ee3\u7801\u5f00\u53d1\u3001\u4f4e\u4ee3\u7801\u5f00\u53d1\u89e3\u51b3\u65b9\u6848\u7b80\u4ecb\u3002"))))),Object(a.b)("div",{class:"slds-p-around_small slds-size_1-of-1 slds-large-size_1-of-2"},Object(a.b)("a",{href:"/developer/deploy/",class:"slds-card slds-box slds-box_link slds-media"},Object(a.b)("div",{class:"slds-media__figure slds-media__figure_fixed-width slds-align_absolute-center"},Object(a.b)("div",{class:"slds-welcome-mat__tile-figure"},Object(a.b)("div",{class:"slds-welcome-mat__tile-icon-container"},Object(a.b)("span",{class:"slds-icon_container slds-icon-utility-animal_and_nature"},Object(a.b)("svg",{class:"slds-icon slds-icon-text-default","aria-hidden":"true"},Object(a.b)("use",{href:"/assets/icons/utility-sprite/svg/symbols.svg#setup_assistant_guide"})))))),Object(a.b)("div",{class:"slds-media__body"},Object(a.b)("div",{class:"slds-welcome-mat__tile-body"},Object(a.b)("h3",{class:"slds-welcome-mat__tile-title"},"\u5b89\u88c5\u90e8\u7f72"),Object(a.b)("p",{class:"slds-welcome-mat__tile-description"},"\u5982\u4f55\u5728\u672c\u5730\u670d\u52a1\u5668\uff0c\u5b89\u88c5\u90e8\u7f72\u534e\u708e\u9b54\u65b9\u5f00\u53d1\u73af\u5883/\u751f\u4ea7\u73af\u5883\u3002"))))),Object(a.b)("div",{class:"slds-p-around_small slds-size_1-of-1 slds-large-size_1-of-2"},Object(a.b)("a",{href:"/help/admin/",class:"slds-card slds-box slds-box_link slds-media"},Object(a.b)("div",{class:"slds-media__figure slds-media__figure_fixed-width slds-align_absolute-center"},Object(a.b)("div",{class:"slds-welcome-mat__tile-figure"},Object(a.b)("div",{class:"slds-welcome-mat__tile-icon-container"},Object(a.b)("span",{class:"slds-icon_container slds-icon-utility-animal_and_nature"},Object(a.b)("svg",{class:"slds-icon slds-icon-text-default","aria-hidden":"true"},Object(a.b)("use",{href:"/assets/icons/utility-sprite/svg/symbols.svg#setup"})))))),Object(a.b)("div",{class:"slds-media__body"},Object(a.b)("div",{class:"slds-welcome-mat__tile-body"},Object(a.b)("h3",{class:"slds-welcome-mat__tile-title"},"\u7cfb\u7edf\u7ba1\u7406\u5458\u624b\u518c"),Object(a.b)("p",{class:"slds-welcome-mat__tile-description"},"\u5982\u4f55\u914d\u7f6e\u4e1a\u52a1\u5bf9\u8c61\u3001\u5982\u4f55\u914d\u7f6e\u5ba1\u6279\u6d41\u7a0b\u3001\u5982\u4f55\u914d\u7f6e\u4e1a\u52a1\u6743\u9650"))))),Object(a.b)("div",{class:"slds-p-around_small slds-size_1-of-1 slds-large-size_1-of-2"},Object(a.b)("a",{href:"/help/",class:"slds-card slds-box slds-box_link slds-media"},Object(a.b)("div",{class:"slds-media__figure slds-media__figure_fixed-width slds-align_absolute-center"},Object(a.b)("div",{class:"slds-welcome-mat__tile-figure"},Object(a.b)("div",{class:"slds-welcome-mat__tile-icon-container"},Object(a.b)("span",{class:"slds-icon_container slds-icon-utility-animal_and_nature"},Object(a.b)("svg",{class:"slds-icon slds-icon-text-default","aria-hidden":"true"},Object(a.b)("use",{href:"/assets/icons/utility-sprite/svg/symbols.svg#people"})))))),Object(a.b)("div",{class:"slds-media__body"},Object(a.b)("div",{class:"slds-welcome-mat__tile-body"},Object(a.b)("h3",{class:"slds-welcome-mat__tile-title"},"\u7528\u6237\u624b\u518c"),Object(a.b)("p",{class:"slds-welcome-mat__tile-description"},"\u5982\u4f55\u586b\u5199\u7533\u8bf7\u5355\u3001\u5728\u7ebf\u5ba1\u6279\u3001\u7ba1\u7406\u6570\u636e\u53f0\u8d26\u3002"))))),Object(a.b)("div",{class:"slds-p-around_small slds-size_1-of-1 slds-large-size_1-of-2"},Object(a.b)("a",{href:"/developer/guide/",class:"slds-card slds-box slds-box_link slds-media"},Object(a.b)("div",{class:"slds-media__figure slds-media__figure_fixed-width slds-align_absolute-center"},Object(a.b)("div",{class:"slds-welcome-mat__tile-figure"},Object(a.b)("div",{class:"slds-welcome-mat__tile-icon-container"},Object(a.b)("span",{class:"slds-icon_container slds-icon-utility-animal_and_nature"},Object(a.b)("svg",{class:"slds-icon slds-icon-text-default","aria-hidden":"true"},Object(a.b)("use",{href:"/assets/icons/utility-sprite/svg/symbols.svg#sobject"})))))),Object(a.b)("div",{class:"slds-media__body"},Object(a.b)("div",{class:"slds-welcome-mat__tile-body"},Object(a.b)("h3",{class:"slds-welcome-mat__tile-title"},"\u4f4e\u4ee3\u7801\u5f00\u53d1\u6559\u7a0b"),Object(a.b)("p",{class:"slds-welcome-mat__tile-description"},"\u5982\u4f55\u4f7f\u7528\u534e\u708e\u9b54\u65b9\uff0c\u5f00\u53d1\u968f\u9700\u5b9a\u5236\u7684\u5408\u540c\u7ba1\u7406\u7cfb\u7edf"))))),Object(a.b)("div",{class:"slds-p-around_small slds-size_1-of-1 slds-large-size_1-of-2"},Object(a.b)("a",{href:"/developer/api/",class:"slds-card slds-box slds-box_link slds-media"},Object(a.b)("div",{class:"slds-media__figure slds-media__figure_fixed-width slds-align_absolute-center"},Object(a.b)("div",{class:"slds-welcome-mat__tile-figure"},Object(a.b)("div",{class:"slds-welcome-mat__tile-icon-container"},Object(a.b)("span",{class:"slds-icon_container slds-icon-utility-animal_and_nature"},Object(a.b)("svg",{class:"slds-icon slds-icon-text-default","aria-hidden":"true"},Object(a.b)("use",{href:"/assets/icons/utility-sprite/svg/symbols.svg#replace"})))))),Object(a.b)("div",{class:"slds-media__body"},Object(a.b)("div",{class:"slds-welcome-mat__tile-body"},Object(a.b)("h3",{class:"slds-welcome-mat__tile-title"},"\u534e\u708e\u9b54\u65b9 API"),Object(a.b)("p",{class:"slds-welcome-mat__tile-description"},"\u4f7f\u7528\u6807\u51c6\u7684 OData/GraphQL \u63a5\u53e3\uff0c\u8bbf\u95ee\u4f60\u7684\u81ea\u5b9a\u4e49\u4e1a\u52a1\u5bf9\u8c61")))))),Object(a.b)("br",null),Object(a.b)("br",null),Object(a.b)(c.a,{background:"#215ca0",padding:"50",mdxType:"Section"},Object(a.b)("div",{style:{color:"#FFFFFF"}},Object(a.b)("h1",{id:"\u5bf9\u4e8e\u534e\u708e\u9b54\u65b9\u6709\u7591\u95ee\uff1f\uff1f"},"\u5bf9\u4e8e\u534e\u708e\u9b54\u65b9\u6709\u7591\u95ee\uff1f\uff1f"),Object(a.b)("h1",{id:"\u626b\u63cf\u4ee5\u4e0b\u4e8c\u7ef4\u7801\uff0c\u6211\u4eec\u7684\u6280\u672f\u4e13\u5bb6\u4f1a\u4e3a\u60a8\u89e3\u7b54\u3002"},"\u626b\u63cf\u4ee5\u4e0b\u4e8c\u7ef4\u7801\uff0c\u6211\u4eec\u7684\u6280\u672f\u4e13\u5bb6\u4f1a\u4e3a\u60a8\u89e3\u7b54\u3002"),Object(a.b)("p",null,"\u6211\u4eec\u7684\u6280\u672f\u4e13\u5bb6\u62e5\u6709\u5341\u5e74\u4ee5\u4e0a\u7684\u7ba1\u7406\u8f6f\u4ef6\u5f00\u53d1\u7ecf\u9a8c\uff0c\u65e0\u8bba\u60a8\u8be2\u95ee\u6709\u5173\u534e\u708e\u9b54\u65b9\u5f00\u53d1\u5e73\u53f0\u7684\u529f\u80fd\u3001\u5b9a\u4ef7\u3001\u5b9e\u65bd\u6216\u4efb\u4f55\u5176\u4ed6\u65b9\u9762\u7684\u95ee\u9898\uff0c\u4ed6\u4eec\u90fd\u5c06\u968f\u65f6\u51c6\u5907\u4e3a\u60a8\u63d0\u4f9b\u5e2e\u52a9\u3002"),Object(a.b)("p",null,Object(a.b)("img",Object(l.a)({parentName:"p"},{src:"/assets/contact_by_weixin.png",alt:"\u5728\u7ebf\u54a8\u8be2"}))))))}b.isMDXComponent=!0}}]);