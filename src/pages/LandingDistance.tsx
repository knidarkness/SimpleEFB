import React, { useContext } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

import calculateLD from '../utils/landingDistance';
import { getISATemp, getMETAR, getWinds } from '../utils';
import { observer } from 'mobx-react-lite';

import AppCtx from './../model/context';
import State from './../model';
import MainTextInput from '../components/TextInput';
import Dropdown from '../components/Dropdown';
import AirportSelect from '../components/AirportSelect';
import RunwaySelect from '../components/RunwaySelect';
import LandingPerfResult from '../components/LandingPerfResult';

const CalculateButton = styled(Button)`
  margin-top: 10px;
  width: 210px;
  display: block;
`;

const LandingPage = styled.div`
  width: 100%;
  display: flex;
`;

const InputColumn = styled.div`
  width: 400px;
`;

function LandingDistancePage(): JSX.Element {
  const ctx: State = useContext(AppCtx);

  const [computed, setComputed] = React.useState(false);
  const [LDR, setLDR] = React.useState(0);

  const [brakingAction, setBrakingAction] = React.useState('dry');
  const [autobrakes, setAutobrakes] = React.useState('1');
  const [flaps, setFlaps] = React.useState(25);
  const [landingAlt, setLandingAlt] = React.useState<number | undefined>(0);
  const [temperature, setTemperature] = React.useState<number | undefined>(0);
  const [rwySlope, setRwySlope] = React.useState<number | undefined>(0);
  const [runwayHeading, setRunwayHeading] = React.useState<number | undefined>(
    0
  );
  const [windDirection, setWindDirection] = React.useState<number | undefined>(
    0
  );
  const [windSpeed, setWindSpeed] = React.useState<number | undefined>(0);
  const [landingWeight, setLandingWeight] = React.useState<number | undefined>(
    150
  );
  const [reversers, setReversers] = React.useState<string>('both');
  const [vrefAdd, setVrefAdd] = React.useState(0);
  const [winds, setWinds] = React.useState<{
    headwind?: number;
    crosswind?: number;
  }>({});

  const [airport, setAirport] = React.useState<string>('');
  const [runway, setRunway] = React.useState<string>('');

  const getLD = async () => {
    if (!landingWeight) return;

    const winds = getWinds(
      runwayHeading || 0,
      windDirection || 0,
      windSpeed || 0
    );
    setWinds(winds);

    const tailWind = -1 * winds.headwind;
    const landingAltitude = landingAlt || 0;
    const actualTemperature = temperature || 0;
    const LDinput = {
      flaps,
      reversers,
      landingAltitude,
      approachSpeedAddition: vrefAdd,
      rwySlope: rwySlope || 0,
      tailwind: tailWind,
      landingWeight,
      temperatureDeviation: actualTemperature - getISATemp(landingAltitude),
      breakingAction: brakingAction,
      autobrakeSettings: autobrakes,
    };
    const ld = calculateLD(LDinput);
    setComputed(true);
    setLDR(ld);
  };

  const getWeather = async (runway: string) => {
    const metar = await getMETAR(airport);
    const airportData = ctx.airports[airport];

    setRunwayHeading(airportData.runways[runway]?.heading || 0);
    if (!metar) {
      alert('Faild to get the METAR, input data manually.');
      return;
    }
    setWindDirection(parseInt(metar.wind));
    setWindSpeed(parseInt(metar.wind_vel));
    setLandingAlt(airportData.runways[runway].elevationFt);
    setTemperature(parseInt(metar.temp));
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Landing distance</h1>
      <LandingPage>
        <InputColumn>
          <Dropdown
            label="RWY Breaking Action"
            value={brakingAction}
            setValue={setBrakingAction}
            setComputed={setComputed}
            items={[
              { title: 'Dry', value: 'dry' },
              { title: 'Good', value: 'good' },
              { title: 'Medium', value: 'medium' },
              { title: 'Poor', value: 'poor' },
            ]}
          />
          <Dropdown
            label="Autobrakes"
            value={autobrakes}
            setValue={setAutobrakes}
            setComputed={setComputed}
            items={[
              { title: 'Max Manual', value: 'max' },
              { title: '1', value: '1' },
              { title: '2', value: '2' },
              { title: '3', value: '3' },
              { title: '4', value: '4' },
              { title: 'Autobrake Max', value: 'aMax' },
            ]}
          />
          <Dropdown
            label="Flaps"
            value={flaps}
            setValue={setFlaps}
            setComputed={setComputed}
            items={[
              { title: '25', value: 25 },
              { title: '30', value: 30 },
            ]}
          />
          <Dropdown
            label="Reversers"
            value={reversers}
            setValue={setReversers}
            setComputed={setComputed}
            items={[
              { title: 'Both', value: 'both' },
              { title: '1 inop', value: '1 inop' },
              { title: '2 inop', value: '2 inop' },
            ]}
          />
          <Dropdown
            label="Approach speed"
            value={vrefAdd}
            setValue={setVrefAdd}
            setComputed={setComputed}
            items={[
              { title: 'Vref', value: 0 },
              { title: 'Vref + 5 kts', value: 5 },
              { title: 'Vref + 10 kts', value: 10 },
              { title: 'Vref + 15 kts', value: 15 },
              { title: 'Vref + 20 kts', value: 20 },
            ]}
          />
          <AirportSelect
            label="Landing airport"
            value={airport}
            setValue={setAirport}
            setComputed={setComputed}
            setRunway={setRunway}
          />
          <RunwaySelect
            label="Landing runway"
            airport={airport}
            runway={runway}
            getWeather={getWeather}
            setRunway={setRunway}
            setComputed={setComputed}
          />
          <MainTextInput
            setComputed={setComputed}
            value={landingAlt}
            setValue={setLandingAlt}
            label="Landing Altitude"
            endAdorment="ft."
          />
          <MainTextInput
            setComputed={setComputed}
            value={temperature}
            setValue={setTemperature}
            label="Temperature (C)"
            endAdorment="° C"
          />
          <MainTextInput
            setComputed={setComputed}
            value={runwayHeading}
            setValue={setRunwayHeading}
            label="Runway heading"
            endAdorment="°"
          />
          <MainTextInput
            setComputed={setComputed}
            value={windDirection}
            setValue={setWindDirection}
            label="Wind direction"
            endAdorment="°"
          />
          <MainTextInput
            setComputed={setComputed}
            value={windSpeed}
            setValue={setWindSpeed}
            label="Wind speed"
            endAdorment="kts"
          />
          <MainTextInput
            setComputed={setComputed}
            value={landingWeight}
            setValue={setLandingWeight}
            label="Landing weight"
            endAdorment="tones"
          />
          <MainTextInput
            setComputed={setComputed}
            value={rwySlope}
            setValue={setRwySlope}
            label="Runway slope"
            endAdorment="%"
          />

          <CalculateButton
            variant="contained"
            color="primary"
            onClick={async () => await getLD()}
          >
            Calculate
          </CalculateButton>
        </InputColumn>
        <LandingPerfResult computed={computed} LDR={LDR} winds={winds} />
      </LandingPage>
    </div>
  );
}

export default observer(LandingDistancePage);
