var wins = 0;
var losses = 0;
var guesses = 5;
var currentword = [];
var playingarray = [];
var guessedletters = [];

var words = {
    name: "words",
    wordlist: ["abaft", "rapid", "magic", "spread", "seashore", "account", "rest", "spiky", "decision", "nifty"],
    getrandomword: function () {
        var arraylenght = this.wordlist.length;
        var randomnumber = Math.floor((Math.random() * arraylenght));
        return this.wordlist[randomnumber];
    },
    getwordlength: function (word) {
        return word.length;
    }
};
var randomword = words.getrandomword();
var randomwordlength = words.getwordlength(randomword);


gameBuilder();

function loadCurrentWordArray() {

    for (i = 0; i < randomwordlength; i++) {
        var loopletter = randomword.charAt(i);
        currentword.push(loopletter);
    }

};

function setInitialArray() {
    for (i = 0; i < randomwordlength; i++) {
        playingarray.push("_");
    }
};

function updateGuessedLetterArray(value) {
        guessedletters.push(value);
};


function updatePlayingArray(value) {
    for (i = 0; i < randomwordlength; i++) {
        if (value === currentword[i]) {
            playingarray[i] = value;
        }
    }

}

function displayPlayArea() {
    document.getElementById("stuffcontainer").innerHTML = playingarray.join(" ")

}

function gameBuilder() {
    guesses = 5;
    currentword = [];
    playingarray = [];
    guessedletters = [];
    randomword = words.getrandomword();
    randomwordlength = words.getwordlength(randomword);
    loadCurrentWordArray();
    setInitialArray();
    displayPlayArea();
    document.getElementById("guesses").innerHTML = "Number of Tries left: " + guesses;
    document.getElementById("numberofwins").innerHTML = "Number of Wins: " + wins;
    document.getElementById("numberoflosses").innerHTML = "Number of Losses: " + losses;
    document.getElementById("lettersguessed").innerHTML = "Letters Guessed: ";
};


function submitMe() {

    var inputvalue = document.getElementById('inputdefault').value;
    // clearPlayArea();
    updatePlayingArray(inputvalue);
    displayPlayArea();
    var arraycontains = currentword.includes(inputvalue)
    var arraycontainsunderscore = playingarray.includes("_")
    var arrayguessedcontains = guessedletters.includes(inputvalue);
    if (arraycontains !== true) {
        guesses--;
        updateGuessedLetterArray(inputvalue);
        
    }
    if (guesses <= 0) {
        alert("You Loose! :(");
        gameBuilder();
        losses++;

    }
    if (arraycontainsunderscore === false) {
        gameBuilder();
        alert("You Win!");
        wins++;

    }
    document.getElementById("guesses").innerHTML = "Number of Tries left: " + guesses;
    document.getElementById("numberofwins").innerHTML = "Number of Wins: " + wins;
    document.getElementById("numberoflosses").innerHTML = "Number of Losses: " + losses;

    if (arrayguessedcontains !== true) {
        document.getElementById("lettersguessed").innerHTML = "Letters Guessed: " + guessedletters.join(" ");

    }
    document.getElementById('inputdefault').value='';

    


}
console.log(randomword);




