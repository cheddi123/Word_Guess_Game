
// counter variables
var win=0;
var loss=0;
var guessLeft=7;


var letter= document.getElementById("letter");
var start = document.getElementById("start");
var keyTyped= document.getElementById("keyTyped");
var letterArray = document.getElementById("array");
var dashedLines = document.getElementById("dash");
var displayLetters = document.getElementById("displayLetters");
var numberOfWins = document.getElementById("numberOfWins");
var numberOfLosses = document.getElementById("numberOfLosses");
var numberOfGuessesLeft = document.getElementById("guessesLeft");
var button =document.getElementById("button");
var winMessage = document.getElementById("winMessage");

// The computerGuess Array of words
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var sportsArray = ["Football", "Volleyball", "Cricket", "Basketball", "Soccer", "Swimming","cycling","boxing","TENNIS"];

var computerWord = sportsArray[Math.floor(Math.random() * sportsArray.length)];
// makes the words in array  to lower case
var word = computerWord.toLocaleLowerCase();

console.log(word);
var guessedLetters = [];
var displayLettersArray = [];



// function to get the amount of dashes for the selected word
getRandomWordDashes = function () {
    var guessedLettersStr = "";
    for (var i = 0; i < computerWord.length; i++) {
        
        guessedLetters.push( " __ ");
        var array =guessedLetters.join();
         var str2 = array.replace(/,/g," ");      
        dashedLines.textContent = str2;
    }


    return guessedLettersStr;
}
  //called function to get dashes                     
getRandomWordDashes();

// check for wins
function checkForWin() {
    if (guessedLetters.indexOf(" __ ") === -1) {

        // win++;
        // numberOfWins.textContent = win;
        winMessage.textContent = ("CONGRATULATIONS YOU WON THE WORD " + computerWord)
    

    }
};


numberOfGuessesLeft.textContent = ("Number of guesses left : " + guessLeft);
// function to play again
function reset() {
    button.textContent = location.reload();
};
// function to display letters UPPERCASE
function displayUpperCase(userGuess) {
    userGuess = userGuess.toUpperCase();
    displayLettersArray.push(userGuess);
    displayLetters.textContent = (displayLettersArray);
}

// function to update the progress of the game
function update(userGuess) {
    if (word.indexOf(userGuess) === -1) {
        guessLeft--;
        numberOfGuessesLeft.textContent = ("Number of guesses left : " + guessLeft);
        if (guessLeft === 0) {
            alert("you lost");
            winMessage.textContent = ("Sorry you lost. Click to play again ");
        }
    }
    else {
        for (var j = 0; j < word.length; j++) {
            if (userGuess === word.charAt(j)) {
                guessedLetters[j] = userGuess;
                var array =guessedLetters.join();
                var str2 = array.replace(/,/g," "); 
                dashedLines.textContent = str2;
            }
        }
    };
}
// This function check for validity of keys guessed
function intialize(userGuess){
    if(alphabet.indexOf(userGuess)===-1){
        alert(" you pressed the wrong key");
       
    }else {
        update(userGuess);
       displayUpperCase(userGuess);
      checkForWin();}
}            


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
       
    // Determines which key was pressed.
        var userGuess = event.key;
    
      intialize(userGuess);
       
    
}   
               
          



