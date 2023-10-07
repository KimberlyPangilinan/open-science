<script setup>
defineProps(["desc","image","label","categories"])
</script>
<template>
<div class="w-full max-w-sm bg-[#f4f4f4] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex flex-col items-center p-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" :src="image" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-[#f4f4f4]">Bonnie Green</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
        <div class="mt-1">
            <span v-for="item in categories">
                            <a href="#" class="mb-2 bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 inline-flex items-center justify-center">{{ item }}</a>
            </span>
        </div> 
        <div class="flex mt-4 space-x-3 md:mt-2">
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-[#f4f4f4] bg-custom-primary rounded-lg hover:bg-custom-accent focus:ring-4 focus:outline-none">Invite</a>
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-[#f4f4f4] border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-[#f4f4f4] dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
        </div>
        <div class="my-2">
            <p class="text-xs mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3 ">{{desc}}</p>
        </div>
    </div>
</div>
</template>