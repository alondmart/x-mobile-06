// adds current year in footer
const currentYear = new Date()
document.querySelector("#year").innerHTML = currentYear.getFullYear()

function toggleMenu() {
    document.querySelector("#primaryNav").classList.toggle("open")
}

const x = document.querySelector("#hamburgerBtn")
x.onclick = toggleMenu

