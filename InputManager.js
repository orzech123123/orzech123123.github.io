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
                let target = e.target;
                _divChosen = Directions.GetDirectionFromButton(target.className);

            })
        }
        _addClickedListener(_buttonUp);
        _addClickedListener(_buttonRight);
        _addClickedListener(_buttonLeft);
        _addClickedListener(_buttonDown);



        let _logKey = (e) => {
            let direction = Directions.GetDirectionFromKey(e.code);
            if (direction != null) {
                _divChosen = direction;
            }
            e.preventDefault();
            // console.log(Directions.GetDirectionFromKey(e.code));
        }
        document.addEventListener('keydown', _logKey);

        this.reset = () => {
            _divChosen = null;
        }
    }
}