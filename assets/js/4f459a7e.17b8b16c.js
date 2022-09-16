"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[74162],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=i,f=d["".concat(c,".").concat(m)]||d[m]||l[m]||o;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},51379:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],s={title:"Rancher's CI/CD Pipelines",description:"Use Rancher\u2019s CI/CD pipeline to automatically checkout code, run builds or scripts, publish Docker images, and deploy software to users",weight:4e3,aliases:["/rancher/v2.5/en/concepts/ci-cd-pipelines/","/rancher/v2.5/en/tasks/pipelines/","/rancher/v2.5/en/tools/pipelines/configurations/","/rancher/v2.x/en/project-admin/pipelines/"]},c=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/manage-projects/ci-cd-pipelines",id:"version-2.5/how-to-guides/advanced-user-guides/manage-projects/ci-cd-pipelines",title:"Rancher's CI/CD Pipelines",description:"Use Rancher\u2019s CI/CD pipeline to automatically checkout code, run builds or scripts, publish Docker images, and deploy software to users",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/manage-projects/ci-cd-pipelines.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-projects",slug:"/how-to-guides/advanced-user-guides/manage-projects/ci-cd-pipelines",permalink:"/v2.5/how-to-guides/advanced-user-guides/manage-projects/ci-cd-pipelines",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/manage-projects/ci-cd-pipelines.md",tags:[],version:"2.5",lastUpdatedAt:1663346276,formattedLastUpdatedAt:"9/16/2022",frontMatter:{title:"Rancher's CI/CD Pipelines",description:"Use Rancher\u2019s CI/CD pipeline to automatically checkout code, run builds or scripts, publish Docker images, and deploy software to users",weight:4e3,aliases:["/rancher/v2.5/en/concepts/ci-cd-pipelines/","/rancher/v2.5/en/tasks/pipelines/","/rancher/v2.5/en/tools/pipelines/configurations/","/rancher/v2.x/en/project-admin/pipelines/"]},sidebar:"tutorialSidebar",previous:{title:"Namespaces",permalink:"/v2.5/how-to-guides/advanced-user-guides/manage-projects/manage-namespaces"},next:{title:"Pod Security Policies",permalink:"/v2.5/how-to-guides/advanced-user-guides/manage-projects/manage-pod-security-policies"}},p={},l=[],d={toc:l};function m(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Using Rancher, you can integrate with a GitHub repository to setup a continuous integration (CI) pipeline."),(0,o.kt)("p",null,"After configuring Rancher and GitHub, you can deploy containers running Jenkins to automate a pipeline execution:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Build your application from code to image."),(0,o.kt)("li",{parentName:"ul"},"Validate your builds."),(0,o.kt)("li",{parentName:"ul"},"Deploy your build images to your cluster."),(0,o.kt)("li",{parentName:"ul"},"Run unit tests."),(0,o.kt)("li",{parentName:"ul"},"Run regression tests.")),(0,o.kt)("p",null,"For details, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/pipelines"},"pipelines")," section."))}m.isMDXComponent=!0}}]);