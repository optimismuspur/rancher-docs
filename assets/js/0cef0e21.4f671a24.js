"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[63716],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return d}});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=a.createContext({}),s=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},l=function(t){var e=s(t.components);return a.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,c=t.parentName,l=u(t,["components","mdxType","originalType","parentName"]),g=s(n),d=i,m=g["".concat(c,".").concat(d)]||g[d]||p[d]||r;return n?a.createElement(m,o(o({ref:e},l),{},{components:n})):a.createElement(m,o({ref:e},l))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,o=new Array(r);o[0]=g;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"==typeof t?t:i,o[1]=u;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1219:function(t,e,n){n.r(e),n.d(e,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],u={title:"Configuring GitHub",weight:1116,aliases:["/rancher/v2.0-v2.4/en/tasks/global-configuration/authentication/github/"]},c=void 0,s={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-github",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-github",title:"Configuring GitHub",description:"In environments using GitHub, you can configure Rancher to allow sign on using GitHub credentials.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-github.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-github",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-github",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-github.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662577408,formattedLastUpdatedAt:"9/7/2022",frontMatter:{title:"Configuring GitHub",weight:1116,aliases:["/rancher/v2.0-v2.4/en/tasks/global-configuration/authentication/github/"]},sidebar:"tutorialSidebar",previous:{title:"Configuring Azure AD",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-azure-ad"},next:{title:"Configuring Keycloak (SAML)",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-keycloak"}},l={},p=[],g={toc:p};function d(t){var e=t.components,n=(0,i.Z)(t,o);return(0,r.kt)("wrapper",(0,a.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In environments using GitHub, you can configure Rancher to allow sign on using GitHub credentials."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Prerequisites:")," Read ",(0,r.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/about-authentication#external-authentication-configuration-and-principal-users"},"External Authentication Configuration and Principal Users"),".")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sign into Rancher using a local user assigned the ",(0,r.kt)("inlineCode",{parentName:"p"},"administrator")," role (i.e., the ",(0,r.kt)("em",{parentName:"p"},"local principal"),").")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the ",(0,r.kt)("strong",{parentName:"p"},"Global")," view, select ",(0,r.kt)("strong",{parentName:"p"},"Security > Authentication")," from the main menu.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"GitHub"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Follow the directions displayed to ",(0,r.kt)("strong",{parentName:"p"},"Setup a GitHub Application"),". Rancher redirects you to GitHub to complete registration."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"What's an Authorization Callback URL?")),(0,r.kt)("p",{parentName:"blockquote"},"The Authorization Callback URL is the URL where users go to begin using your application (i.e. the splash screen).")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"When you use external authentication, authentication does not actually take place in your application. Instead, authentication takes place externally (in this case, GitHub). After this external authentication completes successfully, the Authorization Callback URL is the location where the user re-enters your application."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From GitHub, copy the ",(0,r.kt)("strong",{parentName:"p"},"Client ID")," and ",(0,r.kt)("strong",{parentName:"p"},"Client Secret"),". Paste them into Rancher."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Where do I find the Client ID and Client Secret?")),(0,r.kt)("p",{parentName:"blockquote"},"From GitHub, select Settings > Developer Settings > OAuth Apps. The Client ID and Client Secret are displayed prominently."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Authenticate with GitHub"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use the ",(0,r.kt)("strong",{parentName:"p"},"Site Access")," options to configure the scope of user authorization."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Allow any valid Users")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Any")," GitHub user can access Rancher. We generally discourage use of this setting!")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Allow members of Clusters, Projects, plus Authorized Users and Organizations")),(0,r.kt)("p",{parentName:"li"},"Any GitHub user or group added as a ",(0,r.kt)("strong",{parentName:"p"},"Cluster Member")," or ",(0,r.kt)("strong",{parentName:"p"},"Project Member")," can log in to Rancher. Additionally, any GitHub user or group you add to the ",(0,r.kt)("strong",{parentName:"p"},"Authorized Users and Organizations")," list may log in to Rancher.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Restrict access to only Authorized Users and Organizations")),(0,r.kt)("p",{parentName:"li"},"Only GitHub users or groups added to the Authorized Users and Organizations can log in to Rancher."),(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save"),"."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GitHub authentication is configured."),(0,r.kt)("li",{parentName:"ul"},"You are signed into Rancher with your GitHub account (i.e., the ",(0,r.kt)("em",{parentName:"li"},"external principal"),").")))}d.isMDXComponent=!0}}]);