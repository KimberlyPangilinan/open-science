<script setup >
    const props = defineProps(['count'])
</script>
<template>
    <div class="grow py-8 flex flex-wrap items-center justify-center gap-4 max-w-screen-xl  mx-auto z-50 px-8" > 
        <div v-for="i in props.count" class="flex flex-col w-full min-h-[20vh] max-h-[74vh] bg-white  rounded-lg shadow dark:bg-gray-800 md:flex-row" > 
                <div class="rounded-lg w-[50%] max-w-none max-h-[24vh] md:max-h-none md:max-w-[45vw] bg-gray-100 dark:bg-gray-700"></div>
                <div class=" rounded-lg w-[100%] h-full bg-gray-50"></div>
        </div>
    </div>
</template>