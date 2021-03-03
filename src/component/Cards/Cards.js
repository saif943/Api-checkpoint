import React from "react";
import "./Cards.css";
const Cards = ({ cards }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="face face1">
          <div className="content">
            <img src={cards.strDrinkThumb} alt="aa" />
            <h3>{cards.strDrink}</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <p>{cards.strInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
