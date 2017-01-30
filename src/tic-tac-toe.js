class TicTacToe {
    constructor() {
        this.currentTurn = 'x';
        this.winner = null;
        this.noMoreTurnsFlag = false;
        //this.lastTurnIndex = null;
        this.turnsNumber = 0;
        this.matrix = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
        ];

    }

    getCurrentPlayerSymbol() {
        return this.currentTurn;
    }

    nextTurn(rowIndex, columnIndex) 
    {
        if (this.matrix[rowIndex][columnIndex]==null)
        {
            this.matrix[rowIndex][columnIndex]=this.currentTurn;
            //this.lastTurnIndex = [rowIndex, columnIndex];
            this.turnsNumber += 1;

            if (this.currentTurn=='o') this.currentTurn='x';
            else this.currentTurn='o';

            if (this.turnsNumber>2)
            {
                var a1 = this.matrix[0][0];
                var a2 = this.matrix[0][1];
                var a3 = this.matrix[0][2];
                var b1 = this.matrix[1][0];
                var b2 = this.matrix[1][1];
                var b3 = this.matrix[1][2];
                var c1 = this.matrix[2][0];
                var c2 = this.matrix[2][1];
                var c3 = this.matrix[2][2];

                if (a1==a2 && a2==a3) this.winner = a1;
                if (b1==b2 && b2==b3) this.winner = b1;
                if (c1==c2 && c2==c3) this.winner = c1;
                if (a1==b1 && b1==c1) this.winner = a1;
                if (a2==b2 && b2==c2) this.winner = a2;
                if (a3==b3 && b3==c3) this.winner = a3;
                if (a1==b2 && b2==c3) this.winner = a1;
                if (a3==b2 && b2==c1) this.winner = a3;
            }
            outer:
            for (var row=0; row<=2; row++)
            {
                for (var col=0; col<=2; col++)
                {
                if (this.matrix[col][row] == null) break outer;
                if (row==2 && col==2) this.noMoreTurnsFlag = true;
                }
            }
        }

    }

    isFinished() {
        if ( this.winner!=null || this.noMoreTurnsFlag==true ) return true;
        else return false;
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {  
        return this.noMoreTurnsFlag;
    }

    isDraw() {
        if ( this.winner==null && this.noMoreTurnsFlag==true ) return true;
        else return false;
    }

    getFieldValue(rowIndex, columnIndex) {
        return this.matrix[rowIndex][columnIndex];
    }
}

module.exports = TicTacToe;
