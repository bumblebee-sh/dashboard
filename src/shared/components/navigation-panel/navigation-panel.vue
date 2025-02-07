<script setup lang="ts">

</script>

<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <RouterLink activeClass="md:dark:text-indigo-500" to="/" class="py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:p-0 dark:text-white">Dashboard</RouterLink>
          </li>
          <li>
            <RouterLink activeClass="md:dark:text-indigo-500" to="/report" class="py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:p-0 dark:text-white">Report</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>
