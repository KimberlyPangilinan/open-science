<template>
            <div class="flex">
                <div class="w-full max-w-[20em] h-[80vh] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex flex-col items-center p-10">
                        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://www.pngkit.com/png/detail/108-1082173_male-profile-face.png" alt="Bonnie image"/>
                        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                        <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                        <div class="mt-1">
                            <span class="flex justify-center flex-wrap">
                                <a href="#" class="mb-2 bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 inline-flex items-center justify-center">PHP</a>
                                <a href="#" class="mb-2 bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 inline-flex items-center justify-center">JavaScript</a>
                                <a href="#" class="mb-2 bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 inline-flex items-center justify-center">PHP</a>
                                <a href="#" class="mb-2 bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 inline-flex items-center justify-center">JavaScript</a>
                                <a href="#" class="mb-2 bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 inline-flex items-center justify-center">PHP</a>
                            </span>
                        </div> 
                        <div class="flex mt-4 space-x-3 md:mt-2">
                            <NuxtLink to="/user/collaborator" class="px-2 py-1 text-sm">As Collaborator</NuxtLink>
                            <NuxtLink to="/user/creator" class="px-2 py-1 text-sm">As Creator</NuxtLink>
                        </div>
                        <div class="my-2">
                            <p class="text-xs mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3 ">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.</p>
                        </div>
                    </div>
                </div>
                <section class="bg-red">ss
                    <slot/>
                </section>
            </div>
</template>
<style scoped>
  .router-link-active {
    background-color:  #73cc58;
    color:white;
  }
</style>