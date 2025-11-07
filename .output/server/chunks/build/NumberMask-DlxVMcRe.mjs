import script from './index-DZj_oBrj.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = {
  __name: "InputNumberMask",
  __ssrInlineRender: true,
  props: {
    borderRadius: {
      type: String,
      default: "rounded"
    },
    borderColor: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputMask = script;
      _push(ssrRenderComponent(_component_InputMask, mergeProps({
        pt: {
          root: ["w-full rounded h-9", __props.borderRadius, __props.borderColor]
        }
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/NumberMask.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=NumberMask-DlxVMcRe.mjs.map
