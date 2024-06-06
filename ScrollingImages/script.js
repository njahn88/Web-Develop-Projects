const panels = document.querySelectorAll('.panel')

const body = document.querySelector('.upperContainer')

body.addEventListener('mouseover', () => {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
})

panels.forEach((panel) => {
    panel.addEventListener('mouseover', () => {
        panels.forEach((panel) => {
            panel.classList.remove('active')
        })
        panel.classList.add('active')
    })
})