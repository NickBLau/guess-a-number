let statusText = document.querySelector("#status-text");
let guessInput = document.querySelector("#guess-input");
let guessButton = document.querySelector("#guess-button");
let resetButton = document.querySelector("#reset-button");
let allGuess = document.querySelector("#all-guess");
let guessCount =document.querySelector("#guess-count");
let guessCounter = document.querySelector(".guess-counter");
let guessCorrect = document.querySelector(".guess-correct");

let randomNumber = null;

let guessValue = 0;
let guessCorrectValue = 1;

/*
Computer skal vælge et tal mellem 1-10
- Brugeren skriver et tal
 Når man trykker på Gæt-knappen skal der stå: 
 - Om man har gættet for højt
 - Om man har gættet for lavt
 - Om man har gættet for korrekt

*/

guessButton.addEventListener("click", showResult);

pickRandomNumber();

function showResult() {
    if(guessInput.value > randomNumber) {
        statusText.innerText = "Dit gæt er for højt!"; + guessCounter.innerText + "du har gættet forkert " + guessValue + " gange"
        guessValue += 1;
    } else if(guessInput.value < randomNumber) {
        statusText.innerText = "Dit gæt er for lavt!"; + guessCounter.innerText + "du har gættet forkert " + guessValue + " gange"
        guessValue += 1;
    } else {
        statusText.innerText = "Tilykke du har gættet rigtigt!"; +
        addOne() 
            guessCorrect.innerText = "du har gættet rigtigt " + guessCorrectValue + " gange";  
    guessCorrectValue += 1;
    }
}

function pickRandomNumber() {
    randomNumber = Math.floor(Math.random()* 100 ) +1 ;
}

guessButton.addEventListener("click", addOne);

function addOne() {
    guessCounter.innerText = "du har gættet forkert " + guessValue + " gange"
}
 

// tjek om det er skrevet et tal
// tjek hvor mange gange der er gættet
// spil igen knap. fjern tilykke text, find nyt random, fjern input
// tæller point
// gætter flere tal