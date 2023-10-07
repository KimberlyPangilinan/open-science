<script setup>
    defineProps(['title', 'readonly', 'required', 'type','modelValue','error','placeholder','pattern'])
    defineEmits(['update:modelValue'])
</script>
<template>
     <div class="w-full flex flex-col gap-2">
            <label for="email" class="text-left text-xs font-medium text-gray-600 dark:text-[#f4f4f4]">{{ title }}</label>
            <input 
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
                :type="type"
                :readonly="readonly"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-[#f4f4f4]" 
                :placeholder="placeholder" 
                required>
        </div>
</template>