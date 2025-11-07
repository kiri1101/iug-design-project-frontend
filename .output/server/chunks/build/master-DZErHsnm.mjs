import { _ as __nuxt_component_0 } from './nuxt-link-DAxd7mNB.mjs';
import { _ as _sfc_main$1 } from './Logo-NZhtFUeU.mjs';
import { a as useAuthStore, u as useNuxtApp, T as Tooltip, n as navigateTo, b as useRuntimeConfig } from './server.mjs';
import script$1 from './index-CIYZaRL-.mjs';
import script from './index-_KFYCzBp.mjs';
import { ref, computed, mergeProps, withCtx, createVNode, unref, createTextVNode, toDisplayString, withModifiers, createBlock, createCommentVNode, openBlock, withDirectives, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderClass, ssrGetDirectiveProps, ssrRenderSlot } from 'vue/server-renderer';
import { u as useNotify } from './notify-CjQ8ixde.mjs';
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
import '@primeuix/styles/inputtext';
import '@primeuix/styles/knob';
import '@primeuix/styles/listbox';
import '@primeuix/styles/multiselect';
import '@primeuix/styles/password';
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
import 'pinia';
import 'vue-router';
import 'deep-pick-omit';
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import '@primeuix/styles/base';
import '@primeuix/utils/dom';
import '@primeuix/utils/uuid';
import '@primeuix/utils/zindex';
import './index-TvJrHcS7.mjs';
import './index-DORBdgI_.mjs';
import './index-BUYaRu2x.mjs';
import './index-B4FWBZFG.mjs';
import './index-BpmTSBxY.mjs';
import './index-rAVNvoJo.mjs';

const useNavigation = () => {
  const navItems = ref([
    {
      label: "Dashboard",
      icon: "pi pi-chart-line",
      command: () => navigateTo("/dashboard")
    },
    {
      label: "Users",
      icon: "pi pi-users",
      command: () => navigateTo("/users/list")
    },
    {
      label: "Leave",
      icon: "pi pi-telegram",
      command: () => navigateTo("/leaves/list")
    },
    {
      label: "Sanction",
      icon: "pi pi-ban",
      command: () => {
      }
    },
    {
      label: "Internship",
      icon: "pi pi-graduation-cap",
      command: () => {
      }
    },
    {
      label: "Bill",
      icon: "pi pi-receipt",
      command: () => {
      }
    },
    {
      label: "Warehouse",
      icon: "pi pi-warehouse",
      command: () => {
      }
    },
    {
      label: "Job",
      icon: "pi pi-briefcase",
      command: () => {
      }
    },
    {
      label: "Reservation",
      icon: "pi pi-save",
      command: () => {
      }
    },
    {
      label: "Delivery",
      icon: "pi pi-box",
      command: () => {
      }
    },
    {
      label: "Career",
      icon: "pi pi-chart-line",
      command: () => {
      }
    }
  ]);
  return {
    navItems
  };
};
const _sfc_main = {
  __name: "master",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const authStore = useAuthStore();
    const { $apiFetch } = useNuxtApp();
    const { navItems } = useNavigation();
    const { s } = useNotify();
    const isLoading = ref(false);
    const authUser = authStore.authUser;
    const menu = ref();
    const expandHeight = ref(false);
    const canShowUser = computed(() => {
      let output;
      if (authStore.isAuth) {
        let authUserRoles = authStore.authUser.user.role;
        output = authUserRoles.find((role) => role.slug === "ceo") !== void 0 || authUserRoles.find((role) => role.slug === "dhr") !== void 0 ? true : false;
      } else {
        output = false;
      }
      return output;
    });
    const expandingHeight = () => expandHeight.value = true;
    const reducingHeight = () => expandHeight.value = false;
    const logout = async () => {
      isLoading.value = true;
      try {
        const response = await $apiFetch(config.public.auth.logout, {
          method: "POST"
        });
        console.log("logout response: ", response);
        s(response.message);
      } catch ({ status, data }) {
        console.log("error code during logout: ", data);
      } finally {
        isLoading.value = false;
        authStore.resetAuth();
        return navigateTo("/");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_svg_logo = _sfc_main$1;
      const _component_Popover = script;
      const _component_SpeedDial = script$1;
      const _directive_tooltip = Tooltip;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex flex-col w-full font-mono antialiased h-dvh bg-white" }, _attrs))}><nav class="flex flex-row items-center justify-between px-3 py-1 border-b border-gray-300" aria-label="Navigation bar">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/",
        class: "inline-flex"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_svg_logo, {
              width: "w-5",
              height: "h-10"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_svg_logo, {
                width: "w-5",
                height: "h-10"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul><li class="text-sm"><img src="https://picsum.photos/id/237/200/300" class="object-cover object-center rounded-full cursor-pointer size-7" alt="Profile picture">`);
      _push(ssrRenderComponent(_component_Popover, {
        ref_key: "menu",
        ref: menu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-52"${_scopeId}><ul class="space-y-1"${_scopeId}><li class="p-2 border-b border-gray-300 capitalize"${_scopeId}><i class="mr-1 pi pi-user"${_scopeId}></i> ${ssrInterpolate(unref(authUser)?.user.fullName)}</li><li class="flex items-center justify-between p-2 text-gray-900 transition duration-150 ease-linear rounded cursor-pointer hover:bg-emerald-400 hover:text-gray-100"${_scopeId}><span${_scopeId}><i class="mr-1 pi pi-sign-out"${_scopeId}></i> Logout </span>`);
            if (unref(isLoading)) {
              _push2(`<i class="pi pi-spinner animate-spin" style="${ssrRenderStyle({ "font-size": "0.9rem" })}"${_scopeId}></i>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</li></ul></div>`);
          } else {
            return [
              createVNode("div", { class: "w-52" }, [
                createVNode("ul", { class: "space-y-1" }, [
                  createVNode("li", { class: "p-2 border-b border-gray-300 capitalize" }, [
                    createVNode("i", { class: "mr-1 pi pi-user" }),
                    createTextVNode(" " + toDisplayString(unref(authUser)?.user.fullName), 1)
                  ]),
                  createVNode("li", {
                    class: "flex items-center justify-between p-2 text-gray-900 transition duration-150 ease-linear rounded cursor-pointer hover:bg-emerald-400 hover:text-gray-100",
                    onClick: withModifiers(logout, ["prevent"])
                  }, [
                    createVNode("span", null, [
                      createVNode("i", { class: "mr-1 pi pi-sign-out" }),
                      createTextVNode(" Logout ")
                    ]),
                    unref(isLoading) ? (openBlock(), createBlock("i", {
                      key: 0,
                      class: "pi pi-spinner animate-spin",
                      style: { "font-size": "0.9rem" }
                    })) : createCommentVNode("", true)
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></nav><section class="flex flex-row h-full"><span class="block md:hidden">`);
      _push(ssrRenderComponent(_component_SpeedDial, {
        model: unref(navItems),
        direction: "down",
        style: {
          position: "absolute",
          right: 0,
          top: 0,
          transform: "translate(-3rem, 0.6rem)",
          "z-index": 50
        },
        buttonProps: { severity: "contrast", rounded: true },
        pt: {
          root: ["", { "h-auto": unref(expandHeight) }, { "h-8": !unref(expandHeight) }]
        },
        onClick: expandingHeight,
        onHide: reducingHeight
      }, {
        button: withCtx(({ toggleCallback }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button type="button" class="flex items-center justify-center p-[0.45rem] text-gray-900 border border-gray-500 hover:bg-gray-900 hover:text-gray-100 rounded-sm cursor-pointer transition duration-200 ease-linear"${_scopeId}><i class="pi pi-align-left" style="${ssrRenderStyle({ "font-size": "0.8rem" })}"${_scopeId}></i></button>`);
          } else {
            return [
              createVNode("button", {
                type: "button",
                class: "flex items-center justify-center p-[0.45rem] text-gray-900 border border-gray-500 hover:bg-gray-900 hover:text-gray-100 rounded-sm cursor-pointer transition duration-200 ease-linear",
                onClick: withModifiers(toggleCallback, ["prevent"])
              }, [
                createVNode("i", {
                  class: "pi pi-align-left",
                  style: { "font-size": "0.8rem" }
                })
              ], 8, ["onClick"])
            ];
          }
        }),
        item: withCtx(({ item, toggleCallback }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button${ssrRenderAttrs(mergeProps({
              type: "button",
              class: "flex items-center justify-center p-[0.45rem] text-gray-900 border border-gray-500 hover:bg-gray-900 hover:text-gray-100 rounded-full cursor-pointer transition duration-200 ease-linear shadow"
            }, ssrGetDirectiveProps(_ctx, _directive_tooltip, `${item.label}`)))}${_scopeId}><i class="${ssrRenderClass(item.icon)}" style="${ssrRenderStyle({ "font-size": "0.8rem" })}"${_scopeId}></i></button>`);
          } else {
            return [
              withDirectives((openBlock(), createBlock("button", {
                type: "button",
                class: "flex items-center justify-center p-[0.45rem] text-gray-900 border border-gray-500 hover:bg-gray-900 hover:text-gray-100 rounded-full cursor-pointer transition duration-200 ease-linear shadow",
                onClick: toggleCallback
              }, [
                createVNode("i", {
                  class: item.icon,
                  style: { "font-size": "0.8rem" }
                }, null, 2)
              ], 8, ["onClick"])), [
                [_directive_tooltip, `${item.label}`]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span><aside class="flex-col hidden w-48 p-2 border-r border-gray-300 divide-y divide-gray-300 md:flex"><ul class="mt-5 space-y-2 grow"><li>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/dashboard",
        class: [
          "flex items-center cursor-pointer px-2 py-1.5 rounded text-base",
          {
            "bg-emerald-500 text-white": _ctx.$router.currentRoute.value.name === "dashboard"
          },
          {
            "hover:bg-emerald-500 hover:text-gray-100": _ctx.$router.currentRoute.value.name !== "dashboard"
          }
        ]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="mr-1.5 pi pi-chart-line"${_scopeId}></i> Dashboard `);
          } else {
            return [
              createVNode("i", { class: "mr-1.5 pi pi-chart-line" }),
              createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li>`);
      if (unref(canShowUser)) {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/users/list",
          class: [
            "flex items-center cursor-pointer px-2 text-base py-1.5 rounded ",
            {
              "bg-emerald-500 text-white": _ctx.$router.currentRoute.value.name === "users-list"
            },
            {
              "hover:bg-emerald-500 hover:text-gray-100": _ctx.$router.currentRoute.value.name !== "users-list"
            }
          ]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="pi pi-users mr-1.5"${_scopeId}></i> Users `);
            } else {
              return [
                createVNode("i", { class: "pi pi-users mr-1.5" }),
                createTextVNode(" Users ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<li>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/leaves/list",
        class: [
          "flex items-center cursor-pointer px-2 text-base py-1.5 rounded ",
          {
            "bg-emerald-500 text-white": _ctx.$router.currentRoute.value.name === "leaves-list"
          },
          {
            "hover:bg-emerald-500 hover:text-gray-100": _ctx.$router.currentRoute.value.name !== "leaves-list"
          }
        ]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="pi pi-telegram mr-1.5"${_scopeId}></i> Leave `);
          } else {
            return [
              createVNode("i", { class: "pi pi-telegram mr-1.5" }),
              createTextVNode(" Leave ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="flex items-center cursor-pointer hover:bg-emerald-500 px-2 text-base py-1.5 rounded hover:text-gray-100"><i class="pi pi-ban mr-1.5"></i> Sanction </li><li class="flex items-center cursor-pointer hover:bg-emerald-500 px-2 text-base py-1.5 rounded hover:text-gray-100"><i class="pi pi-graduation-cap mr-1.5"></i> Internship </li><li class="flex items-center cursor-pointer hover:bg-emerald-500 px-2 text-base py-1.5 rounded hover:text-gray-100"><i class="pi pi-receipt mr-1.5"></i> Bill </li><li class="flex items-center cursor-pointer hover:bg-emerald-500 px-2 text-base py-1.5 rounded hover:text-gray-100"><i class="pi pi-warehouse mr-1.5"></i> Warehouse </li><li class="flex items-center cursor-pointer hover:bg-emerald-500 px-2 text-base py-1.5 rounded hover:text-gray-100"><i class="pi pi-briefcase mr-1.5"></i> Job </li><li class="flex items-center cursor-pointer hover:bg-emerald-500 px-2 text-base py-1.5 rounded hover:text-gray-100"><i class="pi pi-save mr-1.5"></i> Reservation </li><li class="flex items-center cursor-pointer hover:bg-emerald-500 px-2 text-base py-1.5 rounded hover:text-gray-100"><i class="pi pi-box mr-1.5"></i> Delivery </li><li class="flex items-center cursor-pointer hover:bg-emerald-500 px-2 text-base py-1.5 rounded hover:text-gray-100"><i class="pi pi-chart-line mr-1.5"></i> Career </li></ul><h1 class="mt-3 text-sm text-gray-500">v1.0.9.5</h1></aside><div class="p-2 grow bg-slate-100">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></section></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/master.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=master-DZErHsnm.mjs.map
