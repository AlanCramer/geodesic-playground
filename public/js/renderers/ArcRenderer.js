// ArcRenderer.js
class ArcRenderer {
    constructor(arc, color = 'black', lineWidth = 1) {
      this.arc = arc;
      this.color = color;
      this.lineWidth = lineWidth;
    }
  
    draw(ctx) {
      ctx.strokeStyle = this.color;
      ctx.lineWidth = this.lineWidth;
      ctx.beginPath();
      ctx.arc(this.arc.x, this.arc.y, this.arc.radius, this.arc.startAngle, this.arc.endAngle);
      ctx.stroke();
    }
  }
  
  export default ArcRenderer;
  