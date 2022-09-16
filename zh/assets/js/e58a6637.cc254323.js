"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[83932],{3905:function(t,e,a){a.d(e,{Zo:function(){return k},kt:function(){return u}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},k=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,k=o(t,["components","mdxType","originalType","parentName"]),c=d(a),u=r,N=c["".concat(p,".").concat(u)]||c[u]||m[u]||l;return a?n.createElement(N,i(i({ref:e},k),{},{components:a})):n.createElement(N,i({ref:e},k))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3558:function(t,e,a){a.r(e),a.d(e,{assets:function(){return k},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return m}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={title:"\u914d\u7f6e Keycloak (OIDC)",description:"\u521b\u5efa Keycloak OpenID Connect (OIDC) \u5ba2\u6237\u7aef\u5e76\u914d\u7f6e Rancher \u4ee5\u4f7f\u7528 Keycloak\u3002\u4f60\u7684\u7528\u6237\u5c06\u80fd\u591f\u4f7f\u7528\u4ed6\u4eec\u7684 Keycloak \u767b\u5f55\u540d\u767b\u5f55 Rancher\u3002",weight:1200},p=void 0,d={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-keycloak-oidc",id:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-keycloak-oidc",title:"\u914d\u7f6e Keycloak (OIDC)",description:"\u521b\u5efa Keycloak OpenID Connect (OIDC) \u5ba2\u6237\u7aef\u5e76\u914d\u7f6e Rancher \u4ee5\u4f7f\u7528 Keycloak\u3002\u4f60\u7684\u7528\u6237\u5c06\u80fd\u591f\u4f7f\u7528\u4ed6\u4eec\u7684 Keycloak \u767b\u5f55\u540d\u767b\u5f55 Rancher\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-keycloak-oidc.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-keycloak-oidc",permalink:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-keycloak-oidc",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-keycloak-oidc.md",tags:[],version:"current",lastUpdatedAt:1663346276,formattedLastUpdatedAt:"2022/9/16",frontMatter:{title:"\u914d\u7f6e Keycloak (OIDC)",description:"\u521b\u5efa Keycloak OpenID Connect (OIDC) \u5ba2\u6237\u7aef\u5e76\u914d\u7f6e Rancher \u4ee5\u4f7f\u7528 Keycloak\u3002\u4f60\u7684\u7528\u6237\u5c06\u80fd\u591f\u4f7f\u7528\u4ed6\u4eec\u7684 Keycloak \u767b\u5f55\u540d\u767b\u5f55 Rancher\u3002",weight:1200},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6e GitHub",permalink:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-github"},next:{title:"\u914d\u7f6e Keycloak (SAML)",permalink:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-keycloak-saml"}},k={},m=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"\u5728 Rancher \u4e2d\u914d\u7f6e Keycloak",id:"\u5728-rancher-\u4e2d\u914d\u7f6e-keycloak",level:2},{value:"\u914d\u7f6e\u53c2\u8003",id:"\u914d\u7f6e\u53c2\u8003",level:2},{value:"\u4ece SAML \u8fc1\u79fb\u5230 OIDC",id:"\u4ece-saml-\u8fc1\u79fb\u5230-oidc",level:2},{value:"\u91cd\u65b0\u914d\u7f6e Keycloak",id:"\u91cd\u65b0\u914d\u7f6e-keycloak",level:3},{value:"\u91cd\u65b0\u914d\u7f6e Rancher",id:"\u91cd\u65b0\u914d\u7f6e-rancher",level:3},{value:"\u9644\u5f55\uff1a\u6545\u969c\u6392\u9664",id:"\u9644\u5f55\u6545\u969c\u6392\u9664",level:2},{value:"\u4e0d\u80fd\u91cd\u5b9a\u5411\u5230 Keycloak",id:"\u4e0d\u80fd\u91cd\u5b9a\u5411\u5230-keycloak",level:3},{value:"\u751f\u6210\u7684 <code>Issuer</code> \u548c <code>Auth \u7aef\u70b9</code>\u4e0d\u6b63\u786e",id:"\u751f\u6210\u7684-issuer-\u548c-auth-\u7aef\u70b9\u4e0d\u6b63\u786e",level:3},{value:"Keycloak \u9519\u8bef\uff1a&quot;Invalid grant_type&quot;",id:"keycloak-\u9519\u8befinvalid-grant_type",level:3}],c={toc:m};function u(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u7684\u7ec4\u7ec7\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://www.keycloak.org"},"Keycloak Identity Provider (IdP)")," \u8fdb\u884c\u7528\u6237\u8eab\u4efd\u9a8c\u8bc1\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e Rancher \u6765\u5141\u8bb8\u7528\u6237\u4f7f\u7528 IdP \u51ed\u8bc1\u767b\u5f55\u3002Rancher \u652f\u6301\u4f7f\u7528 OpenID Connect (OIDC) \u534f\u8bae\u548c SAML \u534f\u8bae\u6765\u96c6\u6210 Keycloak\u3002\u4e0e Rancher \u4e00\u8d77\u4f7f\u7528\u65f6\uff0c\u8fd9\u4e24\u79cd\u5b9e\u73b0\u5728\u529f\u80fd\u4e0a\u662f\u7b49\u6548\u7684\u3002\u672c\u6587\u63cf\u8ff0\u4e86\u914d\u7f6e Rancher \u4ee5\u901a\u8fc7 OIDC \u534f\u8bae\u4e0e Keycloak \u4e00\u8d77\u4f7f\u7528\u7684\u6d41\u7a0b\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u66f4\u559c\u6b22\u5c06 Keycloak \u4e0e SAML \u534f\u8bae\u4e00\u8d77\u4f7f\u7528\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-keycloak-saml"},"\u6b64\u9875\u9762"),"\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u6709\u4f7f\u7528 SAML \u534f\u8bae\u7684\u73b0\u6709\u914d\u7f6e\u5e76\u5e0c\u671b\u5207\u6362\u5230 OIDC \u534f\u8bae\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"#%E4%BB%8E-saml-%E8%BF%81%E7%A7%BB%E5%88%B0-oidc"},"\u672c\u8282"),"\u3002"),(0,l.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5df2\u5728 Rancher \u4e0a\u7981\u7528 Keycloak (SAML)\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4f60\u5fc5\u987b\u914d\u7f6e\u4e86 ",(0,l.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/server_installation/"},"Keycloak IdP \u670d\u52a1\u5668"),"\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5728 Keycloak \u4e2d\uff0c\u4f7f\u7528\u4ee5\u4e0b\u8bbe\u7f6e\u521b\u5efa\u4e00\u4e2a",(0,l.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/server_admin/#oidc-clients"},"\u65b0\u7684 OIDC \u5ba2\u6237\u7aef"),"\u3002\u5982\u9700\u83b7\u53d6\u5e2e\u52a9\uff0c\u8bf7\u53c2\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/server_admin/#oidc-clients"},"Keycloak \u6587\u6863"),"\u3002"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u8bbe\u7f6e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Client ID")),(0,l.kt)("td",{parentName:"tr",align:null},"<","CLIENT_ID> (\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"td"},"rancher"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Name")),(0,l.kt)("td",{parentName:"tr",align:null},"<","CLIENT_NAME> (\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"td"},"rancher"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Client Protocol")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"openid-connect"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Access Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"confidential"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Valid Redirect URI")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"https://yourRancherHostURL/verify-auth")))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5728\u65b0\u7684 OIDC \u5ba2\u6237\u7aef\u4e2d\uff0c\u521b\u5efa ",(0,l.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/server_admin/#_protocol-mappers"},"Mappers")," \u6765\u516c\u5f00\u7528\u6237\u5b57\u6bb5\u3002"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'\u4f7f\u7528\u4ee5\u4e0b\u8bbe\u7f6e\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 "Groups Mapper"\uff1a'),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u8bbe\u7f6e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Name")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Groups Mapper"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Mapper Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Group Membership"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Token Claim Name")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"groups"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Add to ID token")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"OFF"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Add to access token")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"OFF"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Add to user info")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ON")))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'\u4f7f\u7528\u4ee5\u4e0b\u8bbe\u7f6e\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 "Client Audience" \uff1a'),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u8bbe\u7f6e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Name")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Client Audience"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Mapper Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Audience"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Included Client Audience")),(0,l.kt)("td",{parentName:"tr",align:null},"<","CLIENT_NAME>")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Add to access token")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ON")))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'\u4f7f\u7528\u4ee5\u4e0b\u8bbe\u7f6e\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 "Groups Path"\uff1a'),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u8bbe\u7f6e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Name")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Group Path"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Mapper Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Group Membership"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Token Claim Name")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"full_group_path"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Full group path")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ON"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Add to user info")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ON"))))))))),(0,l.kt)("h2",{id:"\u5728-rancher-\u4e2d\u914d\u7f6e-keycloak"},"\u5728 Rancher \u4e2d\u914d\u7f6e Keycloak"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728 Rancher UI \u4e2d\uff0c\u5355\u51fb ",(0,l.kt)("strong",{parentName:"p"},"\u2630 > \u7528\u6237 & \u8ba4\u8bc1"),"\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5355\u51fb\u5de6\u4fa7\u5bfc\u822a\u680f\u7684",(0,l.kt)("strong",{parentName:"p"},"\u8ba4\u8bc1"),"\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u9009\u62e9 ",(0,l.kt)("strong",{parentName:"p"},"Keycloak (OIDC)"),"\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u586b\u5199",(0,l.kt)("strong",{parentName:"p"},"\u914d\u7f6e Keycloak OIDC \u8d26\u53f7"),"\u8868\u5355\u3002\u6709\u5173\u586b\u5199\u8868\u5355\u7684\u5e2e\u52a9\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"#%E9%85%8D%E7%BD%AE%E5%8F%82%E8%80%83"},"\u914d\u7f6e\u53c2\u8003"),"\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5b8c\u6210",(0,l.kt)("strong",{parentName:"p"},"\u914d\u7f6e Keycloak OIDC \u8d26\u53f7"),"\u8868\u5355\u540e\uff0c\u5355\u51fb",(0,l.kt)("strong",{parentName:"p"},"\u542f\u7528"),"\u3002"),(0,l.kt)("p",{parentName:"li"},"Rancher \u4f1a\u5c06\u4f60\u91cd\u5b9a\u5411\u5230 IdP \u767b\u5f55\u9875\u9762\u3002\u8f93\u5165\u4f7f\u7528 Keycloak IdP \u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u7684\u51ed\u8bc1\uff0c\u6765\u9a8c\u8bc1\u4f60\u7684 Rancher Keycloak \u914d\u7f6e\u3002"),(0,l.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u4f60\u53ef\u80fd\u9700\u8981\u7981\u7528\u5f39\u51fa\u7a97\u53e3\u963b\u6b62\u7a0b\u5e8f\u624d\u80fd\u770b\u5230 IdP \u767b\u5f55\u9875\u9762\u3002"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5df2\u5c06 Rancher \u914d\u7f6e\u4e3a\u4f7f\u7528 OIDC \u534f\u8bae\u4e0e Keycloak \u4e00\u8d77\u5de5\u4f5c\u3002\u4f60\u7684\u7528\u6237\u73b0\u5728\u53ef\u4ee5\u4f7f\u7528 Keycloak \u767b\u5f55\u540d\u767b\u5f55 Rancher\u3002"),(0,l.kt)("h2",{id:"\u914d\u7f6e\u53c2\u8003"},"\u914d\u7f6e\u53c2\u8003"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef ID"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f60\u7684 Keycloak \u5ba2\u6237\u7aef\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"Client ID"),"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef\u5bc6\u7801"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f60\u7684 Keycloak \u5ba2\u6237\u7aef\u751f\u6210\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"Secret"),"\u3002\u5728 Keycloak \u63a7\u5236\u53f0\u4e2d\uff0c\u5355\u51fb ",(0,l.kt)("strong",{parentName:"td"},"Clients"),"\uff0c\u9009\u62e9\u4f60\u521b\u5efa\u7684\u5ba2\u6237\u7aef\uff0c\u9009\u62e9 ",(0,l.kt)("strong",{parentName:"td"},"Credentials")," \u9009\u9879\u5361\uff0c\u7136\u540e\u590d\u5236 ",(0,l.kt)("inlineCode",{parentName:"td"},"Secret")," \u5b57\u6bb5\u7684\u503c\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u79c1\u94a5/\u8bc1\u4e66"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728 Rancher \u548c\u4f60\u7684 IdP \u4e4b\u95f4\u521b\u5efa\u5b89\u5168\u5916\u58f3\uff08SSH\uff09\u7684\u5bc6\u94a5/\u8bc1\u4e66\u5bf9\u3002\u5982\u679c\u4f60\u7684 Keycloak \u670d\u52a1\u5668\u4e0a\u542f\u7528\u4e86 HTTPS/SSL\uff0c\u5219\u4e3a\u5fc5\u586b\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7aef\u70b9"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9009\u62e9\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"Rancher URL"),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"\u53d1\u884c\u8005"),"\u548c ",(0,l.kt)("inlineCode",{parentName:"td"},"Auth \u7aef\u70b9"),"\u5b57\u6bb5\u4f7f\u7528\u751f\u6210\u7684\u503c\uff0c\u8fd8\u662f\u5728\u4e0d\u6b63\u786e\u65f6\u8fdb\u884c\u624b\u52a8\u8986\u76d6\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Keycloak URL"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f60\u7684 Keycloak \u670d\u52a1\u5668\u7684 URL\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Keycloak Realm"),(0,l.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa Keycloak \u5ba2\u6237\u7aef\u7684 Realm \u7684\u540d\u79f0\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rancher URL"),(0,l.kt)("td",{parentName:"tr",align:null},"Rancher Server \u7684 URL\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Issuer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f60\u7684 IdP \u7684 URL\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Auth \u7aef\u70b9"),(0,l.kt)("td",{parentName:"tr",align:null},"\u91cd\u5b9a\u5411\u7528\u6237\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u7684 URL\u3002")))),(0,l.kt)("h2",{id:"\u4ece-saml-\u8fc1\u79fb\u5230-oidc"},"\u4ece SAML \u8fc1\u79fb\u5230 OIDC"),(0,l.kt)("p",null,"\u672c\u8282\u63cf\u8ff0\u4e86\u5c06\u4f7f\u7528 Keycloak (SAML) \u7684 Rancher \u8fc7\u6e21\u5230 Keycloak (OIDC) \u7684\u8fc7\u7a0b\u3002"),(0,l.kt)("h3",{id:"\u91cd\u65b0\u914d\u7f6e-keycloak"},"\u91cd\u65b0\u914d\u7f6e Keycloak"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5c06\u73b0\u6709\u5ba2\u6237\u7aef\u66f4\u6539\u4e3a\u4f7f\u7528 OIDC \u534f\u8bae\u3002\u5728 Keycloak \u63a7\u5236\u53f0\u4e2d\uff0c\u5355\u51fb ",(0,l.kt)("strong",{parentName:"p"},"Clients"),"\uff0c\u9009\u62e9\u8981\u8fc1\u79fb\u7684 SAML \u5ba2\u6237\u7aef\uff0c\u9009\u62e9 ",(0,l.kt)("strong",{parentName:"p"},"Settings")," \u9009\u9879\u5361\uff0c\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"Client Protocol")," \u4ece ",(0,l.kt)("inlineCode",{parentName:"p"},"saml")," \u66f4\u6539\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"openid-connect"),"\uff0c\u7136\u540e\u70b9\u51fb ",(0,l.kt)("strong",{parentName:"p"},"Save"),"\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u9a8c\u8bc1 ",(0,l.kt)("inlineCode",{parentName:"p"},"Valid Redirect URIs")," \u662f\u5426\u4ecd\u7136\u6709\u6548\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u9009\u62e9 ",(0,l.kt)("strong",{parentName:"p"},"Mappers")," \u9009\u9879\u5361\u5e76\u4f7f\u7528\u4ee5\u4e0b\u8bbe\u7f6e\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 Mapper\uff1a"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u8bbe\u7f6e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Name")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Groups Mapper"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Mapper Type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Group Membership"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Token Claim Name")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"groups"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Add to ID token")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ON"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Add to access token")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ON"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Add to user info")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ON"))))))),(0,l.kt)("h3",{id:"\u91cd\u65b0\u914d\u7f6e-rancher"},"\u91cd\u65b0\u914d\u7f6e Rancher"),(0,l.kt)("p",null,"\u5728\u5c06 Rancher \u914d\u7f6e\u4e3a\u4f7f\u7528 Keycloak (OIDC) \u4e4b\u524d\uff0c\u5fc5\u987b\u5148\u7981\u7528 Keycloak (SAML)\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5728 Rancher UI \u4e2d\uff0c\u5355\u51fb ",(0,l.kt)("strong",{parentName:"li"},"\u2630 > \u7528\u6237 & \u8ba4\u8bc1"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5355\u51fb\u5de6\u4fa7\u5bfc\u822a\u680f\u7684",(0,l.kt)("strong",{parentName:"li"},"\u8ba4\u8bc1"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u9009\u62e9 ",(0,l.kt)("strong",{parentName:"li"},"Keycloak (SAML)"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u7981\u7528"),"\u3002")),(0,l.kt)("p",null,"\u6309\u7167",(0,l.kt)("a",{parentName:"p",href:"#%E5%9C%A8-rancher-%E4%B8%AD%E9%85%8D%E7%BD%AE-keycloak"},"\u672c\u8282"),"\u4e2d\u7684\u6b65\u9aa4\u5c06 Rancher \u914d\u7f6e\u4e3a\u4f7f\u7528 Keycloak (OIDC)\u3002"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u7531\u4e8e\u7528\u6237\u6743\u9650\u4e0d\u4f1a\u81ea\u52a8\u8fc1\u79fb\uff0c\u4f60\u9700\u8981\u91cd\u65b0\u7533\u8bf7 Rancher \u7528\u6237\u6743\u9650\u3002"))),(0,l.kt)("h2",{id:"\u9644\u5f55\u6545\u969c\u6392\u9664"},"\u9644\u5f55\uff1a\u6545\u969c\u6392\u9664"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u5728\u6d4b\u8bd5\u4e0e Keycloak \u670d\u52a1\u5668\u7684\u8fde\u63a5\u65f6\u9047\u5230\u95ee\u9898\uff0c\u8bf7\u5148\u68c0\u67e5 OIDC \u5ba2\u6237\u7aef\u7684\u914d\u7f6e\u9009\u9879\u3002\u4f60\u8fd8\u53ef\u4ee5\u68c0\u67e5 Rancher \u65e5\u5fd7\u6765\u67e5\u660e\u95ee\u9898\u7684\u539f\u56e0\u3002\u8c03\u8bd5\u65e5\u5fd7\u53ef\u80fd\u5305\u542b\u6709\u5173\u9519\u8bef\u7684\u66f4\u8be6\u7ec6\u4fe1\u606f\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"/zh/faq/technical-items#%E5%A6%82%E4%BD%95%E5%90%AF%E7%94%A8%E8%B0%83%E8%AF%95%E6%97%A5%E5%BF%97%E8%AE%B0%E5%BD%95%EF%BC%9F"},"\u5982\u4f55\u542f\u7528\u8c03\u8bd5\u65e5\u5fd7"),"\u3002"),(0,l.kt)("p",null,"\u6240\u6709\u4e0e Keycloak \u76f8\u5173\u7684\u65e5\u5fd7\u6761\u76ee\u90fd\u5c06\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"[generic oidc]")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"[keycloak oidc]"),"\u3002"),(0,l.kt)("h3",{id:"\u4e0d\u80fd\u91cd\u5b9a\u5411\u5230-keycloak"},"\u4e0d\u80fd\u91cd\u5b9a\u5411\u5230 Keycloak"),(0,l.kt)("p",null,"\u5b8c\u6210",(0,l.kt)("strong",{parentName:"p"},"\u914d\u7f6e Keycloak OIDC \u8d26\u53f7"),"\u8868\u5355\u5e76\u5355\u51fb",(0,l.kt)("strong",{parentName:"p"},"\u542f\u7528"),"\u540e\uff0c\u4f60\u6ca1\u6709\u88ab\u91cd\u5b9a\u5411\u5230\u4f60\u7684 IdP\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1\u4f60\u7684 Keycloak \u5ba2\u6237\u7aef\u914d\u7f6e\u3002")),(0,l.kt)("h3",{id:"\u751f\u6210\u7684-issuer-\u548c-auth-\u7aef\u70b9\u4e0d\u6b63\u786e"},"\u751f\u6210\u7684 ",(0,l.kt)("inlineCode",{parentName:"h3"},"Issuer")," \u548c ",(0,l.kt)("inlineCode",{parentName:"h3"},"Auth \u7aef\u70b9"),"\u4e0d\u6b63\u786e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728",(0,l.kt)("strong",{parentName:"li"},"\u914d\u7f6e Keycloak OIDC \u8d26\u53f7"),"\u8868\u5355\u4e2d\uff0c\u5c06",(0,l.kt)("strong",{parentName:"li"},"\u7aef\u70b9"),"\u66f4\u6539\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"\u6307\u5b9a\uff08\u9ad8\u7ea7\u8bbe\u7f6e\uff09"),"\u5e76\u8986\u76d6",(0,l.kt)("inlineCode",{parentName:"li"},"\u53d1\u884c\u8005")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"Auth \u7aef\u70b9"),"\u7684\u503c\u3002\u8981\u67e5\u627e\u8fd9\u4e9b\u503c\uff0c\u524d\u5f80 Keycloak \u63a7\u5236\u53f0\u5e76\u9009\u62e9 ",(0,l.kt)("strong",{parentName:"li"},"Realm Settings"),"\uff0c\u9009\u62e9 ",(0,l.kt)("strong",{parentName:"li"},"General")," \u9009\u9879\u5361\uff0c\u7136\u540e\u5355\u51fb ",(0,l.kt)("strong",{parentName:"li"},"OpenID Endpoint Configuration"),"\u3002JSON \u8f93\u51fa\u5c06\u663e\u793a ",(0,l.kt)("inlineCode",{parentName:"li"},"issuer")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"authorization_endpoint")," \u7684\u503c\u3002")),(0,l.kt)("h3",{id:"keycloak-\u9519\u8befinvalid-grant_type"},'Keycloak \u9519\u8bef\uff1a"Invalid grant_type"'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u8fd9\u6761\u9519\u8bef\u63d0\u793a\u4fe1\u606f\u53ef\u80fd\u6709\u8bef\u5bfc\u6027\uff0c\u5b9e\u9645\u4e0a\u9020\u6210\u9519\u8bef\u7684\u539f\u56e0\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"Valid Redirect URI")," \u914d\u7f6e\u9519\u8bef\u3002")))}u.isMDXComponent=!0}}]);