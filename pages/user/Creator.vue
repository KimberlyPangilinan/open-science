<script setup>
  import { Icon } from '@iconify/vue';
  import { About } from '../composables/constants';
  definePageMeta({
        layout: "dashboard",
    })
  
 const modalAdd= ref(false);
 const modalUpdate= ref(false);

 const state=ref(false)
const project = ref({
    title:"",
    description:''
})

const handleSubmit=()=>{

}
</script>
<template>
    <div class="w-[100%] px-8 py-4 ">
        <header class="flex justify-between">
            <h1 class="uppercase font-bold text-gray-800 dark:text-[#f4f4f4] text-sm px-8 xl:px-0">Manage as Creator</h1>
            <div>
                <ButtonPrimary @handleClick="">Add Projects <Icon icon="ion:add-outline" /></ButtonPrimary>
            </div>
        </header>
        <div  class="py-8  px-8 xl:px-0 flex flex-wrap items-center justify-center gap-2 max-w-screen-xl w-100 mx-auto z-50">
        <Card v-for="item in About" :label="item.label"  :desc="item.desc" :link="item.link" class="w-full  sm:w-[40%] md:w-[24%] ">
            <div class="w-full justify-end flex gap-2">
                <ButtonPrimary class="hidden md:flex" @handle-click="navigateTo(`/search/projects/${link}`)">
                        View
                </ButtonPrimary>
                <ButtonPrimary class="hidden md:flex !bg-transparent !border-red-500 !text-red-500 dark:!text-blue-500 border dark:border-blue-500" @handle-click="navigateTo(`/search/projects/${link}`)">
                        Delete
                </ButtonPrimary>
            </div>

        </Card>
    </div>
    </div>
    <Modal>
        <form @submit.prevent="" class="flex flex-col flex-wrap gap-4 w-[100%]">
          <h2>Add New Project</h2>  
          <div class="flex gap-4">
            <div>
                <div class="grow">
                    <FormInput type="text" title="Project Title" v-model="project.title" class="w-full" :required="true"/>
                </div>
                <div class="grow flex flex-col gap-4 md:flex-row">
                    <div class="w-full flex flex-col gap-2">
                        <label for="email" class="text-left text-xs font-medium text-gray-600 dark:text-[#f4f4f4]">Description</label>
                        <textarea type="text" title="Description" v-model="project.description" required="true" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-[#f4f4f4]"></textarea>
                    </div>
                </div>
                <div class="grow flex flex-col gap-4 md:flex-row">
                    <FormInput title="Start Date" type="month"/>
                    <FormInput title="End Date" type="month"/>
                </div>
            </div>
            <div>
                <div class="grow">
                 <h2>Collaborators</h2>
                </div>
                <div class="grow flex flex-col gap-4 md:flex-row">
                    <div class="w-full flex flex-col gap-2">
                        <label for="email" class="text-left text-xs font-medium text-gray-600 dark:text-[#f4f4f4]">Description</label>
                        <textarea type="text" title="Description" v-model="project.description" required="true" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-[#f4f4f4]"></textarea>
                    </div>
                </div>
                <div class="grow flex flex-col gap-4 md:flex-row">
                    <FormInput title="Start Date" type="month"/>
                    <FormInput title="End Date" type="month"/>
                </div>
            </div>
          </div>

          <ButtonState :state="state" class="bg-custom-primary">Save Project</ButtonState>
        </form>
    </Modal>
</template>
<style scoped>

</style>