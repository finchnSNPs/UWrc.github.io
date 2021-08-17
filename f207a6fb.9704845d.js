(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{162:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),o=(a(0),a(174)),i=["components"],l={slug:"klone",title:"Klone Soft Launch",author:"Nam Pho",author_title:"Director for Research Computing",author_url:"https://github.com/npho",author_image_url:"https://avatars3.githubusercontent.com/u/1252858?s=400&v=4",tags:["klone","hyak","hpc","supercomputer","launch","features"]},c={permalink:"/blog/klone",source:"@site/blog/2021-02-25-klone-soft-launch.md",description:"[pytorch-cuda10]: /img/blog/pytorch-cuda10.png 'Pytorch install instructions for pip with CUDA10'",date:"2021-02-25T00:00:00.000Z",tags:[{label:"klone",permalink:"/blog/tags/klone"},{label:"hyak",permalink:"/blog/tags/hyak"},{label:"hpc",permalink:"/blog/tags/hpc"},{label:"supercomputer",permalink:"/blog/tags/supercomputer"},{label:"launch",permalink:"/blog/tags/launch"},{label:"features",permalink:"/blog/tags/features"}],title:"Klone Soft Launch",readingTime:3.67,truncated:!1,prevItem:{title:"Migrating from MOX to KLONE",permalink:"/blog/mox-to-klone"},nextItem:{title:"Pytorch and CUDA11",permalink:"/blog/pytorch-cuda11"}},b=[{value:"February 25, 2021",id:"february-25-2021",children:[]},{value:"March 3, 2021",id:"march-3-2021",children:[]},{value:"March 5, 2021",id:"march-5-2021",children:[]},{value:"March 9, 2021",id:"march-9-2021",children:[]},{value:"March 12, 2021",id:"march-12-2021",children:[]},{value:"April 13, 2021",id:"april-13-2021",children:[]}],u={toc:b};function s(e){var t=e.components,a=Object(r.a)(e,i);return Object(o.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"february-25-2021"},"February 25, 2021"),Object(o.b)("p",null,"The UW research computing team celebrates the soft launch of project KLONE, the 3rd generation HYAK supercomputer. Welcome to those researchers invited to participate in the early access program \ud83e\udd73 \ud83c\udf89"),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"There will be weekly maintenance days on Tuesday during the soft launch period after which we will move back to our regular cadence of monthly maintenance windows."))),Object(o.b)("p",null,"The user documentation [",Object(o.b)("a",{parentName:"p",href:"/docs/"},"link"),"] has been updated to reflect the changes and new features of KLONE but this will be an ongoing process."),Object(o.b)("h4",{id:"compute"},"Compute"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Soft launch with 1,920 compute cores over 48 nodes:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"28 x ",Object(o.b)("inlineCode",{parentName:"li"},"mem1")," nodes (192GB of memory each) in the ",Object(o.b)("inlineCode",{parentName:"li"},"compute")," partition,"),Object(o.b)("li",{parentName:"ul"},"4 x ",Object(o.b)("inlineCode",{parentName:"li"},"mem2")," nodes (384GB of memory each) in the ",Object(o.b)("inlineCode",{parentName:"li"},"compute-bigmem")," partition,"),Object(o.b)("li",{parentName:"ul"},"16 x ",Object(o.b)("inlineCode",{parentName:"li"},"mem3")," nodes (768GB of memory each) in the ",Object(o.b)("inlineCode",{parentName:"li"},"compute-hugemem")," partition."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"build")," nodes no longer exist on klone as they did on mox. All instances have the potential to be interactive and all have internet routing by default (even non-interactive jobs).")),Object(o.b)("h4",{id:"storage"},"Storage"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"gscratch")," on klone is 1.4PB total capacity with a ",Object(o.b)("strong",{parentName:"li"},"new")," 500TB NVMe flash tier. Data tiering happens automagically, if you use a file frequently it will be moved to the faster storage."),Object(o.b)("li",{parentName:"ul"},"Storage quota is still charged back at the same rate ($10 / TB / month). Researchers receive 1TB per node purchased and contributed to klone.")),Object(o.b)("h4",{id:"data"},"Data"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"gscratch")," is ",Object(o.b)("strong",{parentName:"li"},"not backed up")," that is the responsibility of the researcher (e.g., LOLO, the cloud, external hard drive). Feel free to ",Object(o.b)("a",{href:"mailto:help@uw.edu?subject=hyak archive"},"email")," us if you have any questions."),Object(o.b)("li",{parentName:"ul"},"While all nodes have internet access now, transfer data using the login nodes. Login nodes have full 2 x 40 Gbps bandwidth. If you transfer using a compute node interactive session you are limited to 1 x 1 Gbps connection.")),Object(o.b)("h4",{id:"software"},"Software"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"modules works the same as it did on mox. This is an improved implementation called LMOD on klone compared to environment modules on mox."),Object(o.b)("li",{parentName:"ul"},"We provide the basic compilers (e.g., GNU, Intel) as modules."),Object(o.b)("li",{parentName:"ul"},"The HYAK team is encouraging a container first world (i.e., use Singularity).")),Object(o.b)("h3",{id:"march-3-2021"},"March 3, 2021"),Object(o.b)("p",null,"The updated total is ",Object(o.b)("strong",{parentName:"p"},"3,840 cores")," and ",Object(o.b)("strong",{parentName:"p"},"96 nodes")," on klone."),Object(o.b)("h4",{id:"compute-1"},"Compute"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Compute has doubled by adding another rack to klone, an additional 1,920 compute cores over 48 nodes: ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"44 x ",Object(o.b)("inlineCode",{parentName:"li"},"mem1")," nodes (192GB of memory each) in the ",Object(o.b)("inlineCode",{parentName:"li"},"compute")," partition,"),Object(o.b)("li",{parentName:"ul"},"2 x ",Object(o.b)("inlineCode",{parentName:"li"},"mem2")," nodes (384GB of memory each) in the ",Object(o.b)("inlineCode",{parentName:"li"},"compute-bigmem")," partition,"),Object(o.b)("li",{parentName:"ul"},"2 x ",Object(o.b)("inlineCode",{parentName:"li"},"mem3")," nodes (768GB of memory each) in the ",Object(o.b)("inlineCode",{parentName:"li"},"compute-hugemem")," partition.")))),Object(o.b)("h4",{id:"software-1"},"Software"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"We created a module for ",Object(o.b)("inlineCode",{parentName:"li"},"cmake"),".")),Object(o.b)("h3",{id:"march-5-2021"},"March 5, 2021"),Object(o.b)("h4",{id:"storage-1"},"Storage"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Implemented ",Object(o.b)("inlineCode",{parentName:"li"},"usage_report.txt")," files in the base folder of ",Object(o.b)("inlineCode",{parentName:"li"},"/gscratch/yourlab/")," that is updated once an hour to reflect both your block quota and inode capacity usage. This is similar to the ",Object(o.b)("inlineCode",{parentName:"li"},"gscratch")," experience on the MOX cluster.")),Object(o.b)("h4",{id:"website"},"Website"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"We migrated our site from ",Object(o.b)("a",{href:"https://UWrc.github.io"},Object(o.b)("inlineCode",{parentName:"li"},"https://UWrc.github.io"))," to its new home at ",Object(o.b)("a",{href:"https://hyak.uw.edu"},Object(o.b)("inlineCode",{parentName:"li"},"https://hyak.uw.edu")),".")),Object(o.b)("h3",{id:"march-9-2021"},"March 9, 2021"),Object(o.b)("h4",{id:"storage-2"},"Storage"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Snapshots are here! We are piloting once an hour for 24 hours for every lab storage folder under ",Object(o.b)("inlineCode",{parentName:"li"},"/gscratch/"),". Check out the updated documentation ",Object(o.b)("a",{parentName:"li",href:"/docs/storage/gscratch#group-or-lab-directories"},"here")," on how to access past snapshots.")),Object(o.b)("h4",{id:"software-2"},"Software"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"We created more LMOD software modules: ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Matlab R2020b [",Object(o.b)("a",{parentName:"li",href:"/docs/tools/matlab"},"docs"),"]"),Object(o.b)("li",{parentName:"ul"},"OpenMPI-4.1.0")))),Object(o.b)("h3",{id:"march-12-2021"},"March 12, 2021"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"LMOD software modules:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Intel has bundled their software suite (e.g., compiler, MPI) as oneCLI and we created this module (i.e., ",Object(o.b)("inlineCode",{parentName:"li"},"module load intel/oneCLI"),")."),Object(o.b)("li",{parentName:"ul"},'There is now a "contrib" framework for groups to store their shared codes separately from their ',Object(o.b)("inlineCode",{parentName:"li"},"/gscratch/labname/")," data. You can get 100GB of storage to compile codes at ",Object(o.b)("inlineCode",{parentName:"li"},"/sw/contrib/labname-src/")," and then put your LMOD module file in ",Object(o.b)("inlineCode",{parentName:"li"},"/sw/contrib/modulefiles/labname/"),". Your module would appear when anyone runs ",Object(o.b)("inlineCode",{parentName:"li"},"module avail"),". This is created upon request so if you'd like to opt-in your group please let us know.")))),Object(o.b)("h3",{id:"april-13-2021"},"April 13, 2021"),Object(o.b)("p",null,"Things have been going steady the past week and changes are coming less frequently. We are now increasing time between maintenance periods on klone from weekly on Tuesdays to monthly and aligning it with the mox maintenance as the 2nd Tuesday of every month."),Object(o.b)("p",null,"That wraps up our klone soft launch blog updates here, other updates will appear on our HYAK users mailing list. Don't forget to subscribe, instructions on ",Object(o.b)("a",{parentName:"p",href:"/docs/account-activation"},"this page")," at the bottom."))}s.isMDXComponent=!0},174:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=u(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=u(a),p=n,d=s["".concat(i,".").concat(p)]||s[p]||m[p]||o;return a?r.a.createElement(d,l(l({ref:t},b),{},{components:a})):r.a.createElement(d,l({ref:t},b))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var b=2;b<o;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);