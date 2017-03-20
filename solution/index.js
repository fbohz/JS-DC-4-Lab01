var prompt = require('prompt')
var Player = require('./models/player')
var GameOfWar = require('./models/Game')

prompt.start()

prompt.get(['playerOneUsername', 'playerTwoUsername'], function( err, result ) {

  var playerOne = new Player( result.playerOneUsername )
  var playerTwo = new Player( result.playerTwoUsername )

  var Game = new GameOfWar( playerOne, playerTwo )
  Game.play()

})
