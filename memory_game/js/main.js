var cards = [
	{
		suit: 'diamonds',
		name: 'king',
		cardImage: 'images/king-of-diamonds.png'
	},
	{
		suit: 'hearts',
		name: 'king',
		cardImage: 'images/king-of-hearts.png'
	},
	{
		suit: 'diamonds',
		name: 'queen',
		cardImage: 'images/queen-of-diamonds.png'
	},
	{
		suit: 'hearts',
		name: 'queen',
		cardImage: 'images/queen-of-hearts.png'
	},
]
var cardsInPlay = [];

function checkForMatch () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert('You found a match!');
	} else {
		alert('Sorry, try again.');
	}
}

function flipCard () {
	var cardID = this.getAttribute('data-id');
	console.log('User flipped ' + cards[cardID].name);
	this.setAttribute('src',cards[cardID].cardImage);
	cardsInPlay.push(cards[cardID].name);
	if (cardsInPlay.length === 2) {
		checkForMatch();	
	}
	console.log(cards[cardID].suit);
	console.log(cards[cardID].cardImage);
}

function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
}

createBoard();
