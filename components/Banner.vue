<script setup>
    import { Icon } from '@iconify/vue';
    
    const input = ref('')
    const handleSubmit = () => {
        navigateTo(`/search/projects/${input.value}`)
        console.log(input.value)
    }
</script>

<template>
    <section class=" bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <div class="flex flex-col gap-4 py-8 px-8 mx-auto max-w-[30em] text-center z-10 relative md:max-w-screen-xl lg:py-16 ">
            <h1 class="mb-4 text-2xl font-bold tracking-tight leading-none text-gray-900 md:text-3xl dark:text-[#f4f4f4]">We invest in the world’s potential</h1>
            <p class="mb-8 text-sm font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">Insert your tagline. Here at Open App we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
            
            <form @submit.prevent="handleSubmit" class="w-full max-w-md mx-auto">   
                <label class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-[#f4f4f4]">Search</label>
                <div class="relative">
                    <input v-model="input" type="text" id="default-email" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#f4f4f4] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-[#f4f4f4] dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search projects, collaborators..." required>
                    <button type="submit" class="text-[#f4f4f4] absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Icon icon="fe:search" /></button>
                </div>
            </form>
            
        </div>
        <div class="bg-gradient-to-b from-blue-50 to-transparent dark:from-gray-950 w-full h-[70vh] absolute top-0 left-0 z-0"></div>
    </section>

</template>
