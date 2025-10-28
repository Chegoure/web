import {userListEl} from './elements'
import renderElement from './renderElement'

export default (user)=>{
    const userItemEl = renderElement('div', userListEl, {class: "user-item"})
    renderElement('img', userItemEl, {class: "user-avatar", src: user.avatar})
    const userInfoEl = renderElement('div', userItemEl, {class: "user-info"})
    renderElement('h3', userInfoEl, {content: user.name})
    renderElement('p', userInfoEl, {content: '<strong>Email:</strong> ' + user.email})
    renderElement('p', userInfoEl, {content: '<strong>Телефон:</strong> ' + user.phone})
    renderElement('p', userInfoEl, {content: '<strong>Возраст:</strong> ' + user.age + ' лет'})
}