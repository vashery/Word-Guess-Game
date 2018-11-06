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

var rounds = 0;
var guesses = 0;
var randomword = words.getrandomword();
var randomwordlength = words.getwordlength(randomword);
var currentword = [];
for (i = 0; i < randomwordlength; i++) {
    var loopletter = randomword.charAt(i);
    currentword.push(loopletter);
}

var playingarray = [];

function setInitialArray() {
    for (i = 0; i < randomwordlength; i++) {
        playingarray.push("_")
    }
}
setInitialArray();
displayPlayArea();

function updatePlayingArray(value) {
    for (i = 0; i < randomwordlength; i++) {
        if (value === currentword[i]) {
            playingarray[i] = value;
        }
    }

}

function clearPlayArea() {
    var containerdiv = document.getElementById("stuffcontainer");
    containerdiv.parentNode.removeChild(containerdiv);

}

function displayPlayArea() {
    for (i = 0; i < randomwordlength; i++) {
        var maincontainer = document.getElementById("maincontainer");
        var createul = document.createElement("ul");
        createul.id = "stuffcontainer";
        createul.className = "list-inline d-flex justify-content-center";
        maincontainer.appendChild(createul);
        var mydiv = document.getElementById("stuffcontainer");
        var creatediv = document.createElement("li");
        creatediv.id = 'wordnumber' + i;
        creatediv.className = "list-inline-item";
        mydiv.appendChild(creatediv);
        creatediv.appendChild(document.createTextNode(playingarray[i]));
    }

}
function submitMe() {
    var inputvalue = document.getElementById('inputdefault').value;
    clearPlayArea();
    updatePlayingArray(inputvalue);
    displayPlayArea();
}








console.log(randomword);
console.log(words.getwordlength(randomword));




