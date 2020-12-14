class SnakeSegment {
    constructor(x, y, next) {
        let _x = x;
        let _y = y;
        let _next = next;
        this.getX = () => {
            return _x;
        };
        this.getY = () => {
            return _y;
        }
        this.getNext = () => {
            return _next;
        }
        this.removeNext = () => {
            _next = null;
        }
    }
}