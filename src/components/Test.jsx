import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "./Calendar/Calendar.jsx";

const HomePage = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: 250px 1fr;
`;

const Navbar = styled.div`
  box-sizing: border-box;
  background-color: white;
  height: 100%;
`;
const Section2 = styled.div`
  padding: 40px 40px 40px 40px;
  box-sizing: border-box;
  background-color: #e7edf7;
  height: 100%;
`;

const CalendarContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 730px;
  border-radius: 5px;
`;

const Test = () => {
  return (
    <>
      <HomePage>
        <Navbar></Navbar>
        <Section2>
          <CalendarContainer>
            <Calendar />
          </CalendarContainer>
        </Section2>
      </HomePage>
    </>
  );
};

export default Test;
