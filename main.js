const button = document.querySelector('.button')


button.addEventListener('click', () => {
    button.classList.toggle('active')
    button.setAttribute('aria-expanded', button.classList.contains('active') ? 'true' : 'false')
})