<template>
    <LoaderScreen v-if="isLoading"/>
    <NuxtPage/>

</template>
<script setup>
definePageMeta({
  layout: "custom",
});
const isLoading = ref(true)
onMounted(() => {
  setTimeout(() => {
    isLoading.value= false
    navigateTo('/main');
  }, 2000);
})
</script>