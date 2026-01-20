<script setup>
import { ref } from 'vue'

const column1 = ref(['Привет', 'Мир', 'Vue', 'JS'])
const column2 = ref(['React', 'Angular', 'Node.js', 'Python'])

const moveWord = (word, fromColumn) => {
  if (fromColumn === 1) {
    column1.value = column1.value.filter(item => item !== word)
    column2.value.push(word)
  } else {
    column2.value = column2.value.filter(item => item !== word)
    column1.value.push(word)
  }
}
</script>

<template>
  <div class="container">
    <div class="column">
      <h3>Столбик 1</h3>
      <ul>
        <li
            v-for="word in column1"
            :key="word"
            @click="moveWord(word, 1)"
        >
          {{ word }}
        </li>
      </ul>
    </div>

    <div class="column">
      <h3>Столбик 2</h3>
      <ul>
        <li
            v-for="word in column2"
            :key="word"
            @click="moveWord(word, 2)"
        >
          {{ word }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 20px;
}

.column {
  border: 1px solid #ccc;
  padding: 10px;
  width: 200px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  cursor: pointer;
  padding: 5px;
  border: 1px solid #ddd;
  margin: 5px 0;
  text-align: center;
}

li:hover {
  background-color: #f0f0f0;
}
</style>
