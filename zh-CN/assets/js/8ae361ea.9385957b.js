"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9871],{17437:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var t=s(74848),a=s(28453),l=s(11470),r=s(19365);const o={sidebar_label:"Kubernetes \u90e8\u7f72",sidebar_position:1},i="Steedos Kubernetes \u90e8\u7f72\u6307\u5357",d={id:"deploy/deploy-k8s",title:"Steedos Kubernetes \u90e8\u7f72\u6307\u5357",description:"\u672c\u6587\u6863\u5c06\u6307\u5bfc\u60a8\u5982\u4f55\u5728\u60a8\u7684 AWS EKS \u96c6\u7fa4\u4e2d\u90e8\u7f72 Steedos \u5e73\u53f0\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/deploy/deploy-k8s.md",sourceDirName:"deploy",slug:"/deploy/deploy-k8s",permalink:"/zh-CN/deploy/deploy-k8s",draft:!1,unlisted:!1,editUrl:"https://github.com/steedos/steedos-docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/deploy/deploy-k8s.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Kubernetes \u90e8\u7f72",sidebar_position:1},sidebar:"platform",previous:{title:"Docker \u90e8\u7f72",permalink:"/zh-CN/deploy/deploy-docker"},next:{title:"\u8fdc\u7a0b\u73af\u5883\u8bd5\u7528",permalink:"/zh-CN/deploy/gitpod"}},c={},u=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u90e8\u7f72\u6b65\u9aa4",id:"\u90e8\u7f72\u6b65\u9aa4",level:2},{value:"\u914d\u7f6e\u8fde\u63a5EKS\u96c6\u7fa4",id:"\u914d\u7f6e\u8fde\u63a5eks\u96c6\u7fa4",level:3},{value:"\u51c6\u5907\u914d\u7f6e\u6587\u4ef6",id:"\u51c6\u5907\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u542f\u52a8\u5bb9\u5668",id:"\u542f\u52a8\u5bb9\u5668",level:3},{value:"\u9a8c\u8bc1\u90e8\u7f72",id:"\u9a8c\u8bc1\u90e8\u7f72",level:3},{value:"\u914d\u7f6e\u548c\u4f18\u5316",id:"\u914d\u7f6e\u548c\u4f18\u5316",level:2},{value:"\u914d\u7f6e\u73af\u5883\u53d8\u91cf",id:"\u914d\u7f6e\u73af\u5883\u53d8\u91cf",level:3},{value:"\u6570\u636e\u6301\u4e45\u5316",id:"\u6570\u636e\u6301\u4e45\u5316",level:3},{value:"\u66f4\u65b0\u548c\u7ef4\u62a4",id:"\u66f4\u65b0\u548c\u7ef4\u62a4",level:2},{value:"\u542f\u505c\u3001\u66f4\u65b0\u670d\u52a1",id:"\u542f\u505c\u66f4\u65b0\u670d\u52a1",level:3},{value:"\u8fde\u63a5\u6570\u636e\u5e93",id:"\u8fde\u63a5\u6570\u636e\u5e93",level:3},{value:"\u5907\u4efd\u6570\u636e\u5e93",id:"\u5907\u4efd\u6570\u636e\u5e93",level:3},{value:"\u8fd8\u539f\u6570\u636e\u5e93",id:"\u8fd8\u539f\u6570\u636e\u5e93",level:3},{value:"\u6545\u969c\u6392\u9664",id:"\u6545\u969c\u6392\u9664",level:2},{value:"\u8fdb\u4e00\u6b65\u9605\u8bfb",id:"\u8fdb\u4e00\u6b65\u9605\u8bfb",level:2}];function m(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"steedos-kubernetes-\u90e8\u7f72\u6307\u5357",children:"Steedos Kubernetes \u90e8\u7f72\u6307\u5357"}),"\n",(0,t.jsx)(n.p,{children:"\u672c\u6587\u6863\u5c06\u6307\u5bfc\u60a8\u5982\u4f55\u5728\u60a8\u7684 AWS EKS \u96c6\u7fa4\u4e2d\u90e8\u7f72 Steedos \u5e73\u53f0\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u60a8\u7684\u7cfb\u7edf\u6ee1\u8db3\u4ee5\u4e0b\u8981\u6c42\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u64cd\u4f5c\u7cfb\u7edf\u4e3aUbuntu 22.04"}),"\n",(0,t.jsx)(n.li,{children:"AWS EKS \u7248\u672c\u4e3a 1.23"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://docs.amazonaws.cn/cli/latest/userguide/getting-started-install.html",children:"AWS CLI"}),"\uff08\u5b89\u88c5\u6700\u65b0\u7248\uff09"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://docs.amazonaws.cn/eks/latest/userguide/install-kubectl.html",children:"kubectl"})," (\u9002\u7528\u4e8eKubernetes 1.23)"]}),"\n",(0,t.jsx)(n.li,{children:"\u786e\u4fddAWS\u670d\u52a1\u7aef\u53e3\uff08\u5982 80, 443\uff09\u5df2\u5f00\u653e\uff0c\u4ee5\u4fbf\u5916\u90e8\u8bbf\u95ee"}),"\n",(0,t.jsx)(n.li,{children:"\u5982\u679c\u90e8\u7f72 Steedos \u4f01\u4e1a\u7248\uff0c\u9700\u8981\u5148\u83b7\u5f97\u8bb8\u53ef\u8bc1"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u90e8\u7f72\u6b65\u9aa4",children:"\u90e8\u7f72\u6b65\u9aa4"}),"\n",(0,t.jsx)(n.h3,{id:"\u914d\u7f6e\u8fde\u63a5eks\u96c6\u7fa4",children:"\u914d\u7f6e\u8fde\u63a5EKS\u96c6\u7fa4"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u521b\u5efaEKS\u96c6\u7fa4\uff0c\u53c2\u8003\u6587\u6863\uff1a",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/zh_cn/eks/latest/userguide/create-cluster.html",children:"https://docs.aws.amazon.com/zh_cn/eks/latest/userguide/create-cluster.html"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u914d\u7f6eaws cli\u548ckubectl\u8bbf\u95ee\u60a8\u7684eks\u96c6\u7fa4\uff0c\u53c2\u8003\u6587\u6863\uff1a",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/zh_cn/eks/latest/userguide/cluster-auth.html",children:"https://docs.aws.amazon.com/zh_cn/eks/latest/userguide/cluster-auth.html"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u51c6\u5907\u914d\u7f6e\u6587\u4ef6",children:"\u51c6\u5907\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,t.jsxs)(n.p,{children:["\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,t.jsx)(n.code,{children:"deployment.yaml"})," \u7684\u6587\u4ef6\uff0c\u5e76\u586b\u5165\u4ee5\u4e0b\u5185\u5bb9\uff1a"]}),"\n",(0,t.jsxs)(l.A,{queryString:"current-edition",children:[(0,t.jsx)(r.A,{label:"\u793e\u533a\u7248",value:"community_edition",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"# \u547d\u540d\u7a7a\u95f4\napiVersion: v1\nkind: Namespace\nmetadata:\n  name: community\n  labels:\n    as-steedos-managed-tenant: community\n---\n# \u6570\u636e\u6301\u4e45\u5316 PVC\napiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: ebs-claim-community\n  namespace: community\nspec:\n  accessModes:\n    - ReadWriteOnce\n  storageClassName: default\n  resources:\n    requests:\n      storage: \"5Gi\"\n---\n# \u4e3b\u5e94\u7528\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app-name: community\n  name: community\n  namespace: community\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app-name: community\n  strategy:\n    type: RollingUpdate\n  template:\n    metadata:\n      labels:\n        app-name: community\n    spec:\n      containers:\n        - env:\n            - name: ROOT_URL\n              value: 'http://127.0.0.1'\n            - name: NPM_REGISTRY_URL\n              value: 'https://registry.npmmirror.com'\n          image: 'steedos/steedos-community:latest'\n          imagePullPolicy: Always\n          name: community\n          readinessProbe:\n            failureThreshold: 3\n            httpGet:\n              path: /api/health_check\n              port: 80\n              scheme: HTTP\n            periodSeconds: 10\n            successThreshold: 1\n            timeoutSeconds: 1\n          resources:\n            limits:\n              cpu: '4'\n              ephemeral-storage: 4Gi\n              memory: 6Gi\n            requests:\n              cpu: 200m\n              ephemeral-storage: 2Gi\n              memory: 1Gi\n          terminationMessagePath: /dev/termination-log\n          terminationMessagePolicy: File\n          volumeMounts:\n            - mountPath: /app/.steedos\n              name: steedos-store-pv-mounted-path\n              subPath: steedos-data\n            - mountPath: /steedos-storage\n              name: steedos-store-pv-mounted-path\n              subPath: steedos-storage\n      dnsPolicy: ClusterFirst\n      restartPolicy: Always\n      schedulerName: default-scheduler\n      securityContext: {}\n      terminationGracePeriodSeconds: 30\n      volumes:\n        - name: steedos-store-pv-mounted-path\n          persistentVolumeClaim:\n            claimName: ebs-claim-community\n"})})}),(0,t.jsx)(r.A,{label:"\u4f01\u4e1a\u7248",value:"enterprise_edition",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"# \u547d\u540d\u7a7a\u95f4\napiVersion: v1\nkind: Namespace\nmetadata:\n  name: enterprise\n  labels:\n    as-steedos-managed-tenant: enterprise\n---\n# \u6570\u636e\u6301\u4e45\u5316 PVC\napiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: ebs-claim-enterprise\n  namespace: enterprise\nspec:\n  accessModes:\n    - ReadWriteOnce\n  storageClassName: resize-sc\n  resources:\n    requests:\n      storage: \"5Gi\"\n---\n# \u4e3b\u5e94\u7528\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app-name: enterprise\n  name: enterprise\n  namespace: enterprise\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app-name: enterprise\n  strategy:\n    type: RollingUpdate\n  template:\n    metadata:\n      labels:\n        app-name: enterprise\n    spec:\n      containers:\n        - env:\n            - name: ROOT_URL\n              value: 'http://127.0.0.1'\n            - name: NPM_REGISTRY_URL\n              value: 'https://registry.npmmirror.com'\n          image: 'steedos/steedos-enterprise:latest'\n          imagePullPolicy: Always\n          name: enterprise\n          readinessProbe:\n            failureThreshold: 3\n            httpGet:\n              path: /api/health_check\n              port: 80\n              scheme: HTTP\n            periodSeconds: 10\n            successThreshold: 1\n            timeoutSeconds: 1\n          resources:\n            limits:\n              cpu: '4'\n              ephemeral-storage: 4Gi\n              memory: 6Gi\n            requests:\n              cpu: 200m\n              ephemeral-storage: 2Gi\n              memory: 1Gi\n          terminationMessagePath: /dev/termination-log\n          terminationMessagePolicy: File\n          volumeMounts:\n            - mountPath: /app/.steedos\n              name: steedos-store-pv-mounted-path\n              subPath: steedos-data\n            - mountPath: /steedos-storage\n              name: steedos-store-pv-mounted-path\n              subPath: steedos-storage\n      dnsPolicy: ClusterFirst\n      restartPolicy: Always\n      schedulerName: default-scheduler\n      securityContext: {}\n      terminationGracePeriodSeconds: 30\n      volumes:\n        - name: steedos-store-pv-mounted-path\n          persistentVolumeClaim:\n            claimName: ebs-claim-enterprise\n"})})})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Namespace: \u547d\u540d\u7a7a\u95f4\uff0c\u7528\u4e8e\u9694\u79bb\u90e8\u7f72\u7684\u670d\u52a1\uff0c\u4e0d\u4f1a\u5f71\u54cddefault\u547d\u540d\u7a7a\u95f4\u4e0b\u90e8\u7f72\u7684\u670d\u52a1\u3002"}),"\n",(0,t.jsx)(n.li,{children:"PersistentVolumeClaim: k8s\u6301\u4e45\u5316\u5b58\u50a8\uff0c\u7528\u4e8e\u5b58\u50a8\u670d\u52a1\u914d\u7f6e\u6587\u4ef6\u3001\u6570\u636e\u3001\u9644\u4ef6\u7b49\u3002"}),"\n",(0,t.jsx)(n.li,{children:"Deployment: \u7ba1\u7406\u90e8\u7f72\u7684\u5e94\u7528\u670d\u52a1\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u8bf7\u6839\u636e\u60a8\u7684\u5b9e\u9645\u60c5\u51b5\u8c03\u6574\u73af\u5883\u53d8\u91cf\u548c\u7aef\u53e3\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u542f\u52a8\u5bb9\u5668",children:"\u542f\u52a8\u5bb9\u5668"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u5305\u542b ",(0,t.jsx)(n.code,{children:"deployment.yaml"})," \u6587\u4ef6\u7684\u76ee\u5f55\u4e2d\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u90e8\u7f72steedos\u670d\u52a1\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f deployment.yaml\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u9a8c\u8bc1\u90e8\u7f72",children:"\u9a8c\u8bc1\u90e8\u7f72"}),"\n",(0,t.jsx)(n.p,{children:"\u90e8\u7f72\u5b8c\u6210\u540e\uff0ceks\u96c6\u7fa4\u9ed8\u8ba4\u65e0\u6cd5\u76f4\u63a5\u901a\u8fc7\u670d\u52a1\u7aef\u53e3\u8bbf\u95ee\uff0c\u9700\u8981\u914d\u7f6eElastic Load Balancing\u8d1f\u8f7d\u5747\u8861\u5668\u8bbf\u95ee\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u53c2\u8003\u6587\u6863\uff1a",(0,t.jsx)(n.a,{href:"https://docs.amazonaws.cn/elasticloadbalancing/latest/userguide/load-balancer-getting-started.html",children:"https://docs.amazonaws.cn/elasticloadbalancing/latest/userguide/load-balancer-getting-started.html"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u4f8b\u5982\uff1a\u914d\u7f6eELB\u534f\u8bae\u7aef\u53e380\u6307\u5411Steedos\u670d\u52a180\u7aef\u53e3\uff0cDNS\u540d\u79f0\u4e3ak8s-test-113344.cn-northwest-1.elb.amazonaws.com.cn\uff0c\u6210\u529f\u914d\u7f6e\u540e\u53ef\u4ee5\u901a\u8fc7",(0,t.jsx)(n.a,{href:"http://k8s-test-113344.cn-northwest-1.elb.amazonaws.com.cn%E8%AE%BF%E9%97%AESteedos%E6%9C%8D%E5%8A%A1",children:"http://k8s-test-113344.cn-northwest-1.elb.amazonaws.com.cn\u8bbf\u95eeSteedos\u670d\u52a1"})]}),"\n",(0,t.jsx)(n.h2,{id:"\u914d\u7f6e\u548c\u4f18\u5316",children:"\u914d\u7f6e\u548c\u4f18\u5316"}),"\n",(0,t.jsx)(n.p,{children:"\u5f53\u670d\u52a1\u542f\u52a8\u540e\uff0c\u4f1a\u5728\u672c\u5730\u81ea\u52a8\u521b\u5efa\u6587\u4ef6\u5939steedos-storage\u5b58\u50a8\u7cfb\u7edf\u914d\u7f6e\u4fe1\u606f\u3001\u6570\u636e\u5e93\u6587\u4ef6\u548c\u9644\u4ef6\uff08\u9ed8\u8ba4\u5b58\u672c\u5730\uff09"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"steedos-storage\n  configuration \n  data \n  files \n  logs \n  ssl \n  unpkg \n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"configuration: \u7cfb\u7edf\u914d\u7f6e\u53c2\u6570\uff0c\u5305\u542bMongoDB\u6570\u636e\u5e93\u8fde\u63a5\u7528\u6237\u3001\u5bc6\u7801\uff0cSupervisor\u767b\u5f55\u8d26\u6237\u548c\u5bc6\u7801"}),"\n",(0,t.jsx)(n.li,{children:"data: \u6570\u636e\u5e93\u6587\u4ef6\u5b58\u50a8\u8def\u5f84\u3001\u5907\u4efd\u6570\u636e\u5e93\u5b58\u50a8\u8def\u5f84"}),"\n",(0,t.jsx)(n.li,{children:"files: \u672c\u5730\u9644\u4ef6\u5b58\u50a8\u8def\u5f84"}),"\n",(0,t.jsx)(n.li,{children:"logs: \u672c\u5730\u65e5\u5fd7\u5b58\u50a8\u8def\u5f84\uff0c\u5305\u542bnginx\u3001mongodb\u3001steedos\u7b49\u670d\u52a1\u65e5\u5fd7"}),"\n",(0,t.jsx)(n.li,{children:"ssl: ssl\u8bc1\u4e66\u5b58\u50a8\u8def\u5f84"}),"\n",(0,t.jsx)(n.li,{children:"unpkg: \u8d44\u4ea7\u5305\u7f13\u5b58\u8def\u5f84"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u914d\u7f6e\u73af\u5883\u53d8\u91cf",children:"\u914d\u7f6e\u73af\u5883\u53d8\u91cf"}),"\n",(0,t.jsx)(n.p,{children:"\u53ef\u4ee5\u901a\u8fc7\u7f16\u8f91 deployment.yaml \u6587\u4ef6kind\u4e3aDeployment\u4e2d\u7684env\u5c5e\u6027"}),"\n",(0,t.jsx)(n.p,{children:"\u4f8b\u5982\uff1a\u914d\u7f6e\u8fde\u63a5\u516c\u7f51IP\u4e3a122.168.22.11\u7684\u5916\u90e8MongoDB\u6570\u636e\u5e93\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"  containers:\n    - env:\n        - name: ROOT_URL\n          value: 'http://127.0.0.1'\n        - name: NPM_REGISTRY_URL\n          value: 'https://registry.npmmirror.com'\n        - name: MONGO_URL\n          value: 'mongodb://122.168.22.11:27017/steedos'\n        - name: MONGO_OPLOG_URL\n          value: 'mongodb://122.168.22.11:27017/local'\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u66f4\u591a\u73af\u5883\u53d8\u91cf\u914d\u7f6e\u53c2\u8003\u6587\u6863\uff1a",(0,t.jsx)(n.a,{href:"/deploy/steedos-config",children:"\u914d\u7f6e Steedos \u5b9e\u4f8b"})]}),"\n",(0,t.jsx)(n.h3,{id:"\u6570\u636e\u6301\u4e45\u5316",children:"\u6570\u636e\u6301\u4e45\u5316"}),"\n",(0,t.jsx)(n.p,{children:"\u6570\u636e\u6301\u4e45\u5316\u7684\u4f5c\u7528\u662f\u5c06\u5bbf\u4e3b\u673a\u4e0a\u7684\u6570\u636e\u4e0e\u5bb9\u5668\u5185\u7684\u6570\u636e\u5f62\u6210\u6620\u5c04\uff0c\u5b9e\u73b0\u6570\u636e\u7684\u5171\u4eab\u6216\u8005\u6570\u636e\u7684\u4fdd\u5b58\u3002\u5f53\u5220\u9664\u5bb9\u5668\u7684\u65f6\u5019\uff0c\u5728\u5bbf\u4e3b\u673a\u4e0a\u4ecd\u7136\u80fd\u591f\u4fdd\u7559\u6587\u4ef6\u76ee\u5f55\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u670d\u52a1\u542f\u52a8\u540e\u4f1a\u81ea\u52a8\u521b\u5efa\u4e00\u5757steedos-store-pv-mounted-path\u7684ebs\u6570\u636e\u76d8\u7528\u6765\u6620\u5c04\u670d\u52a1\u5185\u7684\u6570\u636e\u6587\u4ef6\uff0c\u9ed8\u8ba4\u5927\u5c0f\u4e3a5GB\uff0c\u53ef\u5728\u63a7\u5236\u53f0\u81ea\u884c\u8c03\u6574\u6570\u636e\u76d8\u5927\u5c0f\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"  volumeMounts:\n    - mountPath: /app/.steedos\n      name: steedos-store-pv-mounted-path\n      subPath: steedos-data\n    - mountPath: /steedos-storage\n      name: steedos-store-pv-mounted-path\n      subPath: steedos-storage\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u66f4\u65b0\u548c\u7ef4\u62a4",children:"\u66f4\u65b0\u548c\u7ef4\u62a4"}),"\n",(0,t.jsx)(n.h3,{id:"\u542f\u505c\u66f4\u65b0\u670d\u52a1",children:"\u542f\u505c\u3001\u66f4\u65b0\u670d\u52a1"}),"\n",(0,t.jsx)(n.p,{children:"\u5f53 Steedos \u53d1\u5e03\u65b0\u7248\u672c\u65f6\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\u66f4\u65b0\u60a8\u7684\u90e8\u7f72\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u67e5\u770bk8s\u670d\u52a1\u8fd0\u884cid\u3001\u72b6\u6001\u7b49\u4fe1\u606f\uff1a"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# \u67e5\u770bpod id\uff0c\u4f8b\u5982\uff1asteedos-community-fpllw\nkubectl get pod -n community\n\nkubectl describe pod steedos-community-fpllw -n community\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"\u505c\u6b62\u5f53\u524d\u8fd0\u884c\u7684\u5bb9\u5668\uff1a"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl delete pod steedos-community-fpllw -n community\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u9700\u8981\u540c\u65f6\u6e05\u7406volume\u6570\u636e\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"kubectl delete -f deployment.yaml"})," \u547d\u4ee4\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"\u66f4\u65b0\u90e8\u7f72\u670d\u52a1\uff1a"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f deployment.yaml\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u786e\u4fdd\u5728\u66f4\u65b0\u524d\u5907\u4efd\u60a8\u7684\u6570\u636e\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u8fde\u63a5\u6570\u636e\u5e93",children:"\u8fde\u63a5\u6570\u636e\u5e93"}),"\n",(0,t.jsx)(n.p,{children:"\u901a\u8fc7 steedos-storage/configuration/docker.env \u6587\u4ef6\u67e5\u770b\u83b7\u53d6\u6570\u636e\u5e93\u8fde\u63a5\u7528\u6237\u540d\u548c\u5bc6\u7801"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# \u67e5\u770bpod id\uff0c\u4f8b\u5982\uff1asteedos-community-fpllw\nkubectl get pod -n community\n\n# \u8fde\u63a5\u5230\u670d\u52a1\u5185\u90e8\nkubectl exec -it steedos-community-fpllw bash -n community\n\n# \u67e5\u770b\u914d\u7f6e\u6587\u4ef6\ncat /steedos-storage/configuration/docker.env\n# STEEDOS_MONGODB_USER=root\n# STEEDOS_MONGODB_PASSWORD=xxxxxxx\n"})}),"\n",(0,t.jsx)(n.p,{children:"k8s\u5185\u90e8\u542f\u7528\u7684mongo\u670d\u52a1\u9ed8\u8ba4\u4e0d\u5141\u8bb8\u5916\u90e8\u8fde\u63a5\uff0c\u53ea\u80fd\u901a\u8fc7\u8fde\u63a5\u5230\u955c\u50cf\u5185\u90e8\u8bbf\u95ee"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'# \u67e5\u770bpod id\uff0c\u4f8b\u5982\uff1asteedos-community-fpllw\nkubectl get pod -n community\n\n# \u8fde\u63a5\u5230\u670d\u52a1\u5185\u90e8\nkubectl exec -it steedos-community-fpllw bash -n community\n\n# \u6267\u884cmongo\nmongo\n\n# \u8fdb\u884c\u767b\u5f55\u9a8c\u8bc1\nuse admin;\n# \u66ff\u6362STEEDOS_MONGODB_USER\u548cSTEEDOS_MONGODB_PASSWORD\u4e3adocker.env\u4e2d\u7684\u503c\ndb.auth("STEEDOS_MONGODB_USER","STEEDOS_MONGODB_PASSWORD") \n# db.auth\u8fd4\u56de\u503c\u4e3a1 \u9a8c\u8bc1\u6210\u529f\n\n# \u67e5\u770b\u6570\u636e\u5e93\uff0c\u9ed8\u8ba4\u4e3asteedos\nuse steedos\n\n# \u6267\u884cmongo\u8bed\u53e5\u8fdb\u884c\u6570\u636e\u5e93\u64cd\u4f5c\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u66f4\u591a\u6570\u636e\u5e93\u64cd\u4f5c\u6307\u4ee4\u53c2\u8003\u5b98\u65b9\u6587\u6863\uff1a",(0,t.jsx)(n.a,{href:"https://www.mongodb.com/docs/v4.4/crud/",children:"MongoDB CURD"})]}),"\n",(0,t.jsx)(n.h3,{id:"\u5907\u4efd\u6570\u636e\u5e93",children:"\u5907\u4efd\u6570\u636e\u5e93"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u8fde\u63a5\u5230\u670d\u52a1\u5185\u90e8"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# \u67e5\u770bpod id\uff0c\u4f8b\u5982\uff1asteedos-community-fpllw\nkubectl get pod -n community\n\n# \u8fde\u63a5\u5230\u670d\u52a1\u5185\u90e8\nkubectl exec -it steedos-community-fpllw bash -n community\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"\u6267\u884c\u5907\u4efd\u811a\u672c"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd /steedos-storage/data/backup\n\n# \u6267\u884cmongodump\u540e\u4f1a\u751f\u4ea7\u4e00\u4e2adump\u5907\u4efd\u6587\u4ef6\nmongodump -d steedos -u STEEDOS_MONGODB_USER -p STEEDOS_MONGODB_PASSWORD --authenticationDatabase=admin\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"\u538b\u7f29\u5e76\u62f7\u8d1d\u5230\u672c\u5730"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# \u5c06dump\u6587\u4ef6\u5939\u538b\u7f29\u6210dump.tar.gz\ntar -czf dump.tar.gz dump\n\n# \u672c\u5730\u6267\u884ckubectl\u5c06pod\u4e2d\u7684\u5907\u4efd\u6587\u4ef6\u62f7\u8d1d\u5230\u672c\u5730\nkubectl cp steedos-community-fpllw:/steedos-storage/data/backup/dump.tar.gz . -n community\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u66f4\u591a\u6570\u636e\u5e93\u5907\u4efd\u914d\u7f6e\u53c2\u8003\u5b98\u65b9\u6587\u6863\uff1a",(0,t.jsx)(n.a,{href:"https://www.mongodb.com/docs/database-tools/mongodump/",children:"database-tools: mongodump"})]}),"\n",(0,t.jsx)(n.h3,{id:"\u8fd8\u539f\u6570\u636e\u5e93",children:"\u8fd8\u539f\u6570\u636e\u5e93"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u5c06\u5907\u4efd\u7684\u6570\u636e\u5e93\u62f7\u8d1d\u5230pod\u4e2d/steedos-storage/data/backup\u8def\u5f84\u4e0b"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl cp dump.tar.gz steedos-community-fpllw:/steedos-storage/data/backup/ -n community\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"\u8fdb\u5165\u5907\u4efd\u7684\u6570\u636e\u5e93\u8def\u5f84"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl exec -it steedos-community-fpllw bash -n community\n\ncd /steedos-storage/data/backup\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"\u89e3\u538b\u5907\u4efd\u7684\u538b\u7f29\u6587\u4ef6\u5e76\u8fdb\u5165\u89e3\u538b\u540e\u7684\u6587\u4ef6\u5939\u4e2d"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"tar -xzvf dump.tar.gz\ncd dump\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"\u6267\u884cmongorestore\u8fd8\u539f\u6570\u636e\u5e93steedos\uff0c\u66ff\u6362STEEDOS_MONGODB_USER\u548cSTEEDOS_MONGODB_PASSWORD\u4e3adocker.env\u4e2d\u7684\u503c"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mongorestore -d steedos -u STEEDOS_MONGODB_USER -p STEEDOS_MONGODB_PASSWORD --authenticationDatabase=admin --drop steedos\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u6ce8\u610f\uff1a -d \u540e\u9762\u7684steedos\u4e3a\u8fd8\u539f\u7684\u76ee\u6807\u6570\u636e\u5e93\uff0c\u4e5f\u53ef\u4ee5\u81ea\u5b9a\u4e49\u503c\uff0c\u4f8b\u5982\u4fee\u6539\u4e3asteedos_data\uff0c\u5c31\u53ef\u4ee5\u5c06\u6570\u636e\u5e93\u8fd8\u539f\u5230\u65b0\u5e93steedos_data"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mongorestore -d steedos_data -u STEEDOS_MONGODB_USER -p STEEDOS_MONGODB_PASSWORD --authenticationDatabase=admin --drop steedos\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u66f4\u591a\u6570\u636e\u5e93\u8fd8\u539f\u914d\u7f6e\u53c2\u8003\u5b98\u65b9\u6587\u6863\uff1a",(0,t.jsx)(n.a,{href:"https://www.mongodb.com/docs/database-tools/mongorestore/",children:"database-tools: mongorestore"})]}),"\n",(0,t.jsx)(n.h2,{id:"\u6545\u969c\u6392\u9664",children:"\u6545\u969c\u6392\u9664"}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u5728\u90e8\u7f72\u8fc7\u7a0b\u4e2d\u9047\u5230\u95ee\u9898\uff0c\u8bf7\u68c0\u67e5\u4ee5\u4e0b\u4e8b\u9879\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u786e\u4fdd\u6240\u6709\u73af\u5883\u53d8\u91cf\u90fd\u5df2\u6b63\u786e\u8bbe\u7f6e\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u68c0\u67e5 k8s \u5bb9\u5668\u7684\u65e5\u5fd7\u4ee5\u83b7\u53d6\u9519\u8bef\u4fe1\u606f\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u786e\u4fdd\u670d\u52a1\u5668\u7aef\u53e3\u6ca1\u6709\u88ab\u9632\u706b\u5899\u963b\u6b62\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8fdb\u4e00\u6b65\u9605\u8bfb",children:"\u8fdb\u4e00\u6b65\u9605\u8bfb"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/deploy/steedos-config",children:"\u914d\u7f6e Steedos \u5b9e\u4f8b"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>r});s(96540);var t=s(18215);const a={tabItem:"tabItem_Ymn6"};var l=s(74848);function r(e){let{children:n,hidden:s,className:r}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,r),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>S});var t=s(96540),a=s(18215),l=s(23104),r=s(56347),o=s(205),i=s(57485),d=s(31682),c=s(89466);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:a}}=e;return{value:n,label:s,attributes:t,default:a}}))}(s);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function h(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:s}=e;const a=(0,r.W6)(),l=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,i.aZ)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function x(e){const{defaultValue:n,queryString:s=!1,groupId:a}=e,l=m(e),[r,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[d,u]=p({queryString:s,groupId:a}),[x,b]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,c.Dv)(s);return[a,(0,t.useCallback)((e=>{s&&l.set(e)}),[s,l])]}({groupId:a}),g=(()=>{const e=d??x;return h({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{g&&i(g)}),[g]);return{selectedValue:r,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,l]),tabValues:l}}var b=s(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=s(74848);function y(e){let{className:n,block:s,selectedValue:t,selectValue:r,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.a_)(),c=e=>{const n=e.currentTarget,s=i.indexOf(n),a=o[s].value;a!==t&&(d(n),r(a))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const s=i.indexOf(e.currentTarget)+1;n=i[s]??i[0];break}case"ArrowLeft":{const s=i.indexOf(e.currentTarget)-1;n=i[s]??i[i.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":s},n),children:o.map((e=>{let{value:n,label:s,attributes:l}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:u,onClick:c,...l,className:(0,a.A)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:a}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function f(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,j.jsx)(y,{...e,...n}),(0,j.jsx)(v,{...e,...n})]})}function S(e){const n=(0,b.A)();return(0,j.jsx)(f,{...e,children:u(e.children)},String(n))}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var t=s(96540);const a={},l=t.createContext(a);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);