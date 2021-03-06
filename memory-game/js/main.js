

const cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImages: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diomonds",
		cardImages: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImages: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImages: "images/king-of-diamonds.png"
	}
];
const cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
	}
	else {
		alert("Sorry, try again.")
	}
}

function flipCard() {
	cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);

	this.setAttribute('src', cards[cardId].cardImages);


	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
	console.log(cards[cardId].cardImages);
	console.log(cards[cardId].suit);
}

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement)
	}
}
 createBoard();









