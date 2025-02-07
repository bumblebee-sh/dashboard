<script setup lang="ts">
import {ref, onMounted, computed} from 'vue';
import KpiPanel from './components/kpi-panel/kpi-panel.vue';
import SaleOverTimeChart from './components/sales-over-time-chart/sales-over-time-chart.vue';
import ProductPerformanceChart from './components/product-performance-chart/product-performance-chart.vue';
import FilterBar from './components/filter-bar/filter-bar.vue';
import DashboardService from './dashboard.service.ts';
import {useDashboardStore} from '@/stores/dashboard.ts';

const dashboardStore = useDashboardStore();

const filterData = ref<Record<string, any>>({});

onMounted(async () => {
  // set dashboard state
  const data = await DashboardService.getDashboardData();

  dashboardStore.setPurchase(data);
});

const kpiData = computed(() => {
  let data = dashboardStore.purchases;
  const filterKeys = Object.keys(filterData.value);
  if(filterKeys.length > 0) {
    if(filterKeys.includes('region')) {
      data = data.filter((item) => item.region === filterData.value.region.title);
    }
  }
  return data;
});

function onFiltering(filter: any) {
  filterData.value = filter;
}

</script>

<template>
  <div class="mt-5 md:mt-20">
    <FilterBar @onChange="onFiltering"/>
  </div>
  <div class="py-24 sm:py-32">
    <KpiPanel :data="kpiData"/>
  </div>
  <div class="mb-20">
    <SaleOverTimeChart :data="kpiData"/>
  </div>
  <div class="mb-20">
    <ProductPerformanceChart/>
  </div>
</template>

<style scoped>

</style>
