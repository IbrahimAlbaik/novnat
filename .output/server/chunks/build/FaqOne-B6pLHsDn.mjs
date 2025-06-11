import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_1 } from './leaf-DRn9mv8Y.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  name: "FaqOne",
  props: ["faqs"],
  data() {
    return {
      openIndex: null,
      heights: {}
    };
  },
  computed: {
    aboutNovNat() {
      return this.$store.state.novnat;
    }
  },
  mounted() {
    this.updateHeights();
    setTimeout(this.updateHeights, 100);
  },
  methods: {
    updateHeights() {
      const contents = this.$refs.content;
      if (Array.isArray(contents)) {
        contents.forEach((content, index) => {
          if (content) {
            this.heights[index] = content.scrollHeight;
          }
        });
      }
    },
    toggle(index) {
      this.$nextTick(() => {
        this.updateHeights();
      });
      this.openIndex = this.openIndex === index ? null : index;
    },
    isOpen(index) {
      return this.openIndex === index;
    },
    getContentStyle(index) {
      const isOpen = this.isOpen(index);
      return {
        maxHeight: isOpen ? `${this.heights[index]}px` : "0",
        opacity: isOpen ? 1 : 0,
        visibility: isOpen ? "visible" : "hidden",
        transition: "all 0.3s ease-in-out"
      };
    }
  },
  watch: {
    // Watch for changes in faqs data
    faqs: {
      handler() {
        this.$nextTick(() => {
          this.updateHeights();
        });
      },
      deep: true
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "faq_one",
    id: "faqs"
  }, _attrs))} data-v-a2e32d99><div class="container" data-v-a2e32d99><div class="row" data-v-a2e32d99><div class="col-xl-6 col-lg-6" data-v-a2e32d99><div class="faq_one_left wow slideInLeft" data-v-a2e32d99><div class="block-title text-left" data-v-a2e32d99><p data-v-a2e32d99>frequently asked questions</p><h3 data-v-a2e32d99>have any question?</h3><div class="leaf" data-v-a2e32d99><img${ssrRenderAttr("src", _imports_1)} alt="leaf" data-v-a2e32d99></div></div><div class="faq_one_image" data-v-a2e32d99><div class="phone_number" data-v-a2e32d99><p data-v-a2e32d99> email us<a${ssrRenderAttr("href", `mailto:${$options.aboutNovNat.email}`)} data-v-a2e32d99>${ssrInterpolate($options.aboutNovNat.email)}</a></p></div></div></div></div><div class="col-xl-12" data-v-a2e32d99><div class="faq_one_right wow slideInLeft" data-v-a2e32d99><div class="accrodion-grp" data-grp-name="faq-one-accrodion" data-v-a2e32d99><div class="accordion-container-one" data-v-a2e32d99><!--[-->`);
  ssrRenderList($props.faqs, (faq, index) => {
    var _a;
    _push(`<div class="${ssrRenderClass([{ "is-active": $options.isOpen(index) }, "ac"])}" data-v-a2e32d99><h2 class="ac-q" tabIndex="0" data-v-a2e32d99>${ssrInterpolate(faq.question)}</h2><div class="ac-a" style="${ssrRenderStyle($options.getContentStyle(index))}" data-v-a2e32d99><div class="accordion__content-desc" data-v-a2e32d99>${(_a = faq.answer) != null ? _a : ""}</div></div></div>`);
  });
  _push(`<!--]--></div></div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FaqOne.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FaqOne = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a2e32d99"]]);

export { FaqOne as F };
//# sourceMappingURL=FaqOne-B6pLHsDn.mjs.map
