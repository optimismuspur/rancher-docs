"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[33607],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,m=u["".concat(c,".").concat(h)]||u[h]||s[h]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},74497:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"\u8bc1\u4e66\u6545\u969c\u6392\u9664",weight:4},c=void 0,p={unversionedId:"getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/certificate-troubleshooting",id:"getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/certificate-troubleshooting",title:"\u8bc1\u4e66\u6545\u969c\u6392\u9664",description:"\u5982\u4f55\u786e\u5b9a\u6211\u7684\u8bc1\u4e66\u683c\u5f0f\u662f\u5426\u4e3a PEM\uff1f",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/certificate-troubleshooting.md",sourceDirName:"getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker",slug:"/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/certificate-troubleshooting",permalink:"/zh/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/certificate-troubleshooting",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/certificate-troubleshooting.md",tags:[],version:"current",lastUpdatedAt:1663346276,formattedLastUpdatedAt:"2022/9/16",frontMatter:{title:"\u8bc1\u4e66\u6545\u969c\u6392\u9664",weight:4},sidebar:"tutorialSidebar",previous:{title:"\u56de\u6eda Docker \u5b89\u88c5\u7684 Rancher",permalink:"/zh/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/roll-back-docker-installed-rancher"},next:{title:"\u4f7f\u7528 HTTP \u4ee3\u7406\u5b89\u88c5 Rancher",permalink:"/zh/pages-for-subheaders/rancher-behind-an-http-proxy"}},d={},s=[{value:"\u5982\u4f55\u786e\u5b9a\u6211\u7684\u8bc1\u4e66\u683c\u5f0f\u662f\u5426\u4e3a PEM\uff1f",id:"\u5982\u4f55\u786e\u5b9a\u6211\u7684\u8bc1\u4e66\u683c\u5f0f\u662f\u5426\u4e3a-pem",level:3},{value:"\u5c06 PKCS8 \u8bc1\u4e66\u5bc6\u94a5\u8f6c\u6362\u4e3a PKCS1",id:"\u5c06-pkcs8-\u8bc1\u4e66\u5bc6\u94a5\u8f6c\u6362\u4e3a-pkcs1",level:3},{value:"\u6dfb\u52a0\u4e2d\u95f4\u8bc1\u4e66\u7684\u987a\u5e8f\u662f\u4ec0\u4e48\uff1f",id:"\u6dfb\u52a0\u4e2d\u95f4\u8bc1\u4e66\u7684\u987a\u5e8f\u662f\u4ec0\u4e48",level:3},{value:"\u5982\u4f55\u9a8c\u8bc1\u6211\u7684\u8bc1\u4e66\u94fe\uff1f",id:"\u5982\u4f55\u9a8c\u8bc1\u6211\u7684\u8bc1\u4e66\u94fe",level:3}],u={toc:s};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u5982\u4f55\u786e\u5b9a\u6211\u7684\u8bc1\u4e66\u683c\u5f0f\u662f\u5426\u4e3a-pem"},"\u5982\u4f55\u786e\u5b9a\u6211\u7684\u8bc1\u4e66\u683c\u5f0f\u662f\u5426\u4e3a PEM\uff1f"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u7279\u5f81\u8bc6\u522b PEM \u683c\u5f0f\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u5f00\u59cb\u7684\u6807\u5934\uff1a",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"-----BEGIN CERTIFICATE-----\n"))),(0,o.kt)("li",{parentName:"ul"},"\u8868\u5934\u540e\u8ddf\u4e00\u957f\u4e32\u5b57\u7b26\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u7ed3\u675f\u7684\u9875\u811a\uff1a",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"-----END CERTIFICATE-----\n")))),(0,o.kt)("p",null,"PEM \u8bc1\u4e66\u793a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"----BEGIN CERTIFICATE-----\nMIIGVDCCBDygAwIBAgIJAMiIrEm29kRLMA0GCSqGSIb3DQEBCwUAMHkxCzAJBgNV\n... more lines\nVWQqljhfacYPgp8KJUJENQ9h5hZ2nSCrI+W00Jcw4QcEdCI8HL5wmg==\n-----END CERTIFICATE-----\n")),(0,o.kt)("p",null,"PEM \u8bc1\u4e66\u5bc6\u94a5\u793a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"-----BEGIN RSA PRIVATE KEY-----\nMIIGVDCCBDygAwIBAgIJAMiIrEm29kRLMA0GCSqGSIb3DQEBCwUAMHkxCzAJBgNV\n... more lines\nVWQqljhfacYPgp8KJUJENQ9h5hZ2nSCrI+W00Jcw4QcEdCI8HL5wmg==\n-----END RSA PRIVATE KEY-----\n")),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u7684\u5bc6\u94a5\u4e0e\u4ee5\u4e0b\u793a\u4f8b\u7c7b\u4f3c\uff0c\u8bf7\u53c2\u89c1",(0,o.kt)("a",{parentName:"p",href:"#%E5%B0%86-pkcs8-%E8%AF%81%E4%B9%A6%E5%AF%86%E9%92%A5%E8%BD%AC%E6%8D%A2%E4%B8%BA-pkcs1"},"\u5c06 PKCS8 \u8bc1\u4e66\u5bc6\u94a5\u8f6c\u6362\u4e3a PKCS1"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"-----BEGIN PRIVATE KEY-----\nMIIGVDCCBDygAwIBAgIJAMiIrEm29kRLMA0GCSqGSIb3DQEBCwUAMHkxCzAJBgNV\n... more lines\nVWQqljhfacYPgp8KJUJENQ9h5hZ2nSCrI+W00Jcw4QcEdCI8HL5wmg==\n-----END PRIVATE KEY-----\n")),(0,o.kt)("h3",{id:"\u5c06-pkcs8-\u8bc1\u4e66\u5bc6\u94a5\u8f6c\u6362\u4e3a-pkcs1"},"\u5c06 PKCS8 \u8bc1\u4e66\u5bc6\u94a5\u8f6c\u6362\u4e3a PKCS1"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f PKCS8 \u8bc1\u4e66\u5bc6\u94a5\u6587\u4ef6\uff0cRancher \u5c06\u6253\u5370\u4ee5\u4e0b\u65e5\u5fd7\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ListenConfigController cli-config [listener] failed with : failed to read private key: asn1: structure error: tags don't match (2 vs {class:0 tag:16 length:13 isCompound:true})\n")),(0,o.kt)("p",null,"\u4e3a\u4e86\u80fd\u6b63\u5e38\u5de5\u4f5c\uff0c\u4f60\u9700\u8981\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u5c06\u5bc6\u94a5\u4ece PKCS8 \u8f6c\u6362\u4e3a PKCS1\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"openssl rsa -in key.pem -out convertedkey.pem\n")),(0,o.kt)("p",null,"\u4f60\u53ef\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"convertedkey.pem")," \u4f5c\u4e3a Rancher \u8bc1\u4e66\u5bc6\u94a5\u6587\u4ef6\u3002"),(0,o.kt)("h3",{id:"\u6dfb\u52a0\u4e2d\u95f4\u8bc1\u4e66\u7684\u987a\u5e8f\u662f\u4ec0\u4e48"},"\u6dfb\u52a0\u4e2d\u95f4\u8bc1\u4e66\u7684\u987a\u5e8f\u662f\u4ec0\u4e48\uff1f"),(0,o.kt)("p",null,"\u6dfb\u52a0\u8bc1\u4e66\u7684\u987a\u5e8f\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"-----BEGIN CERTIFICATE-----\n%YOUR_CERTIFICATE%\n-----END CERTIFICATE-----\n-----BEGIN CERTIFICATE-----\n%YOUR_INTERMEDIATE_CERTIFICATE%\n-----END CERTIFICATE-----\n")),(0,o.kt)("h3",{id:"\u5982\u4f55\u9a8c\u8bc1\u6211\u7684\u8bc1\u4e66\u94fe"},"\u5982\u4f55\u9a8c\u8bc1\u6211\u7684\u8bc1\u4e66\u94fe\uff1f"),(0,o.kt)("p",null,"\u4f60\u53ef\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"openssl")," \u4e8c\u8fdb\u5236\u6587\u4ef6\u6765\u9a8c\u8bc1\u8bc1\u4e66\u94fe\u3002\u5982\u679c\u547d\u4ee4\u7684\u8f93\u51fa\u4ee5 ",(0,o.kt)("inlineCode",{parentName:"p"},"Verify return code: 0 (ok)")," \u7ed3\u5c3e\uff08\u53c2\u89c1\u4ee5\u4e0b\u793a\u4f8b\uff09\uff0c\u4f60\u7684\u8bc1\u4e66\u94fe\u662f\u6709\u6548\u7684\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"ca.pem")," \u6587\u4ef6\u5fc5\u987b\u4e0e\u4f60\u6dfb\u52a0\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher/rancher")," \u5bb9\u5668\u4e2d\u7684\u6587\u4ef6\u4e00\u81f4\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528\u7531\u53ef\u4fe1\u7684 CA \u7b7e\u53d1\u7684\u8bc1\u4e66\uff0c\u53ef\u7701\u7565 ",(0,o.kt)("inlineCode",{parentName:"p"},"-CAfile")," \u53c2\u6570\u3002"),(0,o.kt)("p",null,"\u547d\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"openssl s_client -CAfile ca.pem -connect rancher.yourdomain.com:443\n...\n    Verify return code: 0 (ok)\n")))}h.isMDXComponent=!0}}]);