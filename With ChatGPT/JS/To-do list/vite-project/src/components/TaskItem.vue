<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
    task: Object
})

const emit = defineEmits(['remove'])

</script>

<template>
    <li>
        <input type="checkbox" v-model="task.done">

        <span v-if="!task.done">
            {{ task.name }}
        </span>
        <span v-else style="text-decoration: line-through">
            {{ task.name }}
        </span>

        <button @click="emit('remove', task.id)">❌</button>
    </li>
</template>