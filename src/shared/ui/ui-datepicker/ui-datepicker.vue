<template>
  <VueDatePicker
    v-model="date"
    range
    :enable-time-picker="false"
    :max-date="maxDate"
    prevent-min-max-navigation
    :preset-dates="presetDates"
  >
    <template #preset-date-range-button="{ label, value, presetDate }">
      <span
        role="button"
        :tabindex="0"
        @click="presetDate(value)"
        @keyup.enter.prevent="presetDate(value)"
        @keyup.space.prevent="presetDate(value)"
      >
        {{ label }}
      </span>
    </template>
  </VueDatePicker>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import { endOfMonth, startOfMonth, startOfYear, subMonths } from 'date-fns'

const date = ref()
const maxDate = ref(new Date())

// todo add: last week, this week
const presetDates = ref([
  { label: 'Today', value: [maxDate.value, maxDate.value] },
  { label: 'This month', value: [startOfMonth(maxDate.value), maxDate.value] },
  {
    label: 'Last month',
    value: [startOfMonth(subMonths(maxDate.value, 1)), endOfMonth(subMonths(maxDate.value, 1))],
  },
  { label: 'This year', value: [startOfYear(maxDate.value), maxDate.value] },
])

onMounted(() => {
  const startDate = new Date()
  const endDate = new Date(new Date().setDate(startDate.getDate() + 7))
  date.value = [startDate, endDate]
})
</script>

<style scoped></style>
