(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{152:function(t,e,n){"use strict";var r={name:"PageHeader",props:{title:{type:String}}},c=n(14),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"page-header",staticStyle:{"background-image":"url(/assets/images/backgrounds/shutterstock_1936156318.jpg)"}},[n("div",{staticClass:"container"},[n("h2",[t._v(t._s(t.title))]),t._v(" "),n("ul",{staticClass:"thm-breadcrumb list-unstyled"},[n("li",[n("nuxt-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),n("li",[n("span",[t._v(t._s(t.title))])])])])])}),[],!1,null,"0785e538",null);e.a=component.exports},155:function(t,e,n){},156:function(t,e,n){"use strict";var r=n(6),c=n(157)(5),l=!0;"find"in[]&&Array(1).find((function(){l=!1})),r(r.P+r.F*l,"Array",{find:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),n(81)("find")},157:function(t,e,n){var r=n(23),c=n(80),l=n(24),o=n(15),v=n(158);t.exports=function(t,e){var n=1==t,_=2==t,d=3==t,f=4==t,h=6==t,m=5==t||h,C=e||v;return function(e,v,y){for(var k,w,x=l(e),S=c(x),$=r(v,y,3),A=o(S.length),D=0,E=n?C(e,A):_?C(e,0):void 0;A>D;D++)if((m||D in S)&&(w=$(k=S[D],D,x),t))if(n)E[D]=w;else if(w)switch(t){case 3:return!0;case 5:return k;case 6:return D;case 2:E.push(k)}else if(f)return!1;return h?-1:d||f?f:E}}},158:function(t,e,n){var r=n(159);t.exports=function(t,e){return new(r(t))(e)}},159:function(t,e,n){var r=n(10),c=n(108),l=n(3)("species");t.exports=function(t){var e;return c(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!c(e.prototype)||(e=void 0),r(e)&&null===(e=e[l])&&(e=void 0)),void 0===e?Array:e}},165:function(t,e,n){"use strict";var r=n(155);n.n(r).a},166:function(t,e,n){"use strict";var r={name:"FaqOne",computed:{aboutNovNat:function(){return this.$store.state.novnat},faqs:function(){return this.$store.state.faqs}},mounted:function(){new Accordion(".accordion-container-one")}},c=(n(165),n(14)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"faq_one",attrs:{id:"faqs"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xl-6 col-lg-6"},[n("div",{staticClass:"faq_one_left"},[t._m(0),t._v(" "),n("div",{staticClass:"faq_one_image",staticStyle:{"background-image":"url(/assets/images/resources/faq.webp)"}},[n("div",{staticClass:"phone_number"},[n("p",[t._v("\n                email us"),n("a",{attrs:{href:"mailto:"+t.aboutNovNat.email}},[t._v(t._s(t.aboutNovNat.email))])])])])])]),t._v(" "),n("div",{staticClass:"col-xl-12"},[n("div",{staticClass:"faq_one_right"},[n("div",{staticClass:"accrodion-grp",attrs:{"data-grp-name":"faq-one-accrodion"}},[n("div",{staticClass:"accordion-container-one"},t._l(t.faqs,(function(e){return n("div",{key:e.id,staticClass:"ac"},[n("h2",{staticClass:"ac-q",attrs:{tabIndex:"0"}},[t._v("\n                  "+t._s(e.title)+"\n                ")]),t._v(" "),n("div",{staticClass:"ac-a accordion__content"},[n("p",{staticClass:"accordion__content-desc"},[t._v("\n                    "+t._s(e.details)+"\n                  ")]),t._v(" "),t._l(e.features,(function(e){return n("ul",{key:e.id,staticClass:"list-unstyled"},[n("p",[n("i",{staticClass:"fa fa-angle-right"}),t._v("\n                      "+t._s(e.title)+"\n                    ")]),t._v(" "),t._l(e.featuresDetails,(function(e){return n("li",{key:e},[n("i",{staticClass:"fa fa-check"}),t._v("\n                      "+t._s(e)+"\n                    ")])}))],2)}))],2)])})),0)])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"block-title text-left"},[e("p",[this._v("frequently asked questions")]),this._v(" "),e("h3",[this._v("have any question?")]),this._v(" "),e("div",{staticClass:"leaf"},[e("img",{attrs:{src:"/assets/images/resources/leaf.png",alt:""}})])])}],!1,null,"203ced5a",null);e.a=component.exports},210:function(t,e,n){"use strict";n.r(e);var r=n(152),c=(n(156),{name:"ServiceDetail",computed:{services:function(){return this.$store.state.services},singleService:function(){var t=this;return this.$store.state.services.find((function(e){return e.id==t.$route.params.id}))}},methods:{isActive:function(t){return t.id==this.singleService.id?"active":null}},components:{FaqOne:n(166).a},created:function(){}}),l=n(14),o={components:{ServiceDetail:Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"service_detail"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xl-4 col-lg-4"},[n("div",{staticClass:"service_details_left"},[n("ul",{staticClass:"list-unstyled service_all_list"},[t._m(0),t._v(" "),t._l(t.services,(function(e){return n("li",{key:e.id},[t.singleService?n("nuxt-link",{class:e.id==t.singleService.id?"active":"",attrs:{to:"/service-detail/"+e.id}},[t._v(t._s(e.title))]):t._e()],1)}))],2),t._v(" "),t._m(1),t._v(" "),t._m(2)])]),t._v(" "),n("div",{staticClass:"col-xl-8 col-lg-8"},[n("div",{staticClass:"service_details_right"},[n("div",{staticClass:"agriculture_solutions"},[n("h3",[t._v(t._s(t.singleService.title))]),t._v(" "),t._l(t.singleService.details,(function(e){return n("div",{key:e.detail},[n("p",[n("i",{staticClass:"fa fa-angle-right fa-xs"}),t._v("\n                "+t._s(e.detail)+"\n              ")]),t._v(" "),n("ul",{staticClass:"list-unstyled"},t._l(e.options,(function(option){return n("li",{key:option},[n("i",{staticClass:"fa fa-check"}),t._v(t._s(option)+"\n                ")])})),0)])}))],2),t._v(" "),n("p",{staticClass:"service_details_last_text"},[t._v("\n            Lorem Ipsum has been the ndustry standard dummy text ever since\n            the 1500s, when an unknown printer took a galley of type and\n            scrambled it to make a type specimen book. It has survived not\n            only five centuries.\n          ")])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{attrs:{href:"#"}},[this._v("All Services")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"need_help_box"},[e("h2",[this._v("Need Help?")]),this._v(" "),e("p",[this._v("\n              Speak with a human to filling out a form? call corporate office\n              and we will connect you with a team member who can help.\n            ")]),this._v(" "),e("h3",[e("span",{staticClass:"icon-phone-call"}),this._v("666 888 0000")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"download_file_box"},[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"icon-pdf"}),this._v("Download PDF File")])])}],!1,null,"39620f2e",null).exports,PageHeader:r.a},head:function(){return{title:"Agrikol  | Service Detail"}}},v=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("PageHeader",{attrs:{title:"Service Detail"}}),this._v(" "),e("ServiceDetail")],1)}),[],!1,null,null,null);e.default=v.exports}}]);