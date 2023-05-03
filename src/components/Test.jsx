import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "./Calendar/Calendar";
import Navbar from "./Navbar/Navbar.tsx";
import useWidth from "../hooks/useWidth";

const HomePage = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: 286px 1fr;
`;

const SmallHomePage = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: 80px 1fr;
`;

const CalendarSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 60px 0px 60px;
  box-sizing: border-box;
  background-color: #e7edf7;
  height: 100%;
`;

const Test = ({ setPage }) => {
  const width = useWidth();

  if (width <= 1000) {
    return (
      <SmallHomePage>
        <Navbar setPage={setPage} />
        <CalendarSection>
          <Calendar />
        </CalendarSection>
      </SmallHomePage>
    );
  }
  return (
    <>
      <HomePage>
        <Navbar setPage={setPage} />
        <CalendarSection>
          <Calendar />
        </CalendarSection>
      </HomePage>
    </>
  );
};

export default Test;
