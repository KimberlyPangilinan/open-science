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
  
  const handleIgnore = () =>{
   getProject()
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
</script>

<template>
  <div class="max-w-screen-xl mx-auto flex justify-between px-4 text-gray-800 dark:text-gray-300">
          <CardProject :label="item.label" :categories="item.categories" :image="item.image" :collaborators="item.collaborators" :desc="item.desc" :link="item.label"/>
  </div>
  <div class="absolute bottom-[6em] right-[10%] w-full flex items-end justify-end">
    <button class="mr-6 text-gray-100 rounded-full bg-gray-300 p-4"  @click="handleIgnore"><Icon icon="ph:x" /></button>
    <button class="mr-6 text-gray-100 rounded-full bg-custom-primary p-4 disabled:bg-green-200" :disabled="limitReached" @click="handleApply"><Icon icon="ph:check"/></button>
  </div>
</template>
