import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-B8wQTdmY.mjs';
import { useSSRContext, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _imports_0 = "" + buildAssetsURL("site-footer-farm.BPQgKbpV.png");
const _sfc_main = {
  name: "Footer",
  data() {
    return {
      scrollBtn: false
    };
  },
  computed: {
    aboutNovNat() {
      return this.$store.state.novnat;
    }
  },
  mounted() {
    (void 0).addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if ((void 0).scrollY > 70) {
        this.scrollBtn = true;
      } else if ((void 0).scrollY < 70) {
        this.scrollBtn = false;
      }
    },
    scrollTop() {
      (void 0).scrollTo(0, 0);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}><footer class="site-footer"><div class="site-footer_farm_image"><img${ssrRenderAttr("src", _imports_0)} alt="Farm Image"></div><div class="container"><div class="row no-gutters"><div class="col-xl-4 col-lg-4 col-md-6"><div class="footer-widget__column footer-widget__about wow fadeInUp" data-wow-delay="100ms"><div class="footer-widget__title"><h3>About</h3></div><div class="footer-widget_about_text"><p> We are committed to creating a world where water is accessible to all. </p></div></div></div><div class="col-xl-2 col-lg-2 col-md-6"><div class="footer-widget__column footer-widget__link wow fadeInUp" data-wow-delay="200ms"><div class="footer-widget__title"><h3>Explore</h3></div><ul class="footer-widget__links-list list-unstyled"><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: { path: "/", hash: "projects" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Technology`);
      } else {
        return [
          createTextVNode("Technology")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: { path: "/", hash: "faqs" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Faqs`);
      } else {
        return [
          createTextVNode("Faqs")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: { path: "/", hash: "team" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Team`);
      } else {
        return [
          createTextVNode("Team")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: { path: "/", hash: "about" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/contact" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact`);
      } else {
        return [
          createTextVNode("Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div><div class="col-xl-3 col-lg-3 col-md-6 offset-xl-3 offset-lg-3 offset-md-0"><div class="footer-widget__column footer-widget__contact wow fadeInUp" data-wow-delay="400ms"><div class="footer-widget__title"><h3>Contact</h3></div><div class="footer-widget_contact"><p>${(_a = $options.aboutNovNat.address) != null ? _a : ""}</p><a${ssrRenderAttr("href", `mailto:${$options.aboutNovNat.email}`)}>${ssrInterpolate($options.aboutNovNat.email)}</a><br><div class="site-footer__social"><!--[-->`);
  ssrRenderList($options.aboutNovNat.socialMediaLinks, (media) => {
    _push(`<a${ssrRenderAttr("href", media.link)} target="_blank"><i class="${ssrRenderClass(media.icon)}"></i></a>`);
  });
  _push(`<!--]--></div></div></div></div></div></div></footer><div class="site-footer_bottom"><div class="container"><div class="site-footer_bottom_copyright"><p> \xA9 All copyright 2023, <a href="#">${ssrInterpolate($options.aboutNovNat.title)}</a></p></div></div></div><a href="#" class="scroll-to-target scroll-to-top" style="${ssrRenderStyle(`display: ${$data.scrollBtn ? "block" : "none"}`)}"><i class="fa fa-angle-up"></i></a></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=Footer-B8wh0rVr.mjs.map
