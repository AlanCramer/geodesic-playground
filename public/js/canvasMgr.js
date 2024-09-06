import { Point, LineSegment, Circle } from './shapes.js';

class CanvasManager {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.shapes = [];
  }

  addShape(shape) {
    this.shapes.push(shape);
    this.draw();
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  draw() {
    this.clear();
    for (const shape of this.shapes) {
      shape.draw(this.ctx);
    }
  }
}

export default CanvasManager;
