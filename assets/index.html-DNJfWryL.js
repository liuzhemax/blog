import{_ as t,c as r,e as s,o as n}from"./app-D5peQ_E2.js";const a="/images/28FBDEB7C0804F9C9A9E53A5C9DEC0C5clipboard.png",p="/images/B1FE2493A067433EBB99A47D55740E33clipboard.png",i="/images/2C6E9B5C538E4A97A18CC499EFCC98ADclipboard.png",l="/images/FF51CE19DAFF43B6AEB17650553CE68Aclipboard.png",o={};function c(d,e){return n(),r("div",null,e[0]||(e[0]=[s('<h2 id="有了docker-为什么还用kubernetes" tabindex="-1"><a class="header-anchor" href="#有了docker-为什么还用kubernetes"><span>有了Docker，为什么还用Kubernetes？</span></a></h2><p>为提高业务并发和高可用，会使用多台服务器，因此会面向这些问题：</p><ul><li><p>多容器跨主机提供服务</p></li><li><p>多容器分布节点部署</p></li><li><p>多容器怎么升级</p></li><li><p>怎么高效管理这些容器</p></li></ul><p><img src="'+a+'" alt=""></p><p>容器编排系统：</p><ul><li><p>Kubernetes</p></li><li><p>Swarm</p></li><li><p>Mesos Marathon</p></li></ul><p><img src="'+p+'" alt=""></p><h2 id="kubernetes是什么" tabindex="-1"><a class="header-anchor" href="#kubernetes是什么"><span>Kubernetes是什么</span></a></h2><ul><li><p>Kubernetes是Google在2014年开源的一个容器集群管理系统，Kubernetes简称K8s。</p></li><li><p>Kubernetes用于容器化应用程序的部署，扩展和管理，目标是让部署容器化应用简单高效</p></li></ul><p>官方网站：http://www.kubernetes.io/</p><p>官方文档：https://kubernetes.io/zh/docs/home/</p><h2 id="kubernetes集群架构与组件" tabindex="-1"><a class="header-anchor" href="#kubernetes集群架构与组件"><span>Kubernetes集群架构与组件</span></a></h2><p><img src="'+i+'" alt=""></p><p><img src="'+l+'" alt=""></p><h3 id="master组件" tabindex="-1"><a class="header-anchor" href="#master组件"><span>Master组件</span></a></h3><p>kube-apiserver</p><p>Kubernetes API，集群的统一入口，各组件协调者，以RESTful API提供接口服务，所有对 象资源的增删改查和监听操作都交给 APIServer处理后再提交给Etcd存储。</p><p>kube-controller-manager</p><p>处理集群中常规后台任务，一个资源对应一个控制器，而 ControllerManager就是负责管理这些控制器的。</p><p>kube-scheduler</p><p>根据调度算法为新创建的Pod选择一个Node节点，可以任意部署, 可以部署在同一个节点上,也可以部署在不同的节点上。</p><p>etcd</p><p>分布式键值存储系统。用于保存集群状态数据，比如Pod、Service 等对象信息。</p><h3 id="node组件" tabindex="-1"><a class="header-anchor" href="#node组件"><span>Node组件</span></a></h3><p>kubelet</p><p>kubelet是Master在Node节点上的Agent，管理本机运行容器的生命周 期，比如创建容器、Pod挂载数据卷、下载secret、获取容器和节点状态 等工作。kubelet将每个Pod转换成一组容器。</p><p>kube-proxy</p><p>在Node节点上实现Pod网络代理，维护网络规则和四层负载均衡工作。</p><p>docker或rocket</p><p>容器引擎，运行容器。</p>',30)]))}const m=t(o,[["render",c],["__file","index.html.vue"]]),h=JSON.parse(`{"path":"/notes/k8s/wcm7h7pv/","title":"kubernetes核心概念","lang":"zh-CN","frontmatter":{"title":"kubernetes核心概念","createTime":"2024/09/29 10:25:35","permalink":"/notes/k8s/wcm7h7pv/","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;const isDark = um === 'dark' || (um !== 'light' && sm);document.documentElement.dataset.theme = isDark ? 'dark' : 'light';})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"]]},"headers":[{"level":2,"title":"有了Docker，为什么还用Kubernetes？","slug":"有了docker-为什么还用kubernetes","link":"#有了docker-为什么还用kubernetes","children":[]},{"level":2,"title":"Kubernetes是什么","slug":"kubernetes是什么","link":"#kubernetes是什么","children":[]},{"level":2,"title":"Kubernetes集群架构与组件","slug":"kubernetes集群架构与组件","link":"#kubernetes集群架构与组件","children":[{"level":3,"title":"Master组件","slug":"master组件","link":"#master组件","children":[]},{"level":3,"title":"Node组件","slug":"node组件","link":"#node组件","children":[]}]}],"readingTime":{"minutes":1.54,"words":463},"filePathRelative":"notes/k8s/introduction/1.kubernetes核心概念.md"}`);export{m as comp,h as data};
