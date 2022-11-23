const itemsnav = document.querySelector("#items-nav")
const navbarLogo = document.getElementById('logo');

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

const getUrl = (url) => {
    if(url === "conheca"){
        document.querySelector("#conheca-nav")?.classList.add("change-nav-item-opacity")
        document.querySelector("#modulos-nav")?.classList.remove("change-nav-item-opacity")
        document.querySelector("#publicoalvo-nav")?.classList.remove("change-nav-item-opacity")
        document.querySelector("#prof-nav")?.classList.remove("change-nav-item-opacity")
    }

    if(url === "modulos"){
        document.querySelector("#modulos-nav")?.classList.add("change-nav-item-opacity")
        document.querySelector("#conheca-nav")?.classList.remove("change-nav-item-opacity")
        document.querySelector("#publicoalvo-nav")?.classList.remove("change-nav-item-opacity")
        document.querySelector("#prof-nav")?.classList.remove("change-nav-item-opacity")


    }

    if(url === "publicoalvo"){
        document.querySelector("#publicoalvo-nav")?.classList.add("change-nav-item-opacity")

        document.querySelector("#modulos-nav")?.classList.remove("change-nav-item-opacity")
        document.querySelector("#conheca-nav")?.classList.remove("change-nav-item-opacity")
        document.querySelector("#prof-nav")?.classList.remove("change-nav-item-opacity")

    }

    if(url === "prof"){
        // alert("prof")
        document.querySelector("#prof-nav")?.classList.add("change-nav-item-opacity")
        document.querySelector("#publicoalvo-nav")?.classList.remove("change-nav-item-opacity")
        
        document.querySelector("#modulos-nav")?.classList.remove("change-nav-item-opacity")
        document.querySelector("#conheca-nav")?.classList.remove("change-nav-item-opacity")
    }
}

// const li = document.querySelectorAll(".li-from-nav")
const sectionAll = document.querySelectorAll("#conheca, #modulos, #publicoalvo, #prof")

window.addEventListener("scroll", () => {
    let scrollY = window.scrollY
    sectionAll.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 300
        const sectionId = current.getAttribute("id")

        if(scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
            document.querySelector('li a[href*="' + sectionId + '"]')?.classList.add("change-nav-item-opacity")
        } else {
            document.querySelector('li a[href*="' + sectionId + '"]')?.classList.remove("change-nav-item-opacity")
        }

    })
})