class Statistics {
    constructor(winsPlayer, winsComputer, draws, whoWin) {
        let _winsPlayer = winsPlayer;
        let _winsComputer = winsComputer;
        let _draws = draws;
        let _pointPlayer = 0;
        let _pointComputer = 0;
        let _pointDraw = 0;
        let _whoWin = whoWin;


        this.givePointWinner = (lastTurnResult) => {
            if (lastTurnResult === TurnResult.PlayerWin) {
                _pointPlayer++;
                _winsPlayer.textContent = _pointPlayer;
                _whoWin.textContent = "Wygrałeś";
                _whoWin.style.color = "green"

            }

            if (lastTurnResult === TurnResult.ComputerWin) {
                _pointComputer++;
                _winsComputer.textContent = _pointComputer;
                _whoWin.textContent = "Przegrałeś";
                _whoWin.style.color = "red"
            }

            if (lastTurnResult === TurnResult.Draw) {
                _pointDraw++;
                _draws.textContent = _pointDraw;
                _whoWin.textContent = "Remis"
                _whoWin.style.color = "gray"

            }
        }

        this.clearWhoWinLabel = () => {
            _whoWin.textContent = "";
        }

        this.clear = () => {
            _pointPlayer = _pointComputer = _pointDraw = 0;
            _winsPlayer.textContent = _pointPlayer;
            _winsComputer.textContent = _pointComputer;
            _draws.textContent = _pointDraw;

        }

    }
}