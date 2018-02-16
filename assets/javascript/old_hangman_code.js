//  VARIABlES
// =======================================================================================================
 
 // Create variable array with all letters in the alphabet
//  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

 // Create variable array with beer off flavor words
 var hangmanWordOptions = ["butyric", "mercaptan", "acetaldehyde", "diacytl", "oxidized", "metallic", ""]

 // create variable to store random word choice
 var computerWordChoice;

 var computerWordChoiceArray = [];

 // create counter variable with number of guesses remaining
 var guesses;

 //create variable to hide chosen word with underscore placeholder
 var dashes = [];

 // create variable array for all incorrectly guessed letters
 var wrongLetterGuess;

 // FUNCTIONS
// ==========================================================================================================



// Run function on Play Game Button Click
// Display computer word Choice with empty dashes
function DisplaySecretWord() {
    // var dashes = "";
    for (var i = 0; i < computerWordChoice.length; i++) {
        if (computerWordChoice.charAt(i) == " ") {
            dashes += " &nbsp ";
        } else {
            dashes += "_ ";
        }
        console.log(dashes);
        var wordContainer = document.getElementById("empty-word-display");
        // console.log(wordContainer);
        wordContainer.innerHTML = dashes;

    }
}


DisplaySecretWord();


// MAIN PROCESS
// ============================================================================================================


document.onkeyup = function (event) {
    var userGuess = event.key;

    if (computerWordChoice.indexOf(userGuess) === -1) {
        // also need to add userGuess letter to guessedLetterArray to make it unselectable
        // attempt to push userGuess letter to html
        wrongLetterGuess.push(userGuess);
        console.log(wrongLetterGuess);
        var usedLetterContainer = document.getElementById("letters-chosen");

        usedLetterContainer.innerHTML = "Letters Chosen: " + wrongLetterGuess;
        guesses--;
        var guessContainer = document.getElementById("guesses-remaining");
        guessContainer.innerHTML = guesses + " " + "Guesses Remaining";
        if (guesses < 1) {
            guessContainer.innerHTML = "Game Over";
            guesses = 10;

        }

    }




    else {
        console.log("Yes- that letter is in the word");
        console.log(userGuess + " " + "the letter chosen has an index of" + " " + computerWordChoice.indexOf(userGuess));
    }

    for (var i = 0; i < computerWordChoice.length; i++) {
        var tempLetter = "";
        if (computerWordChoice.charAt(i) === userGuess) {
            var guessIndex = computerWordChoice.indexOf(userGuess);

            // addLetters += userGuess;
            // dashes = dashes.replace(guessIndex, computerWordChoice.charAt(i));
            // Try 2:
            // dashes = dashes.substr(0,guessIndex) + userGuess + " " + dashes.substr(guessIndex + 1);
            console.log(dashes);

            // function to replace characters?
            // Try 1
            dashes = dashes.replace("_", computerWordChoice.charAt(i));



            // var newDashes = computerWordChoice.indexOf(userGuess);
            // console.log(newDashes);

            // dashes.replace(userGuess);
            // console.log(dashes);
            var newWordContainer = document.getElementById("empty-word-display");
            console.log(newWordContainer);
            newWordContainer.innerHTML = dashes;
            // newWordContainer.innerHTML = dashes;
            // }
        }
    }
}



// Remaining Steps

// 1. Play Again button to Reload Game
// 2. Create an array to store guessed letters 
// 3. Once word is completed show definition






