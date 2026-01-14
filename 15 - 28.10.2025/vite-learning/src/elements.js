export const inputAvatarEl = document.getElementById('avatar')
export const avatarPreviewEl = document.getElementById('avatar-preview')
export const inputNameEl = document.getElementById('name')
export const inputEmailEl = document.getElementById('email')
export const inputPhoneEl = document.getElementById('phone')
export const inputAgeEl = document.getElementById('age')
export const btnCreateProfileEl = document.getElementById('create-profile')
export const userListEl = document.getElementById('user-list')

import renderUser from './renderUser'
let avatarURL = ''

export const initEvents = ()=>{
    inputAvatarEl.addEventListener('change', ()=>{
        const file = inputAvatarEl.files[0] //files (объект) - это св-во "input type = file"
        const url = URL.createObjectURL(file)
        avatarPreviewEl.src = url
        avatarURL = url
    })

    btnCreateProfileEl.addEventListener('click', (e)=>{
        e.preventDefault() /*отменяем стандартное поведение формы*/
        const completedUser = {
            name: inputNameEl.value,
            email: inputEmailEl.value,
            phone: inputPhoneEl.value,
            age: inputAgeEl.value,
            avatar: avatarURL
        }
        renderUser(completedUser)
    })
}
