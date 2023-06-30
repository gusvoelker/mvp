import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { deleteUserMeal } from "./redux/slices/mealListSlice";
import { useDispatch } from "react-redux";

const Recipe = (props) => {
  //TODO: make it so that refresh isn't needed
  //Probably make a fetch meals function and call that
  const dispatch = useDispatch();
  const onDelete = () => {
    axios
      .delete("http://127.0.0.1:8000/meals/", {
        params: { id: props.meal.id },
      })
      .then((res) => {
        if (res.status === 202) {
          dispatch(deleteUserMeal({ id: props.meal.id }));
        }
      })
      .catch((err) => console.log(err));
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
