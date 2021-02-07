import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const StyledFormControl = styled(FormControl)`
  display: block;
  margin: 10px;
  min-width: 200px;
`;

const StyledSelect = styled(Select)`
  min-width: 200px;
`;

interface DropdownProps {
  label: string;
  value: string | number | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue: (newValue: any | undefined) => void;
  setComputed: (boolean) => void;
  items: {
    title: string;
    value: string | number;
  }[];
}

export default function Dropdown({
  label,
  value,
  items,
  setValue,
  setComputed,
}: DropdownProps): JSX.Element {
  return (
    <StyledFormControl>
      <InputLabel>{label}</InputLabel>
      <StyledSelect
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setComputed(false);
        }}
      >
        {items.map((item) => (
          <MenuItem value={item.value} key={item.value}>
            {item.title}
          </MenuItem>
        ))}
      </StyledSelect>
    </StyledFormControl>
  );
}
