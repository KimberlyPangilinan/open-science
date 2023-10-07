<template>
    <NavBar/>
    <main class="py-6 mx-auto min-h-[90vh] bg-[#f4f4f4] dark:bg-gray-900 ">
        <widgetProfile>
            <slot/>
        </widgetProfile>
    </main>
</template>
<style scoped>
  .router-link-active {
    background-color:  #73cc58;
    color:[#f4f4f4];
  }
</style>
