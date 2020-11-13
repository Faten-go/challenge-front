import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import SingleCocktail from '../singleCocktail/singleCocktail';

function CocktailDetails(props) {

    const [cocktail, setCocktail] = useState({});
    const [loadCocktail, setLoadCocktail] = useState(true);
    const { id } = props.match.params;

    const getCocktail = () => {
        Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
          .then((res) => {
            setCocktail(res.data.drinks[0]);
            setLoadCocktail(false);
          })
          .catch((err) => console.log(err));
      };

      useEffect(() => {
        getCocktail();
        console.log(cocktail.strDrink);
      }, []);


  return (
    <div>
       <SingleCocktail cocktail={cocktail} loadCocktail={loadCocktail}/>
    </div>
    
  );
};

export default CocktailDetails;