<script setup>

defineProps({
  page: Number,
  lastPage: Number
})

const emit = defineEmits(['setPage'])

const setPage = (newPage) => {
  emit('setPage', newPage)
}

</script>

<template>
<div class="pagination-panel">
    <span v-if="page > 0" @click="setPage(page - 1)" class="panel-switch-page"><</span>
    <span class="panel-switch-page">{{page}}</span>
    <span v-if="lastPage > page + 1" @click="setPage(page + 1)" class="panel-switch-page">{{page + 1}}</span>
    <span v-if="lastPage > page + 1" @click="setPage(page + 2)" class="panel-switch-page">{{page + 2}}</span>
    <span v-if="lastPage > page + 1" @click="setPage(page + 1)" class="panel-switch-page">></span>
    <span @click="setPage(lastPage)" class="panel-switch-page"> ...{{lastPage}}</span>
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
  box-shadow:
    4px 4px 0 0 rgba(0, 0, 0, 0.9);
}

.pagination-panel {
  display: flex;
  justify-content: center;
  padding-top: 12px;
}

</style>