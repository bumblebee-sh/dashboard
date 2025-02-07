<template>
  <div :style="{ height: `${height}px` }">
    <canvas ref="chartElem"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, useTemplateRef, watch } from 'vue'
import {Chart, BarController, BarElement, LinearScale, CategoryScale, LineController, LineElement, PointElement} from 'chart.js';

const props = defineProps({
  config: {
    type: Object,
    required: true,
  },
  height: {
    type: Number,
    default: 300
  }
});

let chart: Chart;
const chartRef: any = useTemplateRef('chartElem')!;


onMounted(() => {
  // register plugins
  Chart.register(
    // scales
    LinearScale, CategoryScale,
    // line chart
    LineController, LineElement,
    // bar chart
    BarController, BarElement, PointElement
  );

  const config = setConfig<any>(props.config);

  // set chart
  chart = new Chart(chartRef.value, config);
});

function setConfig<T>(config: T): T {
  // copy
  const configObj = JSON.parse(JSON.stringify(config));

  // set responsive by default
  configObj.options.responsive = true;
  configObj.options.maintainAspectRatio = false;

  return configObj;
}

watch(() => props.config, (value) => {
  chart.data.datasets = value.data.datasets;
  chart.update();
});
</script>

<style scoped>

</style>
