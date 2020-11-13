
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutUs from "./component/pages/AboutUs";
import Home from "./component/pages/Home";
import Error from "./component/pages/Error";
import Footer from "./component/Footer/Footer";
import CocktailDetails from "./component/pages/cocktailDetails"
// component
import NavBar from'./component/navBar/navBar';
import { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [cocktails, setCocktails] = useState([]);
  const [loadCocktails, setLoadCocktails] = useState(true);
  
  const getCocktails = () => {
    Axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
      .then((res) => {
        setCocktails(res.data.drinks);
        setLoadCocktails(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getCocktails();
  }, []);
  
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Home cocktails={cocktails} loadCocktails={loadCocktails} />}
        />
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/cocktail/:id" component={CocktailDetails} />
        
        <Route path="/*" component={Error} />
      </Switch>
      </BrowserRouter>
      
      <Footer />
    </div>

  );
}

export default App;
