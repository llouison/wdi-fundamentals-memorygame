
//creating the card variables
// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

//creating matching conditional statements
// if(cardOne === cardTwo){
// 	alert("You found a match!")
// }
// else if(cardThree === cardFour){
// 	alert("You found a match!")
// }
// else alert("Sorry, try again");

//creating a card array to be looped through
var cards = ['minnie', 'minnie', 'mickey', 'mickey'];
//creating an empty array to place the cards played
var cardsInPlay = [];

var gameBoard = document.getElementById('game-board');

var createCards = function(){
	for (i = 0; i < cards.length; i++){
		var newCard = document.createElement('div')
		newCard.className = 'card';
		newCard.setAttribute('data-card', cards[i]);
		newCard.addEventListener('click', isTwoCards);
		document.getElementById('game-board').appendChild(newCard);
	}
}

function isMatch(cards){
	if (cards[0] === cards[1]){
		alert("You found a match!");
	}
	else {
		alert("Sorry, try again");
	}
}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'mickey') {
		this.innerHTML = "<img src='images/mickey.jpg' alt='baby mickey'>";
	} 
	else if (this.getAttribute('data-card') === 'minnie') {
		this.innerHTML = "<img src='images/minnie.jpg' alt='baby minnie'>";
	}
	if (cardsInPlay.length === 2){
		isMatch(cardsInPlay);
		//resetting the game board
		cardsInPlay = [];
	}
}

createCards();
