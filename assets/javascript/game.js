// on load function.
$(document).ready();{

// declare needed variables.
var wins = 0;
var losses = 0;
var $winLoss = $(".win-loss");
var $win = $(".win");
var $loss = $(".loss");
var $compNumber = $(".comp-number");
var $redGem = $(".red-gem");
var $blueGem = $(".blue-gem");
var $yellowGem = $(".yellow-gem");
var $greenGem = $(".green-gem");
var $scoreValue = $(".score-value");
var randomNumber;
var redNumber;
var blueNumber;
var yellowNumber;
var greenNumber;
var totalScore = 0;

// create computer randomly generated number between 19 - 120 and place it in page.
$scoreValue.text(totalScore);


randomFunction = function(){ 
randomNumber = Math.floor(Math.random()*(120-19+1)+19);
console.log(randomNumber);

$compNumber.text(randomNumber);
};

randomFunction();

// Create crystals logic.

// redNumber = Math.floor(Math.random()*(30-1+1)+1);
// blueNumber = Math.floor(Math.random()*(30-1+1)+1);
// yellowNumber = Math.floor(Math.random()*(30-1+1)+1);
// greenNumber = Math.floor(Math.random()*(30-1+1)+1);

// $redGem.attr("gem-number", redNumber);
// $blueGem.attr("gem-number", blueNumber);
// $yellowGem.attr("gem-number", yellowNumber);
// $greenGem.attr("gem-number", greenNumber);

gemNumbers = function () {
redNumber = Math.floor(Math.random()*(30-1+1)+1);
blueNumber = Math.floor(Math.random()*(30-1+1)+1);
yellowNumber = Math.floor(Math.random()*(30-1+1)+1);
greenNumber = Math.floor(Math.random()*(30-1+1)+1);

$redGem.attr("gem-number", redNumber);
$blueGem.attr("gem-number", blueNumber);
$yellowGem.attr("gem-number", yellowNumber);
$greenGem.attr("gem-number", greenNumber);
};

gemNumbers();



// Create win and losses counter.

$(".gem").on("click", function() {

var gemValue = ($(this).attr("gem-number"));
gemValue = parseInt(gemValue);
console.log(gemValue);

totalScore += gemValue;
console.log(totalScore);
$scoreValue.text(totalScore);

if (totalScore == randomNumber) {
  wins++;
  $win.text(wins);
  randomFunction();
  gemNumbers();
  totalScore = 0;
  $scoreValue.text(totalScore);

} else if (totalScore > randomNumber) {
  losses++;
  $loss.text(losses);
  randomFunction();
  gemNumbers();
  totalScore = 0;
  $scoreValue.text(totalScore);
};


});




// Keep total score from crystals. Included in previous step.



// Determine win/lose condition (may be placed somewhere else). Also, included in previous step.


};