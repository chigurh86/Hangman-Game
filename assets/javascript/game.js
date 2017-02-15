var wins = 0;
var losses = 0;
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];



if (wins < 5){
	function guessA() {
		if (userGuess === "a" && computerGuess === "a") {
			alert("The Computer guessed it!");
			losses++;
		}
		else {
			alert("You won!");
			wins++;
		}
	}
	function guessB() {
		if (userGuess === "b" && computerGuess === "b") {
			alert("The Computer guessed it!");
			losses++;
		}
		else{
			alert("You won!");
			wins++;
		}
	}
}

//connecting the keycodes
document.body.onkeyup = function(e){

		if (e.keyCode == 65){
			//pushing the a
			var userGuess = "a";
			guessA();
		}

		if (e.keyCode == 66){
			//pushing the b
			userGuess = "b";
			guessB();
		}
		if (e.keyCode == 67){
			//pushing the c
			userGuess = "c";
			guessC();
		}
		if (e.keyCode == 68){
			//pushing the d
		}
		if (e.keyCode == 69){
			//pushing the e
		}
		if (e.keyCode == 70){
			//pushing the f
		}
		if (e.keyCode == 71){
			//pushing the g
		}
		if (e.keyCode == 72){
			//pushing the h
		}
		if (e.keyCode == 73){
			//pushing the i
		}
		if (e.keyCode == 74){
			//pushing the j
		}
		if (e.keyCode == 75){
			//pushing the k
		}
		if (e.keyCode == 76){
			//pushing the l
		}
		if (e.keyCode == 77){
			//pushing the m
		}
		if (e.keyCode == 78){
			//pushing the n
		}
		if (e.keyCode == 79){
			//pushing the o
		}
		if (e.keyCode == 80){
			//pushing the p
		}
		if (e.keyCode == 81){
			//pushing the q
		}
		if (e.keyCode == 82){
			//pushing the r
		}
		if (e.keyCode == 83){
			//pushing the s
		}
		if (e.keyCode == 84){
			//pushing the t
		}
		if (e.keyCode == 85){
			//pushing the u
		}
		if (e.keyCode == 86){
			//pushing the v
		}
		if (e.keyCode == 87){
			//pushing the w
		}
		if (e.keyCode == 88){
			//pushing the x
		}
		if (e.keyCode == 89){
			//pushing the y
		}
		if (e.keyCode == 90){
			//pushing the z
		}
	};
//connecting the html	
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var guessesLeft = document.getElementById("guesses-left");