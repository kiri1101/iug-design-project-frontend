<script setup>
import { use } from 'echarts/core'
import { PieChart } from 'echarts/charts'
import { LegendComponent, ToolboxComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import VChart, { THEME_KEY } from 'vue-echarts'

use([LegendComponent, ToolboxComponent, PieChart, CanvasRenderer])

provide(THEME_KEY, 'light')

const option = ref({
  legend: {
    top: 'bottom',
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [25, 100],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8,
      },
      data: [
        { value: 40, name: 'Jan' },
        { value: 38, name: 'Feb' },
        { value: 32, name: 'Mar' },
        { value: 30, name: 'May' },
        { value: 28, name: 'Jun' },
        { value: 26, name: 'Jul' },
      ],
    },
  ],
})
</script>

<template>
  <VChart class="chart" :option="option" />
</template>

<style scoped>
.chart {
  height: 300px;
  width: 300px;
}
</style>
