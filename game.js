var Game = function(board, computer, human){
  this.board = board;
  this.computer = computer;
  this.human = human;
  this.turn = human;
};

Game.prototype.run = function(callback) {
  var that = this;
  var handleInput = function(pos) {
    that.board.placeMark(pos, that.turn.mark);
      if (that.board.won()) {
        that.handleGameOver();
        callback();
      } else {
        that.turn = (that.turn === that.human ? that.computer : that.human);
        that.run(callback);
      }
    };

  if (this.turn === this.human) {
    this.human.getMove(function(pos){
      handleInput(pos);
    });
  } else{
    this.computer.getMove(function(pos){
        handleInput(pos);
    });
  }
};

Game.prototype.handleGameOver = function () {
  this.board.print();
  var message = null;
  if (this.board.winner === "X") {
    message = "You win!";
  } else if (this.board.winner === "O") {
    message = "You lose!";
  } else {
    message = "Draw!";
  };

  document.getElementById("notice").innerHTML = message;
  document.getElementById("restart").style.visibility = "visible";
};
