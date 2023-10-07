<script setup>
    import { Icon } from '@iconify/vue';
    defineProps(["image","label","desc","link","categories","collaborators"])
</script>
<template>
    <div class="flex flex-col w-full min-h-[74vh] bg-white  rounded-lg shadow dark:bg-gray-800 md:flex-row">
        <img class="rounded-t-lg w-[100%] max-w-none max-h-[24vh] md:max-h-none md:max-w-[45vw] object-cover" :src="image" alt="" />
        <div class="p-4 md:p-12  flex flex-col gap-2">
            <div>
                <h2 class="w-full justify-between mb-2 flex gap-2 items-center font-bold text-gray-900 dark:text-white truncate">
                {{label}}
                <ShareNetwork
                v-if="link"
                class="p-0 m-0 "
                network="facebook"
                :url="'https://open-science-three.vercel.app/search/projects/' + link"
                hashtags="vuejs,vite"
                >
                    <Icon icon="majesticons:share"  width="10" height="10"/>
                </ShareNetwork>
            </h2>
            <div class="flex flex-col  gap-2 md:gap-4 ">
                <header>
                    <h3 class="flex flex-col gap-4 text-xs font-semibold opacity-40">ABOUT THIS PROJECT<hr/></h3>
                </header>
                <article>
                    <div>
                        <span v-for="item in categories">
                            <a href="#" class="mb-2 bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 inline-flex items-center justify-center">{{ item }}</a>
                        </span>
                    </div> 
                   
                    <p class="text-xs mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3 ">{{desc}}</p>
                    <div class="flex -space-x-4 justify-end">
                        <img  v-for="item in collaborators" class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" :src="item.image" alt="">
                        <a v-if="collaborators" class="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
                    </div>
                </article> 
                <header>
                    <h3 class="flex flex-col gap-4 text-xs font-semibold opacity-40">COLLABORATORS NEEDED<hr/></h3>
                </header>
                <article class="flex justify-between">
                    <div>
                        <span v-for="item in categories">
                            <a href="#" class="mb-2 bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 inline-flex items-center justify-center">{{ item }}</a>
                        </span>
                    </div> 
                    <span>
                        <a href="#" class="mb-2 bg-gray-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-100 dark:text-blue-400 border border-blue-400 inline-flex items-center justify-center">Intermediate Level</a>
                    </span>
                </article>      
                <div class="flex justify-between items-center">
                    <ButtonPrimary class="hidden md:flex" @handle-click="navigateTo(`projects/${link}`)">
                        Read more
                    </ButtonPrimary>
                </div> 
            </div>
            </div>
           
         
        </div>
    </div>
</template>