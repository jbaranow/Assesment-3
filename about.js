console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert("Contact information submitted!")
	//console.log('#contact');
	form.reset();
}

function handleMouseOver(evt) {
	evt.preventDefault();
	alert("Pet the Kitty!")
}


let form = document.querySelector('#contact');
let mouse = document.querySelector('#catpic')

form.addEventListener('submit', handleSubmit);
mouse.addEventListener("mouseover", handleMouseOver);