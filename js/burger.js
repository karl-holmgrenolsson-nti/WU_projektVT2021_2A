const navlist = document.querySelector(".nav-links")
const burger = document.querySelector('#hamburger')
function Togglemenu(){

    navlist.classList.toggle('nav-links_show')

    burger.classList.toggle("exet")
}

burger.addEventListener("click", Togglemenu)