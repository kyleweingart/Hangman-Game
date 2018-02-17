//  VARIABlES
// =======================================================================================================

// Create variable array with all letters in the alphabet
//  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Create variable array with beer off flavor words
var hangmanWordOptions = [
  "butyric",
  "mercaptan",
  "acetaldehyde",
  "diacytl",
  "oxidized",
  "metallic"
];

// create variable to store random word choice
var computerWordChoice;

// create array variable to store random word choice in order access array functions splice, join, etc.
var computerWordChoiceArray = [];

//create variable to hide chosen word with underscore placeholder
var dashes = [];

// create counter variable with number of guesses remaining
var guesses;

//create variable to hide chosen word with underscore placeholder
var dashes = [];

// create variable array for all incorrectly guessed letters
var wrongLetterGuess;

// FUNCTIONS
// ==========================================================================================================

// Start New Game function: resets all variables and chooses new random word - stores placeholder dashes as
// an array variable which allows split and join - i spent a lot of time storing the placeholder as a regular
// variable and struggling with replacing it with selected letter using index of and string replace.
// Difference between QuerySelector and GetElementByID?
function newGame() {
  guesses = 10;
  wrongLetterGuess = [];
  computerWordChoice =
    hangmanWordOptions[Math.floor(Math.random() * hangmanWordOptions.length)];
  computerWordChoiceArray = computerWordChoice.split("");
  dashes = [];

  for (var i = 0; i < computerWordChoiceArray.length; i++) {
    dashes.push("_");
    var dashesString = dashes.join(" ");
    document.querySelector("#empty-word-display").innerHTML = dashesString;
    document.querySelector("#guesses-remaining").innerHTML =
      "Guesses Remaining: " + guesses;
  }
}

// MAIN PROCESS
// ============================================================================================================

document.onkeyup = function (event) {
  var userGuess = event.key;

  // new code to not allow same letter to be chosen more than one time

  for (var i = 0; i <= wrongLetterGuess.length - 1; i++) {
    if (wrongLetterGuess[i].indexOf(userGuess) != -1) {
      return false;
    }
  }


  for (var i = 0; i < computerWordChoiceArray.length; i++) {
    if (userGuess === computerWordChoiceArray[i]) {
      dashes[i] = userGuess;
    }
  }
  document.querySelector("#empty-word-display").innerHTML = dashes.join(" ");

  //   Why Dashes here? could it be something else?
  // Add more logic here so same letter cant be picked 2 times
  if (dashes.indexOf(userGuess) === -1) {
    wrongLetterGuess.push(userGuess);
    guesses--;
  }

  document.querySelector("#letters-chosen").innerHTML =
    "Letters Chosen: " + "<br />" + wrongLetterGuess;
  document.querySelector("#guesses-remaining").innerHTML =
    "Guesses Remaining: " + guesses;
  if (guesses < 1) {
    document.querySelector("#guesses-remaining").innerHTML = "Game Over: Click reload to play again!";
    document.onkeyup = function (event){
    return false;
    }
  }

  if (dashes.join("") === computerWordChoice) {
    document.querySelector("#guesses-remaining").innerHTML = "You Win!!!: Click reload to play again!";
    document.onkeyup = function (event){
    return false;
    }
  }
};
newGame();

// Remaining Steps


// 1. Once word is completed show definition

