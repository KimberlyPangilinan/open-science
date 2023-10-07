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
    <form @submit.prevent="" class="flex items-center justify-center fixed inset-0 w-screen h-screen bg-[#e9e9e96e] z-50">
      <div class="flex flex-col items-center gap-3 absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] px-6 py-8 rounded-sm bg-white dark:bg-gray-800 shadow-md  text-center" :style="{ borderColor: color}">
        <div class="font-bold text-sm mb-4 w-full flex justify-end">
            <slot> </slot> <span @click="$emit('handleClick')"><Icon icon="ph:x-bold" /></span>
        </div>
        <div class="flex gap-4 py-2 justify-center w-[100%]">
          <form class="space-y-6" @submit.prevent="handleLogin()">
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
        <ButtonState :state="loading" type="submit" class="w-full ">Login to your account</ButtonState>
        <ButtonState :state="loading" type="submit" class="w-full bg-blue-300 disabled:bg-blue-200">Sign up with Google</ButtonState>
        <div class="text-xs font-medium text-gray-500 dark:text-gray-300">
            Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
        </div>
    </form>
        </div>
        </div>
    </form>
  </template>
