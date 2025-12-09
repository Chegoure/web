<script setup>
  import {ref} from "vue";
  import myFirstComponent from "./components/myFirstComponent.vue"

  const count = ref(1)
</script>

<template>
  <div>
    <h1 @click="count++">hi world {{count}}</h1>
    <myFirstComponent></myFirstComponent>
  </div>
</template>

