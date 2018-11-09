var wins = 0;
var losses = 0;
var guesses = 5;
var anykeypressed = false;
var currentword = [];
var playingarray = [];
var guessedletters = [];
var wordlist = ["sky", "blueberry", "ocean", "cookiemonster", "sea", "glitter", "crayon", "butterfly", "lego", "smurf", "stitch", 'eyes', "dory", "sully", "the genie", "sonic", "flik"];

function getrandomword() {
    var arraylenght = wordlist.length;
    var randomnumber = Math.floor((Math.random() * arraylenght));
    return wordlist[randomnumber];
};

function getwordlength(word) {
    return word.length;
};

function stopRKey(evt) {
    var evt = (evt) ? evt : ((event) ? event : null);
    var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
    if ((evt.keyCode == 13)) {
        return false; 
    }
};

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

};

function displayPlayArea() {
    document.getElementById("stuffcontainer").innerHTML = playingarray.join(" ")

};

function gameBuilder() {
    guesses = 5;
    currentword = [];
    playingarray = [];
    guessedletters = [];
    randomword = getrandomword();
    randomwordlength = getwordlength(randomword);
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
    updatePlayingArray(inputvalue);
    displayPlayArea();
    var arraycontains = currentword.includes(inputvalue);
    var letterarraycontains = guessedletters.includes(inputvalue);
    var arraycontainsunderscore = playingarray.includes("_");
    var arrayguessedcontains = guessedletters.includes(inputvalue);
    if (arraycontains !== true && letterarraycontains !== true) {
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
    document.getElementById('inputdefault').value = '';
};
document.onkeyup = function (event) {
    if (anykeypressed === false && event.key !== "Meta") {
        document.getElementById("maincontainer").classList.remove('hidden');
        document.getElementById("headercontainer").classList.remove("hidden");
        document.getElementById("tempcontainer").classList.add("hidden");
        anykeypressed = true;

    }
    if (event.key === "Enter") {
        submitMe()

    }
};
document.onkeypress = stopRKey;
var randomword = getrandomword();
var randomwordlength = getwordlength(randomword);
gameBuilder();






