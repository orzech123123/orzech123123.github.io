class Apple {
    constructor(x, y) {
        let _x = x;
        let _y = y;
        this.getX = () => {
            return _x;
        };

        this.getY = () => {
            return _y;
        }
    }
}