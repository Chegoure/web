<template>
<div
    @click="count++"
    class="box"
    :class="`box-${count}`"
    :style="`background-color: ${color}`" >{{count}}
</div>
</template>

<script setup>
import {ref} from "vue";
const count = ref(0)
const color = ref('#000')

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

setInterval(() => {
  count.value++
  color.value = `#${getRandomInt(0,9)}${getRandomInt(0,9)}${getRandomInt(0,9)}`
}, 1000)
</script>

<style>
.box {
  text-align: center;
  color: white;
  font-size: 72px;
  margin: 250px auto;
  width: 250px;
  height: 250px;
  background-color: #444;
  border: 10px solid yellow;
}
.box-1 {
  background-color: #444;
}
.box-2 {
  background-color: #9e2020;
}
.box-3 {
  background-color: #114949;
}

</style>
