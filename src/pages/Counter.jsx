import React, { useState } from "react";

const Counter = () => {
  let [sum, setSum] = useState(0);
  return (
    <div style={{ fontSize: "30px", textAlign: "center" }}>
      <p>вы нажали на кнопку {sum} раз</p>
      <button onClick={() => setSum(sum + 1)}>ПЛЮС </button>
      <button onClick={() => setSum(sum - 1)}>МИНУС</button>
    </div>
  );
};

export default Counter;
