<template>
  <div class="wrapper">
    <div class="order-panel">
      <div class="burger-list">
        <div v-for="burger in burgers" @click="selectBurger(burger)" class="burger-item">
          <img class="burger-image" :src="burger.imgUrl" alt="">
          <div class="burger-name">{{burger.name}}</div>
          <div class="burger-price">{{burger.price}}</div>
        </div>
      </div>
      <div class="pre-order">
        <div v-for="order in preOrder" class="pre-order-item">
          <span class="pre-order-item-name">{{order.burger.name}}</span>
          <span class="pre-order-item-quantity"> x {{order.quantity}}</span>
        </div>
      </div>
      <button @click="addActiveOrder">add</button>
    </div>
    <div class="active-orders">
      <div v-for="order in activeOrders" class="active-order">
        <div v-for="product in order" class="active-order-product">
          {{product.burger.name}} x {{product.quantity}}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
const selectBurger = (burger) => {
  const product = preOrder.value.find(product => product.burgerId === burger.id)
  if(product){
    product.quantity++
  }else{
    preOrder.value.push({burgerId:burger.id, quantity: 1, burger: burger})
  }
  console.log(preOrder.value)
}
const addActiveOrder = () => {
  activeOrders.value.push([...preOrder.value])
  preOrder.value = []
}
const activeOrders = ref([])
const preOrder = ref([])
const burgers = ref([
  {
    id: 1,
    name: 'Бургер с грибами',
    imgUrl: '/bg-1.PNG',
    price: 250
  },
  {
    id: 2,
    name: 'Чизбургер',
    imgUrl: '/bg-2.PNG',
    price: 120
  },
  {
    id: 3,
    name: 'Бургер',
    imgUrl: '/bg-3.PNG',
    price: 100
  },
  {
    id: 4,
    name: 'Тройной бургер',
    imgUrl: '/bg-4.PNG',
    price: 300
  },
  {
    id: 5,
    name: 'Двойной чизбургер',
    imgUrl: '/bg-5.PNG',
    price: 240
  },
])
</script>

<style>

.wrapper {
  width: 1200px;
  display: grid;
  grid-template-columns: 1fr 3fr;
}

.pre-order {
  padding: 20px;
  border: 1px solid gray;
  border-radius: 20px;
  margin: 10px;
  background-color: #f5ebdc;
  font-weight: 500;

}

.pre-order-item {
  display: grid;
  grid-template-columns: 50% 1fr 1fr;
}

.burger-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: calc(100vh - 200px);
  overflow-y: scroll;
}

.burger-item {
  margin: 10px;
  background-color: #f5ebdc;
  padding: 20px;
  border-radius: 20px;
  transition: all .1s;
  cursor: pointer;
}

.burger-item:hover {
  box-shadow: 1px 1px 7px grey;
}

.burger-image {
  width: 200px;
}

.active-order {
  border: 1px solid black;
  padding: 5px;
  margin: 5px;
}
</style>