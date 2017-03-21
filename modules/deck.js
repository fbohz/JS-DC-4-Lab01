var Card = require ('./card.js')


module.exports = function Deck (  ) {

  this.createNewDeck = function() {

    var deck = []

    for (var i = 0; i < suits.length; i++) {
      for (var j = 0; j < ranks.length; j++) {
        deck.push( new Card( suits[i], ranks[j] ) )
      }
    }

    return deck
  }

  this.cards = this.createNewDeck()

  this.dealHand = function( length ) {

    if ( this.cards.length === 0 ) {
      this.cards = this.createNewDeck()
    }

    var handLength = length || 1

    if ( handLength === 1 ) {

      return this.cards[ Math.random() * this.cards.length ]

    } else {

      var hand = []

      for (var i = 0; i < handLength; i++) {
        var card = this.cards.splice( Math.random() * this.cards.length, 1 )
        hand.push( card )
      }

      return hand
    }

  }

}

// var testDeck = new Deck()
// testDeck.createNewDeck()


// console.log( testDeck.cards )
// console.log( testDeck.cards.length )
