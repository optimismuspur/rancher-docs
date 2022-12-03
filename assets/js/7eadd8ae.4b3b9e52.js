"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[7065],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,m=u["".concat(o,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},52307:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={title:"Adding TLS Secrets"},s=void 0,c={unversionedId:"getting-started/installation-and-upgrade/resources/add-tls-secrets",id:"version-2.6/getting-started/installation-and-upgrade/resources/add-tls-secrets",title:"Adding TLS Secrets",description:"Kubernetes will create all the objects and services for Rancher, but it will not become available until we populate the tls-rancher-ingress secret in the cattle-system namespace with the certificate and key.",source:"@site/versioned_docs/version-2.6/getting-started/installation-and-upgrade/resources/add-tls-secrets.md",sourceDirName:"getting-started/installation-and-upgrade/resources",slug:"/getting-started/installation-and-upgrade/resources/add-tls-secrets",permalink:"/v2.6/getting-started/installation-and-upgrade/resources/add-tls-secrets",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/getting-started/installation-and-upgrade/resources/add-tls-secrets.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"Nov 14, 2022",frontMatter:{title:"Adding TLS Secrets"},sidebar:"tutorialSidebar",previous:{title:"Helm Version Requirements",permalink:"/v2.6/getting-started/installation-and-upgrade/resources/helm-version-requirements"},next:{title:"About Custom CA Root Certificates",permalink:"/v2.6/getting-started/installation-and-upgrade/resources/custom-ca-root-certificates"}},o={},l=[{value:"Using a Private CA Signed Certificate",id:"using-a-private-ca-signed-certificate",level:2},{value:"Updating a Private CA Certificate",id:"updating-a-private-ca-certificate",level:2}],p={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Kubernetes will create all the objects and services for Rancher, but it will not become available until we populate the ",(0,a.kt)("inlineCode",{parentName:"p"},"tls-rancher-ingress")," secret in the ",(0,a.kt)("inlineCode",{parentName:"p"},"cattle-system")," namespace with the certificate and key."),(0,a.kt)("p",null,"Combine the server certificate followed by any intermediate certificate(s) needed into a file named ",(0,a.kt)("inlineCode",{parentName:"p"},"tls.crt"),". Copy your certificate key into a file named ",(0,a.kt)("inlineCode",{parentName:"p"},"tls.key"),"."),(0,a.kt)("p",null,"For example, ",(0,a.kt)("a",{parentName:"p",href:"https://acme.sh"},"acme.sh")," provides server certificate and CA chains in ",(0,a.kt)("inlineCode",{parentName:"p"},"fullchain.cer")," file.\nThis ",(0,a.kt)("inlineCode",{parentName:"p"},"fullchain.cer")," should be renamed to ",(0,a.kt)("inlineCode",{parentName:"p"},"tls.crt")," & certificate key file as ",(0,a.kt)("inlineCode",{parentName:"p"},"tls.key"),"."),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," with the ",(0,a.kt)("inlineCode",{parentName:"p"},"tls")," secret type to create the secrets."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl -n cattle-system create secret tls tls-rancher-ingress \\\n  --cert=tls.crt \\\n  --key=tls.key\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you want to replace the certificate, you can delete the ",(0,a.kt)("inlineCode",{parentName:"p"},"tls-rancher-ingress")," secret using ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl -n cattle-system delete secret tls-rancher-ingress")," and add a new one using the command shown above. If you are using a private CA signed certificate, replacing the certificate is only possible if the new certificate is signed by the same CA as the certificate currently in use.")),(0,a.kt)("h2",{id:"using-a-private-ca-signed-certificate"},"Using a Private CA Signed Certificate"),(0,a.kt)("p",null,"If you are using a private CA, Rancher requires a copy of the CA certificate which is used by the Rancher Agent to validate the connection to the server."),(0,a.kt)("p",null,"Copy the CA certificate into a file named ",(0,a.kt)("inlineCode",{parentName:"p"},"cacerts.pem")," and use ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," to create the ",(0,a.kt)("inlineCode",{parentName:"p"},"tls-ca")," secret in the ",(0,a.kt)("inlineCode",{parentName:"p"},"cattle-system")," namespace."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl -n cattle-system create secret generic tls-ca \\\n  --from-file=cacerts.pem=./cacerts.pem\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The configured ",(0,a.kt)("inlineCode",{parentName:"p"},"tls-ca")," secret is retrieved when Rancher starts. On a running Rancher installation the updated CA will take effect after new Rancher pods are started.")),(0,a.kt)("h2",{id:"updating-a-private-ca-certificate"},"Updating a Private CA Certificate"),(0,a.kt)("p",null,"Follow the steps on ",(0,a.kt)("a",{parentName:"p",href:"/v2.6/getting-started/installation-and-upgrade/resources/update-rancher-certificate"},"this page")," to update the SSL certificate of the ingress in a Rancher ",(0,a.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"high availability Kubernetes installation")," or to switch from the default self-signed certificate to a custom certificate."))}d.isMDXComponent=!0}}]);