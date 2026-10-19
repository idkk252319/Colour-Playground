let currentHTML = document.getElementById("color-display")
let containerHTML = document.querySelector(".container")
let buttonsHTML = document.querySelectorAll(".color-btn")
let bodyHTML = document.querySelector('body')

buttonsHTML.forEach((button)=>{
    button.addEventListener("click",()=>{
        bodyHTML.style.backgroundColor=button.textContent
    })
})

