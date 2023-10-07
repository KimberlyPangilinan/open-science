<script setup>
  import { Icon } from '@iconify/vue';

  const login=ref(
    {
      email:'',
      password:'',
      agree:''
    }
  )  
  const menuOpen=ref(false)
  const auth= ref('')
  const isOpen= ref(false)
  const loading=ref(false)
  onMounted(() => {
    auth.value =localStorage.getItem('auth')
   
  })
  const handleLogout = () => {
    localStorage.removeItem('auth')
    
    return auth.value= false
  }
  const handleLogin = () => {
    loading.value= true
    setTimeout(() => {
      loading.value= false
      localStorage.setItem('auth',true) 
      isOpen.value= false
    }, 2000);
    
    return  auth.value= true
  }
</script>

<template>
  <header class="bg-white shadow dark:bg-gray-900 sticky top-0 z-[99]">
    <div class="w-full md:max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <NuxtLink to="https://open-science-three.vercel.app/" class="flex items-center gap-2">
        <Icon icon="logos:sensu-icon" width="30" height="30"/>
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Open Site</span>
    </NuxtLink>

    <button type="button" @click="menuOpen= !menuOpen" class="flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
      <Icon icon="ion:menu" />
    </button>
    <div class="items-center justify-between hidden w-full md:flex md:w-auto" >
      <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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
          <li><a @click="navigateTo('/search/projects')" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Projects</a></li>
          <li><a @click="navigateTo('/search/collaborators/')" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Collaborators</a></li>
        </ul>
      </DropdownMenu>
      </ul>
    </div>
    <div class="hidden md:flex gap-8 items-center align-middle text-gray-300">
      <Icon class="hidden md:flex" v-show="auth" icon="jam:messages-f"  width="20" height="20"/> 
      <div class="hidden md:flex">    
      <DropdownMenu title="Menu" v-if="auth">
        <template v-slot:button>
          <Icon icon="mingcute:user-4-fill"  width="20" height="20"/> 
        </template>
        <div class="px-4 py-3">
            <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
            <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">name@Openapp.com</span>
        </div>
        <ul class="py-2" aria-labelledby="user-menu-button">
          <li><a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a></li>
          <li><a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" @click="handleLogout">Sign out</a></li>
        </ul>
      </DropdownMenu>
      <ButtonPrimary @handleClick="isOpen= !isOpen" v-else>Login</ButtonPrimary>
      </div>
    </div>
    </div>
  </header>
  <Sidebar v-if="menuOpen" @handleClick="menuOpen= false" class="flex md:hidden"/>
  <ModalLogin v-if="isOpen" @handleClick="isOpen= false"/>
  
  <Backdrop v-show=" isOpen || menuOpen"  @handleClick="isOpen=false, menuOpen = false" />
</template>
<style scoped>
  .router-link-active {
    color:  #73cc58;
  }
</style>
