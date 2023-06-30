import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { addUserMeals } from "./redux/slices/mealListSlice";
import { useDispatch } from "react-redux";
import { getMealData } from "../helpers/getMeals";

const Recipe = (props) => {
  const dispatch = useDispatch();
  const onDelete = async () => {
    await axios.delete("http://127.0.0.1:8000/meals/", {
      params: { id: props.meal.id },
    });
    const meals = await getMealData();
    dispatch(addUserMeals(meals));
  };

  return (
    <Card sx={{ minWidth: 100, marginTop: "0px" }} id={props.meal.id}>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.meal.title}
        </Typography>
        <Typography sx={{ mb: 1.5, mt: 2 }} color="text.secondary">
          Description
        </Typography>
        <Typography variant="body2">{props.meal.description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onDelete}>
          Delete
        </Button>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
  );
};

export default Recipe;
