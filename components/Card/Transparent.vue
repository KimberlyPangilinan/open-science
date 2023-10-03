<script setup>
  defineProps(['label','value'])
</script>
<template>
            <div class="max-w-sm p-6 flex items-center justify-center align-middle gap-2 text-xs border-gray-200 rounded-lg shadow ">
            <WidgetCounter :value="value"/>
            <p class=" font-normal text-gray-500 dark:text-gray-400">{{label}}</p>
          </div>
</template>