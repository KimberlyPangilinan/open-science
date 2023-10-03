<script setup>
    defineProps(["image","label","desc","link"])
</script>
<template>
    <div class="w-[40%] md:w-[23%] max-w-sm bg-white  rounded-lg shadow dark:bg-gray-800 ">
        <a href="#" class="max-h-100">
            <img class="rounded-t-lg h-[10em] md:h-[180px] w-[100%] object-cover" :src="image" alt="" />
        </a>
        <div class="p-5">
            <h5 class="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">{{label}}</h5>
            <p class="text-xs mb-3 font-normal text-gray-700 dark:text-gray-400">{{desc}}</p>
           <ButtonPrimary @handle-click="navigateTo(link)">
                Read more
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
           </ButtonPrimary>
        
        </div>
    </div>
</template>