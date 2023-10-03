<script setup>
  import { Icon } from '@iconify/vue';

  const login=ref(
    {
      email:'',
      password:'',
      agree:''
    }
  )  

  const auth= ref('')
  const isOpen= ref(false)
  onMounted(() => {
    auth.value =localStorage.getItem('auth')
   
  })
  const handleLogout = () => {
    localStorage.removeItem('auth')
    
    return auth.value= false
  }
  const handleLogin = () => {
    localStorage.setItem('auth',true) 
    isOpen.value= false
    return  auth.value= true
  }
</script>

<template>
  <header class="bg-white shadow dark:bg-gray-900 sticky top-0 z-[99]">
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
          <NuxtLink to="/home" class="py-2 px-4 text-gray-900 dark:text-gray-100" aria-current="page">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/search" class=" py-2 px-4 text-gray-900 dark:text-gray-100">About</NuxtLink>
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
    <div class="flex gap-8 items-center align-middle text-gray-400">
      <Icon v-show="auth" icon="jam:messages-f"  width="20" height="20"/> 
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
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" @click="handleLogout">Sign out</a>
          </li>
        </ul>
      </DropdownMenu>
      <ButtonPrimary @handleClick="isOpen= !isOpen" v-else>Login</ButtonPrimary>
      </div>
    </div>
      <!-- Dropdown menu -->

    </div>
  </header>
  <Modal v-if="isOpen" @handleClick="isOpen= false">
    
    <template v-slot:buttons>
    <form class="space-y-6" @submit.prevent="handleLogin">
      <h5 class="font-medium text-gray-900 dark:text-white">Sign in to Open App</h5>

        <FormInput type="email" v-model="login.email" title="Email"/>
        <FormInput type="password" v-model="login.password" title="Password" placeholder="••••••••"/>
      
        <div class="flex flex-col items-start text-xs">
            <a href="#" class="ml-auto text-blue-700 hover:underline dark:text-blue-500">Forgot Password?</a>
            <div class="flex items-start">
              <div class="flex justify-start gap-2 py-4">
                <input type="checkbox" /> <span class="text-gray-800 dark:text-gray-200">I agree to the privacy notice and data processing agreement</span>
              </div>
            </div>
           
        </div>
        <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
        <button type="button" class="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">Sign up with Google<div></div></button>
        <div class="text-xs font-medium text-gray-500 dark:text-gray-300">
            Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
        </div>
    </form>
  </template>
  </Modal>
  <Backdrop v-show=" isOpen"  @handleClick="isOpen=false" />
</template>
<style scoped>
  .router-link-active {
  color:  #73cc58;
  }
</style>
