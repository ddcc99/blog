(window.webpackJsonp=window.webpackJsonp||[]).push([[5,9],{238:function(t,e,a){},239:function(t,e,a){"use strict";a(238)},240:function(t,e,a){},248:function(t,e,a){"use strict";a.r(e);var s={name:"dPrevNext",computed:{currentPageIndex(){return this.$articlePages.findIndex(t=>t.path===this.$page.path)},prevPage(){return this.$articlePages[this.currentPageIndex-1]},nextPage(){return this.$articlePages[this.currentPageIndex+1]},isFirstPage(){return!this.currentPageIndex},isLastPage(){return this.currentPageIndex===this.$articlePages.length-1}},data:()=>({}),mounted(){},methods:{}},i=(a(239),a(14)),n=Object(i.a)(s,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-prev-next"},[e("div",{staticClass:"prev"},[!t.isFirstPage&&t.prevPage?[e("router-link",{attrs:{to:t.prevPage.path}},[e("i",{staticClass:"fa fa-chevron-left",attrs:{"aria-hidden":"true"}}),t._v(" "),e("span",[t._v(t._s(t.prevPage.frontmatter.title))])])]:t._e()],2),t._v(" "),e("div",{staticClass:"next"},[!t.isLastPage&&t.nextPage?[e("router-link",{attrs:{to:t.nextPage.path}},[e("span",[t._v(t._s(t.nextPage.frontmatter.title))]),t._v(" "),e("i",{staticClass:"fa fa-chevron-right",attrs:{"aria-hidden":"true"}})])]:t._e()],2)])}),[],!1,null,"5c1060bc",null);e.default=n.exports},249:function(t,e,a){"use strict";a(240)},260:function(t,e,a){"use strict";a.r(e);var s={name:"dArticle",components:{PrevNext:a(248).default},data:()=>({}),mounted(){console.log("====this.$site====",this.$site),console.log("====this.$page====",this.$page),console.log("====this.$themeConfig====",this.$themeConfig)},methods:{}},i=(a(249),a(14)),n=Object(i.a)(s,(function(){var t,e,a=this,s=a._self._c;return s("div",{staticClass:"d-article"},[s("div",{staticClass:"article-info"},[s("h1",[a._v(a._s(a.$page.frontmatter.title))]),a._v(" "),s("p",{staticClass:"time-container"},[s("i",{staticClass:"fa fa-calendar",attrs:{"aria-hidden":"true"}}),a._v(" "),s("span",[a._v(a._s(null===(t=a.$page.frontmatter.postTime)||void 0===t||null===(e=t.substr)||void 0===e?void 0:e.call(t,0,10)))])]),a._v(" "),s("d-article-info")],1),a._v(" "),s("Content"),a._v(" "),s("PrevNext")],1)}),[],!1,null,"607df124",null);e.default=n.exports}}]);