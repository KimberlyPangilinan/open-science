<template>
  <header class="bg-white shadow dark:bg-gray-900 sticky top-0 z-20">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <NuxtLink to="https://Openapp.com/" class="flex items-center gap-2">
        <Icon icon="logos:sensu-icon" width="30" height="30"/>
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Open Site</span>
    </NuxtLink>
    <!-- <nav class="items-center justify-between hidden w-full md:flex md:w-auto ">
      <div class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
       </div>
    </nav> -->

    <button type="button" class="flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="items-center justify-between hidden w-full md:flex md:w-auto" >
      <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <NuxtLink to="main" class="py-2 px-4 text-white" aria-current="page">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/" class=" py-2 px-4 text-gray-900 dark:text-gray-100 rounded ">About</NuxtLink>
        </li>

      </ul>
    </div>
      <!-- Dropdown menu -->
    <div class="hidden md:flex">    
      <DropdownMenu title="Menu" >
        <template v-slot:button>
          <Icon icon="mingcute:user-4-fill"  width="30" height="30"/> 
        </template>
        <div class="px-4 py-3">
            <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
            <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">name@Openapp.com</span>
        </div>
        <ul class="py-2" aria-labelledby="user-menu-button">
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
          </li>
        </ul>
      </DropdownMenu>
    </div>
  </div>
    
  </header>
  

</template>
<style scoped>
.router-link-active {
 color:  #73cc58;
}
</style>
<script setup>
import { Icon } from '@iconify/vue';


</script>