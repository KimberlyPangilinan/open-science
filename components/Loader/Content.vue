<script setup >
    const props = defineProps(['count'])
</script>
<template>
    <div class="flex flex-wrap items-center justify-center gap-4 max-w-screen-xl w-100 py-8 mx-auto" > 
        <div v-for="i in props.count" class="w-[40%] md:w-[23%]  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700 animate-pulse" >
            <a href="#" class="max-h-100">
            <div class="w-[100%] rounded-t-lg h-[10em] md:h-[180px] object-cover bg-slate-300 dark:bg-gray-800"></div>
        </a>
        <div class="p-5 h-[8em]">
           
        </div>
        </div>
    </div>
</template>