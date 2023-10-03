<script setup>
   defineProps(['title','type'])
   defineEmits(['handleClick'])
</script>
<template>
    <button :type="type" :title="title" @click="$emit('handleClick')" class="flex items-center  justify-center gap-4 py-2 md:px-6 px-0 min-w-[30px]  rounded-lg text-xs bg-custom-primary text-white active:bg-green-100 sm:py-3 sm:px-6']">
      <slot></slot>
   </button>
</template>
