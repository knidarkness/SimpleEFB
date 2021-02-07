import React, { useContext } from 'react';
import styled from 'styled-components';

import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';

import AppCtx from '../model/context';
import State from '../model';

const StyledTextInput = styled(TextField)`
  display: block;
  margin-top: 10px;
  width: 210px;
`;

interface VAutocompleteProps {
  label: string;
  runway: string | undefined;
  airport: string | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setRunway: (newValue: any | undefined) => void;
  setComputed: (boolean) => void;
  getWeather: (string) => Promise<void>;
}

export default function RunwaySelect({
  airport,
  runway,
  label,
  setRunway,
  getWeather,
  setComputed,
}: VAutocompleteProps): JSX.Element {
  const ctx: State = useContext(AppCtx);

  return (
    <Autocomplete
      id="combo-box-demo"
      options={airport ? Object.keys(ctx.airports[airport].runways) : []}
      getOptionLabel={(option) => option}
      disabled={!airport}
      key={airport}
      value={runway}
      onChange={async (event: unknown, value: string | null) => {
        setRunway(value || '');
        if (!!airport && !!value) {
          await getWeather(value);
        }
        setComputed(false);
      }}
      renderInput={(params) => (
        <StyledTextInput {...params} label={label} variant="outlined" />
      )}
    />
  );
}
