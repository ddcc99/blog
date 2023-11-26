(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{276:function(t,r,e){"use strict";e.r(r);var a=e(14),v=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey},scopedSlots:t._u([{key:"abstract",fn:function(){return[r("p",[t._v("关于浏览器相关内容的简要笔记")]),t._v(" "),r("blockquote",[r("p",[t._v("只是在我刚接触前端不久，记录的一些很基础的内容，后面打算另外写一篇文章来专门讲浏览器运行原理的内容")])])]},proxy:!0}])},[r("h2",{attrs:{id:"构建dom"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#构建dom"}},[t._v("#")]),t._v(" 构建DOM")]),t._v(" "),r("p",[t._v("解析HTML，添加节点到树中")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://p0.qhimg.com/t01e1ff266d0b355d62.gif",alt:"img"}})]),t._v(" "),r("p",[t._v("图片和CSS这些资源一般不会阻塞HTML的解析，因为他们不会影响DOM的生成")]),t._v(" "),r("p",[t._v("加载JS文件时阻塞：当浏览器构建 DOM 的时候，如果在 HTML 中遇到了一个 "),r("code",[t._v("<script>...<\/script>")]),t._v("标签，它必须立即执行。如果脚本是来自于外部的，那么它必须首先下载脚本。")]),t._v(" "),r("p",[t._v("原因：因为脚本可能改变DOM的结构，需要等脚本改变完再继续构建DOM，否则不安全")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://p0.qhimg.com/t01e3b5f9d1aaa24fea.gif",alt:"img"}})]),t._v(" "),r("p",[t._v("CSS 可能会阻塞解析，取决于外部样式表和脚本在文档中的顺序。如果在文档中外部样式表放置在脚本之前，由于CSS解析与Script执行互斥，当解析器获取到一个 script 标签，DOM 将无法继续构建直到 JavaScript 执行完毕，而 JavaScript 在 CSS 下载完，解析完，并且 CSSOM 可以使用的时候，才能执行。")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://p0.qhimg.com/t011e23f55c658b7ba2.png",alt:"img"}})]),t._v(" "),r("p",[t._v("最佳实践：样式放顶部，脚本放底部")]),t._v(" "),r("p",[t._v("HTML是怎么转换成DOM树的：")]),t._v(" "),r("ol",[r("li",[t._v("编码")]),t._v(" "),r("li",[t._v("预解析")]),t._v(" "),r("li",[t._v("标记")]),t._v(" "),r("li",[t._v("构建树")])]),t._v(" "),r("h2",{attrs:{id:"cssom"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cssom"}},[t._v("#")]),t._v(" CSSOM")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN上对CSSOM的描述"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("The CSS Object Model is a set of APIs allowing the manipulation of CSS from JavaScript. It is much like the DOM, but for the CSS rather than the HTML. It allows users to read and modify CSS style dynamically.")])]),t._v(" "),r("p",[t._v("CSSOM是一组允许JavaScript操作CSS的API，类似于DOM")]),t._v(" "),r("h2",{attrs:{id:"浏览器渲染原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染原理"}},[t._v("#")]),t._v(" 浏览器渲染原理")]),t._v(" "),r("p",[t._v("浏览器渲染过程主要分五步：")]),t._v(" "),r("ul",[r("li",[t._v("将HTML文档解析为DOM树：\n"),r("ul",[r("li",[t._v("Tokeniser 标记化，将HTML内容解析为多个标记")]),t._v(" "),r("li",[t._v("根据识别后的标记进行DOM树构造")]),t._v(" "),r("li",[t._v("在构造过程中会创建document对象，然后在以document为根节点的树上进行各种元素的添加")])])]),t._v(" "),r("li",[t._v("主线程解析CSS，并确定每个DOM节点的计算样式，构建CSSOM")]),t._v(" "),r("li",[t._v("将DOM和CSSOM合并为渲染树(rendering tree)，同时display:none的元素不在该树中，而在伪元素 "),r("strong",[t._v("::before")]),t._v(" , "),r("strong",[t._v("::after")]),t._v(" 中添加了content值的元素会被添加在该树")]),t._v(" "),r("li",[t._v("layout布局（回流），即让浏览器弄清楚各个节点在页面的确切位置和大小")]),t._v(" "),r("li",[t._v("调用GPU绘制、合成图层，显示在屏幕上")])]),t._v(" "),r("p",[t._v("参考："),r("a",{attrs:{href:"https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览器的工作原理：新式网络浏览器幕后揭秘"),r("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=v.exports}}]);