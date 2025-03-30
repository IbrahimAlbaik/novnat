import { _ as __nuxt_component_0$1 } from './PageHeader-QXT0KCaA.mjs';
import { useSSRContext, resolveComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as _imports_1 } from './leaf-DRn9mv8Y.mjs';
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

const _sfc_main$2 = {
  name: "VideoOne",
  props: ["video", "image", "title", "desc"],
  mounted() {
    new GLightbox({
      selector: ".videoOne",
      touchNavigation: true,
      loop: true,
      autoplayVideos: true
    });
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "video-one",
    style: `background-image:url(/assets/images/about/${$props.image});`
  }, _attrs))} data-v-d153bb2f><div class="container text-center" data-v-d153bb2f><a${ssrRenderAttr("href", `${$props.video}`)} class="video-one__btn videoOne" data-v-d153bb2f><i class="fa fa-play" data-v-d153bb2f></i></a><p data-v-d153bb2f>${ssrInterpolate($props.title)}</p><h3 data-v-d153bb2f>${ssrInterpolate($props.desc)}</h3></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/VideoOne.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-d153bb2f"]]);
const _sfc_main$1 = {
  components: { VideoOne: __nuxt_component_0 },
  name: "discover",
  computed: {
    about() {
      var _a, _b, _c;
      return (_c = (_b = (_a = this.$store.getters["getLandingPageData"]) == null ? void 0 : _a.data) == null ? void 0 : _b.sliders) == null ? void 0 : _c.find(
        (item) => item.id == this.$route.params.id
      );
    }
  },
  methods: {
    fetchData() {
      this.$store.dispatch("fetchLandingPageData");
    }
  },
  async mounted() {
    await this.fetchData();
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a, _b, _c;
  const _component_video_one = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "about_one" }, _attrs))} data-v-f340cd1e>`);
  if ($options.about) {
    _push(`<div class="container" data-v-f340cd1e><div class="row" data-v-f340cd1e><div class="${ssrRenderClass($options.about.id == "1" ? "col-lg-12" : "col-xl-7 col-lg-7")}" data-v-f340cd1e><div class="block-title text-left" data-v-f340cd1e><p data-v-f340cd1e>${(_a = $options.about.title) != null ? _a : ""}</p><div class="leaf" data-v-f340cd1e><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-f340cd1e></div></div><div class="about_content" data-v-f340cd1e><div class="text" data-v-f340cd1e><p data-v-f340cd1e>${(_b = $options.about.desc) != null ? _b : ""}</p></div></div></div><div class="col-lg-5" data-v-f340cd1e>`);
    if ($options.about.extra_desc) {
      _push(`<div class="project_information_box" data-v-f340cd1e>${(_c = $options.about.extra_desc) != null ? _c : ""}</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div data-v-f340cd1e>`);
    if ($options.about.youtube_video_url) {
      _push(ssrRenderComponent(_component_video_one, {
        image: $options.about.cover_youtube_image,
        video: $options.about.youtube_video_url,
        title: $options.about.youtube_video_title,
        desc: $options.about.about_youtube_video
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
const DiscoverMore = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-f340cd1e"]]);
const _sfc_main = {
  components: {
    DiscoverMore,
    PageHeader: __nuxt_component_0$1
  },
  head() {
    return {
      title: "NovNat  | About"
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PageHeader = __nuxt_component_0$1;
  const _component_DiscoverMore = resolveComponent("DiscoverMore");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_PageHeader, { title: "discover more" }, null, _parent));
  _push(ssrRenderComponent(_component_DiscoverMore, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/discover-more/_id.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _id as default };
//# sourceMappingURL=_id-CrnorH9r.mjs.map
