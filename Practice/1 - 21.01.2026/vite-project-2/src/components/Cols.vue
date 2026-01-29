<script setup>
import {ref} from "vue";

const words1 = ref(['Roman', 'Petya'])
const words2 = ref(['Kostya', 'Vlad'])

const moveWords1 = (word, i) => {
words1.value.splice(i, 1)
words2.value.push(word)
}
const moveWords2 = (word, i) => {
words2.value.splice(i, 1)
words1.value.push(word)
}
</script>

<template>
<div class="container">
  <ul>
    <li v-for="(word, i) in words1" @click="moveWords1(word, i)">{{ word }}</li> 
  </ul>
  <ul>
    <li v-for="(word, i) in words2" @click="moveWords2(word, i)">{{ word }}</li>
  </ul>
</div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
}
</style>