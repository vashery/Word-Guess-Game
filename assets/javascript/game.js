
var userText = document.getElementById("inputdefault");

var words = {
    name: "words",
    wordlist: ["abaft", "rapid", "magic", "spread", "seashore", "account", "rest", "spiky", "decision", "nifty"],
    getrandomword: function() {
    var arraylenght = this.wordlist.length;
    var randomnumber = Math.floor((Math.random() * arraylenght));
    return this.wordlist[randomnumber];
    },
    getwordlength: function(word){
        return word.length;
    } 
};

var randomword = words.getrandomword();
var randomwordlength = words.getwordlength(randomword);
console.log(randomword);
console.log(words.getwordlength(randomword));
for (i = 0; i < randomwordlength; i++) {
    var mydiv = document.getElementById("stuffcontainer");
    var creatediv = document.createElement("div");
    creatediv.id = 'wordnumber' + i;
    mydiv.appendChild(creatediv);
    creatediv.appendChild(document.createTextNode(i));

}