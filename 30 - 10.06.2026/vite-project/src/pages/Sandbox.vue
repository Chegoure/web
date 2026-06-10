<script setup>
import CheckBox from '@/components/CheckBox.vue'
import InputAutoComplete from '@/components/InputAutoComplete.vue'
import { computed, ref } from 'vue'

const needSauce = ref(true)
const selectedUserId = ref(0)

const options = ref([
  {id: 1, name: 'Вася'},
  {id: 2, name: 'Петя'},
  {id: 3, name: 'Федор'},
  {id: 4, name: 'Костя'},
  {id: 5, name: 'Дима'},
])

const selectedUser = computed(() => {
  return options.value.find(user => user.id === selectedUserId.value)
})

</script>

<template>
  <h1>Соус к картошке {{ needSauce ? 'nuszhen' : 'nenuszhen' }}</h1>
  <CheckBox v-model="needSauce" />

  <InputAutoComplete v-model="selectedUserId" :options="options"/>
  <h2>{{ selectedUserId }}</h2>
  <h1>{{ selectedUser.name }}</h1>
</template>

<style scoped>

</style>