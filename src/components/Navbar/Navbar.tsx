import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../redux/slices/navbarSlice";
import useWidth from "../../hooks/useWidth";
import TopNavButton from "./TopNavButton";
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
  Bottom,
  LogOutContainer,
  LogOutContent,
  SmallTop,
  SmallNavItems,
  SmallNavContent,
  SmallNavItem,
  SmallNavContainer,
  SmallIconBox,
  SmallLogOutContent,
} from "./NavbarStyles";
const faCalendar: any = require("@fortawesome/fontawesome-free-regular/faCalendar");
const faLemon: any = require("@fortawesome/fontawesome-free-regular/faLemon");
const faKeyboard: any = require("@fortawesome/fontawesome-free-regular/faKeyboard");
const faSquarePlus: any = require("@fortawesome/fontawesome-free-regular/faPlusSquare");
const faTimesCircle: any = require("@fortawesome/fontawesome-free-regular/faTimesCircle");
const faUser: any = require("@fortawesome/fontawesome-free-regular/faUser");
const faSearch: any = require("@fortawesome/fontawesome-free-solid/faSearch");

const items = [
  {
    id: 1,
    text: "Calendar",
    page: "home",
    icon: faCalendar,
  },
  {
    id: 2,
    text: "Meal List",
    page: "recipeList",
    icon: faLemon,
  },
  {
    id: 3,
    text: "Add Meals",
    page: "addRecipe",
    icon: faSquarePlus,
  },
  {
    id: 4,
    text: "Discover Meals",
    page: "discoverMeals",
    icon: faKeyboard,
  },
  {
    id: 5,
    text: "My Account",
    page: "myAccount",
    icon: faUser,
  },
];

const Navbar = () => {
  const page = useSelector((state: { navbar: string }) => state.navbar);

  const dispatch = useDispatch();
  const width = useWidth();

  if (width <= 1000) {
    return (
      <SmallNavContainer className="menu">
        <SmallTop className="top">
          <SmallNavItems>
            {items.map((item, i) => {
              return (
                <SmallNavItem
                  key={i}
                  onClick={() => {
                    dispatch(setPage({ page: item.page }));
                  }}
                >
                  <SmallNavContent>
                    <SmallIconBox>
                      <FontAwesomeIcon icon={item.icon} />
                    </SmallIconBox>
                  </SmallNavContent>
                </SmallNavItem>
              );
            })}
          </SmallNavItems>
        </SmallTop>
        <Bottom className="bottom">
          <LogOutContainer
            onClick={() => {
              dispatch(setPage({ page: "login" }));
            }}
          >
            <SmallLogOutContent>
              <SmallIconBox>
                <FontAwesomeIcon icon={faTimesCircle} />
              </SmallIconBox>
            </SmallLogOutContent>
          </LogOutContainer>
        </Bottom>
      </SmallNavContainer>
    );
  }
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
        {page === "home"}
        <TopNavButton />
        <NavItems>
          {items.map((item, i) => {
            return (
              <NavItem
                key={i}
                onClick={() => {
                  dispatch(setPage({ page: item.page }));
                }}
              >
                <NavContent>
                  <IconBox>
                    <FontAwesomeIcon icon={item.icon} />
                  </IconBox>
                  <NavText>{item.text}</NavText>
                </NavContent>
              </NavItem>
            );
          })}
        </NavItems>
      </Top>
      <Bottom className="bottom">
        <LogOutContainer
          onClick={() => {
            dispatch(setPage({ page: "login" }));
          }}
        >
          <LogOutContent>
            <IconBox>
              <FontAwesomeIcon icon={faTimesCircle} />
            </IconBox>
            <NavText>Log Out</NavText>
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
//         <ListItem onClick={() => props.setPage("login")}>login</ListItem>
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
