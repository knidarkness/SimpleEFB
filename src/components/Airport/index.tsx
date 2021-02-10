import { observer } from 'mobx-react-lite';
import React from 'react';

import AirportSelect from './AirportSelect';
import RunwaySelect from './RunwaySelect';
import RwyConditions from './RwyConditions';

export default observer(
  (): JSX.Element => {
    return (
      <section>
        <h2>Airport configuration</h2>
        <AirportSelect />
        <RunwaySelect />
        <RwyConditions />
      </section>
    );
  }
);
