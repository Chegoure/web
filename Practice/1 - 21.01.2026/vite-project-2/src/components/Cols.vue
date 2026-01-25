<script setup>
import {ref} from "vue";

const col1 = ref(['coffee', 'beer'])
const col2 = ref(['tea', 'soda'])

const moveFooOne = (drink, i) => {
  col1.value.splice(i, 1)
  col2.value.push(drink)
}

const moveFooTwo = (drink, i) => {
  col2.value.splice(i, 1)
  col1.value.push(drink)
}

</script>

<template>
<div class="container">
  <ul>
    <li @click="moveFooOne(drink, i)" v-for="(drink, i) in col1">{{ drink }}</li>
  </ul>
  <ul>
    <li @click="moveFooTwo(drink, i)" v-for="(drink, i) in col2">{{ drink }}</li>
  </ul>
</div>
</template>

<style scoped>

</style>
