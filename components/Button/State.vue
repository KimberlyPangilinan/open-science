<script setup>
    defineProps(['state'])
    defineEmits(['handleClick'])
</script>

<template>
    <button 
        type="submit"  @click="$emit('handleClick')" :disabled="state"
        class="disabled:bg-blue-400 disabled:animate-pulse w-full flex items-center  justify-center gap-4 py-2 md:px-6 px-0 min-w-[30px]  rounded-lg text-xs bg-custom-red text-white bg-blue-600 sm:py-3 sm:px-6']"
    >
        <span v-show="state== true"> Loading...</span>
        <span v-show="state==false"><slot></slot></span>
    </button>
</template>