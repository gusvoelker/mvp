import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faSearch } from "@fortawesome/fontawesome-free-solid";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "./redux/slices/navbarSlice";

// const NavContainer = styled.div`
//   box-sizing: border-box;
//   background-color: white;
//   height: 100%;
//   padding-top: 40px;
// `;

// const Logo = styled.div`
//   color: black;
//   cursor: pointer;
//   font-size: 1.4rem;
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   &:active {
//     color: red;
//   }
//   padding-left: 15px;
// `;

// const NavList = styled.ul`
//   margin-top: 40px;
//   display: flex;
//   flex-direction: column;
//   list-style: none;
//   width: 100%;
//   padding: 0;
//   font-size: 1.2rem;
// `;

// const ListItem = styled.li`
//   display: flex;
//   padding: 15px 0 15px 15px;
//   gap: 10px;
//   cursor: pointer;
//   color: black;
//   align-items: center;
// `;

// const IconBox = styled.div`
// background-color: ${({ backgroundColor }) => backgroundColor};
// color: ${({ color }) => color};
// padding: 8px;
// border-radius 7px;
// width: 20px;
// height: 20px;
// display: flex;
// align-items: center;
// justify-content: center;
// `;

// const LogoImage = styled.img`
//   width: 300%;
// `;
// const OptionsContainer = styled.div``;
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 24px 32px;
  gap: 32px;
  background: white;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 10px;
  gap: 44px;
  width: 238px;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;
  width: 218px;
  height: 56px;
`;

const Logo = styled.img`
  width: 56px;
  height: 56px;
`;

const HeadingText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  width: 150px;
  height: 41px;
`;

const DinnerTime = styled.h1`
  width: 150px;
  height: 22px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #09090a;
`;

const NameText = styled.h2`
  width: 150px;
  height: 19px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #1f1f22;
`;

const Search = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  width: 218px;
  height: 56px;
  background-color: #f5f5f5;
  border-radius: 16px;
`;

const SearchContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  padding-left: 10px;
  gap: 16px;
  width: 186px;
  height: 24px;
`;

const SearchText = styled.span`
  width: 146px;
  height: 22px;

  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #2a2a2e;
`;

const NavItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
  width: 218px;
  background: #ffffff;
`;

const NavItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  width: 218px;
  height: 56px;
  border-radius: 8px;
  box-sizing: border-box;
`;

const NavContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;
  width: 186px;
  height: 24px;
`;

const IconBox = styled.div`
  width: 24px;
  height: 24px;
`;

const NavText = styled.span`
  width: 83px;
  height: 22px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #09090a;
  white-space: nowrap;
  line-height: 16px;
`;

const items = [
  {
    id: 1,
    text: "Calendar",
    page: "test",
  },
  {
    id: 2,
    text: "Meal List",
    page: "recipe-list",
  },
  {
    id: 3,
    text: "Add Meal",
    page: "add-recipe",
  },
  {
    id: 4,
    text: "Discover Meals",
    page: "discover-meals",
  },
  {
    id: 5,
    text: "My Account",
    page: "my-account",
  },
];

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 238px;
  height: 120px;
`;

const LogOutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  gap: 10px;
  width: 218px;
  height: 56px;
  border-radius: 8px;
`;

const LogOutContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  gap: 16px;
  width: 186px;
  height: 24px;
`;

const Navbar = () => {
  return (
    <NavContainer className="menu">
      <Top className="top">
        <Heading>
          <Logo src="dinnertimeLogo.png"></Logo>
          <HeadingText>
            <DinnerTime>Dinner Time</DinnerTime>
            <NameText>First Last</NameText>
          </HeadingText>
        </Heading>
        <Search>
          <SearchContent>
            <FontAwesomeIcon icon={faSearch} color="#2A2A2E" />
            <SearchText>Search...</SearchText>
          </SearchContent>
        </Search>
        <NavItems>
          {items.map((item, i) => {
            return (
              <NavItem key={i}>
                <NavContent>
                  <IconBox>
                    <FontAwesomeIcon icon={faCalendar} />
                  </IconBox>
                  <NavText>{item.text}</NavText>
                </NavContent>
              </NavItem>
            );
          })}
        </NavItems>
      </Top>
      <Bottom className="bottom">
        <LogOutContainer>
          <LogOutContent>
            <IconBox>
              <FontAwesomeIcon icon={faCalendar} />
            </IconBox>
          </LogOutContent>
        </LogOutContainer>
      </Bottom>
    </NavContainer>
  );

  return (
    <NavContainer>
      <Logo onClick={() => dispatch(setPage("test"))}>
        <IconBox>
          <LogoImage src="dinnertimeLogo.png" />
        </IconBox>
        <span>Dinner Time</span>
      </Logo>
      <NavList>
        {listItems.map((item) => {
          return (
            <ListItem
              onClick={() => handleItemClick(item.page)}
              onMouseEnter={() => handleItemHover(item.page)}
              onMouseLeave={() => handleMouseExit(item.page)}
            >
              <IconBox
                backgroundColor={item.backgroundColor}
                color={item.color}
              >
                <FontAwesomeIcon icon={faCalendar} />
              </IconBox>
              <span>{item.text}</span>
            </ListItem>
          );
        })}
      </NavList>
    </NavContainer>
  );
};

export default Navbar;

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
