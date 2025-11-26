import {statuses} from '../const'

export default {
    orders: [],
    createActiveOrder(order){
        let activeOrderId
        if(!this.orders.length){
            activeOrderId = 1
        }else{
            activeOrderId = this.orders[this.orders.length - 1].id + 1
        }

        const activeOrder = {
            status: statuses.ON_TIME,
            order: order,
            createdTime: Date.now(),
            id: activeOrderId
        }

        this.orders.push(activeOrder)
        console.log(this.orders)
    },
}