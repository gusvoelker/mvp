import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { Search, SearchContent, SearchText } from "./NavbarStyles";
import { RootState } from "../redux/store";
import AddMealButton from "./AddMealButton";
import RemoveMealButton from "./RemoveMealButton";
const faSearch: any = require("@fortawesome/fontawesome-free-solid/faSearch");

const TopNavButton = () => {
  const page = useSelector((state: RootState) => state.navbar);

  if (page === "home") {
    return (
      <>
        <AddMealButton />
        <RemoveMealButton />
      </>
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
