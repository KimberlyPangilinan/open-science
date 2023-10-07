<script setup>
  import { About } from '../composables/constants';

  definePageMeta({
    middleware: "auth"
  })
  
  const isLoading = ref(true)
  const setup = ref(false)

  //to handle if maglalagay pa ba skills or not
  onMounted(() => {
    const skills = localStorage.getItem('skills') //change this function to get skills nung nakalogin
    setTimeout(() => {
      isLoading.value= false
      if (skills == null){
        setup.value=true
      }
    }, 2000);
  })
</script>

<template>
  <div class="">
      <Banner/>

      <div class="flex flex-wrap gap-2 md:gap-8 max-w-screen-xl mx-auto px-4 md:px-8 justify-around">
        <CardTransparent value="102" label="Countries represented" />
        <CardTransparent value="1482" label="Open Projects" @click="navigateTo('/search/projects')"/>
        <CardTransparent value="1093" label="Open Science"/>
        <CardTransparent value="1093" label="Collaborators" @click="navigateTo('/search/collaborators')"/>
      </div>

      <LoaderContent v-if="isLoading" :count="4" class="p-5" />

      <div v-else class="py-8  px-8 xl:px-0 flex flex-wrap items-center justify-center gap-2 max-w-screen-xl w-100 mx-auto z-50">
          <Card v-for="item in About" :label="item.label" :image="item.image" :desc="item.desc" :link="item.link" class="w-full  sm:w-[40%] md:w-[24%] ">
            <ButtonPrimary class="hidden md:flex" @handle-click="navigateTo(`/search/projects/${link}`)">
              Read more
            </ButtonPrimary>
          </Card>
      </div>
  </div>

  <ModalSetup v-show="setup" @handleClick="setup= false"/>

</template>
