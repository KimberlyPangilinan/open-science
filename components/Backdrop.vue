<script setup>
    defineEmits(['handleClick'])
</script>
<template>
    <div class="fixed top-0 left-0 h-screen w-screen  opacity-5 z-[5] " @click="$emit('handleClick')">
        
    </div>
</template>
