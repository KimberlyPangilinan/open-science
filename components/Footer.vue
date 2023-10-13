<script setup>
    import { Icon } from '@iconify/vue';
</script>

<template>
    <footer class="w-full bg-[#f4f4f4] shadow dark:bg-gray-900">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="https://Openapp.com/" class="flex items-center mb-4 sm:mb-0 gap-2">
                    <Icon icon="logos:sensu-icon" width="30" height="30"/>
                    <span class="self-center text-2xl font-semibold [#f4f4f4]space-nowrap dark:text-[#f4f4f4]">Project C.O.R.T</span>
                </a>
                <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">Browse</a>
                    </li>
                    <li @click="navigateTo('/search/projects')">
                        <span class="mr-4 hover:underline md:mr-6">Projects</span>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">Collaborators</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">About</a>
                    </li>
                </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://Openapp.com/" class="hover:underline">Project C.O.R.T</a>. All Rights Reserved.</span>
        </div>
    </footer>
</template>
