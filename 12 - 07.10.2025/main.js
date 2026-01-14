function greetings(){
    let favFoodString = ''
    this.favoriteFood.forEach((foodItem, index) => {
        favFoodString += index === this.favoriteFood.length-1 ? foodItem + '.' : foodItem + ', '
    })
    return `Здарова, я ${this.name} ! Я обожаю похавать ${favFoodString} `
}

const Petr = {
    name: 'Петр',
    age: 25,
    favoriteFood: ['Щи', 'Оливье', 'Бефстроганов'],
    profilePicture: '1.jpg',
    profilePictureSpeech: '1_Speak.jpg',
    greetings: greetings,
    voice: undefined,
    speech: 'А тебя, дружище, ебать не должно кто я'

}

const Leonid = {
    name: 'Леонид',
    age: 35,
    favoriteFood: ['Щи', 'Оливье', 'Бефстроганов'],
    profilePicture: '2.jpg',
    profilePictureSpeech: '2_Speak.jpg',
    greetings: greetings,
    voice: undefined,
    speech: 'Да я мворвмт лпаваьп авыва'
}

const Arthur = {
    name: 'Артур',
    age: 18,
    favoriteFood: ['Щи', 'Оливье', 'Бефстроганов'],
    profilePicture: '3.jpg',
    profilePictureSpeech: '3_Speak.jpg',
    greetings: greetings,
    voice: undefined,
    speech: "Я актер из деревни дураков"
}

speechSynthesis.addEventListener("voiceschanged", () => {
    const voices = speechSynthesis.getVoices()
    Petr.voice = voices[1]
    Leonid.voice = voices[0]
    Arthur.voice = voices[17]
})

const appEl = document.getElementById('app')

const renderProfile = (user) => {

    const profileEl = document.createElement('div')
    const profileImageEl = document.createElement('img')
    const nameEl = document.createElement('h2')
    const ageEl = document.createElement('p')
    const foodsEl = document.createElement('p')
    const buttonEl = document.createElement('button')

    profileEl.classList.add('profile')

    profileImageEl.src = user.profilePicture
    nameEl.innerHTML = user.name
    ageEl.innerHTML = user.age + ' лет'
    foodsEl.innerHTML = user.greetings()
    buttonEl.innerHTML = 'Кто ты, ' + user.name + '?'

    appEl.append(profileEl)

    profileEl.append(profileImageEl)
    profileEl.append(nameEl)
    profileEl.append(ageEl)
    profileEl.append(foodsEl)
    profileEl.append(buttonEl)

    buttonEl.addEventListener('click', () => {
        profileImageEl.src = user.profilePictureSpeech
        setTimeout(()=>{
            profileImageEl.src = user.profilePicture
        }, 4000)

        let utterance = new SpeechSynthesisUtterance()
        utterance.text = user.speech
        utterance.voice = user.voice
        speechSynthesis.speak(utterance)
    })


}

renderProfile(Petr)
renderProfile(Leonid)
renderProfile(Arthur)

