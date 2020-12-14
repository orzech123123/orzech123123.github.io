class Game {
    constructor(height, width, htmlElement, buttonUp, buttonRight, buttonDown, buttonLeft) {
        let _display = new Display(height, width);
        let _htmlElement = htmlElement;
        let _width = width;
        let _height = height;
        let _snake = new Snake(width / 2, height / 2);
        let _inputManager = new InputManager(buttonUp, buttonRight, buttonDown, buttonLeft);

        let _applesArray = [];
        let _initApples = () => {
            for (let i = 0; i < 5; i++) {
                const x = Math.floor(Math.random() * _width) + 1;
                const y = Math.floor(Math.random() * _height) + 1;
                _applesArray.push(new Apple(x, y));
            }
        }
        _initApples();

        this.updateLogic = () => {
            let snakeDirection = _inputManager.getLastClickedButton();

            let head = _snake.getHead();
            let snakeTmp = new Snake(head.getX(), head.getY());
            snakeTmp.move(snakeDirection);
            head = snakeTmp.getHead();

            let appleToEat = null;
            for (const apple of _applesArray) {
                if (apple.getX() === head.getX() &&
                    apple.getY() === head.getY()) {
                    appleToEat = apple;
                    console.log("mniam")
                    break;
                }
            }

            if (appleToEat) {
                _snake.eatApple(appleToEat);
                _applesArray.splice(_applesArray.indexOf(appleToEat), 1);
            } else {
                _snake.move(snakeDirection);
            }

            console.log("Snake length: " + +_snake.getLength());
        }

        this.render = () => {
            _display.clear();

            let head = _snake.getHead();
            while (head) {
                _display.changeColor(head.getX(), head.getY(), 'green');
                head = head.getNext();
            }

            for (const apple of _applesArray) {
                _display.changeColor(apple.getX(), apple.getY(), "red");
            }
            _display.render(_htmlElement);
        }

        this.start = () => {
            setInterval(() => {
                this.updateLogic();
                this.render();
            }, 400);
        }
    }
}