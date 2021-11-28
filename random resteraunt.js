console.log('hello?');

const foodBtn = document.querySelector('#food-button')
console.log(foodBtn);


const foodPlaces = ['cafe rio', 'apollo burger', 'mod pizza', 'texas roadhouse', 'mcDonalds', 'burger king', 'taco bell', 'five guys', 'subway', 'firehouse']


const generator = (arr) => {
    const randomElement = foodPlaces[Math.floor(Math.random() * foodPlaces.length)]
        alert(randomElement)
}


foodBtn.addEventListener('click', generator)


