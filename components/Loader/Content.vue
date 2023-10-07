<script setup >
    const props = defineProps(['count'])
</script>
<template>
    <div class="grow py-8 flex flex-wrap items-center justify-center gap-4 max-w-screen-xl  mx-auto z-50 px-8" > 
        <div v-for="i in props.count" class="w-[100%] sm-[40%] md:w-[23%]  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700 animate-pulse" >
            <div class="w-[100%] rounded-t-lg h-[10em] md:h-[180px] object-cover bg-slate-300 dark:bg-gray-800"></div>
            <div class="p-5 h-[8em]"></div>
        </div>
    </div>
</template>