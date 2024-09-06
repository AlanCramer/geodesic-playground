// PointRenderer.js
class PointRenderer {
    constructor(point, color = 'black', radius = 5) {
      this.point = point;
      this.color = color;
      this.radius = radius;
    }
  
    draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.point.x, this.point.y, this.radius, 0, 2 * Math.PI);
      ctx.fill();
    }
  }
  
  export default PointRenderer;
  