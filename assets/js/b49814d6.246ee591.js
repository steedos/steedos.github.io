"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[934],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,k=c["".concat(l,".").concat(d)]||c[d]||u[d]||i;return n?a.createElement(k,s(s({ref:t},m),{},{components:n})):a.createElement(k,s({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78633:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={},s="Expressions",o={unversionedId:"developer/micro-page/amis/expression",id:"developer/micro-page/amis/expression",title:"Expressions",description:"In AMIS, expressions are a powerful tool that allows users to dynamically handle data in various scenarios. Expressions can be used for template variable retrieval, API endpoint parameter retrieval, data mapping, conditions for component visibility, form default values, and more. AMIS supports two syntaxes for expressions: pure JavaScript expressions and expressions wrapped in ${}.",source:"@site/docs/developer/micro-page/amis/5_expression.md",sourceDirName:"developer/micro-page/amis",slug:"/developer/micro-page/amis/expression",permalink:"/developer/micro-page/amis/expression",draft:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/docs/developer/micro-page/amis/5_expression.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"developer",previous:{title:"Data Mapping",permalink:"/developer/micro-page/amis/data_mapping"},next:{title:"Linkage Mechanism",permalink:"/developer/micro-page/amis/linkage"}},l={},p=[{value:"Expression Syntax",id:"expression-syntax",level:2},{value:"Variables and Property Access",id:"variables-and-property-access",level:3},{value:"Basic Data Types",id:"basic-data-types",level:3},{value:"Expression Operations",id:"expression-operations",level:3},{value:"Functions and Arrow Functions",id:"functions-and-arrow-functions",level:3},{value:"Parentheses and Operator Precedence",id:"parentheses-and-operator-precedence",level:3},{value:"Special Variable Names",id:"special-variable-names",level:3},{value:"Example: Text Processing",id:"example-text-processing",level:3}],m={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"expressions"},"Expressions"),(0,r.kt)("p",null,"In AMIS, expressions are a powerful tool that allows users to dynamically handle data in various scenarios. Expressions can be used for template variable retrieval, API endpoint parameter retrieval, data mapping, conditions for component visibility, form default values, and more. AMIS supports two syntaxes for expressions: pure JavaScript expressions and expressions wrapped in ${}."),(0,r.kt)("h2",{id:"expression-syntax"},"Expression Syntax"),(0,r.kt)("p",null,"Expressions are at the core of dynamic data handling, consisting of three basic parts: the start character ",(0,r.kt)("strong",{parentName:"p"},"${"),", the expression body, and the end character ",(0,r.kt)("strong",{parentName:"p"},"}"),". The expression body follows a set of syntax rules, including:"),(0,r.kt)("h3",{id:"variables-and-property-access"},"Variables and Property Access"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Single variable: ",(0,r.kt)("strong",{parentName:"li"},"xxx variable")),(0,r.kt)("li",{parentName:"ul"},"Object property access: ",(0,r.kt)("strong",{parentName:"li"},"xxx variable.xxx property")," or ",(0,r.kt)("strong",{parentName:"li"},"xxx variable","[xxx property]"))),(0,r.kt)("h3",{id:"basic-data-types"},"Basic Data Types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Boolean values: ",(0,r.kt)("strong",{parentName:"li"},"true")," or ",(0,r.kt)("strong",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"Null value: ",(0,r.kt)("strong",{parentName:"li"},"null")),(0,r.kt)("li",{parentName:"ul"},"Undefined: ",(0,r.kt)("strong",{parentName:"li"},"undefined")),(0,r.kt)("li",{parentName:"ul"},"Numbers: integers ",(0,r.kt)("strong",{parentName:"li"},"123")," or floating-point numbers ",(0,r.kt)("strong",{parentName:"li"},"123.23")),(0,r.kt)("li",{parentName:"ul"},"Strings: double quotes ",(0,r.kt)("strong",{parentName:"li"},'"string"')," or single quotes ",(0,r.kt)("strong",{parentName:"li"},"'string'")),(0,r.kt)("li",{parentName:"ul"},"Template literals: ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"my name is ${name}"))),(0,r.kt)("li",{parentName:"ul"},"Arrays: ",(0,r.kt)("strong",{parentName:"li"},"[1, 2, 3]")),(0,r.kt)("li",{parentName:"ul"},"Objects: ",(0,r.kt)("strong",{parentName:"li"},"{a: 1, b: 2}")," or combined usage like ",(0,r.kt)("strong",{parentName:"li"},"{a: 1, b: ","[1, 2, 3]",", ","[key]",": yyy variable}"))),(0,r.kt)("h3",{id:"expression-operations"},"Expression Operations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ternary expressions: ",(0,r.kt)("strong",{parentName:"li"},"xx variable == 1 ? 2 : 3")),(0,r.kt)("li",{parentName:"ul"},"Binary expressions: logical operations (",(0,r.kt)("strong",{parentName:"li"},"&&"),", ",(0,r.kt)("strong",{parentName:"li"},"||"),"), comparison operations (",(0,r.kt)("strong",{parentName:"li"},"=="),", ",(0,r.kt)("strong",{parentName:"li"},"!="),", ",(0,r.kt)("strong",{parentName:"li"},"==="),", ",(0,r.kt)("strong",{parentName:"li"},"!=="),", ",(0,r.kt)("strong",{parentName:"li"},"<"),", ",(0,r.kt)("strong",{parentName:"li"},"<="),", ",(0,r.kt)("strong",{parentName:"li"},">"),", ",(0,r.kt)("strong",{parentName:"li"},">="),"), arithmetic operations (",(0,r.kt)("strong",{parentName:"li"},"+"),", ",(0,r.kt)("strong",{parentName:"li"},"-"),", ",(0,r.kt)("strong",{parentName:"li"},"*"),", ",(0,r.kt)("strong",{parentName:"li"},"/"),", ",(0,r.kt)("strong",{parentName:"li"},"**"),"), bit operations (",(0,r.kt)("strong",{parentName:"li"},"|"),", ",(0,r.kt)("strong",{parentName:"li"},"^"),", ",(0,r.kt)("strong",{parentName:"li"},"&"),", ",(0,r.kt)("strong",{parentName:"li"},"<<"),", ",(0,r.kt)("strong",{parentName:"li"},">>"),", ",(0,r.kt)("strong",{parentName:"li"},">>>"),")"),(0,r.kt)("li",{parentName:"ul"},"Unary expressions: logical NOT (",(0,r.kt)("strong",{parentName:"li"},"!xx variable"),"), bitwise NOT (",(0,r.kt)("strong",{parentName:"li"},"~xx variable"),"), unary plus and minus (",(0,r.kt)("strong",{parentName:"li"},"+xx variable"),", ",(0,r.kt)("strong",{parentName:"li"},"-xx variable"),")")),(0,r.kt)("h3",{id:"functions-and-arrow-functions"},"Functions and Arrow Functions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Function calls: ",(0,r.kt)("strong",{parentName:"li"},"SUM(1, 2, 3)")),(0,r.kt)("li",{parentName:"ul"},"Arrow functions: ",(0,r.kt)("strong",{parentName:"li"},"() => abc")," (only supports a single expression) Note that this arrow function only supports a single expression and does not support multiple statements. It is mainly configured for use with other functions, such as: ARRAY_MAP(arr, item => item.abc)")),(0,r.kt)("h3",{id:"parentheses-and-operator-precedence"},"Parentheses and Operator Precedence"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Parentheses: ",(0,r.kt)("strong",{parentName:"li"},"(10 - 2) * 3")," are used to modify operator precedence")),(0,r.kt)("h3",{id:"special-variable-names"},"Special Variable Names"),(0,r.kt)("p",null,"Default variable names do not support special characters, for example, ${ xxx.yyy } means to take the yyy property of the xxx variable. What if the variable name is xxx.yyy? In this case, you need to use escape syntax, like: ${ xxx",".","yyy }"),(0,r.kt)("p",null,"AMIS also integrates many built-in functions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Logical functions: IF, AND, OR, XOR, IFS"),(0,r.kt)("li",{parentName:"ul"},"Mathematical functions: ABS, MAX, MIN, SUM, INT, MOD, PI, ROUND, FLOOR, CEIL, SQRT, AVG, DEVSQ, AVEDEV, HARMEAN, LARGE, UPPER MONEY, RAND, LAST"),(0,r.kt)("li",{parentName:"ul"},"Text functions: LEFT, RIGHT, LEN, LENGTH, ISEMPTY, CONCATENATE, CHAR, LOWER, UPPER, UPPERFIRST, PADSTART, CAPITALIZE, ESCAPE, TRUNCATE, BEFORELAST, SPLIT, TRIM, STRIPTAG, LINEBREAK, STARTSWITH, ENDSWITH, CONTAINS, REPLACE, SEARCH, MID, BASENAME"),(0,r.kt)("li",{parentName:"ul"},"Date functions: DATE, TIMESTAMP, TODAY, NOW, WEEKDAY, WEEK, DATETOSTR, DATERANGESPLIT")),(0,r.kt)("p",null,"And many more functions can be found ",(0,r.kt)("a",{parentName:"p",href:"https://aisuda.bce.baidu.com/amis/zh-CN/docs/concepts/expression#%E6%95%B0%E7%BB%84"},"here")),(0,r.kt)("p",null,"These functions can be nested, with parameters supporting both constants and variables, greatly enhancing the functionality and flexibility of expressions."),(0,r.kt)("h3",{id:"example-text-processing"},"Example: Text Processing"),(0,r.kt)("p",null,"Suppose we have a variable ",(0,r.kt)("inlineCode",{parentName:"p"},"userName")," with the value ",(0,r.kt)("inlineCode",{parentName:"p"},'"john_doe"'),", and we want to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Convert the text to uppercase."),(0,r.kt)("li",{parentName:"ol"},"Replace ",(0,r.kt)("inlineCode",{parentName:"li"},'"_"')," with ",(0,r.kt)("inlineCode",{parentName:"li"},'" "'),"."),(0,r.kt)("li",{parentName:"ol"},"Append the result to ",(0,r.kt)("inlineCode",{parentName:"li"},'"Welcome, "'),".")),(0,r.kt)("p",null,"Using AMIS expressions, we could write: ",(0,r.kt)("inlineCode",{parentName:"p"},'${"Welcome, " + REPLACE(UPPER(userName), "_", " ")}'),"\nConfigured as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "page",\n  "data": {\n    "userName": "john_doe"\n  },\n  "body": [\n    "${\\"Welcome,\\" + REPLACE(UPPER(userName), \\"_\\", \\".\\")}"\n  ]\n}\n')),(0,r.kt)("p",null,"This expression first uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"UPPER")," function to convert ",(0,r.kt)("inlineCode",{parentName:"p"},"userName")," to uppercase, then uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"REPLACE")," function to replace ",(0,r.kt)("inlineCode",{parentName:"p"},'"_"')," with ",(0,r.kt)("inlineCode",{parentName:"p"},'" "'),". Finally, it appends the processed text to ",(0,r.kt)("inlineCode",{parentName:"p"},'"Welcome, "'),". After executing the above expression, the final result will be:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Welcome, JOHN DOE")),(0,r.kt)("p",null,"This example demonstrates how to use AMIS expressions and functions for simple text processing."))}u.isMDXComponent=!0}}]);