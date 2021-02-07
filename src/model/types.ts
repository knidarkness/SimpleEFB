export interface IChecklist {
  name: string;
  id: string;
  items: IChecklistItem[];

  completed?: boolean;
}

export interface IChecklistItem {
  actionName: string;
  actionTodo?: string;
  completed?: boolean;
  actor: PilotRole;
}

export enum PilotRole {
  PILOT_FLYING = 1,
  PILOT_MONITORING = 2,
}

export interface RunwayDataRow {
  airport_ident: string;
  length_ft: string;
  width_ft: string;

  he_ident: string;
  he_elevation_ft: string;
  he_heading_degT: string;
  he_displaced_threshold_ft: string;

  le_ident: string;
  le_elevation_ft: string;
  le_heading_degT: string;
  le_displaced_threshold_ft: string;
}

export interface Airport {
  ident: string;
  runways: Record<string, Runway>;
}

export interface Runway {
  ident: string;
  length: number;
  heading: number;
  displacedThresholdFt: number;
  elevationFt: number;
}

export interface METAR {
  alt_hg: string;
  alt_mb: string;
  category: string;
  temp: string;
  visibility: string;
  wind: string;
  wind_vel: string;
}
