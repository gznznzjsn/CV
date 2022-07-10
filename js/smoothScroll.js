const linksHead = document.querySelectorAll('.menu-link')
const contactsScroll = document.querySelector('.contacts-scroll')
const array = [...linksHead, contactsScroll]

array.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault()
        const ID = event.target.getAttribute('href').substr(1)
        document.getElementById(ID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})