<script setup>

  const route = useRoute()

</script>

<template>
    <div>
        <span class="uppercase font-bold">{{ route.params.id }}</span>
    </div>
</template>