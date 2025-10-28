export default ()=>{

    const moverEl = document.createElement('h1')
    moverEl.innerHTML = 'Привет'
    document.querySelector('#app').append(moverEl)

    moverEl.addEventListener('click', ()=>{
        moverEl.classList.toggle('move')
    })
}