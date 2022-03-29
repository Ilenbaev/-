import React, { useState } from "react";
import Ingredients from "./Ingredients";

const Receipts = () => {
  let [meal, setMeal] = useState("");

  const eda = (e) => {
    let idFood = e.target.id;
    setMeal(idFood);
  };

  return (
    <div style={{ textAlign: "center", fontSize: "20px", marginTop: "15px" }}>
      <form action="">
        <input onChange={(e) => eda(e)} type="radio" name="food" id="pizza" />
        <label>Пицца</label>

        <input onChange={(e) => eda(e)} type="radio" name="food" id="plov" />
        <label>Плов</label>

        <input onChange={(e) => eda(e)} type="radio" name="food" id="sushi" />
        <label>Суши</label>
      </form>
      <Ingredients meal={meal} />
    </div>
  );
};

export default Receipts;
