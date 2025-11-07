import script from './index-VaIectPZ.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = {
  __name: "InputTextInput",
  __ssrInlineRender: true,
  props: {
    inputType: {
      type: String,
      default: "text"
    },
    customClass: {
      type: String,
      default: ""
    },
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
      const _component_InputText = script;
      _push(ssrRenderComponent(_component_InputText, mergeProps({
        type: __props.inputType,
        class: ["w-full rounded h-9", __props.customClass, __props.borderRadius, __props.borderColor],
        autocomplete: "off"
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/TextInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=TextInput-D9JYCghS.mjs.map
