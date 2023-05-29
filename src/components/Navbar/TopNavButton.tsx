import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import {
  Search,
  SearchContent,
  SearchText,
  AddContainer,
  AddText,
} from "./NavbarStyles";
const faSearch: any = require("@fortawesome/fontawesome-free-solid/faSearch");

const TopNavButton = () => {
  const page = useSelector((state: { navbar: string }) => state.navbar);

  if (page === "home") {
    return (
      <AddContainer>
        <AddText>Add To Calendar</AddText>
      </AddContainer>
    );
  }
  if (page !== "home") {
    return (
      <Search>
        <SearchContent>
          <FontAwesomeIcon icon={faSearch} color="#2A2A2E" />
          <SearchText>Search...</SearchText>
        </SearchContent>
      </Search>
    );
  }
};

export default TopNavButton;
