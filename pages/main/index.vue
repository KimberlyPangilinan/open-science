<template>
<div class="">
    <Banner/>
    <LoaderContent v-if="isLoading" :count="10" class="p-5" />
    <div v-else class="py-8 flex flex-wrap items-center justify-center gap-4 max-w-screen-xl w-100 mx-auto z-50">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
    
</div>

</template>
<script setup>
import { Icon } from '@iconify/vue';

const isLoading = ref(true)
onMounted(() => {
  setTimeout(() => {
    isLoading.value= false
    navigateTo('/main');
  }, 1000);
})
</script>