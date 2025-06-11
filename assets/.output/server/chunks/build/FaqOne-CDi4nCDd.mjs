import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_1 } from './leaf-DRn9mv8Y.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  name: "FaqOne",
  props: ["faqs"],
  computed: {
    aboutNovNat() {
      return this.$store.state.novnat;
    }
    // faqs() {
    //   return this.$store.state.faqs;
    // },
  },
  mounted() {
    new Accordion(".accordion-container-one");
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "faq_one",
    id: "faqs"
  }, _attrs))} data-v-7ad58af0><div class="container" data-v-7ad58af0><div class="row" data-v-7ad58af0><div class="col-xl-6 col-lg-6" data-v-7ad58af0><div class="faq_one_left" data-v-7ad58af0><div class="block-title text-left" data-v-7ad58af0><p data-v-7ad58af0>frequently asked questions</p><h3 data-v-7ad58af0>have any question?</h3><div class="leaf" data-v-7ad58af0><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-7ad58af0></div></div><div class="faq_one_image" style="${ssrRenderStyle({ "background-image": "url(/assets/images/resources/faq.webp)" })}" data-v-7ad58af0><div class="phone_number" data-v-7ad58af0><p data-v-7ad58af0> email us<a${ssrRenderAttr("href", `mailto:${$options.aboutNovNat.email}`)} data-v-7ad58af0>${ssrInterpolate($options.aboutNovNat.email)}</a></p></div></div></div></div><div class="col-xl-12" data-v-7ad58af0><div class="faq_one_right" data-v-7ad58af0><div class="accrodion-grp" data-grp-name="faq-one-accrodion" data-v-7ad58af0><div class="accordion-container-one" data-v-7ad58af0><!--[-->`);
  ssrRenderList($props.faqs, (faq) => {
    _push(`<div class="ac" data-v-7ad58af0><h2 class="ac-q" tabIndex="0" data-v-7ad58af0>${ssrInterpolate(faq.question)}</h2><div class="ac-a accordion__content" data-v-7ad58af0><p class="accordion__content-desc" data-v-7ad58af0>${ssrInterpolate(faq.answer)}</p></div></div>`);
  });
  _push(`<!--]--></div></div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FaqOne.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FaqOne = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-7ad58af0"]]);

export { FaqOne as F };
//# sourceMappingURL=FaqOne-CDi4nCDd.mjs.map
