import './style.css'
import renderBurger from './render/renderBurger'
import burgers from './state/data'
import {btnCreateOrderEl} from './state/elements'
import Order from './model/Order'
import OrderList from './model/OrderList'

burgers.forEach((burger)=>{
    renderBurger(burger)
})

btnCreateOrderEl.addEventListener('click', ()=>{
    const order = Order.createOrder()
    console.log(order)
    OrderList.createActiveOrder(order)
})