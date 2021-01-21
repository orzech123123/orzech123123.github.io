class Card {
    constructor(cardValue) {
        let _cardValue = cardValue;
        this.getValue = () => {
            return _cardValue;
        }
    }
}