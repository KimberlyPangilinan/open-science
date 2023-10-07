<script setup>
import { ref  } from 'vue';
defineProps(['title', 'icon'])


const isOpen = ref(false);
const { emit } = defineEmits();

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const handleClick = (item) => {
  emit('handleClick', item);
  closeDropdown(); 
};

const closeDropdown = () => {
 // isOpen.value = false;
};
</script>

<template>
    <div class="relative inline-block">
      <button class="flex items-center align-middle justify-center  text-gray-300   dark:text-[#ffffff9c] dark:border-[#ffffff6a] rounded-full" @click="toggleDropdown" :title="title" >
      <slot name="button"></slot>
      </button>
      <div @click="closeDropdown" v-if="isOpen" class="absolute top-10 z-10 right-0 mt-2 w-[204px] bg-[#ffffffd0] divide-y divide-gray-100  shadow dark:bg-gray-700 dark:divide-gray-600 border rounded-lg text-black">
        <slot  ></slot>
      </div>
    </div>
    <Backdrop v-show=" isOpen"  @handleClick="isOpen=false" />
  </template>
  

  
  