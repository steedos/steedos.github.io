(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{456:function(t,e,n){"use strict";var r=n(0),o=n(25);e.a=function(){var t=Object(r.useContext)(o.a);if(null===t)throw new Error("Docusaurus context not provided");return t}},459:function(t,e,n){"use strict";function r(t){var e,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=r(t[e]))&&(o&&(o+=" "),o+=n);else for(e in t)t[e]&&(o&&(o+=" "),o+=e);return o}e.a=function(){for(var t,e,n=0,o="";n<arguments.length;)(t=arguments[n++])&&(e=r(t))&&(o&&(o+=" "),o+=e);return o}},460:function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(13),u=n(494),a=n(7),c=Object(r.createContext)({collectLink:function(){}}),s=n(481),f=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};e.a=function(t){var e,n,l,d=t.isNavLink,p=t.to,h=t.href,v=t.activeClassName,y=t["data-noBrokenLinkCheck"],b=f(t,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]),g=Object(s.b)().withBaseUrl,m=Object(r.useContext)(c),T=p||h,w=Object(u.a)(T),O=null==T?void 0:T.replace("pathname://",""),A=void 0!==O?function(t){return t.startsWith("/")}(n=O)?g(n):n:void 0,C=Object(r.useRef)(!1),E=d?i.e:i.c,j=a.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!j&&w&&window.docusaurus.prefetch(A),function(){j&&l&&l.disconnect()}}),[A,j,w]);var S=null!==(e=null==A?void 0:A.startsWith("#"))&&void 0!==e&&e,P=!A||!w||S;return A&&w&&!S&&!y&&m.collectLink(A),P?o.a.createElement("a",Object.assign({href:A},!w&&{target:"_blank",rel:"noopener noreferrer"},b)):o.a.createElement(E,Object.assign({},b,{onMouseEnter:function(){C.current||(window.docusaurus.preload(A),C.current=!0)},innerRef:function(t){var e,n;j&&t&&w&&(e=t,n=function(){window.docusaurus.prefetch(A)},(l=new window.IntersectionObserver((function(t){t.forEach((function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(l.unobserve(e),l.disconnect(),n())}))}))).observe(e))},to:A||""},d&&{activeClassName:v}))}},461:function(t,e,n){"use strict";n.r(e);var r=n(13);n.d(e,"MemoryRouter",(function(){return r.d})),n.d(e,"Prompt",(function(){return r.f})),n.d(e,"Redirect",(function(){return r.g})),n.d(e,"Route",(function(){return r.h})),n.d(e,"Router",(function(){return r.i})),n.d(e,"StaticRouter",(function(){return r.j})),n.d(e,"Switch",(function(){return r.k})),n.d(e,"__RouterContext",(function(){return r.l})),n.d(e,"generatePath",(function(){return r.m})),n.d(e,"matchPath",(function(){return r.n})),n.d(e,"useHistory",(function(){return r.o})),n.d(e,"useLocation",(function(){return r.p})),n.d(e,"useParams",(function(){return r.q})),n.d(e,"useRouteMatch",(function(){return r.r})),n.d(e,"withRouter",(function(){return r.s})),n.d(e,"BrowserRouter",(function(){return r.a})),n.d(e,"HashRouter",(function(){return r.b})),n.d(e,"Link",(function(){return r.c})),n.d(e,"NavLink",(function(){return r.e}))},481:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return u}));var r=n(456),o=n(494);function i(){var t=Object(r.a)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,n=void 0===e?"/":e,i=t.url;return{withBaseUrl:function(t,e){return function(t,e,n,r){var i=void 0===r?{}:r,u=i.forcePrependBaseUrl,a=void 0!==u&&u,c=i.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(a)return e+n;var f=n.startsWith(e)?n:e+n.replace(/^\//,"");return s?t+f:f}(i,n,t,e)}}}function u(t,e){return void 0===e&&(e={}),(0,i().withBaseUrl)(t,e)}},482:function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(546);e.a=function(t){return o.a.createElement(i.Helmet,Object.assign({},t))}},494:function(t,e,n){"use strict";function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function o(t){return void 0!==t&&!r(t)}n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}))},495:function(t,e,n){try{t.exports=n(556)}catch(r){t.exports={}}},546:function(t,e,n){"use strict";(function(t){function r(t){return t&&"object"==typeof t&&"default"in t?t.default:t}Object.defineProperty(e,"__esModule",{value:!0});var o,i,u,a,c=r(n(8)),s=r(n(547)),f=r(n(549)),l=r(n(0)),d=r(n(21)),p="bodyAttributes",h="htmlAttributes",v="titleAttributes",y={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},b=(Object.keys(y).map((function(t){return y[t]})),"charset"),g="cssText",m="href",T="http-equiv",w="innerHTML",O="itemprop",A="name",C="property",E="rel",j="src",S={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",L="defer",k="encodeSpecialCharacters",x="onChangeClientState",D="titleTemplate",I=Object.keys(S).reduce((function(t,e){return t[S[e]]=e,t}),{}),R=[y.NOSCRIPT,y.SCRIPT,y.STYLE],M="data-react-helmet",N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},_=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),H=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},B=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},U=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},q=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Y=function(t){var e=J(t,y.TITLE),n=J(t,D);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=J(t,P);return e||r||void 0},F=function(t){return J(t,x)||function(){}},W=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return H({},t,e)}),{})},K=function(t,e){return e.filter((function(t){return void 0!==t[y.BASE]})).map((function(t){return t[y.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==t.indexOf(i)&&n[i])return e.concat(n)}return e}),[])},z=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&Z("Helmet: "+t+' should be of type "Array". Instead found type "'+N(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var o={};n.filter((function(t){for(var n=void 0,i=Object.keys(t),u=0;u<i.length;u++){var a=i[u],c=a.toLowerCase();-1===e.indexOf(c)||n===E&&"canonical"===t[n].toLowerCase()||c===E&&"stylesheet"===t[c].toLowerCase()||(n=c),-1===e.indexOf(a)||a!==w&&a!==g&&a!==O||(n=a)}if(!n||!t[n])return!1;var s=t[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(o),u=0;u<i.length;u++){var a=i[u],c=d({},r[a],o[a]);r[a]=c}return t}),[]).reverse()},J=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},$=(o=Date.now(),function(t){var e=Date.now();e-o>16?(o=e,t(e)):setTimeout((function(){$(t)}),0)}),G=function(t){return clearTimeout(t)},Q="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:t.requestAnimationFrame||$,X="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||G:t.cancelAnimationFrame||G,Z=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},tt=null,et=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,u=t.metaTags,a=t.noscriptTags,c=t.onChangeClientState,s=t.scriptTags,f=t.styleTags,l=t.title,d=t.titleAttributes;ot(y.BODY,r),ot(y.HTML,o),rt(l,d);var p={baseTag:it(y.BASE,n),linkTags:it(y.LINK,i),metaTags:it(y.META,u),noscriptTags:it(y.NOSCRIPT,a),scriptTags:it(y.SCRIPT,s),styleTags:it(y.STYLE,f)},h={},v={};Object.keys(p).forEach((function(t){var e=p[t],n=e.newTags,r=e.oldTags;n.length&&(h[t]=n),r.length&&(v[t]=p[t].oldTags)})),e&&e(),c(t,h,v)},nt=function(t){return Array.isArray(t)?t.join(""):t},rt=function(t,e){void 0!==t&&document.title!==t&&(document.title=nt(t)),ot(y.TITLE,e)},ot=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(M),o=r?r.split(","):[],i=[].concat(o),u=Object.keys(e),a=0;a<u.length;a++){var c=u[a],s=e[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===o.indexOf(c)&&o.push(c);var f=i.indexOf(c);-1!==f&&i.splice(f,1)}for(var l=i.length-1;l>=0;l--)n.removeAttribute(i[l]);o.length===i.length?n.removeAttribute(M):n.getAttribute(M)!==u.join(",")&&n.setAttribute(M,u.join(","))}},it=function(t,e){var n=document.head||document.querySelector(y.HEAD),r=n.querySelectorAll(t+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],u=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===w)n.innerHTML=e.innerHTML;else if(r===g)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var a=void 0===e[r]?"":e[r];n.setAttribute(r,a)}n.setAttribute(M,"true"),o.some((function(t,e){return u=e,n.isEqualNode(t)}))?o.splice(u,1):i.push(n)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return n.appendChild(t)})),{oldTags:o,newTags:i}},ut=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},at=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[S[n]||n]=t[n],e}),e)},ct=function(t,e,n){switch(t){case y.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})[M]=!0,o=at(n,r),[l.createElement(y.TITLE,o,t)];var t,n,r,o},toString:function(){return function(t,e,n,r){var o=ut(n),i=nt(e);return o?"<"+t+' data-react-helmet="true" '+o+">"+q(i,r)+"</"+t+">":"<"+t+' data-react-helmet="true">'+q(i,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case p:case h:return{toComponent:function(){return at(e)},toString:function(){return ut(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,o=((r={key:n})[M]=!0,r);return Object.keys(e).forEach((function(t){var n=S[t]||t;if(n===w||n===g){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]})),l.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var o=Object.keys(r).filter((function(t){return!(t===w||t===g)})).reduce((function(t,e){var o=void 0===r[e]?e:e+'="'+q(r[e],n)+'"';return t?t+" "+o:o}),""),i=r.innerHTML||r.cssText||"",u=-1===R.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+o+(u?"/>":">"+i+"</"+t+">")}),"")}(t,e,n)}}}},st=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,i=t.linkTags,u=t.metaTags,a=t.noscriptTags,c=t.scriptTags,s=t.styleTags,f=t.title,l=void 0===f?"":f,d=t.titleAttributes;return{base:ct(y.BASE,e,r),bodyAttributes:ct(p,n,r),htmlAttributes:ct(h,o,r),link:ct(y.LINK,i,r),meta:ct(y.META,u,r),noscript:ct(y.NOSCRIPT,a,r),script:ct(y.SCRIPT,c,r),style:ct(y.STYLE,s,r),title:ct(y.TITLE,{title:l,titleAttributes:d},r)}},ft=s((function(t){return{baseTag:K([m],t),bodyAttributes:W(p,t),defer:J(t,L),encode:J(t,k),htmlAttributes:W(h,t),linkTags:z(y.LINK,[E,m],t),metaTags:z(y.META,[A,b,T,C,O],t),noscriptTags:z(y.NOSCRIPT,[w],t),onChangeClientState:F(t),scriptTags:z(y.SCRIPT,[j,w],t),styleTags:z(y.STYLE,[g],t),title:Y(t),titleAttributes:W(v,t)}}),(function(t){tt&&X(tt),t.defer?tt=Q((function(){et(t,(function(){tt=null}))})):(et(t),tt=null)}),st)((function(){return null})),lt=(i=ft,a=u=function(t){function e(){return V(this,e),U(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!f(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case y.SCRIPT:case y.NOSCRIPT:return{innerHTML:e};case y.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,o=t.newChildProps,i=t.nestedChildren;return H({},r,((e={})[n.type]=[].concat(r[n.type]||[],[H({},o,this.mapNestedChildrenToProps(n,i))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,o=t.newProps,i=t.newChildProps,u=t.nestedChildren;switch(r.type){case y.TITLE:return H({},o,((e={})[r.type]=u,e.titleAttributes=H({},i),e));case y.BODY:return H({},o,{bodyAttributes:H({},i)});case y.HTML:return H({},o,{htmlAttributes:H({},i)})}return H({},o,((n={})[r.type]=H({},i),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=H({},e);return Object.keys(t).forEach((function(e){var r;n=H({},n,((r={})[e]=t[e],r))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return l.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,i=o.children,u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[I[n]||n]=t[n],e}),e)}(B(o,["children"]));switch(n.warnOnInvalidChildren(t,i),t.type){case y.LINK:case y.META:case y.NOSCRIPT:case y.SCRIPT:case y.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:u,nestedChildren:i});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:u,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=B(t,["children"]),r=H({},n);return e&&(r=this.mapChildrenToProps(e,r)),l.createElement(i,r)},_(e,null,[{key:"canUseDOM",set:function(t){i.canUseDOM=t}}]),e}(l.Component),u.propTypes={base:c.object,bodyAttributes:c.object,children:c.oneOfType([c.arrayOf(c.node),c.node]),defaultTitle:c.string,defer:c.bool,encodeSpecialCharacters:c.bool,htmlAttributes:c.object,link:c.arrayOf(c.object),meta:c.arrayOf(c.object),noscript:c.arrayOf(c.object),onChangeClientState:c.func,script:c.arrayOf(c.object),style:c.arrayOf(c.object),title:c.string,titleAttributes:c.object,titleTemplate:c.string},u.defaultProps={defer:!0,encodeSpecialCharacters:!0},u.peek=i.peek,u.rewind=function(){var t=i.rewind();return t||(t=st({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},a);lt.renderStatic=lt.rewind,e.Helmet=lt}).call(this,n(30))},547:function(t,e,n){"use strict";function r(t){return t&&"object"==typeof t&&"default"in t?t.default:t}var o=n(0),i=r(o),u=r(n(548));function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,f=[];function l(){s=t(f.map((function(t){return t.props}))),d.canUseDOM?e(s):n&&(s=n(s))}var d=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=s;return s=void 0,f=[],t};var a=o.prototype;return a.shouldComponentUpdate=function(t){return!u(t,this.props)},a.componentWillMount=function(){f.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var t=f.indexOf(this);f.splice(t,1),l()},a.render=function(){return i.createElement(r,this.props)},o}(o.Component);return a(d,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),a(d,"canUseDOM",c),d}}},548:function(t,e){t.exports=function(t,e,n,r){var o=n?n.call(r,t,e):void 0;if(void 0!==o)return!!o;if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;var i=Object.keys(t),u=Object.keys(e);if(i.length!==u.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(e),c=0;c<i.length;c++){var s=i[c];if(!a(s))return!1;var f=t[s],l=e[s];if(!1===(o=n?n.call(r,f,l,s):void 0)||void 0===o&&f!==l)return!1}return!0}},549:function(t,e,n){"use strict";var r=Array.isArray,o=Object.keys,i=Object.prototype.hasOwnProperty,u="undefined"!=typeof Element;function a(t,e){if(t===e)return!0;if(t&&e&&"object"==typeof t&&"object"==typeof e){var n,c,s,f=r(t),l=r(e);if(f&&l){if((c=t.length)!=e.length)return!1;for(n=c;0!=n--;)if(!a(t[n],e[n]))return!1;return!0}if(f!=l)return!1;var d=t instanceof Date,p=e instanceof Date;if(d!=p)return!1;if(d&&p)return t.getTime()==e.getTime();var h=t instanceof RegExp,v=e instanceof RegExp;if(h!=v)return!1;if(h&&v)return t.toString()==e.toString();var y=o(t);if((c=y.length)!==o(e).length)return!1;for(n=c;0!=n--;)if(!i.call(e,y[n]))return!1;if(u&&t instanceof Element&&e instanceof Element)return t===e;for(n=c;0!=n--;)if(!("_owner"===(s=y[n])&&t.$$typeof||a(t[s],e[s])))return!1;return!0}return t!=t&&e!=e}t.exports=function(t,e){try{return a(t,e)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},556:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useDocVersionSuggestions=e.useActiveDocContext=e.useActiveVersion=e.useLatestVersion=e.useVersions=e.useActivePlugin=void 0;var r=n(461),o=n(557),i=n(558),u=function(t){return o.usePluginData("docusaurus-plugin-content-docs",t)};e.useActivePlugin=function(t){void 0===t&&(t={});var e=o.useAllPluginInstancesData("docusaurus-plugin-content-docs"),n=r.useLocation().pathname;return i.getActivePlugin(e,n,t)},e.useVersions=function(t){return u(t).versions},e.useLatestVersion=function(t){var e=u(t);return i.getLatestVersion(e)},e.useActiveVersion=function(t){var e=u(t),n=r.useLocation().pathname;return i.getActiveVersion(e,n)},e.useActiveDocContext=function(t){var e=u(t),n=r.useLocation().pathname;return i.getActiveDocContext(e,n)},e.useDocVersionSuggestions=function(t){var e=u(t),n=r.useLocation().pathname;return i.getDocVersionSuggestions(e,n)}},557:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return o})),n.d(e,"useAllPluginInstancesData",(function(){return i})),n.d(e,"usePluginData",(function(){return u}));var r=n(456);function o(){var t=Object(r.a)().globalData;if(!t)throw new Error("Docusaurus global data not found");return t}function i(t){var e=o()[t];if(!e)throw new Error("Docusaurus plugin global data not found for pluginName="+t);return e}function u(t,e){void 0===e&&(e="default");var n=i(t)[e];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+t+" and pluginId="+e);return n}},558:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getDocVersionSuggestions=e.getActiveDocContext=e.getActiveVersion=e.getLatestVersion=e.getActivePlugin=void 0;var r=n(461);e.getActivePlugin=function(t,e,n){void 0===n&&(n={});var o=Object.entries(t).find((function(t){t[0];var n=t[1];return!!r.matchPath(e,{path:n.path,exact:!1,strict:!1})})),i=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!i&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+e+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(t).map((function(t){return t.path})).join(", "));return i},e.getLatestVersion=function(t){return t.versions.find((function(t){return t.isLast}))},e.getActiveVersion=function(t,n){var o=e.getLatestVersion(t);return[].concat(t.versions.filter((function(t){return t!==o})),[o]).find((function(t){return!!r.matchPath(n,{path:t.path,exact:!1,strict:!1})}))},e.getActiveDocContext=function(t,n){var o,i,u=e.getActiveVersion(t,n),a=null==u?void 0:u.docs.find((function(t){return!!r.matchPath(n,{path:t.path,exact:!0,strict:!1})}));return{activeVersion:u,activeDoc:a,alternateDocVersions:a?(o=a.id,i={},t.versions.forEach((function(t){t.docs.forEach((function(e){e.id===o&&(i[t.name]=e)}))})),i):{}}},e.getDocVersionSuggestions=function(t,n){var r=e.getLatestVersion(t),o=e.getActiveDocContext(t,n),i=o.activeVersion!==r;return{latestDocSuggestion:i?null==o?void 0:o.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:i?r:void 0}}}}]);