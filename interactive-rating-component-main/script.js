// Declare needed variables

let rateOne = document.getElementById('rateOne');

let rateTwo = document.getElementById('rateTwo');

let rateThree = document.getElementById('rateThree');

let rateFour = document.getElementById('rateFour');

let rateFive = document.getElementById('rateFive')

let rating = document.querySelector('.rateText');

let textArea = document.querySelector('.selection');

let rateText = '';

const submitButton = document.querySelector(".submitButton");

// Create event listener for each rate button

rateOne.addEventListener('click', getRate);

rateTwo.addEventListener('click', getRate);

rateThree.addEventListener('click', getRate);

rateFour.addEventListener('click', getRate);

rateFive.addEventListener('click', getRate);

submitButton.addEventListener('click', changeState);

// define the needed functions

function getRate() {
    rateText =  document.activeElement.innerHTML;
}

function changeState() {

    rating.innerHTML = rateText;

    textArea.innerHTML = 'You selected ' + rateText + ' out of 5 ';

    document.querySelector('.ratingState').style.display = "none";

    document.querySelector('.thankYouStateVis').style.display = 'flex'; 

}
