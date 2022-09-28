import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import axios from 'axios';



//parts needed: Recipe name, Rating, Difficulty, Link, Cost

const Recipe = (props) => {
  const onDelete = () => {
    axios.put('http://localhost:3060/delete', null, { params: { id: props.meal._id } })
    .then(() => {
      axios.get('http://localhost:3060/meals')
      .then(({data}) => {props.setMeals(data)});
    })
    .catch(err => console.log(err));
  };

  return (
    <Card sx={{ minWidth: 100, marginTop: '20px' }} id={props.meal._id}>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.meal.mealName}
        </Typography>
        <Typography sx={{ mb: 1.5, mt: 2 }} color="text.secondary">
          Description
        </Typography>
        <Typography variant="body2">{props.meal.description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onDelete}>Delete</Button>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
);
}

export default Recipe;