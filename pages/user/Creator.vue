<script setup>
  import { Icon } from '@iconify/vue';
  import { About } from '../composables/constants';
  definePageMeta({
        layout: "dashboard",
    })
    const skill = ref('');
    const skills = ref([]);
    const isLoading = ref(false);
    const autocompleteOptions = ['JavaScript', 'Python', 'Java', 'C++', 'Vue.js', 'React', 'Node.js'];
    const addSkill = ref(false)
    const projectModal= ref(false)
    const filteredSkills = computed(() => {
    return autocompleteOptions.filter(item =>
        item.toLowerCase().includes(skill.value.toLowerCase())
    );
    });
    const modalAdd= ref(false);
    const modalUpdate= ref(false);

    const state=ref(false)
    const project = ref({
        title:"",
        description:''
    })

    const handleSubmit=()=>{

    }
    const handleAddSkill = () => {
    skills.value.push(skill.value);
    skill.value=''
    console.log(`${skills.value} skill added`);
    };

    const handleDeleteSkill = (index) => {
    skills.value.splice(index, 1);
    };

    const filterSkills = () => {
        skill.value = skill.value.trim(); 
        if (skill.value === '') {
            return;
        }

        filteredSkills.value = autocompleteOptions.filter(item =>
            item.toLowerCase().includes(skill.value.toLowerCase())
        );
    };

</script>
<template>
    <div class="w-[100%] px-8 py-4 ">
        <header class="flex justify-between">
            <h1 class="uppercase font-bold text-gray-800 dark:text-[#f4f4f4] text-sm px-8 xl:px-0">Manage as Creator</h1>
            <div>
                <ButtonPrimary @handleClick="projectModal= !projectModal">Add Project <Icon icon="ion:add-outline" /></ButtonPrimary>
            </div>
        </header>
        <div  class="py-8  px-8 xl:px-0 flex flex-wrap items-center justify-center gap-2 max-w-screen-xl w-100 mx-auto z-50">
        <Card v-for="item in About" :label="item.label"  :desc="item.desc" :link="item.link" class="w-full  sm:w-[40%] md:w-[24%] ">
            <div class="w-full justify-end flex gap-2">
                <ButtonPrimary class="hidden md:flex" @handle-click="navigateTo(`/search/projects/${link}`)">
                        View
                </ButtonPrimary>
                <ButtonPrimary class="hidden md:flex !bg-transparent !border-red-500 !text-red-500 dark:!text-blue-500 border dark:!border-blue-500" @handle-click="navigateTo(`/search/projects/${link}`)">
                        Delete
                </ButtonPrimary>
            </div>

        </Card>
    </div>
    </div>
    <Modal v-if="projectModal" @handleClick="projectModal=false">
        <form class="flex flex-col flex-wrap gap-4 w-[100%]">
          <h2 class="uppercase font-bold text-gray-800 dark:text-[#f4f4f4] text-sm px-8 xl:px-0">Add New Project</h2>
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
                 <h2 class="text-gray-800 dark:text-[#f4f4f4]">Collaborators</h2>
                </div>
                <form @submit.prevent="handleAddSkill"  class="flex border-b flex-col gap-4 py-2 justify-center w-[100%]">
                    <div class="w-full flex gap-2">
                    <span @click="addSkill = !addSkill" v-show="!addSkill" class="w-30 flex items-center  hover:bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-blue-400 border border-blue-400 ">Add skill <Icon icon="ion:add-outline" /></span>
                    <div v-show="addSkill" class="w-full">
                        <input
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-[#f4f4f4]" 
                        type="text" v-model="skill" title="Skill" list="skills-list" @input="filterSkills" placeholder="add skill"
                        />
                        <datalist id="skills-list">
                        <option v-for="option in filteredSkills" :value="option" class="w-[90px] bg-red-100"></option>
                        </datalist> 
                    </div>
                    
                    </div>
                   
                    
                </form>
                <section class="p-4  border-gray-200 w-full dark:border-gray-700">
                    <span v-for="item in skills">
                    <span 
                        @click="handleDeleteSkill(item)"
                        class="mb-2 bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 inline-flex gap-2 items-center justify-center">
                        {{ item }} <Icon icon="ph:x" />
                    </span>
                    </span>
                </section>

                
            </div>
          </div>

          <ButtonState :state="state" class="bg-custom-primary">Save Project</ButtonState>
        </form>
    </Modal>
    
</template>
<style scoped>

</style>