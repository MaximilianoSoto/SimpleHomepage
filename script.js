console.log("script funcionando")


const toggle = document.querySelector("#darkmode_container")
const body = document.querySelector('body')
const colordarkmode = document.querySelector(".colordarkmodeicon")
const colorlightmode = document.querySelector(".colorlightmode")
const strokeColor = document.querySelectorAll("#strokecolor")
const openMobileButton = document.querySelector("#openMobileButton")
const closeMobileButton = document.querySelector("#closeMobileButton")
const nav = document.querySelector("#nav")



toggle.addEventListener('click', ()=> {
    toggle.classList.toggle('active')
    body.classList.toggle('active')
    colordarkmode.classList.toggle('active')
    colorlightmode.classList.toggle('active')    
    strokeColor.forEach( elemento => {
        elemento.classList.toggle('active')
    })

})


openMobileButton.addEventListener("click", () => {
    nav.classList.add('visible')
    toggle.classList.add('visible')
})

closeMobileButton.addEventListener("click", () => {
    nav.classList.remove('visible')
    toggle.classList.remove('visible')
})