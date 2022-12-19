function colorClick(evt) {
    evt.preventDefault();
    alert("Green")
}

function placeClick(evt) {
    evt.preventDefault();
    alert("Oregon")
}

function ritualClick(evt) {
    evt.preventDefault();
    alert("Gaming")
}

let click = document.querySelector('#color')
let click2 = document.querySelector('#place')
let click3 = document.querySelector('#ritual')

click.addEventListener('click', colorClick)
click2.addEventListener('click', placeClick)
click3.addEventListener('click', ritualClick)