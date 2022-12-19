const food = ["http://www.avenuesproper.com/", "https://cucinawinebar.com/", "https://www.saffronvalley.com/saffron-colonial-downtown-slc-indian-restaurant-utah", "https://cafe-shambala.business.site/?utm_source=gmb&utm_medium=referral"];

const random = Math.floor(Math.random() * food.length);



function randomResturant(evt) {
    evt.preventDefault();
    alert(random[random])
}

let foodButton = document.querySelector('#random-resturant');

foodButton.addEventListener('click', randomResturant);