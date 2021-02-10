import * as React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import AppCtx from '../../model/context';
import State from '../../model';

import { TextField, InputAdornment } from '@material-ui/core';
import { runInAction } from 'mobx';
import Dropdown from '../Dropdown';
import TextInput from '../TextInput';

export const StyledTextInput = styled(TextField)`
  display: block;
  margin-top: 10px;
  width: 210px;
`;

export interface TextInputProps {
  fieldName: string;
  expectedType: 'integer' | 'float' | 'string';
  endAdorment: string;
  label: string;
}

export default observer(function RwyConditions() {
  const ctx: State = React.useContext(AppCtx);

  const textInputProcess: (
    e: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>,
    props: TextInputProps
  ) => void = (e, props) => {
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
      ctx.currentDestination = {
        ...ctx.currentDestination,
        [props.fieldName]: parsedValue,
      };
      ctx.computed = false;
    });
  };

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
      ctx.currentDestination[props.fieldName] = parsedValue;
      ctx.computed = false;
    });
  };

  return (
    <>
      <Dropdown
        label="RWY Breaking Action"
        expectedType="string"
        fieldName="brakingAction"
        value={ctx.currentDestination.brakingAction}
        onChange={dropDownOnchange}
        items={[
          { title: 'Dry', value: 'dry' },
          { title: 'Good', value: 'good' },
          { title: 'Medium', value: 'medium' },
          { title: 'Poor', value: 'poor' },
        ]}
      />
      <TextInput
        expectedType="integer"
        label="Landing Altitude"
        fieldName="landingAlt"
        endAdorment="ft."
        onChange={textInputProcess}
        value={ctx.currentDestination.landingAlt}
      />
      <TextInput
        expectedType="integer"
        label="Temperature (C)"
        fieldName="temperature"
        endAdorment="° C"
        onChange={textInputProcess}
        value={ctx.currentDestination.temperature}
      />
      <TextInput
        expectedType="integer"
        label="Runway heading"
        fieldName="runwayHeading"
        endAdorment="°"
        onChange={textInputProcess}
        value={ctx.currentDestination.runwayHeading}
      />
      <TextInput
        expectedType="integer"
        label="Wind direction"
        fieldName="windDirection"
        endAdorment="°"
        onChange={textInputProcess}
        value={ctx.currentDestination.windDirection}
      />
      <TextInput
        expectedType="integer"
        label="Wind speed"
        fieldName="windSpeed"
        endAdorment="kts"
        onChange={textInputProcess}
        value={ctx.currentDestination.windSpeed}
      />
      <TextInput
        expectedType="float"
        label="Runway slope"
        fieldName="rwySlope"
        endAdorment="%"
        onChange={textInputProcess}
        value={ctx.currentDestination.rwySlope}
      />
    </>
  );
});
