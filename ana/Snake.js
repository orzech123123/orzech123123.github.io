class Snake {
    constructor(headX, headY) {
        let _head = new SnakeSegment(headX, headY, null);

        let _getMoveDiffVector = (direction) => {
            var diffVector = {
                x: 0,
                y: 0
            };
            if (direction === Directions.Right) {
                diffVector = {
                    x: 1,
                    y: 0
                };
            }
            if (direction === Directions.Left) {
                diffVector = {
                    x: -1,
                    y: 0
                };
            }
            if (direction === Directions.Up) {
                diffVector = {
                    x: 0,
                    y: -1
                };
            }
            if (direction === Directions.Down) {
                diffVector = {
                    x: 0,
                    y: 1
                };
            }
            return diffVector;
        }

        this.getHead = () => {
            return _head;
        };

        this.move = (direction) => {
            let diffVector = _getMoveDiffVector(direction);
            let beforeMoveLength = this.getLength();

            //Ta linijka doda zawsze jeden segment (ten następny pixel na który się ruszy)...
            let newHead = new SnakeSegment(_head.getX() + diffVector.x, _head.getY() + diffVector.y, _head);
            //...więc tu musimy usunąć ostatni segment w takim razie bo move nie ma zmieniać ilości segmentów tylko poruszać istniejące
            newHead = _removeLastSegment(newHead);

            _head = newHead;

            //dlatego tu sprawdzamy czy move nie zmienił przypadkiem długości węża przez jakieś złe operacje
            if (beforeMoveLength !== this.getLength()) {
                throw new Error("Length before and after move doesnt match");
            }
        }

        let _removeLastSegment = (head) => {
            let tmp = head;
            while (tmp) {
                let next = tmp.getNext();
                let nextAfterNext = next != null ? next.getNext() : null;
                if (!!next && !nextAfterNext) {
                    tmp.removeNext();
                    break;
                }
                tmp = next;
            }
            return head;
        }

        this.eatApple = (apple) => {
            let newHead = new SnakeSegment(apple.getX(), apple.getY(), _head);
            _head = newHead;
        }

        this.getLength = () => {
            let length = 0;
            let head = _head;
            while (head) {
                length++;
                head = head.getNext();
            }
            return length;
        }
    }
}