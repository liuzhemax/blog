import{_ as i,c as a,e as n,o as e}from"./app-D5peQ_E2.js";const l="/images/80B71B676C07446E9B2AA1C978F26318clipboard.png",t="/images/755E9E6EDA8941558B1745290F2D917Cclipboard.png",p="/images/FAC6C069723344C2A0DB0C8F849AE00Dclipboard.png",h="/images/050E337CBA4347278B9D0F4B2D7BBB2Aclipboard.png",k="/images/BD3FFB854BCE4CEF8A11A7EE1B494B72clipboard.png",d="/images/BDD71F15C8FF4D99B2BC00D24806B61Dclipboard.png",r="/images/127B91087C4C4170B0479529BD161B90clipboard.png",c="/images/F37B91C5C39D4B548C6632FF7971A806clipboard.png",A="/images/907C87901FA54AF4A7B760C74CB4BBF7clipboard.png",g="/images/AF4D65A9A4C84C3DB178061646047519clipboard.png",v={};function u(m,s){return e(),a("div",null,s[0]||(s[0]=[n(`<h2 id="无状态与有状态" tabindex="-1"><a class="header-anchor" href="#无状态与有状态"><span>无状态与有状态</span></a></h2><p>Deployment控制器设计原则：管理的所有Pod一模一样，提供同一个服务，也不考虑在哪台Node 运行，可随意扩容和缩容。这种应用称为“无状态”，例如Web服务</p><p>在实际的场景中，并不能满足所有应用，尤其是分布式应用，会部署多个实例，这些实例之间往往有 依赖关系，例如主从关系、主备关系，这种应用称为“有状态”，例如MySQL主从、Etcd集群</p><h2 id="statefulset-控制器概述" tabindex="-1"><a class="header-anchor" href="#statefulset-控制器概述"><span>StatefulSet 控制器概述</span></a></h2><p>StatefulSet控制器用于部署有状态应用，满足一些有状态应 用的需求：</p><ul><li><p>Pod有序的部署、扩容、删除和停止</p></li><li><p>Pod分配一个稳定的且唯一的网络标识</p></li><li><p>Pod分配一个独享的存储</p></li></ul><h2 id="statefulset-控制器-网络标识" tabindex="-1"><a class="header-anchor" href="#statefulset-控制器-网络标识"><span>StatefulSet 控制器：网络标识</span></a></h2><p>稳定的网络标识：使用Headless Service（相比普通Service只是将spec.clusterIP定义为None）来维 护Pod网络身份，会为每个Pod分配一个数字编号并且按照编号顺序部署。还需要在StatefulSet添加 serviceName: “nginx”字段指定StatefulSet控制器要使用这个Headless Service。</p><p>稳定主要体现在主机名和Pod A记录：</p><p>主机名：&lt;statefulset名称&gt;-&lt;编号&gt;</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Pod DNS A记录：&lt;statefulset名称-编号&gt;.&lt;service-name&gt;.&lt;namespace&gt;.svc.cluster.local</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>部署statefulset控制器</p><p>vim statefulset-web.yaml</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">apiVersion:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apps/v1</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">kind:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> StatefulSet</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">metadata:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  name:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> statefulset-web</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">spec:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  serviceName:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">handless-service</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  replicas:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 3</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  selector:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    matchLabels:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">      app:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> nginx</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  template:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    metadata:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">      labels:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">        app:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> nginx</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    spec:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">      containers:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">      -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> name:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> nginx</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">        image:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> nginx</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">        ports:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">        -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> containerPort:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 80</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">          name:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> web</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>部署handless-service</p><p>vim handless-service.yaml</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">apiVersion:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> v1</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">kind:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Service</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">metadata:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  name:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> handless-service</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">spec:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  clusterIP:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> None</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  selector:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    app:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> nginx</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  ports:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> protocol:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> TCP</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">      port:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 80</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">      targetPort:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 9376</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>验证查看</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">kubectl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apply</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -f</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> statefulset-web.yaml</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">kubectl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apply</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -f</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> handless-service.yaml</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">kubectl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> pod,svc</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">kubectl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> statefulsets.apps</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看Pod创建顺序：</p><p><img src="`+l+`" alt=""></p><p>查看主机名：</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">kubectl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> exec</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> statefulset-web-0</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> hostname</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">kubectl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> exec</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> statefulset-web-1</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> hostname</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">kubectl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> exec</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> statefulset-web-2</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> hostname</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+t+`" alt=""></p><p>测试A记录解析：</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">kubectl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> run</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -it</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> dns-test</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --rm</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --image=busybox:1.28.4</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> sh</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">nslookup</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> handless-service</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>解析出对应的三个Pod IP记录，其他Pod可使用这个名称访问：</p><p><img src="`+p+`" alt=""></p><h2 id="statefulset-控制器-独享存储" tabindex="-1"><a class="header-anchor" href="#statefulset-控制器-独享存储"><span>StatefulSet 控制器：独享存储</span></a></h2><p>独享存储：StatefulSet的存储卷使用VolumeClaimTemplate创建，称为卷申请模板，当StatefulSet使用 VolumeClaimTemplate创建一个PersistentVolume时，同样也会为每个Pod分配并创建一个编号的PVC， 每个PVC绑定对应的PV，从而保证每个Pod都拥有独立的存储。</p><p>部署nfs</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#安装nfs安装包（每个k8s节点都要安装）</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">yum</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> nfs-utils</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#创建nfs共享目录</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">mkdir</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /nfs/kubernetes</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#修改nfs配置文件</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">vim</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /etc/exports</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">/nfs/kubernetes</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> *</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">rw,no_root_squash</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#启动nfs并加入开机自启</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">systemctl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> start</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> nfs</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">systemctl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> enable</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> nfs</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#尝试在别的K8s节点挂载nfs共享目录</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">mount</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -t</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> nfs</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 192.168.0.13:/nfs/kubernetes</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /mnt/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>部署nfs-storage</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> clone</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> https://github.com/kubernetes-incubator/external-storage</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> nfs-client/deploy</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">kubectl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apply</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -f</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> rbac.yaml</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # 授权访问apiserver </span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">kubectl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apply</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -f</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> deployment.yaml</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # 部署插件，需修改里面NFS服务器地址与共享目录 </span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">kubectl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apply</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -f</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> class.yaml</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # 创建存储类</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">kubectl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> sc</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 查看存储类</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>部署statefulset控制器</p><p>vim statefulset-web.yaml</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">apiVersion:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apps/v1</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">kind:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> StatefulSet</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">metadata:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  name:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> statefulset-web</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">spec:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  serviceName:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">handless-service</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  replicas:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 3</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  selector:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    matchLabels:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">      app:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> nginx</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  template:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    metadata:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">      labels:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">        app:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> nginx</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    spec:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">      containers:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">      -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> name:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> nginx</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">        image:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> nginx</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">        ports:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">        -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> containerPort:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 80</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">          name:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> web</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">        volumeMounts:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">        -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> name:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> www</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">          mountPath:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /usr/share/nginx/html</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  volumeClaimTemplates:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> metadata:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">      name:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> www</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    spec:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">      storageClassName:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">managed-nfs-storage</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">      accessModes:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">      -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ReadWriteOnce</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">      resources:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">        requests:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">          storage:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 1G</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">kubectl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> delete</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -f</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> statefulset-web.yaml</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">kubectl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apply</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -f</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> statefulset-web.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+h+'" alt=""></p><p>nfs服务器共享目录</p><p><img src="'+k+'" alt=""></p><p>测试在这三个pv目录下创建三个不同内容的index.html页面，然后访问对应不同的Pod的IP</p><p><img src="'+d+'" alt=""></p><p>验证访问</p><p><img src="'+r+'" alt=""></p><p>从上面图中，我们可以看到每个pod的数据都是独立存储的。</p><p>测试删除statefulset控制器</p><p><img src="'+c+'" alt=""></p><p>从上图可以看出，当我们删除pod的时候，并没有删除对应pvc和pv，而是做了数据的持久化。</p><p>再次重建测试能否访问之前的数据</p><p><img src="'+A+'" alt=""></p><p><img src="'+g+'" alt=""></p><p>从上图可以看出，重建之后，数据还是之前的数据，每个pvc对应绑定每个pv，pod的IP发生了变化。</p><p>kubernetes根据pod的编号找同样编号的pvc去挂载，从而实现了数据持久化。</p><p>通过编号保证每个pod的启动顺序</p><p>通过编号为每个pod创建不同的主机名以及dns A记录</p><p>通过编号为每个pod创建独立的pvc</p><h2 id="statefulset-控制器-小结" tabindex="-1"><a class="header-anchor" href="#statefulset-控制器-小结"><span>StatefulSet 控制器：小结</span></a></h2><p>StatefulSet与Deployment区别：有身份的！</p><p>身份三要素：</p><ul><li><p>域名</p></li><li><p>主机名</p></li><li><p>存储（PVC）</p></li></ul>',61)]))}const o=i(v,[["render",u],["__file","index.html.vue"]]),b=JSON.parse(`{"path":"/notes/k8s/2rouji53/","title":"再谈有状态应用部署statefulset","lang":"zh-CN","frontmatter":{"title":"再谈有状态应用部署statefulset","createTime":"2024/09/29 10:25:35","permalink":"/notes/k8s/2rouji53/","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;const isDark = um === 'dark' || (um !== 'light' && sm);document.documentElement.dataset.theme = isDark ? 'dark' : 'light';})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"]]},"headers":[{"level":2,"title":"无状态与有状态","slug":"无状态与有状态","link":"#无状态与有状态","children":[]},{"level":2,"title":"StatefulSet 控制器概述","slug":"statefulset-控制器概述","link":"#statefulset-控制器概述","children":[]},{"level":2,"title":"StatefulSet 控制器：网络标识","slug":"statefulset-控制器-网络标识","link":"#statefulset-控制器-网络标识","children":[]},{"level":2,"title":"StatefulSet 控制器：独享存储","slug":"statefulset-控制器-独享存储","link":"#statefulset-控制器-独享存储","children":[]},{"level":2,"title":"StatefulSet 控制器：小结","slug":"statefulset-控制器-小结","link":"#statefulset-控制器-小结","children":[]}],"readingTime":{"minutes":3.69,"words":1106},"filePathRelative":"notes/k8s/introduction/12.再谈有状态应用部署statefulset.md"}`);export{o as comp,b as data};