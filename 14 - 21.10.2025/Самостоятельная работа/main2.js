const inputAvatarEl = document.getElementById('avatar')
const avatarPreviewEl = document.getElementById('avatar-preview')
const inputNameEl = document.getElementById('name')
const inputEmailEl = document.getElementById('email')
const inputPhoneEl = document.getElementById('phone')
const inputAgeEl = document.getElementById('age')
const btnCreateProfileEl = document.getElementById('create-profile')
const userListEl = document.getElementById('user-list')

let avatarURL = '' 
//тут мы создаем идентичную структуру (иерархию\матрёшку) как в index.html <!-- Пример пользователя -->
const renderUser = (user) => {
    const userItemEl = document.createElement('div')
    userItemEl.classList.add('user-item')

    const userAvatarEl = document.createElement('img')
    userAvatarEl.classList.add('user-avatar')
    userAvatarEl.src = user.avatar // avatar из объекта completedUser
    userItemEl.append(userAvatarEl) 

    const userInfoEl = document.createElement('div')
    userInfoEl.classList.add('user-info')
    userItemEl.append(userInfoEl)

    const userNameEl = document.createElement('h3')
    userNameEl.innerHTML = user.name // name из объекта completedUser
    userInfoEl.append(userNameEl)

    const userEmailEl = document.createElement('p')
    userEmailEl.innerHTML = '<strong>Email:</strong> ' + user.email // email из объекта completedUser 
    userInfoEl.append(userEmailEl)

    const userPhoneEl = document.createElement('p')
    userPhoneEl.innerHTML = '<strong>Телефон:</strong> ' + user.phone // phone из объекта completedUser
    userInfoEl.append(userPhoneEl)

    const userAgeEl = document.createElement('p')
    userAgeEl.innerHTML = '<strong>Возраст:</strong> ' + user.age + ' лет' // age из объекта completedUser 
    userInfoEl.append(userAgeEl)

    userListEl.append(userItemEl) //Юзер-листу впихиваем Юзер-айтема.

}

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