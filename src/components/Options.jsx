import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import RadioButtonsGroup from './Radio.jsx';

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

const Options = () => {
  return (
    <OptContainer>
      Options
      <form>
        <RadioButtonsGroup />
      </form>
    </OptContainer>
  )
}

export default Options;