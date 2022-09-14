"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[59683],{3905:function(e,r,n){n.d(r,{Zo:function(){return h},kt:function(){return d}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),u=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},h=function(e){var r=u(e.components);return t.createElement(i.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||s[d]||c;return n?t.createElement(m,o(o({ref:r},h),{},{components:n})):t.createElement(m,o({ref:r},h))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=p;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<c;u++)o[u]=n[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},40225:function(e,r,n){n.r(r),n.d(r,{assets:function(){return h},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var t=n(87462),a=n(63366),c=(n(67294),n(3905)),o=["components"],l={title:"\u5378\u8f7d Rancher",weight:8010},i=void 0,u={unversionedId:"faq/rancher-is-no-longer-needed",id:"faq/rancher-is-no-longer-needed",title:"\u5378\u8f7d Rancher",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u679c\u4f60\u4e0d\u518d\u9700\u8981 Rancher\u3001\u4e0d\u60f3\u518d\u7531 Rancher \u7ba1\u7406\u96c6\u7fa4\u3001\u6216\u60f3\u5220\u9664 Rancher Server \u9700\u8981\u600e\u4e48\u505a\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/faq/rancher-is-no-longer-needed.md",sourceDirName:"faq",slug:"/faq/rancher-is-no-longer-needed",permalink:"/zh/faq/rancher-is-no-longer-needed",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/faq/rancher-is-no-longer-needed.md",tags:[],version:"current",lastUpdatedAt:1663174327,formattedLastUpdatedAt:"2022/9/14",frontMatter:{title:"\u5378\u8f7d Rancher",weight:8010},sidebar:"tutorialSidebar",previous:{title:"CNI \u7f51\u7edc\u63d2\u4ef6",permalink:"/zh/faq/container-network-interface-providers"},next:{title:"\u6545\u969c\u6392\u9664",permalink:"/zh/troubleshooting"}},h={},s=[{value:"\u5982\u679c Rancher Server \u88ab\u5220\u9664\uff0c\u4e0b\u6e38\u96c6\u7fa4\u4e2d\u7684\u5de5\u4f5c\u8d1f\u8f7d\u4f1a\u600e\u6837\uff1f",id:"\u5982\u679c-rancher-server-\u88ab\u5220\u9664\u4e0b\u6e38\u96c6\u7fa4\u4e2d\u7684\u5de5\u4f5c\u8d1f\u8f7d\u4f1a\u600e\u6837",level:3},{value:"\u5982\u679c\u5220\u9664\u4e86 Rancher Server\uff0c\u8be5\u5982\u4f55\u8bbf\u95ee\u4e0b\u6e38\u96c6\u7fa4\uff1f",id:"\u5982\u679c\u5220\u9664\u4e86-rancher-server\u8be5\u5982\u4f55\u8bbf\u95ee\u4e0b\u6e38\u96c6\u7fa4",level:3},{value:"\u5982\u679c\u6211\u4e0d\u60f3\u518d\u4f7f\u7528 Rancher \u4e86\u8be5\u600e\u4e48\u505a\uff1f",id:"\u5982\u679c\u6211\u4e0d\u60f3\u518d\u4f7f\u7528-rancher-\u4e86\u8be5\u600e\u4e48\u505a",level:3},{value:"\u5982\u679c\u6211\u4e0d\u60f3 Rancher \u7ba1\u7406\u6211\u7684\u6ce8\u518c\u96c6\u7fa4\u8be5\u600e\u4e48\u529e\uff1f",id:"\u5982\u679c\u6211\u4e0d\u60f3-rancher-\u7ba1\u7406\u6211\u7684\u6ce8\u518c\u96c6\u7fa4\u8be5\u600e\u4e48\u529e",level:3},{value:"\u5982\u679c\u6211\u4e0d\u60f3 Rancher \u7ba1\u7406\u6211\u7684 RKE \u96c6\u7fa4\u6216\u6258\u7ba1\u7684 Kubernetes \u96c6\u7fa4\u8be5\u600e\u4e48\u529e\uff1f",id:"\u5982\u679c\u6211\u4e0d\u60f3-rancher-\u7ba1\u7406\u6211\u7684-rke-\u96c6\u7fa4\u6216\u6258\u7ba1\u7684-kubernetes-\u96c6\u7fa4\u8be5\u600e\u4e48\u529e",level:3}],p={toc:s};function d(e){var r=e.components,n=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u679c\u4f60\u4e0d\u518d\u9700\u8981 Rancher\u3001\u4e0d\u60f3\u518d\u7531 Rancher \u7ba1\u7406\u96c6\u7fa4\u3001\u6216\u60f3\u5220\u9664 Rancher Server \u9700\u8981\u600e\u4e48\u505a\u3002"),(0,c.kt)("h3",{id:"\u5982\u679c-rancher-server-\u88ab\u5220\u9664\u4e0b\u6e38\u96c6\u7fa4\u4e2d\u7684\u5de5\u4f5c\u8d1f\u8f7d\u4f1a\u600e\u6837"},"\u5982\u679c Rancher Server \u88ab\u5220\u9664\uff0c\u4e0b\u6e38\u96c6\u7fa4\u4e2d\u7684\u5de5\u4f5c\u8d1f\u8f7d\u4f1a\u600e\u6837\uff1f"),(0,c.kt)("p",null,"\u5982\u679c Rancher \u5220\u9664\u4e86\u6216\u65e0\u6cd5\u6062\u590d\uff0cRancher \u7ba1\u7406\u7684\u4e0b\u6e38 Kubernetes \u96c6\u7fa4\u4e2d\u7684\u6240\u6709\u5de5\u4f5c\u8d1f\u8f7d\u5c06\u7ee7\u7eed\u6b63\u5e38\u8fd0\u884c\u3002"),(0,c.kt)("h3",{id:"\u5982\u679c\u5220\u9664\u4e86-rancher-server\u8be5\u5982\u4f55\u8bbf\u95ee\u4e0b\u6e38\u96c6\u7fa4"},"\u5982\u679c\u5220\u9664\u4e86 Rancher Server\uff0c\u8be5\u5982\u4f55\u8bbf\u95ee\u4e0b\u6e38\u96c6\u7fa4\uff1f"),(0,c.kt)("p",null,"\u5982\u679c\u5220\u9664\u4e86 Rancher\uff0c\u8bbf\u95ee\u4e0b\u6e38\u96c6\u7fa4\u7684\u65b9\u5f0f\u53d6\u51b3\u4e8e\u96c6\u7fa4\u7684\u7c7b\u578b\u548c\u96c6\u7fa4\u7684\u521b\u5efa\u65b9\u5f0f\u3002\u603b\u800c\u8a00\u4e4b\uff1a"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("strong",{parentName:"li"},"\u6ce8\u518c\u96c6\u7fa4"),"\uff1a\u96c6\u7fa4\u4e0d\u53d7\u5f71\u54cd\uff0c\u4f60\u53ef\u4ee5\u6ce8\u518c\u96c6\u7fa4\u524d\u7684\u65b9\u6cd5\u8bbf\u95ee\u8be5\u96c6\u7fa4\u3002"),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("strong",{parentName:"li"},"\u6258\u7ba1\u7684 Kubernetes \u96c6\u7fa4"),"\uff1a\u5982\u679c\u4f60\u5728 Kubernetes \u4e91\u63d0\u4f9b\u5546\uff08\u4f8b\u5982 EKS\u3001GKE \u6216 AKS\uff09\u4e2d\u521b\u5efa\u96c6\u7fa4\uff0c\u4f60\u53ef\u4ee5\u7ee7\u7eed\u4f7f\u7528\u63d0\u4f9b\u5546\u7684\u4e91\u51ed\u8bc1\u6765\u7ba1\u7406\u96c6\u7fa4\u3002"),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("strong",{parentName:"li"},"RKE \u96c6\u7fa4"),"\uff1a\u8981\u8bbf\u95ee ",(0,c.kt)("a",{parentName:"li",href:"/zh/pages-for-subheaders/launch-kubernetes-with-rancher"},"RKE \u96c6\u7fa4"),"\uff0c\u96c6\u7fa4\u5fc5\u987b\u542f\u7528\u4e86",(0,c.kt)("a",{parentName:"li",href:"/zh/pages-for-subheaders/rancher-manager-architecture#4-%E6%8E%88%E6%9D%83%E9%9B%86%E7%BE%A4%E7%AB%AF%E7%82%B9"},"\u6388\u6743\u96c6\u7fa4\u7aef\u70b9\uff08authorized cluster endpoint\uff0cACE\uff09"),"\uff0c\u800c\u4e14\u4f60\u5fc5\u987b\u4ece Rancher UI \u4e0b\u8f7d\u4e86\u96c6\u7fa4\u7684 kubeconfig \u6587\u4ef6\u3002RKE \u96c6\u7fa4\u9ed8\u8ba4\u542f\u7528\u6388\u6743\u96c6\u7fa4\u7aef\u70b9\u3002\u901a\u8fc7\u4f7f\u7528\u6b64\u7aef\u70b9\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 kubectl \u8bbf\u95ee\u4f60\u7684\u96c6\u7fa4\uff0c\u800c\u4e0d\u7528\u901a\u8fc7 Rancher Server \u7684",(0,c.kt)("a",{parentName:"li",href:"/zh/pages-for-subheaders/rancher-manager-architecture#1-%E8%AE%A4%E8%AF%81%E4%BB%A3%E7%90%86"},"\u8ba4\u8bc1\u4ee3\u7406"),"\u8fdb\u884c\u901a\u4fe1\u3002\u6709\u5173\u914d\u7f6e kubectl \u4ee5\u4f7f\u7528\u6388\u6743\u96c6\u7fa4\u7aef\u70b9\u7684\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605",(0,c.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig#%E7%9B%B4%E6%8E%A5%E4%BD%BF%E7%94%A8%E4%B8%8B%E6%B8%B8%E9%9B%86%E7%BE%A4%E8%BF%9B%E8%A1%8C%E8%BA%AB%E4%BB%BD%E9%AA%8C%E8%AF%81"},"\u4f7f\u7528 kubectl \u548c kubeconfig \u6587\u4ef6\u76f4\u63a5\u8bbf\u95ee\u96c6\u7fa4"),"\u3002\u8fd9\u4e9b\u96c6\u7fa4\u5c06\u4f7f\u7528\u5220\u9664 Rancher \u65f6\u914d\u7f6e\u7684\u8eab\u4efd\u9a8c\u8bc1\u5feb\u7167\u3002")),(0,c.kt)("h3",{id:"\u5982\u679c\u6211\u4e0d\u60f3\u518d\u4f7f\u7528-rancher-\u4e86\u8be5\u600e\u4e48\u505a"},"\u5982\u679c\u6211\u4e0d\u60f3\u518d\u4f7f\u7528 Rancher \u4e86\u8be5\u600e\u4e48\u505a\uff1f"),(0,c.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,c.kt)("div",{parentName:"div",className:"admonition-heading"},(0,c.kt)("h5",{parentName:"div"},(0,c.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,c.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,c.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,c.kt)("div",{parentName:"div",className:"admonition-content"},(0,c.kt)("p",{parentName:"div"},"\u4e4b\u524d\u63a8\u8350\u7684 ",(0,c.kt)("a",{parentName:"p",href:"/zh/reference-guides/system-tools"},"System Tools")," \u81ea 2022 \u5e74 6 \u6708\u8d77\u5df2\u5f03\u7528\u3002"))),(0,c.kt)("p",null,"\u5982\u679c\u4f60",(0,c.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"\u5728 Kubernetes \u96c6\u7fa4\u4e0a\u5b89\u88c5\u4e86 Rancher"),"\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher-cleanup"},"Rancher Cleanup")," \u5de5\u5177\u5220\u9664 Rancher\u3002"),(0,c.kt)("p",null,"\u4ece Rancher 2.5.8 \u5f00\u59cb\uff0c\u5728\u9ad8\u53ef\u7528\u6027 (HA) \u6a21\u5f0f\u4e0b\u5378\u8f7d Rancher \u8fd8\u5c06\u5220\u9664\u6240\u6709 ",(0,c.kt)("inlineCode",{parentName:"p"},"helm-operation-*")," Pod \u548c\u4ee5\u4e0b\u5e94\u7528\u7a0b\u5e8f\uff1a"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"fleet"),(0,c.kt)("li",{parentName:"ul"},"fleet-agent"),(0,c.kt)("li",{parentName:"ul"},"rancher-operator"),(0,c.kt)("li",{parentName:"ul"},"rancher-webhook")),(0,c.kt)("p",null,"\u81ea\u5b9a\u4e49\u8d44\u6e90 (CRD) \u548c\u81ea\u5b9a\u4e49\u547d\u540d\u7a7a\u95f4\u4ecd\u9700\u8981\u624b\u52a8\u5220\u9664\u3002"),(0,c.kt)("p",null,"\u5982\u679c\u4f60\u5728 Docker \u4e2d\u5b89\u88c5 Rancher\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7\u5220\u9664\u8fd0\u884c Rancher \u7684\u5355\u4e2a Docker \u5bb9\u5668\u6765\u5378\u8f7d Rancher\u3002"),(0,c.kt)("p",null,"\u79fb\u9664 Rancher \u4e0d\u4f1a\u5f71\u54cd\u5bfc\u5165\u7684\u96c6\u7fa4\u3002\u6709\u5173\u5176\u4ed6\u96c6\u7fa4\u7c7b\u578b\uff0c\u8bf7\u53c2\u8003",(0,c.kt)("a",{parentName:"p",href:"#%E5%A6%82%E6%9E%9C%E5%88%A0%E9%99%A4%E4%BA%86-rancher-server%EF%BC%8C%E8%AF%A5%E5%A6%82%E4%BD%95%E8%AE%BF%E9%97%AE%E4%B8%8B%E6%B8%B8%E9%9B%86%E7%BE%A4"},"\u79fb\u9664 Rancher \u540e\u8bbf\u95ee\u4e0b\u6e38\u96c6\u7fa4"),"\u3002"),(0,c.kt)("h3",{id:"\u5982\u679c\u6211\u4e0d\u60f3-rancher-\u7ba1\u7406\u6211\u7684\u6ce8\u518c\u96c6\u7fa4\u8be5\u600e\u4e48\u529e"},"\u5982\u679c\u6211\u4e0d\u60f3 Rancher \u7ba1\u7406\u6211\u7684\u6ce8\u518c\u96c6\u7fa4\u8be5\u600e\u4e48\u529e\uff1f"),(0,c.kt)("p",null,"\u5982\u679c\u4f60\u5728 Rancher UI \u4e2d\u5220\u9664\u4e86\u5df2\u6ce8\u518c\u7684\u96c6\u7fa4\uff0c\u5219\u8be5\u96c6\u7fa4\u5c06\u4e0e Rancher \u5206\u79bb\uff0c\u96c6\u7fa4\u4e0d\u4f1a\u53d1\u751f\u6539\u53d8\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u6ce8\u518c\u96c6\u7fa4\u4e4b\u524d\u7684\u65b9\u6cd5\u8bbf\u95ee\u8be5\u96c6\u7fa4\u3002"),(0,c.kt)("p",null,"\u8981\u5206\u79bb\u96c6\u7fa4\uff1a"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,c.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,c.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u8981\u4e0e Rancher \u5206\u79bb\u7684\u5df2\u6ce8\u518c\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,c.kt)("strong",{parentName:"li"},"\u22ee > \u5220\u9664"),"\u3002"),(0,c.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,c.kt)("strong",{parentName:"li"},"\u5220\u9664"),"\u3002")),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u6ce8\u518c\u7684\u96c6\u7fa4\u5df2\u4e0e Rancher \u5206\u79bb\uff0c\u5e76\u5728 Rancher \u5916\u6b63\u5e38\u8fd0\u884c\u3002"),(0,c.kt)("h3",{id:"\u5982\u679c\u6211\u4e0d\u60f3-rancher-\u7ba1\u7406\u6211\u7684-rke-\u96c6\u7fa4\u6216\u6258\u7ba1\u7684-kubernetes-\u96c6\u7fa4\u8be5\u600e\u4e48\u529e"},"\u5982\u679c\u6211\u4e0d\u60f3 Rancher \u7ba1\u7406\u6211\u7684 RKE \u96c6\u7fa4\u6216\u6258\u7ba1\u7684 Kubernetes \u96c6\u7fa4\u8be5\u600e\u4e48\u529e\uff1f"),(0,c.kt)("p",null,"\u76ee\u524d\uff0c\u6211\u4eec\u6ca1\u6709\u5c06\u8fd9\u4e9b\u96c6\u7fa4\u4ece Rancher \u4e2d\u5206\u79bb\u51fa\u6765\u7684\u529f\u80fd\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u201c\u5206\u79bb\u201d\u6307\u7684\u662f\u5c06 Rancher \u7ec4\u4ef6\u79fb\u9664\u51fa\u96c6\u7fa4\uff0c\u5e76\u72ec\u7acb\u4e8e Rancher \u7ba1\u7406\u5bf9\u96c6\u7fa4\u7684\u8bbf\u95ee\u3002"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/issues/25234"},"\u6b64 issue")," \u8ddf\u8e2a\u4e86\u5728\u6ca1\u6709 Rancher \u7684\u60c5\u51b5\u4e0b\u7ba1\u7406\u8fd9\u4e9b\u96c6\u7fa4\u7684\u529f\u80fd\u3002"),(0,c.kt)("p",null,"\u6709\u5173\u5982\u4f55\u5728\u5220\u9664 Rancher Server \u540e\u8bbf\u95ee\u96c6\u7fa4\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,c.kt)("a",{parentName:"p",href:"#%E5%A6%82%E6%9E%9C%E5%88%A0%E9%99%A4%E4%BA%86-rancher-server%EF%BC%8C%E8%AF%A5%E5%A6%82%E4%BD%95%E8%AE%BF%E9%97%AE%E4%B8%8B%E6%B8%B8%E9%9B%86%E7%BE%A4"},"\u672c\u8282"),"\u3002"))}d.isMDXComponent=!0}}]);