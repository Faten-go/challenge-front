import React from "react";
import CocktailList from "../cocktailList/cocktailList";
import SearchBar from "../searchBar/searchBar"

function Home({ cocktails, loadCocktails }) {
  return (
    <div className="Content">
        <SearchBar/>
        <br/>
        
        <CocktailList cocktails={cocktails} loadCocktails={loadCocktails} />
    </div>
  );
}

export default Home;
