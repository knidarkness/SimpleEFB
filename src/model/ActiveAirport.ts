import { makeAutoObservable, reaction, runInAction } from 'mobx';
import { getMETAR } from '../utils';
import { Runway, METAR } from './types';

export class ActiveAirport {
  id?: string;
  runways?: Record<string, Runway>;
  selectedRunway?: string;
  metar?: METAR;

  windDirection?: number;
  windSpeed?: number;
  brakingAction?: 'dry' | 'good' | 'medium' | 'poor';
  temperature?: number;
  LDR?: number;
  LDA?: number;
  landingAlt?: number;
  rwySlope?: number;
  runwayHeading?: number;
  headwind?: number;
  crosswind?: number;

  constructor() {
    makeAutoObservable(this);

    reaction(
      () => this.id,
      async (airport) => {
        if (airport) {
          const metar = await getMETAR(airport);
          console.log(metar);
          if (!metar) {
            alert('Faild to get the METAR, input data manually.');
            return;
          }
          runInAction(() => {
            this.temperature = parseFloat(metar.temp);
            this.windDirection = parseInt(metar.wind);
            this.windSpeed = parseInt(metar.wind_vel);
          });
        }
      }
    );
  }
}
