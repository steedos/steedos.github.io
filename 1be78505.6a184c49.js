(window.webpackJsonp=window.webpackJsonp||[]).push([[25,275],{404:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),l=a.n(n),r=a(407),c=a(408),s=a(62),i=a(413),o=a(1),m=a(409),u=a.n(m),d=a(411),b=a(420),E=a(410),h=a(417),g=a(155),p=a.n(g);const v=24;function f({item:e,onItemClick:t,collapsible:a}){const{items:r,href:c,label:s,type:i}=e,[m,d]=Object(n.useState)(e.collapsed),[b,g]=Object(n.useState)(null);e.collapsed!==b&&(g(e.collapsed),d(e.collapsed));const p=Object(n.useCallback)(e=>{e.preventDefault(),d(e=>!e)});switch(i){case"category":return r.length>0&&l.a.createElement("li",{className:u()("menu__list-item",{"menu__list-item--collapsed":m}),key:s},l.a.createElement("a",{className:u()("menu__link",{"menu__link--sublist":a,"menu__link--active":a&&!e.collapsed}),href:"#!",onClick:a?p:void 0},s),l.a.createElement("ul",{className:"menu__list"},r.map(e=>l.a.createElement(f,{key:e.label,item:e,onItemClick:t,collapsible:a}))));case"link":default:return l.a.createElement("li",{className:"menu__list-item",key:s},l.a.createElement(E.a,Object(o.a)({className:"menu__link",to:c},Object(h.a)(c)?{activeClassName:"menu__link--active",exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"}),s))}}var k=function(e){const[t,a]=Object(n.useState)(!1),{siteConfig:{themeConfig:{navbar:{title:r,logo:s={}}={}}}={}}=Object(c.a)(),i=Object(d.a)(s.src),{docsSidebars:o,path:m,sidebar:E,sidebarCollapsible:h}=e;if(Object(b.a)(t),!E)return null;const g=o[E];if(!g)throw new Error(`Cannot find the sidebar "${E}" in the sidebar config!`);return h&&g.forEach(e=>(function e(t,a){const{items:n,href:l,type:r}=t;switch(r){case"category":{const l=n.map(t=>e(t,a)).filter(e=>e).length>0;return t.collapsed=!l,l}case"link":default:return l===a}})(e,m)),l.a.createElement("div",{className:p.a.sidebar},l.a.createElement("div",{className:p.a.sidebarLogo},null!=s&&l.a.createElement("img",{src:i,alt:s.alt}),null!=r&&l.a.createElement("strong",null,r)),l.a.createElement("div",{className:u()("menu","menu--responsive",p.a.menu,{"menu--show":t})},l.a.createElement("div",{class:" menu__button"},l.a.createElement("span",null,E),l.a.createElement("button",{"aria-label":t?"Close Menu":"Open Menu",className:"button button--link button--sm",type:"button",onClick:()=>{a(!t)}},t?l.a.createElement("svg",{className:"{styles.sidebarMenuIcon}",xmlns:"http://www.w3.org/2000/svg",height:v,width:v,viewBox:"0 0 24 24",role:"img",focusable:"false"},l.a.createElement("title",null,"Close"),l.a.createElement("path",{d:"M14.3 11.7l6-6c.3-.3.3-.7 0-1l-.9-1c-.3-.2-.7-.2-1 0l-6 6.1c-.2.2-.5.2-.7 0l-6-6.1c-.3-.3-.7-.3-1 0l-1 1c-.2.2-.2.7 0 .9l6.1 6.1c.2.2.2.4 0 .6l-6.1 6.1c-.3.3-.3.7 0 1l1 1c.2.2.7.2.9 0l6.1-6.1c.2-.2.4-.2.6 0l6.1 6.1c.2.2.7.2.9 0l1-1c.3-.3.3-.7 0-1l-6-6c-.2-.2-.2-.5 0-.7z"})):l.a.createElement("svg",{className:"{styles.sidebarMenuIcon}",xmlns:"http://www.w3.org/2000/svg",height:v,width:v,viewBox:"0 0 24 24",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{d:"M22 8.2l-9.5 9.6c-.3.2-.7.2-1 0L2 8.2c-.2-.3-.2-.7 0-1l1-1c.3-.3.8-.3 1.1 0l7.4 7.5c.3.3.7.3 1 0l7.4-7.5c.3-.2.8-.2 1.1 0l1 1c.2.3.2.7 0 1z"})))),l.a.createElement("ul",{className:"menu__list"},g.map(e=>l.a.createElement(f,{key:e.label,item:e,onItemClick:()=>{a(!1)},collapsible:h})))))},_=a(438),N=a(444),j=a(412),y=a(159),O=a.n(y);t.default=function(e){const{route:t,docsMetadata:a,location:n}=e,o=t.routes.find(e=>Object(j.b)(n.pathname,e))||{},{permalinkToSidebar:m,docsSidebars:u,version:d}=a,b=m[o.path],{siteConfig:{themeConfig:E={}}={},isClient:h}=Object(c.a)(),{sidebarCollapsible:g=!0}=E;return 0===Object.keys(o).length?l.a.createElement(N.default,e):l.a.createElement(i.a,{version:d,key:h},l.a.createElement("div",{className:O.a.docPage},b&&l.a.createElement("div",{className:O.a.docSidebarContainer},l.a.createElement(k,{docsSidebars:u,path:o.path,sidebar:b,sidebarCollapsible:g})),l.a.createElement("main",{className:O.a.docMainContainer},l.a.createElement(r.a,{components:_.a},Object(s.a)(t.routes)))))}},413:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(419),c=a(408),s=a(411),i=a(426),o=a(1),m=a(410),u=a(417),d=a(422),b=a(423),E=a(409),h=a.n(E),g=a(414),p=a(427),v=a(420),f=a(127),k=a.n(f),_=a(412);function N({activeBasePath:e,to:t,href:a,label:n,position:r,...c}){const i=Object(s.a)(t),u=Object(s.a)(e);return l.a.createElement(m.a,Object(o.a)({className:"navbar__item navbar__link"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{activeClassName:"navbar__link--active",to:i,...e?{isActive:(e,t)=>t.pathname.startsWith(u)}:null},c),n)}var j=function(e){const{siteConfig:t={},isClient:a}=Object(c.a)(),{baseUrl:r,themeConfig:i={}}=t,{navbar:E={},disableDarkMode:f=!1}=i;let{title:j,logo:y={},links:O=[],hideOnScroll:w=!1}=E;const[C,S]=Object(n.useState)(!1),[x,M]=Object(n.useState)(!1),{isDarkTheme:T,setLightTheme:B,setDarkTheme:L}=Object(g.a)(),{navbarRef:D,isNavbarVisible:I}=Object(p.a)(w);Object(v.a)(C);const P=Object(n.useCallback)(()=>{S(!0)},[S]),F=Object(n.useCallback)(()=>{S(!1)},[S]),W=Object(n.useCallback)(e=>e.target.checked?L():B(),[B,L]);let R=y.href||r,q={};y.target?q={target:y.target}:Object(u.a)(R)||(q={rel:"noopener noreferrer",target:"_blank"});const A=y.srcDark&&T?y.srcDark:y.src,H=Object(s.a)(A),U=Object(_.d)();return U&&U.pathname.indexOf("/us")>=0&&(O=E.links_us,j="Steedos",R="/us/"),l.a.createElement("nav",{ref:D,className:h()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":C,[k.a.navbarHideable]:w,[k.a.navbarHidden]:!I})},l.a.createElement("div",{className:"navbar__inner"},l.a.createElement("div",{className:"navbar__items"},l.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:P,onKeyDown:P},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement(m.a,Object(o.a)({className:"navbar__brand",to:R},q),null!=y&&l.a.createElement("img",{key:a,className:"navbar__logo",src:H,alt:y.alt}),null!=j&&l.a.createElement("strong",{className:h()("navbar__title",{[k.a.hideLogoText]:x})},j)),O.filter(e=>"right"!==e.position).map((e,t)=>{return void 0!==e.items&&e.items.length>0?l.a.createElement("div",{class:"dropdown dropdown--hoverable"},l.a.createElement(N,Object(o.a)({},e,{key:t})),l.a.createElement("ul",{class:"dropdown__menu"},e.items.map((e,a)=>l.a.createElement("li",null,l.a.createElement(N,Object(o.a)({},e,{key:t+"-"+a})))))):l.a.createElement(N,Object(o.a)({},e,{key:t}))})),l.a.createElement("div",{className:"navbar__items navbar__items--right"},O.filter(e=>"right"===e.position).map((e,t)=>l.a.createElement(N,Object(o.a)({},e,{key:t}))),!f&&l.a.createElement(b.a,{className:k.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:T,onChange:W}),!C&&l.a.createElement(d.a,{handleSearchBarToggle:M,isSearchBarExpanded:x}))),l.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:F}),l.a.createElement("div",{className:"navbar-sidebar"},l.a.createElement("div",{className:"navbar-sidebar__brand"},l.a.createElement(m.a,Object(o.a)({className:"navbar__brand",onClick:F,to:R},q),null!=y&&l.a.createElement("img",{key:a,className:"navbar__logo",src:H,alt:y.alt}),null!=j&&l.a.createElement("strong",{className:"navbar__title"},j)),!f&&C&&l.a.createElement(b.a,{"aria-label":"Dark mode toggle in sidebar",checked:T,onChange:W}),l.a.createElement(d.a,{handleSearchBarToggle:M,isSearchBarExpanded:x})),l.a.createElement("div",{className:"navbar-sidebar__items"},l.a.createElement("div",{className:"menu"},l.a.createElement("ul",{className:"menu__list"},O.map((e,t)=>l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"menu__list-item",key:t},l.a.createElement(N,Object(o.a)({className:"menu__link"},e,{onClick:F}))),void 0!==e.items&&e.items.length>0&&e.items.map((e,a)=>l.a.createElement("li",{className:"menu__list-item",key:t+"-"+a},l.a.createElement(N,Object(o.a)({className:"menu__link",style:{paddingLeft:"3rem"}},e,{onClick:F})))))))))))},y=a(9),O=a(128),w=a.n(O);function C(e){var t=e.to,a=e.href,n=e.label,r=Object(y.a)(e,["to","href","label"]),c=Object(s.a)(t);return l.a.createElement(m.a,Object(o.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:c},r),n)}var S=function(e){var t=e.url,a=e.alt;return l.a.createElement("img",{className:"footer__logo",alt:a,src:t})};var x=function(){var e=Object(c.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},r=n.copyright,i=n.links,o=void 0===i?[]:i,m=n.logo,u=void 0===m?{}:m,d=Object(s.a)(u.src);return a?l.a.createElement("footer",{className:h()("footer",{"footer--dark":"dark"===a.style})},l.a.createElement("div",{className:"container"},o&&o.length>0&&l.a.createElement("div",{className:"row footer__links"},o.map((function(e,t){return l.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?l.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e.html}}):l.a.createElement("li",{key:e.href||e.to,className:"footer__item"},l.a.createElement(C,e))}))):null)}))),(u||r)&&l.a.createElement("div",{className:"text--center"},u&&u.src&&l.a.createElement("div",{className:"margin-bottom--sm"},u.href?l.a.createElement("a",{href:u.href,target:"_blank",rel:"noopener noreferrer",className:w.a.footerLogoLink},l.a.createElement(S,{alt:u.alt,url:d})):l.a.createElement(S,{alt:u.alt,url:d})),r))):null},M=a(523);a(129);t.a=function(e){var t=Object(c.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,o=a.title,m=a.themeConfig.image,u=a.url,d=(e.route,e.children),b=e.title,E=e.noFooter,h=e.description,g=e.image,p=e.keywords,v=e.permalink,f=e.version,k=b?b+" | "+o:o,_=g||m,N=u+Object(s.a)(_),y=Object(s.a)(n);return l.a.createElement(M.a,{iconPath:"/assets/icons"},l.a.createElement(i.a,null,l.a.createElement(r.a,null,l.a.createElement("html",{lang:"en"}),l.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),l.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, viewport-fit=cover"}),k&&l.a.createElement("title",null,k),k&&l.a.createElement("meta",{property:"og:title",content:k}),n&&l.a.createElement("link",{rel:"shortcut icon",href:y}),h&&l.a.createElement("meta",{name:"description",content:h}),h&&l.a.createElement("meta",{property:"og:description",content:h}),f&&l.a.createElement("meta",{name:"docsearch:version",content:f}),p&&p.length&&l.a.createElement("meta",{name:"keywords",content:p.join(",")}),_&&l.a.createElement("meta",{property:"og:image",content:N}),_&&l.a.createElement("meta",{property:"twitter:image",content:N}),_&&l.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+k}),v&&l.a.createElement("meta",{property:"og:url",content:u+v}),l.a.createElement("meta",{name:"twitter:card",content:"summary"}),l.a.createElement("script",{type:"text/javascript",src:"http://tajs.qq.com/stats?sId=66541925",charset:"UTF-8"}),l.a.createElement("script",{src:"https://hm.baidu.com/hm.js?8e30e1c152eed21154e2090d348e7dec"})),l.a.createElement(j,null),l.a.createElement("div",{className:"main-wrapper"},d),!E&&l.a.createElement(x,null)))}},429:function(e,t,a){"use strict";var n=a(1),l=a(0),r=a.n(l),c=a(409),s=a.n(c),i=a(439),o=a(432),m=a.n(o),u=a(430),d=a.n(u),b=a(431),E=a.n(b),h=a(408),g=a(414),p=a(130),v=a.n(p);const f=/{([\d,-]+)}/,k=/title=".*"/;t.a=({children:e,className:t,metastring:a})=>{const{siteConfig:{themeConfig:{prism:c={}}}}=Object(h.a)(),[o,u]=Object(l.useState)(!1),[b,p]=Object(l.useState)(!1);Object(l.useEffect)(()=>{p(!0)},[]);const _=Object(l.useRef)(null),N=Object(l.useRef)(null);let j=[],y="";const{isDarkTheme:O}=Object(g.a)(),w=c.theme||m.a,C=c.darkTheme||w,S=O?C:w;if(a&&f.test(a)){const e=a.match(f)[1];j=E.a.parse(e).filter(e=>e>0)}a&&k.test(a)&&(y=a.match(k)[0].split("title=")[1].replace(/"+/g,"")),Object(l.useEffect)(()=>{let e;return N.current&&(e=new d.a(N.current,{target:()=>_.current})),()=>{e&&e.destroy()}},[N.current,_.current]);let x=t&&t.replace(/language-/,"");!x&&c.defaultLanguage&&(x=c.defaultLanguage);const M=()=>{window.getSelection().empty(),u(!0),setTimeout(()=>u(!1),2e3)};return r.a.createElement(i.a,Object(n.a)({},i.b,{key:b,theme:S,code:e.replace(/\n$/,""),language:x}),({className:e,style:t,tokens:a,getLineProps:l,getTokenProps:c})=>r.a.createElement(r.a.Fragment,null,y&&r.a.createElement("div",{style:t,className:v.a.codeBlockTitle},y),r.a.createElement("div",{className:v.a.codeBlockContent},r.a.createElement("button",{ref:N,type:"button","aria-label":"Copy code to clipboard",className:s()(v.a.copyButton,{[v.a.copyButtonWithTitle]:y}),onClick:M},o?"Copied":"Copy"),r.a.createElement("pre",{className:s()(e,v.a.codeBlock,{[v.a.codeBlockWithTitle]:y})},r.a.createElement("div",{ref:_,className:v.a.codeBlockLines,style:t},a.map((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const a=l({line:e,key:t});return j.includes(t+1)&&(a.className=`${a.className} docusaurus-highlight-code-line`),r.a.createElement("div",Object(n.a)({key:t},a),e.map((e,t)=>r.a.createElement("span",Object(n.a)({key:t},c({token:e,key:t})))))}))))))}},444:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(413);t.default=function(){return l.a.createElement(r.a,{title:"Page Not Found"},l.a.createElement("div",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},"Page Not Found"),l.a.createElement("p",null,"We could not find what you were looking for."),l.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);