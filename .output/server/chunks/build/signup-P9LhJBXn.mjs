import { _ as _sfc_main$1 } from './Logo-NZhtFUeU.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$3 } from './PrimaryButton-Cfud3OcP.mjs';
import { _ as _sfc_main$2 } from './NumberMask-BUpr8p56.mjs';
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
import './index-BwvaH2Tm.mjs';
import '@primeuix/utils/dom';
import './index-DLxyqjYf.mjs';
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_svg_logo = _sfc_main$1;
      const _component_FloatLabel = script;
      const _component_input_text_input = _sfc_main$1$1;
      const _component_input_number_mask = _sfc_main$2;
      const _component_input_password_input = __nuxt_component_3;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_button_primary_button = _sfc_main$3;
      _push(`<main${ssrRenderAttrs(mergeProps({
        class: "grid h-full md:grid-cols-2 bg-signup-mobile-logo md:bg-none",
        "aria-label": "Landing page"
      }, _attrs))} data-v-d2727363><section class="flex-col hidden px-2 text-white md:flex bg-emerald-600" data-v-d2727363><div class="flex flex-col items-center justify-center space-y-5 grow" data-v-d2727363><p class="px-4 text-3xl font-semibold text-center lg:text-4xl" data-v-d2727363> Begin your journey with some great teams </p><img${ssrRenderAttr("src", _imports_0)} class="object-contain object-center size-96" alt="Marum signup illustration" data-v-d2727363></div><p class="flex justify-between py-1 text-sm" data-v-d2727363><span data-v-d2727363>© ${ssrInterpolate(unref(year))} ${ssrInterpolate(unref(config).public.appName)}</span><span data-v-d2727363>All rights reserved</span></p></section><section class="flex items-center bg-signup-mobile-shape" aria-label="signin form lane" data-v-d2727363><div class="w-full max-w-md pb-4 mx-auto shadow rounded-xl bg-white/90 md:py-0 md:shadow-none md:bg-inherit shadow-gray-700" data-v-d2727363><div class="grid items-end justify-center h-20 md:h-36" data-v-d2727363>`);
      _push(ssrRenderComponent(_component_svg_logo, {
        width: "w-10 md:w-12",
        height: "h-24 md:h-28"
      }, null, _parent));
      _push(`</div><form class="px-3 mt-7 space-y-7" data-v-d2727363><p class="text-xl font-semibold text-center text-gray-600 md:text-2xl" data-v-d2727363> Sign In </p><div class="space-y-5" data-v-d2727363>`);
      _push(ssrRenderComponent(_component_FloatLabel, { variant: "on" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_input_text_input, {
              id: "firstName",
              modelValue: unref(form).firstName,
              "onUpdate:modelValue": ($event) => unref(form).firstName = $event,
              autocomplete: "off"
            }, null, _parent2, _scopeId));
            _push2(`<label for="firstName" data-v-d2727363${_scopeId}> First Name </label>`);
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
              autocomplete: "off",
              invalid: _ctx.invalidInput.lastName
            }, null, _parent2, _scopeId));
            _push2(`<label for="lastName" data-v-d2727363${_scopeId}> Last Name </label>`);
          } else {
            return [
              createVNode(_component_input_text_input, {
                id: "lastName",
                modelValue: unref(form).lastName,
                "onUpdate:modelValue": ($event) => unref(form).lastName = $event,
                autocomplete: "off",
                invalid: _ctx.invalidInput.lastName
              }, null, 8, ["modelValue", "onUpdate:modelValue", "invalid"]),
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
              autocomplete: "off",
              invalid: _ctx.invalidInput.mailingAddress
            }, null, _parent2, _scopeId));
            _push2(`<label for="mailingAddress" data-v-d2727363${_scopeId}> Email Address </label>`);
          } else {
            return [
              createVNode(_component_input_text_input, {
                id: "mailingAddress",
                modelValue: unref(form).mailingAddress,
                "onUpdate:modelValue": ($event) => unref(form).mailingAddress = $event,
                type: "email",
                autocomplete: "off",
                invalid: _ctx.invalidInput.mailingAddress
              }, null, 8, ["modelValue", "onUpdate:modelValue", "invalid"]),
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
              invalid: _ctx.invalidInput.phoneNumber
            }, null, _parent2, _scopeId));
            _push2(`<label for="phoneNumber" data-v-d2727363${_scopeId}> Phone Number </label>`);
          } else {
            return [
              createVNode(_component_input_number_mask, {
                id: "phoneNumber",
                modelValue: unref(form).phoneNumber,
                "onUpdate:modelValue": ($event) => unref(form).phoneNumber = $event,
                invalid: _ctx.invalidInput.phoneNumber
              }, null, 8, ["modelValue", "onUpdate:modelValue", "invalid"]),
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
              invalid: _ctx.invalidInput.secret,
              fluid: ""
            }, null, _parent2, _scopeId));
            _push2(`<label for="password" data-v-d2727363${_scopeId}> Password </label>`);
          } else {
            return [
              createVNode(_component_input_password_input, {
                id: "password",
                modelValue: unref(form).secret,
                "onUpdate:modelValue": ($event) => unref(form).secret = $event,
                feedback: false,
                invalid: _ctx.invalidInput.secret,
                fluid: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue", "invalid"]),
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
              invalid: _ctx.invalidInput.secret_confirmation,
              fluid: ""
            }, null, _parent2, _scopeId));
            _push2(`<label for="password_confirmation" data-v-d2727363${_scopeId}> Password Confirmation </label>`);
          } else {
            return [
              createVNode(_component_input_password_input, {
                id: "password_confirmation",
                modelValue: unref(form).secret_confirmation,
                "onUpdate:modelValue": ($event) => unref(form).secret_confirmation = $event,
                feedback: false,
                invalid: _ctx.invalidInput.secret_confirmation,
                fluid: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue", "invalid"]),
              createVNode("label", { for: "password_confirmation" }, " Password Confirmation ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="space-y-5 text-sm text-gray-600" data-v-d2727363><div class="space-y-3" data-v-d2727363><p class="text-center" data-v-d2727363> Already have an account? `);
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
const signup = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d2727363"]]);

export { signup as default };
//# sourceMappingURL=signup-P9LhJBXn.mjs.map
