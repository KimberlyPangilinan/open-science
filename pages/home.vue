<script setup>
  import { Icon } from '@iconify/vue';
  import { About } from '../composables/constants';

  definePageMeta({
    middleware: "auth"
  })
  

  const isLoading = ref(true)
  onMounted(() => {
    const auth =localStorage.getItem('auth')
    setTimeout(() => {
      isLoading.value= false
    //  navigateTo('/home');
    }, 2000);
  })
</script>

<template>
<div class="">
    <Banner/>
      <div class="flex flex-wrap gap-8 max-w-screen-xl mx-auto px-8 justify-around">
        <CardTransparent value="102" label="Countries represented" />
        <CardTransparent value="1482" label="Open Projects" @click="navigateTo('/projects')"/>
        <CardTransparent value="1093" label="Open Science"/>
        <CardTransparent value="1093" label="Collaborators" @click="navigateTo('/collaborators')"/>
      </div>

    <LoaderContent v-if="isLoading" :count="10" class="p-5" />
    <div v-else class="py-8 flex flex-wrap items-center justify-center gap-4 max-w-screen-xl w-100 mx-auto z-50">
        <Card v-for="item in About" :label="item.label" :image="item.image" :desc="item.desc" :link="item.link"/>
    </div>

</div>

</template>
