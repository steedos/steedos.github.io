(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{366:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(381),c=a(392),i=a(372),o=a(374),m=a(375);var s=function(e){var t=e.metadata;return r.a.createElement("nav",{className:"pagination-nav"},r.a.createElement("div",{className:"pagination-nav__item"},t.previous&&r.a.createElement(m.a,{className:"pagination-nav__link",to:t.previous.permalink},r.a.createElement("div",{className:"pagination-nav__link--sublabel"},"Previous"),r.a.createElement("div",{className:"pagination-nav__link--label"},"\xab ",t.previous.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&r.a.createElement(m.a,{className:"pagination-nav__link",to:t.next.permalink},r.a.createElement("div",{className:"pagination-nav__link--sublabel"},"Next"),r.a.createElement("div",{className:"pagination-nav__link--label"},t.next.title," \xbb"))))};var d=function(e,t,a){var r=Object(n.useState)(void 0),l=r[0],c=r[1];Object(n.useEffect)((function(){var n=[],r=[];function i(){var i=function(){var e=0,t=null;for(n=document.getElementsByClassName("anchor");e<n.length&&!t;){var r=n[e],l=r.getBoundingClientRect().top;l>=0&&l<=a&&(t=r),e+=1}return t}();if(i){var o=0,m=!1;for(r=document.getElementsByClassName(e);o<r.length&&!m;){var s=r[o],d=s.href,u=decodeURIComponent(d.substring(d.indexOf("#")+1));i.id===u&&(l&&l.classList.remove(t),s.classList.add(t),c(s),m=!0),o+=1}}}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),function(){document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}))},u=a(376),g=a(373),v=a.n(g),E=a(81),p=a.n(E);function h(e){var t=e.headings;return d("contents__link","contents__link--active",100),r.a.createElement("div",{className:"col col--3"},r.a.createElement("div",{className:p.a.tableOfContents},r.a.createElement(f,{headings:t})))}function f(e){var t=e.headings,a=e.isChild;return t.length?r.a.createElement("ul",{className:a?"":"contents contents__left-border"},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#"+e.id,className:"contents__link",dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(f,{isChild:!0,headings:e.children}))}))):null}t.default=function(e){var t=Object(i.a)().siteConfig,a=void 0===t?{}:t,n=a.url,m=a.title,d=a.customFields,g=e.content,E=g.metadata,f=E.description,b=E.title,_=E.permalink,k=E.editUrl,N=E.lastUpdatedAt,w=E.lastUpdatedBy,y=E.version,x=E.sidebar,C=g.frontMatter,L=C.image,M=C.keywords,O=C.hide_title,I=C.hide_table_of_contents,j="url(/img/banner/default.png)";e.content.frontMatter.background&&(j=e.content.frontMatter.background.startsWith("/")||e.content.frontMatter.background.startsWith("http")?"url("+e.content.frontMatter.background+")":e.content.frontMatter.background),x&&(m=x);var S=Object(u.d)();S&&S.pathname.indexOf("/us")>=0&&(m="Steedos"),d&&d.keywords&&d.keywords.length&&(M=M&&M.length?M.concat(d.keywords):d.keywords);var T=b?b+" | "+m:m,z=n+Object(o.a)(L);Object(c.a)(L)||(z=L);var B="col";return!I&&g.rightToc&&(B="col col--9"),r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement("title",null,T),r.a.createElement("meta",{property:"og:title",content:T}),f&&r.a.createElement("meta",{name:"description",content:f}),f&&r.a.createElement("meta",{property:"og:description",content:f}),M&&M.length&&r.a.createElement("meta",{name:"keywords",content:M.join(",")}),L&&r.a.createElement("meta",{property:"og:image",content:z}),L&&r.a.createElement("meta",{property:"twitter:image",content:z}),L&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+b}),_&&r.a.createElement("meta",{property:"og:url",content:n+_})),r.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n          .main-wrapper {\n            background: "+j+";  \n            background-repeat: no-repeat;\n            background-position: top;\n            background-size: contain;\n          }\n          @media (max-width: 996px) {\n            .main-wrapper {\n              background-size: auto;\n            }\n          }\n        "}}),r.a.createElement("div",{className:v()("padding-vert--lg",p.a.docItemWrapper)},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:v()(B,p.a.docItemCol)},r.a.createElement("div",{className:p.a.docItemContainer},r.a.createElement("article",null,y&&r.a.createElement("div",null,r.a.createElement("span",{className:"badge badge--secondary"},"Version: ",y)),!O&&r.a.createElement("header",null,r.a.createElement("h1",{className:p.a.docTitle},b)),r.a.createElement("div",{className:"markdown"},r.a.createElement(g,null))),(k||N||w)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},k&&r.a.createElement("a",{href:k,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},r.a.createElement("g",null,r.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(N||w)&&r.a.createElement("div",{className:"col text--right"},r.a.createElement("em",null,r.a.createElement("small",null,"Last updated"," ",N&&r.a.createElement(r.a.Fragment,null,"on"," ",r.a.createElement("time",{dateTime:new Date(1e3*N).toISOString(),className:p.a.docLastUpdatedAt},new Date(1e3*N).toLocaleDateString()),w&&" "),w&&r.a.createElement(r.a.Fragment,null,"by ",r.a.createElement("strong",null,w)),!1))))),r.a.createElement("div",{className:"margin-vert--lg"},r.a.createElement(s,{metadata:E})))),!I&&g.rightToc&&r.a.createElement(h,{headings:g.rightToc})))))}}}]);