import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import RadioButtonsGroup from './Radio.jsx';
import Filters from './Filters.jsx';

const OptContainer = styled.div`
  height: 482px;
  width: 20%;
  position: absolute;
  margin: 5% 0 0 5%;
  text-align: center;
  padding-top: 10px;
  font-size: 1.4em;
  border: 2px solid grey;
  `

const Form = styled.form`
  margin-top: 6%;
`
const FilterTitle = styled.div`
margin-top: 10%;
`

const Options = () => {
  return (
    <OptContainer>
      Options
      <Form >
        <RadioButtonsGroup />
        <FilterTitle>Random Options</FilterTitle>
        <Filters />
      </Form>
    </OptContainer>
  )
}

export default Options;