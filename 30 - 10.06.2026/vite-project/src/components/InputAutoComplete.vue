<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  options: Array,
  modelValue: Number
})

const emit = defineEmits(['update:modelValue'])

const selectUser = (user) => {
  subString.value = user.name
  emit('update:modelValue', user.id)

}
const subString = ref('')

const filtered = computed(() => {
  return props.options.filter(user => user.name.includes(subString.value))
})
</script>

<template>
  <input v-model="subString" type="text">
  <ul>
    <li @click="selectUser(user)" v-for="user in filtered">{{user.name}}</li>
  </ul>
</template>

<style scoped>

</style>