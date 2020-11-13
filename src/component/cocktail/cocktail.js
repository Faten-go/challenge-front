
import React from 'react';
import { Link } from "react-router-dom";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

let sizeStyle = {
    maxWidth: '200px'
  }

  function Cocktail({ cocktail }) {
  return (
    <div>
      <Card style={sizeStyle}>
        <CardImg  src={cocktail.strDrinkThumb} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{cocktail.strDrink}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{cocktail.strCategory}</CardSubtitle>
          <CardText>{cocktail.strInstructions}</CardText>
          <Button color="warning">
          <Link to={`/cocktail/${cocktail.idDrink}`}>Details</Link>
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cocktail;


