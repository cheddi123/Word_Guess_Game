
// The computerGuess Array of words and array of the alphabet
var alphabet = ["a", "b", "c", "d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var sportsArray = ["Football", "Volleyball", "Cricket", "Basketball", "Soccer", "Swimming","cycling","boxing","TENNIS","baseball","rugby","curling","badminton","bowling","golf","gymnastics","hockey"];

var isGameon=false;
var dashedLines = document.getElementById("dash");
var displayLetters = document.getElementById("displayLetters");
var numberOfWins = document.getElementById("numberOfWins");
var numberOfLosses = document.getElementById("numberOfLosses");
var numberOfGuessesLeft = document.getElementById("guessesLeft");
var button =document.getElementById("button");
var message = document.getElementById("winMessage");
var song = document.createElement("audio");
song.setAttribute("src","assets/BestCoast.mp3")

  // counter variables
var win=0;
var loss=0;
var guessLeft;

var guessedLetters=[];
var displayLettersArray=[];
var computerWord;
var wordDash;
var word;


function generateNewWord() {
    isGameon = true;
    guessedLetters = [];
    displayLettersArray = [];
    displayLettersArray.pop(guessedLetters);
    console.log(displayLettersArray);
    computerWord = sportsArray[Math.floor(Math.random() * sportsArray.length)];
    word = computerWord.toLocaleLowerCase();
    guessLeft = 7;
    numberOfWins.textContent = ("WINS: " + win);
    numberOfLosses.textContent = ("LOSSES: " + loss);
    console.log(word);

    numberOfGuessesLeft.textContent = ("Number of guesses left : " + guessLeft);
    displayLetters.textContent = displayLettersArray
    console.log(displayLettersArray);
    getRandomWordDashes(word);


}

generateNewWord();

  


// function to get the amount of dashes for the selected word
  function getRandomWordDashes  (x) {
   
    for (var i = 0; i < x.length; i++) {
        
        guessedLetters.push( " __ ");
        var array =guessedLetters.join();
         var str2 = array.replace(/,/g," ");      
        dashedLines.textContent = str2;  
        
    }

}
  
// function to reset game 
function reset() {
    button.textContent = location.reload();
}
// function to display letters UPPERCASE and to display those letters already guessed without repetitions
function displayUpperCase(letterguess) {
      var upper = letterguess.toUpperCase();
    if (displayLettersArray.indexOf(upper) ===-1) {
        displayLettersArray.push(upper);
        displayLetters.textContent = ( displayLettersArray);
        console.log(displayLettersArray);
        
        
       
    } else {
        alert("you already guessed this letter");
    }
 
}

// function to update the progress of the game
function update(userGuess) {
    displayUpperCase(userGuess);
    
    if (word.indexOf(userGuess) === -1) {
        guessLeft--;
        numberOfGuessesLeft.textContent = ("Number of guesses left : " + guessLeft);
        if (guessLeft === 0) {
            alert("you lost");
            loss ++;
            numberOfLosses.textContent=loss;
            message.textContent = ("Sorry you lost. Try again ");
          generateNewWord();
        } 
    }
    else {
        for (var j = 0; j < word.length; j++) {
            if (userGuess === word.charAt(j)) {
                guessedLetters[j] = userGuess;
                var array =guessedLetters.join();
                var str2 = array.replace(/,/g," "); 
                dashedLines.textContent = str2;
                
                if (guessedLetters.indexOf(" __ ") === -1) {
                    win ++; 
                    
                    numberOfWins.textContent=win;
                  message.textContent = ("CONGRATULATIONS YOU guessed THE WORD " + computerWord + ".  Now guess the following word");
                 
                  song.currentTime=130;
                  song.play();
                  generateNewWord();    

                     
                   
                }
            }
        }
    }
   
}

// This function check for validity of keys guessed
function intialize(letterguess) {

    // console.log(letterguess);
    if (alphabet.indexOf(letterguess) === -1) {
        alert(" you pressed the wrong key");

    } else {
        update(letterguess);

    }

}

 
// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
       
    if(isGameon){

    // Determines which key was pressed.
        var userGuess = event.key.toLocaleLowerCase();
        // console.log(userGuess);
        // intialize(userGuess);
          update(userGuess);

        }
     
        
    
}   
              
          



