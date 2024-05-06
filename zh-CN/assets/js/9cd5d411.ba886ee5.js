"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[82392],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>d});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),g=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=g(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=g(t),y=a,d=u["".concat(s,".").concat(y)]||u[y]||c[y]||l;return t?r.createElement(d,i(i({ref:n},p),{},{components:t})):r.createElement(d,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=y;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var g=2;g<l;g++)i[g]=t[g];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},73499:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var r=t(58168),a=(t(96540),t(15680));const l={},i="TDengine",o={unversionedId:"connector-v2/sink/TDengine",id:"version-2.3.5/connector-v2/sink/TDengine",title:"TDengine",description:"TDengine sink connector",source:"@site/versioned_docs/version-2.3.5/connector-v2/sink/TDengine.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/TDengine",permalink:"/zh-CN/docs/2.3.5/connector-v2/sink/TDengine",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.5/connector-v2/sink/TDengine.md",tags:[],version:"2.3.5",frontMatter:{},sidebar:"docs",previous:{title:"StarRocks",permalink:"/zh-CN/docs/2.3.5/connector-v2/sink/StarRocks"},next:{title:"Tablestore",permalink:"/zh-CN/docs/2.3.5/connector-v2/sink/Tablestore"}},s={},g=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"url string",id:"url-string",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"database string",id:"database-string",level:3},{value:"stable string",id:"stable-string",level:3},{value:"timezone string",id:"timezone-string",level:3},{value:"Example",id:"example",level:2},{value:"sink",id:"sink",level:3}],p={toc:g},u="wrapper";function c(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"tdengine"},"TDengine"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"TDengine sink connector")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Used to write data to TDengine. You need to create stable before running seatunnel task"),(0,a.yg)("h2",{id:"key-features"},"Key features"),(0,a.yg)("ul",{className:"contains-task-list"},(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"exactly-once")),(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"cdc"))),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"url"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"username"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"password"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"database"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"stable"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"timezone"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"UTC")))),(0,a.yg)("h3",{id:"url-string"},"url ","[string]"),(0,a.yg)("p",null,"the url of the TDengine when you select the TDengine"),(0,a.yg)("p",null,"e.g."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"jdbc:TAOS-RS://localhost:6041/\n")),(0,a.yg)("h3",{id:"username-string"},"username ","[string]"),(0,a.yg)("p",null,"the username of the TDengine when you select"),(0,a.yg)("h3",{id:"password-string"},"password ","[string]"),(0,a.yg)("p",null,"the password of the TDengine when you select"),(0,a.yg)("h3",{id:"database-string"},"database ","[string]"),(0,a.yg)("p",null,"the database of the TDengine when you select"),(0,a.yg)("h3",{id:"stable-string"},"stable ","[string]"),(0,a.yg)("p",null,"the stable of the TDengine when you select"),(0,a.yg)("h3",{id:"timezone-string"},"timezone ","[string]"),(0,a.yg)("p",null,"the timeznoe of the TDengine sever, it's important to the ts field"),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("h3",{id:"sink"},"sink"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-hocon"},'sink {\n        TDengine {\n          url : "jdbc:TAOS-RS://localhost:6041/"\n          username : "root"\n          password : "taosdata"\n          database : "power2"\n          stable : "meters2"\n          timezone: UTC\n        }\n}\n')))}c.isMDXComponent=!0}}]);