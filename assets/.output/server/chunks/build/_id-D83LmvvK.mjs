import { _ as __nuxt_component_0 } from './PageHeader-QXT0KCaA.mjs';
import { _ as __nuxt_component_3 } from './Gallery-CF47ct4t.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-B8wQTdmY.mjs';
import { m as mapMutations, _ as _export_sfc } from './server.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { _ as __nuxt_component_2 } from './Footer-B8wh0rVr.mjs';
import './leaf-DRn9mv8Y.mjs';
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

const _imports_0 = "data:image/png;base64,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";
const _sfc_main$1 = {
  name: "Nav",
  data() {
    return {
      sticky: false,
      mobileToggle: false
    };
  },
  computed: {
    searchPopup() {
      return this.$store.state.searchPopupStatus;
    }
  },
  mounted() {
    (void 0).addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if ((void 0).scrollY > 70) {
        this.sticky = true;
      } else if ((void 0).scrollY < 70) {
        this.sticky = false;
      }
    },
    ...mapMutations({
      searchPopupStatusChange: "changeSearchPopupStatus"
    })
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "site-header__header-one-wrap" }, _attrs))}><div class="topbar-one"><div class="topbar_bg" style="${ssrRenderStyle({ "background-image": "url(~assets/images/shapes/header-bg.png)" })}"></div><div class="container"><div class="topbar-one__left"><a href="mailto:needhelp@tripo.com"><span class="icon-message"></span>needhelp@agrikol.com</a><a href="tel:666-999-0000"><span class="icon-phone-call"></span>666 888 0000</a></div><div class="topbar-one__middle"><a href="/" class="main-nav__logo"><img${ssrRenderAttr("src", _imports_0)} class="main-logo" alt="Awesome Image"></a></div><div class="topbar-one__right"><div class="topbar-one__social"><a href="#"><i class="fab fa-facebook-square"></i></a><a href="#"><i class="fab fa-twitter"></i></a><a href="#"><i class="fab fa-instagram"></i></a><a href="#"><i class="fab fa-dribbble"></i></a></div></div></div></div><header class="main-nav__header-one"><nav class="${ssrRenderClass(`header-navigation stricky clearfix ${$data.sticky ? "stricked-menu stricky-fixed" : ""}`)}"><div class="container clearfix"><div class="main-nav__left"><a href="#" class="main-nav__search search-popup__toggler"><i class="icon-magnifying-glass"></i></a><a href="#" class="side-menu__toggler"><i class="fa fa-bars"></i></a></div><div class="main-nav__main-navigation"><ul class="main-nav__navigation-box"><li class="dropdown current">`);
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
  _push(`<ul><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home 01`);
      } else {
        return [
          createTextVNode("Home 01")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/index2" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home 02`);
      } else {
        return [
          createTextVNode("Home 02")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/index3" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home 03`);
      } else {
        return [
          createTextVNode("Home 03")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/index4" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home 04`);
      } else {
        return [
          createTextVNode("Home 04")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/index5" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home 05`);
      } else {
        return [
          createTextVNode("Home 05")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="dropdown"><a href="#">Header Versions</a><ul><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/index" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Header 01`);
      } else {
        return [
          createTextVNode("Header 01")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/index2" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Header 02`);
      } else {
        return [
          createTextVNode("Header 02")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/index3" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Header 03`);
      } else {
        return [
          createTextVNode("Header 03")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/index4" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Header 04`);
      } else {
        return [
          createTextVNode("Header 04")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/index5" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Header 05`);
      } else {
        return [
          createTextVNode("Header 05")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li></ul></li><li class="dropdown">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/service" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Services`);
      } else {
        return [
          createTextVNode("Services")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/service" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Services`);
      } else {
        return [
          createTextVNode("Services")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/service-detail" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Services Detail`);
      } else {
        return [
          createTextVNode("Services Detail")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li><li class="dropdown">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/projects" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Our Technology`);
      } else {
        return [
          createTextVNode("Our Technology")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/projects" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Projects`);
      } else {
        return [
          createTextVNode("Projects")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/projects_detail" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Projects Detail`);
      } else {
        return [
          createTextVNode("Projects Detail")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li><li class="dropdown">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Shop`);
      } else {
        return [
          createTextVNode("Shop")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/product" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Products`);
      } else {
        return [
          createTextVNode("Products")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/product-detail" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Product Detail`);
      } else {
        return [
          createTextVNode("Product Detail")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/cart" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Cart`);
      } else {
        return [
          createTextVNode("Cart")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/checkout" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Checkout`);
      } else {
        return [
          createTextVNode("Checkout")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li><li class="dropdown">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Pages`);
      } else {
        return [
          createTextVNode("Pages")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/about" }, {
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
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/why_choose_us" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Why Choose Us`);
      } else {
        return [
          createTextVNode("Why Choose Us")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/farmers" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Farmers`);
      } else {
        return [
          createTextVNode("Farmers")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/gallery" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Gallery`);
      } else {
        return [
          createTextVNode("Gallery")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li><li class="dropdown">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`News`);
      } else {
        return [
          createTextVNode("News")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/news" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`News`);
      } else {
        return [
          createTextVNode("News")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/news_detail" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`News Details`);
      } else {
        return [
          createTextVNode("News Details")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li><li>`);
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
  _push(`</li></ul></div><div class="main-nav__right"><div class="icon_cart_box">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/cart" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="icon-shopping-cart"${_scopeId}></span>`);
      } else {
        return [
          createVNode("span", { class: "icon-shopping-cart" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></nav><nav class="mobile-nav__container" style="${ssrRenderStyle(`display: ${$data.mobileToggle ? "block" : "none"}`)}"><ul class="main-nav__navigation-box"><li class="dropdown current"><div class="menu-holder"> Home<button class="dropdown-btn"><i class="fa fa-angle-right"></i></button></div><ul><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home 01`);
      } else {
        return [
          createTextVNode("Home 01")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/index2" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home 02`);
      } else {
        return [
          createTextVNode("Home 02")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/index3" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home 03`);
      } else {
        return [
          createTextVNode("Home 03")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/index4" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home 04`);
      } else {
        return [
          createTextVNode("Home 04")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/index5" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home 05`);
      } else {
        return [
          createTextVNode("Home 05")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="dropdown"><div class="menu-holder"> Header Versions<button class="dropdown-btn"><i class="fa fa-angle-right"></i></button></div><ul><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Header 01`);
      } else {
        return [
          createTextVNode("Header 01")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/index2" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Header 02`);
      } else {
        return [
          createTextVNode("Header 02")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/index3" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Header 03`);
      } else {
        return [
          createTextVNode("Header 03")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/index4" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Header 04`);
      } else {
        return [
          createTextVNode("Header 04")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/index5" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Header 05`);
      } else {
        return [
          createTextVNode("Header 05")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li></ul></li><li class="dropdown"><div class="menu-holder"> Services<button class="dropdown-btn"><i class="fa fa-angle-right"></i></button></div><ul><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/service" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Services`);
      } else {
        return [
          createTextVNode("Services")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/service-detail" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Services Detail`);
      } else {
        return [
          createTextVNode("Services Detail")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li><li class="dropdown"><div class="menu-holder"> Our Technology<button class="dropdown-btn"><i class="fa fa-angle-right"></i></button></div><ul><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/projects" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Projects`);
      } else {
        return [
          createTextVNode("Projects")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/projects_detail" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Projects Detail`);
      } else {
        return [
          createTextVNode("Projects Detail")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li><li class="dropdown"><div class="menu-holder"> Shop<button class="dropdown-btn"><i class="fa fa-angle-right"></i></button></div><ul><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/product" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Products`);
      } else {
        return [
          createTextVNode("Products")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/product-detail" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Product Detail`);
      } else {
        return [
          createTextVNode("Product Detail")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/cart" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Cart`);
      } else {
        return [
          createTextVNode("Cart")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/checkout" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Checkout`);
      } else {
        return [
          createTextVNode("Checkout")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li><li class="dropdown"><div class="menu-holder"> Pages<button class="dropdown-btn"><i class="fa fa-angle-right"></i></button></div><ul><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/about" }, {
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
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/why_choose_us" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Why Choose Us`);
      } else {
        return [
          createTextVNode("Why Choose Us")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/farmers" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Farmers`);
      } else {
        return [
          createTextVNode("Farmers")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/gallery" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Gallery`);
      } else {
        return [
          createTextVNode("Gallery")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li><li class="dropdown"><div class="menu-holder"> News<button class="dropdown-btn"><i class="fa fa-angle-right"></i></button></div><ul><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/news" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`News`);
      } else {
        return [
          createTextVNode("News")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/news_detail" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`News Details`);
      } else {
        return [
          createTextVNode("News Details")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li><li>`);
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
  _push(`</li></ul></nav></header></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Nav.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Nav = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    Footer: __nuxt_component_2,
    PageHeader: __nuxt_component_0,
    Gallery: __nuxt_component_3,
    Nav
  },
  head() {
    return {
      title: "Novnat  | Gallery"
    };
  },
  computed: {
    gallery() {
      return this.$store.getters["getLandingPageData"].data.galleries.find(
        (gallery) => gallery.id == this.$route.params.id
      );
    }
  },
  async fetch({ store }) {
    await store.dispatch("fetchLandingPageData");
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PageHeader = __nuxt_component_0;
  const _component_Gallery = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_PageHeader, { title: "Gallery" }, null, _parent));
  _push(ssrRenderComponent(_component_Gallery, { gallery: $options.gallery }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/gallery/_id.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _id as default };
//# sourceMappingURL=_id-D83LmvvK.mjs.map
