(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{154:function(t,e,n){},155:function(t,e,n){"use strict";var r={name:"BrandOne"},o=n(14),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"brand-one"},[e("div",{staticClass:"container"},[this._m(0),this._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12"},[e("div",{staticClass:"brand-one-carousel"},[e("no-ssr",[e("carousel",{attrs:{autoplay:!0,dots:!1,nav:!1,responsive:{0:{items:1},640:{items:2},992:{items:3},1024:{items:3}}}},[e("div",{staticClass:"single_brand_item target"},[e("a",{attrs:{href:"https://sdgs.un.org/goals/goal6",target:"_blank"}},[e("img",{attrs:{src:"/assets/images/resources/target_1.jpg",alt:"brand"}})])]),this._v(" "),e("div",{staticClass:"single_brand_item target"},[e("a",{attrs:{href:"https://sdgs.un.org/goals/goal9",target:"_blank"}},[e("img",{attrs:{src:"/assets/images/resources/target_2.png",alt:"brand"}})])]),this._v(" "),e("div",{staticClass:"single_brand_item target"},[e("a",{attrs:{href:"https://sdgs.un.org/goals/goal13",target:"_blank"}},[e("img",{attrs:{src:"/assets/images/resources/target_3.jpg",alt:"brand"}})])])])],1)],1)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"block-title text-center"},[e("p",[this._v("Working towards UN’s Sustainable Development Goals")]),this._v(" "),e("div",{staticClass:"leaf"},[e("img",{attrs:{src:"/assets/images/resources/leaf.png",alt:""}})])])}],!1,null,"2e5a865e",null);e.a=component.exports},160:function(t,e,n){"use strict";var r={name:"TeamOne",computed:{team:function(){return this.$store.state.team},otherTeam:function(){return this.$store.state.otherTeam}}},o=n(14),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"team_one",attrs:{id:"team"}},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("div",{staticClass:"row"},t._l(t.team,(function(e){return n("div",{key:e.id,staticClass:"col-xl-4 col-lg-4 col-md-6"},[n("div",{staticClass:"team_one_single wow fadeInUp"},[n("nuxt-link",{attrs:{to:"/team/"+e.id}},[n("div",{staticClass:"team_one_image"},[n("img",{attrs:{src:"/assets/images/team/"+e.image,alt:"team.id"}})])]),t._v(" "),n("div",{staticClass:"team_one_deatils"},[n("p",[t._v(t._s(e.position))]),t._v(" "),n("h2",[n("a",{attrs:{href:"#"}},[t._v("\n                "+t._s(e.name)+"\n              ")])]),t._v(" "),n("div",{staticClass:"team_one_social"},t._l(e.socialMediaLinks,(function(link){return n("a",{key:link,attrs:{href:link,target:"_blank"}},[n("i",{staticClass:"fab fa-linkedin"})])})),0)])],1)])})),0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"row",staticStyle:{"justify-content":"center"}},[n("div",{staticClass:"col-xl-8"},[n("div",{staticClass:"row"},t._l(t.otherTeam,(function(e){return n("div",{key:e.id,staticClass:"col-xl-5 col-lg-5 col-md-6"},[n("div",{staticClass:"team_one_single wow fadeInUp animated",staticStyle:{visibility:"visible","animation-name":"fadeInUp"}},[n("nuxt-link",{attrs:{to:"/team/"+e.id}},[n("div",{staticClass:"team_one_image"},[n("img",{attrs:{src:"/assets/images/team/"+e.image,alt:""}})])]),t._v(" "),n("div",{staticClass:"team_one_deatils"},[n("p",[t._v(t._s(e.position))]),t._v(" "),n("h2",[n("a",{attrs:{href:"#"}},[t._v(t._s(e.name))])]),t._v(" "),n("div",{staticClass:"team_one_social"},t._l(e.socialMediaLinks,(function(link){return n("a",{key:link,attrs:{href:link,target:"_blank"}},[n("i",{staticClass:"fab fa-linkedin"})])})),0)])],1)])})),0)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"block-title text-center"},[e("p",[this._v("our team members")]),this._v(" "),e("h3",[this._v("meet the brilliants")]),this._v(" "),e("div",{staticClass:"leaf"},[e("img",{attrs:{src:"/assets/images/resources/leaf.png",alt:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"block-title text-center"},[e("p",[this._v("Advisory Team")]),this._v(" "),e("div",{staticClass:"leaf"},[e("img",{attrs:{src:"/assets/images/resources/leaf.png",alt:""}})])])}],!1,null,"2026197b",null);e.a=component.exports},161:function(t,e,n){"use strict";var r=n(154);n.n(r).a},163:function(t,e,n){"use strict";var r={name:"FaqOne",computed:{aboutNovNat:function(){return this.$store.state.novnat},faqs:function(){return this.$store.state.faqs}},mounted:function(){new Accordion(".accordion-container-one")}},o=(n(161),n(14)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"faq_one",attrs:{id:"faqs"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xl-6 col-lg-6"},[n("div",{staticClass:"faq_one_left"},[t._m(0),t._v(" "),n("div",{staticClass:"faq_one_image",staticStyle:{"background-image":"url(/assets/images/resources/faq.webp)"}},[n("div",{staticClass:"phone_number"},[n("p",[t._v("\n                email us"),n("a",{attrs:{href:"mailto:"+t.aboutNovNat.email}},[t._v(t._s(t.aboutNovNat.email))])])])])])]),t._v(" "),n("div",{staticClass:"col-xl-12"},[n("div",{staticClass:"faq_one_right"},[n("div",{staticClass:"accrodion-grp",attrs:{"data-grp-name":"faq-one-accrodion"}},[n("div",{staticClass:"accordion-container-one"},t._l(t.faqs,(function(e){return n("div",{key:e.id,staticClass:"ac"},[n("h2",{staticClass:"ac-q",attrs:{tabIndex:"0"}},[t._v("\n                  "+t._s(e.title)+"\n                ")]),t._v(" "),n("div",{staticClass:"ac-a accordion__content"},[n("p",{staticClass:"accordion__content-desc"},[t._v("\n                    "+t._s(e.details)+"\n                  ")]),t._v(" "),t._l(e.features,(function(e){return n("ul",{key:e.id,staticClass:"list-unstyled"},[n("p",[n("i",{staticClass:"fa fa-angle-right"}),t._v("\n                      "+t._s(e.title)+"\n                    ")]),t._v(" "),t._l(e.featuresDetails,(function(e){return n("li",{key:e},[n("i",{staticClass:"fa fa-check"}),t._v("\n                      "+t._s(e)+"\n                    ")])}))],2)}))],2)])})),0)])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"block-title text-left"},[e("p",[this._v("frequently asked questions")]),this._v(" "),e("h3",[this._v("have any question?")]),this._v(" "),e("div",{staticClass:"leaf"},[e("img",{attrs:{src:"/assets/images/resources/leaf.png",alt:""}})])])}],!1,null,"289cc901",null);e.a=component.exports},164:function(t,e,n){},165:function(t,e,n){},166:function(t,e,n){},175:function(t,e,n){"use strict";var r={name:"ProjectPage",data:function(){return{}},computed:{projects:function(){return this.$store.state.projects}}},o=n(14),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"recent-project our_projects",attrs:{id:"projects"}},[t._m(0),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},t._l(t.projects,(function(e){return n("div",{key:e.id,staticClass:"col-xl-6 col-lg-6"},[n("div",{staticClass:"recent_project_single mrb-30"},[n("div",{staticClass:"overlay"}),t._v(" "),n("div",{staticClass:"project_img_box"},[n("img",{attrs:{src:"/assets/images/project/"+e.images[0],alt:"Recent Project Img"}}),t._v(" "),n("div",{staticClass:"project_content"},[n("h3",[t._v(t._s(e.title))])]),t._v(" "),n("div",{staticClass:"hover_box"},[n("nuxt-link",{attrs:{to:"/technology-details/"+e.id}},[n("span",{staticClass:"icon-left-arrow"})])],1)])])])})),0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"block-title text-center",attrs:{"data-v-3cbd7405":""}},[e("p",{attrs:{"data-v-3cbd7405":""}},[this._v("What our Technology")]),this._v(" "),e("h3",{attrs:{"data-v-3cbd7405":""}},[this._v("Technologies We Offer")]),this._v(" "),e("div",{staticClass:"leaf",attrs:{"data-v-3cbd7405":""}},[e("img",{attrs:{"data-v-3cbd7405":"",src:"/assets/images/resources/leaf.png",alt:""}})])])}],!1,null,"815cabb0",null);e.a=component.exports},178:function(t,e,n){"use strict";var r=n(164);n.n(r).a},179:function(t,e,n){"use strict";var r=n(165);n.n(r).a},180:function(t,e,n){"use strict";var r=n(166);n.n(r).a},183:function(t,e,n){"use strict";n.r(e);n(78),n(21),n(22),n(9),n(61);var r=n(45),o=n(34);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={name:"NavFour",data:function(){return{sticky:!1,mobileToggle:!1}},computed:{searchPopup:function(){return this.$store.state.searchPopupStatus},aboutNovNat:function(){return this.$store.state.novnat}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({handleScroll:function(){window.scrollY>70?this.sticky=!0:window.scrollY<70&&(this.sticky=!1)}},Object(o.b)({searchPopupStatusChange:"changeSearchPopupStatus"}))},v=n(14),d=Object(v.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"site_header__header_four_wrap"},[n("div",{staticClass:"topbar-one topbar_four"},[n("div",{staticClass:"container"},[n("div",{staticClass:"topbar-one__left"},[n("a",{attrs:{href:"mailto:"+t.aboutNovNat.email}},[n("span",{staticClass:"icon-message"}),t._v(t._s(t.aboutNovNat.email))])]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"topbar-one__right"},[n("div",{staticClass:"topbar-one__social home-four"},t._l(t.aboutNovNat.socialMediaLinks,(function(t){return n("a",{key:t.id,attrs:{href:t.link,target:"_blank"}},[n("i",{class:t.icon})])})),0)])])]),t._v(" "),n("header",{staticClass:"main-nav__header-one main-nav__header-four"},[n("nav",{class:"header-navigation stricky "+(t.sticky?"stricked-menu stricky-fixed":"")},[n("div",{staticClass:"container clearfix"},[n("div",{staticClass:"main-nav__left main_nav__left_four"},[n("a",{staticClass:"side-menu__toggler",attrs:{href:"#"}},[n("i",{staticClass:"fa fa-bars",on:{click:function(e){t.mobileToggle=!t.mobileToggle}}})])]),t._v(" "),n("div",{staticClass:"main-nav__main-navigation four"},[n("ul",{staticClass:"main-nav__navigation-box"},[n("li",[n("nuxt-link",{attrs:{to:{path:"/",hash:"home"}}},[t._v("Home")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:{path:"/",hash:"projects"}}},[t._v("Our Technology")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:{path:"/",hash:"faqs"}}},[t._v("Faqs")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:{path:"/",hash:"team"}}},[t._v("Team")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:{path:"/",hash:"about"}}},[t._v("About")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])])])]),t._v(" "),n("nav",{staticClass:"mobile-nav__container",style:"display: "+(t.mobileToggle?"block":"none")},[n("ul",{staticClass:"main-nav__navigation-box"},[n("li",[n("nuxt-link",{attrs:{to:{path:"/",hash:"home"}}},[t._v("Home")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:{path:"/",hash:"projects"}}},[t._v("Our Technology")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:{path:"/",hash:"faqs"}}},[t._v("Faqs")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:{path:"/",hash:"team"}}},[t._v("Team")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:{path:"/",hash:"about"}}},[t._v("About")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"topbar-one__middle"},[e("a",{staticClass:"main-nav__logo",attrs:{href:"/"}},[e("img",{staticClass:"main-logo",attrs:{src:"/assets/images/resources/logo_novnat.png",alt:"Awesome Image"}})])])}],!1,null,"0a690cdf",null).exports,_={name:"SliderFour",data:function(){return{}},computed:{silderList:function(){return this.$store.state.silderList}}},m=Object(v.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"banner_four_section",attrs:{id:"home"}},[n("div",{staticClass:"banner-carousel-four owl-theme owl-carousel"},[n("no-ssr",[n("carousel",{attrs:{items:1,autoplay:!0,nav:!1,autoplaySpeed:"2000ms"}},t._l(t.silderList,(function(e){return n("div",{key:e.id,staticClass:"slide-item"},[n("div",{staticClass:"image-layer",style:"background-image: url(/assets/images/main-slider/"+e.image+")"}),t._v(" "),n("div",{staticClass:"auto-container"},[n("div",{staticClass:"content-box"},[n("div",{staticClass:"content text-right"},[n("div",{staticClass:"inner"},[n("h1",{domProps:{innerHTML:t._s(e.text)}}),t._v(" "),n("div",{staticClass:"link-box"},[n("nuxt-link",{staticClass:"thm-btn",attrs:{to:"/discover-more/"+e.id}},[t._v("Discover More")])],1)])])])])])})),0)],1)],1)])}),[],!1,null,"3c1c5d0c",null).exports,h={name:"EcoFriendly"},f=Object(v.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"eco_friendly",staticStyle:{"background-image":"url(/assets/images/resources/eco.jpg)"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xl-12"},[n("div",{staticClass:"eco_friendly_content"},[n("div",{staticClass:"eco_friendly_icon_box"},[n("svg",{attrs:{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"300.000000pt",height:"281.000000pt",viewBox:"0 0 300.000000 281.000000",preserveAspectRatio:"xMidYMid meet"}},[n("metadata",[t._v("\n                  Created by potrace 1.10, written by Peter Selinger 2001-2011\n                ")]),t._v(" "),n("g",{attrs:{transform:"translate(0.000000,281.000000) scale(0.100000,-0.100000)",fill:"#000000",stroke:"none"}},[n("path",{attrs:{d:"M1145 2793 c-78 -17 -153 -67 -193 -130 -39 -61 -66 -163 -58 -219 5\n-38 2 -45 -34 -84 -82 -89 -112 -171 -65 -178 15 -2 25 6 37 30 21 44 76 118\n87 118 5 0 12 -12 16 -27 9 -37 111 -133 175 -165 178 -88 404 -102 536 -33\n16 8 35 15 42 15 25 0 93 41 86 52 -4 7 -3 8 5 4 18 -12 140 64 254 157 66 54\n62 74 -20 103 -100 36 -213 96 -353 189 -149 99 -252 150 -329 165 -53 10\n-148 12 -186 3z m188 -68 c77 -20 154 -60 299 -156 118 -78 274 -160 331 -174\n15 -4 27 -10 27 -14 0 -3 -39 -34 -88 -68 -166 -118 -352 -193 -479 -193 -172\n0 -377 99 -433 211 -11 21 -20 41 -20 43 0 13 83 46 142 57 54 10 76 9 143 -6\n118 -25 130 -25 130 5 0 38 -81 63 -210 63 -89 1 -107 -2 -162 -27 -56 -26\n-80 -46 -54 -46 7 0 -2 -41 -15 -68 -1 -1 -11 -5 -23 -7 -19 -3 -21 -1 -15 18\n3 12 10 26 15 32 5 5 9 17 9 27 0 10 4 18 9 18 4 0 13 30 19 66 30 183 179\n270 375 219z m695 -353 c-10 -12 -14 -11 -25 4 -17 23 -7 36 17 22 15 -10 16\n-15 8 -26z m-888 -207 c0 -8 -9 -15 -20 -15 -11 0 -20 7 -20 15 0 8 9 15 20\n15 11 0 20 -7 20 -15z m243 -59 c44 0 49 -12 7 -18 -46 -7 -90 2 -90 19 0 11\n6 12 23 6 12 -4 39 -8 60 -7z m181 -5 c3 -5 -13 -11 -37 -14 -23 -2 -53 -8\n-67 -12 -25 -8 -25 -8 -6 13 14 16 31 22 62 22 24 0 45 -4 48 -9z"}}),t._v(" "),n("path",{attrs:{d:"M725 2050 c-22 -5 -57 -16 -77 -24 -34 -15 -37 -19 -42 -68 -4 -29\n-36 -455 -72 -947 -54 -737 -63 -895 -52 -902 7 -5 468 -9 1024 -9 772 0 1013\n3 1022 12 9 9 12 115 12 414 0 389 -1 403 -19 409 -24 7 -36 56 -21 84 18 34\n25 24 21 -30 -2 -34 0 -49 7 -45 7 4 10 110 9 309 -2 299 -2 302 -23 305 -14\n2 -84 -42 -210 -134 -221 -160 -236 -172 -229 -193 3 -10 -4 -22 -15 -29 -19\n-11 -20 -10 -20 24 0 20 4 33 10 29 16 -10 21 35 18 170 -3 124 -4 130 -24\n133 -15 2 -82 -41 -210 -134 -104 -75 -199 -146 -211 -157 -13 -11 -23 -16\n-23 -11 -1 5 -2 74 -3 154 -2 138 -3 145 -23 148 -12 2 -109 -53 -255 -145\n-292 -185 -287 -181 -271 -192 11 -6 10 -11 -3 -25 -22 -21 -22 -21 -27 13 -3\n18 0 29 6 28 19 -3 17 90 -8 432 -18 239 -29 337 -38 343 -47 30 -189 52 -253\n38z m160 -71 c52 -13 46 19 76 -394 44 -617 47 -649 59 -653 9 -3 9 -6 1 -12\n-12 -7 -9 -53 34 -630 3 -41 8 -87 11 -103 l6 -27 -272 0 -271 0 5 32 c3 18\n13 130 21 248 8 118 22 301 30 405 12 150 65 884 78 1079 2 35 6 41 37 52 44\n16 128 17 185 3z m681 -471 c4 -6 0 -16 -9 -23 -15 -11 -17 -46 -17 -328 0\n-330 1 -337 43 -315 15 8 17 27 17 172 l0 164 190 137 c105 75 193 141 196\n146 21 34 25 -14 24 -293 -1 -167 -1 -308 -1 -314 1 -16 37 -24 50 -11 17 17\n14 84 -5 91 -8 3 -12 11 -8 17 4 8 9 7 15 -2 6 -9 9 1 9 29 0 23 -7 54 -16 67\n-9 14 -12 25 -6 25 6 0 13 -8 15 -17 3 -10 5 14 6 53 l1 71 188 137 c234 170\n230 167 214 173 -10 4 -10 8 -1 19 15 18 25 18 33 -1 3 -8 -2 -21 -10 -29 -13\n-14 -15 -100 -15 -666 l1 -650 -678 2 -677 3 -3 55 c-2 30 -18 257 -37 505\n-18 247 -33 450 -32 451 1 0 74 45 162 99 243 150 326 206 319 216 -6 11 4 29\n16 29 5 0 12 -5 16 -12z m465 -1 c-1 -4 -1 -15 -1 -24 0 -16 -1 -16 -16 -1 -9\n9 -13 21 -9 28 7 12 27 10 26 -3z m-431 -269 c0 -5 6 -6 13 -2 6 4 5 1 -3 -7\n-8 -8 -20 -21 -27 -29 -10 -13 -12 -9 -13 22 0 29 3 36 15 32 8 -4 15 -10 15\n-16z m-1018 -240 c-2 -29 -6 -55 -9 -58 -7 -7 -23 23 -23 45 0 17 25 65 34 65\n2 0 1 -24 -2 -52z m538 -853 c0 -9 -9 -15 -25 -15 -24 0 -32 10 -18 23 12 13\n43 7 43 -8z"}}),t._v(" "),n("path",{attrs:{d:"M1207 684 c-10 -10 -8 -236 1 -252 7 -9 41 -12 138 -10 l129 3 0 130\n0 130 -131 3 c-71 1 -133 -1 -137 -4z m213 -129 l0 -75 -78 0 -77 0 -1 75 -1\n75 79 0 78 0 0 -75z"}}),t._v(" "),n("path",{attrs:{d:"M1676 674 c-9 -23 -7 -227 2 -242 7 -9 41 -12 138 -10 l129 3 0 130\n0 130 -131 3 c-113 2 -132 0 -138 -14z m214 -119 l0 -75 -77 0 -78 0 0 75 0\n75 78 0 77 0 0 -75z"}}),t._v(" "),n("path",{attrs:{d:"M2126 674 c-9 -23 -7 -227 2 -242 7 -9 41 -12 138 -10 l129 3 0 130\n0 130 -131 3 c-113 2 -132 0 -138 -14z m214 -119 l0 -75 -77 0 -78 0 0 75 0\n75 78 0 77 0 0 -75z"}})])],1)]),t._v(" "),t._m(0)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"eco_friendly_title"},[e("h2",[this._v("Eco-Friendly Products Can Be"),e("br"),this._v("Made From Scratch")])])}],!1,null,"1812b37b",null).exports,C={name:"DetailsOne"},w=Object(v.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"details_one"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xl-4 col-lg-4"},[n("div",{staticClass:"details_one_single wow fadeInUp",attrs:{"data-wow-delay":"300ms"}},[n("div",{staticClass:"details_one_icon"},[n("svg",{attrs:{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"60px",height:"60px",viewBox:"0 0 300.000000 266.000000",preserveAspectRatio:"xMidYMid meet"}},[n("metadata",[t._v("\n                  Created by potrace 1.10, written by Peter Selinger 2001-2011\n                ")]),t._v(" "),n("g",{attrs:{transform:"translate(0.000000,266.000000) scale(0.100000,-0.100000)",fill:"#000000",stroke:"none"}},[n("path",{attrs:{d:"M2186 2359 c-129 -31 -277 -150 -334 -270 -31 -66 -57 -193 -46 -223\n3 -9 -8 -49 -25 -90 -63 -151 -121 -437 -121 -596 0 -55 -3 -70 -15 -70 -35 0\n-127 -44 -169 -81 -40 -35 -48 -39 -67 -28 -31 16 -128 14 -170 -3 -19 -9 -52\n-30 -73 -48 l-37 -33 -122 -1 c-97 -2 -134 -6 -182 -23 -38 -14 -61 -18 -64\n-11 -2 6 -16 25 -31 42 l-28 31 -150 3 c-122 3 -156 0 -181 -12 -59 -31 -61\n-43 -61 -388 0 -293 1 -315 20 -345 28 -46 70 -55 233 -51 l139 3 29 33 c20\n23 29 43 29 68 l0 36 63 -6 c34 -3 163 -13 287 -21 124 -9 320 -22 436 -31\nl210 -15 350 201 c192 111 362 214 377 229 30 29 45 89 33 134 -9 36 -65 86\n-104 93 -29 6 -70 -2 -119 -22 -7 -3 -16 3 -19 13 -14 37 -56 84 -96 104 -48\n24 -133 27 -193 6 l-40 -14 -38 43 c-39 45 -125 94 -164 94 -23 0 -23 2 -17\n73 16 204 54 395 109 543 l26 71 52 -14 c64 -18 161 -11 242 17 149 51 276\n183 319 329 21 70 21 184 2 201 -42 34 -201 50 -290 29z m204 -68 c23 -7 25\n-11 24 -72 -1 -85 -36 -161 -109 -238 -101 -106 -240 -157 -366 -133 -34 6\n-64 14 -67 16 -11 12 20 150 44 198 50 99 147 181 259 220 51 18 167 22 215 9z\nm-642 -1253 c38 -9 60 -25 114 -79 l66 -69 44 19 c102 44 172 34 223 -33 15\n-20 26 -38 24 -40 -2 -2 -71 -30 -154 -61 -82 -32 -162 -64 -177 -72 -28 -13\n-28 -13 -28 19 0 45 -19 78 -59 105 -33 22 -41 23 -269 23 -197 0 -242 3 -283\n17 -27 10 -49 21 -49 24 0 13 103 59 129 59 15 0 46 -9 70 -20 46 -21 55 -19\n84 17 23 29 95 71 150 88 53 17 59 17 115 3z m-564 -154 c3 -9 6 -18 6 -20 0\n-8 -25 -4 -40 6 -13 9 -13 11 0 20 21 13 27 12 34 -6z m-510 0 c14 -5 16 -43\n16 -324 0 -281 -2 -319 -16 -324 -30 -12 -269 -7 -282 6 -17 17 -17 619 0 636\n13 13 252 18 282 6z m76 -55 c0 -10 -4 -19 -9 -19 -12 0 -23 29 -15 41 8 14\n24 0 24 -22z m440 -14 c74 -28 79 -29 321 -32 228 -3 248 -5 264 -23 23 -25\n22 -65 0 -90 -17 -19 -32 -20 -261 -20 -207 0 -245 -2 -258 -16 -19 -19 -20\n-26 -4 -42 9 -9 80 -12 258 -12 l246 0 309 120 c170 66 315 120 323 120 21 0\n62 -47 62 -73 0 -13 -10 -33 -22 -44 -13 -11 -147 -91 -298 -178 -151 -87\n-300 -173 -331 -191 l-57 -34 -438 30 c-242 16 -463 33 -491 36 l-53 5 0 214\n0 213 63 21 c93 30 95 30 197 27 76 -2 110 -8 170 -31z m1075 26 c-3 -5 3 -11\n12 -14 14 -3 11 -6 -10 -12 -33 -9 -45 -1 -27 20 13 16 35 21 25 6z m-407\n-183 c-35 -22 -64 2 -36 30 9 9 16 8 30 -5 14 -13 16 -18 6 -25z m-1112 -346\nc-15 -15 -16 -14 -16 9 0 33 11 44 23 23 6 -11 4 -21 -7 -32z"}}),t._v(" "),n("path",{attrs:{d:"M490 419 c-9 -15 -8 -24 1 -35 27 -33 79 1 58 39 -14 23 -46 21 -59\n-4z"}}),t._v(" "),n("path",{attrs:{d:"M1160 1941 c-22 -6 -25 -13 -28 -62 -4 -86 27 -157 105 -240 46 -48\n85 -79 131 -101 61 -30 75 -33 160 -33 109 0 115 5 108 83 -10 107 -104 246\n-210 306 -81 47 -194 67 -266 47z m205 -95 c97 -44 186 -156 202 -251 l6 -37\n-54 7 c-155 20 -289 140 -323 289 l-7 29 60 -6 c33 -3 85 -16 116 -31z"}}),t._v(" "),n("path",{attrs:{d:"M2053 1616 c-95 -31 -179 -100 -209 -172 -23 -54 -18 -63 44 -92 135\n-63 331 -4 412 125 43 68 40 97 -12 124 -54 28 -173 35 -235 15z m199 -74 c19\n-19 -77 -105 -143 -127 -79 -27 -199 -22 -199 8 0 23 96 103 145 120 57 19\n177 19 197 -1z"}})])],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1)])]),t._v(" "),n("div",{staticClass:"col-xl-4 col-lg-4"},[n("div",{staticClass:"details_one_single wow fadeInUp",attrs:{"data-wow-delay":"600ms"}},[n("div",{staticClass:"details_one_icon"},[n("svg",{attrs:{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"60px",height:"60px",viewBox:"0 0 300.000000 281.000000",preserveAspectRatio:"xMidYMid meet"}},[n("metadata",[t._v("\n                  Created by potrace 1.10, written by Peter Selinger 2001-2011\n                ")]),t._v(" "),n("g",{attrs:{transform:"translate(0.000000,281.000000) scale(0.100000,-0.100000)",fill:"#000000",stroke:"none"}},[n("path",{attrs:{d:"M1145 2793 c-78 -17 -153 -67 -193 -130 -39 -61 -66 -163 -58 -219 5\n                      -38 2 -45 -34 -84 -82 -89 -112 -171 -65 -178 15 -2 25 6 37 30 21 44 76 118\n                      87 118 5 0 12 -12 16 -27 9 -37 111 -133 175 -165 178 -88 404 -102 536 -33\n                      16 8 35 15 42 15 25 0 93 41 86 52 -4 7 -3 8 5 4 18 -12 140 64 254 157 66 54\n                      62 74 -20 103 -100 36 -213 96 -353 189 -149 99 -252 150 -329 165 -53 10\n                      -148 12 -186 3z m188 -68 c77 -20 154 -60 299 -156 118 -78 274 -160 331 -174\n                      15 -4 27 -10 27 -14 0 -3 -39 -34 -88 -68 -166 -118 -352 -193 -479 -193 -172\n                      0 -377 99 -433 211 -11 21 -20 41 -20 43 0 13 83 46 142 57 54 10 76 9 143 -6\n                      118 -25 130 -25 130 5 0 38 -81 63 -210 63 -89 1 -107 -2 -162 -27 -56 -26\n                      -80 -46 -54 -46 7 0 -2 -41 -15 -68 -1 -1 -11 -5 -23 -7 -19 -3 -21 -1 -15 18\n                      3 12 10 26 15 32 5 5 9 17 9 27 0 10 4 18 9 18 4 0 13 30 19 66 30 183 179\n                      270 375 219z m695 -353 c-10 -12 -14 -11 -25 4 -17 23 -7 36 17 22 15 -10 16\n                      -15 8 -26z m-888 -207 c0 -8 -9 -15 -20 -15 -11 0 -20 7 -20 15 0 8 9 15 20\n                      15 11 0 20 -7 20 -15z m243 -59 c44 0 49 -12 7 -18 -46 -7 -90 2 -90 19 0 11\n                      6 12 23 6 12 -4 39 -8 60 -7z m181 -5 c3 -5 -13 -11 -37 -14 -23 -2 -53 -8\n                      -67 -12 -25 -8 -25 -8 -6 13 14 16 31 22 62 22 24 0 45 -4 48 -9z"}}),t._v(" "),n("path",{attrs:{d:"M725 2050 c-22 -5 -57 -16 -77 -24 -34 -15 -37 -19 -42 -68 -4 -29\n                        -36 -455 -72 -947 -54 -737 -63 -895 -52 -902 7 -5 468 -9 1024 -9 772 0 1013\n                        3 1022 12 9 9 12 115 12 414 0 389 -1 403 -19 409 -24 7 -36 56 -21 84 18 34\n                        25 24 21 -30 -2 -34 0 -49 7 -45 7 4 10 110 9 309 -2 299 -2 302 -23 305 -14\n                        2 -84 -42 -210 -134 -221 -160 -236 -172 -229 -193 3 -10 -4 -22 -15 -29 -19\n                        -11 -20 -10 -20 24 0 20 4 33 10 29 16 -10 21 35 18 170 -3 124 -4 130 -24\n                        133 -15 2 -82 -41 -210 -134 -104 -75 -199 -146 -211 -157 -13 -11 -23 -16\n                        -23 -11 -1 5 -2 74 -3 154 -2 138 -3 145 -23 148 -12 2 -109 -53 -255 -145\n                        -292 -185 -287 -181 -271 -192 11 -6 10 -11 -3 -25 -22 -21 -22 -21 -27 13 -3\n                        18 0 29 6 28 19 -3 17 90 -8 432 -18 239 -29 337 -38 343 -47 30 -189 52 -253\n                        38z m160 -71 c52 -13 46 19 76 -394 44 -617 47 -649 59 -653 9 -3 9 -6 1 -12\n                        -12 -7 -9 -53 34 -630 3 -41 8 -87 11 -103 l6 -27 -272 0 -271 0 5 32 c3 18\n                        13 130 21 248 8 118 22 301 30 405 12 150 65 884 78 1079 2 35 6 41 37 52 44\n                        16 128 17 185 3z m681 -471 c4 -6 0 -16 -9 -23 -15 -11 -17 -46 -17 -328 0\n                        -330 1 -337 43 -315 15 8 17 27 17 172 l0 164 190 137 c105 75 193 141 196\n                        146 21 34 25 -14 24 -293 -1 -167 -1 -308 -1 -314 1 -16 37 -24 50 -11 17 17\n                        14 84 -5 91 -8 3 -12 11 -8 17 4 8 9 7 15 -2 6 -9 9 1 9 29 0 23 -7 54 -16 67\n                        -9 14 -12 25 -6 25 6 0 13 -8 15 -17 3 -10 5 14 6 53 l1 71 188 137 c234 170\n                        230 167 214 173 -10 4 -10 8 -1 19 15 18 25 18 33 -1 3 -8 -2 -21 -10 -29 -13\n                        -14 -15 -100 -15 -666 l1 -650 -678 2 -677 3 -3 55 c-2 30 -18 257 -37 505\n                        -18 247 -33 450 -32 451 1 0 74 45 162 99 243 150 326 206 319 216 -6 11 4 29\n                        16 29 5 0 12 -5 16 -12z m465 -1 c-1 -4 -1 -15 -1 -24 0 -16 -1 -16 -16 -1 -9\n                        9 -13 21 -9 28 7 12 27 10 26 -3z m-431 -269 c0 -5 6 -6 13 -2 6 4 5 1 -3 -7\n                        -8 -8 -20 -21 -27 -29 -10 -13 -12 -9 -13 22 0 29 3 36 15 32 8 -4 15 -10 15\n                        -16z m-1018 -240 c-2 -29 -6 -55 -9 -58 -7 -7 -23 23 -23 45 0 17 25 65 34 65\n                        2 0 1 -24 -2 -52z m538 -853 c0 -9 -9 -15 -25 -15 -24 0 -32 10 -18 23 12 13\n                        43 7 43 -8z"}}),t._v(" "),n("path",{attrs:{d:"M1207 684 c-10 -10 -8 -236 1 -252 7 -9 41 -12 138 -10 l129 3 0 130\n0 130 -131 3 c-71 1 -133 -1 -137 -4z m213 -129 l0 -75 -78 0 -77 0 -1 75 -1\n75 79 0 78 0 0 -75z"}}),t._v(" "),n("path",{attrs:{d:"M1676 674 c-9 -23 -7 -227 2 -242 7 -9 41 -12 138 -10 l129 3 0 130\n0 130 -131 3 c-113 2 -132 0 -138 -14z m214 -119 l0 -75 -77 0 -78 0 0 75 0\n75 78 0 77 0 0 -75z"}}),t._v(" "),n("path",{attrs:{d:"M2126 674 c-9 -23 -7 -227 2 -242 7 -9 41 -12 138 -10 l129 3 0 130\n0 130 -131 3 c-113 2 -132 0 -138 -14z m214 -119 l0 -75 -77 0 -78 0 0 75 0\n75 78 0 77 0 0 -75z"}})])],1)]),t._v(" "),t._m(2),t._v(" "),t._m(3)])]),t._v(" "),n("div",{staticClass:"col-xl-4 col-lg-4"},[n("div",{staticClass:"details_one_single wow fadeInUp",attrs:{"data-wow-delay":"900ms"}},[n("div",{staticClass:"details_one_icon"},[n("svg",{attrs:{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 122.88 107.19",height:"60px",width:"60px"}},[n("defs"),t._v(" "),n("title",[t._v("hand-money")]),t._v(" "),n("path",{staticClass:"cls-1",attrs:{d:"M25.11,93.69V54.91H42.56c7.43,1.31,14.79,5.31,22.19,10H78.3c6.14.37,9.35,6.59,3.39,10.67-4.75,3.49-11,3.29-17.46,2.72-4.43-.22-4.62,5.72,0,5.75,1.61.13,3.36-.25,4.88-.25,8,0,14.63-1.54,18.67-7.88l2-4.74,20.2-10c10.09-3.32,17.27,7.23,9.83,14.57A263.86,263.86,0,0,1,74.89,102.2c-11.13,6.77-22.26,6.54-33.36,0L25.11,93.69ZM50.61,0l65.12,19.66-9.79,34.18-4.58-.7,7-25,.1-.32a4.47,4.47,0,0,0-3.12-5.48l-2.2-.6,0-.07L92.78,18.93,49.13,5.15,50.61,0ZM39.84,6.9,105,26.55,95.17,60.73,30.05,41.08,39.84,6.9ZM62.53,28.66a8.09,8.09,0,1,1,.34,11.42,8.09,8.09,0,0,1-.34-11.42ZM49.34,15.24,92.43,28.6A5.26,5.26,0,0,0,96,35.09L92.18,48.61a5.25,5.25,0,0,0-6.49,3.61L42.59,38.86A5.26,5.26,0,0,0,39,32.37l3.86-13.52a5.25,5.25,0,0,0,6.5-3.61ZM0,51.22H19.86V97.59H0V51.22Z"}})])]),t._v(" "),t._m(4),t._v(" "),t._m(5)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"details_one_content"},[e("h2",[this._v("Sustainable "),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"details_one_count_box"},[e("h3",[this._v("01")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"details_one_content"},[e("h2",[this._v("Net Zero"),e("br"),this._v("Carbon")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"details_one_count_box"},[e("h3",[this._v("02")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"details_one_content"},[e("h2",[this._v("Value for"),e("br"),this._v("Money")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"details_one_count_box"},[e("h3",[this._v("03")])])}],!1,null,"386b9930",null).exports,y={name:"Uniqueness",data:function(){return{uniqueness:[{id:"unique-1",title:"create MOF chemistry",description:"We create our own MOFs through high throughput experimentation in lab. We only create MOFs that are; green synthesised, cost effective, scalable, stable and enviromentlly friendly",icon:"1.svg"},{id:"unique-2",title:"Tune and enhance MOFs properties",description:"Tuning the functionality, pore size distribution, porosity, and molecules adsorption selectivity.",icon:"2.svg"},{id:"unique-3",title:"MOF formulation",description:"Applying MOF powder onto heat exchangers to maximise the performance of these materials through MOF ink-solution forms like paints maintaining the porosity and increasing the adsorption kinetics.",icon:"3.svg"},{id:"unique-6",title:"System construction and testing",description:"We follow the system development from the early stage of validation until reaching to the actual system that proven in operational environment and ready for commercialization",icon:"6.svg"},{id:"unique-5",title:"P&ID and CAD drawing for construction",description:"detailed process and instumentaion diagram followed by a 3D CAD drawing to effectively design the system for assembly and disassembly",icon:"5.svg"},{id:"unique-4",title:"MOF-based system design and integration.",description:"Studying the system configuration, heat and mass transfer through the adsorbent material, and optimizing the system to obtain high productivity with low energy consumption and provide high quality product that can compete with other technologies.",icon:"4.svg"}]}},computed:{services:function(){return this.$store.state.services}}},x=(n(178),Object(v.a)(y,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"service_four uniqueness",attrs:{id:"uniqueness"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"service_four_top"}),this._v(" "),e("div",{staticClass:"block-title text-center"},[e("p",[this._v("What distinguishes us")]),this._v(" "),e("h3",[this._v("Our Complete technology solution")]),this._v(" "),e("div",{staticClass:"leaf"},[e("img",{attrs:{src:"/assets/images/resources/leaf.png",alt:"icon"}})])]),this._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"complete_solutions wow animated slideInLeft",attrs:{"data-wow-duration":"2s","data-wow-delay":"1s"}},[e("img",{attrs:{src:"/assets/images/uniqueness/picture1.png",alt:"icon_2"}})])])])])])}],!1,null,"47f3b5e6",null).exports),k=n(175),O=n(163),z={name:"timeline"},M=(n(179),Object(v.a)(z,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"about_two",attrs:{id:"about"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xl-12"},[n("div",{staticClass:"block-title text-center"},[n("p",[t._v("The story so far")]),t._v(" "),n("h3",[t._v("\n            Developing novel solutions "),n("br"),t._v("\n            for a sustainable future\n          ")]),t._v(" "),n("div",{staticClass:"leaf"},[n("img",{attrs:{src:"/assets/images/resources/leaf.png",alt:""}})])]),t._v(" "),n("div",{staticClass:"timeline"},[n("div",{staticClass:"timeline_container left"},[n("div",{staticClass:"content"},[n("h2",[t._v("\n                2018\n                "),n("span",[t._v("Idea")])]),t._v(" "),n("p",[t._v("\n                It all began with an idea. An idea to create novel nano porous\n                materials called metal organic frameworks (MOFs) and unleash\n                their power to enable the development of cost and energy\n                efficient solutions\n              ")])])]),t._v(" "),n("div",{staticClass:"timeline_container right"},[n("div",{staticClass:"content"},[n("h2",[t._v("2019 "),n("span",[t._v("Experimentation")])]),t._v(" "),n("p",[t._v("\n                Experimentation began to develop and engineer a novel MOF\n                precisely tuned for water sorption applications.\n              ")])])]),t._v(" "),n("div",{staticClass:"timeline_container left"},[n("div",{staticClass:"content"},[n("h2",[t._v("2021 "),n("span",[t._v("Formulation")])]),t._v(" "),n("p",[t._v("\n                Breakthrough…the novel MOF structure was successfully\n                synthesised after many trials. The initial results showed\n                revolutionary water sorption characteristics in terms of\n                capacity and kinetics.\n              ")])])]),t._v(" "),n("div",{staticClass:"timeline_container right"},[n("div",{staticClass:"content"},[n("h2",[t._v("2022 (Q1-Q3) "),n("span",[t._v("Incorporation")])]),t._v(" "),n("p",[t._v("\n                NovNat Tech is born based on the shared vision of its founders\n                to develop novel solutions for nature and a sustainable future\n                through commercialising the company-patented MOF.\n                Additionally, NovNat Tech was incubated as part of the elevate\n                programme at the UoB and also applied for an Innovate UK smart\n                grant (£350k).\n              ")])])]),t._v(" "),n("div",{staticClass:"timeline_container left"},[n("div",{staticClass:"content"},[n("h2",[t._v("2022 (Q4) "),n("span",[t._v("IP/MVP")])]),t._v(" "),n("p",[t._v("\n                Patent applied for to protect the novel MOF (UK patent\n                application number: 2218176.2) and an MVP has been designed\n                and developed to showcase the functionality and to allow\n                NovNat Tech to evaluate and characterise the key metrics of\n                the system.\n              ")])])]),t._v(" "),n("div",{staticClass:"timeline_container right"},[n("div",{staticClass:"content"},[n("h2",[t._v("2023 "),n("span",[t._v("MVP 2.0")])]),t._v(" "),n("p",[t._v("\n                The funding NovNat Tech seeks will go towards building a\n                large-scale prototype to demonstrate the applicability of our\n                technology in industrial processes.\n              ")])])]),t._v(" "),n("div",{staticClass:"timeline_container left"},[n("div",{staticClass:"content"},[n("h2",[t._v("2024 "),n("span",[t._v(" Pilot trials")])]),t._v(" "),n("p",[t._v("\n                Based on the outputs from MVP 2.0, NovNat Tech aims to run\n                pilot trials at client sites to demonstrate integration of the\n                technology on an industrial scale.\n              ")])])])])])])])])}],!1,null,"6051dd7f",null).exports),j=n(155),$={name:"BrandFour"},E=(n(180),Object(v.a)($,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"brand-one brand-four"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12"},[e("div",{staticClass:"brand-one-carousel owl-carousel"},[e("no-ssr",[e("carousel",{attrs:{autoplay:!0,dots:!1,nav:!1,responsive:{0:{items:1},640:{items:2},992:{items:3},1024:{items:5}}}},[e("div",{staticClass:"single_brand_item"},[e("a",{attrs:{href:"https://www.gbslepgrowthhub.co.uk/programmes/amtecaa"}},[e("img",{attrs:{src:"/assets/images/partners/amtecaa.png",alt:"brand"}})])]),this._v(" "),e("div",{staticClass:"single_brand_item"},[e("a",{attrs:{href:"https://www.birmingham.ac.uk/research/energy/climate-innovation-platform.aspx"}},[e("img",{attrs:{src:"/assets/images/partners/climate.png",alt:"brand"}})])]),this._v(" "),e("div",{staticClass:"single_brand_item"},[e("a",{attrs:{href:"https://www.birmingham.ac.uk/index.aspx"}},[e("img",{attrs:{src:"/assets/images/partners/university.jpg",alt:"brand"}})])]),this._v(" "),e("div",{staticClass:"single_brand_item"},[e("a",{attrs:{href:"https://intranet.birmingham.ac.uk/as/employability/b-enterprising/uobelevate/index.aspx"}},[e("img",{attrs:{src:"/assets/images/partners/UOB.png",alt:"brand"}})])]),this._v(" "),e("div",{staticClass:"single_brand_item"},[e("a",{attrs:{href:"https://ec.europa.eu/regional_policy/funding/erdf_en"}},[e("img",{attrs:{src:"/assets/images/partners/union.jpg",alt:"brand"}})])]),this._v(" "),e("div",{staticClass:"single_brand_item"},[e("a",{attrs:{href:"https://www.ukri.org/councils/innovate-uk/"}},[e("img",{attrs:{src:"/assets/images/partners/ukri-innovate-uk-square-logo.png",alt:"brand"}})])]),this._v(" "),e("div",{staticClass:"single_brand_item"},[e("a",{attrs:{href:"https://www.bupa.com/"}},[e("img",{attrs:{src:"/assets/images/partners/Bupa-Logo.jpg",alt:"brand"}})])])])],1)],1)])])])])}),[],!1,null,"e69f1d12",null).exports),F=n(160),P={components:{NavFour:d,BrandOne:j.a,BrandFour:E,FaqOne:O.a,TeamOne:F.a,Uniqueness:x,ProjectPage:k.a,EcoFriendly:f,DetailsOne:w,SliderFour:m,Timeline:M},head:function(){return{title:"NovNat  | Home"}}},N=Object(v.a)(P,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NavFour"),t._v(" "),n("SliderFour"),t._v(" "),n("DetailsOne"),t._v(" "),n("ProjectPage"),t._v(" "),n("Uniqueness"),t._v(" "),n("FaqOne"),t._v(" "),n("TeamOne"),t._v(" "),n("Timeline"),t._v(" "),n("BrandOne"),t._v(" "),n("BrandFour")],1)}),[],!1,null,null,null);e.default=N.exports}}]);