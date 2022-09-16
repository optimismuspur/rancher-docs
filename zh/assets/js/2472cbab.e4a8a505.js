"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[3987],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),k=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=k(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=k(n),c=r,s=d["".concat(u,".").concat(c)]||d[c]||m[c]||i;return n?a.createElement(s,l(l({ref:t},p),{},{components:n})):a.createElement(s,l({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var k=2;k<i;k++)l[k]=n[k];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45611:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return o},metadata:function(){return k},toc:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"API \u4ee4\u724c",weight:1},u=void 0,k={unversionedId:"reference-guides/about-the-api/api-tokens",id:"reference-guides/about-the-api/api-tokens",title:"API \u4ee4\u724c",description:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u67d0\u4e9b\u96c6\u7fa4\u7ea7\u522b\u7684 API \u4ee4\u724c\u662f\u4f7f\u7528\u65e0\u9650\u671f TTL\uff08ttl=0\uff09\u751f\u6210\u7684\u3002\u6362\u8a00\u4e4b\uff0c\u9664\u975e\u4f60\u8ba9\u4ee4\u724c\u5931\u6548\uff0c\u5426\u5219 ttl=0 \u7684 API \u4ee4\u724c\u6c38\u8fdc\u4e0d\u4f1a\u8fc7\u671f\u3002\u4ee4\u724c\u4e0d\u4f1a\u56e0\u4e3a\u66f4\u6539\u5bc6\u7801\u800c\u5931\u6548\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference-guides/about-the-api/api-tokens.md",sourceDirName:"reference-guides/about-the-api",slug:"/reference-guides/about-the-api/api-tokens",permalink:"/zh/reference-guides/about-the-api/api-tokens",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/about-the-api/api-tokens.md",tags:[],version:"current",lastUpdatedAt:1663346276,formattedLastUpdatedAt:"2022/9/16",frontMatter:{title:"API \u4ee4\u724c",weight:1},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/zh/pages-for-subheaders/about-the-api"},next:{title:"\u96c6\u7fa4\u5de5\u5177\uff1aLogging\uff0cMonitoring \u548c\u53ef\u89c6\u5316",permalink:"/zh/reference-guides/rancher-cluster-tools"}},p={},m=[{value:"\u5220\u9664\u4ee4\u724c",id:"\u5220\u9664\u4ee4\u724c",level:3},{value:"\u5728 Kubeconfig \u4ee4\u724c\u4e0a\u8bbe\u7f6e TTL",id:"\u5728-kubeconfig-\u4ee4\u724c\u4e0a\u8bbe\u7f6e-ttl",level:3},{value:"\u5728\u751f\u6210\u7684 Kubeconfig \u4e2d\u7981\u7528\u4ee4\u724c",id:"\u5728\u751f\u6210\u7684-kubeconfig-\u4e2d\u7981\u7528\u4ee4\u724c",level:3},{value:"\u4ee4\u724c\u54c8\u5e0c",id:"\u4ee4\u724c\u54c8\u5e0c",level:3},{value:"\u4ee4\u724c\u8bbe\u7f6e",id:"\u4ee4\u724c\u8bbe\u7f6e",level:3},{value:"auth-user-session-ttl-minutes",id:"auth-user-session-ttl-minutes",level:4},{value:"kubeconfig-default-token-TTL-minutes",id:"kubeconfig-default-token-ttl-minutes",level:4},{value:"kubeconfig-token-ttl-minutes",id:"kubeconfig-token-ttl-minutes",level:4},{value:"auth-token-max-ttl-minutes",id:"auth-token-max-ttl-minutes",level:4},{value:"kubeconfig-generate-token",id:"kubeconfig-generate-token",level:4}],d={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u67d0\u4e9b\u96c6\u7fa4\u7ea7\u522b\u7684 API \u4ee4\u724c\u662f\u4f7f\u7528\u65e0\u9650\u671f TTL\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"ttl=0"),"\uff09\u751f\u6210\u7684\u3002\u6362\u8a00\u4e4b\uff0c\u9664\u975e\u4f60\u8ba9\u4ee4\u724c\u5931\u6548\uff0c\u5426\u5219 ",(0,i.kt)("inlineCode",{parentName:"p"},"ttl=0")," \u7684 API \u4ee4\u724c\u6c38\u8fdc\u4e0d\u4f1a\u8fc7\u671f\u3002\u4ee4\u724c\u4e0d\u4f1a\u56e0\u4e3a\u66f4\u6539\u5bc6\u7801\u800c\u5931\u6548\u3002"),(0,i.kt)("p",null,"\u8981\u505c\u7528 API \u4ee4\u724c\uff0c\u4f60\u53ef\u4ee5\u5220\u9664\u4ee4\u724c\u6216\u505c\u7528\u7528\u6237\u8d26\u53f7\u3002"),(0,i.kt)("h3",{id:"\u5220\u9664\u4ee4\u724c"},"\u5220\u9664\u4ee4\u724c"),(0,i.kt)("p",null,"\u8981\u5220\u9664\u4ee4\u724c\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u8f6c\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"https://<Rancher-Server-IP>/v3/tokens"),"\uff0c\u5728 Rancher API \u89c6\u56fe\u4e2d\u67e5\u770b\u5305\u542b\u6240\u6709\u4ee4\u724c\u7684\u5217\u8868\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u901a\u8fc7 ID \u8bbf\u95ee\u8981\u5220\u9664\u7684\u4ee4\u724c\u3002\u4f8b\u5982\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"https://<Rancher-Server-IP>/v3/tokens/kubectl-shell-user-vqkqt"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,i.kt)("strong",{parentName:"p"},"\u5220\u9664"),"\u3002"))),(0,i.kt)("p",null,"\u4ee5\u4e0b\u662f\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"ttl=0")," \u751f\u6210\u7684\u5b8c\u6574\u4ee4\u724c\u5217\u8868\uff1a"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u4ee4\u724c"),(0,i.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"kubeconfig-*")),(0,i.kt)("td",{parentName:"tr",align:null},"Kubeconfig \u4ee4\u724c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"kubectl-shell-*")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5728\u6d4f\u89c8\u5668\u4e2d\u8bbf\u95ee ",(0,i.kt)("inlineCode",{parentName:"td"},"kubectl")," shell")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"agent-*")),(0,i.kt)("td",{parentName:"tr",align:null},"Agent deployment \u4ee4\u724c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"compose-token-*")),(0,i.kt)("td",{parentName:"tr",align:null},"compose \u4ee4\u724c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"helm-token-*")),(0,i.kt)("td",{parentName:"tr",align:null},"Helm Chart deployment \u4ee4\u724c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"*-pipeline*")),(0,i.kt)("td",{parentName:"tr",align:null},"\u9879\u76ee\u6d41\u6c34\u7ebf\u4ee4\u724c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"telemetry-*")),(0,i.kt)("td",{parentName:"tr",align:null},"\u9065\u6d4b\u4ee4\u724c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"drain-node-*")),(0,i.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u6e05\u7a7a\u7684\u4ee4\u724c\uff08\u7531\u4e8e\u6ca1\u6709\u539f\u751f Kubernetes API\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"td"},"kubectl")," \u6765\u6e05\u7a7a\uff09")))),(0,i.kt)("h3",{id:"\u5728-kubeconfig-\u4ee4\u724c\u4e0a\u8bbe\u7f6e-ttl"},"\u5728 Kubeconfig \u4ee4\u724c\u4e0a\u8bbe\u7f6e TTL"),(0,i.kt)("p",null,"\u7ba1\u7406\u5458\u53ef\u4ee5\u5728 Kubeconfig \u4ee4\u724c\u4e0a\u8bbe\u7f6e\u5168\u5c40\u5b58\u6d3b\u65f6\u95f4 (time-to-live\uff0cTTL)\u3002\u5982\u9700\u66f4\u6539\u9ed8\u8ba4 kubeconfig TTL\uff0c\u4f60\u53ef\u4ee5\u5bfc\u822a\u5230\u5168\u5c40\u8bbe\u7f6e\u5e76\u5c06 ",(0,i.kt)("a",{parentName:"p",href:"#kubeconfig-default-token-ttl-minutes"},(0,i.kt)("inlineCode",{parentName:"a"},"kubeconfig-default-token-ttl-minutes"))," \u8bbe\u7f6e\u4e3a\u6240\u9700\u7684\u6301\u7eed\u65f6\u95f4\uff08\u5355\u4f4d\uff1a\u5206\u949f\uff09\u3002",(0,i.kt)("a",{parentName:"p",href:"#kubeconfig-default-token-ttl-minutes"},(0,i.kt)("inlineCode",{parentName:"a"},"kubeconfig-default-token-ttl-minutes"))," \u7684\u9ed8\u8ba4\u503c\u4e3a 0\uff0c\u8868\u793a\u4ee4\u724c\u6c38\u4e0d\u8fc7\u671f\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u9664\u4e86\u7531 CLI \u521b\u5efa\u7684\u7528\u4e8e",(0,i.kt)("a",{parentName:"p",href:"#%E5%9C%A8%E7%94%9F%E6%88%90%E7%9A%84-kubeconfig-%E4%B8%AD%E7%A6%81%E7%94%A8%E4%BB%A4%E7%89%8C"},"\u751f\u6210 kubeconfig \u4ee4\u724c"),"\u7684\u4ee4\u724c\u4e4b\u5916\uff0c\u6240\u6709 kubeconfig \u4ee4\u724c\u90fd\u4f7f\u7528\u6b64\u8bbe\u7f6e\u3002"))),(0,i.kt)("h3",{id:"\u5728\u751f\u6210\u7684-kubeconfig-\u4e2d\u7981\u7528\u4ee4\u724c"},"\u5728\u751f\u6210\u7684 Kubeconfig \u4e2d\u7981\u7528\u4ee4\u724c"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"kubeconfig-generate-token")," \u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\u3002\u6b64\u8bbe\u7f6e\u8ba9 Rancher \u4e0d\u518d\u5728\u7528\u6237\u5355\u51fb\u4e0b\u8f7d kubeconfig \u6587\u4ef6\u65f6\u81ea\u52a8\u751f\u6210\u4ee4\u724c\u3002\u5982\u679c\u505c\u7528\u6b64\u8bbe\u7f6e\uff0c\u751f\u6210\u7684 kubeconfig \u5c06\u5f15\u7528 ",(0,i.kt)("a",{parentName:"p",href:"/zh/reference-guides/cli-with-rancher/kubectl-utility#%E4%BD%BF%E7%94%A8-kubectl-%E5%92%8C-kubeconfig-%E4%BB%A4%E7%89%8C-%E8%BF%9B%E8%A1%8C-ttl-%E8%AE%A4%E8%AF%81"},"Rancher CLI")," \u6765\u68c0\u7d22\u96c6\u7fa4\u7684\u77ed\u671f\u4ee4\u724c\u3002\u5f53\u8fd9\u4e2a kubeconfig \u5728\u5ba2\u6237\u7aef\uff08\u4f8b\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl"),"\uff09\u4e2d\u4f7f\u7528\u65f6\uff0c\u4f60\u9700\u8981\u5b89\u88c5 Rancher CLI \u6765\u5b8c\u6210\u767b\u5f55\u8bf7\u6c42\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"kubeconfig-token-ttl-minutes")," \u8bbe\u7f6e\u4e3a\u6240\u9700\u7684\u65f6\u957f\uff08\u5355\u4f4d\uff1a\u5206\u949f\uff09\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"kubeconfig-token-ttl-minutes")," \u9ed8\u8ba4\u8bbe\u7f6e\u4e3a 960\uff08\u5373 16 \u5c0f\u65f6\uff09\u3002"))),(0,i.kt)("h3",{id:"\u4ee4\u724c\u54c8\u5e0c"},"\u4ee4\u724c\u54c8\u5e0c"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u542f\u7528\u4ee4\u724c\u54c8\u5e0c\uff0c\u4ee4\u724c\u5c06\u4f7f\u7528 SHA256 \u7b97\u6cd5\u8fdb\u884c\u5355\u5411\u54c8\u5e0c\u3002\u8fd9\u662f\u4e00\u4e2a\u4e0d\u53ef\u9006\u7684\u64cd\u4f5c\uff0c\u4e00\u65e6\u542f\u7528\uff0c\u6b64\u529f\u80fd\u5c06\u65e0\u6cd5\u7981\u7528\u3002\u5728\u542f\u7528\u529f\u80fd\u6216\u5728\u6d4b\u8bd5\u73af\u5883\u4e2d\u8bc4\u4f30\u4e4b\u524d\uff0c\u5efa\u8bae\u4f60\u5148\u8fdb\u884c\u5907\u4efd\u3002"),(0,i.kt)("p",null,"\u8981\u542f\u7528\u4ee4\u724c\u54c8\u5e0c\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/enable-experimental-features"},"\u672c\u8282"),"\u3002"),(0,i.kt)("p",null,"\u6b64\u529f\u80fd\u5c06\u5f71\u54cd\u6240\u6709\u4ee4\u724c\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Kubeconfig \u4ee4\u724c"),(0,i.kt)("li",{parentName:"ul"},"\u6301\u6709\u8005\u4ee4\u724c API \u5bc6\u94a5/\u8c03\u7528"),(0,i.kt)("li",{parentName:"ul"},"\u5185\u90e8\u64cd\u4f5c\u4f7f\u7528\u7684\u4ee4\u724c")),(0,i.kt)("h3",{id:"\u4ee4\u724c\u8bbe\u7f6e"},"\u4ee4\u724c\u8bbe\u7f6e"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u5168\u5c40\u8bbe\u7f6e\u4f1a\u5f71\u54cd Rancher \u4ee4\u724c\u7684\u884c\u4e3a\uff1a"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u8bbe\u7f6e"),(0,i.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#auth-user-session-ttl-minutes"},(0,i.kt)("inlineCode",{parentName:"a"},"auth-user-session-ttl-minutes"))),(0,i.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u8ba4\u8bc1\u4f1a\u8bdd\u4ee4\u724c\u7684 TTL\uff08\u5355\u4f4d\uff1a\u5206\u949f\uff09\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#kubeconfig-default-token-ttl-minutes"},(0,i.kt)("inlineCode",{parentName:"a"},"kubeconfig-default-token-TTL-minutes"))),(0,i.kt)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4 TTL\uff0c\u5e94\u7528\u4e8e\u6240\u6709 kubeconfig \u4ee4\u724c\uff08\u9664\u4e86",(0,i.kt)("a",{parentName:"td",href:"#%E5%9C%A8%E7%94%9F%E6%88%90%E7%9A%84-kubeconfig-%E4%B8%AD%E7%A6%81%E7%94%A8%E4%BB%A4%E7%89%8C"},"\u7531 Rancher CLI \u751f\u6210\u7684\u4ee4\u724c"),"\uff09\u3002",(0,i.kt)("strong",{parentName:"td"},"\u6b64\u8bbe\u7f6e\u4ece 2.6.6 \u7248\u672c\u5f00\u59cb\u5f15\u5165\u3002"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#kubeconfig-token-ttl-minutes"},(0,i.kt)("inlineCode",{parentName:"a"},"kubeconfig-token-ttl-minutes"))),(0,i.kt)("td",{parentName:"tr",align:null},"\u5728 CLI \u4e2d\u751f\u6210\u7684\u4ee4\u724c TTL\u3002",(0,i.kt)("strong",{parentName:"td"},"\u81ea 2.6.6 \u8d77\u5df2\u5f03\u7528\uff0c\u5e76\u5c06\u5728 2.8.0 \u4e2d\u5220\u9664"),"\u3002\u8bf7\u77e5\u6089\uff0c",(0,i.kt)("inlineCode",{parentName:"td"},"kubeconfig-default-token-TTL-minutes")," \u5c06\u7528\u4e8e\u6240\u6709 kubeconfig \u4ee4\u724c\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#auth-token-max-ttl-minutes"},(0,i.kt)("inlineCode",{parentName:"a"},"auth-token-max-ttl-minutes"))),(0,i.kt)("td",{parentName:"tr",align:null},"\u9664\u4e86\u7531 ",(0,i.kt)("a",{parentName:"td",href:"#auth-user-session-ttl-minutes"},(0,i.kt)("inlineCode",{parentName:"a"},"auth-user-session-ttl-minutes"))," \u63a7\u5236\u7684\u4ee4\u724c\u5916\uff0c\u6240\u6709\u4ee4\u724c\u7684\u6700\u5927 TTL\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#kubeconfig-generate-token"},(0,i.kt)("inlineCode",{parentName:"a"},"kubeconfig-generate-token"))),(0,i.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u4e3a true\uff0c\u5219\u5728\u7528\u6237\u4e0b\u8f7d kubeconfig \u65f6\u81ea\u52a8\u751f\u6210\u4ee4\u724c\u3002")))),(0,i.kt)("h4",{id:"auth-user-session-ttl-minutes"},"auth-user-session-ttl-minutes"),(0,i.kt)("p",null,"\u5b58\u6d3b\u65f6\u95f4\uff08TTL\uff09\uff08\u5355\u4f4d\uff1a\u5206\u949f\uff09\uff0c\u7528\u4e8e\u786e\u5b9a\u7528\u6237\u8eab\u4efd\u9a8c\u8bc1\u4f1a\u8bdd\u4ee4\u724c\u7684\u5230\u671f\u65f6\u95f4\u3002\u8fc7\u671f\u540e\uff0c\u7528\u6237\u5c06\u9700\u8981\u767b\u5f55\u5e76\u83b7\u53d6\u65b0\u4ee4\u724c\u3002\u6b64\u8bbe\u7f6e\u4e0d\u53d7 ",(0,i.kt)("a",{parentName:"p",href:"#auth-token-max-ttl-minutes"},(0,i.kt)("inlineCode",{parentName:"a"},"auth-token-max-ttl-minutes"))," \u7684\u5f71\u54cd\u3002\u4f1a\u8bdd\u4ee4\u724c\u662f\u5728\u7528\u6237\u767b\u5f55 Rancher \u65f6\u521b\u5efa\u7684\u3002"),(0,i.kt)("h4",{id:"kubeconfig-default-token-ttl-minutes"},"kubeconfig-default-token-TTL-minutes"),(0,i.kt)("p",null,"\u5b58\u6d3b\u65f6\u95f4\uff08TTL\uff09\uff08\u5355\u4f4d\uff1a\u5206\u949f\uff09\uff0c\u7528\u4e8e\u786e\u5b9a kubeconfig \u4ee4\u724c\u7684\u5230\u671f\u65f6\u95f4\u3002\u4ee4\u724c\u8fc7\u671f\u540e\uff0cAPI \u5c06\u62d2\u7edd\u4ee4\u724c\u3002\u6b64\u8bbe\u7f6e\u7684\u503c\u4e0d\u80fd\u5927\u4e8e ",(0,i.kt)("a",{parentName:"p",href:"#auth-token-max-ttl-minutes"},(0,i.kt)("inlineCode",{parentName:"a"},"auth-token-max-ttl-minutes"))," \u7684\u503c\u3002\u6b64\u8bbe\u7f6e\u9002\u7528\u4e8e\u5728\u8bf7\u6c42\u7684 kubeconfig \u6587\u4ef6\u4e2d\u751f\u6210\u7684\u4ee4\u724c\uff0c\u4e0d\u5305\u62ec",(0,i.kt)("a",{parentName:"p",href:"#%E5%9C%A8%E7%94%9F%E6%88%90%E7%9A%84-kubeconfig-%E4%B8%AD%E7%A6%81%E7%94%A8%E4%BB%A4%E7%89%8C"},"\u7531 Rancher CLI \u751f\u6210\u7684"),"\u4ee4\u724c\u3002\n",(0,i.kt)("strong",{parentName:"p"},"\u6b64\u8bbe\u7f6e\u4ece 2.6.6 \u7248\u672c\u5f00\u59cb\u5f15\u5165"),"\u3002"),(0,i.kt)("h4",{id:"kubeconfig-token-ttl-minutes"},"kubeconfig-token-ttl-minutes"),(0,i.kt)("p",null,"\u5b58\u6d3b\u65f6\u95f4\uff08TTL\uff09\uff08\u5355\u4f4d\uff1a\u5206\u949f\uff09\uff0c\u7528\u4e8e\u786e\u5b9a\u7531 CLI \u751f\u6210\u7684 kubeconfig \u4ee4\u724c\u7684\u5230\u671f\u65f6\u95f4\u3002\u5f53 ",(0,i.kt)("a",{parentName:"p",href:"#kubeconfig-generate-token"},(0,i.kt)("inlineCode",{parentName:"a"},"kubeconfig-generate-token"))," \u8bbe\u4e3a false \u65f6\uff0c\u5219\u7531 CLI \u751f\u6210\u4ee4\u724c\u3002\u4ee4\u724c\u8fc7\u671f\u540e\uff0cAPI \u5c06\u62d2\u7edd\u4ee4\u724c\u3002\u6b64\u8bbe\u7f6e\u7684\u503c\u4e0d\u80fd\u5927\u4e8e ",(0,i.kt)("a",{parentName:"p",href:"#auth-token-max-ttl-minutes"},(0,i.kt)("inlineCode",{parentName:"a"},"auth-token-max-ttl-minutes"))," \u7684\u503c\u3002\n",(0,i.kt)("strong",{parentName:"p"},"\u81ea\u7248\u672c 2.6.6 \u8d77\u5df2\u5f03\u7528\uff0c\u5e76\u5c06\u5728 2.8.0 \u4e2d\u5220\u9664\u3002\u8bf7\u77e5\u6089\uff0c\u6b64\u8bbe\u7f6e\u5c06\u88ab ",(0,i.kt)("a",{parentName:"strong",href:"#kubeconfig-default-token-ttl-minutes"},(0,i.kt)("inlineCode",{parentName:"a"},"kubeconfig-default-token-TTL-minutes"))," \u7684\u503c\u66ff\u6362"),"\u3002"),(0,i.kt)("h4",{id:"auth-token-max-ttl-minutes"},"auth-token-max-ttl-minutes"),(0,i.kt)("p",null,"\u8eab\u4efd\u9a8c\u8bc1\u4ee4\u724c\u7684\u6700\u5927\u751f\u5b58\u65f6\u95f4 (TTL)\uff08\u5355\u4f4d\uff1a\u5206\u949f\uff09\u3002\u5982\u679c\u7528\u6237\u5c1d\u8bd5\u521b\u5efa\u4e00\u4e2a TTL \u5927\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"auth-token-max-ttl-minutes")," \u7684\u4ee4\u724c\uff0cRancher \u4f1a\u5c06\u4ee4\u724c TTL \u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"auth-token-max-ttl-minutes")," \u7684\u503c\u3002\u8eab\u4efd\u9a8c\u8bc1\u4ee4\u724c\u662f\u4e3a\u9a8c\u8bc1 API \u8bf7\u6c42\u800c\u521b\u5efa\u7684\u3002\n",(0,i.kt)("strong",{parentName:"p"},"2.6.6 \u7248\u672c\u66f4\u6539\uff1a\u9002\u7528\u4e8e\u6240\u6709 kubeconfig \u4ee4\u724c\u548c API \u4ee4\u724c\u3002")),(0,i.kt)("h4",{id:"kubeconfig-generate-token"},"kubeconfig-generate-token"),(0,i.kt)("p",null,"\u5982\u679c\u8bbe\u7f6e\u4e3a true\uff0c\u5219\u901a\u8fc7 UI \u8bf7\u6c42\u7684 kubeconfig \u5c06\u5305\u542b\u4e00\u4e2a\u6709\u6548\u7684\u4ee4\u724c\u3002\u5982\u679c\u8bbe\u7f6e\u4e3a false\uff0ckubeconfig \u5c06\u5305\u542b\u4e00\u4e2a\u4f7f\u7528 Rancher CLI \u63d0\u793a\u7528\u6237\u767b\u5f55\u7684\u547d\u4ee4\u3002\u7136\u540e\uff0c",(0,i.kt)("a",{parentName:"p",href:"/zh/reference-guides/cli-with-rancher/kubectl-utility#%E4%BD%BF%E7%94%A8-kubectl-%E5%92%8C-kubeconfig-%E4%BB%A4%E7%89%8C-%E8%BF%9B%E8%A1%8C-ttl-%E8%AE%A4%E8%AF%81"},"CLI \u5c06\u4e3a\u7528\u6237\u68c0\u7d22\u548c\u7f13\u5b58\u4ee4\u724c"),"\u3002"))}c.isMDXComponent=!0}}]);