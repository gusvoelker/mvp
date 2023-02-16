import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "./Calendar/Calendar.jsx";
import Navbar from "./Navbar.jsx";

const HomePage = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: 250px 1fr;
`;

const CalendarSection = styled.div`
  padding: 40px 60px 0px 60px;
  box-sizing: border-box;
  background-color: #e7edf7;
  height: 100%;
`;

const Test = () => {
  return (
    <>
      <HomePage>
        <Navbar />
        <CalendarSection>
          <Calendar />
        </CalendarSection>
      </HomePage>
    </>
  );
};

export default Test;
