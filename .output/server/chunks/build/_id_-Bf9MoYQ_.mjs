import { _ as __nuxt_component_0 } from './PageHeader-C6FKrn5T.mjs';
import { useSSRContext, computed, resolveComponent, mergeProps } from 'vue';
import { _ as _export_sfc, a as useRoute, u as useStore, b as useNuxtApp } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_1 } from './leaf-DRn9mv8Y.mjs';
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
  name: "Gallery",
  props: ["gallery"],
  setup() {
    useNuxtApp();
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "gallery_two" }, _attrs))} data-v-74b8dd3a><div class="container" data-v-74b8dd3a><h3 data-v-3cbd7405="" data-v-74b8dd3a>${ssrInterpolate($props.gallery.title)}</h3><div data-v-3cbd7405="" class="leaf" data-v-74b8dd3a><img data-v-3cbd7405=""${ssrRenderAttr("src", _imports_1)} alt="icon" data-v-74b8dd3a></div><p data-v-74b8dd3a>${ssrInterpolate($props.gallery.desc)}</p><div class="row masonary-layout" style="${ssrRenderStyle({ "position": "relative", "height": "1200px" })}" data-v-74b8dd3a><!--[-->`);
  ssrRenderList($props.gallery.images, (image, index) => {
    _push(`<div class="col-xl-4 col-lg-6 col-md-6 masonary-item" style="${ssrRenderStyle(`position: absolute; left: ${index == 0 ? "0" : index == 1 ? "400" : index == 2 ? "800" : index == 3 ? "0" : index == 4 ? "800" : index == 5 ? "0" : index == 6 ? "400" : "0"}px; top: ${index == 0 ? "0" : index == 1 ? "0" : index == 2 ? "0" : index == 3 ? "280" : index == 4 ? "280" : index == 5 ? "731" : index == 6 ? "731" : "1000"}px`)}" data-v-74b8dd3a><div class="gallery_two_single" data-v-74b8dd3a><div class="gallery_two_image" data-v-74b8dd3a><img${ssrRenderAttr("src", image.image_path)}${ssrRenderAttr("alt", image.image_path)} data-v-74b8dd3a><div class="gallery_two_hover_box" data-v-74b8dd3a><div class="gallery_two_icon" data-v-74b8dd3a><a class="img-popup"${ssrRenderAttr("href", image.image_path)} data-v-74b8dd3a><span class="icon-plus-symbol" data-v-74b8dd3a></span></a></div></div></div></div></div>`);
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Gallery/Gallery.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const GalleryDetail = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-74b8dd3a"]]);
const _sfc_main = {
  components: {
    GalleryDetail,
    PageHeader: __nuxt_component_0
  },
  head() {
    return {
      title: "NovNat | Gallery Detail"
    };
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    const pageData = computed(() => store.getters.getPageData);
    const gallery = computed(() => {
      const id = route.params.id;
      return pageData.value.galleries ? pageData.value.galleries.find((item) => item.id == id) : null;
    });
    return {
      gallery
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PageHeader = __nuxt_component_0;
  const _component_GalleryDetail = resolveComponent("GalleryDetail");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_PageHeader, { title: "Gallery Details" }, null, _parent));
  if ($setup.gallery) {
    _push(ssrRenderComponent(_component_GalleryDetail, { gallery: $setup.gallery }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/gallery/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _id_ as default };
//# sourceMappingURL=_id_-Bf9MoYQ_.mjs.map
