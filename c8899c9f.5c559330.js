(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{397:function(e,a,n){"use strict";n.r(a);var t=n(1),r=n(9),o=n(0),i=n.n(o),s=n(402),l=n(11),d=n.n(l),c=n(404),u=n.n(c),p=n(410);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,a){for(var n=0;n<a.length;n++){var t=a[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function h(e,a){return!a||"object"!==f(a)&&"function"!=typeof a?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):a}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,a){return(b=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function g(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}var _="slds-media",v="slds-media__figure",N="slds-media__body",O=function(e){function a(){return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),h(this,y(a).apply(this,arguments))}var n,t,r;return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&b(e,a)}(a,e),n=a,(t=[{key:"render",value:function(){return i.a.createElement("div",{className:u()(_,{"slds-media_center":this.props.verticalCenter,"slds-has-flexi-truncate":this.props.canTruncate},this.props.className)},this.props.figure?i.a.createElement("div",{className:v},this.props.figure," "):null,i.a.createElement("div",{className:N},this.props.body))}}])&&m(n.prototype,t),r&&m(n,r),a}(i.a.Component);g(O,"displayName",p.h),g(O,"propTypes",{canTruncate:d.a.bool,className:d.a.oneOfType([d.a.array,d.a.object,d.a.string]),body:d.a.node,figure:d.a.node,verticalCenter:d.a.bool});var j=O;function T(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}var E=function(e,a){var n=i.a.cloneElement(e,{id:e.props.id||a});return i.a.createElement("div",{className:"slds-input-has-icon slds-input-has-icon_left slds-size_1-of-3"},n)};E.displayName="renderFilter";var w=function(e){var a=null;("string"==typeof e.heading||e.heading instanceof String)&&(a=e.heading);var n,t=i.a.createElement("h2",{id:e.headingId,className:"slds-text-heading_small slds-truncate",title:a},e.heading);n=e.header?i.a.cloneElement(e.header,function(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(a){T(e,a,n[a])}))}return e}({figure:e.icon,body:t,verticalCenter:!0,canTruncate:!0},e.header.props)):i.a.createElement(j,{figure:e.icon,body:t,verticalCenter:!0,canTruncate:!0});var r=!!e.filter||null;return i.a.createElement("div",{className:u()("slds-card__header","slds-grid")},n,e.filter?E(e.filter,e.filterId):null,i.a.createElement("div",{id:e.headerActionsId,className:u()("slds-no-flex",{"slds-size_1-of-3":r,"slds-text-align_right":r})},e.headerActions))};w.displayName=p.e,w.propTypes={filter:d.a.node,filterId:d.a.string,header:d.a.node,headerActions:d.a.node,headerActionsId:d.a.string,heading:d.a.oneOfType([d.a.element,d.a.string]).isRequired,headingId:d.a.string,icon:d.a.node};var C=w,P=function(e){return i.a.createElement("div",{className:u()("slds-card__body",e.className),id:e.id},e.children)};P.displayName=p.b,P.propTypes={children:d.a.node,className:d.a.oneOfType([d.a.array,d.a.object,d.a.string]),id:d.a.string};var S=P,x=function(e){return i.a.createElement("div",{className:"slds-card__footer"},e.children)};x.displayName=p.d,x.propTypes={children:d.a.node};var I=x,A=function(e){return i.a.createElement("div",{className:"slds-p-horizontal_small"},i.a.createElement("div",{className:"slds-text-align_center slds-m-bottom_x-large"},i.a.createElement("h3",{className:"slds-text-heading_small slds-p-top_large slds-p-bottom_large"},e.heading),e.children))};A.displayName=p.c,A.propTypes={children:d.a.node,heading:d.a.string},A.defaultProps={heading:"No Related Items"};var R=A,k="__body",z="__header-actions",L="__heading",D="__filter-input",G=function(e){var a=e.id?e.id+k:null,n=e.id?e.id+D:null,t=e.id?e.id+L:null,r=e.id?e.id+z:null,o=e.empty;return!0===o&&(o=i.a.createElement(R,{id:e.id,heading:e.heading})),i.a.createElement("article",{id:e.id,className:u()("slds-card",e.className),style:e.style},!e.hasNoHeader&&i.a.createElement(C,{header:e.header,headingId:t,icon:e.icon,filter:e.filter,filterId:n,heading:e.heading,headerActions:e.headerActions,headerActionsId:r}),o?i.a.createElement(S,{id:a,className:e.bodyClassName},o):i.a.createElement(S,{id:a,className:e.bodyClassName},e.children),e.footer?i.a.createElement(I,null,e.footer):null)};G.displayName=p.a,G.defaultProps={heading:"Related Items"},G.propTypes={bodyClassName:d.a.oneOfType([d.a.array,d.a.object,d.a.string]),children:d.a.node,className:d.a.oneOfType([d.a.array,d.a.object,d.a.string]),empty:d.a.oneOfType([d.a.bool,d.a.node]),filter:d.a.node,footer:d.a.node,hasNoHeader:d.a.bool,header:d.a.node,heading:d.a.oneOfType([d.a.node,d.a.string]).isRequired,headerActions:d.a.node,icon:d.a.node,id:d.a.string,style:d.a.object};var M=G,q=n(520);n.d(a,"frontMatter",(function(){return F})),n.d(a,"metadata",(function(){return H})),n.d(a,"rightToc",(function(){return J})),n.d(a,"default",(function(){return B}));var F={title:"Login to Steedos"},H={id:"us/login",title:"Login to Steedos",description:"Please select a region. The data in each region is completely independent.",source:"@site/../docs/us/login.md",permalink:"/us/login"},J=[],X={rightToc:J},W="wrapper";function B(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)(W,Object(t.a)({},X,n,{components:a,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Please select a region. The data in each region is completely independent."),Object(s.b)(M,{heading:"Global Region",bodyClassName:"slds-card__body slds-card__body_inner",icon:Object(s.b)(q.a,{category:"standard",name:"channel_programs",size:"small",mdxType:"Icon"}),footer:Object(s.b)("a",{href:"https://us.steedos.com"},"Login to Global Region"),mdxType:"Card"},"Global Server located at AWS."),Object(s.b)(M,{heading:"China Region",bodyClassName:"slds-card__body slds-card__body_inner",icon:Object(s.b)(q.a,{category:"standard",name:"channel_programs",size:"small",mdxType:"Icon"}),footer:Object(s.b)("a",{href:"https://cn.steedos.com"},"Login to China Region"),mdxType:"Card"},"China Server located at Aliyun, Faster access within China."))}B.isMDXComponent=!0}}]);