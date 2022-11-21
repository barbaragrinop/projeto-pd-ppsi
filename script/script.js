const sections = document.querySelectorAll('section')
const bubble = document.querySelector('.bubble')

const options = {
    threshold: 0.7
}

const navCheck = (entries) => {
    console.log('entries', entries)
    entries.forEach(entry => {
        console.log(entry)
    });
}

let observer = new IntersectionObserver(navCheck, options)



sections.forEach(section => observer.observe(section))