var winAmount = 0;
var lossAmount =  0;
var guessTotal = [""];
var userGuess = "";
var computerGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

for (var i=0, t=26; i<t; i++) {
    computerGuess.push(Math.round(Math.random() * t))
}

if (winAmount <= 5) {


	function guess() {

		guessesLeft.textContent = guessTotal;

		if (userGuess  === computerGuess) {
			alert("The Computer guessed it!");
			lossAmount++;
			losses.textContent = lossAmount;
		}
		else {
			alert("You won!");
			winAmount++;
			wins.textContent = winAmount;
		}
	}
};

//connecting the keycodes

document.body.onkeyup  = function(e){
	
		if (e.keyCode == 65){
			userGuess = "a";
			guessTotal = "a";
			// userGuess = "a";
			guess();
		}
		if (e.keyCode == 66){
			//pushing the b
			userGuess = "b";
			guessTotal = "b";
			guess();
		}
		if (e.keyCode == 67){
			//pushing the c
			userGuess = "c";
			guessTotal = "c";
			guess();
		}
		if (e.keyCode == 68){
			//pushing the d
			userGuess = "d";
			guessTotal = "d";
			guess();
		}
		if (e.keyCode == 69){
			//pushing the e
			userGuess = "e";
			guessTotal = "e";
			guess();
		}
		if (e.keyCode == 70){
			//pushing the f
			userGuess = "f";
			guessTotal = "f";
			guess();
		}
		if (e.keyCode == 71){
			//pushing the g
			userGuess = "g";
			guessTotal = "g";
			guess();
		}
		if (e.keyCode == 72){
			//pushing the h
			userGuess = "h";
			guessTotal = "h";
			guess();
		}
		if (e.keyCode == 73){
			//pushing the i
			userGuess = "i";
			guessTotal = "i";
			guess();
		}
		if (e.keyCode == 74){
			//pushing the j
			userGuess = "j";
			guessTotal = "j";
			guess();
		}
		if (e.keyCode == 75){
			//pushing the k
			userGuess = "k";
			guessTotal = "k";
			guess();
		}
		if (e.keyCode == 76){
			//pushing the l
			userGuess = "l";
			guessTotal = "l";
			guess();
		}
		if (e.keyCode == 77){
			//pushing the m
			userGuess = "m";
			guessTotal = "m";
			guess();
		}
		if (e.keyCode == 78){
			//pushing the n
			userGuess = "n";
			guessTotal = "n";
			guess();
		}
		if (e.keyCode == 79){
			//pushing the o
			userGuess = "o";
			guessTotal = "o";
			guess();
		}
		if (e.keyCode == 80){
			//pushing the p
			userGuess = "p";
			guessTotal = "p";
			guess();
		}
		if (e.keyCode == 81){
			//pushing the q
			userGuess = "q";
			guessTotal = "q";
			guess();
		}
		if (e.keyCode == 82){
			//pushing the r
			userGuess = "r";
			guessTotal = "r";
			guess();
		}
		if (e.keyCode == 83){
			//pushing the s
			userGuess = "s";
			guessTotal = "s";
			guess();
		}
		if (e.keyCode == 84){
			//pushing the t
			userGuess = "t";
			guessTotal = "t";
			guess();
		}
		if (e.keyCode == 85){
			//pushing the u
			userGuess = "u";
			guessTotal = "u";
			guess();
		}
		if (e.keyCode == 86){
			//pushing the v
			userGuess = "v";
			guessTotal = "v";
			guess();
		}
		if (e.keyCode == 87){
			//pushing the w
			userGuess = "w";
			guessTotal = "w";
			guess();
		}
		if (e.keyCode == 88){
			//pushing the x
			userGuess = "x";
			guessTotal = "x";
			guess();
		}
		if (e.keyCode == 89){
			//pushing the y
			userGuess = "y";
			guessTotal = "y";
			guess();
		}
		if (e.keyCode == 90){
			//pushing the z
			userGuess = "z";
			guessTotal = "z";
			guess();
		}
	};
//connecting the html	
var wins = document.getElementById("win-id");
var losses = document.getElementById("loss-id");
var guessesLeft = document.getElementById("guesses-left");