"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[71635],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66545:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"\u5e94\u7528\u6a21\u677f",weight:50},s=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/apply-templates",id:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/apply-templates",title:"\u5e94\u7528\u6a21\u677f",description:"\u4f60\u53ef\u4ee5\u4f7f\u7528\u4f60\u81ea\u5df1\u521b\u5efa\u7684 RKE \u6a21\u677f\u6765\u521b\u5efa\u96c6\u7fa4\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4e0e\u4f60\u5171\u4eab\u7684\u6a21\u677f\u6765\u521b\u5efa\u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/apply-templates.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/apply-templates",permalink:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/apply-templates",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/apply-templates.md",tags:[],version:"current",lastUpdatedAt:1663346276,formattedLastUpdatedAt:"2022/9/16",frontMatter:{title:"\u5e94\u7528\u6a21\u677f",weight:50},sidebar:"tutorialSidebar",previous:{title:"\u8986\u76d6\u6a21\u677f\u8bbe\u7f6e",permalink:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/override-template-settings"},next:{title:"RKE \u6a21\u677f\u548c\u57fa\u7840\u8bbe\u65bd",permalink:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/infrastructure"}},p={},c=[{value:"\u4f7f\u7528 RKE \u6a21\u677f\u521b\u5efa\u96c6\u7fa4",id:"\u4f7f\u7528-rke-\u6a21\u677f\u521b\u5efa\u96c6\u7fa4",level:3},{value:"\u66f4\u65b0\u4f7f\u7528 RKE \u6a21\u677f\u521b\u5efa\u7684\u96c6\u7fa4",id:"\u66f4\u65b0\u4f7f\u7528-rke-\u6a21\u677f\u521b\u5efa\u7684\u96c6\u7fa4",level:3},{value:"\u5c06\u73b0\u6709\u96c6\u7fa4\u8f6c\u6362\u4e3a\u4f7f\u7528 RKE \u6a21\u677f",id:"\u5c06\u73b0\u6709\u96c6\u7fa4\u8f6c\u6362\u4e3a\u4f7f\u7528-rke-\u6a21\u677f",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u4f60\u81ea\u5df1\u521b\u5efa\u7684 RKE \u6a21\u677f\u6765\u521b\u5efa\u96c6\u7fa4\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/access-or-share-templates"},"\u4e0e\u4f60\u5171\u4eab\u7684\u6a21\u677f"),"\u6765\u521b\u5efa\u96c6\u7fa4\u3002"),(0,o.kt)("p",null,"RKE \u6a21\u677f\u53ef\u4ee5\u5e94\u7528\u4e8e\u65b0\u96c6\u7fa4\u3002"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5",(0,o.kt)("a",{parentName:"p",href:"#%E5%B0%86%E7%8E%B0%E6%9C%89%E9%9B%86%E7%BE%A4%E8%BD%AC%E6%8D%A2%E4%B8%BA%E4%BD%BF%E7%94%A8-rke-%E6%A8%A1%E6%9D%BF"},"\u5c06\u73b0\u6709\u96c6\u7fa4\u7684\u914d\u7f6e\u4fdd\u5b58\u4e3a RKE \u6a21\u677f"),"\u3002\u8fd9\u6837\uff0c\u53ea\u6709\u6a21\u677f\u66f4\u65b0\u540e\u624d\u80fd\u66f4\u6539\u96c6\u7fa4\u7684\u8bbe\u7f6e\u3002"),(0,o.kt)("p",null,"\u4f60\u65e0\u6cd5\u5c06\u96c6\u7fa4\u66f4\u6539\u4e3a\u4f7f\u7528\u4e0d\u540c\u7684 RKE \u6a21\u677f\u3002\u4f60\u53ea\u80fd\u5c06\u96c6\u7fa4\u66f4\u65b0\u4e3a\u540c\u4e00\u6a21\u677f\u7684\u65b0\u7248\u672c\u3002"),(0,o.kt)("h3",{id:"\u4f7f\u7528-rke-\u6a21\u677f\u521b\u5efa\u96c6\u7fa4"},"\u4f7f\u7528 RKE \u6a21\u677f\u521b\u5efa\u96c6\u7fa4"),(0,o.kt)("p",null,"\u8981\u4f7f\u7528 RKE \u6a21\u677f\u6dfb\u52a0",(0,o.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/launch-kubernetes-with-rancher"},"\u7531\u57fa\u7840\u8bbe\u65bd\u63d0\u4f9b\u5546\u6258\u7ba1"),"\u7684\u96c6\u7fa4\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u64cd\u4f5c\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728",(0,o.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u5e76\u9009\u62e9\u57fa\u7840\u8bbe\u65bd\u63d0\u4f9b\u5546\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u96c6\u7fa4\u540d\u79f0\u548c\u8282\u70b9\u6a21\u677f\u8be6\u60c5\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8981\u4f7f\u7528 RKE \u6a21\u677f\uff0c\u8bf7\u5728",(0,o.kt)("strong",{parentName:"li"},"\u96c6\u7fa4\u9009\u9879"),"\u4e0b\uff0c\u9009\u4e2d",(0,o.kt)("strong",{parentName:"li"},"\u4f7f\u7528\u73b0\u6709 RKE \u6a21\u677f\u548c\u4fee\u8ba2\u7248"),"\u590d\u9009\u6846\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u4ece\u4e0b\u62c9\u83dc\u5355\u4e2d\u9009\u62e9 RKE \u6a21\u677f\u548c\u4fee\u8ba2\u7248\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u53ef\u9009\uff1a\u4f60\u53ef\u4ee5\u7f16\u8f91 RKE \u6a21\u677f\u6240\u6709\u8005\u5728\u521b\u5efa\u6a21\u677f\u65f6\u6807\u8bb0\u4e3a",(0,o.kt)("strong",{parentName:"li"},"\u5141\u8bb8\u7528\u6237\u8986\u76d6"),"\u7684\u4efb\u4f55\u8bbe\u7f6e\u3002\u5982\u679c\u4f60\u65e0\u6cd5\u66f4\u6539\u67d0\u4e9b\u8bbe\u7f6e\uff0c\u5219\u9700\u8981\u8054\u7cfb\u6a21\u677f\u6240\u6709\u8005\u4ee5\u83b7\u53d6\u6a21\u677f\u7684\u65b0\u4fee\u8ba2\u7248\u3002\u7136\u540e\uff0c\u4f60\u9700\u8981\u7f16\u8f91\u96c6\u7fa4\u6765\u5c06\u5176\u5347\u7ea7\u5230\u65b0\u7248\u672c\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u4ee5\u542f\u52a8\u96c6\u7fa4\u3002")),(0,o.kt)("h3",{id:"\u66f4\u65b0\u4f7f\u7528-rke-\u6a21\u677f\u521b\u5efa\u7684\u96c6\u7fa4"},"\u66f4\u65b0\u4f7f\u7528 RKE \u6a21\u677f\u521b\u5efa\u7684\u96c6\u7fa4"),(0,o.kt)("p",null,"\u6a21\u677f\u6240\u6709\u8005\u521b\u5efa RKE \u6a21\u677f\u65f6\uff0c\u6bcf\u4e2a\u8bbe\u7f6e\u5728 Rancher UI \u4e2d\u90fd\u6709\u4e00\u4e2a\u5f00\u5173\uff0c\u6307\u793a\u7528\u6237\u662f\u5426\u53ef\u4ee5\u8986\u76d6\u8be5\u8bbe\u7f6e\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u67d0\u4e2a\u8bbe\u7f6e\u5141\u8bb8\u7528\u6237\u8986\u76d6\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7",(0,o.kt)("a",{parentName:"li",href:"/zh/pages-for-subheaders/cluster-configuration"},"\u7f16\u8f91\u96c6\u7fa4"),"\u6765\u66f4\u65b0\u96c6\u7fa4\u4e2d\u7684\u8bbe\u7f6e\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u8be5\u5f00\u5173\u5904\u4e8e\u5173\u95ed\u72b6\u6001\uff0c\u5219\u9664\u975e\u96c6\u7fa4\u6240\u6709\u8005\u521b\u5efa\u4e86\u5141\u8bb8\u4f60\u8986\u76d6\u8fd9\u4e9b\u8bbe\u7f6e\u7684\u6a21\u677f\u4fee\u8ba2\u7248\uff0c\u5426\u5219\u4f60\u65e0\u6cd5\u66f4\u6539\u8fd9\u4e9b\u8bbe\u7f6e\u3002\u5982\u679c\u4f60\u65e0\u6cd5\u66f4\u6539\u67d0\u4e9b\u8bbe\u7f6e\uff0c\u5219\u9700\u8981\u8054\u7cfb\u6a21\u677f\u6240\u6709\u8005\u4ee5\u83b7\u53d6\u6a21\u677f\u7684\u65b0\u4fee\u8ba2\u7248\u3002")),(0,o.kt)("p",null,"\u5982\u679c\u96c6\u7fa4\u662f\u4f7f\u7528 RKE \u6a21\u677f\u521b\u5efa\u7684\uff0c\u4f60\u53ef\u4ee5\u7f16\u8f91\u96c6\u7fa4\uff0c\u6765\u5c06\u96c6\u7fa4\u66f4\u65b0\u4e3a\u6a21\u677f\u7684\u65b0\u7248\u672c\u3002"),(0,o.kt)("p",null,"\u73b0\u6709\u96c6\u7fa4\u7684\u8bbe\u7f6e\u53ef\u4ee5",(0,o.kt)("a",{parentName:"p",href:"#%E5%B0%86%E7%8E%B0%E6%9C%89%E9%9B%86%E7%BE%A4%E8%BD%AC%E6%8D%A2%E4%B8%BA%E4%BD%BF%E7%94%A8-rke-%E6%A8%A1%E6%9D%BF"},"\u4fdd\u5b58\u4e3a RKE \u6a21\u677f"),"\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f60\u8fd8\u53ef\u4ee5\u7f16\u8f91\u96c6\u7fa4\u4ee5\u5c06\u96c6\u7fa4\u66f4\u65b0\u4e3a\u6a21\u677f\u7684\u65b0\u7248\u672c\u3002"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u4f60\u65e0\u6cd5\u5c06\u96c6\u7fa4\u66f4\u6539\u4e3a\u4f7f\u7528\u4e0d\u540c\u7684 RKE \u6a21\u677f\u3002\u4f60\u53ea\u80fd\u5c06\u96c6\u7fa4\u66f4\u65b0\u4e3a\u540c\u4e00\u6a21\u677f\u7684\u65b0\u7248\u672c\u3002"))),(0,o.kt)("h3",{id:"\u5c06\u73b0\u6709\u96c6\u7fa4\u8f6c\u6362\u4e3a\u4f7f\u7528-rke-\u6a21\u677f"},"\u5c06\u73b0\u6709\u96c6\u7fa4\u8f6c\u6362\u4e3a\u4f7f\u7528 RKE \u6a21\u677f"),(0,o.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528\u73b0\u6709\u96c6\u7fa4\u521b\u5efa RKE \u6a21\u677f\u3002"),(0,o.kt)("p",null,"\u9664\u975e\u4f60\u5c06\u73b0\u6709\u96c6\u7fa4\u7684\u8bbe\u7f6e\u4fdd\u5b58\u4e3a RKE \u6a21\u677f\uff0c\u5426\u5219 RKE \u6a21\u677f\u4e0d\u80fd\u5e94\u7528\u4e8e\u73b0\u6709\u96c6\u7fa4\u3002\u8fd9\u5c06\u628a\u96c6\u7fa4\u7684\u8bbe\u7f6e\u5bfc\u51fa\u4e3a\u65b0\u7684 RKE \u6a21\u677f\uff0c\u5e76\u4e14\u5c06\u96c6\u7fa4\u7ed1\u5b9a\u5230\u8be5\u6a21\u677f\u3002\u7136\u540e\uff0c\u53ea\u6709",(0,o.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/manage-rke1-templates#%E6%9B%B4%E6%96%B0%E6%A8%A1%E6%9D%BF"},"\u66f4\u65b0\u4e86\u6a21\u677f"),"\u5e76\u4e14\u96c6\u7fa4\u5347\u7ea7\u5230",(0,o.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u66f4\u65b0\u7248\u672c\u7684\u6a21\u677f"),"\u65f6\uff0c\u96c6\u7fa4\u624d\u80fd\u6539\u53d8\u3002"),(0,o.kt)("p",null,"\u8981\u5c06\u73b0\u6709\u96c6\u7fa4\u8f6c\u6362\u4e3a\u4f7f\u7528 RKE \u6a21\u677f\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728",(0,o.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u8f6c\u5230\u8981\u8f6c\u6362\u4e3a\u4f7f\u7528 RKE \u6a21\u677f\u7684\u96c6\u7fa4\u3002\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"\u22ee > \u4fdd\u5b58\u4e3a RKE \u6a21\u677f"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u51fa\u73b0\u7684\u8868\u5355\u4e2d\u8f93\u5165\u6a21\u677f\u7684\u540d\u79f0\uff0c\u7136\u540e\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u521b\u5efa\u4e86\u4e00\u4e2a\u65b0\u7684 RKE \u6a21\u677f\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5c06\u96c6\u7fa4\u8f6c\u6362\u4e3a\u4f7f\u7528\u8be5\u65b0\u6a21\u677f\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u53ef\u4ee5",(0,o.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/apply-templates#%E4%BD%BF%E7%94%A8-rke-%E6%A8%A1%E6%9D%BF%E5%88%9B%E5%BB%BA%E9%9B%86%E7%BE%A4"},"\u4f7f\u7528\u65b0\u6a21\u677f\u521b\u5efa\u65b0\u96c6\u7fa4"),"\u3002")))}m.isMDXComponent=!0}}]);