<script setup>
    import { Icon } from '@iconify/vue';
    defineEmits(['handleClick'])
    const user = ref({
    avatar:'https://www.pngkit.com/png/detail/108-1082173_male-profile-face.png',
    name:'Michael Dela Cruz',
    email:'michael.dc@gmail.com'
  })
  const handleLogout = () => {
    setTimeout(() => {
      localStorage.removeItem('auth')
      $toast.success("Logout successfully")
      navigateTo('/login')
    }, 2000); 
  }
</script>

<template>
    <div  class="flex md:hidden  flex-col gap-8 px-8 py-4 w-[80vw] h-screen fixed right-0 top-0 z-[99] bg-slate-50 dark:bg-gray-900">
      <div class="font-bold text-sm mb-4 flex justify-end w-full ">
        <span  @click="$emit('handleClick')" class="!text-gray-800 dark:!text-gray-300"><Icon icon="ph:x-bold" /></span>
      </div>
      <ul class="flex flex-col gap-8 font-medium text-sm ">
        <!-- user information -->
        <div class="flex flex-col items-center gap-2">
          <div class="flex gap-4">
            <img v-if="user.avatar" :src="user.avatar" width="24" height="24" class="object-cover rounded-full border-2 border-gray-300"/>
            <Icon v-else icon="mingcute:user-4-fill"  width="20" height="20"/> 
            <span class="text-gray-800 dark:text-gray-300">Hi {{ user.name.split(" ")[0] }}</span>
          </div>
          <span class="text-gray-800 dark:text-gray-300">{{ user.email }}</span>
        </div>
        <!-- nav items -->
        <li @click="$emit('handleClick')"><NuxtLink to="/home" class="py-2 px-4 text-gray-900 dark:text-gray-100" aria-current="page">Home</NuxtLink></li>
        <DropdownMenu >
          <template v-slot:button>
            <li><NuxtLink class=" py-2 px-4 text-gray-900 dark:text-gray-100">Browse</NuxtLink></li> 
          </template>
          <ul class="py-2" aria-labelledby="user-menu-button">
            <li @click="$emit('handleClick')"><a @click="navigateTo('/search/projects');$emit('handleClick')" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-[#f4f4f4]">Projects</a></li>
            <li @click="$emit('handleClick')"><a @click="navigateTo('/search/collaborators');$emit('handleClick')" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-[#f4f4f4]">Collaborators</a></li>
          </ul>
        </DropdownMenu>
        <li @click="$emit('handleClick')"><NuxtLink to="/user" class="py-2 px-4 text-gray-900 dark:text-gray-100" aria-current="page">Dashboard</NuxtLink></li>
        <li @click="$emit('handleClick')"><NuxtLink to="/home" class="py-2 px-4 text-gray-900 dark:text-gray-100" aria-current="page">Settings</NuxtLink></li>
        <li ><a @click="handleLogout" class="py-2 px-4 text-gray-900 dark:text-gray-100" aria-current="page">Sign out</a></li>
      </ul>
    </div>
    <Backdrop @handleClick="$emit('handleClick')" />
</template>
