import { InputAdornment, TextField } from '@material-ui/core';
import { runInAction } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';

const StyledTextInput = styled(TextField)`
  display: block;
  margin-top: 10px;
  width: 210px;
`;

export interface TextInputProps {
  fieldName: string;
  expectedType: 'integer' | 'float' | 'string';
  endAdorment: string;
  label: string;
  value: any;
  onChange: (
    e: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>,
    props: TextInputProps
  ) => void;
}

const TextInput = observer(function TextInput(
  props: TextInputProps
): JSX.Element {
  const { endAdorment, label, expectedType, value, onChange } = props;
  console.log(label, value);
  return (
    <StyledTextInput
      variant="outlined"
      label={label}
      type={expectedType === 'string' ? 'string' : 'number'}
      size="small"
      value={value || (value === 0 ? 0 : '')}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">{endAdorment}</InputAdornment>
        ),
      }}
      onChange={(e) => {
        onChange(e, props);
      }}
    />
  );
});

export default TextInput;
