"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[68677],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return d}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=s(t),d=i,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return t?n.createElement(m,u(u({ref:r},l),{},{components:t})):n.createElement(m,u({ref:r},l))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,u=new Array(o);u[0]=f;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,u[1]=a;for(var s=2;s<o;s++)u[s]=t[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},30255:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p}});var n=t(87462),i=t(63366),o=(t(67294),t(3905)),u=["components"],a={title:"About rke2-selinux"},c=void 0,s={unversionedId:"reference-guides/rancher-security/selinux-rpm/about-rke2-selinux",id:"reference-guides/rancher-security/selinux-rpm/about-rke2-selinux",title:"About rke2-selinux",description:"rke2-selinux provides policies for RKE2. It is installed automatically when the RKE2 installer script detects that it is running on an RPM-based distro.",source:"@site/docs/reference-guides/rancher-security/selinux-rpm/about-rke2-selinux.md",sourceDirName:"reference-guides/rancher-security/selinux-rpm",slug:"/reference-guides/rancher-security/selinux-rpm/about-rke2-selinux",permalink:"/reference-guides/rancher-security/selinux-rpm/about-rke2-selinux",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/rancher-security/selinux-rpm/about-rke2-selinux.md",tags:[],version:"current",lastUpdatedAt:1663174327,formattedLastUpdatedAt:"9/14/2022",frontMatter:{title:"About rke2-selinux"},sidebar:"tutorialSidebar",previous:{title:"About rancher-selinux",permalink:"/reference-guides/rancher-security/selinux-rpm/about-rancher-selinux"},next:{title:"Kubernetes Security Best Practices",permalink:"/reference-guides/rancher-security/kubernetes-security-best-practices"}},l={},p=[],f={toc:p};function d(e){var r=e.components,t=(0,i.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"rke2-selinux")," provides policies for RKE2. It is installed automatically when the RKE2 installer script detects that it is running on an RPM-based distro."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"rke2-selinux")," GitHub repository is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2-selinux"},"here.")),(0,o.kt)("p",null,"For more information about installing RKE2 on SELinux-enabled hosts, see the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rke2.io/install/methods/#rpm"},"RKE2 documentation.")))}d.isMDXComponent=!0}}]);