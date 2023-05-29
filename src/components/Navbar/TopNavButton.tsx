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

const initialStyles = {
  backgroundColor: "#faeed0",
  color: "#ababab",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
};

const activeStyles = {
  backgroundColor: "#f2d184",
  color: "white",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
};

const TopNavButton = () => {
  const page = useSelector((state: { navbar: string }) => state.navbar);
  const selectedDay = useSelector(
    (state: { calendar: { selectedDay: string } }) => state.calendar.selectedDay
  );

  const [containerStyles, setContainerStyles] = useState(initialStyles);
  useEffect(() => {
    if (selectedDay) {
      setContainerStyles(activeStyles);
    } else {
      setContainerStyles(initialStyles);
    }
  }, [selectedDay]);

  if (page === "home") {
    return (
      <AddContainer styles={containerStyles}>
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
