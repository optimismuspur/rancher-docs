"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[17301],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=s(r),f=a,m=l["".concat(u,".").concat(f)]||l[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=l;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},94636:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],c={title:"Rancher CI/CD \u6d41\u6c34\u7ebf",description:"\u4f7f\u7528 Rancher \u7684 CI/CD \u6d41\u6c34\u7ebf\u81ea\u52a8\u68c0\u51fa\u4ee3\u7801\u3001\u8fd0\u884c\u6784\u5efa\u6216\u811a\u672c\u3001\u53d1\u5e03 Docker \u955c\u50cf\u4ee5\u53ca\u5411\u7528\u6237\u90e8\u7f72\u8f6f\u4ef6",weight:4e3},u=void 0,s={unversionedId:"how-to-guides/advanced-user-guides/manage-projects/ci-cd-pipelines",id:"how-to-guides/advanced-user-guides/manage-projects/ci-cd-pipelines",title:"Rancher CI/CD \u6d41\u6c34\u7ebf",description:"\u4f7f\u7528 Rancher \u7684 CI/CD \u6d41\u6c34\u7ebf\u81ea\u52a8\u68c0\u51fa\u4ee3\u7801\u3001\u8fd0\u884c\u6784\u5efa\u6216\u811a\u672c\u3001\u53d1\u5e03 Docker \u955c\u50cf\u4ee5\u53ca\u5411\u7528\u6237\u90e8\u7f72\u8f6f\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/manage-projects/ci-cd-pipelines.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-projects",slug:"/how-to-guides/advanced-user-guides/manage-projects/ci-cd-pipelines",permalink:"/zh/how-to-guides/advanced-user-guides/manage-projects/ci-cd-pipelines",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/manage-projects/ci-cd-pipelines.md",tags:[],version:"current",lastUpdatedAt:1663346276,formattedLastUpdatedAt:"2022/9/16",frontMatter:{title:"Rancher CI/CD \u6d41\u6c34\u7ebf",description:"\u4f7f\u7528 Rancher \u7684 CI/CD \u6d41\u6c34\u7ebf\u81ea\u52a8\u68c0\u51fa\u4ee3\u7801\u3001\u8fd0\u884c\u6784\u5efa\u6216\u811a\u672c\u3001\u53d1\u5e03 Docker \u955c\u50cf\u4ee5\u53ca\u5411\u7528\u6237\u90e8\u7f72\u8f6f\u4ef6",weight:4e3},sidebar:"tutorialSidebar",previous:{title:"\u547d\u540d\u7a7a\u95f4",permalink:"/zh/how-to-guides/advanced-user-guides/manage-projects/manage-namespaces"},next:{title:"Pod \u5b89\u5168\u7b56\u7565",permalink:"/zh/how-to-guides/advanced-user-guides/manage-projects/manage-pod-security-policies"}},p={},d=[],l={toc:d};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 Rancher \u4e0e GitHub \u4ed3\u5e93\u96c6\u6210\uff0c\u4ece\u800c\u8bbe\u7f6e\u6301\u7eed\u96c6\u6210\uff08CI\uff09\u6d41\u6c34\u7ebf\u3002"),(0,o.kt)("p",null,"\u914d\u7f6e Rancher \u548c GitHub \u540e\uff0c\u4f60\u53ef\u4ee5\u90e8\u7f72\u8fd0\u884c Jenkins \u7684\u5bb9\u5668\u6765\u81ea\u52a8\u5316\u6267\u884c\u6d41\u6c34\u7ebf\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5c06\u5e94\u7528\u4ee3\u7801\u6784\u5efa\u4e3a\u955c\u50cf\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1\u6784\u5efa\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5c06\u6784\u5efa\u7684\u955c\u50cf\u90e8\u7f72\u5230\u96c6\u7fa4\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u5355\u5143\u6d4b\u8bd5\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u56de\u5f52\u6d4b\u8bd5\u3002")),(0,o.kt)("p",null,"\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/pipelines"},"\u6d41\u6c34\u7ebf"),"\u3002"))}f.isMDXComponent=!0}}]);