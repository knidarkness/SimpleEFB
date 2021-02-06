export function getWinds(
  rwyHeading: number,
  windDirection: number,
  windSpeed: number
): {
  headwind: number;
  crosswind: number;
} {
  const angleDifference = Math.abs(rwyHeading - windDirection);
  return {
    headwind: windSpeed * Math.cos((angleDifference * Math.PI) / 180),
    crosswind: windSpeed * Math.sin((angleDifference * Math.PI) / 180),
  };
}

export function getISATemp(altitude: number): number {
  const zeroMSLISA = 15;
  return zeroMSLISA - 1.95 * (altitude / 1000);
}
