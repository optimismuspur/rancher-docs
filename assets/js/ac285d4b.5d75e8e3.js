"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[72884],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,k=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(k,s(s({ref:t},p),{},{components:n})):a.createElement(k,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(67294),r=n(86010),o="tabItem_Ymn6";function s(e){var t=e.children,n=e.hidden,s=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(87462),r=n(67294),o=n(86010),s=n(72389),i=n(67392),l=n(7094),c=n(12466),p="tabList__CuJ",u="tabItem_LNqP";function d(e){var t,n,s=e.lazy,d=e.block,h=e.defaultValue,k=e.values,m=e.groupId,b=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=k?k:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.l)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===h?h:null!=(t=null!=h?h:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:f[0].props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,l.U)(),w=N.tabGroupChoices,E=N.setTabGroupChoices,R=(0,r.useState)(y),T=R[0],C=R[1],O=[],S=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var K=w[m];null!=K&&K!==T&&v.some((function(e){return e.value===K}))&&C(K)}var x=function(e){var t=e.currentTarget,n=O.indexOf(t),a=v[n].value;a!==T&&(S(t),C(a),null!=m&&E(m,String(a)))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=O.indexOf(e.currentTarget)+1;n=null!=(a=O[r])?a:O[0];break;case"ArrowLeft":var o,s=O.indexOf(e.currentTarget)-1;n=null!=(o=O[s])?o:O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},b)},v.map((function(e){var t=e.value,n=e.label,s=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return O.push(e)},onKeyDown:I,onFocus:x,onClick:x},s,{className:(0,o.Z)("tabs__item",u,null==s?void 0:s.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(f.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function h(e){var t=(0,s.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},27820:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return h}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),s=n(65488),i=n(85162),l=["components"],c={title:"Backing up Rancher Installed on an RKE Kubernetes Cluster",shortTitle:"RKE Installs",weight:2,aliases:["/rancher/v2.0-v2.4/en/installation/after-installation/k8s-install-backup-and-restoration/","/rancher/v2.0-v2.4/en/installation/backups-and-restoration/ha-backup-and-restoration/","/rancher/v2.0-v2.4/en/backups/backups/ha-backups","/rancher/v2.0-v2.4/en/backups/backups/k8s-backups/ha-backups","/rancher/v2.0-v2.4/en/backups/legacy/backup/k8s-backups/ha-backups/","/rancher/v2.0-v2.4/en/backups/legacy/backups/ha-backups","/rancher/v2.0-v2.4/en/backups/legacy/backup/ha-backups","/rancher/v2.0-v2.4/en/backups/v2.0.x-v2.4.x/backup/rke-backups","/rancher/v2.x/en/backups/v2.0.x-v2.4.x/backup/rke-backups/"]},p=void 0,u={unversionedId:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters",id:"version-2.0-2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters",title:"Backing up Rancher Installed on an RKE Kubernetes Cluster",description:"This section describes how to create backups of your high-availability Rancher install.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters.md",sourceDirName:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery",slug:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663346276,formattedLastUpdatedAt:"9/16/2022",frontMatter:{title:"Backing up Rancher Installed on an RKE Kubernetes Cluster",shortTitle:"RKE Installs",weight:2,aliases:["/rancher/v2.0-v2.4/en/installation/after-installation/k8s-install-backup-and-restoration/","/rancher/v2.0-v2.4/en/installation/backups-and-restoration/ha-backup-and-restoration/","/rancher/v2.0-v2.4/en/backups/backups/ha-backups","/rancher/v2.0-v2.4/en/backups/backups/k8s-backups/ha-backups","/rancher/v2.0-v2.4/en/backups/legacy/backup/k8s-backups/ha-backups/","/rancher/v2.0-v2.4/en/backups/legacy/backups/ha-backups","/rancher/v2.0-v2.4/en/backups/legacy/backup/ha-backups","/rancher/v2.0-v2.4/en/backups/v2.0.x-v2.4.x/backup/rke-backups","/rancher/v2.x/en/backups/v2.0.x-v2.4.x/backup/rke-backups/"]},sidebar:"tutorialSidebar",previous:{title:"Restoring Rancher Installed on a K3s Kubernetes Cluster",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-k3s-installed-rancher"},next:{title:"Restoring Backups\u2014Kubernetes installs",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup"}},d={},h=[{value:"RKE Version",id:"rke-version",level:3},{value:"RKE Config File",id:"rke-config-file",level:3},{value:"Option A: Recurring Snapshots",id:"option-a-recurring-snapshots",level:3},{value:"Option B: One-Time Snapshots",id:"option-b-one-time-snapshots",level:3}],k={toc:h};function m(e){var t=e.components,c=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},k,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section describes how to create backups of your high-availability Rancher install."),(0,o.kt)("p",null,"In an RKE installation, the cluster data is replicated on each of three etcd nodes in the cluster, providing redundancy and data duplication in case one of the nodes fails."),(0,o.kt)("figcaption",null,"Cluster Data within an RKE Kubernetes Cluster Running the Rancher Management Server"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Architecture of an RKE Kubernetes cluster running the Rancher management server",src:n(17248).Z,width:"341",height:"322"})),(0,o.kt)("h1",{id:"requirements"},"Requirements"),(0,o.kt)("h3",{id:"rke-version"},"RKE Version"),(0,o.kt)("p",null,"The commands for taking ",(0,o.kt)("inlineCode",{parentName:"p"},"etcd")," snapshots are only available in RKE v0.1.7 and later."),(0,o.kt)("h3",{id:"rke-config-file"},"RKE Config File"),(0,o.kt)("p",null,"You'll need the RKE config file that you used for Rancher install, ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml"),". You created this file during your initial install. Place this file in same directory as the RKE binary."),(0,o.kt)("h1",{id:"backup-outline"},"Backup Outline"),(0,o.kt)("p",null,"Backing up your high-availability Rancher cluster is process that involves completing multiple tasks."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"#1-take-snapshots-of-the-etcd-database"},"Take Snapshots of the ",(0,o.kt)("inlineCode",{parentName:"a"},"etcd")," Database")),(0,o.kt)("p",{parentName:"li"},"Take snapshots of your current ",(0,o.kt)("inlineCode",{parentName:"p"},"etcd")," database using Rancher Kubernetes Engine (RKE).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"#2-back-up-local-snapshots-to-a-safe-location"},"Store Snapshot(s) Externally")),(0,o.kt)("p",{parentName:"li"},"After taking your snapshots, export them to a safe location that won't be affected if your cluster encounters issues."))),(0,o.kt)("h1",{id:"1-take-snapshots-of-the-etcd-database"},"1. Take Snapshots of the ",(0,o.kt)("inlineCode",{parentName:"h1"},"etcd")," Database"),(0,o.kt)("p",null,"Take snapshots of your ",(0,o.kt)("inlineCode",{parentName:"p"},"etcd")," database. You can use these snapshots later to recover from a disaster scenario. There are two ways to take snapshots: recurringly, or as a one-off.  Each option is better suited to a specific use case. Read the short description below each link to know when to use each option."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"#option-a-recurring-snapshots"},"Option A: Recurring Snapshots")),(0,o.kt)("p",{parentName:"li"},"  After you stand up a high-availability Rancher install, we recommend configuring RKE to automatically take recurring snapshots so that you always have a safe restore point available.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"#option-b-one-time-snapshots"},"Option B: One-Time Snapshots")),(0,o.kt)("p",{parentName:"li"},"  We advise taking one-time snapshots before events like upgrades or restore of another snapshot."))),(0,o.kt)("h3",{id:"option-a-recurring-snapshots"},"Option A: Recurring Snapshots"),(0,o.kt)("p",null,"For all high-availability Rancher installs, we recommend taking recurring snapshots so that you always have a safe restore point available."),(0,o.kt)("p",null,"To take recurring snapshots, enable the ",(0,o.kt)("inlineCode",{parentName:"p"},"etcd-snapshot")," service, which is a service that's included with RKE. This service runs in a service container alongside the ",(0,o.kt)("inlineCode",{parentName:"p"},"etcd")," container. You can enable this service by adding some code to ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"To Enable Recurring Snapshots:")),(0,o.kt)("p",null,"The steps to enable recurring snapshots differ based on the version of RKE."),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"RKE v0.2.0+",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml")," with your favorite text editor.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Edit the code for the ",(0,o.kt)("inlineCode",{parentName:"p"},"etcd")," service to enable recurring snapshots. Snapshots can be saved in a S3 compatible backend."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'services:\n  etcd:\n    backup_config:\n      enabled: true     # enables recurring etcd snapshots\n      interval_hours: 6 # time increment between snapshots\n      retention: 60     # time in days before snapshot purge\n      # Optional S3\n      s3backupconfig:\n        access_key: "myaccesskey"\n        secret_key:  "myaccesssecret"\n        bucket_name: "my-backup-bucket"\n        folder: "folder-name" # Available as of v2.3.0\n        endpoint: "s3.eu-west-1.amazonaws.com"\n        region: "eu-west-1"\n        custom_ca: |-\n          -----BEGIN CERTIFICATE-----\n          $CERTIFICATE\n          -----END CERTIFICATE-----\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Save and close ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open ",(0,o.kt)("strong",{parentName:"p"},"Terminal")," and change directory to the location of the RKE binary. Your ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml")," file must reside in the same directory.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"rke up --config rancher-cluster.yml\n")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," RKE is configured to take recurring snapshots of ",(0,o.kt)("inlineCode",{parentName:"p"},"etcd")," on all nodes running the ",(0,o.kt)("inlineCode",{parentName:"p"},"etcd")," role. Snapshots are saved locally to the following directory: ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/rke/etcd-snapshots/"),". If configured, the snapshots are also uploaded to your S3 compatible backend.")),(0,o.kt)(i.Z,{value:"RKE v0.1.x",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml")," with your favorite text editor.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Edit the code for the ",(0,o.kt)("inlineCode",{parentName:"p"},"etcd")," service to enable recurring snapshots."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"services:\n  etcd:\n    snapshot: true # enables recurring etcd snapshots\n    creation: 6h0s # time increment between snapshots\n    retention: 24h # time increment before snapshot purge\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Save and close ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open ",(0,o.kt)("strong",{parentName:"p"},"Terminal")," and change directory to the location of the RKE binary. Your ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml")," file must reside in the same directory.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"rke up --config rancher-cluster.yml\n")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," RKE is configured to take recurring snapshots of ",(0,o.kt)("inlineCode",{parentName:"p"},"etcd")," on all nodes running the ",(0,o.kt)("inlineCode",{parentName:"p"},"etcd")," role. Snapshots are saved locally to the following directory: ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/rke/etcd-snapshots/"),"."))),(0,o.kt)("h3",{id:"option-b-one-time-snapshots"},"Option B: One-Time Snapshots"),(0,o.kt)("p",null,"When you're about to upgrade Rancher or restore it to a previous snapshot, you should snapshot your live image so that you have a backup of ",(0,o.kt)("inlineCode",{parentName:"p"},"etcd")," in its last known state."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"To Take a One-Time Local Snapshot:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open ",(0,o.kt)("strong",{parentName:"p"},"Terminal")," and change directory to the location of the RKE binary. Your ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml")," file must reside in the same directory.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the following command. Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<SNAPSHOT.db>")," with any name that you want to use for the snapshot (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"upgrade.db"),")."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"rke etcd snapshot-save \\\n--name <SNAPSHOT.db> \\\n--config rancher-cluster.yml\n")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," RKE takes a snapshot of ",(0,o.kt)("inlineCode",{parentName:"p"},"etcd")," running on each ",(0,o.kt)("inlineCode",{parentName:"p"},"etcd")," node. The file is saved to ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/rke/etcd-snapshots"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"To Take a One-Time S3 Snapshot:")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Available as of RKE v0.2.0")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open ",(0,o.kt)("strong",{parentName:"p"},"Terminal")," and change directory to the location of the RKE binary. Your ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml")," file must reside in the same directory.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the following command. Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<SNAPSHOT.db>")," with any name that you want to use for the snapshot (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"upgrade.db"),")."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"rke etcd snapshot-save \\\n  --config rancher-cluster.yml \\\n  --name snapshot-name  \\\n  --s3 \\\n  --access-key S3_ACCESS_KEY \\\n  --secret-key S3_SECRET_KEY \\\n  --bucket-name s3-bucket-name  \\\n  --s3-endpoint  s3.amazonaws.com \\\n  --folder folder-name # Available as of v2.3.0\n")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," RKE takes a snapshot of ",(0,o.kt)("inlineCode",{parentName:"p"},"etcd")," running on each ",(0,o.kt)("inlineCode",{parentName:"p"},"etcd")," node. The file is saved to ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/rke/etcd-snapshots"),". It is also uploaded to the S3 compatible backend."),(0,o.kt)("h1",{id:"2-back-up-local-snapshots-to-a-safe-location"},"2. Back up Local Snapshots to a Safe Location"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," If you are using RKE v0.2.0, you can enable saving the backups to a S3 compatible backend directly and skip this step.")),(0,o.kt)("p",null,"After taking the ",(0,o.kt)("inlineCode",{parentName:"p"},"etcd")," snapshots, save them to a safe location so that they're unaffected if your cluster experiences a disaster scenario. This location should be persistent."),(0,o.kt)("p",null,"In this documentation, as an example, we're using Amazon S3 as our safe location, and ",(0,o.kt)("a",{parentName:"p",href:"http://s3tools.org/s3cmd"},"S3cmd")," as our tool to create the backups. The backup location and tool that you use are ultimately your decision."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"root@node:~# s3cmd mb s3://rke-etcd-snapshots\nroot@node:~# s3cmd put /opt/rke/etcd-snapshots/snapshot.db s3://rke-etcd-snapshots/\n")))}m.isMDXComponent=!0},17248:function(e,t,n){t.Z=n.p+"assets/images/rke-server-storage-479a90c18ba2cf4b197554330d05afe8.svg"}}]);