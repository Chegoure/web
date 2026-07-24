<script setup>
defineProps({
  page: Number,
  lastPage: Number,
})

const emit = defineEmits(['setPage'])

const setPage = (newPage) => {
  emit('setPage', newPage)
}
</script>

<template>
  <div class="pagination-panel">
    <span v-if="page > 0" @click="setPage(page - 1)" class="panel-switch-page">
      <
    </span>

    <span v-if="page > 0" @click="setPage(page - 1)" class="panel-switch-page">
      {{ page }}
    </span>

    <span class="panel-switch-page panel-switch-page--active">
      {{ page + 1 }}
    </span>

    <span
      v-if="page < lastPage"
      @click="setPage(page + 1)"
      class="panel-switch-page"
    >
      {{ page + 2 }}
    </span>

    <span
      v-if="page < lastPage"
      @click="setPage(page + 1)"
      class="panel-switch-page"
    >
      >
    </span>

    <span
      v-if="page < lastPage - 1"
      @click="setPage(lastPage)"
      class="panel-switch-page"
    >
      ...{{ lastPage + 1 }}
    </span>
  </div>
</template>

<style scoped>
.panel-switch-page {
  cursor: pointer;
  padding: 5px;
  margin: 0 5px;
  background-color: #efe9db;
  border: 5px solid black;
  border-radius: 8px;
  box-shadow: 4px 4px 0 0 rgba(0, 0, 0, 0.9);
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.panel-switch-page:hover {
  transform: translateY(-4px);
  box-shadow: 4px 8px 0 0 rgba(0, 0, 0, 0.9);
}

.pagination-panel {
  display: flex;
  justify-content: center;
  padding-top: 12px;
  margin-bottom: 12px;
}

.panel-switch-page--active {
  background-color: #b3d6d3;
  color: #2e2e2e;
}

@media (max-width: 900px) {
  .pagination-panel {
    flex-wrap: wrap;
    gap: 8px;
  }

  .panel-switch-page {
    margin: 0;
    padding: 8px;
    min-width: 20px;
    text-align: center;
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .panel-switch-page {
    padding: 6px;
    font-size: 10px;
  }
}
</style>
