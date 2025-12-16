<script setup>
  import {ref} from "vue";
  import BurgerList from "./components/burgerList.vue";

  const count = ref(1)
</script>

<template>
  <div>
    <h1 @click="count++">hi world {{count}}</h1>
    <burger-list></burger-list>
  </div>
</template>

