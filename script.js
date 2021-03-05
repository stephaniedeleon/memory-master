//Global variables
var pattern = new Array();
var progress = 0; // how far along the plater is in guessing the pattern (using this as the index in pattern array)
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var mistakes = 0;
// For countdown timer
var timer;
var timeLeft = 10;

//Global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const countdownEl = document.getElementById("countdown"); //gets the countdown element for timer


// Countdown Timer
// Updates the timer
function updateTimer() {
  if (timeLeft == 0) {
    loseGame();
  }
  timeLeft = timeLeft < 10 ? '0' + timeLeft : timeLeft;
  countdownEl.innerHTML = `00:${timeLeft}`;

  timeLeft--;
  timeLeft = timeLeft < 0 ? 0 : timeLeft; //to avoid negative numbers
} 

// Starts the timer
function startTimer() {
  timer = setInterval(updateTimer, 1000);
}

// Resets the timer back to 10
function resetTimer() {
  timeLeft = 10;
}

// Stops the timer
function stopTimer() {
  clearInterval(timer);
}


// Generating random secret pattern
function getPattern() {
  // Generates a 9 clue sequence
  for (let i = 0; i < 7; i++) {
    pattern[i] = getRandomInt(1, 10); //getting numbers from 1 to 9;
  }
}

// Function to generate random int
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// User wants to start the game
function startGame() {
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  clueHoldTime = 1000;
  mistakes = 0;
  pattern.length = 0;
  resetTimer();
  startTimer();

  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  getPattern();
  playClueSequence();

  //Get pattern in console
  console.log("Pattern: " + pattern);
}

function stopGame() {
  //Stops the game
  gamePlaying = false;
  stopTimer();

  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 293.7,
  3: 329.63,
  4: 349.23,
  5: 392,
  6: 440,
  7: 493,
  8: 523.25,
  9: 587.33
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;

  setTimeout(function() {
    stopTone();
  }, len);
}
function startTone(btn) {
  // fixes bug in Chrome
  context.resume();
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}
function stopTone(btn) {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

//Lighting and Clearing a Button for Playing clues
function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

//Playing a single clue
function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn); // we schedule the clearButton to be called in 1000 milliseconds,
    //after we call clearButton which resets the button back to its original color.
  }
}

//Playing a clue sequence
function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue - we are scheduling this function to run in the future
    if (i / 2 == 0) {
      //clueHoldTime decreases on each 2 turns
      clueHoldTime -= 125;
    }
    // delay is keeping a running total of how long in the future to play the next clue.
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

// Win & Loss Notifications
function loseGame() {
  stopGame();
  stopTimer();
  alert("Game Over! You lost!");
}

function winGame() {
  stopGame();
  stopTimer();
  alert("Congratulations! You are a Memory Master!");
}

// Guesses
function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return; //break out of the func
  } else {
    if (btn == pattern[guessCounter]) {
      //Guess correct, so continue...
      if (guessCounter == progress) {
        if (progress == pattern.length - 1) {
          // Game is over, player wins
          winGame();
        } else {
          // Pattern entered is correct so continue...
          progress++;
          resetTimer(); // resets timer back to 10 seconds
          playClueSequence();
        }
      } else {
        // checking next guess
        guessCounter++;
      }
    } else {
      //Guess is incorrect
      mistakes++;
      timeLeft += 5; //adds 5 more seconds to make up for the interruption.
      alert("Strike " + mistakes + "/3");
      // player allowed 3 mistakes
      if (mistakes == 3) {
        // no more tries, game is over & player loses
        loseGame();
      }
    }
  }
}

// Showing images based on whether the user's guess is right
function showImg(btn) {
  if (btn == pattern[guessCounter]) {
    document.getElementById("btnImg" + btn).classList.remove("conceal");
  }
}

function hideImg(btn) {
  document.getElementById("btnImg" + btn).classList.add("conceal");
}
