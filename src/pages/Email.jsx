import { queryByTitle } from "@testing-library/react";
import React, { useState } from "react";

const Email = () => {
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");
  let [passCheck, setPassCheck] = useState("");

  function inpVal() {
    if (pass == passCheck) {
      let form = document.querySelector(".form");
      let qut = document.querySelector(".qut");
      let error = document.querySelector(".error");
      form.style.display = "none";
      qut.style.display = "block";
      error.style.display = "none";
    } else {
      let error = document.querySelector(".error");
      error.style.display = "block";
      setEmail("");
      setPass("");
      setPassCheck("");
    }
  }

  function clickQ() {
    let form = document.querySelector(".form");
    let qut = document.querySelector(".qut");
    form.style.display = "block";
    qut.style.display = "none";
    setEmail("");
    setPass("");
    setPassCheck("");
  }

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <div className="form">
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="email"
          name="email"
          value={email}
        />
        <br />
        <input
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="password"
          name="pass"
          value={pass}
        />
        <br />
        <input
          onChange={(e) => setPassCheck(e.target.value)}
          type="password"
          placeholder="подтвердите пароль"
          name="passCheck"
          value={passCheck}
        />
        <br />
        <button onClick={() => inpVal()}>Войти</button>
      </div>

      <div className="qut" style={{ display: "none" }}>
        <h2>{email}</h2>
        <button onClick={() => clickQ()}>Выйти</button>
      </div>

      <div className="error" style={{ display: "none" }}>
        <h1>Пароль введен неправильно</h1>
      </div>
    </div>
  );
};

export default Email;
