import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
import State from '../model';
import AppCtx from '../model/context';

const ComputedRowName = styled.h4`
  display: inline-block;
  margin: 5px;
`;

const Column = styled.div`
  width: inherit;
`;

export default observer(function LandingPerfResult(): JSX.Element {
  const ctx: State = React.useContext(AppCtx);

  return (
    <Column>
      {ctx.computed ? (
        <>
          <div>
            <ComputedRowName style={{ display: 'inline-block' }}>
              Landing distance required:
            </ComputedRowName>
            {` ${ctx.currentDestination.LDR} ft. required of ${ctx.currentDestination.LDA} ft. available`}
          </div>
          <div>
            <ComputedRowName>
              {ctx.currentDestination.headwind &&
              ctx.currentDestination?.headwind >= 0
                ? 'Headwind: '
                : 'Tailwind: '}
            </ComputedRowName>
            {` ${Math.abs(ctx.currentDestination.headwind || 0).toFixed(
              0
            )} kts`}
          </div>
          <div>
            <ComputedRowName>Crosswind: </ComputedRowName>
            {` ${Math.abs(ctx.currentDestination.crosswind || 0).toFixed(
              0
            )} kts`}
          </div>
        </>
      ) : undefined}
    </Column>
  );
});
