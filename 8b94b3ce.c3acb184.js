(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{127:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return l})),o.d(t,"metadata",(function(){return c})),o.d(t,"toc",(function(){return s})),o.d(t,"default",(function(){return u}));var a=o(3),n=o(7),r=(o(0),o(174)),i=["components"],l={id:"modules",title:"Modules"},c={unversionedId:"tools/modules",id:"tools/modules",isDocsHomePage:!1,title:"Modules",description:"Modules are a method of modifying your environment that are unique to some software you're trying to run. It allows you to quickly switch between different programs or different versions of the same program.",source:"@site/docs/tools/modules.md",slug:"/tools/modules",permalink:"/docs/tools/modules",version:"current",sidebar:"someSidebar",previous:{title:"Start Here",permalink:"/docs/tools/software"},next:{title:"Compilers",permalink:"/docs/tools/compilers"}},s=[{value:"Basics",id:"basics",children:[{value:"What software is available?",id:"what-software-is-available",children:[]},{value:"What modules do I currently have loaded?",id:"what-modules-do-i-currently-have-loaded",children:[]},{value:"How to (un)load a software?",id:"how-to-unload-a-software",children:[]}]},{value:"KLONE",id:"klone",children:[{value:"LMOD",id:"lmod",children:[]},{value:"How do I create personal LMOD modules on KLONE?",id:"how-do-i-create-personal-lmod-modules-on-klone",children:[]},{value:"How do I create shared LMOD modules on KLONE?",id:"how-do-i-create-shared-lmod-modules-on-klone",children:[]}]},{value:"MOX",id:"mox",children:[{value:"Environment Modules",id:"environment-modules",children:[]},{value:"How do I create my own environment module on MOX?",id:"how-do-i-create-my-own-environment-module-on-mox",children:[]}]}],d={toc:s};function u(e){var t=e.components,l=Object(n.a)(e,i);return Object(r.b)("wrapper",Object(a.a)({},d,l,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Modules are a method of modifying your environment that are unique to some software you're trying to run. It allows you to quickly switch between different programs or different versions of the same program."),Object(r.b)("h2",{id:"basics"},"Basics"),Object(r.b)("p",null,"Please refer to the cluster specific sections on KLONE [",Object(r.b)("a",{parentName:"p",href:"#klone"},"link"),"] and MOX [",Object(r.b)("a",{parentName:"p",href:"#mox"},"link"),"] below for more details on creating your own modules."),Object(r.b)("h3",{id:"what-software-is-available"},"What software is available?"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"module avail\n")),Object(r.b)("p",null,"The research computing team will maintain most of the core modules for building software, this includes GNU compilers (e.g., ",Object(r.b)("inlineCode",{parentName:"p"},"gcc"),", ",Object(r.b)("inlineCode",{parentName:"p"},"g++"),", ",Object(r.b)("inlineCode",{parentName:"p"},"gfortran"),") or their Intel compiler equivalents as well as select MPI libraries."),Object(r.b)("p",null,"There is a larger list of modules maintained by the broader HYAK community that appears when you run this command. ",Object(r.b)("strong",{parentName:"p"},'Community created or "contrib" modules are provided as is.'),' Community modules on KLONE are separated into a lower section and within the lower section each module is further prefixed by the respective group that created the module. All modules appear together when you run this command on MOX but the community provided modules appear with a "contrib" prefix.'),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"The HYAK team encourages the use of Singularity to better promote computational portability and reproducibility. You can read more about Singularity [",Object(r.b)("a",{parentName:"p",href:"/docs/tools/containers"},"link"),"] after loading its module."))),Object(r.b)("h3",{id:"what-modules-do-i-currently-have-loaded"},"What modules do I currently have loaded?"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"module list\n")),Object(r.b)("h3",{id:"how-to-unload-a-software"},"How to (un)load a software?"),Object(r.b)("p",null,'Replace "software" below with a specific module you know exists or identified via ',Object(r.b)("inlineCode",{parentName:"p"},"module avail")," above."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"module load <software>\n")),Object(r.b)("p",null,"Conversely, you can unload a specific module."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"module unload <software>\n")),Object(r.b)("p",null,"You can unload every module you might have loaded."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"module purge\n")),Object(r.b)("h2",{id:"klone"},"KLONE"),Object(r.b)("p",null,"The KLONE cluster uses the more feature-rich LMOD implementation of modules. You're welcome to ",Object(r.b)("a",{href:"mailto:help@uw.edu?subject=klone module help"},"email")," us if you have any questions about modulefile creation on KLONE."),Object(r.b)("h3",{id:"lmod"},"LMOD"),Object(r.b)("p",null,Object(r.b)("img",{alt:"LMOD",src:o(258).default})),Object(r.b)("p",null,"LMOD [",Object(r.b)("a",{parentName:"p",href:"https://lmod.readthedocs.io/en/latest/"},"documentation"),"] [",Object(r.b)("a",{parentName:"p",href:"https://www.tacc.utexas.edu/research-development/tacc-projects/lmod"},"project page"),"] is an upgraded implementation of environment modules created by the Texas Advanced Computing Center (TACC) at the University of Texas."),Object(r.b)("h3",{id:"how-do-i-create-personal-lmod-modules-on-klone"},"How do I create personal LMOD modules on KLONE?"),Object(r.b)("p",null,"This advanced user documentation page from the LMOD developers walks you through this [",Object(r.b)("a",{parentName:"p",href:"https://lmod.readthedocs.io/en/latest/020_advanced.html"},"link"),"]. You need to compile your code separately first. In short, you provide a command directing it to the folder with your collection of module files:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"module use /path/to/personal/modulefiles\n")),Object(r.b)("p",null,"In this case you'll likely use a sub-directory under your lab's ",Object(r.b)("inlineCode",{parentName:"p"},"/gscratch")," folder or your home directory and create individual folders with independent software packages. Once you have code compiled a modulefile needs to be created for each software package you installed, there are some examples from basic to advanced [",Object(r.b)("a",{parentName:"p",href:"https://lmod.readthedocs.io/en/latest/100_modulefile_examples.html"},"link"),"]. "),Object(r.b)("h3",{id:"how-do-i-create-shared-lmod-modules-on-klone"},"How do I create shared LMOD modules on KLONE?"),Object(r.b)("p",null,"Each group has a special folder for installing codes that are intended to be shared for all KLONE users. Each folder here gets a 100GB block quota and 160,000 inode quota at ",Object(r.b)("inlineCode",{parentName:"p"},"/sw/contrib/mylab-src"),' where "mylab" is your account affiliation. We can raise these limits if specific code compiles require, however, in our experience the default quotas are sufficient for all but the most rare cases.'),Object(r.b)("p",null,"You place your modulefiles in ",Object(r.b)("inlineCode",{parentName:"p"},"/sw/contrib/modulefiles/mylab")," and when anyone runs ",Object(r.b)("inlineCode",{parentName:"p"},"module avail"),' it will now appear in the "contrib" section in the lower half. Note the prefix is automatically tagged to your group name for you to more easily identify the ones you contributed (and likely will use most regularly).'),Object(r.b)("h2",{id:"mox"},"MOX"),Object(r.b)("p",null,"The MOX cluster uses an simpler implementation of modules called environment modules. You're welcome to ",Object(r.b)("a",{href:"mailto:help@uw.edu?subject=mox module help"},"email")," us if you have any questions about modulefile creation on MOX."),Object(r.b)("h3",{id:"environment-modules"},"Environment Modules"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Environment modules",src:o(259).default})),Object(r.b)("p",null,"Environment modules [",Object(r.b)("a",{parentName:"p",href:"https://modules.readthedocs.io/en/latest/"},"documentation"),"] [",Object(r.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Environment_Modules_(software)"},"Wikipedia"),"] has a long development history going back to the 1990's. It's still in use today due to its simplicity and ease of deployment for cluster administrators and end users alike."),Object(r.b)("h3",{id:"how-do-i-create-my-own-environment-module-on-mox"},"How do I create my own environment module on MOX?"),Object(r.b)("p",null,"Compile your code under ",Object(r.b)("inlineCode",{parentName:"p"},"/sw/contrib/")," then create a modulefile under ",Object(r.b)("inlineCode",{parentName:"p"},"/sw/modules-1.775/modulefiles/contrib/")," and it will appear when you run ",Object(r.b)("inlineCode",{parentName:"p"},"module avail"),". There are existing modulefiles there you can use as a template for creating your own."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Any ",Object(r.b)("inlineCode",{parentName:"p"},"contrib")," modules on MOX are provided and maintained by the local research community. Since no one except the original authors can vouch for the software supply chain provenance, anything under ",Object(r.b)("inlineCode",{parentName:"p"},"contrib")," is made publicly available as-is without any support, warranty, or guarantees."))))}u.isMDXComponent=!0},174:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return b}));var a=o(0),n=o.n(a);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=n.a.createContext({}),d=function(e){var t=n.a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=d(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(o),p=a,b=u["".concat(i,".").concat(p)]||u[p]||m[p]||r;return o?n.a.createElement(b,l(l({ref:t},s),{},{components:o})):n.a.createElement(b,l({ref:t},s))}));function b(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=o[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},258:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/tools-modules-lmod-105b732235ecd946bceece822083107f.png"},259:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/tools-modules-environment-c6c3dde6e5e8086f55431d3ce7a11e83.png"}}]);