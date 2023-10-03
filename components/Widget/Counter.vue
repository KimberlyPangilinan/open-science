<script setup>
    defineProps(['value'])

    onMounted(() => {
        const counters = document.querySelectorAll(".counter");
        counters.forEach((counter) => {
        counter.innerText = "0";
        const updateCounter = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            const increment = target / 200;
            if (count < target) {
            counter.innerText = `${Math.ceil(count + increment)}`;
            setTimeout(updateCounter, 1);
            } else counter.innerText = target;
        };
        updateCounter();
        });
    })
</script>

<template>
    <div class="counter font-bold text-xl text-gray-900 dark:text-gray-200"  :data-target="value"></div>
</template>