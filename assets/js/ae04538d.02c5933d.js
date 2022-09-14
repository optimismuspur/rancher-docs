"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[23044],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return v}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=n.createContext({}),c=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(d.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(t),v=o,g=p["".concat(d,".").concat(v)]||p[v]||u[v]||a;return t?n.createElement(g,i(i({ref:r},l),{},{components:t})):n.createElement(g,i({ref:r},l))}));function v(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var d in r)hasOwnProperty.call(r,d)&&(s[d]=r[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},88914:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],s={title:"Node Drivers",weight:2,aliases:["/rancher/v2.5/en/concepts/global-configuration/node-drivers/","/rancher/v2.5/en/tasks/global-configuration/node-drivers/","/rancher/v2.x/en/admin-settings/drivers/node-drivers/"]},d=void 0,c={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers",id:"version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers",title:"Node Drivers",description:"Node drivers are used to provision hosts, which Rancher uses to launch and manage Kubernetes clusters. A node driver is the same as a Docker Machine driver. The availability of which node driver to display when creating node templates is defined based on the node driver's status. Only active node drivers will be displayed as an option for creating node templates. By default, Rancher is packaged with many existing Docker Machine drivers, but you can also create custom node drivers to add to Rancher.",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers",permalink:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers.md",tags:[],version:"2.5",lastUpdatedAt:1663174327,formattedLastUpdatedAt:"9/14/2022",frontMatter:{title:"Node Drivers",weight:2,aliases:["/rancher/v2.5/en/concepts/global-configuration/node-drivers/","/rancher/v2.5/en/tasks/global-configuration/node-drivers/","/rancher/v2.x/en/admin-settings/drivers/node-drivers/"]},sidebar:"tutorialSidebar",previous:{title:"Cluster Drivers",permalink:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-cluster-drivers"},next:{title:"RKE Templates",permalink:"/v2.5/pages-for-subheaders/about-rke1-templates"}},l={},u=[{value:"Managing Node Drivers",id:"managing-node-drivers",level:4},{value:"Activating/Deactivating Node Drivers",id:"activatingdeactivating-node-drivers",level:2},{value:"Adding Custom Node Drivers",id:"adding-custom-node-drivers",level:2},{value:"Developing your own node driver",id:"developing-your-own-node-driver",level:3}],p={toc:u};function v(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Node drivers are used to provision hosts, which Rancher uses to launch and manage Kubernetes clusters. A node driver is the same as a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/machine/drivers/"},"Docker Machine driver"),". The availability of which node driver to display when creating node templates is defined based on the node driver's status. Only ",(0,a.kt)("inlineCode",{parentName:"p"},"active")," node drivers will be displayed as an option for creating node templates. By default, Rancher is packaged with many existing Docker Machine drivers, but you can also create custom node drivers to add to Rancher."),(0,a.kt)("p",null,"If there are specific node drivers that you don't want to show to your users, you would need to de-activate these node drivers."),(0,a.kt)("h4",{id:"managing-node-drivers"},"Managing Node Drivers"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Prerequisites:")," To create, edit, or delete drivers, you need ",(0,a.kt)("em",{parentName:"p"},"one")," of the following permissions:"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"Administrator Global Permissions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions#custom-global-permissions"},"Custom Global Permissions")," with the ",(0,a.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"Manage Node Drivers")," role assigned."))),(0,a.kt)("h2",{id:"activatingdeactivating-node-drivers"},"Activating/Deactivating Node Drivers"),(0,a.kt)("p",null,"By default, Rancher only activates drivers for the most popular cloud providers, Amazon EC2, Azure, DigitalOcean and vSphere. If you want to show or hide any node driver, you can change its status."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the ",(0,a.kt)("strong",{parentName:"p"},"Global")," view, choose ",(0,a.kt)("strong",{parentName:"p"},"Tools > Drivers")," in the navigation bar. From the ",(0,a.kt)("strong",{parentName:"p"},"Drivers")," page, select the ",(0,a.kt)("strong",{parentName:"p"},"Node Drivers")," tab.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the driver that you wish to ",(0,a.kt)("strong",{parentName:"p"},"Activate")," or ",(0,a.kt)("strong",{parentName:"p"},"Deactivate")," and select the appropriate icon."))),(0,a.kt)("h2",{id:"adding-custom-node-drivers"},"Adding Custom Node Drivers"),(0,a.kt)("p",null,"If you want to use a node driver that Rancher doesn't support out-of-the-box, you can add that provider's driver in order to start using them to create node templates and eventually node pools for your Kubernetes cluster."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the ",(0,a.kt)("strong",{parentName:"p"},"Global")," view, choose ",(0,a.kt)("strong",{parentName:"p"},"Tools > Drivers")," in the navigation bar. From the ",(0,a.kt)("strong",{parentName:"p"},"Drivers")," page, select the ",(0,a.kt)("strong",{parentName:"p"},"Node Drivers")," tab.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Add Node Driver"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Complete the ",(0,a.kt)("strong",{parentName:"p"},"Add Node Driver")," form. Then click ",(0,a.kt)("strong",{parentName:"p"},"Create"),"."))),(0,a.kt)("h3",{id:"developing-your-own-node-driver"},"Developing your own node driver"),(0,a.kt)("p",null,"Node drivers are implemented with ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/machine/"},"Docker Machine"),"."))}v.isMDXComponent=!0}}]);