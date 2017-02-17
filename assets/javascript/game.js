var winAmount = 0;
var lossAmount = 0;

var computerGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

for (var i=0, t=27; i<t; i++) {
    computerGuess.push(Math.round(Math.random() * t))
}

var userGuess = "";

function guess() {
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


//connecting the keycodes

document.body.onkeyup  = function(e){
	
		if (e.keyCode == 65){
			userGuess = "a";
			// userGuess = "a";
			guess();
		}
		if (e.keyCode == 66){
			//pushing the b
			userGuess = "b";
			guess();
		}
		if (e.keyCode == 67){
			//pushing the c
			userGuess = "c";
			guess();
		}
		if (e.keyCode == 68){
			//pushing the d
			userGuess = "d";
			guess();
		}
		if (e.keyCode == 69){
			//pushing the e
			userGuess = "d";
			guess();
		}
		if (e.keyCode == 70){
			//pushing the f
			userGuess = "f";
			guess();
		}
		if (e.keyCode == 71){
			//pushing the g
			userGuess = "g";
			guess();
		}
		if (e.keyCode == 72){
			//pushing the h
			userGuess = "h";
			guess();
		}
		if (e.keyCode == 73){
			//pushing the i
			userGuess = "i";
			guess();
		}
		if (e.keyCode == 74){
			//pushing the j
			userGuess = "j";
			guess();
		}
		if (e.keyCode == 75){
			//pushing the k
			userGuess = "k";
			guess();
		}
		if (e.keyCode == 76){
			//pushing the l
			userGuess = "l";
			guess();
		}
		if (e.keyCode == 77){
			//pushing the m
			userGuess = "m";
			guess();
		}
		if (e.keyCode == 78){
			//pushing the n
			userGuess = "n";
			guess();
		}
		if (e.keyCode == 79){
			//pushing the o
			userGuess = "o";
			guess();
		}
		if (e.keyCode == 80){
			//pushing the p
			userGuess = "p";
			guess();
		}
		if (e.keyCode == 81){
			//pushing the q
			userGuess = "q";
			guess();
		}
		if (e.keyCode == 82){
			//pushing the r
			userGuess = "r";
			guess();
		}
		if (e.keyCode == 83){
			//pushing the s
			userGuess = "s";
			guess();
		}
		if (e.keyCode == 84){
			//pushing the t
			userGuess = "t";
			guess();
		}
		if (e.keyCode == 85){
			//pushing the u
			userGuess = "u";
			guess();
		}
		if (e.keyCode == 86){
			//pushing the v
			userGuess = "v";
			guess();
		}
		if (e.keyCode == 87){
			//pushing the w
			userGuess = "w";
			guess();
		}
		if (e.keyCode == 88){
			//pushing the x
			userGuess = "x";
			guess();
		}
		if (e.keyCode == 89){
			//pushing the y
			userGuess = "y";
			guess();
		}
		if (e.keyCode == 90){
			//pushing the z
			userGuess = "z";
			guess();
		}
	};
//connecting the html	
var wins = document.getElementById("win-id");
var losses = document.getElementById("loss-id");
var guessesLeft = document.getElementById("guesses-left");