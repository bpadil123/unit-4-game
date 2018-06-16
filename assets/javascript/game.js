//html inputs and vars 
var randomnumber=0;
var wins = 0;
var losses = 0;
var userScore = 0;

//crystal random values
var cryst1 = Math.floor(Math.random() * (11) + 1);
var cryst2 = Math.floor(Math.random() * (11) + 1);
var cryst3 = Math.floor(Math.random() * (11) + 1);
var cryst4 = Math.floor(Math.random() * (11) + 1);


//get random number

function getNumber() {

    randomnumber = Math.floor(Math.random() * (101) + 19);
    $('#result').html(randomnumber);
    console.log(randomnumber);
}




//function wins/loss

function win() {
    wins++;
    $('#win').text(wins);
userScore=0;
getNumber();
}

function loss() {
    losses++;
    $('#loss').text(losses);
    userScore=0;
    getNumber();

}

//onclick 

$("#1").on('click', function () {
    userScore = userScore + cryst1;
console.log("userScore " + userScore);
    $('#totalScore').text(userScore);
    //sets win/lose conditions
    if (userScore == randomnumber) {
        win();
    } else if (userScore > randomnumber) {
        loss();
    }
})

$("#2").on('click', function () {
    userScore = userScore + cryst2;
console.log("userScore " + userScore);
    $('#totalScore').text(userScore);
    //sets win/lose conditions
    if (userScore == randomnumber) {
        win();
    } else if (userScore > randomnumber) {
        loss();
    }
})

$("#3").on('click', function () {
    userScore = userScore + cryst3;
console.log("userScore " + userScore);
    $('#totalScore').text(userScore);
    //sets win/lose conditions
    if (userScore == randomnumber) {
        win();
    } else if (userScore > randomnumber) {
        loss();
    }
})



$("#4").on('click', function () {
    userScore = userScore + cryst4;
console.log("userScore " + userScore);
    $('#totalScore').text(userScore);
    //sets win/lose conditions
    if (userScore == randomnumber) {
        win();
    } else if (userScore > randomnumber) {
        loss();
    }
})


getNumber();
