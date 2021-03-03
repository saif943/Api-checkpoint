import { React, useState, useEffect } from "react";
import axios from "axios";
import "./Card.css";

const Card = ({ match }) => {
  //
  const [cocktail, setCocktail] = useState({});
  useEffect(() => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${match.params.id}`;

    axios.get(url).then((res) => setCocktail(res.data.drinks[0]));
  }, []);
  return (
    <div className="c">
      {<img src={cocktail.strDrinkThumb} alt="a" style={{ width: "200px" }} />}
      <h3>Name:{cocktail.strDrink}</h3>
      <p>Ingredient:{cocktail.strIngredient1}</p>
    </div>
  );
};

export default Card;
