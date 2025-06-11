import { _ as __nuxt_component_0$1 } from './nuxt-link-COteDoP9.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  name: "PageHeader",
  props: {
    title: {
      type: String
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "page-header" }, _attrs))} data-v-a9409ec1><div class="container" data-v-a9409ec1><h2 data-v-a9409ec1>${ssrInterpolate($props.title)}</h2><ul class="thm-breadcrumb list-unstyled" data-v-a9409ec1><li data-v-a9409ec1>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
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
  _push(`</li><li data-v-a9409ec1><span data-v-a9409ec1>${ssrInterpolate($props.title)}</span></li></ul></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a9409ec1"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=PageHeader-C6FKrn5T.mjs.map
