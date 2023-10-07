<script setup>
    import { Icon } from '@iconify/vue';
    defineProps(["image","label","desc","link","categories","collaborators"])
</script>
<template>
    <div @click="navigateTo(`projects/${link}`)" class="w-[100%]  bg-[#f4f4f4]  rounded-lg shadow dark:bg-gray-800 ">
        <img v-show="image" class="rounded-t-lg h-[10em] md:h-[180px] w-[100%] object-cover" :src="image" alt="" />
        <div class="p-5 space-y-2">
            <h5 class="mb-2 flex gap-2 items-center font-bold tracking-tight text-gray-900 dark:text-[#f4f4f4] truncate">{{label}}
                <ShareNetwork
                v-if="link"
                class="p-0 m-0"
                network="facebook"
                :url="'https://open-science-three.vercel.app/search/projects/' + link"
                hashtags="vuejs,vite"
                >
                <Icon icon="majesticons:share" color="[#f4f4f4]" width="10" height="10"/>
                </ShareNetwork></h5>
            <span v-for="item in categories">
                <a href="#" class="mb-2 bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 inline-flex items-center justify-center">{{ item }}</a>
            </span>
            <p class="text-xs mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3 ">{{desc}}</p>
            <div class="flex justify-between items-center">
                <slot></slot>
                <!-- <ButtonPrimary class="hidden md:flex" @handle-click="navigateTo(`/search/projects/${link}`)">
                    Read more
                </ButtonPrimary> -->

                <div class="flex -space-x-4 justify-end">
                    <img  v-for="item in collaborators" class="w-8 h-8 border-2 border-[#f4f4f4] rounded-full dark:border-gray-800" :src="item.image" alt="">
                    <a v-if="collaborators" class="flex items-center justify-center w-8 h-8 text-xs font-medium text-[#f4f4f4] bg-gray-700 border-2 border-[#f4f4f4] rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
                </div>
            </div>
         
        </div>
    </div>
</template>