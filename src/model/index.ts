import { makeAutoObservable } from 'mobx';
import { Checklist } from './checklist';
import checklists from './checklists.json';
import { Airport, Runway, IChecklist, METAR } from './types';
// export * from './context';

class ActiveAirport {
  id: string | undefined;
  runways: Record<string, Runway> | undefined;
  selectedRunway: string | undefined;
  weather: METAR | undefined;
}

export default class State {
  checklists: Checklist[];
  airports: Record<string, Airport>;
  airportNames: string[] = [];
  currentDestination?: ActiveAirport;

  constructor(checklists: IChecklist[]) {
    this.checklists = checklists.map((s) => new Checklist(s));
    this.airports = {};
    makeAutoObservable(this);
  }

  getChecklistById(id: string): Checklist | undefined {
    return this.checklists.find((item) => item.id === id);
  }

  loadAirportsData(airportData: Record<string, Airport>): void {
    this.airports = airportData;
    this.airportNames = Object.keys(this.airports);
    console.log(this.airportNames.length);
  }
}

let state: State;
export function loadState(): State {
  if (!state) {
    state = new State(checklists.checklists);
  }
  return state;
}
