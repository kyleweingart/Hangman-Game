// 1. Create an array that lists out all the potential word options for the Hangman game

    var hangmanWordOptions = [ "butyric","mercaptan", "acetaldehyde", "diacytl", "oxidized" ]

// 2. Have the computer randomly select a word in the array- this could be done by having user click a button "Start Game" or with instructions telling user to press a key to start

    var computerWordChoice = hangmanWordOptions[Math.floor(Math.random() * hangmanWordOptions.length)];

// 3. Have the randomly selected word display with an underscore for each letter, for example oxidized has 8 letters so it will be displayed as "_ _ _ _ _ _ _ _"

        // Need to find out which property of the variable stores the length of the word - it could be .length

// 4. Get user input by having them select a letter- this could be done by having a button for each letter on the alpahbet displayed on the page or telling user to press a key to start

    document.onkeyup = function(event){
        var userGuess = event.key;
    }

// 5. Compare user Guess letter to the computer word choice   - if letter in word ===true do this  else do something else   (band activity-what is your favorite band?)- this could all be stored in the function?

// 6. Tally every incorrect letter guess - store result in a counter variable   var letterGuess = 0, put outside of function  letterguess++

// 7. Display result of every user input - if they win flash definiton of the off flavor  if they lose play again. 

