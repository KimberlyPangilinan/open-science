<script setup>
  import { Projects } from '../composables/constants';
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
  const pagination = ref({
    start: 0,
    end:24
  })
</script>

<template>
  <div class="max-w-screen-xl mx-auto text-gray-800 dark:text-gray-300">
   <span class="uppercase font-bold">Projects</span>
   <section class="flex flex-row-reverse gap-2">
    <LoaderContent v-if="isLoading" :count="10" class="grow py-8 flex flex-wrap items-center justify-center gap-4 max-w-screen-xl  mx-auto z-50" />
    <div v-else class="grow py-8 flex flex-wrap items-center justify-center gap-4 max-w-screen-xl  mx-auto z-50">
        <Card v-for="item in Projects.slice(pagination.start,pagination.end)" :label="item.label" :categories="item.categories" :collaborators="item.collaborators" :desc="item.desc" :link="item.link"/>
    </div>
    <div class="flex h-[70vh]"><span class="w-[12em]">Filter</span></div>
   </section>
   <div class="w-full flex items-end justify-end">
    <button v-if="pagination.start > 0" class="mr-6" @click="pagination.start-=24; pagination.end-=24;">Prev</button>
    <button v-if="pagination.end < Projects.length" class="mr-6" @click="pagination.start+=24; pagination.end+=24;">Next</button>
   </div>
 
  
  </div>
</template>