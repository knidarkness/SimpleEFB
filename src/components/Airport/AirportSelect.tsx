import { Typography, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import { ListboxComponent, renderGroup } from '../ListBox';
import AppCtx from '../../model/context';
import State from '../../model';
import { runInAction } from 'mobx';

const StyledTextInput = styled(TextField)`
  display: block;
  margin-top: 10px;
  width: 210px;
`;

function AirportSelect(): JSX.Element {
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
      value={ctx.currentDestination?.id}
      onChange={(event: unknown, value: string | null) => {
        runInAction(() => {
          ctx.currentDestination.id = value || '';
          ctx.currentDestination.selectedRunway = '';
          ctx.computed = false;
        });
      }}
      renderInput={(params) => (
        <StyledTextInput
          {...params}
          variant="outlined"
          label="Landing airport"
        />
      )}
      renderOption={(option) => <Typography noWrap>{option}</Typography>}
    />
  );
}

export default observer(AirportSelect);
