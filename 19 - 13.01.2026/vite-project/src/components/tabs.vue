<script setup>
import {ref} from "vue";

const tab = ref(0)

</script>

<template>
  <div class="tabs">
    <ul class="tab-list">
      <li><a @click="tab = 0">Сосиски</a></li>
      <li><a @click="tab = 1">Пиво</a></li>
      <li><a @click="tab = 2">Бублики</a></li>
      <li><a @click="tab = 3">Тусовки</a></li>
    </ul>
    {{tab}}

    <div v-if="tab === 0" id="sausages" class="tab-content">
      <h2>Сосиски</h2>
      <p>Сочные, ароматные сосиски — идеальный выбор для быстрого перекуса!</p>
    </div>

    <div v-if="tab === 1" id="beer" class="tab-content">
      <h2>Пиво</h2>
      <p>Холодное пиво — лучший напарник для сосисок и хорошей компании.</p>
    </div>

    <div v-if="tab === 2" id="bagels" class="tab-content">
      <h2>Бублики</h2>
      <p>Сдобные, хрустящие бублики с кунжутом или маком — просто объедение!</p>
    </div>

    <div v-if="tab === 3" id="parties" class="tab-content">
      <h2>Тусовки</h2>
      <p>Где сосиски, пиво и бублики — там и тусовка! Заходи, не стесняйся!</p>
    </div>
  </div>
</template>

<style scoped>
.tabs {
  max-width: 600px;
  margin: 0 auto;
}

/* Стили для вкладок */
.tab-list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  border-bottom: 2px solid #ccc;
}

.tab-list li {
  margin: 0;
}

.tab-list a {
  display: block;
  padding: 12px 20px;
  text-decoration: none;
  color: #333;
  background: #e0e0e0;
  border: 1px solid #ccc;
  border-bottom: none;
  border-radius: 6px 6px 0 0;
  transition: background 0.3s;
}

.tab-list a:hover {
  background: #d0d0d0;
}

/* Активная вкладка */
.tab-content {
  padding: 20px;
  border: 1px solid #ccc;
  border-top: none;
  background: white;
  border-radius: 0 0 6px 6px;
}

.tab-content:target {
  display: block;
}

/* Первая вкладка активна по умолчанию */
#sausages {
  display: block;
}
</style>
