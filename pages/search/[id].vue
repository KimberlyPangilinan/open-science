<script setup>
  const route = useRoute()
  //const { data: mountain } = await useFetch(`https://api.nuxtjs.dev/mountains/${route.params.slug}`)
</script>

<template>
  <div>
   {{ route.params.id }}
  </div>
</template>