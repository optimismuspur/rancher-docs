"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[4589],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),m=a,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(h,i(i({ref:n},u),{},{components:t})):r.createElement(h,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},95009:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],s={title:"Hardening Guide with CIS 1.6 Benchmark",weight:100,aliases:["/rancher/v2.x/en/security/rancher-2.5/1.6-hardening-2.5/"]},c=void 0,l={unversionedId:"reference-guides/rancher-security/rancher-v2.5-hardening-guides/hardening-guide-with-cis-v1.6-benchmark",id:"version-2.5/reference-guides/rancher-security/rancher-v2.5-hardening-guides/hardening-guide-with-cis-v1.6-benchmark",title:"Hardening Guide with CIS 1.6 Benchmark",description:"This document provides prescriptive guidance for hardening a production installation of a RKE cluster to be used with Rancher v2.5.4. It outlines the configurations and controls required to address Kubernetes benchmark controls from the Center for Information Security (CIS).",source:"@site/versioned_docs/version-2.5/reference-guides/rancher-security/rancher-v2.5-hardening-guides/hardening-guide-with-cis-v1.6-benchmark.md",sourceDirName:"reference-guides/rancher-security/rancher-v2.5-hardening-guides",slug:"/reference-guides/rancher-security/rancher-v2.5-hardening-guides/hardening-guide-with-cis-v1.6-benchmark",permalink:"/zh/v2.5/reference-guides/rancher-security/rancher-v2.5-hardening-guides/hardening-guide-with-cis-v1.6-benchmark",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/reference-guides/rancher-security/rancher-v2.5-hardening-guides/hardening-guide-with-cis-v1.6-benchmark.md",tags:[],version:"2.5",lastUpdatedAt:1663174327,formattedLastUpdatedAt:"2022/9/14",frontMatter:{title:"Hardening Guide with CIS 1.6 Benchmark",weight:100,aliases:["/rancher/v2.x/en/security/rancher-2.5/1.6-hardening-2.5/"]},sidebar:"tutorialSidebar",previous:{title:"Self-Assessment and Hardening Guides for Rancher v2.5",permalink:"/zh/v2.5/pages-for-subheaders/rancher-v2.5-hardening-guides"},next:{title:"CIS 1.6 Benchmark - Self-Assessment Guide - Rancher v2.5.4",permalink:"/zh/v2.5/reference-guides/rancher-security/rancher-v2.5-hardening-guides/self-assessment-guide-with-cis-v1.6-benchmark"}},u={},d=[{value:"Overview",id:"overview",level:3},{value:"Known Issues",id:"known-issues",level:4},{value:"Configure Kernel Runtime Parameters",id:"configure-kernel-runtime-parameters",level:3},{value:"Configure <code>etcd</code> user and group",id:"configure-etcd-user-and-group",level:3},{value:"create <code>etcd</code> user and group",id:"create-etcd-user-and-group",level:4},{value:"Set <code>automountServiceAccountToken</code> to <code>false</code> for <code>default</code> service accounts",id:"set-automountserviceaccounttoken-to-false-for-default-service-accounts",level:4},{value:"Ensure that all Namespaces have Network Policies defined",id:"ensure-that-all-namespaces-have-network-policies-defined",level:3},{value:"Reference Hardened RKE <code>cluster.yml</code> configuration",id:"reference-hardened-rke-clusteryml-configuration",level:3},{value:"Reference Hardened RKE Template configuration",id:"reference-hardened-rke-template-configuration",level:3},{value:"Hardened Reference Ubuntu 20.04 LTS <strong>cloud-config</strong>:",id:"hardened-reference-ubuntu-2004-lts-cloud-config",level:3}],p={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document provides prescriptive guidance for hardening a production installation of a RKE cluster to be used with Rancher v2.5.4. It outlines the configurations and controls required to address Kubernetes benchmark controls from the Center for Information Security (CIS)."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This hardening guide describes how to secure the nodes in your cluster, and it is recommended to follow this guide before installing Kubernetes.")),(0,o.kt)("p",null,"This hardening guide is intended to be used for RKE clusters and associated with specific versions of the CIS Kubernetes Benchmark, Kubernetes, and Rancher:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Rancher Version"),(0,o.kt)("th",{parentName:"tr",align:null},"CIS Benchmark Version"),(0,o.kt)("th",{parentName:"tr",align:null},"Kubernetes Version"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Rancher v2.5.4"),(0,o.kt)("td",{parentName:"tr",align:null},"Benchmark 1.6"),(0,o.kt)("td",{parentName:"tr",align:null},"Kubernetes v1.18")))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://releases.rancher.com/documents/security/2.5/Rancher_Hardening_Guide_CIS_1.6.pdf"},"Click here to download a PDF version of this document")),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This document provides prescriptive guidance for hardening a RKE cluster to be used for installing Rancher v2.5.4 with Kubernetes v1.18 or provisioning a RKE cluster with Kubernetes v1.18 to be used within Rancher v2.5.4. It outlines the configurations required to address Kubernetes benchmark controls from the Center for Information Security (CIS)."),(0,o.kt)("p",null,"For more detail about evaluating a hardened cluster against the official CIS benchmark, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/reference-guides/rancher-security/rancher-v2.5-hardening-guides/self-assessment-guide-with-cis-v1.6-benchmark"},"CIS 1.6 Benchmark - Self-Assessment Guide - Rancher v2.5.4"),"."),(0,o.kt)("h4",{id:"known-issues"},"Known Issues"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Rancher ",(0,o.kt)("strong",{parentName:"li"},"exec shell")," and ",(0,o.kt)("strong",{parentName:"li"},"view logs")," for pods are ",(0,o.kt)("strong",{parentName:"li"},"not")," functional in a CIS 1.6 hardened setup when only public IP is provided when registering custom nodes. This functionality requires a private IP to be provided when registering the custom nodes."),(0,o.kt)("li",{parentName:"ul"},"When setting the ",(0,o.kt)("inlineCode",{parentName:"li"},"default_pod_security_policy_template_id:")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"restricted")," Rancher creates ",(0,o.kt)("strong",{parentName:"li"},"RoleBindings")," and ",(0,o.kt)("strong",{parentName:"li"},"ClusterRoleBindings")," on the default service accounts. The CIS 1.6 5.1.5 check requires the default service accounts have no roles or cluster roles bound to it apart from the defaults. In addition the default service accounts should be configured such that it does not provide a service account token and does not have any explicit rights assignments.")),(0,o.kt)("p",null,"Migration Rancher from 2.4 to 2.5. Addons were removed in HG 2.5, and therefore namespaces on migration may be not created on the downstream clusters. Pod may fail to run because of missing namesapce like ingress-nginx, cattle-system."),(0,o.kt)("h3",{id:"configure-kernel-runtime-parameters"},"Configure Kernel Runtime Parameters"),(0,o.kt)("p",null,"The following ",(0,o.kt)("inlineCode",{parentName:"p"},"sysctl")," configuration is recommended for all nodes type in the cluster. Set the following parameters in ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/sysctl.d/90-kubelet.conf"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"vm.overcommit_memory=1\nvm.panic_on_oom=0\nkernel.panic=10\nkernel.panic_on_oops=1\nkernel.keys.root_maxbytes=25000000\n")),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"sysctl -p /etc/sysctl.d/90-kubelet.conf")," to enable the settings."),(0,o.kt)("h3",{id:"configure-etcd-user-and-group"},"Configure ",(0,o.kt)("inlineCode",{parentName:"h3"},"etcd")," user and group"),(0,o.kt)("p",null,"A user account and group for the ",(0,o.kt)("strong",{parentName:"p"},"etcd")," service is required to be setup before installing RKE. The ",(0,o.kt)("strong",{parentName:"p"},"uid")," and ",(0,o.kt)("strong",{parentName:"p"},"gid")," for the ",(0,o.kt)("strong",{parentName:"p"},"etcd")," user will be used in the RKE ",(0,o.kt)("strong",{parentName:"p"},"config.yml")," to set the proper permissions for files and directories during installation time."),(0,o.kt)("h4",{id:"create-etcd-user-and-group"},"create ",(0,o.kt)("inlineCode",{parentName:"h4"},"etcd")," user and group"),(0,o.kt)("p",null,"To create the ",(0,o.kt)("strong",{parentName:"p"},"etcd")," group run the following console commands."),(0,o.kt)("p",null,"The commands below use ",(0,o.kt)("inlineCode",{parentName:"p"},"52034")," for ",(0,o.kt)("strong",{parentName:"p"},"uid")," and ",(0,o.kt)("strong",{parentName:"p"},"gid")," are for example purposes. Any valid unused ",(0,o.kt)("strong",{parentName:"p"},"uid")," or ",(0,o.kt)("strong",{parentName:"p"},"gid")," could also be used in lieu of ",(0,o.kt)("inlineCode",{parentName:"p"},"52034"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'groupadd --gid 52034 etcd\nuseradd --comment "etcd service account" --uid 52034 --gid 52034 etcd\n')),(0,o.kt)("p",null,"Update the RKE ",(0,o.kt)("strong",{parentName:"p"},"config.yml")," with the ",(0,o.kt)("strong",{parentName:"p"},"uid")," and ",(0,o.kt)("strong",{parentName:"p"},"gid")," of the ",(0,o.kt)("strong",{parentName:"p"},"etcd")," user:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"services:\n  etcd:\n    gid: 52034\n    uid: 52034\n")),(0,o.kt)("h4",{id:"set-automountserviceaccounttoken-to-false-for-default-service-accounts"},"Set ",(0,o.kt)("inlineCode",{parentName:"h4"},"automountServiceAccountToken")," to ",(0,o.kt)("inlineCode",{parentName:"h4"},"false")," for ",(0,o.kt)("inlineCode",{parentName:"h4"},"default")," service accounts"),(0,o.kt)("p",null,"Kubernetes provides a default service account which is used by cluster workloads where no specific service account is assigned to the pod. Where access to the Kubernetes API from a pod is required, a specific service account should be created for that pod, and rights granted to that service account. The default service account should be configured such that it does not provide a service account token and does not have any explicit rights assignments.  "),(0,o.kt)("p",null,"For each namespace including ",(0,o.kt)("strong",{parentName:"p"},"default")," and ",(0,o.kt)("strong",{parentName:"p"},"kube-system")," on a standard RKE install the ",(0,o.kt)("strong",{parentName:"p"},"default")," service account must include this value:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"automountServiceAccountToken: false\n")),(0,o.kt)("p",null,"Save the following yaml to a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"account_update.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: default\nautomountServiceAccountToken: false\n")),(0,o.kt)("p",null,"Create a bash script file called ",(0,o.kt)("inlineCode",{parentName:"p"},"account_update.sh"),". Be sure to ",(0,o.kt)("inlineCode",{parentName:"p"},"chmod +x account_update.sh")," so the script has execute permissions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash -e\n\nfor namespace in $(kubectl get namespaces -A -o json | jq -r '.items[].metadata.name'); do\n  kubectl patch serviceaccount default -n ${namespace} -p \"$(cat account_update.yaml)\"\ndone\n")),(0,o.kt)("h3",{id:"ensure-that-all-namespaces-have-network-policies-defined"},"Ensure that all Namespaces have Network Policies defined"),(0,o.kt)("p",null,"Running different applications on the same Kubernetes cluster creates a risk of one\ncompromised application attacking a neighboring application. Network segmentation is\nimportant to ensure that containers can communicate only with those they are supposed\nto. A network policy is a specification of how selections of pods are allowed to\ncommunicate with each other and other network endpoints."),(0,o.kt)("p",null,"Network Policies are namespace scoped. When a network policy is introduced to a given\nnamespace, all traffic not allowed by the policy is denied. However, if there are no network\npolicies in a namespace all traffic will be allowed into and out of the pods in that\nnamespace. To enforce network policies, a CNI (container network interface) plugin must be enabled.\nThis guide uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/projectcalico/canal"},"canal")," to provide the policy enforcement.\nAdditional information about CNI providers can be found\n",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/blog/2019/2019-03-21-comparing-kubernetes-cni-providers-flannel-calico-canal-and-weave/"},"here")),(0,o.kt)("p",null,"Once a CNI provider is enabled on a cluster a default network policy can be applied. For reference purposes a\n",(0,o.kt)("strong",{parentName:"p"},"permissive")," example is provide below. If you want to allow all traffic to all pods in a namespace\n(even if policies are added that cause some pods to be treated as \u201cisolated\u201d),\nyou can create a policy that explicitly allows all traffic in that namespace. Save the following ",(0,o.kt)("inlineCode",{parentName:"p"},"yaml")," as\n",(0,o.kt)("inlineCode",{parentName:"p"},"default-allow-all.yaml"),". Additional ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/network-policies/"},"documentation"),"\nabout network policies can be found on the Kubernetes site."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This ",(0,o.kt)("inlineCode",{parentName:"p"},"NetworkPolicy")," is not recommended for production use")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: default-allow-all\nspec:\n  podSelector: {}\n  ingress:\n  - {}\n  egress:\n  - {}\n  policyTypes:\n  - Ingress\n  - Egress\n")),(0,o.kt)("p",null,"Create a bash script file called ",(0,o.kt)("inlineCode",{parentName:"p"},"apply_networkPolicy_to_all_ns.sh"),". Be sure to\n",(0,o.kt)("inlineCode",{parentName:"p"},"chmod +x apply_networkPolicy_to_all_ns.sh")," so the script has execute permissions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash -e\n\nfor namespace in $(kubectl get namespaces -A -o json | jq -r '.items[].metadata.name'); do\n  kubectl apply -f default-allow-all.yaml -n ${namespace}\ndone\n")),(0,o.kt)("p",null,"Execute this script to apply the ",(0,o.kt)("inlineCode",{parentName:"p"},"default-allow-all.yaml")," the ",(0,o.kt)("strong",{parentName:"p"},"permissive")," ",(0,o.kt)("inlineCode",{parentName:"p"},"NetworkPolicy")," to all namespaces."),(0,o.kt)("h3",{id:"reference-hardened-rke-clusteryml-configuration"},"Reference Hardened RKE ",(0,o.kt)("inlineCode",{parentName:"h3"},"cluster.yml")," configuration"),(0,o.kt)("p",null,"The reference ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.yml")," is used by the RKE CLI that provides the configuration needed to achieve a hardened install\nof Rancher Kubernetes Engine (RKE). Install ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/installation/"},"documentation")," is\nprovided with additional details about the configuration items. This reference ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.yml")," does not include the required ",(0,o.kt)("strong",{parentName:"p"},"nodes")," directive which will vary depending on your environment. Documentation for node configuration can be found here: ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/nodes"},"https://rancher.com/docs/rke/latest/en/config-options/nodes")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# If you intend to deploy Kubernetes in an air-gapped environment,\n# please consult the documentation on how to configure custom RKE images.\n# https://rancher.com/docs/rke/latest/en/installation/\n\n# the nodes directive is required and will vary depending on your environment\n# documentation for node configuration can be found here:\n# https://rancher.com/docs/rke/latest/en/config-options/nodes\nnodes: []\nservices:\n  etcd:\n    image: ""\n    extra_args: {}\n    extra_binds: []\n    extra_env: []\n    win_extra_args: {}\n    win_extra_binds: []\n    win_extra_env: []\n    external_urls: []\n    ca_cert: ""\n    cert: ""\n    key: ""\n    path: ""\n    uid: 52034\n    gid: 52034\n    snapshot: false\n    retention: ""\n    creation: ""\n    backup_config: null\n  kube-api:\n    image: ""\n    extra_args: {}\n    extra_binds: []\n    extra_env: []\n    win_extra_args: {}\n    win_extra_binds: []\n    win_extra_env: []\n    service_cluster_ip_range: ""\n    service_node_port_range: ""\n    pod_security_policy: true\n    always_pull_images: false\n    secrets_encryption_config:\n      enabled: true\n      custom_config: null\n    audit_log:\n      enabled: true\n      configuration: null\n    admission_configuration: null\n    event_rate_limit:\n      enabled: true\n      configuration: null\n  kube-controller:\n    image: ""\n    extra_args:\n      feature-gates: RotateKubeletServerCertificate=true\n    extra_binds: []\n    extra_env: []\n    win_extra_args: {}\n    win_extra_binds: []\n    win_extra_env: []\n    cluster_cidr: ""\n    service_cluster_ip_range: ""\n  scheduler:\n    image: ""\n    extra_args: {}\n    extra_binds: []\n    extra_env: []\n    win_extra_args: {}\n    win_extra_binds: []\n    win_extra_env: []\n  kubelet:\n    image: ""\n    extra_args:\n      feature-gates: RotateKubeletServerCertificate=true\n      protect-kernel-defaults: "true"\n      tls-cipher-suites: TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256\n    extra_binds: []\n    extra_env: []\n    win_extra_args: {}\n    win_extra_binds: []\n    win_extra_env: []\n    cluster_domain: cluster.local\n    infra_container_image: ""\n    cluster_dns_server: ""\n    fail_swap_on: false\n    generate_serving_certificate: true\n  kubeproxy:\n    image: ""\n    extra_args: {}\n    extra_binds: []\n    extra_env: []\n    win_extra_args: {}\n    win_extra_binds: []\n    win_extra_env: []\nnetwork:\n  plugin: ""\n  options: {}\n  mtu: 0\n  node_selector: {}\n  update_strategy: null\nauthentication:\n  strategy: ""\n  sans: []\n  webhook: null\naddons: |\n  apiVersion: policy/v1beta1\n  kind: PodSecurityPolicy\n  metadata:\n    name: restricted\n  spec:\n    requiredDropCapabilities:\n    - NET_RAW\n    privileged: false\n    allowPrivilegeEscalation: false\n    defaultAllowPrivilegeEscalation: false\n    fsGroup:\n      rule: RunAsAny\n    runAsUser:\n      rule: MustRunAsNonRoot\n    seLinux:\n      rule: RunAsAny\n    supplementalGroups:\n      rule: RunAsAny\n    volumes:\n    - emptyDir\n    - secret\n    - persistentVolumeClaim\n    - downwardAPI\n    - configMap\n    - projected\n  ---\n  apiVersion: rbac.authorization.k8s.io/v1\n  kind: ClusterRole\n  metadata:\n    name: psp:restricted\n  rules:\n  - apiGroups:\n    - extensions\n    resourceNames:\n    - restricted\n    resources:\n    - podsecuritypolicies\n    verbs:\n    - use\n  ---\n  apiVersion: rbac.authorization.k8s.io/v1\n  kind: ClusterRoleBinding\n  metadata:\n    name: psp:restricted\n  roleRef:\n    apiGroup: rbac.authorization.k8s.io\n    kind: ClusterRole\n    name: psp:restricted\n  subjects:\n  - apiGroup: rbac.authorization.k8s.io\n    kind: Group\n    name: system:serviceaccounts\n  - apiGroup: rbac.authorization.k8s.io\n    kind: Group\n    name: system:authenticated\n  ---\n  apiVersion: networking.k8s.io/v1\n  kind: NetworkPolicy\n  metadata:\n    name: default-allow-all\n  spec:\n    podSelector: {}\n    ingress:\n    - {}\n    egress:\n    - {}\n    policyTypes:\n    - Ingress\n    - Egress\n  ---\n  apiVersion: v1\n  kind: ServiceAccount\n  metadata:\n    name: default\n  automountServiceAccountToken: false\naddons_include: []\nsystem_images:\n  etcd: ""\n  alpine: ""\n  nginx_proxy: ""\n  cert_downloader: ""\n  kubernetes_services_sidecar: ""\n  kubedns: ""\n  dnsmasq: ""\n  kubedns_sidecar: ""\n  kubedns_autoscaler: ""\n  coredns: ""\n  coredns_autoscaler: ""\n  nodelocal: ""\n  kubernetes: ""\n  flannel: ""\n  flannel_cni: ""\n  calico_node: ""\n  calico_cni: ""\n  calico_controllers: ""\n  calico_ctl: ""\n  calico_flexvol: ""\n  canal_node: ""\n  canal_cni: ""\n  canal_controllers: ""\n  canal_flannel: ""\n  canal_flexvol: ""\n  weave_node: ""\n  weave_cni: ""\n  pod_infra_container: ""\n  ingress: ""\n  ingress_backend: ""\n  metrics_server: ""\n  windows_pod_infra_container: ""\nssh_key_path: ""\nssh_cert_path: ""\nssh_agent_auth: false\nauthorization:\n  mode: ""\n  options: {}\nignore_docker_version: false\nkubernetes_version: v1.18.12-rancher1-1\nprivate_registries: []\ningress:\n  provider: ""\n  options: {}\n  node_selector: {}\n  extra_args: {}\n  dns_policy: ""\n  extra_envs: []\n  extra_volumes: []\n  extra_volume_mounts: []\n  update_strategy: null\n  http_port: 0\n  https_port: 0\n  network_mode: ""\ncluster_name:\ncloud_provider:\n  name: ""\nprefix_path: ""\nwin_prefix_path: ""\naddon_job_timeout: 0\nbastion_host:\n  address: ""\n  port: ""\n  user: ""\n  ssh_key: ""\n  ssh_key_path: ""\n  ssh_cert: ""\n  ssh_cert_path: ""\nmonitoring:\n  provider: ""\n  options: {}\n  node_selector: {}\n  update_strategy: null\n  replicas: null\nrestore:\n  restore: false\n  snapshot_name: ""\ndns: null\nupgrade_strategy:\n  max_unavailable_worker: ""\n  max_unavailable_controlplane: ""\n  drain: null\n  node_drain_input: null\n')),(0,o.kt)("h3",{id:"reference-hardened-rke-template-configuration"},"Reference Hardened RKE Template configuration"),(0,o.kt)("p",null,"The reference RKE Template provides the configuration needed to achieve a hardened install of Kubenetes.\nRKE Templates are used to provision Kubernetes and define Rancher settings. Follow the Rancher\n",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.5/en/installation"},"documentaion")," for additional installation and RKE Template details."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# \n# Cluster Config\n# \ndefault_pod_security_policy_template_id: restricted\ndocker_root_dir: /var/lib/docker\nenable_cluster_alerting: false\nenable_cluster_monitoring: false\nenable_network_policy: true\n# \n# Rancher Config\n# \nrancher_kubernetes_engine_config:\n  addon_job_timeout: 45\n  ignore_docker_version: true\n  kubernetes_version: v1.18.12-rancher1-1\n# \n#   If you are using calico on AWS\n# \n#    network:\n#      plugin: calico\n#      calico_network_provider:\n#        cloud_provider: aws\n# \n# # To specify flannel interface\n# \n#    network:\n#      plugin: flannel\n#      flannel_network_provider:\n#      iface: eth1\n# \n# # To specify flannel interface for canal plugin\n# \n#    network:\n#      plugin: canal\n#      canal_network_provider:\n#        iface: eth1\n# \n  network:\n    mtu: 0\n    plugin: canal\n  rotate_encryption_key: false\n# \n#    services:\n#      kube-api:\n#        service_cluster_ip_range: 10.43.0.0/16\n#      kube-controller:\n#        cluster_cidr: 10.42.0.0/16\n#        service_cluster_ip_range: 10.43.0.0/16\n#      kubelet:\n#        cluster_domain: cluster.local\n#        cluster_dns_server: 10.43.0.10\n# \n  services:\n    etcd:\n      backup_config:\n        enabled: false\n        interval_hours: 12\n        retention: 6\n        safe_timestamp: false\n      creation: 12h\n      extra_args:\n        election-timeout: '5000'\n        heartbeat-interval: '500'\n      gid: 52034\n      retention: 72h\n      snapshot: false\n      uid: 52034\n    kube_api:\n      always_pull_images: false\n      audit_log:\n        enabled: true\n      event_rate_limit:\n        enabled: true\n      pod_security_policy: true\n      secrets_encryption_config:\n        enabled: true\n      service_node_port_range: 30000-32767\n    kube_controller:\n      extra_args:\n        feature-gates: RotateKubeletServerCertificate=true\n        bind-address: 127.0.0.1\n        address: 127.0.0.1\n    kubelet:\n      extra_args:\n        feature-gates: RotateKubeletServerCertificate=true\n        protect-kernel-defaults: 'true'\n        tls-cipher-suites: >-\n          TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384,TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_256_GCM_SHA384,TLS_RSA_WITH_AES_128_GCM_SHA256\n      fail_swap_on: false\n      generate_serving_certificate: true\n    scheduler:\n      extra_args:\n        bind-address: 127.0.0.1\n        address: 127.0.0.1\n  ssh_agent_auth: false\n  upgrade_strategy:\n    max_unavailable_controlplane: '1'\n    max_unavailable_worker: 10%\nwindows_prefered_cluster: false\n")),(0,o.kt)("h3",{id:"hardened-reference-ubuntu-2004-lts-cloud-config"},"Hardened Reference Ubuntu 20.04 LTS ",(0,o.kt)("strong",{parentName:"h3"},"cloud-config"),":"),(0,o.kt)("p",null,"The reference ",(0,o.kt)("strong",{parentName:"p"},"cloud-config")," is generally used in cloud infrastructure environments to allow for\nconfiguration management of compute instances. The reference config configures Ubuntu operating system level settings\nneeded before installing kubernetes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'#cloud-config\napt:\n  sources:\n    docker.list:\n      source: deb [arch=amd64] http://download.docker.com/linux/ubuntu $RELEASE stable\n      keyid: 9DC858229FC7DD38854AE2D88D81803C0EBFCD88\nsystem_info:\n  default_user:\n    groups:\n    - docker\nwrite_files:\n- path: "/etc/apt/preferences.d/docker"\n  owner: root:root\n  permissions: \'0600\'\n  content: |\n    Package: docker-ce\n    Pin: version 5:19*\n    Pin-Priority: 800\n- path: "/etc/sysctl.d/90-kubelet.conf"\n  owner: root:root\n  permissions: \'0644\'\n  content: |\n    vm.overcommit_memory=1\n    vm.panic_on_oom=0\n    kernel.panic=10\n    kernel.panic_on_oops=1\n    kernel.keys.root_maxbytes=25000000\npackage_update: true\npackages:\n- docker-ce\n- docker-ce-cli\n- containerd.io\nruncmd:\n- sysctl -p /etc/sysctl.d/90-kubelet.conf\n- groupadd --gid 52034 etcd\n- useradd --comment "etcd service account" --uid 52034 --gid 52034 etcd\n')))}m.isMDXComponent=!0}}]);