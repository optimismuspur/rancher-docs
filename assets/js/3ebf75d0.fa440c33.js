"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[54648],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return h}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),c=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),h=n,f=d["".concat(u,".").concat(h)]||d[h]||p[h]||i;return r?a.createElement(f,o(o({ref:t},l),{},{components:r})):a.createElement(f,o({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},17108:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),o=["components"],s={title:"OpenLDAP Configuration Reference",weight:2},u=void 0,c={unversionedId:"reference-guides/configure-openldap/openldap-config-reference",id:"version-2.0-2.4/reference-guides/configure-openldap/openldap-config-reference",title:"OpenLDAP Configuration Reference",description:"This section is intended to be used as a reference when setting up an OpenLDAP authentication provider in Rancher.",source:"@site/versioned_docs/version-2.0-2.4/reference-guides/configure-openldap/openldap-config-reference.md",sourceDirName:"reference-guides/configure-openldap",slug:"/reference-guides/configure-openldap/openldap-config-reference",permalink:"/v2.0-v2.4/reference-guides/configure-openldap/openldap-config-reference",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/reference-guides/configure-openldap/openldap-config-reference.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663346276,formattedLastUpdatedAt:"9/16/2022",frontMatter:{title:"OpenLDAP Configuration Reference",weight:2},sidebar:"tutorialSidebar",previous:{title:"Configuring OpenLDAP",permalink:"/v2.0-v2.4/pages-for-subheaders/configure-openldap"},next:{title:"Kubernetes Concepts",permalink:"/v2.0-v2.4/reference-guides/kubernetes-concepts"}},l={},p=[{value:"Background: OpenLDAP Authentication Flow",id:"background-openldap-authentication-flow",level:2},{value:"User Schema Configuration",id:"user-schema-configuration",level:3},{value:"Group Schema Configuration",id:"group-schema-configuration",level:3}],d={toc:p};function h(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section is intended to be used as a reference when setting up an OpenLDAP authentication provider in Rancher."),(0,i.kt)("p",null,"For further details on configuring OpenLDAP, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://www.openldap.org/doc/"},"official documentation.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Before you proceed with the configuration, please familiarize yourself with the concepts of ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/about-authentication#external-authentication-configuration-and-principal-users"},"External Authentication Configuration and Principal Users"),".")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#background-openldap-authentication-flow"},"Background: OpenLDAP Authentication Flow")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#openldap-server-configuration"},"OpenLDAP server configuration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#user-group-schema-configuration"},"User/group schema configuration"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#user-schema-configuration"},"User schema configuration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#group-schema-configuration"},"Group schema configuration"))))),(0,i.kt)("h2",{id:"background-openldap-authentication-flow"},"Background: OpenLDAP Authentication Flow"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"When a user attempts to login with his LDAP credentials, Rancher creates an initial bind to the LDAP server using a service account with permissions to search the directory and read user/group attributes."),(0,i.kt)("li",{parentName:"ol"},"Rancher then searches the directory for the user by using a search filter based on the provided username and configured attribute mappings."),(0,i.kt)("li",{parentName:"ol"},"Once the user has been found, he is authenticated with another LDAP bind request using the user's DN and provided password."),(0,i.kt)("li",{parentName:"ol"},"Once authentication succeeded, Rancher then resolves the group memberships both from the membership attribute in the user's object and by performing a group search based on the configured user mapping attribute.")),(0,i.kt)("h1",{id:"openldap-server-configuration"},"OpenLDAP Server Configuration"),(0,i.kt)("p",null,"You will need to enter the address, port, and protocol to connect to your OpenLDAP server. ",(0,i.kt)("inlineCode",{parentName:"p"},"389")," is the standard port for insecure traffic, ",(0,i.kt)("inlineCode",{parentName:"p"},"636")," for TLS traffic."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Using TLS?")),(0,i.kt)("p",{parentName:"blockquote"},"If the certificate used by the OpenLDAP server is self-signed or not from a recognized certificate authority, make sure have at hand the CA certificate (concatenated with any intermediate certificates) in PEM format. You will have to paste in this certificate during the configuration so that Rancher is able to validate the certificate chain.")),(0,i.kt)("p",null,"If you are in doubt about the correct values to enter in the user/group Search Base configuration fields, consult your LDAP administrator or refer to the section ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-active-directory#annex-identify-search-base-and-schema-using-ldapsearch"},"Identify Search Base and Schema using ldapsearch")," in the Active Directory authentication documentation."),(0,i.kt)("figcaption",null,"OpenLDAP Server Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Hostname"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Specify the hostname or IP address of the OpenLDAP server")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Port"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Specify the port at which the OpenLDAP server is listening for connections. Unencrypted LDAP normally uses the standard port of 389, while LDAPS uses port 636.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"TLS"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Check this box to enable LDAP over SSL/TLS (commonly known as LDAPS). You will also need to paste in the CA certificate if the server uses a self-signed/enterprise-signed certificate.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Server Connection Timeout"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The duration in number of seconds that Rancher waits before considering the server unreachable.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Service Account Distinguished Name"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Enter the Distinguished Name (DN) of the user that should be used to bind, search and retrieve LDAP entries.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Service Account Password"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The password for the service account.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"User Search Base"),(0,i.kt)("td",{parentName:"tr",align:"left"},'Enter the Distinguished Name of the node in your directory tree from which to start searching for user objects. All users must be descendents of this base DN. For example: "ou=people,dc=acme,dc=com".')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Group Search Base"),(0,i.kt)("td",{parentName:"tr",align:"left"},"If your groups live under a different node than the one configured under ",(0,i.kt)("inlineCode",{parentName:"td"},"User Search Base"),' you will need to provide the Distinguished Name here. Otherwise leave this field empty. For example: "ou=groups,dc=acme,dc=com".')))),(0,i.kt)("h1",{id:"usergroup-schema-configuration"},"User/Group Schema Configuration"),(0,i.kt)("p",null,"If your OpenLDAP directory deviates from the standard OpenLDAP schema, you must complete the ",(0,i.kt)("strong",{parentName:"p"},"Customize Schema")," section to match it."),(0,i.kt)("p",null,"Note that the attribute mappings configured in this section are used by Rancher to construct search filters and resolve group membership. It is therefore always recommended to verify that the configuration here matches the schema used in your OpenLDAP."),(0,i.kt)("p",null,"If you are unfamiliar with the user/group schema used in the OpenLDAP server, consult your LDAP administrator or refer to the section ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-active-directory#annex-identify-search-base-and-schema-using-ldapsearch"},"Identify Search Base and Schema using ldapsearch")," in the Active Directory authentication documentation."),(0,i.kt)("h3",{id:"user-schema-configuration"},"User Schema Configuration"),(0,i.kt)("p",null,"The table below details the parameters for the user schema configuration."),(0,i.kt)("figcaption",null,"User Schema Configuration Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Object Class"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The name of the object class used for user objects in your domain. If defined, only specify the name of the object class - ",(0,i.kt)("em",{parentName:"td"},"don't")," include it in an LDAP wrapper such as &(objectClass=xxxx)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Username Attribute"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The user attribute whose value is suitable as a display name.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Login Attribute"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The attribute whose value matches the username part of credentials entered by your users when logging in to Rancher. This is typically ",(0,i.kt)("inlineCode",{parentName:"td"},"uid"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"User Member Attribute"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The user attribute containing the Distinguished Name of groups a user is member of. Usually this is one of ",(0,i.kt)("inlineCode",{parentName:"td"},"memberOf")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"isMemberOf"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Search Attribute"),(0,i.kt)("td",{parentName:"tr",align:"left"},'When a user enters text to add users or groups in the UI, Rancher queries the LDAP server and attempts to match users by the attributes provided in this setting. Multiple attributes can be specified by separating them with the pipe ("',"|",'") symbol.')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"User Enabled Attribute"),(0,i.kt)("td",{parentName:"tr",align:"left"},"If the schema of your OpenLDAP server supports a user attribute whose value can be evaluated to determine if the account is disabled or locked, enter the name of that attribute. The default OpenLDAP schema does not support this and the field should usually be left empty.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Disabled Status Bitmask"),(0,i.kt)("td",{parentName:"tr",align:"left"},"This is the value for a disabled/locked user account. The parameter is ignored if ",(0,i.kt)("inlineCode",{parentName:"td"},"User Enabled Attribute")," is empty.")))),(0,i.kt)("h3",{id:"group-schema-configuration"},"Group Schema Configuration"),(0,i.kt)("p",null,"The table below details the parameters for the group schema configuration."),(0,i.kt)("figcaption",null,"Group Schema Configuration Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Object Class"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The name of the object class used for group entries in your domain. If defined, only specify the name of the object class - ",(0,i.kt)("em",{parentName:"td"},"don't")," include it in an LDAP wrapper such as &(objectClass=xxxx)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Name Attribute"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The group attribute whose value is suitable for a display name.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Group Member User Attribute"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The name of the ",(0,i.kt)("strong",{parentName:"td"},"user attribute")," whose format matches the group members in the ",(0,i.kt)("inlineCode",{parentName:"td"},"Group Member Mapping Attribute"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Group Member Mapping Attribute"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The name of the group attribute containing the members of a group.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Search Attribute"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Attribute used to construct search filters when adding groups to clusters or projects in the UI. See description of user schema ",(0,i.kt)("inlineCode",{parentName:"td"},"Search Attribute"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Group DN Attribute"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The name of the group attribute whose format matches the values in the user's group membership attribute. See  ",(0,i.kt)("inlineCode",{parentName:"td"},"User Member Attribute"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Nested Group Membership"),(0,i.kt)("td",{parentName:"tr",align:"left"},"This settings defines whether Rancher should resolve nested group memberships. Use only if your organization makes use of these nested memberships (ie. you have groups that contain other groups as members). This option is disabled if you are using Shibboleth.")))))}h.isMDXComponent=!0}}]);