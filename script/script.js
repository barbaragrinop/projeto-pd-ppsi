const itemsnav = document.querySelector("#items-nav")
const navbarLogo = document.getElementById('logo');

window.addEventListener("scroll", () => {
    let lastScrollY = window.scrollY

    if(lastScrollY <= 100){
        itemsnav.classList.add("remove-all")
        itemsnav.classList.remove("nav-items")

    } else if(lastScrollY > 100) {
        itemsnav.classList.add("nav-items")
        navbarLogo.classList.remove('remove-all');
        itemsnav.classList.remove("remove-all")

    }
    lastScrollY = window.scrollY
})
