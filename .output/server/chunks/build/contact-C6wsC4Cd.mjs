import { _ as __nuxt_component_0 } from './PageHeader-C6FKrn5T.mjs';
import { useSSRContext, computed, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_1 } from './leaf-DRn9mv8Y.mjs';
import { _ as _export_sfc, u as useStore } from './server.mjs';
import './nuxt-link-COteDoP9.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
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

const _sfc_main$1 = {
  __name: "ContactTwo",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const aboutNovNat = computed(() => store.getters.getPageData.about || {});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "contact-one" }, _attrs))} data-v-022bb6c3><div class="container" data-v-022bb6c3><div class="row" data-v-022bb6c3><div class="col-xl-12" data-v-022bb6c3><div class="have_questions" data-v-022bb6c3><div class="block-title text-center" data-v-022bb6c3><p data-v-022bb6c3>get in touch with us</p><h3 data-v-022bb6c3>Have a question?</h3><div class="leaf" data-v-022bb6c3><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-022bb6c3></div></div><div class="have_questions_text" data-v-022bb6c3><p data-v-022bb6c3> Please feel free to get in touch by clicking on the button below </p></div><div class="have_questions_btn" data-v-022bb6c3><a${ssrRenderAttr("href", `mailto:${aboutNovNat.value.partnering_email}`)} class="thm-btn" data-v-022bb6c3>Send a Message</a></div><p data-v-022bb6c3> f you are interested in collaborating or partnering with us,<br data-v-022bb6c3> please email <span data-v-022bb6c3> {aboutNovNat.partnering_email} </span></p></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactTwo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-022bb6c3"]]);
const _sfc_main = {
  components: {
    // GMap,
    ContactTwo: __nuxt_component_1,
    // Location,
    PageHeader: __nuxt_component_0
  },
  head() {
    return {
      title: "Novnat  | Contact"
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PageHeader = __nuxt_component_0;
  const _component_ContactTwo = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_PageHeader, { title: "Contact" }, null, _parent));
  _push(ssrRenderComponent(_component_ContactTwo, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { contact as default };
//# sourceMappingURL=contact-C6wsC4Cd.mjs.map
