import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RadioButtonsGroup from "./Radio.jsx";
import Filters from "./Filters.jsx";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import { OptContainer } from "./StyledComponents/StyledComponents.jsx";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCalendarMeals } from "./redux/slices/calendarMealSlice.js";

const Form = styled.form`
  margin-top: 4%;
`;
const FilterTitle = styled.div`
  margin-top: 4%;
`;
const BttnContainer = styled.div`
  margin-top: 10%;
`;

const Options = (props) => {
  const meals = useSelector((state) => state.mealList);
  const dispatch = useDispatch();
  let emptyMeal = {
    mealName: "",
    description: "",
    recipeLink: "",
    cost: "",
    rating: "",
    difficulty: "",
  };
  const handleAddMeal = () => {
    Array.prototype.random = function () {
      return this[Math.floor(Math.random() * this.length)];
    };
    if (props.selectedDay) {
      let randomMeal = meals.random();
      axios
        .post("http://localhost:3060/days", {
          date: props.selectedDay,
          mealName: randomMeal.mealName,
        })
        .then((res) => {
          if (res) {
            let calendarMeals = [
              {
                date: props.selectedDay,
                meal: {
                  mealName: randomMeal.mealName,
                },
              },
            ];
            dispatch(addCalendarMeals({ calendarMeals }));
          }
        });
    }
  };

  const handleRemoveMeal = () => {
    props.calendarMeals[props.selectedDay] = emptyMeal;
    props.setCalendarMeals([...props.calendarMeals]);
  };

  return (
    <OptContainer>
      Meal Type
      <Form>
        <RadioButtonsGroup />
        <FilterTitle>Filters</FilterTitle>
        <Filters />
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "75%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            sx={{ mt: 1 }}
            id="max-cost"
            label="Max Cost"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
          <TextField
            id="recent"
            label="Days Since Selected"
            type="number"
            InputProps={{ inputProps: { min: 1, max: 3 } }}
          />
        </Box>
        <BttnContainer>
          <Button
            onClick={handleAddMeal}
            variant="contained"
            sx={{ fontSize: 24, width: "90%" }}
          >
            {" "}
            Add Meal{" "}
          </Button>
        </BttnContainer>
        <BttnContainer>
          <Button
            onClick={handleRemoveMeal}
            variant="contained"
            sx={{ fontSize: 24, width: "90%" }}
          >
            {" "}
            Remove Meal{" "}
          </Button>
        </BttnContainer>
      </Form>
    </OptContainer>
  );
};

export default Options;
