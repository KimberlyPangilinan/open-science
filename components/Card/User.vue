<script setup>
defineProps(["desc","image","label","categories"])
</script>
<template>
<div class="w-full max-w-sm bg-[#f4f4f4] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex flex-col items-center px-6 py-4">
        <img class="w-14 h-14 mb-3 rounded-full " :src="image" alt="Bonnie image"/>
        <h5 class="mb-1 text-normal font-medium text-gray-900 dark:text-[#f4f4f4]">Bonnie Green</h5>
        <span class="text-xs text-gray-500 dark:text-gray-400">Visual Designer</span>
        <div class="mt-1 min-h-[2em]">
            <span v-for="item in categories">
                <a href="#" class="mb-2 bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 inline-flex items-center justify-center">{{ item }}</a>
            </span>
        </div> 
        <div class="flex mt-4 space-x-3 md:mt-2">
            <ButtonPrimary>Invite</ButtonPrimary>
            <ButtonPrimary class="bg-white text-gray-600">Message</ButtonPrimary>
        </div>
        <div class="my-2 min-h-[4em]">
            <p class="text-xs mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3 ">{{desc}}</p>
        </div>
    </div>
</div>
</template>