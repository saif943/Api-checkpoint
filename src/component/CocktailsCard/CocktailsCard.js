import { React, useEffect, useState } from "react";
import axios from "axios";
import Cards from "../Cards/Cards";
import "./Cocktails.css";
import { Link } from "react-router-dom";

const CocktailsCard = () => {
  const [cocktails, setCocktails] = useState();
  const [search, setSearch] = useState("");
  useEffect(() => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`;
    axios
      .get(url)
      .then((response) => setCocktails(response.data))
      .catch((error) => console.error(error));
  }, [search]);

  return (
    <div>
      <input onChange={(e) => setSearch(e.target.value)} />
      <div className="list">
        {cocktails &&
          cocktails.drinks &&
          cocktails.drinks.map((el) => (
            <Link to={`/cocktails/card/${el.idDrink}`} key={el.idDrink}>
              <Cards key={el.id} cards={el} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default CocktailsCard;
