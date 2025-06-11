import { _ as __nuxt_component_0 } from './PageHeader-QXT0KCaA.mjs';
import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_1 } from './leaf-DRn9mv8Y.mjs';
import { _ as _export_sfc } from './server.mjs';
import './nuxt-link-B8wQTdmY.mjs';
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
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/vue-fontawesome';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-brands-svg-icons';

const _sfc_main$1 = {
  name: "ContactTwo",
  computed: {
    aboutNovNat() {
      return this.$store.state.novnat;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "contact-one" }, _attrs))} data-v-106aab3d><div class="container" data-v-106aab3d><div class="row" data-v-106aab3d><div class="col-xl-12" data-v-106aab3d><div class="have_questions" data-v-106aab3d><div class="block-title text-center" data-v-106aab3d><p data-v-106aab3d>get in touch with us</p><h3 data-v-106aab3d>Have a question?</h3><div class="leaf" data-v-106aab3d><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-106aab3d></div></div><div class="have_questions_text" data-v-106aab3d><p data-v-106aab3d> Please feel free to get in touch by clicking on the button below </p></div><div class="have_questions_btn" data-v-106aab3d><a href="mailto:abdulbari@novnat.co.uk" class="thm-btn" data-v-106aab3d>Send a Message</a></div><p data-v-106aab3d> f you are interested in collaborating or partnering with us,<br data-v-106aab3d> please email <span data-v-106aab3d> abdulbari@novnat.co.uk </span></p></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactTwo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-106aab3d"]]);
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
//# sourceMappingURL=contact-D-mk9M1u.mjs.map
