import React, { useContext } from 'react';
import styled from 'styled-components';

import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';

import AppCtx from '../../model/context';
import State from '../../model';
import { observer } from 'mobx-react-lite';
import { runInAction } from 'mobx';

const StyledTextInput = styled(TextField)`
  display: block;
  margin-top: 10px;
  width: 210px;
`;

export default observer(function RunwaySelect(): JSX.Element {
  const ctx: State = useContext(AppCtx);

  return (
    <Autocomplete
      id="combo-box-demo"
      options={
        ctx.currentDestination.id
          ? Object.keys(ctx.airports[ctx.currentDestination.id].runways)
          : []
      }
      getOptionLabel={(option) => option}
      disabled={!ctx.currentDestination.id}
      key={ctx.currentDestination.id}
      value={ctx.currentDestination.selectedRunway}
      onChange={async (event: unknown, value: string | null) => {
        runInAction(() => {
          ctx.currentDestination.selectedRunway = value || '';
          ctx.computed = false;
        });

        if (!!ctx.currentDestination.id && !!value) {
          // await getWeather(value);
        }
      }}
      renderInput={(params) => (
        <StyledTextInput
          {...params}
          label="Landing runway"
          variant="outlined"
        />
      )}
    />
  );
});
