import script from './index-RULRiAAT.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Password = script;
  _push(ssrRenderComponent(_component_Password, mergeProps({
    pt: {
      root: "w-full rounded h-9"
    },
    "input-class": "w-full rounded h-9",
    "panel-class": "font-mono text-gray-500",
    fluid: ""
  }, _attrs), null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/PasswordInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]), { __name: "InputPasswordInput" });

export { __nuxt_component_3 as _ };
//# sourceMappingURL=PasswordInput-N0L0aZ4D.mjs.map
