<script setup>
import {defineProps} from "vue";

defineProps({
  text: String,
  type: String
})


</script>

<template>
  <div class="btn" :class="type">{{ text }}</div>

</template>

<style scoped>
.btn {
  display: inline-block;
  padding: 3px 7px;
  background: #8e8eef;
  border-radius: 15px;
  margin-left: 10px;
}
.primary {
  background-color: #2f43ca;
}
.info {
  background-color: #a2a2b6;
}
.success {
  background-color: #90ec90;
}

</style>