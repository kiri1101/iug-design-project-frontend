import { _ as _sfc_main$1 } from './Logo-NZhtFUeU.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$2 } from './PrimaryButton-Cfud3OcP.mjs';
import { _ as __nuxt_component_3 } from './PasswordInput-DJFvgULl.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DAxd7mNB.mjs';
import script from './index-C8FqXNJY.mjs';
import { ref, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, u as useNuxtApp, a as useAuthStore, b as useRuntimeConfig } from './server.mjs';
import { u as useNotify } from './notify-CjQ8ixde.mjs';
import './index-BJ_eTP-O.mjs';
import '@primeuix/utils';
import './index-NjkHSwuZ.mjs';
import './index-2DvTZN4Q.mjs';
import '@primeuix/styles/inputtext';
import './index-Bc6G0hst.mjs';
import '@primeuix/utils/object';
import './index-BUYaRu2x.mjs';
import './index-B-PmSPp4.mjs';
import '@primeuix/styles/badge';
import '@primeuix/styles/button';
import './index-DLxyqjYf.mjs';
import '@primeuix/utils/dom';
import '@primeuix/utils/zindex';
import './index-1v7fOn3J.mjs';
import './index-KjzSvJaZ.mjs';
import './index-rAVNvoJo.mjs';
import '@primeuix/utils/eventbus';
import '@primeuix/styles/password';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@primevue/core/base/style';
import '@primevue/core/basecomponent/style';
import '@primeuix/styles/autocomplete';
import '@primeuix/styles/cascadeselect';
import '@primeuix/styles/checkbox';
import '@primeuix/styles/checkboxgroup';
import '@primeuix/styles/colorpicker';
import '@primeuix/styles/datepicker';
import '@primeuix/styles/floatlabel';
import '@primeuix/styles/iconfield';
import '@primeuix/styles/iftalabel';
import '@primeuix/styles/inputchips';
import '@primeuix/styles/inputgroup';
import '@primeuix/styles/inputnumber';
import '@primeuix/styles/inputotp';
import '@primeuix/styles/knob';
import '@primeuix/styles/listbox';
import '@primeuix/styles/multiselect';
import '@primeuix/styles/radiobutton';
import '@primeuix/styles/radiobuttongroup';
import '@primeuix/styles/rating';
import '@primeuix/styles/select';
import '@primeuix/styles/selectbutton';
import '@primeuix/styles/slider';
import '@primeuix/styles/textarea';
import '@primeuix/styles/togglebutton';
import '@primeuix/styles/toggleswitch';
import '@primeuix/styles/treeselect';
import '@primeuix/styles/buttongroup';
import '@primeuix/styles/speeddial';
import '@primeuix/styles/splitbutton';
import '@primeuix/styles/datatable';
import '@primeuix/styles/dataview';
import '@primeuix/styles/orderlist';
import '@primeuix/styles/organizationchart';
import '@primeuix/styles/paginator';
import '@primeuix/styles/picklist';
import '@primeuix/styles/tree';
import '@primeuix/styles/treetable';
import '@primeuix/styles/timeline';
import '@primeuix/styles/virtualscroller';
import '@primeuix/styles/accordion';
import '@primeuix/styles/card';
import '@primeuix/styles/divider';
import '@primeuix/styles/fieldset';
import '@primeuix/styles/panel';
import '@primeuix/styles/scrollpanel';
import '@primeuix/styles/splitter';
import '@primeuix/styles/stepper';
import '@primeuix/styles/tabview';
import '@primeuix/styles/tabs';
import '@primeuix/styles/toolbar';
import '@primeuix/styles/confirmdialog';
import '@primeuix/styles/confirmpopup';
import '@primeuix/styles/dialog';
import '@primeuix/styles/drawer';
import '@primeuix/styles/popover';
import '@primeuix/styles/fileupload';
import '@primeuix/styles/breadcrumb';
import '@primeuix/styles/contextmenu';
import '@primeuix/styles/dock';
import '@primeuix/styles/menu';
import '@primeuix/styles/menubar';
import '@primeuix/styles/megamenu';
import '@primeuix/styles/panelmenu';
import '@primeuix/styles/steps';
import '@primeuix/styles/tabmenu';
import '@primeuix/styles/tieredmenu';
import '@primeuix/styles/message';
import '@primeuix/styles/inlinemessage';
import '@primeuix/styles/toast';
import '@primeuix/styles/carousel';
import '@primeuix/styles/galleria';
import '@primeuix/styles/image';
import '@primeuix/styles/imagecompare';
import '@primeuix/styles/avatar';
import '@primeuix/styles/blockui';
import '@primeuix/styles/chip';
import '@primeuix/styles/inplace';
import '@primeuix/styles/metergroup';
import '@primeuix/styles/overlaybadge';
import '@primeuix/styles/scrolltop';
import '@primeuix/styles/skeleton';
import '@primeuix/styles/progressbar';
import '@primeuix/styles/progressspinner';
import '@primeuix/styles/tag';
import '@primeuix/styles/terminal';
import '@primevue/forms/form/style';
import '@primevue/forms/formfield/style';
import '@primeuix/styles/tooltip';
import '@primeuix/styles/ripple';
import '@primeuix/styled';
import 'node:fs';
import 'node:url';
import 'node:path';
import 'node:crypto';
import 'pinia';
import 'vue-router';
import 'deep-pick-omit';
import '@primeuix/styles/base';
import '@primeuix/utils/uuid';

const _imports_0 = "" + __buildAssetsURL("signin.CrmIRP7C.svg");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const { $apiFetch } = useNuxtApp();
    useAuthStore();
    useNotify();
    const form = ref({
      pseudo: "",
      secret: ""
    });
    const invalidInput = ref({
      pseudo: false,
      secret: false
    });
    ref([]);
    const isLoading = ref(false);
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_svg_logo = _sfc_main$1;
      const _component_FloatLabel = script;
      const _component_input_text_input = _sfc_main$1$1;
      const _component_input_password_input = __nuxt_component_3;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_button_primary_button = _sfc_main$2;
      _push(`<main${ssrRenderAttrs(mergeProps({
        class: "grid h-full md:grid-cols-2 bg-signup-mobile-logo md:bg-none",
        "aria-label": "Landing page"
      }, _attrs))} data-v-4c0a3147><section class="flex-col hidden px-2 text-white md:flex bg-emerald-600" data-v-4c0a3147><div class="flex flex-col items-center justify-center space-y-5 grow" data-v-4c0a3147><p class="px-4 text-3xl font-semibold text-center lg:text-4xl" data-v-4c0a3147> Join us and supercharge the next generation of software </p><img${ssrRenderAttr("src", _imports_0)} class="object-contain object-center size-96" alt="Marum signup illustration" data-v-4c0a3147></div><p class="flex justify-between py-1 text-sm" data-v-4c0a3147><span data-v-4c0a3147>© ${ssrInterpolate(unref(year))} ${ssrInterpolate(unref(config).public.appName)}</span><span data-v-4c0a3147>All rights reserved</span></p></section><section class="flex items-center bg-signup-mobile-shape" aria-label="signin form lane" data-v-4c0a3147><div class="w-full max-w-md pb-4 mx-auto shadow rounded-xl bg-white/90 md:py-0 md:shadow-none md:bg-inherit shadow-gray-700" data-v-4c0a3147><div class="grid items-end justify-center h-20 md:h-36" data-v-4c0a3147>`);
      _push(ssrRenderComponent(_component_svg_logo, {
        width: "w-10 md:w-12",
        height: "h-24 md:h-28"
      }, null, _parent));
      _push(`</div><form class="px-3 mt-7 space-y-7" data-v-4c0a3147><p class="text-xl font-semibold text-center text-gray-600 md:text-2xl" data-v-4c0a3147> Sign In </p><div class="space-y-5" data-v-4c0a3147>`);
      _push(ssrRenderComponent(_component_FloatLabel, { variant: "on" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_input_text_input, {
              id: "email",
              modelValue: unref(form).pseudo,
              "onUpdate:modelValue": ($event) => unref(form).pseudo = $event,
              autocomplete: "off",
              invalid: unref(invalidInput).fname
            }, null, _parent2, _scopeId));
            _push2(`<label for="phone" data-v-4c0a3147${_scopeId}> Email address </label>`);
          } else {
            return [
              createVNode(_component_input_text_input, {
                id: "email",
                modelValue: unref(form).pseudo,
                "onUpdate:modelValue": ($event) => unref(form).pseudo = $event,
                autocomplete: "off",
                invalid: unref(invalidInput).fname
              }, null, 8, ["modelValue", "onUpdate:modelValue", "invalid"]),
              createVNode("label", { for: "phone" }, " Email address ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FloatLabel, { variant: "on" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_input_password_input, {
              id: "password",
              modelValue: unref(form).secret,
              "onUpdate:modelValue": ($event) => unref(form).secret = $event,
              feedback: false,
              invalid: unref(invalidInput).secret,
              fluid: ""
            }, null, _parent2, _scopeId));
            _push2(`<label for="password" data-v-4c0a3147${_scopeId}> Password </label>`);
          } else {
            return [
              createVNode(_component_input_password_input, {
                id: "password",
                modelValue: unref(form).secret,
                "onUpdate:modelValue": ($event) => unref(form).secret = $event,
                feedback: false,
                invalid: unref(invalidInput).secret,
                fluid: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue", "invalid"]),
              createVNode("label", { for: "password" }, " Password ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="space-y-5 text-sm text-gray-600" data-v-4c0a3147><p class="text-center" data-v-4c0a3147> By continuing, you agree to <span class="mr-1.5" data-v-4c0a3147>${ssrInterpolate(unref(config).public.appName)}</span>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "#",
        class: "font-semibold hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Terms of Use`);
          } else {
            return [
              createTextVNode("Terms of Use")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` and `);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "#",
        class: "font-semibold hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Privacy Policy`);
          } else {
            return [
              createTextVNode("Privacy Policy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`. </p><div class="space-y-3" data-v-4c0a3147><p class="text-center" data-v-4c0a3147> Do not have an account? `);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/signup",
        class: "text-emerald-500 hover:underline hover:font-semibold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`join us`);
          } else {
            return [
              createTextVNode("join us")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p>`);
      _push(ssrRenderComponent(_component_button_primary_button, {
        type: "submit",
        label: "Join now",
        iconPos: "right",
        loading: unref(isLoading)
      }, null, _parent));
      _push(`</div></div></form></div></section></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4c0a3147"]]);

export { index as default };
//# sourceMappingURL=index-3fsHm18x.mjs.map
