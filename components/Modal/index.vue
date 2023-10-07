<template>
    <form @submit.prevent="" class="flex items-center justify-center fixed inset-0 w-screen h-screen bg-[#e9e9e96e] z-50">
      <div class="flex flex-col items-center gap-3 absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] px-6 py-8 rounded-sm bg-white dark:bg-gray-800 shadow-md  text-center" :style="{ borderColor: color}">
        <div class="font-bold text-sm mb-4 w-full flex justify-end">
            <slot> </slot> <span @click="$emit('handleClick')"><Icon icon="ph:x-bold" /></span>
        </div>
       
        <div class="flex gap-4 py-2 justify-center w-[100%]">
           <slot name="buttons"></slot>
        </div>
        </div>
    </form>
  </template>
<script setup>
 
import { Icon } from '@iconify/vue';
</script>