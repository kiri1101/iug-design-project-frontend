import { mergeProps, provide, ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { use } from 'echarts/core';
import { PieChart } from 'echarts/charts';
import { LegendComponent, ToolboxComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import VChart, { THEME_KEY } from 'vue-echarts';
import { a as useAuthStore, u as useNuxtApp, _ as _export_sfc } from './server.mjs';
import { u as useHead } from './composables-CxMplEF0.mjs';
import { u as useNotificationStore } from './notification-BSmwWoDZ.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main$1 = {
  __name: "ChartNightingalePie",
  __ssrInlineRender: true,
  setup(__props) {
    use([LegendComponent, ToolboxComponent, PieChart, CanvasRenderer]);
    provide(THEME_KEY, "light");
    const option = ref({
      legend: {
        top: "bottom"
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      series: [
        {
          name: "Nightingale Chart",
          type: "pie",
          radius: [25, 100],
          center: ["50%", "50%"],
          roseType: "area",
          itemStyle: {
            borderRadius: 8
          },
          data: [
            { value: 40, name: "Jan" },
            { value: 38, name: "Feb" },
            { value: 32, name: "Mar" },
            { value: 30, name: "May" },
            { value: 28, name: "Jun" },
            { value: 26, name: "Jul" }
          ]
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VChart), mergeProps({
        class: "chart",
        option: unref(option)
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chart/NightingalePie.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b3250608"]]);
const _imports_0 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools--%3e%3csvg%20width='200px'%20height='200px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7%2010L9.29289%2012.2929C9.68342%2012.6834%2010.3166%2012.6834%2010.7071%2012.2929L12.2929%2010.7071C12.6834%2010.3166%2013.3166%2010.3166%2013.7071%2010.7071L17%2014M17%2014V11.5M17%2014H14.5'%20stroke='%23ef4444'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M22%2010.5V12C22%2016.714%2022%2019.0711%2020.5355%2020.5355C19.0711%2022%2016.714%2022%2012%2022C7.28595%2022%204.92893%2022%203.46447%2020.5355C2%2019.0711%202%2016.714%202%2012C2%207.28595%202%204.92893%203.46447%203.46447C4.92893%202%207.28595%202%2012%202H13.5'%20stroke='%23ef4444'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3ccircle%20cx='19'%20cy='5'%20r='3'%20stroke='%23ef4444'%20stroke-width='1.5'/%3e%3c/svg%3e";
const _imports_1 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools--%3e%3csvg%20width='200px'%20height='200px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22%2010.5V12C22%2016.714%2022%2019.0711%2020.5355%2020.5355C19.0711%2022%2016.714%2022%2012%2022C7.28595%2022%204.92893%2022%203.46447%2020.5355C2%2019.0711%202%2016.714%202%2012C2%207.28595%202%204.92893%203.46447%203.46447C4.92893%202%207.28595%202%2012%202H13.5'%20stroke='%2310b981'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3ccircle%20cx='19'%20cy='5'%20r='3'%20stroke='%2310b981'%20stroke-width='1.5'/%3e%3cpath%20d='M7%2014L9.29289%2011.7071C9.68342%2011.3166%2010.3166%2011.3166%2010.7071%2011.7071L12.2929%2013.2929C12.6834%2013.6834%2013.3166%2013.6834%2013.7071%2013.2929L17%2010M17%2010V12.5M17%2010H14.5'%20stroke='%2310b981'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const _sfc_main = {
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: `Dashboard - IUGDesign`,
      meta: [{ name: "description", content: "My design project application." }]
    });
    useAuthStore();
    useNotificationStore();
    const { $apiFetch } = useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_chart_nightingale_pie = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-3" }, _attrs))}><div class="flex flex-wrap gap-3 bg-white rounded-lg"><ul class="grid grid-cols-2 gap-3 p-4 grow w-80"><li class="bg-emerald-600 grow text-white p-3 inline-flex flex-col rounded-md"><h5 class="text-sm font-semibold">No of Users</h5><h5 class="text-5xl text-right">300</h5></li><li class="bg-emerald-600 grow text-white p-3 inline-flex flex-col rounded-md"><h5 class="text-sm font-semibold">No of Leaves</h5><div class="flex flex-row items-end justify-between"><img${ssrRenderAttr("src", _imports_0)} class="size-5 bg-white rounded object-cover object-center mb-2"><h5 class="text-5xl text-right">300</h5></div></li><li class="bg-emerald-600 grow text-white p-3 inline-flex flex-col rounded-md"><h5 class="text-sm font-semibold">No of Users</h5><div class="flex flex-row items-end justify-between"><img${ssrRenderAttr("src", _imports_1)} class="size-5 bg-white rounded object-cover object-center mb-2"><h5 class="text-5xl text-right">300</h5></div></li><li class="bg-emerald-600 grow text-white p-3 inline-flex flex-col rounded-md"><h5 class="text-sm font-semibold">No of Users</h5><h2 class="text-5xl text-right">300</h2></li></ul><div class="flex justify-center">`);
      _push(ssrRenderComponent(_component_chart_nightingale_pie, null, null, _parent));
      _push(`</div><div class="flex justify-center">`);
      _push(ssrRenderComponent(_component_chart_nightingale_pie, null, null, _parent));
      _push(`</div></div><div class="bg-white rounded-lg"><h5 class="py-2 px-4 text-sm">Classification of leaves</h5></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=dashboard-BL-TsKeH.mjs.map
