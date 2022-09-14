"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[523],{3905:function(e,t,r){r.d(t,{Zo:function(){return i},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(o,".").concat(f)]||d[f]||p[f]||s;return r?n.createElement(m,u(u({ref:t},i),{},{components:r})):n.createElement(m,u({ref:t},i))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,u=new Array(s);u[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var c=2;c<s;c++)u[c]=r[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},29379:function(e,t,r){r.r(t),r.d(t,{assets:function(){return i},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),u=["components"],l={title:"Cluster Autoscaler",weight:1},o=void 0,c={unversionedId:"pages-for-subheaders/install-cluster-autoscaler",id:"pages-for-subheaders/install-cluster-autoscaler",title:"Cluster Autoscaler",description:"\u5728\u672c\u6587\u4e2d\uff0c\u4f60\u5c06\u5b66\u4e60\u5982\u4f55\u4f7f\u7528 AWS EC2 Auto Scaling \u7ec4\u5728 Rancher \u81ea\u5b9a\u4e49\u96c6\u7fa4\u4e0a\u5b89\u88c5\u548c\u4f7f\u7528 Kubernetes cluster-autoscaler\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/pages-for-subheaders/install-cluster-autoscaler.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/install-cluster-autoscaler",permalink:"/zh/pages-for-subheaders/install-cluster-autoscaler",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/install-cluster-autoscaler.md",tags:[],version:"current",lastUpdatedAt:1663174327,formattedLastUpdatedAt:"2022/9/14",frontMatter:{title:"Cluster Autoscaler",weight:1},sidebar:"tutorialSidebar",previous:{title:"\u5c06\u7528\u6237\u6dfb\u52a0\u5230\u96c6\u7fa4",permalink:"/zh/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/add-users-to-clusters"},next:{title:"\u901a\u8fc7 AWS EC2 Auto Scaling \u7ec4\u4f7f\u7528 Cluster Autoscaler",permalink:"/zh/how-to-guides/advanced-user-guides/manage-clusters/install-cluster-autoscaler/use-aws-ec2-auto-scaling-groups"}},i={},p=[{value:"\u5728 Amazon \u4e0a\u8bbe\u7f6e Cluster Autoscaler",id:"\u5728-amazon-\u4e0a\u8bbe\u7f6e-cluster-autoscaler",level:3}],d={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,u);return(0,s.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u5728\u672c\u6587\u4e2d\uff0c\u4f60\u5c06\u5b66\u4e60\u5982\u4f55\u4f7f\u7528 AWS EC2 Auto Scaling \u7ec4\u5728 Rancher \u81ea\u5b9a\u4e49\u96c6\u7fa4\u4e0a\u5b89\u88c5\u548c\u4f7f\u7528 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/"},"Kubernetes cluster-autoscaler"),"\u3002"),(0,s.kt)("p",null,"Cluster Autoscaler \u662f\u4e00\u4e2a\u81ea\u52a8\u8c03\u6574 Kubernetes \u96c6\u7fa4\u5927\u5c0f\u7684\u5de5\u5177\u3002\u8be5\u5de5\u5177\u5728\u6ee1\u8db3\u4ee5\u4e0b\u6761\u4ef6\u4e4b\u4e00\u65f6\u80fd\u81ea\u52a8\u8c03\u6574\u96c6\u7fa4\u5927\u5c0f\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u4e2d\u6709 Pod \u56e0\u8d44\u6e90\u4e0d\u8db3\u800c\u65e0\u6cd5\u8fd0\u884c\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u4e2d\u6709\u4e00\u4e9b\u8282\u70b9\u957f\u65f6\u95f4\u672a\u5f97\u5230\u5145\u5206\u5229\u7528\uff0c\u800c\u4e14\u5b83\u4eec\u7684 Pod \u53ef\u4ee5\u653e\u5230\u5176\u4ed6\u73b0\u6709\u8282\u70b9\u4e0a\u3002")),(0,s.kt)("p",null,"\u4e3a\u9632\u6b62\u4f60\u7684 pod \u88ab\u9a71\u9010\uff0c\u8bf7\u5728\u4f60\u7684 pod \u89c4\u8303\u4e2d\u8bbe\u7f6e ",(0,s.kt)("inlineCode",{parentName:"p"},"priorityClassName: system-cluster-critical")," \u5c5e\u6027\u3002"),(0,s.kt)("p",null,"Cluster Autoscaler \u8fd0\u884c\u5728 Kubernetes master \u8282\u70b9\u4e0a\u3002\u5b83\u53ef\u4ee5\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"kube-system")," \u547d\u540d\u7a7a\u95f4\u4e2d\u8fd0\u884c\u3002Cluster Autoscaler \u4e0d\u4f1a\u7f29\u51cf\u8fd0\u884c\u975e\u955c\u50cf ",(0,s.kt)("inlineCode",{parentName:"p"},"kube-system")," pod \u7684\u8282\u70b9\u3002"),(0,s.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 worker \u8282\u70b9\u4e0a\u8fd0\u884c Cluster Autoscaler \u7684\u81ea\u5b9a\u4e49 deployment\uff0c\u4f46\u9700\u8981\u5c0f\u5fc3\u4ee5\u4fdd\u8bc1 Cluster Autoscaler \u80fd\u6b63\u5e38\u8fd0\u884c\u3002"),(0,s.kt)("h1",{id:"\u4e91\u63d0\u4f9b\u5546"},"\u4e91\u63d0\u4f9b\u5546"),(0,s.kt)("p",null,"Cluster Autoscaler \u4e3a\u4e0d\u540c\u7684\u4e91\u63d0\u4f9b\u5546\u63d0\u4f9b\u652f\u6301\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/autoscaler/tree/master/cluster-autoscaler#deployment"},"Cluster Autoscaler \u652f\u6301\u7684\u4e91\u63d0\u4f9b\u5546"),"\u3002"),(0,s.kt)("h3",{id:"\u5728-amazon-\u4e0a\u8bbe\u7f6e-cluster-autoscaler"},"\u5728 Amazon \u4e0a\u8bbe\u7f6e Cluster Autoscaler"),(0,s.kt)("p",null,"\u6709\u5173\u5728 Amazon \u4e0a\u8fd0\u884c Cluster Autoscaler \u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,s.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/manage-clusters/install-cluster-autoscaler/use-aws-ec2-auto-scaling-groups"},"\u6b64\u9875\u9762"),"\u3002"))}f.isMDXComponent=!0}}]);