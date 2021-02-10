import { runInAction } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';

import State from '../model';
import AppCtx from '../model/context';
import { TextInputProps, StyledTextInput } from './Airport/RwyConditions';
import Dropdown from './Dropdown';
import TextInput from './TextInput';

export default observer(function AircraftConfiguration(): JSX.Element {
  const ctx: State = useContext(AppCtx);

  const dropDownOnchange = (e, props) => {
    let parsedValue;
    switch (props.expectedType) {
      case 'integer':
        parsedValue = e.target.value
          ? parseInt((e.target.value as string) || '')
          : undefined;
        break;
      case 'string':
        parsedValue = e.target.value ? e.target.value : '';
        break;
    }
    runInAction(() => {
      if (ctx.aircraftConfiguration?.type !== 'b767') {
        alert('Unsupported aircraft type');
        return;
      }
      ctx.aircraftConfiguration[props.fieldName] = parsedValue;
      ctx.computed = false;
      console.log(ctx.aircraftConfiguration);
    });
  };

  const textInputOnChange = (
    e: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>,
    props: TextInputProps
  ) => {
    let parsedValue;
    switch (props.expectedType) {
      case 'integer':
        parsedValue = e.target.value
          ? parseInt(e.target.value as string)
          : undefined;
        break;
      case 'float':
        parsedValue = e.target.value
          ? parseFloat(e.target.value as string)
          : undefined;
        break;
      case 'string':
        parsedValue = e.target.value ? e.target.value : '';
        break;
    }
    runInAction(() => {
      if (ctx.aircraftConfiguration?.type !== 'b767') {
        alert('Unsupported aircraft type');
        return;
      }
      ctx.aircraftConfiguration[props.fieldName] = parsedValue;
      ctx.computed = false;
      console.log(ctx.aircraftConfiguration);
    });
  };

  return (
    <div>
      <h2>Aircraft configuration</h2>
      <Dropdown
        label="Autobrakes"
        fieldName="autobrakes"
        expectedType="string"
        value={ctx.aircraftConfiguration?.autobrakes}
        onChange={dropDownOnchange}
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
        fieldName="flaps"
        expectedType="integer"
        value={ctx.aircraftConfiguration?.flaps}
        onChange={dropDownOnchange}
        items={[
          { title: '25', value: 25 },
          { title: '30', value: 30 },
        ]}
      />
      <Dropdown
        label="Reversers"
        fieldName="reversers"
        expectedType="string"
        value={ctx.aircraftConfiguration?.reversers}
        onChange={dropDownOnchange}
        items={[
          { title: 'Both', value: 'both' },
          { title: '1 inop', value: '1 inop' },
          { title: '2 inop', value: '2 inop' },
        ]}
      />
      <Dropdown
        label="Approach speed"
        fieldName="vrefAdd"
        expectedType="integer"
        value={ctx.aircraftConfiguration?.vrefAdd}
        onChange={dropDownOnchange}
        items={[
          { title: 'Vref', value: 0 },
          { title: 'Vref + 5 kts', value: 5 },
          { title: 'Vref + 10 kts', value: 10 },
          { title: 'Vref + 15 kts', value: 15 },
          { title: 'Vref + 20 kts', value: 20 },
        ]}
      />
      <TextInput
        expectedType="float"
        label="Landing weight"
        fieldName="landingWeight"
        endAdorment="tones"
        value={ctx.aircraftConfiguration?.landingWeight}
        onChange={textInputOnChange}
      />
    </div>
  );
});
