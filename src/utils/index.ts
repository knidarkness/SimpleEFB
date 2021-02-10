import { METAR } from '../model/types';

export function getWinds(location: {
  runwayHeading?: number;
  windDirection?: number;
  windSpeed?: number;
}):
  | {
      headwind: number;
      crosswind: number;
    }
  | undefined {
  const {
    runwayHeading,
    windDirection,
    windSpeed,
  }: {
    runwayHeading?: number;
    windDirection?: number;
    windSpeed?: number;
  } = location;

  if (
    runwayHeading === undefined ||
    windDirection === undefined ||
    windSpeed === undefined
  )
    return undefined;

  const angleDifference = Math.abs(runwayHeading - windDirection);
  return {
    headwind: windSpeed * Math.cos((angleDifference * Math.PI) / 180),
    crosswind: windSpeed * Math.sin((angleDifference * Math.PI) / 180),
  };
}

export function getISATemp(altitude: number): number {
  const zeroMSLISA = 15;
  return zeroMSLISA - 1.95 * (altitude / 1000);
}

export async function getMETAR(airportId: string): Promise<METAR | undefined> {
  const response = await fetch(
    `https://api.allorigins.win/get?url=https%3A%2F%2Fapi.aviationapi.com%2Fv1%2Fweather%2Fmetar%3Fapt%3D${airportId}`
  );
  if (response.status !== 200) return undefined;

  const { contents } = await response.json();
  const contentsData = JSON.parse(contents);
  return contentsData[airportId];
}
