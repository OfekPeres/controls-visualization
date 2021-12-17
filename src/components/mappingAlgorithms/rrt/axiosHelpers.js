function convertObstaclesToBackendFormat(obstacles) {
  return obstacles.map((obstacle) => {
    switch (obstacle.shape) {
      case 'rectangle':
        const x_lower = obstacle.x;
        const y_lower = obstacle.y;
        const x_upper = x_lower + obstacle.w;
        const y_upper = y_lower + obstacle.h;
        return {
          shape: obstacle.shape,
          definition: [x_lower, y_lower, x_upper, y_upper],
        };
        break;

      case 'circle':
        return {
          shape: obstacle.shape,
          definition: [obstacle.x, obstacle.y, obstacle.r],
        };
        break;
      default:
        return null;
    }
  });
}

export function preparePayload(sketchState) {
  const payload = {};
  payload['start'] = [sketchState.startPoint.x, sketchState.startPoint.y];
  payload['goal'] = [sketchState.goalPoint.x, sketchState.goalPoint.y];
  payload['goalRadius'] = sketchState.goalPoint.radius;
  payload['width'] = sketchState.canvasWidth;
  payload['height'] = sketchState.canvasHeight;
  payload['d_max'] = sketchState.stepSize;
  payload['obstacles'] = convertObstaclesToBackendFormat(sketchState.obstacles);

  return payload;
}
