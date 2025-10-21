const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const phoneInput = document.getElementById('phone')
const ageInput = document.getElementById('age')
const avatarInput = document.getElementById('avatar')
const btnEl = document.getElementById('create-profile')
const avatarPreview = document.getElementById('avatar-preview')
const userLisEl = document.getElementById('user-list')


let avatarURL = ''

const renderUser = (user)=> {
    console.log(user)

    const userItemEl = document.createElement('div')
    userItemEl.classList.add('user-item')

    const userAvatarEl = document.createElement('img')
    userAvatarEl.classList.add("user-avatar")
    userAvatarEl.src = user.avatar
    userItemEl.append(userAvatarEl)

    const userInfoEl = document.createElement('div')
    userInfoEl.classList.add('user-info')
    userItemEl.append(userInfoEl)

    const userNameEl = document.createElement('h3')
    userNameEl.innerHTML = user.name
    userInfoEl.append(userNameEl)

    const emailEl = document.createElement('p')
    emailEl.innerHTML = '<strong>Email:</strong> ' + user.email
    userInfoEl.append(emailEl)

    const phoneEl = document.createElement('p')
    phoneEl.innerHTML = '<strong>Телефон:</strong> ' + user.phone
    userInfoEl.append(phoneEl)

    const ageEl = document.createElement('p')
    ageEl.innerHTML = '<strong>Возраст:</strong> ' + user.age + 'лет'
    userInfoEl.append(ageEl)

    userLisEl.append(userItemEl)

}

avatarInput.addEventListener("change", ()=>{
    const file = avatarInput.files[0] //files (объект) - это св-во "input type = file"
    const url = URL.createObjectURL(file)
    avatarPreview.src = url
    avatarURL = url
})

btnEl.addEventListener('click',(e)=>{
    e.preventDefault()
    const userInfo = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        age: ageInput.value,
        avatar: avatarURL
    }
    renderUser(userInfo)
})


