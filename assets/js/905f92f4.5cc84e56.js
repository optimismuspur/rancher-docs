"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[74188],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},23845:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],i={title:"Managing Node Templates",weight:7010},l=void 0,p={unversionedId:"reference-guides/user-settings/manage-node-templates",id:"version-2.0-2.4/reference-guides/user-settings/manage-node-templates",title:"Managing Node Templates",description:"When you provision a cluster hosted by an infrastructure provider, node templates are used to provision the cluster nodes. These templates use Docker Machine configuration options to define an operating system image and settings/parameters for the node. You can create node templates in two contexts:",source:"@site/versioned_docs/version-2.0-2.4/reference-guides/user-settings/manage-node-templates.md",sourceDirName:"reference-guides/user-settings",slug:"/reference-guides/user-settings/manage-node-templates",permalink:"/v2.0-v2.4/reference-guides/user-settings/manage-node-templates",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/reference-guides/user-settings/manage-node-templates.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662577408,formattedLastUpdatedAt:"9/7/2022",frontMatter:{title:"Managing Node Templates",weight:7010},sidebar:"tutorialSidebar",previous:{title:"API Keys",permalink:"/v2.0-v2.4/reference-guides/user-settings/api-keys"},next:{title:"Managing Cloud Credentials",permalink:"/v2.0-v2.4/reference-guides/user-settings/manage-cloud-credentials"}},u={},d=[{value:"Creating a Node Template from User Settings",id:"creating-a-node-template-from-user-settings",level:2},{value:"Updating a Node Template",id:"updating-a-node-template",level:2},{value:"Cloning Node Templates",id:"cloning-node-templates",level:2},{value:"Deleting a Node Template",id:"deleting-a-node-template",level:2}],c={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When you provision a cluster ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"hosted by an infrastructure provider"),", ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-templates"},"node templates")," are used to provision the cluster nodes. These templates use Docker Machine configuration options to define an operating system image and settings/parameters for the node. You can create node templates in two contexts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"While ",(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"provisioning a node pool cluster"),"."),(0,o.kt)("li",{parentName:"ul"},"At any time, from your ",(0,o.kt)("a",{parentName:"li",href:"#creating-a-node-template-from-user-settings"},"user settings"),".")),(0,o.kt)("p",null,"When you create a node template, it is bound to your user profile. Node templates cannot be shared among users. You can delete stale node templates that you no longer user from your user settings."),(0,o.kt)("h2",{id:"creating-a-node-template-from-user-settings"},"Creating a Node Template from User Settings"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From your user settings, select ",(0,o.kt)("strong",{parentName:"li"},"User Avatar > Node Templates"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Add Template"),"."),(0,o.kt)("li",{parentName:"ol"},"Select one of the cloud providers available. Then follow the instructions on screen to configure the template.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The template is configured. You can use the template later when you ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"provision a node pool cluster"),"."),(0,o.kt)("h2",{id:"updating-a-node-template"},"Updating a Node Template"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From your user settings, select ",(0,o.kt)("strong",{parentName:"p"},"User Avatar > Node Templates"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose the node template that you want to edit and click the ",(0,o.kt)("strong",{parentName:"p"},"\u22ee"," > Edit"),"."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," As of v2.2.0, the default ",(0,o.kt)("inlineCode",{parentName:"p"},"active")," ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers"},"node drivers")," and any node driver, that has fields marked as ",(0,o.kt)("inlineCode",{parentName:"p"},"password"),", are required to use ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider#cloud-credentials"},"cloud credentials"),". If you have upgraded to v2.2.0, existing node templates will continue to work with the previous account access  information, but when you edit the node template, you will be required to create a cloud credential and the node template will start using it."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Edit the required information and click ",(0,o.kt)("strong",{parentName:"p"},"Save"),"."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The node template is updated. All node pools using this node template will automatically use the updated information when new nodes are added."),(0,o.kt)("h2",{id:"cloning-node-templates"},"Cloning Node Templates"),(0,o.kt)("p",null,"When creating new node templates from your user settings, you can clone an existing template and quickly update its settings rather than creating a new one from scratch. Cloning templates saves you the hassle of re-entering access keys for the cloud provider."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From your user settings, select ",(0,o.kt)("strong",{parentName:"li"},"User Avatar > Node Templates"),"."),(0,o.kt)("li",{parentName:"ol"},"Find the template you want to clone. Then select ",(0,o.kt)("strong",{parentName:"li"},"\u22ee"," > Clone"),"."),(0,o.kt)("li",{parentName:"ol"},"Complete the rest of the form.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The template is cloned and configured. You can use the template later when you ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"provision a node pool cluster"),"."),(0,o.kt)("h2",{id:"deleting-a-node-template"},"Deleting a Node Template"),(0,o.kt)("p",null,"When you no longer use a node template, you can delete it from your user settings."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From your user settings, select ",(0,o.kt)("strong",{parentName:"li"},"User Avatar > Node Templates"),"."),(0,o.kt)("li",{parentName:"ol"},"Select one or more template from the list. Then click ",(0,o.kt)("strong",{parentName:"li"},"Delete"),". Confirm the delete when prompted.")))}m.isMDXComponent=!0}}]);