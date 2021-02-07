import { Typography, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React, { useContext } from 'react';
import styled from 'styled-components';

import { ListboxComponent, renderGroup } from './ListBox';
import AppCtx from '../model/context';
import State from '../model';
import { observer } from 'mobx-react-lite';

const StyledTextInput = styled(TextField)`
  display: block;
  margin-top: 10px;
  width: 210px;
`;

interface VAutocompleteProps {
  label: string;
  value: string | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue: (newValue: any | undefined) => void;
  setComputed: (boolean) => void;
  setRunway: (newValue: string) => void;
}

function AirportSelect({
  value,
  setValue,
  setComputed,
  setRunway,
  label,
}: VAutocompleteProps): JSX.Element {
  const ctx: State = useContext(AppCtx);

  return (
    <Autocomplete
      disableListWrap
      ListboxComponent={
        ListboxComponent as React.ComponentType<
          React.HTMLAttributes<HTMLElement>
        >
      }
      renderGroup={renderGroup}
      options={ctx.airportNames}
      value={value}
      onChange={(event: unknown, value: string | null) => {
        console.log(value);
        setValue(value || '');
        setComputed(false);
        setRunway('');
      }}
      renderInput={(params) => (
        <StyledTextInput {...params} variant="outlined" label={label} />
      )}
      renderOption={(option) => <Typography noWrap>{option}</Typography>}
    />
  );
}

export default observer(AirportSelect);
