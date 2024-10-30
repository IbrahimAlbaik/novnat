import { _ as __nuxt_component_0 } from './PageHeader-QXT0KCaA.mjs';
import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
  name: "teamDetails",
  props: ["singlePerson"],
  computed: {}
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "best_company" }, _attrs))}><div class="container">`);
  if ($props.singlePerson) {
    _push(`<div class="row"><div class="col-xl-12"><div class="block-title text-center"><p>the best team</p><h3>We offer best team of Engineering</h3><div class="leaf"><img${ssrRenderAttr("src", _imports_1)} alt=""></div></div></div><div class="col-xl-6"><div class="company_image"><img${ssrRenderAttr("src", `/assets/images/team/${$props.singlePerson.image}`)} alt=""></div></div><div class="col-xl-6"><div class="company_content"><div class="block-title text-left"><p>${ssrInterpolate($props.singlePerson.name)}</p><div class="leaf"><img${ssrRenderAttr("src", _imports_1)} alt=""></div></div><p>${(_a = $props.singlePerson.about) != null ? _a : ""}</p></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Team/TeamDetails.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    PageHeader: __nuxt_component_0,
    TeamDetails: __nuxt_component_1
  },
  head() {
    return {
      title: "NovNat  | Team details"
    };
  },
  computed: {
    singlePerson() {
      if (this.$route.params.id.includes("advisory")) {
        return this.$store.state.otherTeam.find(
          (person) => person.id == this.$route.params.id
        );
      } else {
        return this.$store.state.team.find(
          (person) => person.id == this.$route.params.id
        );
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PageHeader = __nuxt_component_0;
  const _component_TeamDetails = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_PageHeader, {
    title: $options.singlePerson ? $options.singlePerson.name : null
  }, null, _parent));
  _push(ssrRenderComponent(_component_TeamDetails, { singlePerson: $options.singlePerson }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/team/_id.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _id as default };
//# sourceMappingURL=_id-CY8Z03Wp.mjs.map
