// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var computerchoice = "";

var userChoice = "";

var winner = "";




// DOCUMENT READY FUNCTION BELOW

$("#shoot").click(function(){
    var randomNumber = Math.random();
    $("#userChoice").text($("#input").val())
    $("#computerChoice").text(computerchoice)
    console.log(randomNumber);
    if (randomNumber > 0.80) {
        $("#computerChoice").html("rock");
    } else if(randomNumber < 0.20) {
        $("#computerChoice").html("hand");
    } else(randomNumber > 0.20); {
        $("#computerChoice").html("scissors");
    }
});


