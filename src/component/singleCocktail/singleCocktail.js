import React from "react";
import { Link } from 'react-router-dom';
import { Spinner } from 'reactstrap'

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

let detailsStyle = {
    textAlign : 'center',
    maxWidth : '400px'
}

function SingleCocktail({ cocktail, loadCocktail }) {
  return (
    <div>
      {loadCocktail ? (
        <Spinner animation="border" variant="success" />
      ) : (
        <Card style={detailsStyle}>
        <CardImg src={cocktail.strDrinkThumb} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{cocktail.strDrink}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{cocktail.strCategory}</CardSubtitle>
          <CardText>{cocktail.strInstructions}</CardText>
          <br/>
          <CardText>{cocktail.strGlass}</CardText>
          <br/>
          <CardText>{cocktail.strAlcoholic}</CardText>
            <Button>
                <Link to={'/'}>Back Home</Link>
            </Button>
        </CardBody>
      </Card>
      )}
    </div>
  );
}

export default SingleCocktail;