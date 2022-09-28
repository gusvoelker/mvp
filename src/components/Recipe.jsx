import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';


//parts needed: Recipe name, Rating, Difficulty, Link, Cost

const Recipe = (props) => {
  return (
    <Card sx={{ minWidth: 100, marginTop: '20px' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography sx={{ mb: 1.5, mt: 2 }} color="text.secondary">
          Description
        </Typography>
        <Typography variant="body2">{'another text field'}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Delete</Button>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
);
}

export default Recipe;