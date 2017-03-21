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
// console.log( playerOne.username,  playerOne.hand )
// console.log( playerTwo.username,  playerTwo.hand )

console.log('Let\'s begin.. \n');
//var count = 0
function game() {

  for (var i = 26; i <= 0; i--) {
    for (var j = 26; j <= 0; j--) {
      //console.log('Round:' + j);
      console.log('\n' + playerOne.username + ' draws: ' + playerOne[i] + '\n' + playerTwo.username + ' draws: ' + playerTwo[j]);
      if (playerOne[i.score] > playerTwo[j.score]) {
        playerOne.push(playerTwo[j])
        playerTwo.splice(0, j);        // Removes the j element of player
        console.log(playerOne.username + ' wins round!');
      } else if (playerTwo[j.score] > playerOne[i.score]){
        playerTwo.push(playerOne[i])
        playerOne.splice(0, i);        // Removes the i element of player
        console.log(playerTwo.username + ' wins round!');
      }
      else {
        console.log('WAR!!');
        var count = []
        do {
          console.log('\n' + playerOne.username + ' draws: ' + playerOne[i] + '\n' + playerTwo.username + ' draws: ' + playerTwo[j]);
          if (playerOne[i.score] > playerTwo[j.score]){
            if (count) {
              playerOne.push(count)
              console.log(playerOne.username + ' wins WAR round!!');
            } else {
              playerOne.push(playerTwo[j])
              playerTwo.splice(0, j);
              console.log(playerOne.username + ' wins WAR round!!');
            }

          } else if(playerTwo[j.score] > playerOne[i.score]){
            if (count) {
              playerTwo.push(count)
              console.log(playerTwo.username + ' wins WAR round!!');

            } else {
              playerTwo.push(playerOne[i])
              playerOne.splice(0, i);
              console.log(playerTwo.username + ' wins WAR round!!');
            }


          }else {
            count.push(playerOne[i], playerTwo[j])
            playerOne.splice(0, i);
            playerTwo.splice(0, j);
          }

        } while (!(playerOne[i.score] > playerTwo[j.score]) || (playerTwo[j.score] > playerOne[i.score]));
      }
      if (playerOne.length === 0) {
        console.log('Game Over!' + playerOne.username + 'is without cards! ' + '\n the winner is: ' + playerTwo.username + '!!');
      }else if (playerTwo.length === 0) {
        console.log('Game Over!' + playerTwo.username + 'is without cards! ' + '\n the winner is: ' + playerOne.username + '!!');
      }

    }
  }
}

game()
