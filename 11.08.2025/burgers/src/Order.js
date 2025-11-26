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
    removeProduct(burgerRemoveId){
        const productToRemoveIndex = this.products.findIndex(product => product.burgerId === burgerRemoveId)
        if(this.products[productToRemoveIndex].quantity > 1){
            this.products[productToRemoveIndex].quantity--
        }else{
            this.products.splice(productToRemoveIndex,1)
        }
        this.renderProducts()
    },
    renderProducts(){
        orderEl.innerHTML = ''
        this.products.forEach((product)=>{
            const orderItemEl = renderElement('div', orderEl, {class: 'order-item'})
            renderElement('span', orderItemEl, {content: product.burger.name, class: 'burger-name'})

            const orderQuantityEl = renderElement('div', orderItemEl, {class: 'order-quantity'})
            const arrowRemoveProductEl = renderElement('span', orderQuantityEl, {content: '<', class: 'arrow-remove-product'})
            renderElement('span', orderQuantityEl, {content: ' x ' + product.quantity})
            const arrowAddProductEl = renderElement('span', orderQuantityEl, {content: ' >', class: 'arrow-add-product'})

            renderElement('span', orderItemEl, {content: product.burger.price * product.quantity})

            arrowAddProductEl.addEventListener('click', ()=>{
                this.addProduct(product.burger)
            })
            arrowRemoveProductEl.addEventListener('click', ()=>{
                this.removeProduct(product.burgerId)
            })

        })
    }
}