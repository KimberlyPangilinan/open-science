<script setup>
  import { Icon } from '@iconify/vue';
  import { Projects } from '../composables/constants';
  
  const { $toast } = useNuxtApp();
  const isLoading = ref(true)
  onMounted(() => {
    getProject()
    getTotalRequests()
    setTimeout(() => {
      isLoading.value= false
    }, 2000);
  })

  const item = ref(1);
  const getProject = () => {
    if (Projects.length > 0) {
      const randomIndex = Math.floor(Math.random() * Projects.length);
      item.value = Projects[randomIndex];
    }
  }
  

  const totalRequests = ref(0)
  const getTotalRequests = () => {
  }
  const limitReached = ref(false)
  const handleApply = () =>{
    if (totalRequests.value >= 5){
      limitReached.value=true
      return
    }
    console.log(totalRequests.value)
    totalRequests.value+=1
    getProject()
    $toast.success("Your request has been sent successfully")
  }

  const handleIgnore = () =>{
   getProject()
  }

  const search = ref('')
</script>

<template>
  <div class="max-w-screen-xl mx-auto space-y-4 justify-between px-4 text-gray-800 dark:text-gray-300">
    <header class="flex flex-col gap-4 justify-between md:flex-row w-full">
      <h1 class="hidden md:flex uppercase font-bold px-8 xl:px-0">PROJECTS</h1>
      <div class="flex gap-2 "> 
        <form @submit.prevent="" class="flex w-full ">
          <input  type="text" v-model="search" placeholder="Search project..." class=" rounded-md border border-gray-200 dark:border-gray-600 outline-none bg-transparent px-6 py-2 text-xs"/>
        </form> 
        <button @click="navigateTo('/search/projects/list')" class="text-gray-300"><Icon icon="ic:round-view-list" width="30" height="30" /></button>
      </div>   
    </header>
    <LoaderOne v-if="isLoading"  />
    <transition name="slide-fade" mode="out-in" v-else>
      <CardProject :key="item.label" :label="item.label" :categories="item.categories" :image="item.image" :collaborators="item.collaborators" :desc="item.desc" :link="item.label"/>
    </transition>
  </div>
  <div class="absolute bottom-[10%] right-[10%] w-full flex items-end justify-end">
    <button class="mr-6 text-gray-100 rounded-full bg-gray-300 p-4 opacity-30 hover:opacity-100 md:opacity-100"  @click="handleIgnore"><Icon icon="ph:x" /></button>
    <button class="mr-6 text-gray-100 rounded-full bg-custom-primary p-4 disabled:bg-[#b5c7bb] opacity-30 hover:opacity-100 md:opacity-100" :disabled="limitReached" @click="handleApply"><Icon icon="ph:check"/></button>
  </div>
</template>
<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: transform 0.5s, opacity 0.5s;
}

.slide-fade-enter, .slide-fade-leave-to  {
  transform: translateX(10px);
  opacity: 0;
}
</style>