(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{150:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var r=a(3),n=a(7),o=(a(0),a(174)),i=["components"],s={id:"gscratch",title:"Storage on HYAK"},c={unversionedId:"storage/gscratch",id:"storage/gscratch",isDocsHomePage:!1,title:"Storage on HYAK",description:'Storage mounted on either the 3rd generation HYAK cluster klone or the 2nd generation HYAK cluster mox is referred to as gscratch due to that being the mount point on the cluster (i.e., /gscratch/somefolder/anotherfolder) and a reminder to our researchers that anything here is "scratch" or NOT BACKED UP. Refer to the storage introduction page for details on how to manage your data life cycle and adhere to the 3-2-1 backup policy.',source:"@site/docs/storage/gscratch.md",slug:"/storage/gscratch",permalink:"/docs/storage/gscratch",version:"current",sidebar:"someSidebar",previous:{title:"Start Here",permalink:"/docs/storage/data"},next:{title:"Data Transfer",permalink:"/docs/storage/transfer"}},l=[{value:"User Home Directory",id:"user-home-directory",children:[]},{value:"Group or Lab Directories",id:"group-or-lab-directories",children:[]},{value:"Scrubbed",id:"scrubbed",children:[]}],d={toc:l};function b(e){var t=e.components,a=Object(n.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Storage mounted on either the 3rd generation HYAK cluster ",Object(o.b)("inlineCode",{parentName:"p"},"klone")," or the 2nd generation HYAK cluster ",Object(o.b)("inlineCode",{parentName:"p"},"mox")," is referred to as ",Object(o.b)("inlineCode",{parentName:"p"},"gscratch")," due to that being the mount point on the cluster (i.e., ",Object(o.b)("inlineCode",{parentName:"p"},"/gscratch/somefolder/anotherfolder"),') and a reminder to our researchers that anything here is "scratch" or ',Object(o.b)("strong",{parentName:"p"},"NOT BACKED UP"),". Refer to the ",Object(o.b)("a",{parentName:"p",href:"data"},"storage introduction page")," for details on how to manage your data life cycle and adhere to the 3-2-1 backup policy."),Object(o.b)("p",null,"Every user has a ",Object(o.b)("a",{parentName:"p",href:"#user-home-directory"},"home directory")," by default, most users have a cluster account by virtue of being the member of some lab with dedicated nodes so you have access to ",Object(o.b)("a",{parentName:"p",href:"#group-or-lab-directories"},"lab dedicated storage"),", and there's also ",Object(o.b)("a",{parentName:"p",href:"#scrubbed"},"scrubbed")," storage for temporary overflow use."),Object(o.b)("h2",{id:"user-home-directory"},"User Home Directory"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"10 GB, only yours, everyone has one.")),Object(o.b)("p",null,"Each users' home directory is located at the folder path ",Object(o.b)("inlineCode",{parentName:"p"},"/mmfs1/home/netID")," on KLONE and ",Object(o.b)("inlineCode",{parentName:"p"},"/usr/lusers/netID")," or ",Object(o.b)("inlineCode",{parentName:"p"},"/gscratch/home/netID")," on MOX where ",Object(o.b)("inlineCode",{parentName:"p"},"netID")," is your UW netID. You are placed here by default when you log into MOX. You can always refer to it using the usual Linux shortcuts of ",Object(o.b)("inlineCode",{parentName:"p"},"$HOME")," or ",Object(o.b)("inlineCode",{parentName:"p"},"~"),"."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Your home directory quota is 10 GB or 250,000 files."))),Object(o.b)("p",null,"You can check your live home directory usage using the following command."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"mmlsquota --block-size G gscratch:home\n")),Object(o.b)("p",null,"Ideally you only keep personal code bases or smaller data sets here. This quota can not be changed, if you need more data one of the other storage spots on ",Object(o.b)("inlineCode",{parentName:"p"},"gscratch")," are better suited."),Object(o.b)("h2",{id:"group-or-lab-directories"},"Group or Lab Directories"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Shared lab storage at $10 / TB / month."),Object(o.b)("li",{parentName:"ul"},"NVMe flash tier on KLONE."),Object(o.b)("li",{parentName:"ul"},"Hourly snapshots.")),Object(o.b)("p",null,"If you run the ",Object(o.b)("inlineCode",{parentName:"p"},"groups")," command you'll see what groups you are a member of. For example, one of my groups is ",Object(o.b)("inlineCode",{parentName:"p"},"stf"),', which means I\'m a member of the "stf" group (i.e., the Research Computing Club). Whatever groups you are seeing here you can access your lab storage at ',Object(o.b)("inlineCode",{parentName:"p"},"/gscratch/mylab/")," where ",Object(o.b)("inlineCode",{parentName:"p"},"mylab")," is any group you're a member of. In this example that means I have access to the ",Object(o.b)("inlineCode",{parentName:"p"},"/gscratch/stf/")," and only members of the ",Object(o.b)("inlineCode",{parentName:"p"},"stf")," group have access to this folder. Please note, on MOX the group names have a hyak prefix. For example, ",Object(o.b)("inlineCode",{parentName:"p"},"stf")," will appear as ",Object(o.b)("inlineCode",{parentName:"p"},"hyak-stf"),"."),Object(o.b)("p",null,"Your lab gets 1 TB per node that your group has contributed to KLONE (or 4 TB per node in the case of a GPU node)."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Your lab quota can be increased for $10 / TB / month."))),Object(o.b)("p",null,"Your lab storage quota can be increased (or decreased) in 1 TB granularity and adjusted on a month-to-month basis as your needs require. If you hit file (i.e., ",Object(o.b)("inlineCode",{parentName:"p"},"inode"),") limits, ",Object(o.b)("a",{href:"mailto:help@uw.edu?subject=hyak storage inode adjustment"},"email us")," and we can increase those limits for no additional cost if your workflows warrant."),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Check group quotas and current use by looking at the ",Object(o.b)("inlineCode",{parentName:"p"},"/gscratch/mylab/usage_report.txt")," file."))),Object(o.b)("p",null,"Snapshots are done once an hour for 24 hours on every ",Object(o.b)("inlineCode",{parentName:"p"},"/gscratch/mylab/")," folder on KLONE. SNAPSHOTS ARE NOT BACKUP! If you need to recover something navigate to the base directory of your lab folder in gscratch and look in the ",Object(o.b)("inlineCode",{parentName:"p"},".snapshots")," folder like below. You can navigate to any point in time there is a snapshot and copy back out any file that existed in the recent past."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell-session",metastring:"terminal=true",terminal:"true"},"$ ls -alh /gscratch/stf/.snapshots \ntotal 15K\ndr-xr-xr-x 2 root root 8.0K Feb 13 14:02 .\ndrwxrws--- 5 root stf   512 Mar  9 14:57 ..\ndrwxrws--- 3 root stf   512 Mar  8 20:22 @GMT-2021.03.09-17.03.01\ndrwxrws--- 3 root stf   512 Mar  8 20:22 @GMT-2021.03.09-17.16.01\ndrwxrws--- 3 root stf   512 Mar  8 20:22 @GMT-2021.03.09-18.00.01\ndrwxrws--- 4 root stf   512 Mar  9 10:05 @GMT-2021.03.09-19.00.01\ndrwxrws--- 4 root stf   512 Mar  9 10:05 @GMT-2021.03.09-20.00.01\ndrwxrws--- 4 root stf   512 Mar  9 10:05 @GMT-2021.03.09-21.00.01\ndrwxrws--- 4 root stf   512 Mar  9 10:05 @GMT-2021.03.09-22.00.01\ndrwxrws--- 5 root stf   512 Mar  9 14:57 @GMT-2021.03.09-23.00.01\ndrwxrws--- 5 root stf   512 Mar  9 14:57 @GMT-2021.03.10-00.00.01\ndrwxrws--- 5 root stf   512 Mar  9 14:57 @GMT-2021.03.10-01.00.01\ndrwxrws--- 5 root stf   512 Mar  9 14:57 @GMT-2021.03.10-02.00.01\ndrwxrws--- 5 root stf   512 Mar  9 14:57 @GMT-2021.03.10-03.00.01\ndrwxrws--- 5 root stf   512 Mar  9 14:57 @GMT-2021.03.10-04.00.01\n$ \n")),Object(o.b)("h2",{id:"scrubbed"},"Scrubbed"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Free to use but files auto-deleted beyond 21 days."),Object(o.b)("li",{parentName:"ul"},"Slower than ",Object(o.b)("inlineCode",{parentName:"li"},"gscratch")," lab directories."),Object(o.b)("li",{parentName:"ul"},"No snapshots.")),Object(o.b)("p",null,"If you need space but only temporarily (i.e., less than 3 weeks) then you can make use of the scrubbed folder. The scrubbed folder lives at ",Object(o.b)("inlineCode",{parentName:"p"},"/gscratch/scrubbed/")," and anything underneath this folder is a free-for-all space. You can create a folder for yourself and do whatever you need subject to system constraints but note there is a purge policy where any file not accessed for 21 days (i.e., 3 weeks) is automatically deleted. This is to provide a useful (and free) flex capacity for any research group that needs it and can work within these policy restraints. However, we encourage users who need a more persistent storage location to purchase ",Object(o.b)("inlineCode",{parentName:"p"},"gscratch"),"."),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"AUTO-DELETE: Files not accessed for 3 weeks (i.e., 21 days) in scrubbed will automatically be deleted. Consider purchasing ",Object(o.b)("inlineCode",{parentName:"p"},"gscratch")," storage if you want a more persistent storage location."))),Object(o.b)("p",null,"Starting with the KLONE cluster there are additional differentiating factors beyond the auto-delete policy, namely that all read and writes here will only stay on spinning disk. ",Object(o.b)("inlineCode",{parentName:"p"},"gscratch")," on KLONE has access to a tiering engine that auto writes to a performant NVMe flash tier so scrubbed will be slower than paid for ",Object(o.b)("inlineCode",{parentName:"p"},"gscratch")," on KLONE. On MOX there is no additional performance distinction for scrubbed compared to ",Object(o.b)("inlineCode",{parentName:"p"},"gscratch"),"."),Object(o.b)("p",null,"Please note the scrubbed space is completely open so use Linux group changes and modifications to restrict access as appropriate."),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"PRIVACY: Writes are public by default, it is the responsibility of the individual researcher to lock down anything they wish to use in scrubbed."))))}b.isMDXComponent=!0},174:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),d=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=d(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=d(a),u=r,m=b["".concat(i,".").concat(u)]||b[u]||p[u]||o;return a?n.a.createElement(m,s(s({ref:t},l),{},{components:a})):n.a.createElement(m,s({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);