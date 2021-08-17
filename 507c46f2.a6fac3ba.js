(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(174)),i=["components"],c={slug:"pytorch-cuda11",title:"Pytorch and CUDA11",author:"Nam Pho",author_title:"Director for Research Computing",author_url:"https://github.com/npho",author_image_url:"https://avatars3.githubusercontent.com/u/1252858?s=400&v=4",tags:["ai","ml","machine learning","pytorch","gpu","cuda","cuda11"]},l={permalink:"/blog/pytorch-cuda11",source:"@site/blog/2021-01-10-pytorch-cuda11.md",description:"[pytorch-cuda10]: /img/blog/pytorch-cuda10.png 'Pytorch install instructions for pip with CUDA10'",date:"2021-01-10T00:00:00.000Z",tags:[{label:"ai",permalink:"/blog/tags/ai"},{label:"ml",permalink:"/blog/tags/ml"},{label:"machine learning",permalink:"/blog/tags/machine-learning"},{label:"pytorch",permalink:"/blog/tags/pytorch"},{label:"gpu",permalink:"/blog/tags/gpu"},{label:"cuda",permalink:"/blog/tags/cuda"},{label:"cuda11",permalink:"/blog/tags/cuda-11"}],title:"Pytorch and CUDA11",readingTime:2.085,truncated:!1,prevItem:{title:"Klone Soft Launch",permalink:"/blog/klone"},nextItem:{title:"gromacs on GPUs",permalink:"/blog/gromacs-gpu"}},p=[{value:"Installing Pytorch with CUDA11",id:"installing-pytorch-with-cuda11",children:[]},{value:"Reverse compatibility with CUDA10",id:"reverse-compatibility-with-cuda10",children:[]}],s={toc:p};function u(e){var t=e.components,n=Object(r.a)(e,i);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"During the January 12, 2021 mox maintenance period long overdue package updates will be applied. The most user impactful upgrade is the GPU driver from to 418.40.04 to 460.27.04 that will allow for CUDA11 support (up from CUDA10)."))),Object(o.b)("p",null,"The single biggest research use for GPUs on HYAK is for machine learning and artificial intelligence and the community has been clammoring for CUDA11 support for some time. Unfortunately, it's not easy to separate the GPU driver from the node images so it had to wait until the next maintenance window and some testing for non-ML GPU workflows on HYAK like our ",Object(o.b)("a",{parentName:"p",href:"/blog/gromacs-gpu"},"gromacs")," users in the molecular dynamics community."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"tl;dr")," your existing Pytorch codes should work but if you wanted to use the new features in Pytorch that required CUDA11 you can upgrade Pytorch and it will work."),Object(o.b)("h3",{id:"installing-pytorch-with-cuda11"},"Installing Pytorch with CUDA11"),Object(o.b)("p",null,"Since this is now the latest and greatest on HYAK I've taken the opportunity to update the Python documentation on how to install Pytorch with CUDA11 support within a miniconda3 environment, check out the step-by-step ",Object(o.b)("a",{parentName:"p",href:"/docs/tools/python"},"here"),"."),Object(o.b)("h3",{id:"reverse-compatibility-with-cuda10"},"Reverse compatibility with CUDA10"),Object(o.b)("p",null,"Before the January 12, 2021 cluster maintenance every GPU on HYAK had a driver with CUDA10 and all of your codes were previously compiled against it. To test that the GPU driver update to CUDA11 wouldn't impact the most popular machine learning libraries we are compiling Pytorch against our pre-maintenance CUDA10 and testing it against a GPU with the newer CUDA11 installed."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"conda create -p /gscratch/scrubbed/npho/pytorch-cuda10 python=3.8 -y\n")),Object(o.b)("p",null,"Activate your new ",Object(o.b)("inlineCode",{parentName:"p"},"pytorch-cuda10")," environment:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"conda activate pytorch-cuda10\n")),Object(o.b)("p",null,"The Pytorch website [",Object(o.b)("a",{parentName:"p",href:"https://pytorch.org/get-started/locally/"},"www"),"] has a nice getting started matrix that generates the requisite install commands against CUDA10."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"/img/blog/pytorch-cuda10.png",alt:"pytorch-cuda10",title:"Pytorch install instructions for pip with CUDA10"})),Object(o.b)("p",null,"The command shown above to copy-and-paste below:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"pip install torch==1.7.1+cu101 torchvision==0.8.2+cu101 torchaudio==0.7.2 -f https://download.pytorch.org/whl/torch_stable.html\n")),Object(o.b)("p",null,"Now we can load the Python interpreter and confirm Pytorch is installed and the CUDA10 compiled library recognizes this GPU with CUDA11 [",Object(o.b)("a",{parentName:"p",href:"https://pytorch.org/get-started/locally/#linux-verification"},"www"),"]."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell-session",metastring:"terminal=true",terminal:"true"},'(pytorch-cuda10) $ python3                                                                               Python 3.8.5 (default, Sep  4 2020, 07:30:14) \n[GCC 7.3.0] :: Anaconda, Inc. on linux\nType "help", "copyright", "credits" or "license" for more information.\n>>> import torch\n>>> torch.__version__\n\'1.7.1+cu101\'\n>>> torch.cuda.is_available()\nTrue\n>>> \n')),Object(o.b)("p",null,"Success! "),Object(o.b)("p",null,"Previously compiled libraries against CUDA10 from pre-January 12, 2021 maintenance times should still work on the GPUs now with CUDA11. However, if you want to use the full features of libraries that take advantage of newer capabilities in CUDA11 then you should definitely upgrade your libraries."))}u.isMDXComponent=!0},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),b=a,m=u["".concat(i,".").concat(b)]||u[b]||h[b]||o;return n?r.a.createElement(m,c(c({ref:t},p),{},{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);