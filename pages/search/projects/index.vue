<script setup>
  import { Icon } from '@iconify/vue';
  import { Projects } from '../composables/constants';
  
  const { $toast } = useNuxtApp();

  onMounted(() => {
    getProject()
    getTotalRequests()
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
        <button @click="navigateTo('/search/projects/list')" class="text-blue-400 uppercase font-semibold text-sm flex gap-2 items-center">View All <Icon icon="ic:baseline-arrow-right" /></button>
      </div>   
    </header>
    <transition name="slide-fade" mode="out-in">
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