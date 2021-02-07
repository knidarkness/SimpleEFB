import { InputAdornment, TextField } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const StyledTextInput = styled(TextField)`
  display: block;
  margin-top: 10px;
  width: 210px;
`;

interface TextInputProps {
  value: string | number | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue: (newValue: any | undefined) => void;
  setComputed: (boolean) => void;
  endAdorment: string;
  label: string;
}

export default function MainTextInput({
  value,
  setValue,
  setComputed,
  endAdorment,
  label,
}: TextInputProps): JSX.Element {
  return (
    <StyledTextInput
      variant="outlined"
      label={label}
      type={typeof value === 'number' ? 'number' : 'string'}
      size="small"
      value={value}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">{endAdorment}</InputAdornment>
        ),
      }}
      onChange={(e) => {
        setValue(e.target.value ? parseFloat(e.target.value) : undefined);
        setComputed(false);
      }}
    />
  );
}
