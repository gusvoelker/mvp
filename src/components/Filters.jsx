import styled from 'styled-components';
import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const FilContainer = styled.div`

`
const Filter1 = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-right: 5%;
`

const Filter2 = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-left: 5%;
`
const Filters = () => {
  return (
    <FilContainer>
      <Filter1>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Label1" />
          <FormControlLabel control={<Checkbox />} label="Label2" />
          <FormControlLabel control={<Checkbox />} label="Label3" />
        </FormGroup>
      </Filter1>
      <Filter2>
      <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Label4" />
          <FormControlLabel control={<Checkbox />} label="Label5" />
          <FormControlLabel control={<Checkbox />} label="Label6" />
        </FormGroup>
      </Filter2>
    </FilContainer>
  )
};

export default Filters;

