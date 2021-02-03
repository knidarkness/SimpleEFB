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
