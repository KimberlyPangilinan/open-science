<script setup>
  import { Icon } from '@iconify/vue';

  definePageMeta({
    middleware: 'guest',
    layout: "empty",
  })

  const { $toast } = useNuxtApp();
  const loginModal = ref(false)
  const signupModal = ref(false)
  const login = ref({
    email:'',
    password:'',
    agree:''
  })  
  const signUp=ref({
    email:'',
    password:'',
    confirmPassword:'',
    agree:''
  })  
  const loading=ref({
    email:false,
    google:false
  })
  const handleLogin = () => {
    loading.value.email= true
    setTimeout(() => {
      loading.value.email= false
      localStorage.setItem('auth',true) 
      navigateTo("/home")
      $toast.success("Login successfully")
    }, 2000); 
  }
  const handleSignUp = () => {
    loading.value.email= true
    setTimeout(() => {
      loading.value.email= false
      localStorage.setItem('auth',true) 
      navigateTo("/home")
      $toast.success("Login successfully")
    }, 2000); 
  }
</script>


<template>    
  <section class="h-[100vh] flex flex-col justify-center items-center bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
    <div class="flex flex-col gap-4 py-8 px-8 mx-auto max-w-[30em] text-center z-10 relative md:max-w-screen-xl lg:py-16 ">        <h1 class="mb-4 text-2xl font-bold tracking-tight leading-none text-gray-900 md:text-3xl dark:text-[#f4f4f4]">We invest in the world’s potential</h1>
      <p class="mb-8 text-sm font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">Saka ko na change design gawin mo muna. Insert your tagline. Here at Open App we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
      <div class="flex items-center justify-center gap-4">
        <ButtonPrimary @handleClick="loginModal = true" class="z-[90]" >Login</ButtonPrimary>
        <ButtonPrimary @handleClick="signupModal = true" class="z-[90] bg-transparent border-2 border-custom-primary !text-custom-primary" >Sign Up</ButtonPrimary>
      </div> 
    </div>

    <div class="flex flex-wrap gap-2 md:gap-8 max-w-screen-xl mx-auto px-4 md:px-8 justify-around">
      <CardTransparent value="102+102" label="Countries represented" />
      <CardTransparent value="1482" label="Open Projects" @click="navigateTo('/search/projects')"/>
      <CardTransparent value="1093" label="Open Science"/>
      <CardTransparent value="1093" label="Collaborators" @click="navigateTo('/search/collaborators')"/>
    </div>
    <div class="bg-gradient-to-b from-blue-50 to-transparent dark:from-gray-950 w-full h-[70vh] absolute top-0 left-0 z-0"></div>
  </section>


  <Modal v-if="loginModal" @handleClick="loginModal= false">
    <template v-slot:buttons>
      <form class="space-y-6" @submit.prevent="handleLogin()">
        <h5 class="font-medium text-gray-900 dark:text-[#f4f4f4]">Sign in to Open App</h5>
          <FormInput type="email" v-model="login.email" title="Email" required/>
          <FormInput type="password" v-model="login.password" title="Password" placeholder="••••••••" required/>
          <div class="flex flex-col items-start text-xs">
            <a href="#" class="ml-auto text-blue-700 hover:underline dark:text-blue-500">Forgot Password?</a>
              <div class="flex items-start">
                <div class="flex justify-start gap-2 py-4">
                  <input type="checkbox" v-model="login.agree" required/> <span class="text-gray-800 dark:text-gray-200">I agree to the privacy notice and data processing agreement</span>
                </div>
              </div>   
          </div>
          <ButtonState :state="loading.email" type="submit" class="w-full ">Login to your account</ButtonState>
          <ButtonState :state="loading.google" type="submit" class="w-full bg-blue-300 disabled:bg-blue-100">Sign in with Google</ButtonState>
          <div class="text-xs font-medium text-gray-500 dark:text-gray-300">
            Not registered? 
            <a href="#" @click="loginModal = false;signupModal = true" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
          </div>
        </form>
    </template>
    </Modal>
    <Modal v-if="signupModal" @handleClick="signupModal= false" >
      <template v-slot:buttons>
        <form class="space-y-6" @submit.prevent="handleSignUp()">
          <h5 class="font-medium text-gray-900 dark:text-[#f4f4f4]">Sign up to Open App</h5>
            <FormInput type="email" v-model="signUp.email" title="Email" required/>
            <FormInput type="password" v-model="signUp.password" title="Password" placeholder="••••••••" required/>
            <FormInput type="password" v-model="signUp.confirmPassword" title="Confirm Password" placeholder="••••••••" required/>
            <div class="flex flex-col items-start text-xs">
                <div class="flex items-start">
                  <div class="flex justify-start gap-2 py-4">
                    <input type="checkbox" v-model="signUp.agree" required /> <span class="text-gray-800 dark:text-gray-200">I agree to the privacy notice and data processing agreement</span>
                  </div>
                </div>  
            </div>
            <ButtonState :state="loading.email" type="submit" class="w-full ">Sign up your account</ButtonState>
            <ButtonState :state="loading.google" type="submit" class="w-full bg-blue-300 disabled:bg-blue-100">Sign up with Google</ButtonState>
            <div class="text-xs font-medium text-gray-500 dark:text-gray-300">
                Already registered? <a href="#" @click="signupModal = false;loginModal = true" class="text-blue-700 hover:underline dark:text-blue-500">Login your account</a>
            </div>
        </form>
      </template>
    </Modal>
</template>
