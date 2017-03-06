window.onload = function() {

function getRandomInteger(min, max) {
  
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var variableNumber = getRandomInteger(1, 10);



function compareNumbers(first, second) {
    return (first == second);
}

function guessTheNumber(arvaus) {
        console.log("random " + arvaus)

    var guess = document.getElementById("number").value;
    
    console.log("guess " + guess)
    console.log(compareNumbers(guess, arvaus))
    
    var comparable = 1
    
    if ( guess >= 1 && guess <= 10 && (guess%1 == 0)) {     //guess.type == typeof 1
        
        if (compareNumbers(guess, arvaus)) {
            window.alert("Your guess was right!");
            variableNumber = getRandomInteger(1, 10);
            console.log("uusinumero on " + variableNumber);
        } else {
            window.alert("Better luck next time...");
        }
    } else {
        window.alert("This number is not valid.");
    }

}

document.getElementById("button").addEventListener("click", function(){
    guessTheNumber(variableNumber);
});
}