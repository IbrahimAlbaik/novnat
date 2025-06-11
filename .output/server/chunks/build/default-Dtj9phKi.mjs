import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc, u as useStore, b as useNuxtApp, c as __nuxt_component_0 } from './server.mjs';
import { computed, unref, useSSRContext, ref, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as __nuxt_component_0$1 } from './nuxt-link-COteDoP9.mjs';
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
import 'swiper/vue';
import 'nprogress';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/vue-fontawesome';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-brands-svg-icons';

const _imports_0 = "" + buildAssetsURL("site-footer-farm.BPQgKbpV.png");
const _sfc_main$1 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const scrollBtn = ref(false);
    const pageData = computed(() => store.getters.getPageData);
    const aboutNovNat = computed(() => pageData.value.about || {});
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><footer class="site-footer"><div class="site-footer_farm_image"><img${ssrRenderAttr("src", _imports_0)} alt="Farm Image"></div><div class="container"><div class="row no-gutters"><div class="col-xl-4 col-lg-4 col-md-6"><div class="footer-widget__column footer-widget__about wow fadeInUp" data-wow-delay="100ms"><div class="footer-widget__title"><h3>About</h3></div><div class="footer-widget_about_text"><p> We are committed to creating a world where water is accessible to all. </p></div></div></div><div class="col-xl-2 col-lg-2 col-md-6"><div class="footer-widget__column footer-widget__link wow fadeInUp" data-wow-delay="200ms"><div class="footer-widget__title"><h3>Explore</h3></div><ul class="footer-widget__links-list list-unstyled"><li>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: { path: "/", hash: "#projects" } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Technology`);
          } else {
            return [
              createTextVNode("Technology")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: { path: "/", hash: "#faqs" } }, {
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
      _push(ssrRenderComponent(_component_nuxt_link, { to: { path: "/", hash: "#team" } }, {
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
      _push(ssrRenderComponent(_component_nuxt_link, { to: { path: "/", hash: "#about" } }, {
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
      _push(`</li></ul></div></div><div class="col-xl-3 col-lg-3 col-md-6 offset-xl-3 offset-lg-3 offset-md-0"><div class="footer-widget__column footer-widget__contact wow fadeInUp" data-wow-delay="400ms"><div class="footer-widget__title"><h3>Contact</h3></div><div class="footer-widget_contact"><p>${(_a = aboutNovNat.value.address) != null ? _a : ""}</p><a${ssrRenderAttr("href", `mailto:${aboutNovNat.value.email}`)}>${ssrInterpolate(aboutNovNat.value.email)}</a><br>`);
      if (aboutNovNat.value.phone) {
        _push(`<a${ssrRenderAttr("href", `tel:${aboutNovNat.value.phone}`)}>${ssrInterpolate(aboutNovNat.value.phone)}</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="site-footer__social"><a${ssrRenderAttr("href", aboutNovNat.value.linkedin_url)} target="_blank"><i class="fab fa-linkedin"></i></a></div></div></div></div></div></div></footer><div class="site-footer_bottom"><div class="container"><div class="site-footer_bottom_copyright"><p> \xA9 All copyright 2023, <a href="#">Novnat</a></p></div></div></div><a href="#" class="scroll-to-target scroll-to-top" style="${ssrRenderStyle(`display: ${scrollBtn.value ? "block" : "none"}`)}"><i class="fa fa-angle-up"></i></a></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    useNuxtApp();
    const loading = computed(() => store.getters.isLoading);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-fb23fc74>`);
      if (loading.value) {
        _push(`<div class="global-loading" data-v-fb23fc74><div class="loading-state" data-v-fb23fc74><div class="loading-content" data-v-fb23fc74><div class="spinner" data-v-fb23fc74><div class="spinner-inner" data-v-fb23fc74></div></div></div></div></div>`);
      } else {
        _push(`<div data-v-fb23fc74><div class="page-wrapper" data-v-fb23fc74>`);
        _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
        _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
        _push(`</div></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fb23fc74"]]);

export { _default as default };
//# sourceMappingURL=default-Dtj9phKi.mjs.map
