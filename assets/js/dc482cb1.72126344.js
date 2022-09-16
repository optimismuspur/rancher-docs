"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[89671],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},38157:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Managing Cloud Credentials",weight:7011},s=void 0,d={unversionedId:"reference-guides/user-settings/manage-cloud-credentials",id:"version-2.0-2.4/reference-guides/user-settings/manage-cloud-credentials",title:"Managing Cloud Credentials",description:"Available as of v2.2.0",source:"@site/versioned_docs/version-2.0-2.4/reference-guides/user-settings/manage-cloud-credentials.md",sourceDirName:"reference-guides/user-settings",slug:"/reference-guides/user-settings/manage-cloud-credentials",permalink:"/v2.0-v2.4/reference-guides/user-settings/manage-cloud-credentials",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/reference-guides/user-settings/manage-cloud-credentials.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663346276,formattedLastUpdatedAt:"9/16/2022",frontMatter:{title:"Managing Cloud Credentials",weight:7011},sidebar:"tutorialSidebar",previous:{title:"Managing Node Templates",permalink:"/v2.0-v2.4/reference-guides/user-settings/manage-node-templates"},next:{title:"User Preferences",permalink:"/v2.0-v2.4/reference-guides/user-settings/user-preferences"}},u={},c=[{value:"Creating a Cloud Credential from User Settings",id:"creating-a-cloud-credential-from-user-settings",level:2},{value:"Updating a Cloud Credential",id:"updating-a-cloud-credential",level:2},{value:"Deleting a Cloud Credential",id:"deleting-a-cloud-credential",level:2}],p={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Available as of v2.2.0")),(0,i.kt)("p",null,"When you create a cluster ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"hosted by an infrastructure provider"),", ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-templates"},"node templates")," are used to provision the cluster nodes. These templates use Docker Machine configuration options to define an operating system image and settings/parameters for the node."),(0,i.kt)("p",null,"Node templates can use cloud credentials to access the credential information required to provision nodes in the infrastructure providers. The same cloud credential can be used by multiple node templates. By using a cloud credential, you do not have to re-enter access keys for the same cloud provider. Cloud credentials are stored as Kubernetes secrets."),(0,i.kt)("p",null,"Cloud credentials are only used by node templates if there are fields marked as ",(0,i.kt)("inlineCode",{parentName:"p"},"password"),". The default ",(0,i.kt)("inlineCode",{parentName:"p"},"active")," node drivers have their account access fields marked as ",(0,i.kt)("inlineCode",{parentName:"p"},"password"),", but there may be some ",(0,i.kt)("inlineCode",{parentName:"p"},"inactive")," node drivers, which are not using them yet. These node drivers will not use cloud credentials."),(0,i.kt)("p",null,"You can create cloud credentials in two contexts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-templates"},"During creation of a node template")," for a cluster."),(0,i.kt)("li",{parentName:"ul"},"In the ",(0,i.kt)("strong",{parentName:"li"},"User Settings"))),(0,i.kt)("p",null,"All cloud credentials are bound to the user profile of who created it. They ",(0,i.kt)("strong",{parentName:"p"},"cannot")," be shared across users."),(0,i.kt)("h2",{id:"creating-a-cloud-credential-from-user-settings"},"Creating a Cloud Credential from User Settings"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"From your user settings, select ",(0,i.kt)("strong",{parentName:"li"},"User Avatar > Cloud Credentials"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Add Cloud Credential"),"."),(0,i.kt)("li",{parentName:"ol"},"Enter a name for the cloud credential."),(0,i.kt)("li",{parentName:"ol"},"Select a ",(0,i.kt)("strong",{parentName:"li"},"Cloud Credential Type")," from the drop down. The values of this dropdown is based on the ",(0,i.kt)("inlineCode",{parentName:"li"},"active")," ",(0,i.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers"},"node drivers")," in Rancher."),(0,i.kt)("li",{parentName:"ol"},"Based on the selected cloud credential type, enter the required values to authenticate with the infrastructure provider."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Create"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," The cloud credential is created and can immediately be used to ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-templates"},"create node templates"),"."),(0,i.kt)("h2",{id:"updating-a-cloud-credential"},"Updating a Cloud Credential"),(0,i.kt)("p",null,"When access credentials are changed or compromised, updating a cloud credential allows you to rotate those credentials while keeping the same node template.  "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"From your user settings, select ",(0,i.kt)("strong",{parentName:"li"},"User Avatar > Cloud Credentials"),"."),(0,i.kt)("li",{parentName:"ol"},"Choose the cloud credential you want to edit and click the ",(0,i.kt)("strong",{parentName:"li"},"\u22ee"," > Edit"),"."),(0,i.kt)("li",{parentName:"ol"},"Update the credential information and click ",(0,i.kt)("strong",{parentName:"li"},"Save"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," The cloud credential is updated with the new access credentials. All existing node templates using this cloud credential will automatically use the updated information whenever ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"new nodes are added"),"."),(0,i.kt)("h2",{id:"deleting-a-cloud-credential"},"Deleting a Cloud Credential"),(0,i.kt)("p",null,"In order to delete cloud credentials, there must not be any node template associated with it. If you are unable to delete the cloud credential, ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/user-settings/manage-node-templates#deleting-a-node-template"},"delete any node templates")," that are still associated to that cloud credential."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From your user settings, select ",(0,i.kt)("strong",{parentName:"p"},"User Avatar > Cloud Credentials"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You can either individually delete a cloud credential or bulk delete."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"To individually delete one, choose the cloud credential you want to edit and click the ",(0,i.kt)("strong",{parentName:"li"},"\u22ee"," > Delete"),"."),(0,i.kt)("li",{parentName:"ul"},"To bulk delete cloud credentials, select one or more cloud credentials from the list. Click ",(0,i.kt)("strong",{parentName:"li"},"Delete"),"."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Confirm that you want to delete these cloud credentials."))))}m.isMDXComponent=!0}}]);