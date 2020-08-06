(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{370:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),p=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},u=function(e){var t=p(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=p(a),s=r,j=u["".concat(l,".").concat(s)]||u[s]||O[s]||b;return a?n.a.createElement(j,c({ref:t},o,{components:a})):n.a.createElement(j,c({ref:t},o))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,l=new Array(b);l[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var o=2;o<b;o++)l[o]=a[o];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},371:function(e,t,a){"use strict";var r=a(0),n=a.n(r),b=a(49),l=a.n(b);class c extends n.a.Component{constructor(e){super(e);const t=Math.random().toString(36).substring(5);this.state={height:"50",sectionId:"section-"+t,backgroundId:"section-background-"+t}}componentDidMount(){this.updateHeight(),this.intervalUpdate=setInterval(this.updateHeight.bind(this),2e3)}componentWillUnmount(){clearInterval(this.intervalUpdate)}updateHeight(){const e=this.refs[this.state.sectionId].clientHeight;this.state.height!==e&&this.setState({height:e})}render(){let{background:e,height:t,padding:a,color:r}=this.props;return this.state.height!==t&&(t=this.state.height),e&&(e.startsWith("/")||e.startsWith("http"))&&(e="url("+e+")"),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:l.a.sectionBackground,id:this.state.backgroundId}),n.a.createElement("div",{className:l.a.section,ref:this.state.sectionId,id:this.state.sectionId},n.a.createElement("style",{dangerouslySetInnerHTML:{__html:`\n          #${this.state.sectionId} {\n            min-height: ${t}px;\n            color: ${r};\n          }\n          #${this.state.backgroundId} {\n            background: ${e};  \n            background-repeat: no-repeat;\n            background-position: top;\n            background-size: cover;\n            height: ${t}px;\n          }\n        `}}),a&&n.a.createElement("div",{style:{height:a+"px"}}),this.props.children,a&&n.a.createElement("div",{style:{height:a+"px"}})))}}c.defaultProps={padding:30,height:200,color:"black"},t.a=c},66:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return u}));var r=a(1),n=a(6),b=(a(0),a(370)),l=a(371),c={title:"\u534e\u708e\u9b54\u65b9\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0 \u5feb\u901f\u6559\u7a0b",sidebar_label:"\u6982\u89c8",hide_table_of_contents:!0},i={id:"developer/guide",title:"\u534e\u708e\u9b54\u65b9\u4f4e\u4ee3\u7801\u5f00\u53d1\u5e73\u53f0 \u5feb\u901f\u6559\u7a0b",description:"\u534e\u708e\u9b54\u65b9\u662f[\u5f00\u6e90\u4f4e\u4ee3\u7801\u5f00\u53d1\u5de5\u5177](https://github.com/steedos/steedos-platform)\uff0c\u57fa\u4e8eNodeJS\u5f00\u53d1\uff0c\u4f7f\u7528yml\u6587\u4ef6\u5b9a\u4e49[\u4e1a\u52a1\u5bf9\u8c61](/developer/object/)\uff0c\u4f7f\u7528 javascript \u8bed\u6cd5\u7f16\u5199\u524d\u7aef\u548c\u540e\u7aef\u4e1a\u52a1\u903b\u8f91\u811a\u672c\u3002\u7cfb\u7edf\u5185\u6838\uff08\u4e1a\u52a1\u5bf9\u8c61\u7ba1\u7406\u3001\u8d26\u6237\u7ba1\u7406\u3001\u6743\u9650\u7ba1\u7406\u3001\u6d41\u7a0b\u5f15\u64ce\u3001\u62a5\u8868\u5f15\u64ce\uff09\u9700\u8fd0\u884c\u4e8e MongoDB \u6570\u636e\u5e93\uff0c\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u5b9a\u4e49[\u7b2c\u4e09\u65b9\u6570\u636e\u6e90](/developer/datasource/)\uff0c\u8fde\u63a5SQL Server\u3001Oracle\u7b49\u73b0\u6709\u7684\u4e1a\u52a1\u7cfb\u7edf\u6570\u636e\u5e93\u3002",source:"@site/../docs/developer/guide.md",permalink:"/developer/guide",sidebar_label:"\u6982\u89c8",sidebar:"Steedos \u5f00\u53d1\u6587\u6863",next:{title:"\u5b89\u88c5\u5f00\u53d1\u73af\u5883",permalink:"/developer/install"}},o=[],p={rightToc:o};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\u534e\u708e\u9b54\u65b9\u662f",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/steedos/steedos-platform"}),"\u5f00\u6e90\u4f4e\u4ee3\u7801\u5f00\u53d1\u5de5\u5177"),"\uff0c\u57fa\u4e8eNodeJS\u5f00\u53d1\uff0c\u4f7f\u7528yml\u6587\u4ef6\u5b9a\u4e49",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/developer/object/"}),"\u4e1a\u52a1\u5bf9\u8c61"),"\uff0c\u4f7f\u7528 javascript \u8bed\u6cd5\u7f16\u5199\u524d\u7aef\u548c\u540e\u7aef\u4e1a\u52a1\u903b\u8f91\u811a\u672c\u3002\u7cfb\u7edf\u5185\u6838\uff08\u4e1a\u52a1\u5bf9\u8c61\u7ba1\u7406\u3001\u8d26\u6237\u7ba1\u7406\u3001\u6743\u9650\u7ba1\u7406\u3001\u6d41\u7a0b\u5f15\u64ce\u3001\u62a5\u8868\u5f15\u64ce\uff09\u9700\u8fd0\u884c\u4e8e MongoDB \u6570\u636e\u5e93\uff0c\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u5b9a\u4e49",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/developer/datasource/"}),"\u7b2c\u4e09\u65b9\u6570\u636e\u6e90"),"\uff0c\u8fde\u63a5SQL Server\u3001Oracle\u7b49\u73b0\u6709\u7684\u4e1a\u52a1\u7cfb\u7edf\u6570\u636e\u5e93\u3002"),Object(b.b)("p",null,Object(b.b)("img",Object(r.a)({parentName:"p"},{src:"/assets/platform/overview/tech.png",alt:"\u754c\u9762\u5c55\u793a"}))),Object(b.b)("p",null,"\u672c\u6559\u7a0b\u4ee5\u5408\u540c\u7ba1\u7406\u4e3a\u4f8b\uff0c\u6307\u5bfc\u4f60\u5982\u4f55\u4f7f\u7528\u534e\u708e\u9b54\u65b9\u521b\u5efa\u9879\u76ee\uff0c\u914d\u7f6e\u4e1a\u52a1\u5bf9\u8c61\uff0c\u7f16\u7a0b\u811a\u672c\uff0c\u5904\u7406\u4e1a\u52a1\u90e8\u95e8\u7684\u5404\u79cd\u4e2a\u6027\u5316\u9700\u6c42\u3002\u60a8\u5f00\u53d1\u7684\u65b0\u4e1a\u52a1\u7cfb\u7edf\u53ef\u4ee5\u90e8\u7f72\u5728\u672c\u5730\u8fd0\u884c\u3002"),Object(b.b)("h4",{id:"\u51c6\u5907\uff1a\u5b89\u88c5\u5f00\u53d1\u73af\u5883"},Object(b.b)("a",Object(r.a)({parentName:"h4"},{href:"/developer/install"}),"\u51c6\u5907\uff1a\u5b89\u88c5\u5f00\u53d1\u73af\u5883")),Object(b.b)("h4",{id:"\u6559\u7a0b1\uff1a\u521b\u5efa\u9879\u76ee"},Object(b.b)("a",Object(r.a)({parentName:"h4"},{href:"/developer/guide_create"}),"\u6559\u7a0b1\uff1a\u521b\u5efa\u9879\u76ee")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u521b\u5efasteedos\u9879\u76ee"),Object(b.b)("li",{parentName:"ul"},"\u5b89\u88c5\u4f9d\u8d56\u5305"),Object(b.b)("li",{parentName:"ul"},"\u8fd0\u884c\u7a7a\u9879\u76ee"),Object(b.b)("li",{parentName:"ul"},"\u6587\u4ef6\u5939\u7ed3\u6784"),Object(b.b)("li",{parentName:"ul"},"\u6ce8\u518c\u65b0\u8d26\u6237"),Object(b.b)("li",{parentName:"ul"},"\u521b\u5efa\u4f01\u4e1a/\u5de5\u4f5c\u533a"),Object(b.b)("li",{parentName:"ul"},"\u7cfb\u7edf\u4e3b\u9875\u9762")),Object(b.b)("h4",{id:"\u6559\u7a0b2\uff1a\u914d\u7f6e\u4e1a\u52a1\u5bf9\u8c61"},Object(b.b)("a",Object(r.a)({parentName:"h4"},{href:"/developer/guide_object"}),"\u6559\u7a0b2\uff1a\u914d\u7f6e\u4e1a\u52a1\u5bf9\u8c61")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u521b\u5efa\u4e1a\u52a1\u5bf9\u8c61\uff1a\u5408\u540c"),Object(b.b)("li",{parentName:"ul"},"\u6dfb\u52a0\u5b57\u6bb5"),Object(b.b)("li",{parentName:"ul"},"\u8bbe\u7f6e\u89c6\u56fe\uff1a\u6240\u6709\u5408\u540c"),Object(b.b)("li",{parentName:"ul"},"\u65b0\u589e\u89c6\u56fe\uff1a\u6211\u7684\u5408\u540c"),Object(b.b)("li",{parentName:"ul"},"\u5b9a\u4e49\u6743\u9650\uff1a\u666e\u901a\u7528\u6237\u53ea\u80fd\u67e5\u770b\u81ea\u5df1\u7684\u5408\u540c\uff0c\u5408\u540c\u7ba1\u7406\u5458\u548c\u7cfb\u7edf\u7ba1\u7406\u5458\u53ef\u4ee5\u67e5\u770b\u6240\u6709\u5408\u540c"),Object(b.b)("li",{parentName:"ul"},"\u4fee\u6539\u5e94\u7528\uff1a\u589e\u52a0\u5408\u540c"),Object(b.b)("li",{parentName:"ul"},"\u91cd\u542f\u670d\u52a1\u8fd0\u884c\u5e76\u67e5\u770b\u6548\u679c")),Object(b.b)("h4",{id:"\u6559\u7a0b3\uff1a\u4e1a\u52a1\u5bf9\u8c61\u5173\u8054"},Object(b.b)("a",Object(r.a)({parentName:"h4"},{href:"/developer/guide_relationship"}),"\u6559\u7a0b3\uff1a\u4e1a\u52a1\u5bf9\u8c61\u5173\u8054")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u521b\u5efa\u4e1a\u52a1\u5bf9\u8c61\uff1a\u4ed8\u6b3e\u8ba1\u5212"),Object(b.b)("li",{parentName:"ul"},"\u6dfb\u52a0\u5b57\u6bb5"),Object(b.b)("li",{parentName:"ul"},"\u4e1a\u52a1\u5bf9\u8c61\u5173\u8054\u5b57\u6bb5"),Object(b.b)("li",{parentName:"ul"},"\u914d\u7f6e\u9ed8\u8ba4\u89c6\u56fe\u548c\u6743\u9650"),Object(b.b)("li",{parentName:"ul"},"\u4fee\u6539\u9ed8\u8ba4\u5e94\u7528\uff1a\u53bb\u6389\u5408\u540c"),Object(b.b)("li",{parentName:"ul"},"\u65b0\u5efa\u81ea\u5b9a\u4e49\u5e94\u7528\uff1a\u5408\u540c\uff0c\u914d\u7f6e\u76f8\u5173\u7684\u4e1a\u52a1\u5bf9\u8c61"),Object(b.b)("li",{parentName:"ul"},"\u91cd\u542f\u670d\u52a1\u8fd0\u884c\u5e76\u67e5\u770b\u6548\u679c")),Object(b.b)("h4",{id:"\u6559\u7a0b4\uff1a\u914d\u7f6e\u89e6\u53d1\u5668"},Object(b.b)("a",Object(r.a)({parentName:"h4"},{href:"/developer/guide_trigger"}),"\u6559\u7a0b4\uff1a\u914d\u7f6e\u89e6\u53d1\u5668")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u4fee\u6539\u4e1a\u52a1\u5bf9\u8c61\u7684\u5b57\u6bb5"),Object(b.b)("li",{parentName:"ul"},"\u521b\u5efa\u89e6\u53d1\u5668"),Object(b.b)("li",{parentName:"ul"},"\u7f16\u5199\u89e6\u53d1\u7684\u6267\u884c\u4ee3\u7801\uff1a\u81ea\u52a8\u66f4\u65b0\u5f85\u6536\u91d1\u989d")),Object(b.b)("h4",{id:"\u6559\u7a0b5\uff1a\u81ea\u5b9a\u4e49\u64cd\u4f5c\u6309\u94ae"},Object(b.b)("a",Object(r.a)({parentName:"h4"},{href:"/developer/guide_button"}),"\u6559\u7a0b5\uff1a\u81ea\u5b9a\u4e49\u64cd\u4f5c\u6309\u94ae")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u521b\u5efa\u81ea\u5b9a\u4e49\u64cd\u4f5c\u6309\u94ae"),Object(b.b)("li",{parentName:"ul"},"\u7f16\u5199\u6309\u94ae\u7684\u6267\u884c\u4ee3\u7801\uff1a\u53d1\u9001\u90ae\u4ef6"),Object(b.b)("li",{parentName:"ul"},"\u91cd\u542f\u670d\u52a1\u8fd0\u884c\u5e76\u67e5\u770b\u6548\u679c")),Object(b.b)("h4",{id:"\u6559\u7a0b6\uff1a\u8bbe\u7f6e\u62a5\u8868"},Object(b.b)("a",Object(r.a)({parentName:"h4"},{href:"/developer/guide_report"}),"\u6559\u7a0b6\uff1a\u8bbe\u7f6e\u62a5\u8868")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u4fee\u6539\u5408\u540c\u5e94\u7528\uff1a\u589e\u52a0\u62a5\u8868reports"),Object(b.b)("li",{parentName:"ul"},"\u91cd\u542f\u670d\u52a1\u8fd0\u884c\u5e76\u67e5\u770b\u6548\u679c"),Object(b.b)("li",{parentName:"ul"},"\u5b9a\u4e49\u77e9\u9635\u578b\u62a5\u8868\uff1a\u5408\u540c\u5e74\u5ea6\u7edf\u8ba1")),Object(b.b)("h4",{id:"\u6559\u7a0b7\uff1a\u8bbe\u7f6e\u5408\u540c\u5ba1\u6279\u6d41\u7a0b"},Object(b.b)("a",Object(r.a)({parentName:"h4"},{href:"/developer/guide_flow"}),"\u6559\u7a0b7\uff1a\u8bbe\u7f6e\u5408\u540c\u5ba1\u6279\u6d41\u7a0b")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u914d\u7f6e\u8868\u5355"),Object(b.b)("li",{parentName:"ul"},"\u914d\u7f6e\u6d41\u7a0b"),Object(b.b)("li",{parentName:"ul"},"\u914d\u7f6e\u6743\u9650"),Object(b.b)("li",{parentName:"ul"},"\u8fd0\u884c\u5408\u540c\u5ba1\u6279\u6d41\u7a0b")),Object(b.b)("h4",{id:"\u6559\u7a0b8\uff1a\u5408\u540c\u5ba1\u6279\u81ea\u52a8\u8fdb\u5165\u5408\u540c\u53f0\u8d26"},Object(b.b)("a",Object(r.a)({parentName:"h4"},{href:"/developer/guide_sync"}),"\u6559\u7a0b8\uff1a\u5408\u540c\u5ba1\u6279\u81ea\u52a8\u8fdb\u5165\u5408\u540c\u53f0\u8d26")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u4fee\u6539\u8868\u5355\uff0c\u8bfb\u53d6\u5408\u4f5c\u4f19\u4f34\u6570\u636e"),Object(b.b)("li",{parentName:"ul"},"\u4fee\u6539\u7cfb\u7edf\u914d\u7f6e\uff0c\u8bbe\u7f6e\u540c\u6b65\u9891\u7387"),Object(b.b)("li",{parentName:"ul"},"\u4fee\u6539\u5e94\u7528\uff0c\u6253\u5f00\u5408\u540c\u7684\u914d\u7f6e\u5bf9\u8c61\u6d41\u7a0b\u5f00\u5173"),Object(b.b)("li",{parentName:"ul"},"\u91cd\u542f\u670d\u52a1"),Object(b.b)("li",{parentName:"ul"},"\u914d\u7f6e\u5bf9\u8c61\u6d41\u7a0b"),Object(b.b)("li",{parentName:"ul"},"\u8fd0\u884c\u5408\u540c\u5ba1\u6279\u6d41\u7a0b\uff0c\u786e\u8ba4\u540c\u6b65\u60c5\u51b5")),Object(b.b)("h4",{id:"\u6559\u7a0b9\uff1a\u591a\u5355\u4f4d\u6743\u9650\u63a7\u5236"},Object(b.b)("a",Object(r.a)({parentName:"h4"},{href:"/developer/guide_companies"}),"\u6559\u7a0b9\uff1a\u591a\u5355\u4f4d\u6743\u9650\u63a7\u5236")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u4fee\u6539\u5408\u4f5c\u4f19\u4f34\uff0c\u542f\u7528\u5206\u90e8\u5b57\u6bb5"),Object(b.b)("li",{parentName:"ul"},"\u4fee\u6539\u5408\u4f5c\u4f19\u4f34\uff0c\u4fee\u6539\u6743\u9650\u63a7\u5236"),Object(b.b)("li",{parentName:"ul"},"\u4fee\u6539\u5408\u540c\uff0c\u542f\u7528\u5206\u90e8\u5b57\u6bb5"),Object(b.b)("li",{parentName:"ul"},"\u4fee\u6539\u5408\u540c\uff0c\u4fee\u6539\u6743\u9650\u63a7\u5236"),Object(b.b)("li",{parentName:"ul"},"\u91cd\u542f\u670d\u52a1"),Object(b.b)("li",{parentName:"ul"},"\u914d\u7f6e\u5355\u4f4d\u6743\u9650\u5bf9\u5e94\u4eba\u5458"),Object(b.b)("li",{parentName:"ul"},"\u786e\u8ba4\u591a\u5355\u4f4d\u6743\u9650\u63a7\u5236\u6548\u679c")),Object(b.b)("h4",{id:"\u6559\u7a0b10\uff1a\u7b2c\u4e09\u65b9\u7cfb\u7edf\u63a5\u53e3\u96c6\u6210"},Object(b.b)("a",Object(r.a)({parentName:"h4"},{href:"/developer/guide_nc"}),"\u6559\u7a0b10\uff1a\u7b2c\u4e09\u65b9\u7cfb\u7edf\u63a5\u53e3\u96c6\u6210")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u589e\u52a0\u7533\u8bf7\u4ed8\u6b3e\u6309\u94ae"),Object(b.b)("li",{parentName:"ul"},"\u589e\u52a0\u7533\u8bf7\u4ed8\u6b3e\u7684\u6267\u884c"),Object(b.b)("li",{parentName:"ul"},"\u589e\u52a0\u8c03\u7528\u63a5\u53e3\u7684\u5177\u4f53\u6267\u884c"),Object(b.b)("li",{parentName:"ul"},"\u67e5\u770b\u63a5\u53e3\u7684\u5b9e\u9645\u8fd0\u884c\u6548\u679c")),Object(b.b)(l.a,{background:"#215ca0",padding:"50",mdxType:"Section"},Object(b.b)("div",{style:{color:"#FFFFFF"}},Object(b.b)("h1",{id:"\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u6709\u7591\u95ee\uff1f\uff1f"},"\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u6709\u7591\u95ee\uff1f\uff1f"),Object(b.b)("h1",{id:"\u626b\u63cf\u4ee5\u4e0b\u4e8c\u7ef4\u7801\uff0c\u6211\u4eec\u7684\u6280\u672f\u4e13\u5bb6\u4f1a\u4e3a\u60a8\u89e3\u7b54\u3002"},"\u626b\u63cf\u4ee5\u4e0b\u4e8c\u7ef4\u7801\uff0c\u6211\u4eec\u7684\u6280\u672f\u4e13\u5bb6\u4f1a\u4e3a\u60a8\u89e3\u7b54\u3002"),Object(b.b)("p",null,"\u6211\u4eec\u7684\u6280\u672f\u4e13\u5bb6\u62e5\u6709\u5341\u5e74\u4ee5\u4e0a\u7684\u7ba1\u7406\u8f6f\u4ef6\u5f00\u53d1\u7ecf\u9a8c\uff0c\u65e0\u8bba\u60a8\u8be2\u95ee\u6709\u5173\u534e\u708e\u9b54\u65b9\u5f00\u53d1\u5e73\u53f0\u7684\u529f\u80fd\u3001\u5b9a\u4ef7\u3001\u5b9e\u65bd\u6216\u4efb\u4f55\u5176\u4ed6\u65b9\u9762\u7684\u95ee\u9898\uff0c\u4ed6\u4eec\u90fd\u5c06\u968f\u65f6\u51c6\u5907\u4e3a\u60a8\u63d0\u4f9b\u5e2e\u52a9\u3002"),Object(b.b)("p",null,Object(b.b)("img",Object(r.a)({parentName:"p"},{src:"/assets/contact_by_weixin.png",alt:"\u5728\u7ebf\u54a8\u8be2"}))))))}u.isMDXComponent=!0}}]);