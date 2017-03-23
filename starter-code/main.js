console.log("JS file is connected to HTML! Woo!")

//creating the card variables
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

//creating matching conditional statements
// if(cardOne === cardTwo){
// 	alert("You found a match!")
// }
// else if(cardThree === cardFour){
// 	alert("You found a match!")
// }
// else alert("Sorry, try again");

var gameBoard = document.getElementById("game-board");

var createCards = function(){
	for (i = 0; i < 4; i++){
		var newCard = document.createElement('div')
		newCard.className = 'card';
		document.getElementById('game-board').appendChild(newCard);
	}
}

createCards();