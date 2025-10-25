import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';

const _sfc_main = {
  __name: "SvgLogo",
  __ssrInlineRender: true,
  props: {
    width: {
      type: String,
      default: "w-12"
    },
    height: {
      type: String,
      default: "h-28"
    },
    color: {
      type: String,
      default: "#10B981"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        class: [__props.height, __props.width],
        viewBox: "0 0 53 114",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, _attrs))}><path d="M19.3571 87.9443L1.5 99.8564L11.3214 65.6148L19.3571 32.995L22.9286 1L51.5 84.486L45.6964 111L33.8661 72.3964L25.1607 79.1063L19.9297 74.0067L19.3571 87.9443Z"${ssrRenderAttr("fill", __props.color)}></path><path d="M19.3571 32.995L22.9286 1M19.3571 32.995L11.3214 65.6148M19.3571 32.995L33.8661 72.3964M22.9286 1L19.3571 87.9443L1.5 99.8564L11.3214 65.6148M22.9286 1L51.5 84.486L45.6964 111L33.8661 72.3964M11.3214 65.6148L25.1607 79.1063L33.8661 72.3964" stroke="white" stroke-opacity="0.8" stroke-width="1.5"></path></svg>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Svg/Logo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Logo-NZhtFUeU.mjs.map
