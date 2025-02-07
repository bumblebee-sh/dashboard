<template>
  <div>
    <h3 class="mb-5 text-3xl"> Sales Over Time </h3>
    <BaseChart :config="chartConfig"/>
  </div>
</template>

<script setup lang="ts">
import BaseChart from '@/shared/components/base-chart/base-chart.vue';
import { defineProps, watch, ref } from 'vue'
import { Purchase } from '@/interfaces';
import { getMonth } from '@/utils/date.util.ts';

interface Props {
  data: Purchase[];
}

const props = defineProps<Props>();

const chartConfig = ref<Record<string, any>>({});

function getMonths(data: Purchase[]): string[] {
  // todo Improve from picked range
  return ['Jan', 'Feb']
}

function setData(data: Purchase[]) {
  // todo Improve from picked range
  const res: Record<string, number> = {
    Jan: 0,
    Feb: 0
  };

  data.forEach((item) => {
    const month = getMonth(item.purchase_date);
    res[month] += 1;
  });

  return Object.values(res);
}

function setConfig(data: Purchase[]) {
  return {
    type: 'line',
    data: {
      labels: getMonths(data),
      datasets: [{
        label: 'Sales',
        data: setData(data),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  }
}

watch(() => props.data, () => {
  chartConfig.value = setConfig(props.data);
}, { immediate: true });


</script>

<style scoped>

</style>
