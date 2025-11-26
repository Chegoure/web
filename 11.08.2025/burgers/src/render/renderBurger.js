import renderElement from './renderElement'
import {burgerListEl} from '../state/elements'
import handleBurgerClick from '../handlers/handleBurgerClick'

export default (burger)=>{
    const burgerItemEl = renderElement('div', burgerListEl, {class: 'burger-item'})
    renderElement('img', burgerItemEl, {src: burger.imgUrl, class: 'burger-image'})
    renderElement('h3', burgerItemEl, {content: burger.name, class: 'burger-name'})
    renderElement('p', burgerItemEl, {content: burger.price, class: 'burger-price'})

    burgerItemEl.addEventListener('click', ()=>{
        handleBurgerClick(burger)
    })
}