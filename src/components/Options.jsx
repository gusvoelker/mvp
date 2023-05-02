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
import { useSelector, useDispatch } from "react-redux";
import {
  addCalendarMeals,
  removeCalendarMeal,
} from "./redux/slices/calendarSlice";

const Form = styled.div`
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
  const selectedDay = useSelector((state) => state.calendar.selectedDay);
  const calendarMeals = useSelector((state) => state.calendar.calendarMeals);
  const dispatch = useDispatch();

  const handleAddMeal = () => {
    Array.prototype.random = function () {
      return this[Math.floor(Math.random() * this.length)];
    };
    if (selectedDay) {
      let randomMeal = meals.random();
      axios
        .post("http://localhost:3060/days", {
          date: selectedDay,
          mealName: randomMeal.mealName,
        })
        .then((res) => {
          if (res) {
            let calendarMeals = [
              {
                date: selectedDay,
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
    if (calendarMeals.some((meal) => meal.date === selectedDay)) {
      axios
        .put("http://localhost:3060/delete/days", null, {
          params: { date: selectedDay },
        })
        .then((res) => {
          if (res.status === 202) {
            dispatch(removeCalendarMeal({ date: selectedDay }));
          }
        })
        .catch((err) => console.log(err));
    }
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
