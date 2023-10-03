<script setup>
  import { About } from '../composables/constants';
  const route = useRoute()
  const isLoading = ref(true)
    onMounted(() => {
    const auth =localStorage.getItem('auth')
    setTimeout(() => {
      isLoading.value= false
    //  navigateTo('/home');
    }, 2000);
  })
  //const { data: mountain } = await useFetch(`https://api.nuxtjs.dev/mountains/${route.params.slug}`)
</script>

<template>
  <div class="max-w-screen-xl mx-auto text-gray-800 dark:text-gray-300">
    <h1 class="uppercase font-bold px-8 xl:px-0">COLLABORATORS</h1>
   
   <LoaderContent v-if="isLoading" :count="10" class="p-5" />
   <div v-else class="py-8 px-8 xl:px-0 flex flex-wrap items-center justify-center gap-4 max-w-screen-xl w-100 mx-auto z-50">
        <Card v-for="item in About" :label="item.label" :image="item.image" :desc="item.desc" :link="item.link"/>
    </div>
  </div>
</template>