"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[97838],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return s}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=d(n),s=a,k=m["".concat(p,".").concat(s)]||m[s]||c[s]||l;return n?r.createElement(k,i(i({ref:e},u),{},{components:n})):r.createElement(k,i({ref:e},u))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25001:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return c}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={title:"vSphere \u8282\u70b9\u6a21\u677f\u914d\u7f6e",weight:2},p=void 0,d={unversionedId:"reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere",id:"reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere",title:"vSphere \u8282\u70b9\u6a21\u677f\u914d\u7f6e",description:"\u8d26\u53f7\u8bbf\u95ee",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere.md",sourceDirName:"reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration",slug:"/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere",permalink:"/zh/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere.md",tags:[],version:"current",lastUpdatedAt:1663346276,formattedLastUpdatedAt:"2022/9/16",frontMatter:{title:"vSphere \u8282\u70b9\u6a21\u677f\u914d\u7f6e",weight:2},sidebar:"tutorialSidebar",previous:{title:"Azure \u8282\u70b9\u6a21\u677f\u914d\u7f6e",permalink:"/zh/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/azure"},next:{title:"Nutanix \u8282\u70b9\u6a21\u677f\u914d\u7f6e",permalink:"/zh/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/nutanix"}},u={},c=[{value:"\u8d26\u53f7\u8bbf\u95ee",id:"\u8d26\u53f7\u8bbf\u95ee",level:2},{value:"\u8c03\u5ea6",id:"\u8c03\u5ea6",level:2},{value:"\u5b9e\u4f8b\u9009\u9879",id:"\u5b9e\u4f8b\u9009\u9879",level:2},{value:"VM \u521b\u5efa\u65b9\u6cd5",id:"vm-\u521b\u5efa\u65b9\u6cd5",level:3},{value:"\u7f51\u7edc",id:"\u7f51\u7edc",level:2},{value:"\u8282\u70b9\u6807\u7b7e\u548c\u81ea\u5b9a\u4e49\u5c5e\u6027",id:"\u8282\u70b9\u6807\u7b7e\u548c\u81ea\u5b9a\u4e49\u5c5e\u6027",level:2},{value:"cloud-init",id:"cloud-init",level:2}],m={toc:c};function s(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u8d26\u53f7\u8bbf\u95ee"},"\u8d26\u53f7\u8bbf\u95ee"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e91\u51ed\u8bc1"),(0,l.kt)("td",{parentName:"tr",align:"center"},"*"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4f60\u7684 vSphere \u8d26\u53f7\u8bbf\u95ee\u4fe1\u606f\uff0c\u5b58\u50a8\u5728",(0,l.kt)("a",{parentName:"td",href:"/zh/reference-guides/user-settings/manage-cloud-credentials"},"\u4e91\u51ed\u8bc1"),"\u4e2d\u3002")))),(0,l.kt)("p",null,"\u4f60\u7684\u4e91\u51ed\u8bc1\u5177\u6709\u4ee5\u4e0b\u5b57\u6bb5\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u51ed\u8bc1\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"vCenter \u6216 ESXi Server"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f93\u5165 vCenter \u6216 ESXi \u4e3b\u673a\u540d/IP\u3002ESXi \u662f\u4f60\u521b\u5efa\u548c\u8fd0\u884c\u865a\u62df\u673a\u548c\u865a\u62df\u8bbe\u5907\u7684\u865a\u62df\u5316\u5e73\u53f0\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7 vCenter Server \u670d\u52a1\u6765\u7ba1\u7406\u7f51\u7edc\u4e2d\u8fde\u63a5\u7684\u591a\u4e2a\u4e3b\u673a\u5e76\u6c60\u5316\u4e3b\u673a\u8d44\u6e90\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7aef\u53e3"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\uff1a\u914d\u7f6e vCenter \u6216 ESXi Server \u7684\u7aef\u53e3\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d\u548c\u5bc6\u7801"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f60\u7684 vSphere \u767b\u5f55\u7528\u6237\u540d\u548c\u5bc6\u7801\u3002")))),(0,l.kt)("h2",{id:"\u8c03\u5ea6"},"\u8c03\u5ea6"),(0,l.kt)("p",null,"\u9009\u62e9\u865a\u62df\u673a\u8981\u8c03\u5ea6\u5230\u54ea\u4e2a\u865a\u62df\u673a\u76d1\u63a7\u7a0b\u5e8f\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8c03\u5ea6"),"\u4e2d\u7684\u5b57\u6bb5\u5e94\u4f7f\u7528 vSphere \u4e2d\u53ef\u7528\u7684\u6570\u636e\u4e2d\u5fc3\u548c\u5176\u4ed6\u8ba1\u5212\u9009\u9879\u81ea\u52a8\u586b\u5145\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u89e3\u91ca"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u4e2d\u5fc3"),(0,l.kt)("td",{parentName:"tr",align:null},"*"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9009\u62e9\u8981\u8c03\u5ea6 VM \u7684\u6570\u636e\u4e2d\u5fc3\u7684\u540d\u79f0/\u8def\u5f84\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8d44\u6e90\u6c60"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u8981\u5728\u5176\u4e2d\u8c03\u5ea6 VM \u7684\u8d44\u6e90\u6c60\u540d\u79f0\u3002\u8d44\u6e90\u6c60\u53ef\u5bf9\u72ec\u7acb\u4e3b\u673a\u6216\u96c6\u7fa4\u7684\u53ef\u7528 CPU \u548c\u5185\u5b58\u8d44\u6e90\u8fdb\u884c\u5206\u533a\uff0c\u4e5f\u53ef\u4ee5\u5d4c\u5957\u4f7f\u7528\u3002\u5982\u679c\u662f\u72ec\u7acb ESXi\uff0c\u8bf7\u7559\u7a7a\u3002\u5982\u679c\u672a\u6307\u5b9a\uff0c\u5219\u4f7f\u7528\u9ed8\u8ba4\u8d44\u6e90\u6c60\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5b58\u50a8"),(0,l.kt)("td",{parentName:"tr",align:null},"*"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u4f60\u6709\u6570\u636e\u5b58\u50a8\u96c6\u7fa4\uff0c\u5219\u53ef\u4ee5\u6253\u5f00",(0,l.kt)("strong",{parentName:"td"},"\u6570\u636e\u5b58\u50a8"),"\u5b57\u6bb5\u3002\u6b64\u5b57\u6bb5\u5141\u8bb8\u4f60\u9009\u62e9\u8981\u5c06 VM \u8c03\u5ea6\u5230\u54ea\u4e2a\u6570\u636e\u5b58\u50a8\u96c6\u7fa4\u3002\u5982\u679c\u8be5\u5b57\u6bb5\u672a\u6253\u5f00\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u5355\u4e2a\u78c1\u76d8\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u6587\u4ef6\u5939"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u4e2d\u5fc3\u4e2d\u7528\u4e8e\u521b\u5efa VM \u7684\u6587\u4ef6\u5939\u7684\u540d\u79f0\u3002\u5fc5\u987b\u5df2\u7ecf\u5b58\u5728\u3002\u6b64\u4e0b\u62c9\u83dc\u5355\u4e2d\u7684 VM \u6587\u4ef6\u5939\u76f4\u63a5\u5bf9\u5e94\u4e8e vSphere \u4e2d\u7684 VM \u6587\u4ef6\u5939\u3002\u5728 vSphere \u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u6587\u4ef6\u5939\u540d\u79f0\u5e94\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"td"},"vm/")," \u5f00\u5934\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u673a"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u8c03\u5ea6 VM \u7684\u4e3b\u673a\u7cfb\u7edf\u7684 IP\u3002\u5982\u679c\u662f\u72ec\u7acb ESXi \u6216\u5177\u6709 DRS\uff08\u5206\u5e03\u5f0f\u8d44\u6e90\u8c03\u5ea6\u5668\uff09\u7684\u96c6\u7fa4\uff0c\u5c06\u6b64\u5b57\u6bb5\u7559\u7a7a\u3002\u5982\u679c\u6307\u5b9a\uff0c\u5c06\u4f7f\u7528\u4e3b\u673a\u7cfb\u7edf\u7684\u6c60\uff0c\u800c\u5ffd\u7565",(0,l.kt)("strong",{parentName:"td"},"\u8d44\u6e90\u6c60"),"\u53c2\u6570\u3002")))),(0,l.kt)("h2",{id:"\u5b9e\u4f8b\u9009\u9879"},"\u5b9e\u4f8b\u9009\u9879"),(0,l.kt)("p",null,"\u5728",(0,l.kt)("strong",{parentName:"p"},"\u5b9e\u4f8b\u53c2\u6570"),"\u4e2d\uff0c\u914d\u7f6e\u6b64\u6a21\u677f\u521b\u5efa\u7684 VM \u7684 vCPU \u6570\u91cf\u3001\u5185\u5b58\u548c\u78c1\u76d8\u5927\u5c0f\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"CPU"),(0,l.kt)("td",{parentName:"tr",align:"center"},"*"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8981\u5206\u914d\u7ed9 VM \u7684 vCPU \u6570\u91cf\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5185\u5b58"),(0,l.kt)("td",{parentName:"tr",align:"center"},"*"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8981\u5206\u914d\u7ed9 VM \u7684\u5185\u5b58\u91cf\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u78c1\u76d8"),(0,l.kt)("td",{parentName:"tr",align:"center"},"*"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8981\u6302\u8f7d\u5230 VM \u7684\u78c1\u76d8\u5927\u5c0f\uff08\u4ee5 MB \u4e3a\u5355\u4f4d\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u521b\u5efa\u65b9\u6cd5"),(0,l.kt)("td",{parentName:"tr",align:"center"},"*"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5728\u8282\u70b9\u4e0a\u8bbe\u7f6e\u64cd\u4f5c\u7cfb\u7edf\u7684\u65b9\u6cd5\u3002\u53ef\u4ee5\u4f7f\u7528 ISO \u6216 VM \u6a21\u677f\u5b89\u88c5\u64cd\u4f5c\u7cfb\u7edf\u3002\u6839\u636e\u521b\u5efa\u65b9\u6cd5\uff0c\u4f60\u8fd8\u5fc5\u987b\u6307\u5b9a VM \u6a21\u677f\u3001\u5185\u5bb9\u5e93\u3001\u73b0\u6709 VM \u6216 ISO\u3002\u6709\u5173\u521b\u5efa\u65b9\u6cd5\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"td",href:"#vm-%E5%88%9B%E5%BB%BA%E6%96%B9%E6%B3%95"},"VM \u521b\u5efa\u65b9\u6cd5"),"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Cloud Init"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"cloud-config.yml")," \u6587\u4ef6\u7684 URL \u6216\u7528\u4e8e\u914d\u7f6e VM \u7684 URL\u3002\u6b64\u6587\u4ef6\u5141\u8bb8\u8fdb\u4e00\u6b65\u5b9a\u5236\u64cd\u4f5c\u7cfb\u7edf\uff0c\u4f8b\u5982\u7f51\u7edc\u914d\u7f6e\u3001DNS \u670d\u52a1\u5668\u6216\u7cfb\u7edf\u5b88\u62a4\u7a0b\u5e8f\u3002\u64cd\u4f5c\u7cfb\u7edf\u5fc5\u987b\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"td"},"cloud-init"),"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7f51\u7edc"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8981\u6302\u8f7d VM \u7684\u7f51\u7edc\u7684\u540d\u79f0\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"guestinfo \u914d\u7f6e\u53c2\u6570"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"VM \u7684\u5176\u4ed6\u914d\u7f6e\u53c2\u6570\u3002\u8fd9\u4e9b\u53c2\u6570\u5bf9\u5e94 vSphere \u63a7\u5236\u53f0\u4e2d\u7684",(0,l.kt)("a",{parentName:"td",href:"https://kb.vmware.com/s/article/1016098"},"\u9ad8\u7ea7\u8bbe\u7f6e"),"\u3002\u793a\u4f8b\u7528\u4f8b\u5305\u62ec\u63d0\u4f9b RancherOS ",(0,l.kt)("a",{parentName:"td",href:"%7B%7B%3Cbaseurl%3E%7D%7D/os/v1.x/en/installation/cloud/vmware-esxi/#vmware-guestinfo"},"guestinfo")," \u53c2\u6570\uff0c\u6216\u4e3a VM \u542f\u7528\u78c1\u76d8 UUID (",(0,l.kt)("inlineCode",{parentName:"td"},"disk.EnableUUID=TRUE"),")\u3002")))),(0,l.kt)("h3",{id:"vm-\u521b\u5efa\u65b9\u6cd5"},"VM \u521b\u5efa\u65b9\u6cd5"),(0,l.kt)("p",null,"\u5728",(0,l.kt)("strong",{parentName:"p"},"\u521b\u5efa\u65b9\u6cd5"),"\u5b57\u6bb5\u4e2d\uff0c\u914d\u7f6e\u7528\u4e8e\u5728 vSphere \u4e2d\u914d\u7f6e VM \u7684\u65b9\u6cd5\u3002\u53ef\u7528\u7684\u9009\u9879\u5305\u62ec\u521b\u5efa\u4ece RancherOS ISO \u542f\u52a8\u7684 VM\uff0c\u6216\u901a\u8fc7\u4ece\u73b0\u6709\u865a\u62df\u673a\u6216 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.vm_admin.doc/GUID-F7BF0E6B-7C4F-4E46-8BBF-76229AEA7220.html"},"VM \u6a21\u677f"),"\u514b\u9686\u6765\u521b\u5efa VM\u3002"),(0,l.kt)("p",null,"\u73b0\u6709 VM \u6216\u6a21\u677f\u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55\u73b0\u4ee3 Linux \u64cd\u4f5c\u7cfb\u7edf\uff0c\u8be5\u64cd\u4f5c\u7cfb\u7edf\u914d\u7f6e\u4e3a\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://cloudinit.readthedocs.io/en/latest/topics/datasources/nocloud.html"},"NoCloud \u6570\u636e\u6e90"),"\u6765\u652f\u6301 ",(0,l.kt)("a",{parentName:"p",href:"https://cloudinit.readthedocs.io/en/latest/"},"cloud-init"),"\u3002"),(0,l.kt)("p",null,"\u9009\u62e9\u521b\u5efa VM \u7684\u65b9\u5f0f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u4f7f\u7528\u6a21\u677f\u90e8\u7f72\uff1a\u6570\u636e\u4e2d\u5fc3"),"\uff1a\u9009\u62e9\u5b58\u5728\u4e8e\u6240\u9009\u6570\u636e\u4e2d\u5fc3\u7684 VM \u6a21\u677f\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u4f7f\u7528\u6a21\u677f\u90e8\u7f72\uff1a\u5185\u5bb9\u5e93"),"\uff1a\u9996\u5148\u9009\u62e9\u5305\u542b\u4f60\u7684\u6a21\u677f\u7684",(0,l.kt)("a",{parentName:"li",href:"https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.vm_admin.doc/GUID-254B2CE8-20A8-43F0-90E8-3F6776C2C896.html"},"\u5185\u5bb9\u5e93"),"\uff0c\u7136\u540e\u4ece\u586b\u5145\u5217\u8868",(0,l.kt)("strong",{parentName:"li"},"\u5e93\u6a21\u677f"),"\u4e2d\u9009\u62e9\u6a21\u677f\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u514b\u9686\u73b0\u6709\u7684\u865a\u62df\u673a"),"\uff1a\u5728",(0,l.kt)("strong",{parentName:"li"},"\u865a\u62df\u673a"),"\u5b57\u6bb5\u4e2d\u9009\u62e9\u4e00\u4e2a\u73b0\u6709\u865a\u62df\u673a\uff0c\u65b0\u865a\u62df\u673a\u5c06\u514b\u9686\u81ea\u8be5\u865a\u62df\u673a\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u4f7f\u7528 boot2docker ISO \u5b89\u88c5"),"\uff1a\u786e\u4fdd ",(0,l.kt)("strong",{parentName:"li"},"OS ISO URL")," \u5b57\u6bb5\u5305\u542b RancherOS \u7684 VMware ISO \u7248\u672c\u7684 URL (",(0,l.kt)("inlineCode",{parentName:"li"},"rancheros-vmware.iso"),")\u3002\u8bf7\u6ce8\u610f\uff0c\u8fd0\u884c Rancher Server \u8282\u70b9\u5fc5\u987b\u80fd\u8bbf\u95ee\u8be5 URL\u3002")),(0,l.kt)("h2",{id:"\u7f51\u7edc"},"\u7f51\u7edc"),(0,l.kt)("p",null,"\u8282\u70b9\u6a21\u677f\u5141\u8bb8\u4f60\u4e3a\u865a\u62df\u673a\u914d\u7f6e\u591a\u4e2a\u7f51\u7edc\u3002\u5728",(0,l.kt)("strong",{parentName:"p"},"\u7f51\u7edc"),"\u5b57\u6bb5\u4e2d\uff0c\u4f60\u53ef\u4ee5\u5355\u51fb",(0,l.kt)("strong",{parentName:"p"},"\u6dfb\u52a0\u7f51\u7edc"),"\u6765\u6dfb\u52a0 vSphere \u4e2d\u53ef\u7528\u7684\u4efb\u4f55\u7f51\u7edc\u3002"),(0,l.kt)("h2",{id:"\u8282\u70b9\u6807\u7b7e\u548c\u81ea\u5b9a\u4e49\u5c5e\u6027"},"\u8282\u70b9\u6807\u7b7e\u548c\u81ea\u5b9a\u4e49\u5c5e\u6027"),(0,l.kt)("p",null,"\u6807\u7b7e\u7528\u4e8e\u5411 vSphere \u5bf9\u8c61\u6e05\u5355\u4e2d\u7684\u5bf9\u8c61\u6dfb\u52a0\u5143\u6570\u636e\uff0c\u4ee5\u4fbf\u5bf9\u5bf9\u8c61\u8fdb\u884c\u6392\u5e8f\u548c\u641c\u7d22\u3002"),(0,l.kt)("p",null,"\u4f60\u7684\u6240\u6709 vSphere \u6807\u7b7e\u90fd\u5c06\u663e\u793a\u4e3a\u8282\u70b9\u6a21\u677f\u4e2d\u53ef\u4f9b\u9009\u62e9\u7684\u9009\u9879\u3002"),(0,l.kt)("p",null,"\u5728\u81ea\u5b9a\u4e49\u5c5e\u6027\u4e2d\uff0cRancher \u4f1a\u8ba9\u4f60\u9009\u62e9\u4f60\u5df2\u7ecf\u5728 vSphere \u4e2d\u8bbe\u7f6e\u7684\u6240\u6709\u81ea\u5b9a\u4e49\u5c5e\u6027\u3002\u81ea\u5b9a\u4e49\u5c5e\u6027\u662f\u952e\uff0c\u4f60\u53ef\u4ee5\u4e3a\u6bcf\u4e2a\u5c5e\u6027\u8f93\u5165\u503c\u3002"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u81ea\u5b9a\u4e49\u5c5e\u6027\u662f\u4e00\u9879\u65e7\u7248\u529f\u80fd\uff0c\u6700\u7ec8\u5c06\u4ece vSphere \u4e2d\u5220\u9664\u3002"))),(0,l.kt)("h2",{id:"cloud-init"},"cloud-init"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://cloudinit.readthedocs.io/en/latest/"},"Cloud-init")," \u5141\u8bb8\u4f60\u5728\u9996\u6b21\u542f\u52a8\u65f6\u5e94\u7528\u914d\u7f6e\uff0c\u4ece\u800c\u521d\u59cb\u5316\u8282\u70b9\u3002\u8fd9\u53ef\u80fd\u6d89\u53ca\u521b\u5efa\u7528\u6237\u3001\u6388\u6743 SSH \u5bc6\u94a5\u6216\u8bbe\u7f6e\u7f51\u7edc\u4e4b\u7c7b\u7684\u64cd\u4f5c\u3002"),(0,l.kt)("p",null,"\u8981\u4f7f\u7528 cloud-init \u521d\u59cb\u5316\uff0c\u8bf7\u4f7f\u7528\u6709\u6548\u7684 YAML \u8bed\u6cd5\u521b\u5efa\u4e00\u4e2a cloud config \u6587\u4ef6\uff0c\u5e76\u5c06\u6587\u4ef6\u5185\u5bb9\u7c98\u8d34\u5230 ",(0,l.kt)("strong",{parentName:"p"},"Cloud Init")," \u5b57\u6bb5\u4e2d\u3002\u8981\u83b7\u53d6\u652f\u6301\u7684 cloud config \u6307\u4ee4\u7684\u6ce8\u91ca\u793a\u4f8b\u96c6\uff0c\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"p",href:"https://cloudinit.readthedocs.io/en/latest/topics/examples.html"},"cloud-init \u6587\u6863"),"\u3002"),(0,l.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u4f7f\u7528 ISO \u521b\u5efa\u65b9\u6cd5\u65f6\u4e0d\u652f\u6301 cloud-init\u3002"))}s.isMDXComponent=!0}}]);