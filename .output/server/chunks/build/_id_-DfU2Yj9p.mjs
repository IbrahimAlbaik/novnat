import { _ as __nuxt_component_0 } from './PageHeader-C6FKrn5T.mjs';
import { useSSRContext, computed, resolveComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_1 } from './leaf-DRn9mv8Y.mjs';
import { _ as _export_sfc, a as useRoute, u as useStore } from './server.mjs';
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
  name: "teamDetails",
  props: ["member"]
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "best_company" }, _attrs))}><div class="container">`);
  if ($props.member) {
    _push(`<div class="row"><div class="col-xl-12"><div class="block-title text-center"><p>the best team</p><h3>We offer best team of Engineering</h3><div class="leaf"><img${ssrRenderAttr("src", _imports_1)} alt=""></div></div></div><div class="col-xl-6"><div class="company_image"><img${ssrRenderAttr("src", $props.member.image)}${ssrRenderAttr("alt", $props.member.name)}></div></div><div class="col-xl-6"><div class="company_content"><div class="block-title text-left"><p>${ssrInterpolate($props.member.name)} / ${ssrInterpolate($props.member.position)}</p><div class="leaf"><img${ssrRenderAttr("src", _imports_1)} alt=""></div></div><p>${(_a = $props.member.bio) != null ? _a : ""}</p>`);
    if ($props.member.provide) {
      _push(`<p>${ssrInterpolate($props.member.provide)}</p>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div></div>`);
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
const TeamDetail = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    TeamDetail,
    PageHeader: __nuxt_component_0
  },
  head() {
    return {
      title: "NovNat | Team Member"
    };
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    const pageData = computed(() => store.getters.getPageData);
    const member = computed(() => {
      const id = route.params.id;
      return pageData.value.teams ? pageData.value.teams.find((item) => item.id == id) : null;
    });
    return {
      member
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PageHeader = __nuxt_component_0;
  const _component_TeamDetail = resolveComponent("TeamDetail");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_PageHeader, { title: "Team Member Details" }, null, _parent));
  _push(ssrRenderComponent(_component_TeamDetail, { member: $setup.member }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/team/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _id_ as default };
//# sourceMappingURL=_id_-DfU2Yj9p.mjs.map
