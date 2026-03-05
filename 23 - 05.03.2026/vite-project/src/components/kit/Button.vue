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
  display: flex;
  justify-content: center;
  font-size: 20px;
  padding: 17px 16px;
  color: white;
  background: var(--primary-100);
  border-radius: 12px;
  width: 100%;
  cursor: pointer;
  transition: all .2s;
}
.btn:hover {
  background: var(--primary-90);
}
.info {
  background-color: #a2a2b6;
}
.success {
  background-color: #90ec90;
}

</style>
