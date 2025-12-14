<template>
  <h1 @click="foo">my component {{arr}}</h1>
</template>

<script setup>
  import {ref} from "vue";

  const arr = ref([1, 2, 3, 4, 5])
  const foo = () => {
   arr.value = arr.value.map(n => n*2)
  }
</script>