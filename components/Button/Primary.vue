<script setup>
   defineProps(['title','type'])
   defineEmits(['handleClick'])
</script>
<template>
    <button :type="type" :title="title" @click="$emit('handleClick')" class=" min-w-[12em] md:!min-w-0 flex items-center  justify-center gap-4 py-2 md:px-6 px-0   rounded-md text-xs bg-custom-primary font-semibold text-[#f4f4f4] active:bg-green-100 sm:py-2 sm:px-6']">
      <slot></slot>
   </button>
</template>
