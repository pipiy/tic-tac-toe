class TicTacToe {
    // [[0, 0, 0]
    // [0, 0, 0]
    // [0, 0, 0]]

    constructor() {
      this.board = [[null, null, null],[null, null, null],[null, null, null]];
      this.current = 'x';
      this.step = 0;
    }

    getCurrentPlayerSymbol() {
      return this.current;
    }

    nextTurn(rowIndex, columnIndex) {
      if (this.board[rowIndex][columnIndex] == null) {
        this.board[rowIndex][columnIndex] = this.current;

        if (this.current == 'x') {
          this.current = 'o';
        } else {
          this.current = 'x';
        }
        this.step += 1;
      }
    }

    isFinished() {
      return this.noMoreTurns() || this.getWinner() != null;
    }

    getWinner() {
      let winner =
        // row
        (this.board[0][0] == this.board[0][1] && this.board[0][1] == this.board[0][2] && this.board[0][2] == this.board[0][0] && this.board[0][0]) ||
        (this.board[1][0] == this.board[1][1] && this.board[1][1] == this.board[1][2] && this.board[1][2] == this.board[1][0] && this.board[1][0]) ||
        (this.board[2][0] == this.board[2][1] && this.board[2][1] == this.board[2][2] && this.board[2][2] == this.board[2][0] && this.board[2][0]) ||
        // column
        (this.board[0][0] == this.board[1][0] && this.board[1][0] == this.board[2][0] && this.board[2][0] == this.board[0][0] && this.board[0][0]) ||
        (this.board[0][1] == this.board[1][1] && this.board[1][1] == this.board[2][1] && this.board[2][1] == this.board[0][1] && this.board[0][1]) ||
        (this.board[0][2] == this.board[1][2] && this.board[1][2] == this.board[2][2] && this.board[2][2] == this.board[0][2] && this.board[0][2]) ||
        // diagnol
        (this.board[0][0] == this.board[1][1] && this.board[1][1] == this.board[2][2] && this.board[2][2] == this.board[0][0] && this.board[0][0]) ||
        (this.board[2][0] == this.board[1][1] && this.board[1][1] == this.board[0][2] && this.board[0][2] == this.board[2][0] && this.board[2][0])

      if (!winner) return null;
      return winner;
    }

    noMoreTurns() {
      return this.step == 9;
    }

    isDraw() {
      return this.noMoreTurns() && this.getWinner() == null;
    }

    getFieldValue(rowIndex, colIndex) {
      return this.board[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
