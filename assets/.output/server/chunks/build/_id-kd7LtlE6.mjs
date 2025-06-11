import { _ as __nuxt_component_0 } from './PageHeader-QXT0KCaA.mjs';
import { useSSRContext, resolveComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
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
  name: "ProjectDetail",
  props: ["singleTechnology"],
  components: {
    // MaterialTable,
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a, _b, _c;
  if ($props.singleTechnology) {
    _push(`<section${ssrRenderAttrs(mergeProps({ class: "project_detail" }, _attrs))}><div class="container"><div class="row"><div class="col-xl-8 col-lg-8 col-md-7"><div class="project_detail_image"><div class="row"><!--[-->`);
    ssrRenderList($props.singleTechnology.images, (image) => {
      _push(`<div class="${ssrRenderClass(
        $props.singleTechnology.images.length > 1 ? "col-lg-6" : "col-lg-12"
      )}"><img${ssrRenderAttr("src", image.image_path)}${ssrRenderAttr("alt", image.id)}></div>`);
    });
    _push(`<!--]--></div></div><div class="project_detail_left_content news_detail_content"><div class="harvest_innovations_detail">${(_a = $props.singleTechnology.desc) != null ? _a : ""}</div></div></div><div class="col-xl-4 col-lg-4 col-md-5">`);
    if ($props.singleTechnology.desc_box) {
      _push(`<div class="project_information_box">${(_b = $props.singleTechnology.desc_box) != null ? _b : ""}</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div>`);
    if ($props.singleTechnology.extra_desc_box) {
      _push(`<div class="row"><div class="col-lg-8"><div class="project_information_box">${(_c = $props.singleTechnology.extra_desc_box) != null ? _c : ""}</div></div></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></section>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Projects/ProjectDetail.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ProjectDetail = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    ProjectDetail,
    PageHeader: __nuxt_component_0
  },
  head() {
    return {
      title: "NovNat  | Technology Detail"
    };
  },
  computed: {
    singleTechnology() {
      return this.$store.getters["getLandingPageData"].data.technologies.find(
        (technology) => technology.id == this.$route.params.id
      );
    }
  },
  async fetch({ store }) {
    await store.dispatch("fetchLandingPageData");
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PageHeader = __nuxt_component_0;
  const _component_ProjectDetail = resolveComponent("ProjectDetail");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_PageHeader, {
    title: $options.singleTechnology.title
  }, null, _parent));
  _push(ssrRenderComponent(_component_ProjectDetail, { singleTechnology: $options.singleTechnology }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/technology-details/_id.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _id as default };
//# sourceMappingURL=_id-kd7LtlE6.mjs.map
