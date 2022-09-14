"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[42537],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=c(n),p=a,m=h["".concat(u,".").concat(p)]||h[p]||o[p]||s;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},67203:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return o}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),i=["components"],l={title:"Security",weight:20},u=void 0,c={unversionedId:"pages-for-subheaders/rancher-security",id:"version-2.0-2.4/pages-for-subheaders/rancher-security",title:"Security",description:"Security policy",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/rancher-security.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/rancher-security",permalink:"/v2.0-v2.4/pages-for-subheaders/rancher-security",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/rancher-security.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663174327,formattedLastUpdatedAt:"9/14/2022",frontMatter:{title:"Security",weight:20},sidebar:"tutorialSidebar",previous:{title:"v2.0.x Pipeline Documentation",permalink:"/v2.0-v2.4/reference-guides/pipelines/v2.0.x"},next:{title:"Rancher v2.1",permalink:"/v2.0-v2.4/pages-for-subheaders/rancher-v2.1-hardening-guides"}},d={},o=[{value:"Running a CIS Security Scan on a Kubernetes Cluster",id:"running-a-cis-security-scan-on-a-kubernetes-cluster",level:3},{value:"Rancher Hardening Guide",id:"rancher-hardening-guide",level:3},{value:"The CIS Benchmark and Self-Assessment",id:"the-cis-benchmark-and-self-assessment",level:3},{value:"Third-party Penetration Test Reports",id:"third-party-penetration-test-reports",level:3},{value:"Rancher CVEs and Resolutions",id:"rancher-cves-and-resolutions",level:3}],h={toc:o};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("table",{width:"100%"},(0,s.kt)("tr",{style:{verticalAlign:"top"}},(0,s.kt)("td",{width:"30%",style:{border:"none"}},(0,s.kt)("h4",null,"Security policy"),(0,s.kt)("p",{style:{padding:"8px"}},"Rancher Labs supports responsible disclosure, and endeavours to resolve all issues in a reasonable time frame. ")),(0,s.kt)("td",{width:"30%",style:{border:"none"}},(0,s.kt)("h4",null,"Reporting process"),(0,s.kt)("p",{style:{padding:"8px"}},"Please submit possible security issues by emailing ",(0,s.kt)("a",{href:"mailto:security@rancher.com"},"security@rancher.com"))),(0,s.kt)("td",{width:"30%",style:{border:"none"}},(0,s.kt)("h4",null,"Announcements"),(0,s.kt)("p",{style:{padding:"8px"}},"Subscribe to the ",(0,s.kt)("a",{href:"https://forums.rancher.com/c/announcements"},"Rancher announcements forum")," for release updates.")))),(0,s.kt)("p",null,"Security is at the heart of all Rancher features. From integrating with all the popular authentication tools and services, to an enterprise grade ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/manage-role-based-access-control-rbac"},"RBAC capability,")," Rancher makes your Kubernetes clusters even more secure."),(0,s.kt)("p",null,"On this page, we provide security-related documentation along with resources to help you secure your Rancher installation and your downstream Kubernetes clusters:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#running-a-cis-security-scan-on-a-kubernetes-cluster"},"Running a CIS security scan on a Kubernetes cluster")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#rancher-hardening-guide"},"Guide to hardening Rancher installations")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#the-cis-benchmark-and-self-assessment"},"The CIS Benchmark and self-assessment")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#third-party-penetration-test-reports"},"Third-party penetration test reports")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#rancher-cves-and-resolutions"},"Rancher CVEs and resolutions"))),(0,s.kt)("h3",{id:"running-a-cis-security-scan-on-a-kubernetes-cluster"},"Running a CIS Security Scan on a Kubernetes Cluster"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Available as of v2.4.0")),(0,s.kt)("p",null,"Rancher leverages ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/aquasecurity/kube-bench"},"kube-bench")," to run a security scan to check whether Kubernetes is deployed according to security best practices as defined in the CIS (Center for Internet Security) Kubernetes Benchmark."),(0,s.kt)("p",null,"The CIS Kubernetes Benchmark is a reference document that can be used to establish a secure configuration baseline for Kubernetes."),(0,s.kt)("p",null,"The Center for Internet Security (CIS) is a 501(c",")",'(3) non-profit organization, formed in October 2000, with a mission to "identify, develop, validate, promote, and sustain best practice solutions for cyber defense and build and lead communities to enable an environment of trust in cyberspace."'),(0,s.kt)("p",null,"CIS Benchmarks are best practices for the secure configuration of a target system. CIS Benchmarks are developed through the generous volunteer efforts of subject matter experts, technology vendors, public and private community members, and the CIS Benchmark Development team."),(0,s.kt)("p",null,"The Benchmark provides recommendations of two types: Scored and Not Scored. We run tests related to only Scored recommendations."),(0,s.kt)("p",null,"When Rancher runs a CIS security scan on a cluster, it generates a report showing the results of each test, including a summary with the number of passed, skipped and failed tests. The report also includes remediation steps for any failed tests."),(0,s.kt)("p",null,"For details, refer to the section on ",(0,s.kt)("a",{parentName:"p",href:"cis-scans"},"security scans.")),(0,s.kt)("h3",{id:"rancher-hardening-guide"},"Rancher Hardening Guide"),(0,s.kt)("p",null,"The Rancher Hardening Guide is based on controls and best practices found in the ",(0,s.kt)("a",{href:"https://www.cisecurity.org/benchmark/kubernetes/",target:"_blank"},"CIS Kubernetes Benchmark")," from the Center for Internet Security."),(0,s.kt)("p",null,"The hardening guide provides prescriptive guidance for hardening a production installation of Rancher v2.1.x, v2.2.x and v.2.3.x. See Rancher's guides for ",(0,s.kt)("a",{parentName:"p",href:"#the-cis-benchmark-and-self-sssessment"},"Self Assessment of the CIS Kubernetes Benchmark")," for the full list of security controls."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The hardening guides describe how to secure the nodes in your cluster, and it is recommended to follow a hardening guide before installing Kubernetes.")),(0,s.kt)("p",null,"Each version of the hardening guide is intended to be used with specific versions of the CIS Kubernetes Benchmark, Kubernetes, and Rancher:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Hardening Guide Version"),(0,s.kt)("th",{parentName:"tr",align:null},"Rancher Version"),(0,s.kt)("th",{parentName:"tr",align:null},"CIS Benchmark Version"),(0,s.kt)("th",{parentName:"tr",align:null},"Kubernetes Version"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/v2.0-v2.4/reference-guides/rancher-security/rancher-v2.4-hardening-guides/hardening-guide-with-cis-v1.5-benchmark"},"Hardening Guide v2.4")),(0,s.kt)("td",{parentName:"tr",align:null},"Rancher v2.4"),(0,s.kt)("td",{parentName:"tr",align:null},"Benchmark v1.5"),(0,s.kt)("td",{parentName:"tr",align:null},"Kubernetes v1.15")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/v2.0-v2.4/reference-guides/rancher-security/rancher-v2.3-hardening-guides/rancher-v2.3.5-hardening-guide-with-cis-v1.5-benchmark"},"Hardening Guide v2.3.5")),(0,s.kt)("td",{parentName:"tr",align:null},"Rancher v2.3.5"),(0,s.kt)("td",{parentName:"tr",align:null},"Benchmark v1.5"),(0,s.kt)("td",{parentName:"tr",align:null},"Kubernetes v1.15")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/v2.0-v2.4/reference-guides/rancher-security/rancher-v2.3-hardening-guides/rancher-v2.3.3-hardening-guide-with-cis-v1.4.1-benchmark"},"Hardening Guide v2.3.3")),(0,s.kt)("td",{parentName:"tr",align:null},"Rancher v2.3.3"),(0,s.kt)("td",{parentName:"tr",align:null},"Benchmark v1.4.1"),(0,s.kt)("td",{parentName:"tr",align:null},"Kubernetes v1.14, v1.15, and v1.16")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/v2.0-v2.4/reference-guides/rancher-security/rancher-v2.3-hardening-guides/rancher-v2.3.0-hardening-guide-with-cis-v1.4.1-benchmark"},"Hardening Guide v2.3")),(0,s.kt)("td",{parentName:"tr",align:null},"Rancher v2.3.0-v2.3.2"),(0,s.kt)("td",{parentName:"tr",align:null},"Benchmark v1.4.1"),(0,s.kt)("td",{parentName:"tr",align:null},"Kubernetes v1.15")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/v2.0-v2.4/reference-guides/rancher-security/rancher-v2.2-hardening-guides/hardening-guide-with-cis-v1.4-benchmark"},"Hardening Guide v2.2")),(0,s.kt)("td",{parentName:"tr",align:null},"Rancher v2.2.x"),(0,s.kt)("td",{parentName:"tr",align:null},"Benchmark v1.4.1 and 1.4.0"),(0,s.kt)("td",{parentName:"tr",align:null},"Kubernetes v1.13")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/v2.0-v2.4/reference-guides/rancher-security/rancher-v2.1-hardening-guides/hardening-guide-with-cis-v1.3-benchmark"},"Hardening Guide v2.1")),(0,s.kt)("td",{parentName:"tr",align:null},"Rancher v2.1.x"),(0,s.kt)("td",{parentName:"tr",align:null},"Benchmark v1.3.0"),(0,s.kt)("td",{parentName:"tr",align:null},"Kubernetes v1.11")))),(0,s.kt)("h3",{id:"the-cis-benchmark-and-self-assessment"},"The CIS Benchmark and Self-Assessment"),(0,s.kt)("p",null,"The benchmark self-assessment is a companion to the Rancher security hardening guide. While the hardening guide shows you how to harden the cluster, the benchmark guide is meant to help you evaluate the level of security of the hardened cluster."),(0,s.kt)("p",null,"Because Rancher and RKE install Kubernetes services as Docker containers, many of the control verification checks in the CIS Kubernetes Benchmark don't apply. This guide will walk through the various controls and provide updated example commands to audit compliance in Rancher created clusters. The original benchmark documents can be downloaded from the ",(0,s.kt)("a",{parentName:"p",href:"https://www.cisecurity.org/benchmark/kubernetes/"},"CIS website"),"."),(0,s.kt)("p",null,"Each version of Rancher's self-assessment guide corresponds to specific versions of the hardening guide, Rancher, Kubernetes, and the CIS Benchmark:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Self Assessment Guide Version"),(0,s.kt)("th",{parentName:"tr",align:null},"Rancher Version"),(0,s.kt)("th",{parentName:"tr",align:null},"Hardening Guide Version"),(0,s.kt)("th",{parentName:"tr",align:null},"Kubernetes Version"),(0,s.kt)("th",{parentName:"tr",align:null},"CIS Benchmark Version"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/v2.0-v2.4/reference-guides/rancher-security/rancher-v2.4-hardening-guides/self-assessment-guide-with-cis-v1.5-benchmark#cis-kubernetes-benchmark-v15---rancher-v24-with-kubernetes-v115"},"Self Assessment Guide v2.4")),(0,s.kt)("td",{parentName:"tr",align:null},"Rancher v2.4"),(0,s.kt)("td",{parentName:"tr",align:null},"Hardening Guide v2.4"),(0,s.kt)("td",{parentName:"tr",align:null},"Kubernetes v1.15"),(0,s.kt)("td",{parentName:"tr",align:null},"Benchmark v1.5")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/v2.0-v2.4/reference-guides/rancher-security/rancher-v2.3-hardening-guides/rancher-v2.3.5-self-assessment-guide-with-cis-v1.5-benchmark#cis-kubernetes-benchmark-v15---rancher-v235-with-kubernetes-v115"},"Self Assessment Guide v2.3.5")),(0,s.kt)("td",{parentName:"tr",align:null},"Rancher v2.3.5"),(0,s.kt)("td",{parentName:"tr",align:null},"Hardening Guide v2.3.5"),(0,s.kt)("td",{parentName:"tr",align:null},"Kubernetes v1.15"),(0,s.kt)("td",{parentName:"tr",align:null},"Benchmark v1.5")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/v2.0-v2.4/reference-guides/rancher-security/rancher-v2.3-hardening-guides/rancher-v2.3.3-self-assessment-guide-with-cis-v1.4.1-benchmark"},"Self Assessment Guide v2.3.3")),(0,s.kt)("td",{parentName:"tr",align:null},"Rancher v2.3.3"),(0,s.kt)("td",{parentName:"tr",align:null},"Hardening Guide v2.3.3"),(0,s.kt)("td",{parentName:"tr",align:null},"Kubernetes v1.16"),(0,s.kt)("td",{parentName:"tr",align:null},"Benchmark v1.4.1")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/v2.0-v2.4/reference-guides/rancher-security/rancher-v2.3-hardening-guides/rancher-v2.3.0-self-assessment-guide-with-cis-v1.4.1-benchmark"},"Self Assessment Guide v2.3")),(0,s.kt)("td",{parentName:"tr",align:null},"Rancher v2.3.0-2.3.2"),(0,s.kt)("td",{parentName:"tr",align:null},"Hardening Guide v2.3"),(0,s.kt)("td",{parentName:"tr",align:null},"Kubernetes v1.15"),(0,s.kt)("td",{parentName:"tr",align:null},"Benchmark v1.4.1")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/v2.0-v2.4/reference-guides/rancher-security/rancher-v2.2-hardening-guides/self-assessment-guide-with-cis-v1.4-benchmark"},"Self Assessment Guide v2.2")),(0,s.kt)("td",{parentName:"tr",align:null},"Rancher v2.2.x"),(0,s.kt)("td",{parentName:"tr",align:null},"Hardening Guide v2.2"),(0,s.kt)("td",{parentName:"tr",align:null},"Kubernetes v1.13"),(0,s.kt)("td",{parentName:"tr",align:null},"Benchmark v1.4.0 and v1.4.1")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/v2.0-v2.4/reference-guides/rancher-security/rancher-v2.1-hardening-guides/self-assessment-guide-with-cis-v1.3-benchmark"},"Self Assessment Guide v2.1")),(0,s.kt)("td",{parentName:"tr",align:null},"Rancher v2.1.x"),(0,s.kt)("td",{parentName:"tr",align:null},"Hardening Guide v2.1"),(0,s.kt)("td",{parentName:"tr",align:null},"Kubernetes v1.11"),(0,s.kt)("td",{parentName:"tr",align:null},"Benchmark 1.3.0")))),(0,s.kt)("h3",{id:"third-party-penetration-test-reports"},"Third-party Penetration Test Reports"),(0,s.kt)("p",null,"Rancher periodically hires third parties to perform security audits and penetration tests of the Rancher 2.x software stack. The environments under test follow the Rancher provided hardening guides at the time of the testing. Results are posted when the third party has also verified fixes classified MEDIUM or above."),(0,s.kt)("p",null,"Results:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://releases.rancher.com/documents/security/pen-tests/2019/RAN-01-cure53-report.final.pdf"},"Cure53 Pen Test - 7/2019")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://releases.rancher.com/documents/security/pen-tests/2019/UntamedTheory-Rancher_SecurityAssessment-20190712_v5.pdf"},"Untamed Theory Pen Test- 3/2019"))),(0,s.kt)("h3",{id:"rancher-cves-and-resolutions"},"Rancher CVEs and Resolutions"),(0,s.kt)("p",null,"Rancher is committed to informing the community of security issues in our products. For the list of CVEs (Common Vulnerabilities and Exposures) for issues we have resolved, refer to ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/rancher-security/security-advisories-and-cves"},"this page.")))}p.isMDXComponent=!0}}]);