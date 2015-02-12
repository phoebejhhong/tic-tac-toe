var playTicTacToe = function () {
};

playTicTacToe.prototype.setUp = function () {
  this.board = new Board();
  this.computer = new Computer(this.board);
  this.human = new Human(this.board);
  this.game= new Game(this.board, this.computer, this.human);
};

playTicTacToe.prototype.play = function () {
  var that = this;
  this.game.run(this.restart.bind(this));
};

playTicTacToe.prototype.restart = function () {
  var that = this;
  document.getElementById("restart").onclick = function () {
    that.setUp();
    that.play();
    document.getElementById("restart").style.visibility = "hidden";
    document.getElementById("notice").innerHTML = "&nbsp;";
  };
};


var ttt = new playTicTacToe;
ttt.setUp();
ttt.play();
