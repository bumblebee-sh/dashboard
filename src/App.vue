<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderPanel from '@/shared/core/header-panel/header-panel.vue'
</script>

<template>
  <div>
    <header class="mb-2">
      <HeaderPanel />
    </header>
    <main class="max-w-screen-xl m-auto px-8">
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
