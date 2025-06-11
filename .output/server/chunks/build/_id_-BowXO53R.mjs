import { _ as __nuxt_component_0$1 } from './PageHeader-C6FKrn5T.mjs';
import { useSSRContext, computed, resolveComponent, mergeProps } from 'vue';
import { _ as _export_sfc, a as useRoute, u as useStore, b as useNuxtApp } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main$2 = {
  name: "VideoOne",
  props: ["video", "image", "title", "desc"],
  setup() {
    useNuxtApp();
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "video-one",
    style: `background-image:url(${$props.image});`
  }, _attrs))} data-v-194e6153><div class="container text-center" data-v-194e6153><a${ssrRenderAttr("href", $props.video)} class="video-one__btn videoOne" data-src="video" data-type="video" data-v-194e6153><i class="fa fa-play" data-v-194e6153></i></a><p data-v-194e6153>${ssrInterpolate($props.title)}</p><h3 data-v-194e6153>${ssrInterpolate($props.desc)}</h3></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/VideoOne.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-194e6153"]]);
const _sfc_main$1 = {
  components: { VideoOne: __nuxt_component_0 },
  name: "discover",
  props: ["about"]
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a, _b, _c;
  const _component_video_one = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "about_one" }, _attrs))} data-v-c7307e20>`);
  if ($props.about) {
    _push(`<div class="container" data-v-c7307e20><div class="row" data-v-c7307e20><div class="${ssrRenderClass($props.about.id == "1" ? "col-lg-12" : "col-xl-7 col-lg-7")}" data-v-c7307e20><div class="block-title text-left" data-v-c7307e20><p data-v-c7307e20>${(_a = $props.about.title) != null ? _a : ""}</p><div class="leaf" data-v-c7307e20><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-c7307e20></div></div><div class="about_content" data-v-c7307e20><div class="text" data-v-c7307e20><p data-v-c7307e20>${(_b = $props.about.desc) != null ? _b : ""}</p></div></div></div><div class="col-lg-5" data-v-c7307e20>`);
    if ($props.about.extra_desc) {
      _push(`<div class="project_information_box" data-v-c7307e20>${(_c = $props.about.extra_desc) != null ? _c : ""}</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div data-v-c7307e20>`);
    if ($props.about.youtube_video_url) {
      _push(ssrRenderComponent(_component_video_one, {
        image: $props.about.cover_youtube_image,
        video: $props.about.youtube_video_url,
        title: $props.about.youtube_video_title,
        desc: $props.about.about_youtube_video
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/About/DiscoverMore.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const DiscoverMore = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-c7307e20"]]);
const _sfc_main = {
  components: {
    DiscoverMore,
    PageHeader: __nuxt_component_0$1
  },
  head() {
    return {
      title: "NovNat | About"
    };
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    const pageData = computed(() => store.getters.getPageData);
    const about = computed(() => {
      const id = route.params.id;
      return pageData.value.sliders ? pageData.value.sliders.find((slide) => slide.id == id) : null;
    });
    return {
      about,
      pageData
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PageHeader = __nuxt_component_0$1;
  const _component_DiscoverMore = resolveComponent("DiscoverMore");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_PageHeader, { title: "discover more" }, null, _parent));
  if ($setup.about) {
    _push(ssrRenderComponent(_component_DiscoverMore, { about: $setup.about }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/discover-more/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _id_ as default };
//# sourceMappingURL=_id_-BowXO53R.mjs.map
