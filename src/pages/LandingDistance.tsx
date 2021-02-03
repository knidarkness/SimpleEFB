import React from 'react';
import styled from 'styled-components';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';
import parseCSV from 'csv-parse/lib/sync';

import calculateLD from '../utils/landingDistance';
import { getWinds } from '../utils';

const StyledFormControl = styled(FormControl)`
  display: block;
  margin: 10px;
  min-width: 200px;
`;

const StyledSelect = styled(Select)`
  min-width: 200px;
`;

const StyledTextInput = styled(TextField)`
  display: block;
  margin-top: 10px;
`;

const CalculateButton = styled(Button)`
  margin-top: 10px;
  width: 210px;
  display: block;
`;

const LandingPage = styled.div`
  width: 100%;
  display: flex;
`;

const ComputedRowName = styled.h4`
  display: inline-block;
  margin: 5px;
`;

const Column = styled.div`
  width: inherit;
`;

const InputColumn = styled.div`
  width: 400px;
`;

export default function LandingDistancePage(): JSX.Element {
  const [computed, setComputed] = React.useState(false);
  const [LDR, setLDR] = React.useState(0);

  const [brakingAction, setBrakingAction] = React.useState('dry');
  const [autobrakes, setAutobrakes] = React.useState('1');
  const [flaps, setFlaps] = React.useState(25);
  const [landingAlt, setLandingAlt] = React.useState<number | undefined>(0);
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

  const [runways, setRunways] = React.useState();
  React.useEffect(() => {
    (async function updateRunways() {
      const runwaysRaw = await fetch('/runways.csv');
      const runwaysCSV = await runwaysRaw.text();
      const runwaysData = parseCSV(runwaysCSV, {
        columns: true,
        skip_empty_lines: true,
      });
      setRunways(runwaysData);
      console.log('Loaded airport data.');
    })();
  }, []);

  const getLD = async () => {
    if (!landingWeight) return;

    const winds = getWinds(
      runwayHeading || 0,
      windDirection || 0,
      windSpeed || 0
    );
    setWinds(winds);

    const tailWind = -1 * winds.headwind;

    const LDinput = {
      flaps,
      reversers,
      landingAltitude: landingAlt || 0,
      approachSpeedAddition: vrefAdd,
      rwySlope: rwySlope || 0,
      tailwind: tailWind,
      landingWeight,
      temperatureDeviation: 0,
      breakingAction: brakingAction,
      autobrakeSettings: autobrakes,
    };
    const ld = calculateLD(LDinput);
    setComputed(true);
    setLDR(ld);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Landing distance</h1>
      <LandingPage>
        <InputColumn>
          <StyledFormControl>
            <InputLabel id="brakingAction-settings-label">
              RWY Breaking Action
            </InputLabel>
            <StyledSelect
              id="brakingAction-settings"
              labelId="brakingAction-settings-label"
              value={brakingAction}
              onChange={(e) => {
                setBrakingAction(e.target.value as string);
                setComputed(false);
              }}
            >
              <MenuItem value={'dry'}>Dry</MenuItem>
              <MenuItem value={'good'}>Good</MenuItem>
              <MenuItem value={'medium'}>Medium</MenuItem>
              <MenuItem value={'poor'}>Poor</MenuItem>
            </StyledSelect>
          </StyledFormControl>
          <StyledFormControl>
            <InputLabel id="autobrakes-settings-label">Autobrakes</InputLabel>
            <StyledSelect
              id="autobrakes-settings"
              labelId="autobrakes-settings-label"
              value={autobrakes}
              onChange={(e) => {
                setAutobrakes(e.target.value as string);
                setComputed(false);
              }}
            >
              <MenuItem value={'max'}>Max Manual</MenuItem>
              <MenuItem value={'1'}>1</MenuItem>
              <MenuItem value={'2'}>2</MenuItem>
              <MenuItem value={'3'}>3</MenuItem>
              <MenuItem value={'4'}>4</MenuItem>
              <MenuItem value={'aMax'}>Autobrake Max</MenuItem>
            </StyledSelect>
          </StyledFormControl>
          <StyledFormControl>
            <InputLabel id="flaps-settings-label">Flaps</InputLabel>
            <StyledSelect
              id="flaps-settings"
              labelId="flaps-settings-label"
              value={flaps}
              onChange={(e) => {
                setFlaps(e.target.value as number);
                setComputed(false);
              }}
            >
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={30}>30</MenuItem>
            </StyledSelect>
          </StyledFormControl>
          <StyledFormControl>
            <InputLabel id="reversers-settings-label">Reversers</InputLabel>
            <StyledSelect
              id="reversers-settings"
              labelId="reversers-settings-label"
              value={reversers}
              onChange={(e) => {
                setReversers(e.target.value as string);
                setComputed(false);
              }}
            >
              <MenuItem value={'both'}>Both</MenuItem>
              <MenuItem value={'1 inop'}>1 Inop</MenuItem>
              <MenuItem value={'2 inop'}>2 Inop</MenuItem>
            </StyledSelect>
          </StyledFormControl>
          <StyledFormControl>
            <InputLabel id="reversers-settings-label">
              Approach speed
            </InputLabel>
            <StyledSelect
              id="reversers-settings"
              labelId="reversers-settings-label"
              value={vrefAdd}
              onChange={(e) => {
                setVrefAdd(e.target.value as number);
                setComputed(false);
              }}
            >
              <MenuItem value={0}>VRef</MenuItem>
              <MenuItem value={5}>VRef + 5kts</MenuItem>
              <MenuItem value={10}>VRef + 10kts</MenuItem>
              <MenuItem value={15}>VRef + 15kts</MenuItem>
              <MenuItem value={20}>VRef + 20kts</MenuItem>
            </StyledSelect>
          </StyledFormControl>
          <StyledTextInput
            variant="outlined"
            label="Landing Altitude"
            type="number"
            size="small"
            value={landingAlt}
            onChange={(e) => {
              setLandingAlt(
                e.target.value ? parseFloat(e.target.value) : undefined
              );
              setComputed(false);
            }}
          />
          <StyledTextInput
            variant="outlined"
            label="Runway heading"
            type="number"
            size="small"
            value={runwayHeading}
            onChange={(e) => {
              setRunwayHeading(
                e.target.value ? parseInt(e.target.value) : undefined
              );
              setComputed(false);
            }}
          />
          <StyledTextInput
            variant="outlined"
            label="Wind direction"
            type="number"
            size="small"
            value={windDirection}
            onChange={(e) => {
              setWindDirection(
                e.target.value ? parseFloat(e.target.value) : undefined
              );
              setComputed(false);
            }}
          />
          <StyledTextInput
            variant="outlined"
            label="Wind speed"
            type="number"
            size="small"
            value={windSpeed}
            onChange={(e) => {
              setWindSpeed(
                e.target.value ? parseFloat(e.target.value) : undefined
              );
              setComputed(false);
            }}
          />
          <StyledTextInput
            variant="outlined"
            label="Landing weight"
            type="number"
            size="small"
            value={landingWeight}
            onChange={(e) => {
              setLandingWeight(
                e.target.value ? parseFloat(e.target.value) : undefined
              );
              setComputed(false);
            }}
          />
          <StyledTextInput
            variant="outlined"
            label="Runway slope (%)"
            type="number"
            size="small"
            value={rwySlope}
            onChange={(e) => {
              setRwySlope(
                e.target.value ? parseFloat(e.target.value) : undefined
              );
              setComputed(false);
            }}
          />

          <CalculateButton
            variant="contained"
            color="primary"
            onClick={async () => await getLD()}
          >
            Calculate
          </CalculateButton>
        </InputColumn>
        <Column>
          {computed ? (
            <>
              <div>
                <ComputedRowName style={{ display: 'inline-block' }}>
                  Landing distance required:
                </ComputedRowName>
                {` ${LDR} ft.`}
              </div>
              <div>
                <ComputedRowName>
                  {winds.headwind && winds?.headwind >= 0
                    ? 'Headwind: '
                    : 'Tailwind: '}
                </ComputedRowName>
                {` ${Math.abs(winds.headwind || 0).toFixed(0)} kts`}
              </div>
              <div>
                <ComputedRowName>Crosswind: </ComputedRowName>
                {` ${Math.abs(winds.crosswind || 0).toFixed(0)} kts`}
              </div>
            </>
          ) : undefined}
        </Column>
      </LandingPage>
    </div>
  );
}
