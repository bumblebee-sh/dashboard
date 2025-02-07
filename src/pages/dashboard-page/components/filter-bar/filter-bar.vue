<template>
  <div class="flex gap-5">
    <div>
      <div class="mb-2">Region</div>
      <div>
        <UiSelect :items="items" v-model="filters.region" @update:modelValue="onFilterChange"/>
      </div>
    </div>
    <div>
      <div class="mb-2">Date</div>
      <div>
        <UiDatePicker/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {ref, defineEmits} from 'vue';
  import UiSelect from '@/shared/ui/ui-select/ui-select.vue';
  import UiDatePicker from '@/shared/ui/ui-datepicker/ui-datepicker.vue';

  // todo interface
  const filters: any = ref({
    date: new Date().toISOString(),
    region: ''
  });

  const emit = defineEmits(['onChange']);

  const items = [
    { title: 'Asia' },
    { title: 'Europe' },
    { title: 'North America' },
  ];

  function onFilterChange() {
    emit('onChange', filters.value);
  }
</script>

<style scoped>

</style>
