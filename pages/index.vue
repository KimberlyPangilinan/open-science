<script setup>
    definePageMeta({
    layout: "custom",
    middleware: "auth"
    });


    const isLoading = ref(true)
    onMounted(() => {
    setTimeout(() => {
        isLoading.value= false
        navigateTo('/home');
    }, 2000);
    })
</script>

<template>
    <LoaderScreen v-if="isLoading"/>
    <NuxtPage/>

</template>
