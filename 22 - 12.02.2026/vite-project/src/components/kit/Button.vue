<script setup>
import {defineProps} from "vue";

defineProps({ //Определяем какие пропсы будут в этом комп-те
  type: String // 'primary'
})

</script>

<template>
  <div class="btn" :class="type">
    <slot name="icon"></slot>
    <slot></slot>
  </div>

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