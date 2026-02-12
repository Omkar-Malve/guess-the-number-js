
// const submitButton = document.querySelector('button');
const form = document.querySelector('form');
const result = document.querySelector("#result");


form.addEventListener('submit', function(e){
    e.preventDefault();

    let compNumber =  parseInt(Math.random()*10)+1;
    console.log("compNumber", compNumber)
    console.log(typeof compNumber);


    let userNumber = parseInt(document.querySelector("#myNumber").value);
    console.log("userNumber", userNumber);
    console.log(typeof userNumber);
    
    if(!userNumber){
        result.innerHTML = `Please enter the number`;
    } else if (userNumber > 10 || userNumber <= 0) {
        result.innerHTML = `Please enter number between 1 to 10`;
    }else if (userNumber == compNumber){
        console.log("winner");
        result.innerHTML = `You Win`;
        result.style.fontSize = "32px";

    } else{
        console.log("loser");
        result.innerHTML = `You Lose`;
    }

})





