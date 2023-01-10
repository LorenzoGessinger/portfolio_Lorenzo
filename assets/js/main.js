const btnMobile = document.getElementById('btn-mobile')
const nav = document.getElementById('nav')

const toggleMenu = (event) => {
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById('nav')
    nav.classList.toggle('active') // add case it has, does not add case do not have.
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active)
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
    }
}

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    nav.classList.remove('active')
}))

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)
