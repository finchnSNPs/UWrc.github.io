(window.webpackJsonp=window.webpackJsonp||[]).push([[20,5,10,15,16,27,43],{103:function(e,t,n){"use strict";var r=n(0),a=n(20);t.a=function(){var e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},105:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(103),a=n(110);function i(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,l=void 0!==o&&o,c=i.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(l)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},106:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(13),o=n(110),l=n(10),c=Object(r.createContext)({collectLink:function(){}}),s=n(105),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,n,f,d=e.isNavLink,m=e.to,h=e.href,p=e.activeClassName,b=e["data-noBrokenLinkCheck"],w=u(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]),v=Object(s.b)().withBaseUrl,g=Object(r.useContext)(c),y=m||h,E=Object(o.a)(y),x=null==y?void 0:y.replace("pathname://",""),k=void 0!==x?function(e){return e.startsWith("/")}(n=x)?v(n):n:void 0,T=Object(r.useRef)(!1),C=d?i.e:i.c,O=l.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!O&&E&&window.docusaurus.prefetch(k),function(){O&&f&&f.disconnect()}}),[k,O,E]);var j=null!==(t=null==k?void 0:k.startsWith("#"))&&void 0!==t&&t,L=!k||!E||j;return k&&E&&!j&&!b&&g.collectLink(k),L?a.a.createElement("a",Object.assign({href:k},!E&&{target:"_blank",rel:"noopener noreferrer"},w)):a.a.createElement(C,Object.assign({},w,{onMouseEnter:function(){T.current||(window.docusaurus.preload(k),T.current=!0)},innerRef:function(e){var t,n;O&&e&&E&&(t=e,n=function(){window.docusaurus.prefetch(k)},(f=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t),f.disconnect(),n())}))}))).observe(t))},to:k||""},d&&{activeClassName:p}))}},110:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},111:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},123:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(0),a=n.n(r),i=n(105),o=n(109);function l(e){return e?e.map((function(e){return e.link?a.a.createElement("a",{key:e.caption,href:e.link},a.a.createElement(o.a.img,{src:Object(i.a)(e.image),alt:e.caption,whileHover:{scale:1.2},whileTap:{scale:.8}})):a.a.createElement("img",{key:e.caption,src:Object(i.a)(e.image),alt:e.caption})})):[]}},48:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var r=n(0),a=n.n(r),i=n(109),o=n(7),l=n.n(o);function c(e){var t=e.x,n=e.y,r=e.width,a=e.height;return["M"+t+" "+(n+a/4),"L"+(t+r/2)+" "+n,"L"+(t+r)+" "+(n+a/4),"L"+(t+r/2)+" "+(n+a/2),"Z"].join(" ")}function s(e){var t=e.width,n=e.height;return-1*Math.atan(n/4/(t/2))*(180/Math.PI)}function u(e){return a.a.createElement(i.a.g,{whileHover:{scale:1.05},whileTap:{scale:.95},animate:{y:e.yTransition||0},transition:{duration:.2}},a.a.createElement("a",{href:e.linkTo,target:"_blank"},a.a.createElement("path",{fill:e.sideColor,d:(t=e,n=t.x,r=t.y,o=t.width,l=t.height,["M"+n+" "+(r+l/4),"L"+n+" "+(r+3/4*l),"L"+(n+o/2)+" "+(r+l),"L"+(n+o)+" "+(r+3/4*l),"L"+(n+o)+" "+(r+l/4),"L"+(n+o/2)+" "+(r+l/2),"Z"].join(" "))}),a.a.createElement("path",{fill:e.topColor,d:c(e)}),a.a.createElement("text",{x:e.x+.7*e.width-e.y/5,y:e.y+e.height,dominantBaseline:"middle",textAnchor:"middle",transform:"rotate("+s(e)+")",style:{fill:"white",fontWeight:"bold",fontStyle:"italic"}},e.text)));var t,n,r,o,l}u.propTypes={x:l.a.number.isRequired,y:l.a.number.isRequired,width:l.a.number.isRequired,height:l.a.number.isRequired,yTransition:l.a.number,topColor:l.a.string.isRequired,sideColor:l.a.string.isRequired,linkTo:l.a.string,text:l.a.string}},49:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var r=n(0),a=n.n(r),i=n(109),o=n(7),l=n.n(o);function c(e){return a.a.createElement(i.a.g,{whileHover:{scale:1.05},whileTap:{scale:.95},animate:{x:e.xTransform||0,y:e.yTransform||0},transition:{duration:.2}},a.a.createElement("a",{className:"circle-link",href:e.linkTo,target:"_blank"},a.a.createElement("circle",{cx:e.cx,cy:e.cy,r:e.r,fill:"#001b3d"}),a.a.createElement("text",{x:e.cx,y:e.cy,dominantBaseline:"middle",textAnchor:"middle",style:{fill:"white",fontWeight:"bold",fontSize:"24px",textDecoration:"none"}},e.text)))}c.propTypes={cx:l.a.number.isRequired,cy:l.a.number.isRequired,r:l.a.number.isRequired,text:l.a.string,linkTo:l.a.string,xTransform:l.a.number,yTransform:l.a.number}},50:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var r=n(0),a=n.n(r),i=n(137),o=n.n(i),l=(n(62),["medicine","physics","biology","chemistry","computer science"]);function c(){var e=Object(r.useState)(0),t=e[0],n=e[1],i=l.map((function(e){return[a.a.createElement("span",null,e),a.a.createElement(o.a.Backspace,{count:e.length,delay:800})]}));return a.a.createElement("div",{className:"tagline"},a.a.createElement("span",null,"Powering discoveries in"),a.a.createElement(o.a,{key:t,onTypingDone:function(){return n(t+1)}},a.a.createElement(o.a.Delay,{ms:1e3}),i))}},51:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var r=n(0),a=n.n(r),i=n(103),o=n(123);function l(){var e=Object(i.a)().siteConfig,t=void 0===e?{}:e;return a.a.createElement("div",{className:"splash-logos"},Object(o.a)(t.customFields.Graphics.SPLASH_LOGOS))}},52:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var r=n(0),a=n.n(r),i=n(109),o=n(48),l=n(49);function c(){var e={visible:{opacity:1},hidden:{opacity:0}};return a.a.createElement("svg",{width:1075,height:340,xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("defs",null,a.a.createElement("radialGradient",{id:"blue-radial"},a.a.createElement("stop",{offset:"0%",stopColor:"#fff"}),a.a.createElement("stop",{offset:"5%",stopColor:"#c5b4e5"}),a.a.createElement("stop",{offset:"65%",stopColor:"#fff"})),a.a.createElement("linearGradient",{id:"blue-indigo-magenta"},a.a.createElement("stop",{offset:"0%",stopColor:"#28d9f2"}),a.a.createElement("stop",{offset:"50%",stopColor:"#3578e5"}),a.a.createElement("stop",{offset:"100%",stopColor:"#f44af5"})),a.a.createElement("marker",{id:"arrowhead",markerWidth:"6",markerHeight:"6",refX:"0",refY:"3",orient:"auto",fill:"#001b3d"},a.a.createElement("polygon",{points:"0 0, 6 3, 0 6"}))),a.a.createElement("rect",{transform:"translate(0, 10)",width:1075,height:330,fill:"url(#blue-radial)"}),a.a.createElement("g",{id:"boxes",transform:"translate(390, 50)"},a.a.createElement(o.default,{x:0,y:130,width:300,height:100,yTransition:30,topColor:"#6f46be",sideColor:"#4B2E83",text:"Text3",linkTo:""}),a.a.createElement(o.default,{x:0,y:80,width:300,height:100,topColor:"#d098db",sideColor:"#a541b8",text:"Text2",linkTo:""}),a.a.createElement(o.default,{x:0,y:30,width:300,height:100,yTransition:-30,topColor:"#81d38e",sideColor:"#3aa74c",text:"Text1",linkTo:""})),a.a.createElement("g",{id:"left-circles",transform:"translate(50, 80)"},a.a.createElement(l.default,{cx:0,cy:100,xTransform:100,yTransform:-100,r:48,c:!0,text:"Circle1",linkTo:"http://www.washington.edu"}),a.a.createElement(l.default,{cx:0,cy:100,r:48,text:"Circle2",linkTo:"http://www.washington.edu"}),a.a.createElement(l.default,{cx:0,cy:100,xTransform:100,yTransform:100,r:48,text:"Circle3",linkTo:"http://www.washington.edu"})),a.a.createElement(i.a.g,{id:"left-arrows",transform:"translate(120, 120)",variants:e,initial:"hidden",animate:"visible",transition:{duration:.5}},a.a.createElement("path",{fill:"none",stroke:"#001b3d",strokeWidth:"3",markerEnd:"url(#arrowhead)",d:"M0 60 L230 60"}),a.a.createElement("path",{fill:"none",stroke:"#001b3d",strokeWidth:"3",d:"M90 0 Q130 60 230 60"}),a.a.createElement("path",{fill:"none",stroke:"#001b3d",strokeWidth:"3",d:"M90 120 Q130 60 230 60"})),a.a.createElement("g",{id:"right-circles",transform:"translate(890, 80)"},a.a.createElement(l.default,{cx:80,cy:100,xTransform:-80,yTransform:-100,r:48,text:"Circle4",linkTo:"http://www.washington.edu"}),a.a.createElement(l.default,{cx:80,cy:100,r:48,text:"Circle5",linkTo:"http://www.washington.edu"}),a.a.createElement(l.default,{cx:80,cy:100,xTransform:-80,yTransform:100,r:48,text:"Circle6",linkTo:"http://www.washington.edu"})),a.a.createElement(i.a.g,{id:"right-arrows",transform:"translate(710, 80)",variants:e,initial:"hidden",animate:"visible",transition:{duration:.5}},a.a.createElement("path",{d:"M0 0 L100 0",fill:"none",stroke:"#001b3d",strokeWidth:"3",markerEnd:"url(#arrowhead)",strokeDasharray:"4"}),a.a.createElement("path",{d:"M0 100 L180 100",fill:"none",stroke:"#001b3d",strokeWidth:"3",markerEnd:"url(#arrowhead)",strokeDasharray:"4"}),a.a.createElement("path",{d:"M0 200 L100 200",fill:"none",stroke:"#001b3d",strokeWidth:"3",markerEnd:"url(#arrowhead)",strokeDasharray:"4"})))}},53:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var r=n(111),a=n.n(r),i=n(0),o=n.n(i),l=n(106),c=n(105),s=n(7),u=n.n(s),f=n(61),d=n.n(f);function m(e){return o.a.createElement("div",{className:d.a.buttons},e.buttons&&e.buttons.map((function(e){return o.a.createElement(l.a,{key:e.label,className:a()("button button--outline button--secondary button--lg",d.a.getStarted),to:Object(c.a)(e.path)},e.label)})))}m.propTypes={buttons:u.a.arrayOf(u.a.exact({label:u.a.string,path:u.a.string})).isRequired}},64:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var r=n(0),a=n.n(r),i=n(52),o=n(51),l=n(53),c=n(50);function s(){return a.a.createElement("div",{className:"splash",style:{textAlign:"center"}},a.a.createElement(i.default,null),a.a.createElement(c.default,null),a.a.createElement(o.default,null),a.a.createElement(l.default,{buttons:[{label:"Button 1",path:"path/to/page"},{label:"Button 2",path:"path/to/page"}]}))}}}]);