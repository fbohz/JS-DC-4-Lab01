// var prompt = require('prompt');
// var prompt = require('figlet');
var Card = require ('./card.js')
var Deck = require ('./deck.js')
var Player = require ('./player.js')

var testDeck = new Deck()
testDeck.createNewDeck()
// console.log( testDeck.cards )

var playerOne = new Player( 'one', testDeck.dealHand(26) )
var playerTwo = new Player( 'two', testDeck.dealHand(26) )
//use array map method to return player score.
var numbers = playerOne.map(function(player) { return player.score; });
console.log( playerOne.username,  numbers(5))
//console.log( playerTwo.username,  playerTwo.hand[5.rankScores] )

// for (var i = 0; i < playerOne.length; i++) {
//   console.log();
// }

// console.log('Let\'s begin.. \n');
//
// function game() {
// var win
// var i = 0
// var j = 0
// while ((i < 52) || (j < 52)) {
//   console.log('\n' + playerOne.username + ' draws: ' + playerOne[i] + '\n' + playerTwo.username + ' draws: ' + playerTwo[j]);
//   var i++
//   var j++
//   if (playerOne[i.score] === playerTwo[j.score]) {
//     console.log('WAR!!');
//     var count = []
//     do {
//
//     } while (true);
//   }
//
// }
//
// }
//
// game()


//(playerOne === win) || (playerTwo === win)
