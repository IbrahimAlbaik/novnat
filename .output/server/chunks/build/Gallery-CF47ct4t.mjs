import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_1 } from './leaf-DRn9mv8Y.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  name: "Gallery",
  mounted() {
    new GLightbox({
      selector: ".img-popup"
    });
  },
  props: ["gallery"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "gallery_two" }, _attrs))} data-v-3c86f9a9><div class="container" data-v-3c86f9a9><h3 data-v-3cbd7405="" data-v-3c86f9a9>${ssrInterpolate($props.gallery.title)}</h3><div data-v-3cbd7405="" class="leaf" data-v-3c86f9a9><img data-v-3cbd7405=""${ssrRenderAttr("src", _imports_1)} alt="icon" data-v-3c86f9a9></div><p data-v-3c86f9a9>${ssrInterpolate($props.gallery.desc)}</p><div class="row masonary-layout" style="${ssrRenderStyle({ "position": "relative", "height": "1200px" })}" data-v-3c86f9a9><!--[-->`);
  ssrRenderList($props.gallery.images, (image, index) => {
    _push(`<div class="col-xl-4 col-lg-6 col-md-6 masonary-item" style="${ssrRenderStyle(`position: absolute; left: ${index == 0 ? "0" : index == 1 ? "400" : index == 2 ? "800" : index == 3 ? "0" : index == 4 ? "800" : index == 5 ? "0" : index == 6 ? "400" : "0"}px; top: ${index == 0 ? "0" : index == 1 ? "0" : index == 2 ? "0" : index == 3 ? "280" : index == 4 ? "280" : index == 5 ? "731" : index == 6 ? "731" : "1000"}px`)}" data-v-3c86f9a9><div class="gallery_two_single" data-v-3c86f9a9><div class="gallery_two_image" data-v-3c86f9a9><img${ssrRenderAttr("src", image.image_path)}${ssrRenderAttr("alt", _ctx.mage.image_path)} data-v-3c86f9a9><div class="gallery_two_hover_box" data-v-3c86f9a9><div class="gallery_two_icon" data-v-3c86f9a9><a class="img-popup"${ssrRenderAttr("href", image.image_path)} data-v-3c86f9a9><span class="icon-plus-symbol" data-v-3c86f9a9></span></a></div></div></div></div></div>`);
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Gallery/Gallery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3c86f9a9"]]);

export { __nuxt_component_3 as _ };
//# sourceMappingURL=Gallery-CF47ct4t.mjs.map
