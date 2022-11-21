const itemsnav = document.querySelector("#items-nav")
const navbarLogo = document.getElementById('logo');
const menuhamburger = document.querySelector(".menu-btn")

window.addEventListener("scroll", () => {
    let lastScrollY = window.scrollY

    if(lastScrollY <= 100){
        itemsnav?.classList.add("remove-all")
        itemsnav?.classList.remove("nav-items")
    } else if(lastScrollY > 100) {
        itemsnav?.classList.add("nav-items")
        navbarLogo?.classList.remove('remove-all');
        itemsnav?.classList.remove("remove-all")
    }
    lastScrollY = window.scrollY
})

// function resizeNavbar(x) {
//     console.log('x', x)
//     if (x.matches) { // If media query matches
//         document.body.style.backgroundColor = "yellow";
//     } else {
//         document.body.style.backgroundColor = "pink";
//     }
// }

// var x = window.matchMedia("(max-width: 700px)")
// console.log('x', x)
// resizeNavbar(x)
// x.addEventListener(resizeNavbar)