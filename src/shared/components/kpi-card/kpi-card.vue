<script setup lang="ts">
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="mx-auto flex max-w-xs flex-col gap-y-4">
    <div class="text-base/7 text-gray-600">{{ data.name }}</div>
    <div class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
      {{ data.value }}
    </div>
  </div>
</template>

<style scoped></style>
