import Point from './geometry/Point.js';
import LineSegment from './geometry/LineSegment.js';
import Arc from './geometry/Arc.js';

import PointRenderer from './renderers/PointRenderer.js';
import LineSegmentRenderer from './renderers/LineSegmentRenderer.js';
import ArcRenderer from './renderers/ArcRenderer.js';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  // Create geometry objects
  const point = new Point(100, 100);
  const line = new LineSegment(150, 150, 300, 300);
  const arc = new Arc(400, 300, 50, 0, Math.PI / 2);

  // Create corresponding renderers
  const pointRenderer = new PointRenderer(point, 'red');
  const lineRenderer = new LineSegmentRenderer(line, 'blue', 6);
  const arcRenderer = new ArcRenderer(arc, 'green', 2);

  // Draw all shapes
  pointRenderer.draw(ctx);
  lineRenderer.draw(ctx);
  arcRenderer.draw(ctx);
});
