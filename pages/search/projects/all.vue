<script setup>
  import { Projects } from '../composables/constants';
  const isLoading = ref(true)
    onMounted(() => {
    setTimeout(() => {
      isLoading.value= false
    }, 2000);
  })

  const pagination = ref({
    start: 0,
    end:24
  })
</script>

<template>
  <section class="max-w-screen-xl mx-auto text-gray-800 dark:text-gray-300 px-4 md:px-0">
   <h1 class="uppercase font-bold px-8 xl:px-0">Projects</h1>
   <div class="flex flex-row-reverse gap-2">
    <LoaderContent v-if="isLoading" :count="10"  />
    <div v-else class="grow py-8 px-8 xl:px-0 flex flex-wrap items-center justify-center gap-4 max-w-screen-xl  mx-auto ">
        <Card v-for="item in Projects.slice(pagination.start,pagination.end)" :label="item.label" :categories="item.categories" :collaborators="item.collaborators" :desc="item.desc" :link="item.label"/>
    </div>
    <div class="hidden xl:flex h-[70vh]"><span class="w-[12em]">Filter</span></div>
   </div>
   <div class="w-full flex items-end justify-end">
    <button v-if="pagination.start > 0" class="mr-6" @click="pagination.start-=24; pagination.end-=24;">Prev</button>
    <button v-if="pagination.end < Projects.length" class="mr-6" @click="pagination.start+=24; pagination.end+=24;">Next</button>
   </div>
 
  
  </section>
</template>