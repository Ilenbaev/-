import React from "react";

const Ingredients = ({ meal }) => {
  return (
    <div style={{ textAlign: "center", fontSize: "20px" }}>
      {meal == "pizza" ? (
        <ul style={{ listStyleType: "none" }}>
          <li>Мука</li>
          <li>Шампиньоны</li>
          <li>Пармезан</li>
        </ul>
      ) : meal == "plov" ? (
        <ul style={{ listStyleType: "none" }}>
          <li>Мясо</li>
          <li>Рис</li>
          <li>Морковка</li>
        </ul>
      ) : meal == "sushi" ? (
        <ul style={{ listStyleType: "none" }}>
          <li>Японский рис</li>
          <li>Васаби</li>
          <li>Рыбные продукты</li>
        </ul>
      ) : (
        <p>Выберите блюдо</p>
      )}
    </div>
  );
};

export default Ingredients;
