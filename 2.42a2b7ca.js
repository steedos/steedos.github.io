(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{348:function(e,t,n){"use strict";var a=n(0),r=n(371);t.a=function(){return Object(a.useContext)(r.a)}},349:function(e,t,n){"use strict";var a=n(0);t.a=function(e=!0){Object(a.useEffect)(()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"}),[e])}},351:function(e,t,n){"use strict";n(12);var a=n(0),r=n.n(a),c=n(344),o=n.n(c),i=n(342),s=n(366);n(89);t.a=e=>{const[t,c]=Object(a.useState)(!1),u=Object(a.useRef)(null),{siteConfig:l={}}=Object(i.a)(),{themeConfig:{algolia:h}}=l,d=Object(s.b)();const f=(e=!0)=>{t||Promise.all([n.e(246).then(n.t.bind(null,398,7)),n.e(175).then(n.t.bind(null,443,7))]).then(([{default:t}])=>{c(!0),window.docsearch=t,function(e){window.docsearch({appId:h.appId,apiKey:h.apiKey,indexName:h.indexName,inputSelector:"#search_input_react",algoliaOptions:h.algoliaOptions,handleSelected:(e,t,n)=>{const a=document.createElement("a");a.href=n.url;const r="#__docusaurus"===a.hash?`${a.pathname}`:`${a.pathname}${a.hash}`;d.push(r)}}),e&&u.current.focus()}(e)})},p=Object(a.useCallback)(()=>{f(),t&&u.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)},[e.isSearchBarExpanded]),b=Object(a.useCallback)(()=>{e.handleSearchBarToggle(!e.isSearchBarExpanded)},[e.isSearchBarExpanded]),v=Object(a.useCallback)(e=>{const t="mouseover"!==e.type;f(t)});return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:o()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:p,onKeyDown:p,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:o()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:v,onFocus:v,onBlur:b,ref:u}))}},352:function(e,t,n){"use strict";var a=n(1),r=n(0),c=n.n(r),o=n(389),i=n.n(o),s=n(342),u=n(344),l=n.n(u),h=n(90),d=n.n(h);const f=()=>c.a.createElement("span",{className:l()(d.a.toggle,d.a.moon)}),p=()=>c.a.createElement("span",{className:l()(d.a.toggle,d.a.sun)});t.a=function(e){const{isClient:t}=Object(s.a)();return c.a.createElement(i.a,Object(a.a)({disabled:!t,icons:{checked:c.a.createElement(f,null),unchecked:c.a.createElement(p,null)}},e))}},353:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(342);const o="",i="dark";var s=()=>{const{siteConfig:{themeConfig:{disableDarkMode:e}}={}}=Object(c.a)(),[t,n]=Object(a.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):o),r=Object(a.useCallback)(e=>{try{localStorage.setItem("theme",e)}catch(t){console.error(t)}},[n]),s=Object(a.useCallback)(()=>{n(o),r(o)},[]),u=Object(a.useCallback)(()=>{n(i),r(i)},[]);return Object(a.useEffect)(()=>{document.documentElement.setAttribute("data-theme",t)},[t]),Object(a.useEffect)(()=>{if(!e)try{const e=localStorage.getItem("theme");null!==e&&n(e)}catch(t){console.error(t)}},[n]),{isDarkTheme:t===i,setLightTheme:s,setDarkTheme:u}},u=n(371);t.a=function(e){const{isDarkTheme:t,setLightTheme:n,setDarkTheme:a}=s();return r.a.createElement(u.a.Provider,{value:{isDarkTheme:t,setLightTheme:n,setDarkTheme:a}},e.children)}},354:function(e,t,n){"use strict";var a=n(0),r=n(366);var c=function(e){const[t,n]=Object(a.useState)(e);return Object(a.useEffect)(()=>{const e=()=>n(window.location.hash);return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),[t,n]};t.a=e=>{const[t,n]=Object(a.useState)(!0),[o,i]=Object(a.useState)(!1),[s,u]=Object(a.useState)(0),[l,h]=Object(a.useState)(0),d=Object(a.useCallback)(e=>{null!==e&&h(e.getBoundingClientRect().height)},[]),f=Object(r.c)(),[p,b]=c(f.hash),v=()=>{const e=window.pageYOffset||document.documentElement.scrollTop;if(e<l)return;if(o)return i(!1),n(!1),void u(e);const t=document.documentElement.scrollHeight-l,a=window.innerHeight;s&&e>s?n(!1):e+a<t&&n(!0),u(e)};return Object(a.useEffect)(()=>{if(e)return window.addEventListener("scroll",v),()=>{window.removeEventListener("scroll",v)}},[s,l]),Object(a.useEffect)(()=>{e&&(n(!0),b(f.hash))},[f]),Object(a.useEffect)(()=>{e&&p&&i(!0)},[p]),{navbarRef:d,isNavbarVisible:t}}},366:function(e,t,n){"use strict";var a=n(17);n.d(t,"a",(function(){return a.c})),n.d(t,"b",(function(){return a.d})),n.d(t,"c",(function(){return a.e}))},367:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var a="SLDSIcon",r="SLDSIconSettings"},371:function(e,t,n){"use strict";var a=n(0);const r=n.n(a).a.createContext({isDarkTheme:!1,setLightTheme:()=>{},setDarkTheme:()=>{}});t.a=r},389:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(0),o=d(c),i=d(n(344)),s=d(n(8)),u=d(n(390)),l=d(n(391)),h=n(392);function d(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:n})}},{key:"handleTouchStart",value:function(e){this.startX=(0,h.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,h.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,h.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=(t.icons,function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["className","icons"])),c=(0,i.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",a({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=f,f.displayName="Toggle",f.defaultProps={icons:{checked:o.default.createElement(u.default,null),unchecked:o.default.createElement(l.default,null)}},f.propTypes={checked:s.default.bool,disabled:s.default.bool,defaultChecked:s.default.bool,onChange:s.default.func,onFocus:s.default.func,onBlur:s.default.func,className:s.default.string,name:s.default.string,value:s.default.string,id:s.default.string,"aria-labelledby":s.default.string,"aria-label":s.default.string,icons:s.default.oneOfType([s.default.bool,s.default.shape({checked:s.default.node,unchecked:s.default.node})])}},390:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),c=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},391:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),c=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},392:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var a=e.pageX;if(void 0!==a)return{x:a,y:e.pageY}}return{x:0,y:0}}},447:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(8),o=n.n(c),i=n(367);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function l(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,h(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(a=[{key:"getChildContext",value:function(){return{iconPath:this.props.iconPath,onRequestIconPath:this.props.onRequestIconPath,actionSprite:this.props.actionSprite,customSprite:this.props.customSprite,doctypeSprite:this.props.doctypeSprite,standardSprite:this.props.standardSprite,utilitySprite:this.props.utilitySprite}}},{key:"render",value:function(){return this.props.children}}])&&u(n.prototype,a),r&&u(n,r),t}(r.a.Component);f.displayName=i.b,f.childContextTypes={iconPath:o.a.string,onRequestIconPath:o.a.func,actionSprite:o.a.string,customSprite:o.a.string,doctypeSprite:o.a.string,standardSprite:o.a.string,utilitySprite:o.a.string},f.propTypes={iconPath:o.a.string,onRequestIconPath:o.a.func,actionSprite:o.a.string,customSprite:o.a.string,doctypeSprite:o.a.string,standardSprite:o.a.string,utilitySprite:o.a.string},t.a=f}}]);