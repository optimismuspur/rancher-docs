"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[98138],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(u,".").concat(m)]||d[m]||l[m]||s;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7752:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return l}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),i=["components"],o={title:"GlusterFS \u5377",weight:5e3},u=void 0,c={unversionedId:"how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-glusterfs-volumes",id:"how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-glusterfs-volumes",title:"GlusterFS \u5377",description:"\u672c\u6587\u4ec5\u9002\u7528\u4e8e RKE \u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-glusterfs-volumes.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage",slug:"/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-glusterfs-volumes",permalink:"/zh/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-glusterfs-volumes",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-glusterfs-volumes.md",tags:[],version:"current",lastUpdatedAt:1663692195,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"GlusterFS \u5377",weight:5e3},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528\u5916\u90e8 Ceph \u9a71\u52a8",permalink:"/zh/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/use-external-ceph-driver"},next:{title:"iSCSI \u5377",permalink:"/zh/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/install-iscsi-volumes"}},p={},l=[],d={toc:l};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"\u672c\u6587\u4ec5\u9002\u7528\u4e8e ",(0,s.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/launch-kubernetes-with-rancher"},"RKE \u96c6\u7fa4"),"\u3002"))),(0,s.kt)("p",null,"\u5728\u5c06\u6570\u636e\u5b58\u50a8\u5728 GlusterFS \u5377\u4e0a\u7684\u96c6\u7fa4\u4e2d\uff0c\u4f60\u53ef\u80fd\u4f1a\u9047\u5230\u91cd\u542f ",(0,s.kt)("inlineCode",{parentName:"p"},"kubelet")," \u540e pod \u65e0\u6cd5\u6302\u8f7d\u5377\u7684\u95ee\u9898\u3002",(0,s.kt)("inlineCode",{parentName:"p"},"kubelet")," \u7684\u65e5\u5fd7\u5c06\u663e\u793a ",(0,s.kt)("inlineCode",{parentName:"p"},"transport endpoint is not connected"),"\u3002\u4e3a\u4e86\u907f\u514d\u8fd9\u79cd\u60c5\u51b5\uff0c\u4f60\u53ef\u4ee5\u5728\u96c6\u7fa4\u4e2d\u5c06 ",(0,s.kt)("inlineCode",{parentName:"p"},"systemd-run")," \u4e8c\u8fdb\u5236\u6587\u4ef6\u6302\u8f7d\u5230 ",(0,s.kt)("inlineCode",{parentName:"p"},"kubelet")," \u5bb9\u5668\u4e2d\u3002\u5728\u66f4\u6539\u96c6\u7fa4\u914d\u7f6e\u4e4b\u524d\u6709\u4e24\u4e2a\u8981\u6c42\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u8be5\u8282\u70b9\u9700\u8981\u5b89\u88c5\u4e86 ",(0,s.kt)("inlineCode",{parentName:"li"},"systemd-run")," \u4e8c\u8fdb\u5236\u6587\u4ef6\uff08\u53ef\u4ee5\u901a\u8fc7\u5728\u6bcf\u4e2a\u96c6\u7fa4\u8282\u70b9\u4e0a\u8fd0\u884c ",(0,s.kt)("inlineCode",{parentName:"li"},"which systemd-run")," \u547d\u4ee4\u6765\u68c0\u67e5\uff09\u3002"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"systemd-run")," \u4e8c\u8fdb\u5236\u6587\u4ef6\u9700\u8981\u4e0e hyperkube \u955c\u50cf\u6240\u57fa\u4e8e\u7684 Debian OS \u517c\u5bb9\uff08\u53ef\u4ee5\u901a\u8fc7\u5728\u6bcf\u4e2a\u96c6\u7fa4\u8282\u70b9\u4e0a\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u68c0\u67e5\uff0c\u8bf7\u5c06\u955c\u50cf\u6807\u7b7e\u66ff\u6362\u4e3a\u4f60\u60f3\u8981\u7684 Kubernetes \u7248\u672c\uff09\uff1a")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"docker run -v /usr/bin/systemd-run:/usr/bin/systemd-run --entrypoint /usr/bin/systemd-run rancher/hyperkube:v1.16.2-rancher1 --version\n")),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"\u5728\u66f4\u65b0 Kubernetes YAML \u4ee5\u6302\u8f7d ",(0,s.kt)("inlineCode",{parentName:"p"},"systemd-run")," \u4e8c\u8fdb\u5236\u6587\u4ef6\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u5728\u96c6\u7fa4\u8282\u70b9\u4e0a\u5b89\u88c5\u4e86 ",(0,s.kt)("inlineCode",{parentName:"p"},"systemd")," \u5305\u3002\u5982\u679c\u5728\u7ed1\u5b9a\u6302\u8f7d\u521b\u5efa\u5230\u4f60\u7684 Kubernetes YAML ",(0,s.kt)("em",{parentName:"p"},"\u4e4b\u524d")," \u672a\u5b89\u88c5\u6b64\u5305\uff0cDocker \u5c06\u81ea\u52a8\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u521b\u5efa\u76ee\u5f55\u548c\u6587\u4ef6\uff0c\u5e76\u4e14\u4e0d\u5141\u8bb8\u5305\u5b89\u88c5\u6210\u529f\u3002"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'services:\n  kubelet:\n    extra_binds:\n      - "/usr/bin/systemd-run:/usr/bin/systemd-run"\n')),(0,s.kt)("p",null,"\u96c6\u7fa4\u5b8c\u6210\u914d\u7f6e\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u67e5\u627e\u4ee5\u4e0b\u65e5\u5fd7\u6765\u68c0\u67e5 ",(0,s.kt)("inlineCode",{parentName:"p"},"kubelet")," \u5bb9\u5668\u65e5\u5fd7\u8bb0\u5f55\uff0c\u4ece\u800c\u67e5\u770b\u8be5\u529f\u80fd\u662f\u5426\u5df2\u6fc0\u6d3b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Detected OS with systemd\n")))}m.isMDXComponent=!0}}]);