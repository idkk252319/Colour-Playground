let currentHTML = document.getElementById("color-display")
let containerHTML = document.querySelector(".container")
let buttonsHTML = document.querySelectorAll(".color-btn")
let bodyHTML = document.querySelector('body')
let startbtnHTML = document.getElementById('start-btn')
let stopbtnHTML = document.getElementById('stop-btn')

let interval

buttonsHTML.forEach((button) => {
    button.addEventListener("click", () => {
        bodyHTML.style.backgroundColor = button.textContent
        currentHTML.textContent = button.textContent
    })

})

startbtnHTML.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(changeBgColour, 2000)
})

let i = 0

function changeBgColour() {
    let buttonNow = buttonsHTML[i]
    bodyHTML.style.backgroundColor = buttonNow.textContent
    currentHTML.textContent = buttonNow.textContent
    i = (i + 1) % buttonsHTML.length
}

stopbtnHTML.addEventListener('click', () => {
    clearInterval(interval)
    bodyHTML.style.backgroundColor = 'white'
    currentHTML.textContent = 'White'
})
