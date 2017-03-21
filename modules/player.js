
var Card = require ('./card.js')
var Deck = require ('./deck.js')

module.exports = function Player( username, hand ){
  this.username = username
  this.hand = hand || []
  this.score = hand[].score
}

// var playerOne = new Player( 'Zakk', testDeck.dealHand(7) )
// var playerTwo = new Player( 'Christine', testDeck.dealHand(7) )

// console.log( playerOne.username,  playerOne.hand )
// console.log( playerTwo.username,  playerTwo.hand )
