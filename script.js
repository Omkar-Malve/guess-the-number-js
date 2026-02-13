// DOM elements
const form  = document.querySelector("form");
const input = document.querySelector("#myNumber");
const result = document.querySelector("#result");
const cmpRes = document.querySelector('#cmpRes');
const restartBtn = document.querySelector("#restart");


// Utility functions

// Generate computer number (1- 10)
function generateComputerNumber(){
    return Math.floor(Math.random() *10) + 1;
}

// Get user number (convert to integer)
function getUserNumber() {
    return parseInt(input.value);
}

// validate userInput
function validateUserInput(userNumber) {
    if (!userNumber || isNaN(userNumber)) {
        return "Please enter a valid number";
    }

    if (userNumber < 1 || userNumber > 10) {
        return "Plase enter number between  1 to 10";
    }
    return null;  //means valid
}

//compare numbers
function compareNumbers(userNumber, computerNumber){
    if (userNumber === computerNumber) {
        return "You Win";
    } else {
        return "You Lose";
    }
}

//update UI
function showResult(message) {
    result.innerText = message;
}

function showComputerNumber(number) {
    cmpRes.innerText = `Computer Response : ${number}`;
}

//restart game
function resetGame() {
    input.value = "";
    result.innerText = "";
    cmpRes.innerText = "";
}

// Main Logic
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const userNumber = getUserNumber();

    // validate
    const validationError = validateUserInput(userNumber);
    
    if(validationError) {
        showResult(validationError);
        cmpRes.innerText = "";
        return;
    }

    // generate computer number
    const computerNumber = generateComputerNumber();


    // compare
    const gameResult = compareNumbers(userNumber, computerNumber);

    //show result
    showComputerNumber(computerNumber);
    showResult(gameResult);
})

restartBtn.addEventListener("click", resetGame);