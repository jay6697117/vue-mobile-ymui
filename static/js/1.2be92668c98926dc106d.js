webpackJsonp([1],{"8hXn":function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=s("9004"),a=(n.a,{name:"toast",components:{footerBar:n.a},data:function(){return{}},methods:{successTip:function(){this.$toast({msg:"成功提示",type:"success"})},failTip:function(){this.$toast({msg:"失败提示",type:"fail"})},warningTip:function(){this.$toast({msg:"警示提示",type:"warning"})},loadingTip:function(){this.$toast({msg:"正在加载",type:"loading"})},oneTip:function(){this.$toast({msg:"手机号码不能为空"})},multiTip:function(){this.$toast({msg:"字数多怎么办字数多怎么办哈哈哈"})}}}),e={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"mainPage"},[s("div",{staticClass:"list"},[s("div",{staticClass:"list"},[s("div",{staticClass:"item",on:{click:t.successTip}},[t._v("成功提示")]),t._v(" "),s("div",{staticClass:"item",on:{click:t.failTip}},[t._v("失败提示")]),t._v(" "),s("div",{staticClass:"item",on:{click:t.warningTip}},[t._v("警示提示")]),t._v(" "),s("div",{staticClass:"item",on:{click:t.loadingTip}},[t._v("加载提示")]),t._v(" "),s("div",{staticClass:"item",on:{click:t.oneTip}},[t._v("字数少")]),t._v(" "),s("div",{staticClass:"item",on:{click:t.multiTip}},[t._v("字数多")])])]),t._v(" "),s("footerBar")],1)},staticRenderFns:[]};var c=s("VU/8")(a,e,!1,function(t){s("lpI4")},"data-v-4a95a51a",null);i.default=c.exports},9004:function(t,i,s){"use strict";var n={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("ul",[t._l(t.items,function(i,n){return s("li",{key:n,staticClass:"w2",on:{click:function(i){t.toUrl(n)}}},[t.$route.path==i.url?s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":i.icon1}})]):t._e(),t._v(" "),t.$route.path!==i.url?s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":i.icon2}})]):t._e(),t._v(" "),s("div",{staticClass:"name",class:{c1:t.$route.path==i.url}},[t._v(t._s(i.name))])])}),t._v(" "),s("div",{staticClass:"bt1"})],2)},staticRenderFns:[]};var a=s("VU/8")({data:function(){return{items:[{name:"toast",url:"/",icon1:"#icon-index1",icon2:"#icon-index0"},{name:"dialog",url:"/dialog",icon1:"#icon-mine1",icon2:"#icon-mine0"}]}},methods:{toUrl:function(t){this.$router.replace({path:this.items[t].url})}}},n,!1,function(t){s("UPyn")},"data-v-05fbfd5e",null);i.a=a.exports},UPyn:function(t,i){},lpI4:function(t,i){}});
//# sourceMappingURL=1.2be92668c98926dc106d.js.map