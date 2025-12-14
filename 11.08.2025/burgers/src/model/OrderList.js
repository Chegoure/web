import {statuses} from '../const'
import {orderListEl} from "../state/elements.js";
import renderElement from "../render/renderElement.js";

export default {
    activeOrders: [],
    createActiveOrder(order){
        let activeOrderId
        if(!this.activeOrders.length){
            activeOrderId = 1
        }else{
            activeOrderId = this.activeOrders[this.activeOrders.length - 1].id + 1
        }

        const activeOrder = {
            status: statuses.ON_TIME,
            order: order,
            createdTime: Date.now(),
            id: activeOrderId
        }

        this.activeOrders.push(activeOrder)
        this.renderActiveOrders()
        console.log(this.activeOrders)
    },
    renderActiveOrders(){
        orderListEl.innerHTML = ''
        this.activeOrders.forEach((activeOrder)=>{
            const activeOrderItemEl = renderElement('div', orderListEl, {class: 'active-order-item'})

            activeOrder.order.forEach(product => {
                const orderItemEl = renderElement('div', activeOrderItemEl, {class: 'active-order-products'})
                renderElement('span', orderItemEl, {content: product.burger.name, class: 'burger-name'})
                renderElement('span', orderItemEl, {content: ' x ' + product.quantity})
            })
        })
    },
}