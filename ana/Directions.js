class Directions {
  static Up = "up";
  static Down = "down";
  static Left = "left";
  static Right = "right";

  static GetDirection = (value) => {
    if (value == Directions.Up) return Directions.Up;
    if (value == Directions.Down) return Directions.Down;
    if (value == Directions.Left) return Directions.Left;
    if (value == Directions.Right) return Directions.Right;

    throw new Error("No such direction " + value);
  }
}