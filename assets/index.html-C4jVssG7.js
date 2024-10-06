import{_ as i,c as a,e as n,o as l}from"./app-D5peQ_E2.js";const e="/images/1AD8668512ED40C7982F71EEF7578947clipboard.png",t="/images/BCA6E0A58E0B4B57864D0463C3A40454clipboard.png",p="/images/AC3C714989FF4404BD41B4DFF6EE4508clipboard.png",h="/images/ABF0ED03F8B84009870BC9853D2F5CFAclipboard.png",k="/images/792129A318954414A785DF716F403E67clipboard.png",d="/images/B39AB402B525404DB60FF061FFE148D0clipboard.png",r="/images/DCE9C4C11E3D48AFBD309303774D4515clipboard.png",c="/images/AD6A4A61D93642979FC4597F279971CEclipboard.png",g="/images/F17E6A5760E5440D935C1A2AE3DCC9CBclipboard.png",A="/images/BBE56CA4DD2C4075B8E673533B732201clipboard.png",m="/images/6C71CC0FD2EC42A998135CB4485B01B2clipboard.png",o="/images/4CB047B4EFBC4538A62072AC9D70C419clipboard.png",u={};function v(y,s){return l(),a("div",null,s[0]||(s[0]=[n(`<h2 id="需求背景" tabindex="-1"><a class="header-anchor" href="#需求背景"><span>需求背景</span></a></h2><ul><li><p>业务发展越来越庞大，服务器越来越多</p></li><li><p>各种访问日志、应用日志、错误日志量越来越多</p></li><li><p>开发人员排查问题，需要到服务器上查日志，效率低、权限不好控制</p></li><li><p>运维需实时关注业务访问情况</p></li></ul><h2 id="容器特性给日志采集带来的难度" tabindex="-1"><a class="header-anchor" href="#容器特性给日志采集带来的难度"><span>容器特性给日志采集带来的难度</span></a></h2><p>容器特性给日志采集带来的难度：</p><ul><li><p>K8s弹性伸缩性：导致不能预先确定采集的目标</p></li><li><p>容器隔离性：容器的文件系统与宿主机是隔离，导致 日志采集器读取日志文件受阻</p></li></ul><h2 id="日志按体现方式分类" tabindex="-1"><a class="header-anchor" href="#日志按体现方式分类"><span>日志按体现方式分类</span></a></h2><p>应用程序日志记录体现方式分为两类：</p><ul><li><p>标准输出：输出到控制台，使用kubectl logs可以看到</p></li><li><p>日志文件：写到容器的文件系统的文件</p></li></ul><p>示例：标准输出</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">kubectl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> run</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> nginx</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --image=nginx</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">kubectl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> pod</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -o</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> wide</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">curl</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -I</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 10.244.36.65</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">kubectl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> exec</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -it</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> nginx</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> bash</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+e+'" alt=""></p><p><img src="'+t+'" alt=""></p><p>日志文件在宿主机上的路径</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">kubectl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> pod</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -o</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> wide</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">     #查看pod所在节点</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><img src="'+p+`" alt=""></p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#采集所有容器的日志</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">/var/lib/docker/containers/*/*-json.log</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：日志文件</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">kubectl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> run</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> tomcat</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --image=tomcat</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">kubectl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> pod</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -o</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> wide</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">curl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 10.244.36.66:8080</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">kubectl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> exec</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -it</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> tomcat</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> bash</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+h+`" alt=""></p><p>方式一：使用emptyDir数据卷挂载容器日志路径到宿主机上，DaemonSet方式部署，在每个节点部署日志采集器采集日志。</p><p>vim tomcat.yaml</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">apiVersion:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> v1</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">kind:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Pod</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">metadata:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  name:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> tomcat-web</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">spec:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  containers:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> image:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> tomcat</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    name:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> web</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    volumeMounts:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> name:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> logs</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">      mountPath:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /usr/local/tomcat/logs</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  volumes:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> name:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> logs</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    emptyDir:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> {}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+k+'" alt=""></p><p><img src="'+d+`" alt=""></p><p>方式二：使用emptyDir数据卷共享应用容器的日志让日志采集器容器能够采集到</p><p>vim tomcat.yaml</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">apiVersion:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> v1</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">kind:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Pod</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">metadata:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  name:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> tomcat-web</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">spec:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  containers:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> image:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> tomcat</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    name:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> web</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    volumeMounts:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> name:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> logs</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">      mountPath:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /usr/local/tomcat/logs</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> image:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> busybox</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    name:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> test</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    command</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">:</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [/bin/sh,-c,</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">tail -f /tmp/localhost_access_log.2021-02-26.txt</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">]</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    volumeMounts:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> name:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> logs</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">      mountPath:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /tmp</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  volumes:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> name:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> logs</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    emptyDir:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> {}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+r+'" alt=""></p><h2 id="kubernetes应用日志收集" tabindex="-1"><a class="header-anchor" href="#kubernetes应用日志收集"><span>Kubernetes应用日志收集</span></a></h2><p><img src="'+c+'" alt=""></p><h2 id="elk-stack日志系统" tabindex="-1"><a class="header-anchor" href="#elk-stack日志系统"><span>ELK Stack日志系统</span></a></h2><p>ELK 是三个开源软件的缩写，提供一套完整的企业级日 志平台解决方案。</p><p>分别是：</p><ul><li><p>Elasticsearch：搜索、分析和存储数据</p></li><li><p>Logstash ：采集日志、格式化、过滤，最后将数据 推送到Elasticsearch存储</p></li><li><p>Kibana：数据可视化</p></li><li><p>Beats ：集合了多种单一用途数据采集器，用于实 现从边缘机器向 Logstash 和 Elasticsearch 发送数 据。里面应用最多的是Filebeat，是一个轻量级日 志采集器</p></li></ul><p><img src="'+g+`" alt=""></p><p>部署nfs-pv自动供给</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#安装nfs安装包（每个k8s节点都要安装）</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">yum</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> nfs-utils</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#创建nfs共享目录</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">mkdir</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /nfs/kubernetes</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#修改nfs配置文件</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">vim</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /etc/exports</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">/nfs/kubernetes</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> *</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">rw,no_root_squash</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#启动nfs并加入开机自启</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">systemctl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> start</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> nfs</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">systemctl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> enable</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> nfs</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#部署NFS实现自动创建PV插件：</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> clone</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> https://github.com/kubernetes-incubator/external-storage</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> nfs-client/deploy</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">kubectl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apply</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -f</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> rbac.yaml</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # 授权访问apiserver </span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">kubectl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apply</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -f</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> deployment.yaml</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # 部署插件，需修改里面NFS服务器地址与共享目录 </span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">kubectl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apply</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -f</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> class.yaml</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # 创建存储类</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">kubectl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> sc</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 查看存储类</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="/attachments/C51F66682474432DB8DEEF207364AA3Delk.zip">elk.zip</a></p><p>搭建日志系统：</p><ul><li><p>elasticsearch.yaml # ES数据库</p></li><li><p>kibana.yaml # 可视化展示</p></li></ul><p>日志收集：</p><ul><li><p>filebeat-kubernetes.yaml # 采集所有容器标准输出</p></li><li><p>app-log-stdout.yaml # 标准输出测试应用</p></li><li><p>app-log-logfile.yaml # 日志文件测试应用</p></li></ul><p>可视化展示日志：</p><ol><li><p>查看索引（日志记录集合）：Management -&gt; Stack Management -&gt; 索引管理</p></li><li><p>将索引关联到Kibana：索引模式 -&gt; 创建 -&gt; 匹配模式 -&gt; 选择时间戳</p></li><li><p>在Discover选择索引模式查看日志</p></li></ol><p><img src="`+A+'" alt=""></p><p><img src="'+m+'" alt=""></p><p><img src="'+o+'" alt=""></p>',47)]))}const D=i(u,[["render",v],["__file","index.html.vue"]]),B=JSON.parse(`{"path":"/notes/k8s/csp1s14g/","title":"elk收集kubernetes应用日志","lang":"zh-CN","frontmatter":{"title":"elk收集kubernetes应用日志","createTime":"2024/09/29 11:18:47","permalink":"/notes/k8s/csp1s14g/","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;const isDark = um === 'dark' || (um !== 'light' && sm);document.documentElement.dataset.theme = isDark ? 'dark' : 'light';})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"]]},"headers":[{"level":2,"title":"需求背景","slug":"需求背景","link":"#需求背景","children":[]},{"level":2,"title":"容器特性给日志采集带来的难度","slug":"容器特性给日志采集带来的难度","link":"#容器特性给日志采集带来的难度","children":[]},{"level":2,"title":"日志按体现方式分类","slug":"日志按体现方式分类","link":"#日志按体现方式分类","children":[]},{"level":2,"title":"Kubernetes应用日志收集","slug":"kubernetes应用日志收集","link":"#kubernetes应用日志收集","children":[]},{"level":2,"title":"ELK Stack日志系统","slug":"elk-stack日志系统","link":"#elk-stack日志系统","children":[]}],"readingTime":{"minutes":2.89,"words":867},"filePathRelative":"notes/k8s/introduction/17.elk收集kubernetes应用日志.md"}`);export{D as comp,B as data};