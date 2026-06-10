<script setup>

const props = defineProps({
  modelValue: Boolean,
})

const emit = defineEmits(['update:modelValue'])

const handleSwitch = () => {
  emit('update:modelValue', !props.modelValue)
}

</script>

<template>
  <div @click="handleSwitch" class="checkbox">
    <div v-if="modelValue" class="filled"></div>
  </div>
</template>

<style scoped>

.checkbox {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 5px;
  width: 50px;
  height: 50px;
  border: 1px solid gray;
  border-radius: 10px;
  background-color: #f5f5f5;
}

.filled {
  background-color: green;
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
</style>