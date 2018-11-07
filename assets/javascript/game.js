var guesses = 5;
var currentword = [];
var playingarray = [];


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



function updatePlayingArray(value) {
    for (i = 0; i < randomwordlength; i++) {
        if (value === currentword[i]) {
            playingarray[i] = value;
        }
    }

}


// function clearPlayArea() {
//     var containerdiv = document.getElementById("stuffcontainer");
//     containerdiv.parentNode.removeChild(containerdiv);

// }

// function displayPlayArea() {
//     var maincontainer = document.getElementById("maincontainer");
//         var createul = document.createElement("ul");
//         createul.id = "stuffcontainer";
//         createul.className = "list-inline d-flex justify-content-center";
//         maincontainer.appendChild(createul);
//     for (i = 0; i < randomwordlength; i++) {
//         var mydiv = document.getElementById("stuffcontainer");
//         var creatediv = document.createElement("li");
//         creatediv.id = 'wordnumber' + i;
//         creatediv.className = "list-inline-item";
//         mydiv.appendChild(creatediv);
//         creatediv.appendChild(document.createTextNode(playingarray[i]));
//     }
// }

function displayPlayArea() {
    document.getElementById("stuffcontainer").innerHTML = playingarray.join(" ")

}

function gameBuilder() {
    // clearPlayArea();
    guesses = 5;
    currentword = [];
    playingarray = [];
    randomword = words.getrandomword();
    randomwordlength = words.getwordlength(randomword);
    loadCurrentWordArray();
    setInitialArray();
    displayPlayArea();
    console.log(randomword);
    document.getElementById("guesses").innerHTML = "Number of Tries left: " + guesses;
};


function submitMe() {

    var inputvalue = document.getElementById('inputdefault').value;
    // clearPlayArea();
    updatePlayingArray(inputvalue);
    displayPlayArea();
    var arraycontains = currentword.includes(inputvalue)
    var arraycontainsunderscore = playingarray.includes("_")
    if (arraycontains !== true) {
        guesses--;
    }
    if (guesses <= 0) {
        gameBuilder();
    }
    if (arraycontainsunderscore === false) {
        gameBuilder();
    }
    document.getElementById("guesses").innerHTML = "Number of Tries left: " + guesses;
}






console.log(randomword);
console.log(words.getwordlength(randomword));




