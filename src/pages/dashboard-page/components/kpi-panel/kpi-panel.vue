<script setup lang="ts">
import KpiCard from '@/shared/components/kpi-card/kpi-card.vue';
import {  defineProps, watch, ref } from 'vue'
import { Purchase } from '@/interfaces';

interface Props {
  data: Purchase[];
}

interface KpiPanelParams {
  name: string;
  setValue(value: Purchase[]): string;
}

interface KpiPanel {
  name: string;
  value: string;
}

const props = defineProps<Props>()

const kpiList = ref<KpiPanel[]>([]);

function topProduct(data: Purchase[]): string {
  const res: Record<string, number> = {};
  data.forEach(item => {
    if(res[item.title]) {
      res[item.title] += 1;
    } else {
      res[item.title] = 1;
    }
  });

  let topSale = '';
  let topSaleCount = 0;
  Object.entries(res).forEach(([key, value]) => {
    if(value > topSaleCount) {
      topSaleCount = value;
    }
    if(topSaleCount === value) { {
      topSale = key;
    }}
  });

  return topSale;
}

const kpiPanels: KpiPanelParams[] = [
    { name: 'Total sales', setValue: (items) => `$${items.reduce((acc, item) => acc + +item.price , 0)}` },
    { name: 'Number of orders', setValue: (items) => `${items.length}`},
    { name: 'Top-performing product', setValue: topProduct },
    { name: 'Sales growth percentage', setValue: () => `120%` },
  ]

function setKpiData(data: Purchase[]): KpiPanel[] {
  return kpiPanels.map((item) => ({
    name: item.name,
    value: item.setValue(data)
  }));
}

watch(() => props.data, () => {
  kpiList.value = setKpiData(props.data);
}, { immediate: true });

</script>

<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl px-6">
      <div class="grid grid-cols-1 gap-x-8 gap-y-16 text-center md:grid-cols-4">
        <div v-for="(kpi, index) in kpiList" :key="index" class="mx-auto flex max-w-xs flex-col gap-y-4">
          <KpiCard :data="kpi"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
