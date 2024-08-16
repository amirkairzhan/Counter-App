let counterText = document.querySelector('.counter');
let addOneKmButton = document.getElementById('addOneKmButton');
let addFiveKmButton = document.getElementById('addFiveKmButton');
let addTenKmButton = document.getElementById('addTenKmButton');
let buttonMinus = document.getElementById('resetButton');

let counter = 0;

addOneKmButton.addEventListener('click', function() {
    counter = counter + 1;

    counterText.innerText = counter;
});

addFiveKmButton.addEventListener('click', function() {
    counter = counter + 5;

    counterText.innerText = counter;
});

addTenKmButton.addEventListener('click', function() {
    counter = counter + 10;

    counterText.innerText = counter;
});

resetButton.addEventListener('click', function() {
    counter = 0;

    counterText.innerText = counter;
})