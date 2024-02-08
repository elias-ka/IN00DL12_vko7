export default class Shape {
  _x;
  _y;
  _lineWidth;
  _color;

  constructor(x, y) {
    this._x = x;
    this._y = y;
  }

  set lineWidth(width) {
    this._lineWidth = width;
  }

  set color(color) {
    this._color = color;
  }
}
