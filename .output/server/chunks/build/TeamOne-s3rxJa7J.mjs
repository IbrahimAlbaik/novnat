import { _ as __nuxt_component_0 } from './nuxt-link-B8wQTdmY.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_1 } from './leaf-DRn9mv8Y.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  name: "TeamOne",
  props: ["teams"],
  computed: {
    team() {
      var _a;
      return (_a = this.teams) == null ? void 0 : _a.filter((team) => team.role == "member");
    },
    otherTeam() {
      var _a;
      return (_a = this.teams) == null ? void 0 : _a.filter((team) => team.role == "adviser");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "team_one",
    id: "team"
  }, _attrs))}><div class="container"><div class="block-title text-center"><p>our team members</p><h3>meet the brilliants</h3><div class="leaf"><img${ssrRenderAttr("src", _imports_1)} alt=""></div></div><div class="row"><!--[-->`);
  ssrRenderList($options.team, (person) => {
    _push(`<div class="col-xl-4 col-lg-4 col-md-6"><div class="team_one_single wow fadeInUp">`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: `/team/${person.id}`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="team_one_image"${_scopeId}><img${ssrRenderAttr("src", person.image)}${ssrRenderAttr("alt", $options.team.id)}${_scopeId}></div>`);
        } else {
          return [
            createVNode("div", { class: "team_one_image" }, [
              createVNode("img", {
                src: person.image,
                alt: $options.team.id
              }, null, 8, ["src", "alt"])
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`<div class="team_one_deatils"><p>${ssrInterpolate(person.position)}</p><h2><a href="#">${ssrInterpolate(person.name)}</a></h2><div class="team_one_social"><a${ssrRenderAttr("href", person.linkedin_url)} target="_blank"><i class="fab fa-linkedin"></i></a></div></div></div></div>`);
  });
  _push(`<!--]--></div><div class="block-title text-center"><p>Advisory Team</p><div class="leaf"><img${ssrRenderAttr("src", _imports_1)} alt=""></div></div><div class="row" style="${ssrRenderStyle({ "justify-content": "center" })}"><div class="col-xl-8"><div class="row"><!--[-->`);
  ssrRenderList($options.otherTeam, (person) => {
    _push(`<div class="col-xl-5 col-lg-5 col-md-6"><div class="team_one_single wow fadeInUp animated" style="${ssrRenderStyle({ "visibility": "visible", "animation-name": "fadeInUp" })}">`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: `/team/${person.id}`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="team_one_image"${_scopeId}><img${ssrRenderAttr("src", person.image)}${ssrRenderAttr("alt", person.id)}${_scopeId}></div>`);
        } else {
          return [
            createVNode("div", { class: "team_one_image" }, [
              createVNode("img", {
                src: person.image,
                alt: person.id
              }, null, 8, ["src", "alt"])
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`<div class="team_one_deatils"><p>${ssrInterpolate(person.position)}</p><h2><a href="#">${ssrInterpolate(person.name)}</a></h2><div class="team_one_social"><a${ssrRenderAttr("href", person.linkedin_url)} target="_blank"><i class="fab fa-linkedin"></i></a></div></div></div></div>`);
  });
  _push(`<!--]--></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Team/TeamOne.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=TeamOne-s3rxJa7J.mjs.map
