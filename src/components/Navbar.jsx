import React, {useState, useEffect} from 'react';
import styled from 'styled-components';



const NavContainer = styled.div`
  background: blue;
  height: 80px;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 3;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
`

const Nav = styled.nav`
  width: 1400px;
  height: 100%;
  z-index: 1;
  display: flex;
  margin: 0 auto;
  align-items: center;
  `

const Logo = styled.div`
color: white;
margin-right: auto;
cursor: pointer;
textDecoration: none;
font-size: 1.7rem;
display: flex;
align-items: center;
&:active {
  color: red;
}
`

const List = styled.ul`
display: flex;
justify-content: flex-end;
display: flex;
align-items: center;
justify-content: center;
list-style: none;
text-align: center;
justify-content: end;
gap: 8%;
`

const ListItem = styled.li`
cursor: pointer;
color: white;
white-space: nowrap;
&:hover {
  border-bottom: 2px solid white;
}
&:active {
  color: red;
}
`

const Navbar = (props) => {
  return (
    <NavContainer>
      <Nav className="Nav">
        <Logo onClick={() => props.setPage('home')}>
        Dinner Time
        </Logo>
        <List>
          <ListItem onClick={() => props.setPage('add-recipe')}>
            Add Recipe
          </ListItem>
          <ListItem onClick={() => props.setPage('recipe-list')}>
            Recipe List
          </ListItem>
          <ListItem onClick={() => props.setPage('my-account')}>
            My Account
          </ListItem>
        </List>
      </Nav>
    </NavContainer>
  )
};

export default Navbar;