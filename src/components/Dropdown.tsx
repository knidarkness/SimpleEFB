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

export interface DropdownProps {
  label: string;
  fieldName: string;
  expectedType: 'string' | 'integer';
  items: {
    title: string;
    value: string | number;
  }[];
  value: any;
  onChange: (
    e: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>,
    props: DropdownProps
  ) => void;
}

const Dropdown = (props: DropdownProps): JSX.Element => {
  const { label, fieldName, items, value, onChange } = props;
  return (
    <StyledFormControl>
      <InputLabel>{label}</InputLabel>
      <StyledSelect
        value={value || ''}
        onChange={(e) => {
          onChange(e, props);
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
};

export default Dropdown;
