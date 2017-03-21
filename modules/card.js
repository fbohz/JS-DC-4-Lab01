
// export variable
exports.suits = ['hearts', 'clubs', 'spades', 'diamonds']
exports.ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']

/*

Card Scores: ace: 1, two: 2, three: 3, four: 4, ... jack: 11, king: 12, queen: 13

*/
//object variable
exports.rankScores = {
  ace: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  jack: 11,
  king: 12,
  queen: 13
}

/*

Create a `constructor` (A function that returns an object) for a card. Each card should have a suit, rank and score as well as a title. The title should be a string descriptor for the card, like 'Ace of Hearts' or 'Four of Clubs'

Test out your constructor by creating a new card, `console.log`ing it to make sure you're getting what you expect. You should get something like:

{
  suit: 'hearts',
  rank: 'ace',
  title: 'ace of hearts',
  score: 1
}

*/

suits = exports.suits
ranks = exports.ranks
rankScores = exports.rankScores

module.exports = function Card ( suit, rank ) {
  this.suit = suit
  this.rank = rank
  this.title = rank + ' of ' + suit
  //pulling the rank value out by the key, which is stored in the variable ranScores
  this.score = rankScores[ rank ]
}

//var aceOfHearts = new Card( suits[0], ranks[0] )
// console.log( aceOfHearts )
