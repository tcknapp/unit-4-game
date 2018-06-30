
// players score
var userTotal = 0;

// wins/losses
var wins= 0;
var losses= 0;

// random number for jewel (19-120)
var randomNumber= Math.floor((Math.random()* 100) +19);

// random value for crystals (1-12)
var purpleCrystal= Math.floor((Math.random()*12) + 1);
var greenCrystal= Math.floor((Math.random()*12) + 1);
var whiteCrystal= Math.floor((Math.random()*12) + 1);
var blueCrystal= Math.floor((Math.random()*12) + 1);


// display wins/losses/total score
$("#winCount").text(wins);
$("#lossCount").text(losses);
$("scoreSpace").text(userTotal);

// displays random number
$("#randomSpace").text(randomNumber);
$("#scoreSpace").text(0);

// for game reset
function reset(){
    randomNumber=Math.floor(Math.random()*100)+19;
    $('#randomSpace').text(randomNumber);
    purpleCrystal= Math.floor((Math.random()*12) +1);
    greenCrystal= Math.floor((Math.random()*12) +1);
    whiteCrystal= Math.floor((Math.random()*12) +1);
    blueCrystal= Math.floor((Math.random()*12) +1);
    userTotal= 0;
    $('#scoreSpace').text(userTotal);
    }

//  for wins/losses
function winning(){
    wins++; 
    $('#winCount').text(wins);
    reset();
    }

    function losing(){
    losses++;
    $('#lossCount').text(losses);
    reset();
     }

// crystal clicks
$('#purple').on('click', function() {
    userTotal += purpleCrystal;
    $('#scoreSpace').text(userTotal); 
    if (userTotal > randomNumber) {
            losses++;
            $('#lossCount').text(losses);
            alert("Sorry, try again");
            console.log("you lost");
            reset();
        }
    if (userTotal == randomNumber) {
            wins++;
            $('#winCount').text(wins);
            console.log("you won");
            alert("You're a Collector!");
            reset();
        }


$('#green').on('click', function() {
    userTotal += greenCrystal;
    $('#scoreSpace').text(userTotal); 
    if (userTotal > randomNumber) {
            losses++;
            $('#lossCount').text(losses);
            alert("Sorry, try again");
            console.log("you lost");
            reset();
        }
    if (userTotal == randomNumber) {
            wins++;
            $('#winCount').text(wins);
            console.log("you won");
            alert("You're a Collector!");
            reset();
        }

});

    $('#white').on('click', function() {
        userTotal += whiteCrystal;
        $('#scoreSpace').text(userTotal); 
        if (userTotal > randomNumber) {
                losses++;
                $('#lossCount').text(losses);
                alert("Sorry, try again");
                console.log("you lost");
                reset();
            }
        if (userTotal == randomNumber) {
                wins++;
                $('#winCount').text(wins);
                console.log("you won");
                alert("You're a Collector!");
                reset();
            }

});

    $('#blue').on('click', function() {
        userTotal += blueCrystal;
        $('#scoreSpace').text(userTotal); 
        if (userTotal > randomNumber) {
                losses++;
                $('#lossCount').text(losses);
                alert("Sorry, try again");
                console.log("you lost");
                reset();
            }
        if (userTotal == randomNumber) {
                wins++;
                $('#winCount').text(wins);
                console.log("you won");
                alert("You're a Collector!");
                reset();
            }

});

}); 