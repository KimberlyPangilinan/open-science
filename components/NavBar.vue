<script setup>
  import { Icon } from '@iconify/vue';
  const { $toast } = useNuxtApp();
  const menuOpen=ref(false)

  const isOpen= ref(false)
  const loading=ref(false)
 
  const handleLogout = () => {
    setTimeout(() => {
      localStorage.removeItem('auth')
      $toast.success("Logout successfully")
      navigateTo('/login')
    }, 2000); 
  }

  const user = ref({
    avatar:'https://www.pngkit.com/png/detail/108-1082173_male-profile-face.png',
    name:'Michael Dela Cruz',
    email:'michael.dc@gmail.com'
  })

</script>
<template>
  <header class="bg-[#f4f4f4] shadow dark:bg-gray-900 sticky top-0 z-[99]">
    <div class="w-full md:max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <NuxtLink to="https://project-cort.vercel.app/" class="flex items-center gap-2">
        <Icon icon="logos:sensu-icon" width="30" height="30"/>
        <span class="self-center text-xl font-semibold [#f4f4f4]space-nowrap dark:text-[#f4f4f4]">Project C.O.R.T.</span>
    </NuxtLink>

    <button type="button" @click="menuOpen= !menuOpen" class="flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
      <Icon icon="ion:menu" />
    </button>
    <div class="items-center justify-between hidden w-full md:flex md:w-auto" >
      <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-[#f4f4f4] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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
          <li><a @click="navigateTo('/search/projects')" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-[#f4f4f4]">Projects</a></li>
          <li><a @click="navigateTo('/search/collaborators/')" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-[#f4f4f4]">Collaborators</a></li>
        </ul>
      </DropdownMenu>
      </ul>
    </div>
    <div class="hidden md:flex gap-8 items-center align-middle text-gray-300">
      <Icon class="hidden md:flex"  icon="jam:messages-f" @click="navigateTo('/chat/')" width="20" height="20"/> 
      <div class="hidden md:flex">    
        <DropdownMenu title="Menu">
          <template v-slot:button>
            <img v-if="user.avatar" :src="user.avatar" width="24" height="24" class="object-cover rounded-full border-2 border-gray-300"/>
            <Icon v-else icon="mingcute:user-4-fill"  width="20" height="20"/> 
          </template>
          <div class="px-4 py-3">
              <span class="block text-sm text-gray-900 dark:text-[#f4f4f4]">{{user.name}}</span>
              <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">{{user.email}}</span>
          </div>
          <ul class="py-2" aria-labelledby="user-menu-button">
            <li 
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-[#f4f4f4]"
              @click="navigateTo('/user')">
              Dashboard
            </li>
            <li 
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-[#f4f4f4]" 
              @click="handleLogout">
              Sign out
            </li>
          </ul>
        </DropdownMenu>
      </div>
    </div>
    </div>
  </header>
  <Sidebar v-if="menuOpen" @handleClick="menuOpen= false" class="flex md:hidden"/>
  <Backdrop v-show=" isOpen || menuOpen"  @handleClick="isOpen=false, menuOpen = false" />
</template>
<style scoped>
  .router-link-active {
    color:  #73cc58;
  }
</style>
