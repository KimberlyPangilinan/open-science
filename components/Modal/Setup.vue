<script setup>
import { Icon } from '@iconify/vue';
defineEmits(["handleClick"])
const skill = ref('');
const { $toast } = useNuxtApp();
const skills = ref([]);
const isLoading = ref(false);
const autocompleteOptions = ['JavaScript', 'Python', 'Java', 'C++', 'Vue.js', 'React', 'Node.js'];
const addSkill = ref(false)
const filteredSkills = computed(() => {
  return autocompleteOptions.filter(item =>
    item.toLowerCase().includes(skill.value.toLowerCase())
  );
});
const handleSaveSkills = () =>{
  localStorage.setItem('skills', JSON.stringify(skills));
  console.log("saved")

  $toast.success("Skills saved successfully")
  
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
  <div class="flex items-center justify-center fixed inset-0 w-screen h-screen bg-[#e9e9e96e] z-50">
    <div class="flex flex-col items-center justify-start md:justify-between min-w-[90vw] sm:min-w-0 gap-3  min-h-[60vh] absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] px-6 py-8 rounded-sm bg-[#f4f4f4] dark:bg-gray-800 shadow-md text-center">
      <div class="font-bold text-sm mb-4 flex justify-between w-[80vw] md:w-[40vw] md:max-w-[40vw]">
        <h2 class="flex flex-col gap-2 text-left font-bold text-gray-800 dark:text-gray-300" >Add your Skills
          <span class="text-xs font-normal text-gray-700 dark:text-gray-400">Adding skills is a powerful way to enhance your marketability </span>
        </h2>
        <span class="text-gray-800 dark:text-gray-300" @click="$emit('handleClick')"><Icon icon="ph:x-bold" /></span>
      </div>
      <section class="p-4 border-b border-gray-200 max-w-[70%] dark:border-gray-700">
        <span v-for="item in skills">
          <span 
            @click="handleDeleteSkill(item)"
            class="mb-2 bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 inline-flex gap-2 items-center justify-center">
            {{ item }} <Icon icon="ph:x" />
          </span>
        </span>
      </section>
      <form @submit.prevent="handleAddSkill"  class="flex flex-col gap-4 py-2 justify-center w-[100%]">
        <div class="w-full flex gap-2">
          <span @click="addSkill = !addSkill" v-show="!addSkill" class="w-30 flex items-center  hover:bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-blue-400 border border-blue-400 ">Add skill <Icon icon="ion:add-outline" /></span>
          <div v-show="addSkill">
            <input
            class="px-4 py-2 bg-transparent border outline-none border-gray-300 text-gray-900 text-xs rounded-lg dark:text-[#f4f4f4]" 
            type="text" v-model="skill" title="Skill" list="skills-list" @input="filterSkills" placeholder="add skill"
            />
            <button class="hidden text-blue-800 "><Icon icon="ion:add-outline" /></button>
            <datalist id="skills-list">
              <option v-for="option in filteredSkills" :value="option" class="w-[90px] bg-red-100"></option>
            </datalist> 
          </div>
        </div>
        <ButtonState :state="isLoading" @handleClick="handleSaveSkills(); $emit('handleClick')">Save</ButtonState>
      </form>
      
    </div>
  </div>
</template>

