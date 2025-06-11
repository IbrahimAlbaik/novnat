import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-B8wQTdmY.mjs';
import { m as mapMutations, _ as _export_sfc, u as useNuxtApp } from './server.mjs';
import { defineComponent, createElementBlock, ref, provide, useSSRContext, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { _ as __nuxt_component_3 } from './Gallery-CF47ct4t.mjs';
import { F as FaqOne } from './FaqOne-CDi4nCDd.mjs';
import { _ as __nuxt_component_1$1 } from './TeamOne-s3rxJa7J.mjs';
import { _ as _imports_1 } from './leaf-DRn9mv8Y.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'axios';
import 'vue-devtools-stub';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/vue-fontawesome';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-brands-svg-icons';

const _imports_0 = "" + buildAssetsURL("logo_novnat.DzBjLYyI.png");
const _sfc_main$9 = {
  name: "NavFour",
  data() {
    return {
      sticky: false,
      mobileToggle: false
    };
  },
  computed: {
    searchPopup() {
      return this.$store.state.searchPopupStatus;
    },
    aboutNovNat() {
      return this.$store.state.novnat;
    }
  },
  mounted() {
    (void 0).addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if ((void 0).scrollY > 70) {
        this.sticky = true;
      } else if ((void 0).scrollY < 70) {
        this.sticky = false;
      }
    },
    ...mapMutations({
      searchPopupStatusChange: "changeSearchPopupStatus"
    })
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "site_header__header_four_wrap" }, _attrs))}><div class="topbar-one topbar_four"><div class="container"><div class="topbar-one__left"><a${ssrRenderAttr("href", `mailto:${$options.aboutNovNat.email}`)}><span class="icon-message"></span>${ssrInterpolate($options.aboutNovNat.email)}</a></div><div class="topbar-one__middle"><a href="/" class="main-nav__logo"><img${ssrRenderAttr("src", _imports_0)} class="main-logo" alt="Awesome Image"></a></div><div class="topbar-one__right"><div class="topbar-one__social home-four"><!--[-->`);
  ssrRenderList($options.aboutNovNat.socialMediaLinks, (media) => {
    _push(`<a${ssrRenderAttr("href", media.link)} target="_blank"><i class="${ssrRenderClass(media.icon)}"></i></a>`);
  });
  _push(`<!--]--></div></div></div></div><header class="main-nav__header-one main-nav__header-four"><nav class="${ssrRenderClass(`header-navigation stricky ${$data.sticky ? "stricked-menu stricky-fixed" : ""}`)}"><div class="container clearfix"><div class="main-nav__left main_nav__left_four"><a href="#" class="side-menu__toggler"><i class="fa fa-bars"></i></a></div><div class="main-nav__main-navigation four"><ul class="main-nav__navigation-box"><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: { path: "/", hash: "home" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: { path: "/", hash: "projects" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Our Technology`);
      } else {
        return [
          createTextVNode("Our Technology")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: { path: "/", hash: "gallery" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Gallery`);
      } else {
        return [
          createTextVNode("Gallery")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: { path: "/", hash: "faqs" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`FAQs`);
      } else {
        return [
          createTextVNode("FAQs")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: { path: "/", hash: "team" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Team`);
      } else {
        return [
          createTextVNode("Team")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: { path: "/", hash: "about" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/contact" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact`);
      } else {
        return [
          createTextVNode("Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div></nav><nav class="mobile-nav__container" style="${ssrRenderStyle(`display: ${$data.mobileToggle ? "block" : "none"}`)}"><ul class="main-nav__navigation-box"><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: { path: "/", hash: "home" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: { path: "/", hash: "projects" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Our Technology`);
      } else {
        return [
          createTextVNode("Our Technology")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: { path: "/", hash: "faqs" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Faqs`);
      } else {
        return [
          createTextVNode("Faqs")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: { path: "/", hash: "team" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Team`);
      } else {
        return [
          createTextVNode("Team")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: { path: "/", hash: "about" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/contact" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact`);
      } else {
        return [
          createTextVNode("Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></nav></header></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavFour.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9]]);
defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_0 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    provide(clientOnlySymbol, true);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main$8 = {
  name: "SliderFour",
  data() {
    return {};
  },
  computed: {
    silderList() {
      return this.$store.getters["getLandingPageData"].data.sliders;
    }
  },
  methods: {
    checkMediaTypeFromUrl(url) {
      if (url) {
        const fileExtension = this.getFileExtension(url);
        if (this.isImageFile(fileExtension)) {
          return "image";
        } else if (this.isVideoFile(fileExtension)) {
          return "video";
        } else
          ;
      }
    },
    getFileExtension(url) {
      return url.split(".").pop().toLowerCase().split("?")[0];
    },
    isImageFile(extension) {
      const imageExtensions = [
        "jpg",
        "jpeg",
        "png",
        "gif",
        "bmp",
        "svg",
        "webp"
      ];
      return imageExtensions.includes(extension);
    },
    isVideoFile(extension) {
      const videoExtensions = ["mp4", "webm", "ogg", "avi", "mkv", "mov"];
      return videoExtensions.includes(extension);
    }
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_client_only = __nuxt_component_0;
  _push(ssrRenderComponent(_component_client_only, _attrs, {}, _parent));
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SliderFour.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8], ["__scopeId", "data-v-2bc3b69a"]]);
const _sfc_main$7 = {
  name: "DetailsOne",
  props: ["features"]
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "details_one" }, _attrs))}><div class="container"><div class="row"><!--[-->`);
  ssrRenderList($props.features, (feature, index2) => {
    _push(`<div class="col-xl-4 col-lg-4"><div class="details_one_single wow fadeInUp" data-wow-delay="300ms"><div class="details_one_icon"><span class="${ssrRenderClass(feature.icon)}"></span></div><div class="details_one_content"><h2>${ssrInterpolate(feature.title)}</h2></div><div class="details_one_count_box"><h3>0${ssrInterpolate(index2 + 1)}</h3></div></div></div>`);
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DetailsOne.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$6 = {
  name: "EcoFriendly"
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "eco_friendly",
    style: { "background-image": "url(/assets/images/resources/eco.jpg)" }
  }, _attrs))}><div class="container"><div class="row"><div class="col-xl-12"><div class="eco_friendly_content"><div class="eco_friendly_icon_box"><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="300.000000pt" height="281.000000pt" viewBox="0 0 300.000000 281.000000" preserveAspectRatio="xMidYMid meet"><metadata> Created by potrace 1.10, written by Peter Selinger 2001-2011 </metadata><g transform="translate(0.000000,281.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M1145 2793 c-78 -17 -153 -67 -193 -130 -39 -61 -66 -163 -58 -219 5
-38 2 -45 -34 -84 -82 -89 -112 -171 -65 -178 15 -2 25 6 37 30 21 44 76 118
87 118 5 0 12 -12 16 -27 9 -37 111 -133 175 -165 178 -88 404 -102 536 -33
16 8 35 15 42 15 25 0 93 41 86 52 -4 7 -3 8 5 4 18 -12 140 64 254 157 66 54
62 74 -20 103 -100 36 -213 96 -353 189 -149 99 -252 150 -329 165 -53 10
-148 12 -186 3z m188 -68 c77 -20 154 -60 299 -156 118 -78 274 -160 331 -174
15 -4 27 -10 27 -14 0 -3 -39 -34 -88 -68 -166 -118 -352 -193 -479 -193 -172
0 -377 99 -433 211 -11 21 -20 41 -20 43 0 13 83 46 142 57 54 10 76 9 143 -6
118 -25 130 -25 130 5 0 38 -81 63 -210 63 -89 1 -107 -2 -162 -27 -56 -26
-80 -46 -54 -46 7 0 -2 -41 -15 -68 -1 -1 -11 -5 -23 -7 -19 -3 -21 -1 -15 18
3 12 10 26 15 32 5 5 9 17 9 27 0 10 4 18 9 18 4 0 13 30 19 66 30 183 179
270 375 219z m695 -353 c-10 -12 -14 -11 -25 4 -17 23 -7 36 17 22 15 -10 16
-15 8 -26z m-888 -207 c0 -8 -9 -15 -20 -15 -11 0 -20 7 -20 15 0 8 9 15 20
15 11 0 20 -7 20 -15z m243 -59 c44 0 49 -12 7 -18 -46 -7 -90 2 -90 19 0 11
6 12 23 6 12 -4 39 -8 60 -7z m181 -5 c3 -5 -13 -11 -37 -14 -23 -2 -53 -8
-67 -12 -25 -8 -25 -8 -6 13 14 16 31 22 62 22 24 0 45 -4 48 -9z"></path><path d="M725 2050 c-22 -5 -57 -16 -77 -24 -34 -15 -37 -19 -42 -68 -4 -29
-36 -455 -72 -947 -54 -737 -63 -895 -52 -902 7 -5 468 -9 1024 -9 772 0 1013
3 1022 12 9 9 12 115 12 414 0 389 -1 403 -19 409 -24 7 -36 56 -21 84 18 34
25 24 21 -30 -2 -34 0 -49 7 -45 7 4 10 110 9 309 -2 299 -2 302 -23 305 -14
2 -84 -42 -210 -134 -221 -160 -236 -172 -229 -193 3 -10 -4 -22 -15 -29 -19
-11 -20 -10 -20 24 0 20 4 33 10 29 16 -10 21 35 18 170 -3 124 -4 130 -24
133 -15 2 -82 -41 -210 -134 -104 -75 -199 -146 -211 -157 -13 -11 -23 -16
-23 -11 -1 5 -2 74 -3 154 -2 138 -3 145 -23 148 -12 2 -109 -53 -255 -145
-292 -185 -287 -181 -271 -192 11 -6 10 -11 -3 -25 -22 -21 -22 -21 -27 13 -3
18 0 29 6 28 19 -3 17 90 -8 432 -18 239 -29 337 -38 343 -47 30 -189 52 -253
38z m160 -71 c52 -13 46 19 76 -394 44 -617 47 -649 59 -653 9 -3 9 -6 1 -12
-12 -7 -9 -53 34 -630 3 -41 8 -87 11 -103 l6 -27 -272 0 -271 0 5 32 c3 18
13 130 21 248 8 118 22 301 30 405 12 150 65 884 78 1079 2 35 6 41 37 52 44
16 128 17 185 3z m681 -471 c4 -6 0 -16 -9 -23 -15 -11 -17 -46 -17 -328 0
-330 1 -337 43 -315 15 8 17 27 17 172 l0 164 190 137 c105 75 193 141 196
146 21 34 25 -14 24 -293 -1 -167 -1 -308 -1 -314 1 -16 37 -24 50 -11 17 17
14 84 -5 91 -8 3 -12 11 -8 17 4 8 9 7 15 -2 6 -9 9 1 9 29 0 23 -7 54 -16 67
-9 14 -12 25 -6 25 6 0 13 -8 15 -17 3 -10 5 14 6 53 l1 71 188 137 c234 170
230 167 214 173 -10 4 -10 8 -1 19 15 18 25 18 33 -1 3 -8 -2 -21 -10 -29 -13
-14 -15 -100 -15 -666 l1 -650 -678 2 -677 3 -3 55 c-2 30 -18 257 -37 505
-18 247 -33 450 -32 451 1 0 74 45 162 99 243 150 326 206 319 216 -6 11 4 29
16 29 5 0 12 -5 16 -12z m465 -1 c-1 -4 -1 -15 -1 -24 0 -16 -1 -16 -16 -1 -9
9 -13 21 -9 28 7 12 27 10 26 -3z m-431 -269 c0 -5 6 -6 13 -2 6 4 5 1 -3 -7
-8 -8 -20 -21 -27 -29 -10 -13 -12 -9 -13 22 0 29 3 36 15 32 8 -4 15 -10 15
-16z m-1018 -240 c-2 -29 -6 -55 -9 -58 -7 -7 -23 23 -23 45 0 17 25 65 34 65
2 0 1 -24 -2 -52z m538 -853 c0 -9 -9 -15 -25 -15 -24 0 -32 10 -18 23 12 13
43 7 43 -8z"></path><path d="M1207 684 c-10 -10 -8 -236 1 -252 7 -9 41 -12 138 -10 l129 3 0 130
0 130 -131 3 c-71 1 -133 -1 -137 -4z m213 -129 l0 -75 -78 0 -77 0 -1 75 -1
75 79 0 78 0 0 -75z"></path><path d="M1676 674 c-9 -23 -7 -227 2 -242 7 -9 41 -12 138 -10 l129 3 0 130
0 130 -131 3 c-113 2 -132 0 -138 -14z m214 -119 l0 -75 -77 0 -78 0 0 75 0
75 78 0 77 0 0 -75z"></path><path d="M2126 674 c-9 -23 -7 -227 2 -242 7 -9 41 -12 138 -10 l129 3 0 130
0 130 -131 3 c-113 2 -132 0 -138 -14z m214 -119 l0 -75 -77 0 -78 0 0 75 0
75 78 0 77 0 0 -75z"></path></g></svg></div><div class="eco_friendly_title"><h2>Eco-Friendly Products Can Be<br>Made From Scratch</h2></div></div></div></div></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EcoFriendly.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const EcoFriendly = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$5 = {
  name: "ProjectPage",
  data() {
    return {};
  },
  computed: {
    technologies() {
      return this.$store.getters["getLandingPageData"].data.technologies;
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$2;
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "recent-project our_projects",
    id: "projects"
  }, _attrs))}><div data-v-3cbd7405="" class="block-title text-center"><p data-v-3cbd7405="">What our Technology</p><h3 data-v-3cbd7405="">Technologies We Offer</h3><div data-v-3cbd7405="" class="leaf"><img data-v-3cbd7405=""${ssrRenderAttr("src", _imports_1)} alt=""></div></div><div class="container"><div class="row"><!--[-->`);
  ssrRenderList($options.technologies, (technology) => {
    _push(`<div class="col-xl-6 col-lg-6"><div class="recent_project_single mrb-30"><div class="overlay"></div><div class="project_img_box"><img${ssrRenderAttr("src", technology.image)} alt="Recent Project Img"><div class="project_content"><h3>${ssrInterpolate(technology.title)}</h3></div><div class="hover_box">`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: `/technology-details/${technology.id}`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span class="icon-left-arrow"${_scopeId}></span>`);
        } else {
          return [
            createVNode("span", { class: "icon-left-arrow" })
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div></div></div></div>`);
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Projects/ProjectPage.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const ProjectPage = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = {
  name: "timeline",
  props: ["stories"]
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "about_two",
    id: "about"
  }, _attrs))} data-v-ea6a573b><div class="container" data-v-ea6a573b><div class="row" data-v-ea6a573b><div class="col-xl-12" data-v-ea6a573b><div class="block-title text-center" data-v-ea6a573b><p data-v-ea6a573b>The story so far</p><h3 data-v-ea6a573b> Developing novel solutions <br data-v-ea6a573b> for a sustainable future </h3><div class="leaf" data-v-ea6a573b><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-ea6a573b></div></div><div class="timeline" data-v-ea6a573b><!--[-->`);
  ssrRenderList($props.stories, (story, index2) => {
    _push(`<div class="${ssrRenderClass([index2 % 2 === 1 ? "left" : "right", "timeline_container"])}" data-v-ea6a573b><div class="content" data-v-ea6a573b><h2 data-v-ea6a573b>${ssrInterpolate(story.year)} <span data-v-ea6a573b>${ssrInterpolate(story.title)}</span></h2><p data-v-ea6a573b>${ssrInterpolate(story.description)}</p></div></div>`);
  });
  _push(`<!--]--></div></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/About/Timeline.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Timeline = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-ea6a573b"]]);
const _sfc_main$3 = {
  name: "BrandOne",
  props: ["goals"]
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_no_ssr = resolveComponent("no-ssr");
  const _component_carousel = resolveComponent("carousel");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "brand-one" }, _attrs))}><div class="container"><div class="block-title text-center"><p>Working towards UN\u2019s Sustainable Development Goals</p><div class="leaf"><img${ssrRenderAttr("src", _imports_1)} alt=""></div></div><div class="row"><div class="col-xl-12"><div class="brand-one-carousel">`);
  _push(ssrRenderComponent(_component_no_ssr, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_carousel, {
          autoplay: true,
          dots: false,
          nav: false,
          responsive: {
            0: { items: 1 },
            640: { items: 2 },
            992: { items: 3 },
            1024: { items: 3 }
          }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList($props.goals, (goal) => {
                _push3(`<div class="single_brand_item target"${_scopeId2}><a${ssrRenderAttr("href", goal.URL)} target="_blank"${_scopeId2}><img${ssrRenderAttr("src", goal.image)} alt="brand"${_scopeId2}></a></div>`);
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList($props.goals, (goal) => {
                  return openBlock(), createBlock("div", {
                    class: "single_brand_item target",
                    key: goal.id
                  }, [
                    createVNode("a", {
                      href: goal.URL,
                      target: "_blank"
                    }, [
                      createVNode("img", {
                        src: goal.image,
                        alt: "brand"
                      }, null, 8, ["src"])
                    ], 8, ["href"])
                  ]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_carousel, {
            autoplay: true,
            dots: false,
            nav: false,
            responsive: {
              0: { items: 1 },
              640: { items: 2 },
              992: { items: 3 },
              1024: { items: 3 }
            }
          }, {
            default: withCtx(() => [
              (openBlock(true), createBlock(Fragment, null, renderList($props.goals, (goal) => {
                return openBlock(), createBlock("div", {
                  class: "single_brand_item target",
                  key: goal.id
                }, [
                  createVNode("a", {
                    href: goal.URL,
                    target: "_blank"
                  }, [
                    createVNode("img", {
                      src: goal.image,
                      alt: "brand"
                    }, null, 8, ["src"])
                  ], 8, ["href"])
                ]);
              }), 128))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Brands/BrandOne.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const BrandOne = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  name: "BrandFour",
  props: ["partners"]
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_no_ssr = resolveComponent("no-ssr");
  const _component_carousel = resolveComponent("carousel");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "brand-one brand-four" }, _attrs))}><div class="container"><div class="row"><div class="col-xl-12"><div class="brand-one-carousel owl-carousel">`);
  _push(ssrRenderComponent(_component_no_ssr, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_carousel, {
          autoplay: true,
          dots: true,
          nav: false,
          responsive: {
            0: { items: 1 },
            640: { items: 2 },
            992: { items: 3 },
            1024: { items: 4 }
          }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList($props.partners, (partner) => {
                _push3(`<div class="single_brand_item"${_scopeId2}><a${ssrRenderAttr("href", partner.URL)} target="_balnk"${_scopeId2}><img${ssrRenderAttr("src", partner.image)} alt="brand"${_scopeId2}></a></div>`);
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList($props.partners, (partner) => {
                  return openBlock(), createBlock("div", {
                    class: "single_brand_item",
                    key: partner.id
                  }, [
                    createVNode("a", {
                      href: partner.URL,
                      target: "_balnk"
                    }, [
                      createVNode("img", {
                        src: partner.image,
                        alt: "brand"
                      }, null, 8, ["src"])
                    ], 8, ["href"])
                  ]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_carousel, {
            autoplay: true,
            dots: true,
            nav: false,
            responsive: {
              0: { items: 1 },
              640: { items: 2 },
              992: { items: 3 },
              1024: { items: 4 }
            }
          }, {
            default: withCtx(() => [
              (openBlock(true), createBlock(Fragment, null, renderList($props.partners, (partner) => {
                return openBlock(), createBlock("div", {
                  class: "single_brand_item",
                  key: partner.id
                }, [
                  createVNode("a", {
                    href: partner.URL,
                    target: "_balnk"
                  }, [
                    createVNode("img", {
                      src: partner.image,
                      alt: "brand"
                    }, null, 8, ["src"])
                  ], 8, ["href"])
                ]);
              }), 128))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Brands/BrandFour.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const BrandFour = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  name: "GalleryOne",
  mounted() {
    new GLightbox({
      selector: ".glightbox"
    });
  },
  props: ["galleries"]
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_no_ssr = resolveComponent("no-ssr");
  const _component_carousel = resolveComponent("carousel");
  const _component_nuxt_link = __nuxt_component_0$2;
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "gallery_one",
    id: "gallery"
  }, _attrs))} data-v-b612bdc4><div class="container-fullwidth" data-v-b612bdc4><div class="block-title text-center" data-v-b612bdc4><p data-v-b612bdc4>our gallery</p><h3 data-v-b612bdc4>highlights</h3><div class="leaf" data-v-b612bdc4><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-b612bdc4></div></div><div class="gallery_one_carousel owl-carousel" data-v-b612bdc4>`);
  _push(ssrRenderComponent(_component_no_ssr, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_carousel, {
          margin: 30,
          autoplay: true,
          dots: false,
          nav: false,
          responsive: {
            0: { items: 1 },
            640: { items: 2 },
            992: { items: 3 },
            1024: { items: 5 }
          }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList($props.galleries, (gallery) => {
                _push3(ssrRenderComponent(_component_nuxt_link, {
                  key: gallery.id,
                  to: `/gallery/${gallery.id}`
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<div class="gallery_one_single wow fadeInLeft" data-wow-delay="300ms" data-v-b612bdc4${_scopeId3}><span data-v-b612bdc4${_scopeId3}>${ssrInterpolate(gallery.title)}</span><div class="gallery_one_image" data-v-b612bdc4${_scopeId3}><img${ssrRenderAttr("src", gallery.image)}${ssrRenderAttr("alt", gallery.title)} data-v-b612bdc4${_scopeId3}></div></div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: "gallery_one_single wow fadeInLeft",
                          "data-wow-delay": "300ms"
                        }, [
                          createVNode("span", null, toDisplayString(gallery.title), 1),
                          createVNode("div", { class: "gallery_one_image" }, [
                            createVNode("img", {
                              src: gallery.image,
                              alt: gallery.title
                            }, null, 8, ["src", "alt"])
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList($props.galleries, (gallery) => {
                  return openBlock(), createBlock(_component_nuxt_link, {
                    key: gallery.id,
                    to: `/gallery/${gallery.id}`
                  }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        class: "gallery_one_single wow fadeInLeft",
                        "data-wow-delay": "300ms"
                      }, [
                        createVNode("span", null, toDisplayString(gallery.title), 1),
                        createVNode("div", { class: "gallery_one_image" }, [
                          createVNode("img", {
                            src: gallery.image,
                            alt: gallery.title
                          }, null, 8, ["src", "alt"])
                        ])
                      ])
                    ]),
                    _: 2
                  }, 1032, ["to"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_carousel, {
            margin: 30,
            autoplay: true,
            dots: false,
            nav: false,
            responsive: {
              0: { items: 1 },
              640: { items: 2 },
              992: { items: 3 },
              1024: { items: 5 }
            }
          }, {
            default: withCtx(() => [
              (openBlock(true), createBlock(Fragment, null, renderList($props.galleries, (gallery) => {
                return openBlock(), createBlock(_component_nuxt_link, {
                  key: gallery.id,
                  to: `/gallery/${gallery.id}`
                }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: "gallery_one_single wow fadeInLeft",
                      "data-wow-delay": "300ms"
                    }, [
                      createVNode("span", null, toDisplayString(gallery.title), 1),
                      createVNode("div", { class: "gallery_one_image" }, [
                        createVNode("img", {
                          src: gallery.image,
                          alt: gallery.title
                        }, null, 8, ["src", "alt"])
                      ])
                    ])
                  ]),
                  _: 2
                }, 1032, ["to"]);
              }), 128))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Gallery/GalleryOne.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Gallery = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-b612bdc4"]]);
const _sfc_main = {
  components: {
    NavFour: __nuxt_component_0$1,
    BrandOne,
    BrandFour,
    FaqOne,
    TeamOne: __nuxt_component_1$1,
    ProjectPage,
    EcoFriendly,
    DetailsOne: __nuxt_component_2,
    SliderFour: __nuxt_component_1,
    Timeline,
    Gallery
  },
  head() {
    return {
      title: "NovNat"
    };
  },
  computed: {
    landingPageData() {
      return this.$store.getters["getLandingPageData"];
    },
    error() {
      return this.$store.getters["getLandingPageError"];
    }
  },
  async created() {
    const { $axios } = useNuxtApp();
    await this.$store.dispatch("fetchLandingPageData", $axios);
    console.log("Landing page data:", this.landingPageData);
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NavFour = __nuxt_component_0$1;
  const _component_SliderFour = __nuxt_component_1;
  const _component_DetailsOne = __nuxt_component_2;
  const _component_ProjectPage = resolveComponent("ProjectPage");
  const _component_Gallery = __nuxt_component_3;
  const _component_FaqOne = FaqOne;
  const _component_TeamOne = __nuxt_component_1$1;
  const _component_Timeline = resolveComponent("Timeline");
  const _component_BrandOne = resolveComponent("BrandOne");
  const _component_BrandFour = resolveComponent("BrandFour");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  if ($options.error) {
    _push(`<div>${ssrInterpolate($options.error)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_NavFour, {
    about: $options.landingPageData.data.about
  }, null, _parent));
  _push(ssrRenderComponent(_component_SliderFour, {
    sliders: $options.landingPageData.data.sliders
  }, null, _parent));
  _push(ssrRenderComponent(_component_DetailsOne, {
    features: $options.landingPageData.data.features
  }, null, _parent));
  _push(ssrRenderComponent(_component_ProjectPage, {
    technologies: $options.landingPageData.data.technologies
  }, null, _parent));
  _push(ssrRenderComponent(_component_Gallery, {
    galleries: $options.landingPageData.data.galleries
  }, null, _parent));
  _push(ssrRenderComponent(_component_FaqOne, {
    faqs: $options.landingPageData.data.faqs
  }, null, _parent));
  _push(ssrRenderComponent(_component_TeamOne, {
    teams: $options.landingPageData.data.teams
  }, null, _parent));
  _push(ssrRenderComponent(_component_Timeline, {
    stories: $options.landingPageData.data.stories
  }, null, _parent));
  _push(ssrRenderComponent(_component_BrandOne, {
    goals: $options.landingPageData.data.goals
  }, null, _parent));
  _push(ssrRenderComponent(_component_BrandFour, {
    partners: $options.landingPageData.data.partners
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-DtCKYMwB.mjs.map
