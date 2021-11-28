console.log('hello?');

const colorBtn = document.querySelector('#color')

const favPlaceBtn = document.querySelector('#place')

const ritualBtn = document.querySelector('#ritual')





const favPlace = 'The Mountains'
const favRitual = 'Morning coffee!'
const favColor = 'Purple'

const color = (e) => {
    alert(`Favorite color: ${favColor}`)
}


const place = (e) => {
    alert(`My favorite place: ${favPlace}`)
}

const ritual = (e) => {
    alert(`Favorite ritual: ${favRitual}`)
}

colorBtn.addEventListener('click', color)

favPlaceBtn.addEventListener('click', place)

ritualBtn.addEventListener('click', ritual)


