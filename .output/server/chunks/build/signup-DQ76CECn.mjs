import { _ as _sfc_main$1 } from './Logo-NZhtFUeU.mjs';
import { _ as _sfc_main$2 } from './TextInput-D9JYCghS.mjs';
import { _ as _sfc_main$3 } from './NumberMask-DlxVMcRe.mjs';
import { _ as __nuxt_component_3 } from './PasswordInput-N0L0aZ4D.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DAxd7mNB.mjs';
import { _ as _sfc_main$4 } from './PrimaryButton-CHUgGgKs.mjs';
import script from './index-B6qc2dch.mjs';
import { ref, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, u as useNuxtApp, a as useAuthStore, b as useRuntimeConfig } from './server.mjs';
import { u as useNotify } from './notify-CjQ8ixde.mjs';
import { u as useHead } from './composables-CxMplEF0.mjs';
import './index-VaIectPZ.mjs';
import '@primeuix/utils';
import './index-NjkHSwuZ.mjs';
import './index-2DvTZN4Q.mjs';
import '@primeuix/styles/inputtext';
import './index-DZj_oBrj.mjs';
import '@primeuix/utils/dom';
import './index-RULRiAAT.mjs';
import '@primeuix/utils/zindex';
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
import '@primeuix/utils/object';
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
import '@primeuix/styles/button';
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
import '@primeuix/styles/badge';
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
import './index-DORBdgI_.mjs';
import './index-BUYaRu2x.mjs';
import './index-B4FWBZFG.mjs';
import 'pinia';
import 'vue-router';
import 'deep-pick-omit';
import '@primeuix/styles/base';
import '@primeuix/utils/uuid';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _imports_0 = "" + __buildAssetsURL("signup.BNuPOivd.svg");
const _sfc_main = {
  __name: "signup",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const { $apiFetch } = useNuxtApp();
    useAuthStore();
    useNotify();
    const form = ref({
      firstName: "",
      lastName: "",
      mailingAddress: "",
      phoneNumber: "",
      secret: "",
      secret_confirmation: ""
    });
    const isLoading = ref(false);
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    useHead({
      title: `Sign Up - IUGDesign`,
      meta: [{ name: "description", content: "My design project application." }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_svg_logo = _sfc_main$1;
      const _component_FloatLabel = script;
      const _component_input_text_input = _sfc_main$2;
      const _component_input_number_mask = _sfc_main$3;
      const _component_input_password_input = __nuxt_component_3;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_button_primary_button = _sfc_main$4;
      _push(`<main${ssrRenderAttrs(mergeProps({
        class: "grid h-full md:grid-cols-2 bg-signup-mobile-logo md:bg-none",
        "aria-label": "Landing page"
      }, _attrs))} data-v-aa183bc9><section class="flex-col hidden px-2 text-white md:flex bg-emerald-600" data-v-aa183bc9><div class="flex flex-col items-center justify-center space-y-5 grow" data-v-aa183bc9><p class="px-4 text-3xl font-semibold text-center lg:text-4xl" data-v-aa183bc9> Begin your journey with some great teams </p><img${ssrRenderAttr("src", _imports_0)} class="object-contain object-center size-96" alt="Marum signup illustration" data-v-aa183bc9></div><p class="flex justify-between py-1 text-sm" data-v-aa183bc9><span data-v-aa183bc9>© ${ssrInterpolate(unref(year))} ${ssrInterpolate(unref(config).public.appName)}</span><span data-v-aa183bc9>All rights reserved</span></p></section><section class="flex items-center bg-signup-mobile-shape" aria-label="signin form lane" data-v-aa183bc9><div class="w-full max-w-md pb-4 mx-auto shadow rounded-xl bg-white/90 md:py-0 md:shadow-none md:bg-inherit shadow-gray-700" data-v-aa183bc9><div class="grid items-end justify-center h-20 md:h-36" data-v-aa183bc9>`);
      _push(ssrRenderComponent(_component_svg_logo, {
        width: "w-10 md:w-12",
        height: "h-24 md:h-28"
      }, null, _parent));
      _push(`</div><form class="px-3 mt-7 space-y-7" data-v-aa183bc9><p class="text-xl font-semibold text-center text-gray-600 md:text-2xl" data-v-aa183bc9> Sign In </p><div class="space-y-5" data-v-aa183bc9>`);
      _push(ssrRenderComponent(_component_FloatLabel, { variant: "on" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_input_text_input, {
              id: "firstName",
              modelValue: unref(form).firstName,
              "onUpdate:modelValue": ($event) => unref(form).firstName = $event,
              autocomplete: "off"
            }, null, _parent2, _scopeId));
            _push2(`<label for="firstName" data-v-aa183bc9${_scopeId}> First Name </label>`);
          } else {
            return [
              createVNode(_component_input_text_input, {
                id: "firstName",
                modelValue: unref(form).firstName,
                "onUpdate:modelValue": ($event) => unref(form).firstName = $event,
                autocomplete: "off"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode("label", { for: "firstName" }, " First Name ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FloatLabel, { variant: "on" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_input_text_input, {
              id: "lastName",
              modelValue: unref(form).lastName,
              "onUpdate:modelValue": ($event) => unref(form).lastName = $event,
              autocomplete: "off"
            }, null, _parent2, _scopeId));
            _push2(`<label for="lastName" data-v-aa183bc9${_scopeId}> Last Name </label>`);
          } else {
            return [
              createVNode(_component_input_text_input, {
                id: "lastName",
                modelValue: unref(form).lastName,
                "onUpdate:modelValue": ($event) => unref(form).lastName = $event,
                autocomplete: "off"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode("label", { for: "lastName" }, " Last Name ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FloatLabel, { variant: "on" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_input_text_input, {
              id: "mailingAddress",
              modelValue: unref(form).mailingAddress,
              "onUpdate:modelValue": ($event) => unref(form).mailingAddress = $event,
              type: "email",
              autocomplete: "off"
            }, null, _parent2, _scopeId));
            _push2(`<label for="mailingAddress" data-v-aa183bc9${_scopeId}> Email Address </label>`);
          } else {
            return [
              createVNode(_component_input_text_input, {
                id: "mailingAddress",
                modelValue: unref(form).mailingAddress,
                "onUpdate:modelValue": ($event) => unref(form).mailingAddress = $event,
                type: "email",
                autocomplete: "off"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode("label", { for: "mailingAddress" }, " Email Address ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FloatLabel, { variant: "on" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_input_number_mask, {
              id: "phoneNumber",
              modelValue: unref(form).phoneNumber,
              "onUpdate:modelValue": ($event) => unref(form).phoneNumber = $event,
              mask: "9-99-99-99-99"
            }, null, _parent2, _scopeId));
            _push2(`<label for="phoneNumber" data-v-aa183bc9${_scopeId}> Phone Number </label>`);
          } else {
            return [
              createVNode(_component_input_number_mask, {
                id: "phoneNumber",
                modelValue: unref(form).phoneNumber,
                "onUpdate:modelValue": ($event) => unref(form).phoneNumber = $event,
                mask: "9-99-99-99-99"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode("label", { for: "phoneNumber" }, " Phone Number ")
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
              fluid: ""
            }, null, _parent2, _scopeId));
            _push2(`<label for="password" data-v-aa183bc9${_scopeId}> Password </label>`);
          } else {
            return [
              createVNode(_component_input_password_input, {
                id: "password",
                modelValue: unref(form).secret,
                "onUpdate:modelValue": ($event) => unref(form).secret = $event,
                feedback: false,
                fluid: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode("label", { for: "password" }, " Password ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FloatLabel, { variant: "on" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_input_password_input, {
              id: "password_confirmation",
              modelValue: unref(form).secret_confirmation,
              "onUpdate:modelValue": ($event) => unref(form).secret_confirmation = $event,
              feedback: false,
              fluid: ""
            }, null, _parent2, _scopeId));
            _push2(`<label for="password_confirmation" data-v-aa183bc9${_scopeId}> Password Confirmation </label>`);
          } else {
            return [
              createVNode(_component_input_password_input, {
                id: "password_confirmation",
                modelValue: unref(form).secret_confirmation,
                "onUpdate:modelValue": ($event) => unref(form).secret_confirmation = $event,
                feedback: false,
                fluid: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode("label", { for: "password_confirmation" }, " Password Confirmation ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="space-y-5 text-sm text-gray-600" data-v-aa183bc9><div class="space-y-3" data-v-aa183bc9><p class="text-center" data-v-aa183bc9> Already have an account? `);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/",
        class: "text-emerald-500 hover:underline hover:font-semibold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`sign in`);
          } else {
            return [
              createTextVNode("sign in")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/signup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const signup = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-aa183bc9"]]);

export { signup as default };
//# sourceMappingURL=signup-DQ76CECn.mjs.map
