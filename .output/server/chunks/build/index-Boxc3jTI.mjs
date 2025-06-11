import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { defineComponent, createElementBlock, ref, provide, useSSRContext, computed, unref, watch, mergeProps, withCtx, createTextVNode, resolveComponent, createVNode, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { _ as __nuxt_component_0$1 } from './nuxt-link-COteDoP9.mjs';
import { m as mapMutations, _ as _export_sfc, u as useStore, b as useNuxtApp } from './server.mjs';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { _ as _imports_1 } from './leaf-DRn9mv8Y.mjs';
import { F as FaqOne } from './FaqOne-B6pLHsDn.mjs';
import { _ as __nuxt_component_1 } from './TeamOne-DdSvA1IF.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
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

const _imports_0 = "" + buildAssetsURL("logo_novnat.DzBjLYyI.png");
const _sfc_main$8 = {
  name: "NavFour",
  data() {
    return {
      sticky: false,
      mobileToggle: false
    };
  },
  computed: {
    searchPopup() {
      return this.$store.state.searchPopupStatus;
    },
    aboutNovNat() {
      return this.$store.getters.getPageData.about;
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
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "site_header__header_four_wrap" }, _attrs))}><div class="topbar-one topbar_four"><div class="container"><div class="topbar-one__left"><a${ssrRenderAttr("href", `mailto:${$options.aboutNovNat.email}`)}><span class="icon-message"></span>${ssrInterpolate($options.aboutNovNat.email)}</a></div><div class="topbar-one__middle"><a href="/" class="main-nav__logo"><img${ssrRenderAttr("src", _imports_0)} class="main-logo" alt="Awesome Image"></a></div><div class="topbar-one__right"><div class="topbar-one__social home-four"><a${ssrRenderAttr("href", $options.aboutNovNat.linkedin_url)} target="_blank"><i class="fab fa-linkedin"></i></a></div></div></div></div><header class="main-nav__header-one main-nav__header-four"><nav class="${ssrRenderClass(`header-navigation stricky ${$data.sticky ? "stricked-menu stricky-fixed" : ""}`)}"><div class="container clearfix"><div class="main-nav__left main_nav__left_four"><a href="#" class="side-menu__toggler"><i class="fa fa-bars"></i></a></div><div class="main-nav__main-navigation four"><ul class="main-nav__navigation-box"><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: { path: "/", hash: "#home" } }, {
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
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: { path: "/", hash: "#projects" } }, {
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
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: { path: "/", hash: "#gallery" } }, {
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
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: { path: "/", hash: "#faqs" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`FAQs`);
      } else {
        return [
          createTextVNode("FAQs")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: { path: "/", hash: "#team" } }, {
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
  _push(ssrRenderComponent(_component_nuxt_link, { to: { path: "/", hash: "#about" } }, {
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
  _push(`</li></ul></div></div></nav><nav class="mobile-nav__container" style="${ssrRenderStyle(`display: ${$data.mobileToggle ? "block" : "none"}`)}"><ul class="main-nav__navigation-box"><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: { path: "/", hash: "#home" } }, {
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
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: { path: "/", hash: "#projects" } }, {
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
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: { path: "/", hash: "#faqs" } }, {
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
  _push(ssrRenderComponent(_component_nuxt_link, { to: { path: "/", hash: "#team" } }, {
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
  _push(ssrRenderComponent(_component_nuxt_link, { to: { path: "/", hash: "#about" } }, {
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
  _push(`</li></ul></nav></header></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavFour.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const NavFour = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$6]]);
defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_0 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    provide(clientOnlySymbol, true);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main$7 = {
  name: "SliderFour",
  props: ["sliders"],
  setup(props) {
    function mediaType(url) {
      return url ? checkMediaTypeFromUrl(url) : null;
    }
    function checkMediaTypeFromUrl(url) {
      if (url) {
        const fileExtension = getFileExtension(url);
        if (isImageFile(fileExtension)) {
          return "image";
        } else if (isVideoFile(fileExtension)) {
          return "video";
        }
      }
      return null;
    }
    function getFileExtension(url) {
      return url.split(".").pop().toLowerCase().split("?")[0];
    }
    function isImageFile(extension) {
      const imageExtensions = [
        "jpg",
        "jpeg",
        "png",
        "gif",
        "bmp",
        "svg",
        "webp"
      ];
      return imageExtensions.includes(extension);
    }
    function isVideoFile(extension) {
      const videoExtensions = ["mp4", "webm", "ogg", "avi", "mkv", "mov"];
      return videoExtensions.includes(extension);
    }
    const swiperRef = ref(null);
    return {
      swiperRef,
      mediaType,
      checkMediaTypeFromUrl,
      Autoplay,
      Pagination,
      Navigation
    };
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_client_only = __nuxt_component_0;
  _push(ssrRenderComponent(_component_client_only, _attrs, {}, _parent));
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SliderFour.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const SliderFour = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-9ae6e8e8"]]);
const _sfc_main$6 = {
  name: "DetailsOne",
  props: ["features"]
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "details_one" }, _attrs))}><div class="container"><div class="row"><!--[-->`);
  ssrRenderList($props.features, (feature, index2) => {
    _push(`<div class="col-xl-4 col-lg-4"><div class="details_one_single wow fadeInUp" data-wow-delay="300ms"><div class="details_one_icon">`);
    _push(ssrRenderComponent(_component_font_awesome_icon, {
      icon: feature.icon,
      size: "lg"
    }, null, _parent));
    _push(`</div><div class="details_one_content"><h2>${ssrInterpolate(feature.title)}</h2></div><div class="details_one_count_box"><h3>0${ssrInterpolate(index2 + 1)}</h3></div></div></div>`);
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DetailsOne.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const DetailsOne = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$5 = {
  name: "ProjectPage",
  props: ["technologies"]
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "recent-project our_projects",
    id: "projects"
  }, _attrs))}><div data-v-3cbd7405="" class="block-title text-center"><p data-v-3cbd7405="">What our Technology</p><h3 data-v-3cbd7405="">Technologies We Offer</h3><div data-v-3cbd7405="" class="leaf"><img data-v-3cbd7405=""${ssrRenderAttr("src", _imports_1)} alt=""></div></div><div class="container"><div class="row"><!--[-->`);
  ssrRenderList($props.technologies, (technology) => {
    _push(`<div class="col-xl-6 col-lg-6"><div class="recent_project_single mrb-30 wow fadeInUp"><div class="overlay"></div><div class="project_img_box"><img${ssrRenderAttr("src", technology.image)} alt="Recent Project Img"><div class="project_content"><h3>${ssrInterpolate(technology.title)}</h3></div><div class="hover_box">`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: `/technology-details/${technology.id}`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span class="icon-left-arrow"${_scopeId}></span>`);
        } else {
          return [
            createVNode("span", { class: "icon-left-arrow" })
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div></div></div></div>`);
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Projects/ProjectPage.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const ProjectPage = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$4 = {
  name: "timeline",
  props: ["stories"]
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "about_two",
    id: "about"
  }, _attrs))} data-v-cf37ea6d><div class="container" data-v-cf37ea6d><div class="row" data-v-cf37ea6d><div class="col-xl-12" data-v-cf37ea6d><div class="block-title text-center" data-v-cf37ea6d><p data-v-cf37ea6d>The story so far</p><h3 data-v-cf37ea6d> Developing novel solutions <br data-v-cf37ea6d> for a sustainable future </h3><div class="leaf" data-v-cf37ea6d><img${ssrRenderAttr("src", _imports_1)} alt="leaf" data-v-cf37ea6d></div></div><div class="timeline" data-v-cf37ea6d><!--[-->`);
  ssrRenderList($props.stories, (story, index2) => {
    _push(`<div class="${ssrRenderClass([index2 % 2 === 1 ? "right slideInRight" : "left slideInLeft", "timeline_container wow"])}" data-v-cf37ea6d><div class="content" data-v-cf37ea6d><h2 data-v-cf37ea6d>${ssrInterpolate(story.year)} <span data-v-cf37ea6d>${ssrInterpolate(story.title)}</span></h2><p data-v-cf37ea6d>${ssrInterpolate(story.description)}</p></div></div>`);
  });
  _push(`<!--]--></div></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/About/Timeline.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Timeline = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-cf37ea6d"]]);
const _sfc_main$3 = {
  name: "BrandOne",
  props: ["goals"],
  setup(props) {
    ref(false);
    const slidesPerView = ref(3);
    const spaceBetween = ref(10);
    const loop = ref(false);
    const breakpoints = {
      0: { slidesPerView: 1, spaceBetween: 5 },
      640: { slidesPerView: 2, spaceBetween: 5 },
      992: { slidesPerView: 3, spaceBetween: 10 },
      1024: { slidesPerView: 3, spaceBetween: 10 }
    };
    return {
      Autoplay,
      Pagination,
      Navigation,
      slidesPerView,
      spaceBetween,
      loop,
      breakpoints
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_no_ssr = resolveComponent("no-ssr");
  const _component_Swiper = resolveComponent("Swiper");
  const _component_SwiperSlide = resolveComponent("SwiperSlide");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "brand-one" }, _attrs))}><div class="container"><div class="block-title text-center"><p>Working towards UN\u2019s Sustainable Development Goals</p><div class="leaf"><img${ssrRenderAttr("src", _imports_1)} alt=""></div></div><div class="row"><div class="col-xl-12"><div class="brand-one-carousel">`);
  _push(ssrRenderComponent(_component_no_ssr, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Swiper, {
          "slides-per-view": $setup.slidesPerView,
          "space-between": $setup.spaceBetween,
          autoplay: { delay: 1e3, disableOnInteraction: false },
          modules: [$setup.Autoplay, $setup.Pagination, $setup.Navigation],
          loop: $setup.loop,
          breakpoints: $setup.breakpoints
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList($props.goals, (goal) => {
                _push3(ssrRenderComponent(_component_SwiperSlide, {
                  key: goal.id
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<div class="single_brand_item target"${_scopeId3}><a${ssrRenderAttr("href", goal.URL)} target="_blank"${_scopeId3}><img${ssrRenderAttr("src", goal.image)} alt="brand"${_scopeId3}></a></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "single_brand_item target" }, [
                          createVNode("a", {
                            href: goal.URL,
                            target: "_blank"
                          }, [
                            createVNode("img", {
                              src: goal.image,
                              alt: "brand"
                            }, null, 8, ["src"])
                          ], 8, ["href"])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList($props.goals, (goal) => {
                  return openBlock(), createBlock(_component_SwiperSlide, {
                    key: goal.id
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "single_brand_item target" }, [
                        createVNode("a", {
                          href: goal.URL,
                          target: "_blank"
                        }, [
                          createVNode("img", {
                            src: goal.image,
                            alt: "brand"
                          }, null, 8, ["src"])
                        ], 8, ["href"])
                      ])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Swiper, {
            "slides-per-view": $setup.slidesPerView,
            "space-between": $setup.spaceBetween,
            autoplay: { delay: 1e3, disableOnInteraction: false },
            modules: [$setup.Autoplay, $setup.Pagination, $setup.Navigation],
            loop: $setup.loop,
            breakpoints: $setup.breakpoints
          }, {
            default: withCtx(() => [
              (openBlock(true), createBlock(Fragment, null, renderList($props.goals, (goal) => {
                return openBlock(), createBlock(_component_SwiperSlide, {
                  key: goal.id
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "single_brand_item target" }, [
                      createVNode("a", {
                        href: goal.URL,
                        target: "_blank"
                      }, [
                        createVNode("img", {
                          src: goal.image,
                          alt: "brand"
                        }, null, 8, ["src"])
                      ], 8, ["href"])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ]),
            _: 1
          }, 8, ["slides-per-view", "space-between", "modules", "loop", "breakpoints"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Brands/BrandOne.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const BrandOne = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {
  name: "BrandFour",
  props: ["partners"],
  setup(props) {
    return {
      Autoplay,
      Pagination,
      Navigation
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_no_ssr = resolveComponent("no-ssr");
  const _component_Swiper = resolveComponent("Swiper");
  const _component_SwiperSlide = resolveComponent("SwiperSlide");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "brand-one brand-four" }, _attrs))}><div class="container"><div class="row"><div class="col-xl-12"><div class="brand-one-carousel owl-carousel">`);
  _push(ssrRenderComponent(_component_no_ssr, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Swiper, {
          "slides-per-view": 4,
          "space-between": 50,
          autoplay: { delay: 1e3, disableOnInteraction: false },
          modules: [$setup.Autoplay, $setup.Pagination, $setup.Navigation],
          loop: "",
          breakpoints: {
            0: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            992: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 50 }
          }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList($props.partners, (partner) => {
                _push3(ssrRenderComponent(_component_SwiperSlide, {
                  key: partner.id
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<div class="single_brand_item"${_scopeId3}><a${ssrRenderAttr("href", partner.URL)} target="_balnk"${_scopeId3}><img${ssrRenderAttr("src", partner.image)} alt="brand"${_scopeId3}></a></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "single_brand_item" }, [
                          createVNode("a", {
                            href: partner.URL,
                            target: "_balnk"
                          }, [
                            createVNode("img", {
                              src: partner.image,
                              alt: "brand"
                            }, null, 8, ["src"])
                          ], 8, ["href"])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList($props.partners, (partner) => {
                  return openBlock(), createBlock(_component_SwiperSlide, {
                    key: partner.id
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "single_brand_item" }, [
                        createVNode("a", {
                          href: partner.URL,
                          target: "_balnk"
                        }, [
                          createVNode("img", {
                            src: partner.image,
                            alt: "brand"
                          }, null, 8, ["src"])
                        ], 8, ["href"])
                      ])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Swiper, {
            "slides-per-view": 4,
            "space-between": 50,
            autoplay: { delay: 1e3, disableOnInteraction: false },
            modules: [$setup.Autoplay, $setup.Pagination, $setup.Navigation],
            loop: "",
            breakpoints: {
              0: { slidesPerView: 1, spaceBetween: 10 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              992: { slidesPerView: 3, spaceBetween: 30 },
              1024: { slidesPerView: 4, spaceBetween: 50 }
            }
          }, {
            default: withCtx(() => [
              (openBlock(true), createBlock(Fragment, null, renderList($props.partners, (partner) => {
                return openBlock(), createBlock(_component_SwiperSlide, {
                  key: partner.id
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "single_brand_item" }, [
                      createVNode("a", {
                        href: partner.URL,
                        target: "_balnk"
                      }, [
                        createVNode("img", {
                          src: partner.image,
                          alt: "brand"
                        }, null, 8, ["src"])
                      ], 8, ["href"])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ]),
            _: 1
          }, 8, ["modules"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Brands/BrandFour.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const BrandFour = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "GalleryOne",
  __ssrInlineRender: true,
  props: {
    galleries: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const { $glightbox } = useNuxtApp();
    ref(false);
    const props = __props;
    watch(
      () => props.galleries,
      (newGalleries) => {
        if (newGalleries.length) {
          const lightbox = $glightbox();
          lightbox.init();
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "gallery_one",
        id: "gallery"
      }, _attrs))} data-v-eee9ff8a><div class="container-fullwidth" data-v-eee9ff8a><div class="block-title text-center" data-v-eee9ff8a><p data-v-eee9ff8a>our gallery</p><h3 data-v-eee9ff8a>highlights</h3><div class="leaf" data-v-eee9ff8a><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-eee9ff8a></div></div><div class="gallery_one_carousel" data-v-eee9ff8a>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Gallery/GalleryOne.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Gallery = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-eee9ff8a"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    computed(() => store.getters.isLoading);
    const pageData = computed(() => store.getters.getPageData);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-f743083b>`);
      _push(ssrRenderComponent(unref(NavFour), null, null, _parent));
      if ((_a = pageData.value.sliders) == null ? void 0 : _a.length) {
        _push(ssrRenderComponent(unref(SliderFour), {
          sliders: pageData.value.sliders
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(unref(DetailsOne), {
        features: pageData.value.features
      }, null, _parent));
      _push(ssrRenderComponent(unref(ProjectPage), {
        technologies: pageData.value.technologies
      }, null, _parent));
      _push(ssrRenderComponent(unref(Gallery), {
        galleries: pageData.value.galleries
      }, null, _parent));
      _push(ssrRenderComponent(unref(FaqOne), {
        faqs: pageData.value.faqs
      }, null, _parent));
      _push(ssrRenderComponent(unref(__nuxt_component_1), {
        teams: pageData.value.teams
      }, null, _parent));
      _push(ssrRenderComponent(unref(Timeline), {
        stories: pageData.value.stories
      }, null, _parent));
      _push(ssrRenderComponent(unref(BrandOne), {
        goals: pageData.value.goals
      }, null, _parent));
      _push(ssrRenderComponent(unref(BrandFour), {
        partners: pageData.value.partners
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f743083b"]]);

export { index as default };
//# sourceMappingURL=index-Boxc3jTI.mjs.map
