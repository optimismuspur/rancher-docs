"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[15654],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},l=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=d(n),m=r,g=l["".concat(c,".").concat(m)]||l[m]||u[m]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}l.displayName="MDXCreateElement"},73908:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"\u6dfb\u52a0 Pod \u5b89\u5168\u7b56\u7565"},c=void 0,d={unversionedId:"how-to-guides/advanced-user-guides/manage-clusters/add-a-pod-security-policy",id:"how-to-guides/advanced-user-guides/manage-clusters/add-a-pod-security-policy",title:"\u6dfb\u52a0 Pod \u5b89\u5168\u7b56\u7565",description:"\u4ee5\u4e0b\u9009\u9879\u4ec5\u9002\u7528\u4e8e\u4f7f\u7528 RKE \u542f\u52a8\u7684\u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/manage-clusters/add-a-pod-security-policy.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-clusters",slug:"/how-to-guides/advanced-user-guides/manage-clusters/add-a-pod-security-policy",permalink:"/zh/how-to-guides/advanced-user-guides/manage-clusters/add-a-pod-security-policy",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/manage-clusters/add-a-pod-security-policy.md",tags:[],version:"current",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022/9/23",frontMatter:{title:"\u6dfb\u52a0 Pod \u5b89\u5168\u7b56\u7565"},sidebar:"tutorialSidebar",previous:{title:"\u4ece\u8282\u70b9\u4e2d\u79fb\u9664 Kubernetes \u7ec4\u4ef6",permalink:"/zh/how-to-guides/advanced-user-guides/manage-clusters/clean-cluster-nodes"},next:{title:"\u5206\u914d Pod \u5b89\u5168\u7b56\u7565",permalink:"/zh/how-to-guides/advanced-user-guides/manage-clusters/assign-pod-security-policies"}},p={},u=[],l={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5148\u51b3\u6761\u4ef6\uff1a")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u4ee5\u4e0b\u9009\u9879\u4ec5\u9002\u7528\u4e8e",(0,o.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/launch-kubernetes-with-rancher"},"\u4f7f\u7528 RKE \u542f\u52a8\u7684\u96c6\u7fa4"),"\u3002"))),(0,o.kt)("p",null,"\u5f53\u4f60\u7684\u96c6\u7fa4\u4e0a\u8fd0\u884c\u4e86\u5177\u6709\u5b89\u5168\u654f\u611f\u914d\u7f6e\u7684 pod \u65f6\uff0c\u8bf7\u4e3a\u5176\u5206\u914d ",(0,o.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies"},"pod \u5b89\u5168\u7b56\u7565"),"\uff0c\u8fd9\u662f\u4e00\u7ec4\u7528\u4e8e\u76d1\u63a7 pod \u4e2d\u7684\u72b6\u6001\u548c\u8bbe\u7f6e\u7684\u89c4\u5219\u3002\u5982\u679c pod \u4e0d\u7b26\u5408\u4f60\u7684\u7b56\u7565\u4e2d\u6307\u5b9a\u7684\u89c4\u5219\uff0c\u5219\u8be5\u7b56\u7565\u4f1a\u963b\u6b62\u5b83\u8fd0\u884c\u3002"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u914d\u7f6e\u96c6\u7fa4\u65f6\u5206\u914d pod \u5b89\u5168\u7b56\u7565\u3002\u5982\u679c\u4f60\u4ee5\u540e\u9700\u8981\u653e\u677e\u6216\u9650\u5236 pod \u7684\u5b89\u5168\u6027\uff0c\u4f60\u53ef\u4ee5\u5728\u7f16\u8f91\u96c6\u7fa4\u65f6\u66f4\u65b0\u7b56\u7565\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u70b9\u51fb ",(0,o.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8f6c\u5230\u8981\u5e94\u7528 pod \u5b89\u5168\u7b56\u7565\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,o.kt)("strong",{parentName:"p"},"\u22ee > \u7f16\u8f91\u914d\u7f6e"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728 ",(0,o.kt)("strong",{parentName:"p"},"Pod \u5b89\u5168\u7b56\u7565\u652f\u6301"),"\u4e2d\uff0c\u9009\u62e9",(0,o.kt)("strong",{parentName:"p"},"\u542f\u7528"),"\u3002"),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u6b64\u9009\u9879\u4ec5\u9002\u7528\u4e8e",(0,o.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/launch-kubernetes-with-rancher"},"\u7531 RKE \u914d\u7f6e\u7684\u96c6\u7fa4"),"\u3002")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u4ece",(0,o.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4 Pod \u5b89\u5168\u7b56\u7565"),"\u4e0b\u62c9\u5217\u8868\u4e2d\uff0c\u9009\u62e9\u8981\u5e94\u7528\u4e8e\u96c6\u7fa4\u7684\u7b56\u7565\u3002"),(0,o.kt)("p",{parentName:"li"},"Rancher \u652f\u6301\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"\u53d7\u9650"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"\u4e0d\u53d7\u9650"),"\u7684",(0,o.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies#%E9%BB%98%E8%AE%A4-psp"},"\u7b56\u7565"),"\uff0c\u4f60\u4e5f\u53ef\u4ee5",(0,o.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies#%E9%BB%98%E8%AE%A4-psp"},"\u521b\u5efa\u81ea\u5b9a\u4e49\u7b56\u7565"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u4fdd\u5b58"),"\u3002"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1apod \u5b89\u5168\u7b56\u7565\u5e94\u7528\u4e8e\u96c6\u7fa4\u548c\u96c6\u7fa4\u5185\u7684\u4efb\u4f55\u9879\u76ee\u3002"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5728\u5206\u914d pod \u5b89\u5168\u7b56\u7565\u4e4b\u524d\u5df2\u7ecf\u8fd0\u884c\u7684\u5de5\u4f5c\u8d1f\u8f7d\u662f\u4e0d\u53d7\u9650\u5236\u7684\u3002\u5373\u4f7f\u5b83\u4eec\u4e0d\u7b26\u5408\u4f60\u7684 pod \u5b89\u5168\u7b56\u7565\uff0c\u5728\u5206\u914d\u7b56\u7565\u4e4b\u524d\u8fd0\u884c\u7684\u5de5\u4f5c\u8d1f\u8f7d\u4e5f\u4f1a\u7ee7\u7eed\u8fd0\u884c\u3002"),(0,o.kt)("p",{parentName:"div"},"\u8981\u68c0\u67e5\u6b63\u5728\u8fd0\u884c\u7684\u5de5\u4f5c\u8d1f\u8f7d\u662f\u5426\u901a\u8fc7\u4e86\u4f60\u7684 pod \u5b89\u5168\u7b56\u7565\uff0c\u8bf7\u514b\u9686\u6216\u5347\u7ea7\u5b83\u3002"))))}m.isMDXComponent=!0}}]);