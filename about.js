console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submited');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

const rubberDuck = document.querySelector('img')

const overImg = (evt) => {
	alert('You are awesome!!!')
}

rubberDuck.addEventListener('mouseover', overImg)