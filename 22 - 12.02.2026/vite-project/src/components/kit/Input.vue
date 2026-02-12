<script setup>
import {ref, defineEmits, defineProps} from "vue";

const emit = defineEmits(['update:modelValue'])
defineProps({
  modelValue: String
})

const handleInput = (e) => {
  console.log(e.target.value)
  emit('update:modelValue', e.target.value)
}

</script>

<template>
  <div class="input-wrapper">
    <input :value="modelValue" @input="handleInput" type="text" >
  </div>
</template>