class InputManager {
    constructor(buttonUp, buttonRight, buttonDown, buttonLeft) {

        let _buttonUp = buttonUp;
        let _buttonRight = buttonRight;
        let _buttonDown = buttonDown;
        let _buttonLeft = buttonLeft;
        let _divChosen;

        this.getLastClickedButton = () => {
            return _divChosen;
        }

        let _addClickedListener = (button) => {
            button.addEventListener('click', (e) => {
                let div = e.target;
                _divChosen = Directions.GetDirection(div.className);

            })
        }
        _addClickedListener(_buttonUp);
        _addClickedListener(_buttonRight);
        _addClickedListener(_buttonLeft);
        _addClickedListener(_buttonDown);
    }
}