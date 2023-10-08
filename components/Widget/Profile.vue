<template>
            <div class="flex flex-col gap-4 md:flex-row min-h-screen bg-[#f4f4f4]">
                <div class=" md:max-w-[20em] md:h-[80vh] flex flex-col justify-between  dark:bg-gray-800 rounded-lg shadow ml-4">
                    <div class="flex flex-col items-center p-4 md:p-10">
                        <img class="w-16 h-16 md:w-24 md:h-24  mb-3 rounded-full shadow-lg" src="https://www.pngkit.com/png/detail/108-1082173_male-profile-face.png" alt="Bonnie image"/>
                        <h5 class="mb-1 md:text-xl font-medium text-gray-900 dark:text-[#f4f4f4]">Bonnie Green</h5>
                        <span class="text-xs md:text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                        <div class="mt-1">
                            <span class="flex justify-center flex-wrap">
                                <a href="#" class="mb-2 bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 inline-flex items-center justify-center">PHP</a>
                                <a href="#" class="mb-2 bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 inline-flex items-center justify-center">JavaScript</a>
                                <a href="#" class="mb-2 bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 inline-flex items-center justify-center">PHP</a>
                                <a href="#" class="mb-2 bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 inline-flex items-center justify-center">JavaScript</a>
                                <a href="#" class="mb-2 bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 inline-flex items-center justify-center">PHP</a>
                            </span>
                        </div> 
                        <div class="flex justify-between  w-full  space-x-3 md:mt-2 text-center">
                            <NuxtLink to="/user/collaborator" class="px-2 py-1 text-xs w-full text-gray-900 dark:text-white">As Collaborator</NuxtLink>
                            <NuxtLink to="/user/creator" class="px-2 py-1 text-xs w-full text-gray-900 dark:text-white">As Creator</NuxtLink>
                        </div>
                        <div class="my-2">
                            <p class="text-xs  font-normal text-gray-700 dark:text-gray-400 line-clamp-3 ">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.</p>
                        </div>
                    </div>
                    <div class="flex flex-col px-4 py-2  md:py-8 ">
                        <ButtonPrimary  class="border-2 border-custom-primary !text-custom-primary bg-transparent dark:!text-[#f0f0f0] dark:!border-[#f0f0f0]  dark:!bg-gray-700">Edit Profile</ButtonPrimary>
                    </div>
                </div>
                <section class="grow flex">
                    <slot/>
                </section>
            </div>
</template>
<style scoped>
  .router-link-active {
   
    font-weight:bold;
  }
</style>