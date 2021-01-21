class Game {
    constructor() {
        let _isGameStarted = false;
        let _choosenPlayerImg = document.getElementById('choosenPlayer');
        let _choosenComputerImg = document.getElementById('choosenComputer');
        let _choosenPlayerImg2 = document.getElementById('choosenPlayer2');
        let _choosenComputerImg2 = document.getElementById('choosenComputer2');

        let _playerDeckImg = document.getElementById("playerDeck");
        let _computerDeckImg = document.getElementById("computerDeck");

        let _playerContainer = document.querySelector('.card');
        let _computerContainer = document.querySelector('.card2');

        let _cardAnimator = new CardAnimator(_playerDeckImg, _computerDeckImg, _choosenPlayerImg, _choosenComputerImg, _playerContainer, _computerContainer);

        let _cardsManager = new CardsManager(_choosenPlayerImg, _choosenComputerImg, _choosenPlayerImg2, _choosenComputerImg2);



        let _winsPlayerSpan = document.querySelector("p.wins-player span");
        let _winsComputerSpan = document.querySelector("p.wins-computer span");
        let _drawsSpan = document.querySelector("p.draws span");
        let _whoWinSpan = document.querySelector('[data-summary="who-win"]');

        let _statistics = new Statistics(_winsPlayerSpan, _winsComputerSpan, _drawsSpan, _whoWinSpan);

        let _showContainers = () => {
            _playerContainer.classList.remove('is-none');
            _computerContainer.classList.remove('is-none');
        };

        let _givePointWinner = (time) => {
            let lastTurnResult = _cardsManager.getLastTurnResult();
            setTimeout(() => {
                _statistics.givePointWinner(lastTurnResult)
            }, time);
        }

        let _onStartClick = () => {

            if (_isGameStarted) return;

            _cardAnimator.animatePlayerCard();
            _cardAnimator.animateComputerCard();

            setTimeout(() => {
                _cardAnimator.flipPlayerCard();
                _cardAnimator.flipComputerCard();
                _showContainers();
                _cardsManager.generateCards();
                _cardsManager.giveCards();
                _statistics.clear();

                _cardsManager.makeNextTurn();

                _givePointWinner(1)

                _cardsManager.logCards();

                _isGameStarted = true;
            }, 2000)
        };

        let _onNextClick = () => {
            if (!_isGameStarted) return;

            _cardAnimator.animatePlayerCard();
            _cardAnimator.animateComputerCard();

            _statistics.clearWhoWinLabel();
            setTimeout(() => {

                _cardAnimator.flipPlayerCard();
                _cardAnimator.flipComputerCard();


                console.log('--------------------------------------')
                if (_cardsManager.makeNextTurn()) {
                    _cardsManager.clearCards();
                    _whoWinSpan.textContent = "KONIEC GRY";
                    drawTitle("KONIEC GRY");
                    _isGameStarted = false;
                    console.log('koniec gry!!!');
                    setTimeout(() => {
                        location.reload();
                    }, 5000);
                } else {
                    _givePointWinner(1000);
                }

                _cardsManager.logCards();
                console.log('--------------------------------------')
            }, 2000);
        }

        let _startButton = document.getElementsByClassName('start')[0];
        _startButton.addEventListener('click', () => {
            _onStartClick();
        });



        let _nextTurnButton = document.getElementsByClassName('next')[0];
        _nextTurnButton.addEventListener('click', () => {
            _onNextClick();
        });

        let _autoInterval = null;
        let _autoButton = document.getElementsByClassName('auto')[0];
        _autoButton.addEventListener('click', () => {
            if (!_isGameStarted) return;

            _autoButton.classList.toggle("active");

            if (_autoInterval != null) {
                clearInterval(_autoInterval)
                _autoInterval = null;
                _nextTurnButton.removeAttribute("disabled");
            } else {
                _nextTurnButton.setAttribute("disabled", "true");
                _onNextClick();
                _autoInterval = setInterval(() => {
                    _onNextClick();
                }, 3000);
            }
        });

    }
}