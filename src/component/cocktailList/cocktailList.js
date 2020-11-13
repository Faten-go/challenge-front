import React from "react";
import { Spinner } from "reactstrap";
import Cocktail from "../cocktail/cocktail";

function CocktailList({ cocktails, loadCocktails }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {loadCocktails ? (
         <Spinner color="secondary" />
      ) : (
        cocktails.map( el => <Cocktail cocktail={el} />)
    )}
    </div>
  );
}

export default CocktailList;
