<script setup>
import {ref} from "vue";

const column1 = ref(['Cory', 'Trevor'])
const column2 = ref(['J-Rock', 'Sam'])

const moveFromCol1 = (dude, index) => {
  column1.value.splice(index, 1)
  column2.value.push(dude)
}
const moveFromCol2 = (dude, index) => {
  column2.value.splice(index, 1)
  column1.value.push(dude)
}

</script>

<template>
  <div class="container">
    <ul>
      <li v-for="(dude, index) in column1" @click="moveFromCol1(dude, index)">{{ dude }}</li>
    </ul>
    <ul>
      <li v-for="(dude, index) in column2" @click="moveFromCol2(dude, index)">{{ dude }}</li>
    </ul>
  </div>
</template>

<style scoped>

.container {
  display: flex;
  gap: 24px;
  padding: 24px;
  background: #0f1115;
  min-height: 240px;
  font-family: Inter, system-ui, -apple-system, sans-serif;
  border-radius: 20px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 12px;
  width: 220px;
  background: #161a22;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}

li {
  padding: 12px 14px;
  margin-bottom: 8px;
  border-radius: 8px;
  background: #1f2533;
  color: #e6e9f0;
  cursor: pointer;
  transition:
      background 0.2s ease,
      transform 0.15s ease,
      box-shadow 0.15s ease;
}

li:last-child {
  margin-bottom: 0;
}

li:hover {
  background: #2a3350;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
}

li:active {
  transform: translateY(0);
  background: #33406a;
}

</style>