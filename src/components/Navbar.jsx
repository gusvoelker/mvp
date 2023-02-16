import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/fontawesome-free-solid";

const NavContainer = styled.div`
  box-sizing: border-box;
  background-color: white;
  height: 100%;
  padding: 40px 0 0 15px;
`;

const Logo = styled.div`
  color: black;
  cursor: pointer;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  gap: 10px;
  &:active {
    color: red;
  }
`;

const NavList = styled.ul`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 100%;
  padding: 0;
  font-size: 1.2rem;
`;

const ListItem = styled.li`
  display: flex;
  padding: 15px 0;
  gap: 10px;
  cursor: pointer;
  color: black;
  &:hover {
    background-color: rgba(183, 167, 175, 0.5);
  }
  &:active {
    color: red;
  }
`;

const OptionsContainer = styled.div``;

const Navbar = (props) => {
  // return (
  //   <NavContainer>
  //     <Nav className="Nav">
  //       <Logo onClick={() => props.setPage("home")}>Dinner Time</Logo>
  //       <List>
  //         <ListItem onClick={() => props.setPage("login")}>Login</ListItem>
  //         <ListItem onClick={() => props.setPage("add-recipe")}>
  //           Add Recipe
  //         </ListItem>
  //         <ListItem onClick={() => props.setPage("recipe-list")}>
  //           Meals
  //         </ListItem>
  //         <ListItem onClick={() => props.setPage("my-account")}>
  //           My Account
  //         </ListItem>
  //       </List>
  //     </Nav>
  //   </NavContainer>
  // );
  return (
    <NavContainer>
      <Logo>
        <FontAwesomeIcon icon={faCalendar} />
        <span>Dinner Time</span>
      </Logo>
      <NavList>
        <ListItem>
          <FontAwesomeIcon icon={faCalendar} />
          <span>Calendar</span>
        </ListItem>
        <ListItem>
          <FontAwesomeIcon icon={faCalendar} />
          <span>Meal List</span>
        </ListItem>
        <ListItem>
          <FontAwesomeIcon icon={faCalendar} />
          <span>Add Meal</span>
        </ListItem>
        <ListItem>
          <FontAwesomeIcon icon={faCalendar} />
          <span>Discover Meals</span>
        </ListItem>
        <ListItem>
          <FontAwesomeIcon icon={faCalendar} />
          <span>Support the coder</span>
        </ListItem>
      </NavList>
    </NavContainer>
  );
};

export default Navbar;
