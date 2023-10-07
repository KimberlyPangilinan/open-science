<script setup>
  definePageMeta({
        layout: "dashboard",
    })
</script>
<template>
    <div class="w-[100%] px-8 py-4 ">
        <header class="flex justify-between">
            <h1 class="uppercase font-bold text-gray-800 dark:text-[#f4f4f4] text-sm px-8 xl:px-0">Manage as Creator</h1>
            <div>
                <ButtonPrimary @handleClick="">Add Projects <Icon icon="ion:add-outline" /></ButtonPrimary>
            </div>
        </header>
        <div  class="py-8  px-8 xl:px-0 flex flex-wrap items-center justify-center gap-2 max-w-screen-xl w-100 mx-auto z-50">
        <Card v-for="item in About" :label="item.label"  :desc="item.desc" :link="item.link" class="w-full  sm:w-[40%] md:w-[24%] ">
            <div class="w-full justify-end flex gap-2">
                <ButtonPrimary class="hidden md:flex" @handle-click="navigateTo(`/search/projects/${link}`)">
                        View
                </ButtonPrimary>
                <ButtonPrimary class="hidden md:flex !bg-transparent !border-red-500 !text-red-500 dark:!text-blue-500 border dark:border-blue-500" @handle-click="navigateTo(`/search/projects/${link}`)">
                        Delete
                </ButtonPrimary>
            </div>

        </Card>
    </div>
    </div>
</template>