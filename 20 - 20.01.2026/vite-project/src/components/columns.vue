<script setup>
import {ref} from "vue";

const list1 = ref(['Jim', 'Randy'])
const list2 = ref(['Julian', 'Ricky'])

const list1Move = (name, index) => {
  console.log(name, index)
  list1.value.splice(index, 1)
  list2.value.push(name)
}

const list2Move = (name, index) => {
  console.log(name, index)
  list2.value.splice(index, 1)
  list1.value.push(name)
}

</script>

<template>
  <div>
    <ul>
      <li v-for="(name, index) in list1" @click="list1Move(name, index)">{{ name }}</li>
    </ul>
    <ul>
      <li v-for="(name, index) in list2" @click="list2Move(name, index)">{{ name }}</li>
    </ul>
  </div>
</template>

<style scoped>

div {
  display: flex;
  gap: 20px;
}

</style>
