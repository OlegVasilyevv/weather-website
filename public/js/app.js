const form = document.querySelector('form')
const search = document.querySelector('input')
const messageOne  = document.querySelector('#message-1')
const messageTwo  = document.querySelector('#message-2')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value

    fetch(`/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            messageOne.textContent = 'Loading...'
            if (data.error) {
                messageOne.textContent = data.error
                return messageTwo.textContent = ''
            }
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecastData
        })
    })
    form.reset()
})