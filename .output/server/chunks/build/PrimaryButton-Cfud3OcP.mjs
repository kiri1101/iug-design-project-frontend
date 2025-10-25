import script from './index-BJ_eTP-O.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import script$1 from './index-Bc6G0hst.mjs';

const _sfc_main$1 = {
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/TextInput.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "ButtonPrimaryButton",
  __ssrInlineRender: true,
  props: {
    label: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = script$1;
      _push(ssrRenderComponent(_component_Button, mergeProps({
        label: __props.label,
        pt: {
          root: "w-full"
        }
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Button/PrimaryButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$1 as _, _sfc_main as a };
//# sourceMappingURL=PrimaryButton-Cfud3OcP.mjs.map
