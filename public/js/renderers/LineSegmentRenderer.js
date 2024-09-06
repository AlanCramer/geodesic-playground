// LineSegmentRenderer.js
class LineSegmentRenderer {
    constructor(lineSegment, color = 'black', lineWidth = 1) {
      this.lineSegment = lineSegment;
      this.color = color;
      this.lineWidth = lineWidth;
    }
  
    draw(ctx) {
      ctx.strokeStyle = this.color;
      ctx.lineWidth = this.lineWidth;
      ctx.beginPath();
      ctx.moveTo(this.lineSegment.x1, this.lineSegment.y1);
      ctx.lineTo(this.lineSegment.x2, this.lineSegment.y2);
      ctx.stroke();
    }
  }
  
  export default LineSegmentRenderer;
  