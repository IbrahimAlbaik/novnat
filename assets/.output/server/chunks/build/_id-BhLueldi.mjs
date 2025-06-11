import { _ as __nuxt_component_0 } from './PageHeader-QXT0KCaA.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-B8wQTdmY.mjs';
import { F as FaqOne } from './FaqOne-CDi4nCDd.mjs';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import './leaf-DRn9mv8Y.mjs';
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

const _sfc_main$1 = {
  name: "ServiceDetail",
  computed: {
    services() {
      return this.$store.state.services;
    },
    singleService() {
      return this.$store.state.services.find(
        (service) => service.id == this.$route.params.id
      );
    }
  },
  methods: {
    isActive(service) {
      return service.id == this.singleService.id ? "active" : null;
    }
  },
  components: { FaqOne },
  created() {
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "service_detail" }, _attrs))}><div class="container"><div class="row"><div class="col-xl-4 col-lg-4"><div class="service_details_left"><ul class="list-unstyled service_all_list"><li><a href="#">All Services</a></li><!--[-->`);
  ssrRenderList($options.services, (service) => {
    _push(`<li>`);
    if ($options.singleService) {
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/service-detail/" + service.id,
        class: service.id == $options.singleService.id ? "active" : ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(service.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(service.title), 1)
            ];
          }
        }),
        _: 2
      }, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</li>`);
  });
  _push(`<!--]--></ul><div class="need_help_box"><h2>Need Help?</h2><p> Speak with a human to filling out a form? call corporate office and we will connect you with a team member who can help. </p><h3><span class="icon-phone-call"></span>666 888 0000</h3></div><div class="download_file_box"><a href="#"><i class="icon-pdf"></i>Download PDF File</a></div></div></div><div class="col-xl-8 col-lg-8"><div class="service_details_right"><div class="agriculture_solutions"><h3>${ssrInterpolate($options.singleService.title)}</h3><!--[-->`);
  ssrRenderList($options.singleService.details, (service) => {
    _push(`<div><p><i class="fa fa-angle-right fa-xs"></i> ${ssrInterpolate(service.detail)}</p><ul class="list-unstyled"><!--[-->`);
    ssrRenderList(service.options, (option) => {
      _push(`<li><i class="fa fa-check"></i>${ssrInterpolate(option)}</li>`);
    });
    _push(`<!--]--></ul></div>`);
  });
  _push(`<!--]--></div><p class="service_details_last_text"> Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. </p></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Services/ServiceDetail.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ServiceDetail = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    ServiceDetail,
    PageHeader: __nuxt_component_0
  },
  head() {
    return {
      title: "Agrikol  | Service Detail"
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PageHeader = __nuxt_component_0;
  const _component_ServiceDetail = resolveComponent("ServiceDetail");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_PageHeader, { title: "Service Detail" }, null, _parent));
  _push(ssrRenderComponent(_component_ServiceDetail, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/service-detail/_id.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _id as default };
//# sourceMappingURL=_id-BhLueldi.mjs.map
