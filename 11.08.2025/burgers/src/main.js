import './style.css'
import renderBurger from './renderBurger'
import burgers from './data'

burgers.forEach((burger)=>{
    renderBurger(burger)
})