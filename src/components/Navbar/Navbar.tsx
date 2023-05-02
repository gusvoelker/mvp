import { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const faCalendar: any = require("@fortawesome/fontawesome-free-solid/faCalendar");
const faSearch: any = require("@fortawesome/fontawesome-free-solid/faSearch");
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../redux/slices/navbarSlice";
import {
  NavContainer,
  Top,
  Heading,
  Logo,
  HeadingText,
  DinnerTime,
  NameText,
  Search,
  SearchContent,
  SearchText,
  NavItems,
  NavItem,
  NavContent,
  IconBox,
  NavText,
} from "./NavbarStyles";

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
  const dispatch = useDispatch();
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
              <NavItem
                key={i}
                onClick={() => {
                  // dispatch(setPage({ page: "home" }));
                }}
              >
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

  // return (
  //   <NavContainer>
  //     <Logo onClick={() => dispatch(setPage("test"))}>
  //       <IconBox>
  //         <LogoImage src="dinnertimeLogo.png" />
  //       </IconBox>
  //       <span>Dinner Time</span>
  //     </Logo>
  //     <NavList>
  //       {listItems.map((item) => {
  //         return (
  //           <ListItem
  //             onClick={() => handleItemClick(item.page)}
  //             onMouseEnter={() => handleItemHover(item.page)}
  //             onMouseLeave={() => handleMouseExit(item.page)}
  //           >
  //             <IconBox
  //               backgroundColor={item.backgroundColor}
  //               color={item.color}
  //             >
  //               <FontAwesomeIcon icon={faCalendar} />
  //             </IconBox>
  //             <span>{item.text}</span>
  //           </ListItem>
  //         );
  //       })}
  //     </NavList>
  //   </NavContainer>
  // );
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
