<script setup>
    defineProps(["image","label","desc","link","categories","collaborators"])
</script>
<template>
    <div class="w-[40%] md:w-[23%] max-w-sm bg-white  rounded-lg shadow dark:bg-gray-800 ">
        <a v-show="image" href="#" class=" max-h-100">
            <img class="rounded-t-lg h-[10em] md:h-[180px] w-[100%] object-cover" :src="image" alt="" />
        </a>
        <div class="p-5 space-y-2">
            <h5 class="mb-2  font-bold tracking-tight text-gray-900 dark:text-white truncate">{{label}}</h5>
            <span v-for="item in categories">
                <a href="#" class="mb-2 bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 inline-flex items-center justify-center">{{ item }}</a>
            </span>
            <p class="text-xs mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3 ">{{desc}}</p>
            <div class="flex justify-between">
                <ButtonPrimary @handle-click="navigateTo(`projects/${link}`)">
                    Read more
                </ButtonPrimary>
                <div class="flex -space-x-4 justify-end">
                    <img  v-for="item in collaborators" class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" :src="item.image" alt="">
                    <a v-if="collaborators" class="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
                </div>
            </div>
         
        </div>
    </div>
</template>