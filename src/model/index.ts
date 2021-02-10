import { makeAutoObservable, reaction, runInAction } from 'mobx';
import { getISATemp, getMETAR, getWinds } from '../utils';
import calculateLD from '../utils/landingDistance';
import { ActiveAirport } from './ActiveAirport';
import { Airport } from './types';

type Aircraft =
  | {
      type: 'b767';
      flaps?: 25 | 30;
      autobrakes?: 'max' | 'aMax' | '1' | '2' | '3' | '4';
      reversers?: 'both' | '1 inop' | '2 inop';
      vrefAdd?: number;
      landingWeight?: number;
    }
  | undefined;

export default class State {
  airports: Record<string, Airport>;
  airportNames: string[] = [];
  currentDestination: ActiveAirport;
  aircraftConfiguration: Aircraft;
  computed: boolean;

  constructor() {
    this.airports = {};
    this.currentDestination = new ActiveAirport();
    this.aircraftConfiguration = {
      type: 'b767',
      flaps: 30,
      reversers: 'both',
      vrefAdd: 5,
      autobrakes: '1',
    };
    this.computed = false;
    makeAutoObservable(this);

    reaction(
      () => this.currentDestination.selectedRunway,
      (runway) => {
        if (!this.currentDestination.id || !runway) return;
        const activeRunway = this.airports[this.currentDestination.id].runways[
          runway
        ];
        this.currentDestination.landingAlt = activeRunway.elevationFt;
        this.currentDestination.runwayHeading = activeRunway.heading;
        this.currentDestination.LDA = activeRunway.length;
      }
    );
  }

  loadAirportsData(airportData: Record<string, Airport>): void {
    this.airports = airportData;
    this.airportNames = Object.keys(this.airports);
  }

  calculateLDR() {
    if (this.aircraftConfiguration?.flaps === undefined) return 'Flaps not set';
    if (this.aircraftConfiguration?.reversers === undefined)
      return 'Reversers not set';
    if (this.aircraftConfiguration?.flaps === undefined) return 'Flaps not set';
    if (this.aircraftConfiguration?.vrefAdd === undefined)
      return 'Approach speed not set';
    if (this.aircraftConfiguration?.landingWeight === undefined)
      return 'Landing GW is not set';
    if (this.aircraftConfiguration?.autobrakes === undefined)
      return 'Autobrakes not set';

    if (this.currentDestination?.landingAlt === undefined)
      return 'Landing elevation is not set';
    if (this.currentDestination?.temperature === undefined)
      return 'Temperature is not set';
    if (this.currentDestination?.brakingAction === undefined)
      return 'Runway braking action is not set';

    const winds = getWinds(this.currentDestination);
    if (!winds) return;

    const tailWind = -1 * winds.headwind;

    const ld = calculateLD({
      flaps: this.aircraftConfiguration.flaps,
      reversers: this.aircraftConfiguration.reversers,
      approachSpeedAddition: this.aircraftConfiguration.vrefAdd,
      landingWeight: this.aircraftConfiguration.landingWeight,
      autobrakeSettings: this.aircraftConfiguration.autobrakes,
      landingAltitude: this.currentDestination.landingAlt,
      rwySlope: this.currentDestination.rwySlope || 0,
      tailwind: tailWind,
      temperatureDeviation:
        this.currentDestination.temperature -
        getISATemp(this.currentDestination.landingAlt),
      breakingAction: this.currentDestination.brakingAction,
    });

    runInAction(() => {
      this.computed = true;
      this.currentDestination.LDR = ld;
      this.currentDestination.headwind = winds.headwind;
      this.currentDestination.crosswind = winds.crosswind;
    });

    console.log('altns.');
    console.log(this.mutateConfigurations());
  }

  mutateConfigurations() {
    if (!this.currentDestination.id) return 'No airport id';
    if (this.currentDestination?.temperature === undefined)
      return 'Temperature is not set';
    if (this.currentDestination?.brakingAction === undefined)
      return 'Runway braking action is not set';
    if (this.aircraftConfiguration?.flaps === undefined) return 'Flaps not set';
    if (this.aircraftConfiguration?.reversers === undefined)
      return 'Reversers not set';
    if (this.aircraftConfiguration?.flaps === undefined) return 'Flaps not set';
    if (this.aircraftConfiguration?.vrefAdd === undefined)
      return 'Approach speed not set';
    if (this.aircraftConfiguration?.landingWeight === undefined)
      return 'Landing GW is not set';
    if (this.aircraftConfiguration?.autobrakes === undefined)
      return 'Autobrakes not set';

    const availableRunways = this.airports[this.currentDestination.id].runways;
    for (const runway in availableRunways) {
      // availableRunways[runway]

      const winds = getWinds({
        runwayHeading: availableRunways[runway].heading,
        windDirection: this.currentDestination.windDirection,
        windSpeed: this.currentDestination.windSpeed,
      });
      if (!winds) return;
      const tailWind = -1 * winds.headwind;

      const ld = calculateLD({
        flaps: this.aircraftConfiguration.flaps,
        reversers: this.aircraftConfiguration.reversers,
        approachSpeedAddition: this.aircraftConfiguration.vrefAdd,
        landingWeight: this.aircraftConfiguration.landingWeight,
        autobrakeSettings: this.aircraftConfiguration.autobrakes,
        rwySlope: this.currentDestination.rwySlope || 0,
        tailwind: tailWind,
        landingAltitude: availableRunways[runway].elevationFt,
        temperatureDeviation:
          this.currentDestination.temperature -
          getISATemp(availableRunways[runway].elevationFt),
        breakingAction: this.currentDestination.brakingAction,
      });

      console.log(runway, ld);
    }
  }
}

let state: State;
export function loadState(): State {
  if (!state) {
    state = new State();
  }
  return state;
}
