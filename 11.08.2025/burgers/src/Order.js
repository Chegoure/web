import {orderEl} from './elements'
import renderElement from './renderElement'

export default {
    products: [],
    addProduct(burger){
        const product = this.products.find(product => product.burgerId === burger.id)
        if(product){
            product.quantity++
        }else{
            this.products.push({burgerId:burger.id, quantity: 1, burger: burger})
        }
        console.log(this.products)
        this.renderProducts()
    },
    removeProduct(burgerId){

    },
    renderProducts(){
        orderEl.innerHTML = ''
        this.products.forEach((product)=>{
            const orderItemEl = renderElement('div', orderEl, {class: 'order-item'})
            renderElement('span', orderItemEl, {content: product.burger.name, class: 'burger-name'})
            renderElement('span', orderItemEl, {content: 'x ' + product.quantity})
            renderElement('span', orderItemEl, {content: product.burger.price * product.quantity})
        })
    }
}