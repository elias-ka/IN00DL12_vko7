import Rectangle from "./Rectangle.js";

export default class Square extends Rectangle {
  constructor(x, y, width) {
    super(x, y, width, width);
  }
}
