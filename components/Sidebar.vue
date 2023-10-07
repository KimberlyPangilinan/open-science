<script setup>
    import { Icon } from '@iconify/vue';
    defineEmits(['handleClick'])
</script>

<template>
    <div  id="settings" class="flex md:hidden  flex-col gap-8 px-8 py-4 w-full sticky right-0 top-16 z-[50] bg-slate-50 dark:bg-gray-900">
        <ul class="flex  font-medium text-xs ">
        <li>
          <NuxtLink to="/home" class="py-2 px-4 text-gray-900 dark:text-gray-100" aria-current="page">Home</NuxtLink>
        </li>
        <DropdownMenu title="Menu" >
        <template v-slot:button>
          <li>
          <NuxtLink class=" py-2 px-4 text-gray-900 dark:text-gray-100">Browse</NuxtLink>
        </li> 
        </template>
   
        <ul class="py-2" aria-labelledby="user-menu-button">
          <li>
            <a @click="navigateTo('/search/projects')" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Projects</a>
          </li>
          <li>
            <a @click="navigateTo('/search/collaborators')" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Collaborators</a>
          </li>
        </ul>
      </DropdownMenu>
      </ul>
    </div>
    <Backdrop @handleClick="$emit('handleClick')" />
</template>
