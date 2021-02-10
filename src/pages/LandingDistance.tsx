import React, { useContext } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

import { observer } from 'mobx-react-lite';

import AiportConfiguration from './../components/Airport';
import AircraftConfiguration from '../components/AircraftConfiguration';
import State from '../model';
import AppCtx from '../model/context';
import LandingPerfResult from '../components/LandingPerfResult';

const CalculateButton = styled(Button)`
  margin-top: 10px;
  width: 210px;
  display: block;
`;

const LandingPage = styled.div`
  width: 100%;
  display: flex;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const InputGroup = styled.div`
  // width: 400px;
  display: flex;
  @media screen {
    /* background: black;  */
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

function LandingDistancePage(): JSX.Element {
  const ctx: State = React.useContext(AppCtx);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Landing distance</h1>
      <LandingPage>
        <div>
          <InputGroup>
            <AiportConfiguration />
            <AircraftConfiguration />
          </InputGroup>
          <CalculateButton
            variant="contained"
            color="primary"
            onClick={async () => {
              console.log(ctx.calculateLDR());
            }}
          >
            Calculate
          </CalculateButton>
        </div>
        <LandingPerfResult />
      </LandingPage>
    </div>
  );
}

export default observer(LandingDistancePage);
