(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return b}));var i=n(3),r=n(7),a=(n(0),n(174)),o=["components"],l={id:"link-markdown",title:"Linking Markdown to Docusaurus"},c={unversionedId:"contribute/link-markdown",id:"contribute/link-markdown",isDocsHomePage:!1,title:"Linking Markdown to Docusaurus",description:"This thing is written based on only the cursory experimenting I've done so far",source:"@site/docs/contribute/link-markdown.md",slug:"/contribute/link-markdown",permalink:"/docs/contribute/link-markdown",version:"current",sidebar:"someSidebar",previous:{title:"Markdown Guide",permalink:"/docs/contribute/markdown-guide"},next:{title:"Powered by MDX",permalink:"/docs/contribute/mdx"}},d=[{value:"Markdown Files",id:"markdown-files",children:[]},{value:"Sidebar Configuration",id:"sidebar-configuration",children:[]}],s={toc:d};function b(e){var t=e.components,n=Object(r.a)(e,o);return Object(a.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("div",{className:"admonition admonition-important alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"This thing is written based on only the cursory experimenting I've done so far"))),Object(a.b)("h2",{id:"markdown-files"},"Markdown Files"),Object(a.b)("p",null,"Basically all Markdown files go in the ",Object(a.b)("inlineCode",{parentName:"p"},"docs")," folder"),Object(a.b)("p",null,"Each Markdown file should have at least ",Object(a.b)("inlineCode",{parentName:"p"},"id")," and ",Object(a.b)("inlineCode",{parentName:"p"},"title")," YAML headers:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"---\nid: some-id  # seems like the convention is to separate words with hyphens?\ntitle: Some Title\n---\n\n...rest of Markdown document...\n")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"sidebar-configuration"},"Sidebar Configuration"),Object(a.b)("p",null,"Add the ",Object(a.b)("inlineCode",{parentName:"p"},"id")," of the Markdown document to the correct category/make new category in ",Object(a.b)("inlineCode",{parentName:"p"},"sidebars.js")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"sidebars.js")," should have a general structure like:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n    sidebarName: {\n        "Some Category Name": [\n            "some-id",\n            "another-id",\n            ...\n        ],\n        "Another Category Name": [\n            "yet-another-id",\n            { // subcategory declaration\n                type: \'category\',\n                label: \'Subcategory Name\',\n                items: [\n                    \'subcategory-doc-id\',\n                    ...\n                ]\n            }\n            "yet-yet-another-id"\n            ...\n        ]\n    }\n}\n')),Object(a.b)("hr",null),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Full description of possible headers (more info ",Object(a.b)("a",{parentName:"strong",href:"https://v2.docusaurus.io/docs/markdown-features"},"here"),"):")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"id"),": A unique document id. If this field is not present, the document's ",Object(a.b)("inlineCode",{parentName:"li"},"id")," will default to its file name (without the extension). ",Object(a.b)("em",{parentName:"li"},"(Please still explicitly include the ",Object(a.b)("inlineCode",{parentName:"em"},"id")," though! )")," "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"title"),": The title of your document. If this field is not present, the document's ",Object(a.b)("inlineCode",{parentName:"li"},"title")," will default to its ",Object(a.b)("inlineCode",{parentName:"li"},"id"),". ",Object(a.b)("em",{parentName:"li"},"(Also explicitly include the title too)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"hide_title"),": Whether to hide the title at the top of the doc. By default it is ",Object(a.b)("inlineCode",{parentName:"li"},"false"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"sidebar_label"),": The text shown in the document sidebar and in the next/previous button for this document. If this field is not present, the document's ",Object(a.b)("inlineCode",{parentName:"li"},"sidebar_label")," will default to its ",Object(a.b)("inlineCode",{parentName:"li"},"title"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"custom_edit_url"),": The URL for editing this document. If this field is not present, the document's edit URL will fall back to ",Object(a.b)("inlineCode",{parentName:"li"},"editUrl")," from options fields passed to ",Object(a.b)("inlineCode",{parentName:"li"},"docusaurus-plugin-content-docs"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"keywords"),": Keywords meta tag for the document page, for search engines."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"description"),": The description of your document, which will become the ",Object(a.b)("inlineCode",{parentName:"li"},'<meta name="description" content="..."/>')," and ",Object(a.b)("inlineCode",{parentName:"li"},'<meta property="og:description" content="..."/>')," in ",Object(a.b)("inlineCode",{parentName:"li"},"<head>"),", used by search engines. If this field is not present, it will default to the first line of the contents."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"image"),": Cover or thumbnail image that will be used when displaying the link to your post.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"More information about sidebars ",Object(a.b)("a",{parentName:"strong",href:"https://v2.docusaurus.io/docs/docs"},"here"),".")))}b.isMDXComponent=!0},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),s=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),b=s(n),u=i,m=b["".concat(o,".").concat(u)]||b[u]||p[u]||a;return n?r.a.createElement(m,l(l({ref:t},d),{},{components:n})):r.a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);