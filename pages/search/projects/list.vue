<script setup>
  import { Icon } from '@iconify/vue';
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
   <section class="max-w-screen-xl mx-auto space-y-4 justify-between px-4 text-gray-800 dark:text-gray-300">
    <header class="flex flex-col gap-4 justify-between md:flex-row">
      <h1 class="hidden md:flex uppercase font-bold px-8 xl:px-0  w-full">PROJECTS</h1>
      <div class="w-full justify-end flex gap-4 text-gray-300"> 
        <form @submit.prevent="" class="flex  ">
          <input  type="text" v-model="search" placeholder="Search project..." class=" rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-6 py-2 text-xs"/>
        </form> 
        <button class="text-blue-400 uppercase font-semibold text-sm flex gap-2 items-center" @click="navigateTo('/search/projects/')">For You <Icon icon="ic:baseline-arrow-left" /></button>
      </div>   
    </header>
   <div class="flex flex-row-reverse gap-2">
    <LoaderOne v-if="isLoading" :count="10"  />
    <div v-else class="grow py-8  xl:px-0 flex flex-wrap items-center justify-center gap-4 max-w-screen-xl  mx-auto ">
        <Card 
          class="w-full"
          v-for="item in Projects.slice(pagination.start,pagination.end)" 
          :label="item.label" :categories="item.categories" :collaborators="item.collaborators" :desc="item.desc" :link="item.label" >
          <ButtonPrimary>
                   Request to Collaborate
          </ButtonPrimary>
        </Card>
    </div>
    <div class="hidden xl:flex flex-col gap-2 h-[70vh]"><span class="w-[12em]"></span>
    <WidgetFilter/>
    </div>
   </div>
   <div class="w-full flex items-end justify-end">
    <button v-if="pagination.start > 0" class="mr-6" @click="pagination.start-=24; pagination.end-=24;">Prev</button>
    <button v-if="pagination.end < Projects.length" class="mr-6" @click="pagination.start+=24; pagination.end+=24;">Next</button>
   </div>
 
  
  </section>
</template>