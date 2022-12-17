function colorClick(evt) {
    evt.preventDefault();
    alert("Green")
}

function palceClick(evt) {
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
click2.addEventListener('click', palceClick)
click3.addEventListener('click', ritualClick)