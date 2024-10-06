import{_ as a,c as t,e as s,o as p}from"./app-D5peQ_E2.js";const i="/images/C48718674B744FDF9197F05A007F48DDclipboard.png",n="/images/7FF244B0B7F249F58C007FCFE25686BCclipboard.png",o="/images/16CAB88248FC423593F0E6DFD25CAE7Dclipboard.png",r="/images/5CCA9A6B73854378B5B558636BABEA02clipboard.png",c="/images/09FFB136B2E6433F88E85406E893ED65clipboard.png",d="/images/8388D75514DB4F4AAA08907D7DF29A52clipboard.png",l={};function m(h,e){return p(),t("div",null,e[0]||(e[0]=[s('<h2 id="数据属性" tabindex="-1"><a class="header-anchor" href="#数据属性"><span>数据属性</span></a></h2><p>组件的data 选项是一个函数。Vue 会在创建新组件实例的过程中调用此函数。它应该返 回一个对象，然后Vue 会通过响应性系统将其包裹起来，并以$data 的形式存储在组件实 例中。为方便起见，该对象的任何顶级“属性”也会直接通过组件实例暴露出来：</p><p><img src="'+i+'" alt=""></p><p>参考文档： 相等 https://v3.cn.vuejs.org/guide/data-methods.html#data-property</p><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法"><span>方法</span></a></h2><p>方法（methods）：处理数据的函数。在methods选项中定义的函数称为方法。</p><p>示例：添加方法及调用</p><p><img src="'+n+'" alt=""></p><p>在methods选项中定义的方法与data选项中的数据一样，可以在组件的模板中使用。</p><p>在模板中，它们通常被当做事件监听使用：</p><p><img src="'+o+'" alt=""></p><h2 id="计算属性" tabindex="-1"><a class="header-anchor" href="#计算属性"><span>计算属性</span></a></h2><p>计算属性（computed）：根据所依赖的数据动态显示新的计算结果。</p><p>示例：需要在双花括号里添加计算再展示数据，例如统计分数</p><p><img src="'+r+'" alt=""></p><p>使用computed：</p><p><img src="'+c+'" alt=""></p><p>小结：计算属性一般就是用来通过其他的数据算出一个新数据，而且它有一个好处就是， 它把新的数据缓存下来了，当其他的依赖数据没有发生改变，它调用的是缓存的数据，这 就极大的提高了我们程序的性能。而如果写在methods里，数据根本没有缓存的概念，所 以每次都会重新计算。这也是为什么不用methods的原因！</p><h2 id="监听属性" tabindex="-1"><a class="header-anchor" href="#监听属性"><span>监听属性</span></a></h2><p>监听属性（watch）：是一个观察动作，监听data数 据变化后触发对应函数，函数有newValue（变化之后 结果）和oldValue（变化之前结果）两个参数。 当需要在数据变化时执行异步或开销较大的操作时， 这个方式是最有用的。</p><p>示例：监听变化</p><p><img src="'+d+'" alt=""></p>',22)]))}const u=a(l,[["render",m],["__file","index.html.vue"]]),_=JSON.parse(`{"path":"/notes/web/79kdnqtw/","title":"vue常用属性","lang":"zh-CN","frontmatter":{"title":"vue常用属性","createTime":"2024/09/29 14:47:27","permalink":"/notes/web/79kdnqtw/","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;const isDark = um === 'dark' || (um !== 'light' && sm);document.documentElement.dataset.theme = isDark ? 'dark' : 'light';})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"]]},"headers":[{"level":2,"title":"数据属性","slug":"数据属性","link":"#数据属性","children":[]},{"level":2,"title":"方法","slug":"方法","link":"#方法","children":[]},{"level":2,"title":"计算属性","slug":"计算属性","link":"#计算属性","children":[]},{"level":2,"title":"监听属性","slug":"监听属性","link":"#监听属性","children":[]}],"readingTime":{"minutes":1.62,"words":486},"filePathRelative":"notes/web/upgrade/3.vue常用属性.md"}`);export{u as comp,_ as data};