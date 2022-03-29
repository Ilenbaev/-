import React, { useState } from "react";

const AddContact = ({ addTask }) => {
  let [name, setName] = useState("");
  let [phone, setPhone] = useState("");
  let [email, setEmail] = useState("");
  let [img, setImg] = useState("");

  const handleClick = () => {
    if (!name.trim() || !phone.trim() || !email.trim() || !img.trim()) {
      alert("Заполните поля");
      return;
    }
    let obj = {
      name,
      phone,
      email,
      img,
    };
    addTask(obj);
    setName("");
    setPhone("");
    setEmail("");
    setImg("");
  };
  return (
    <div style={{ textAlign: "center" }}>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        name="name"
        placeholder="name"
        value={name}
      />
      <br />
      <input
        onChange={(e) => setPhone(e.target.value)}
        type="text"
        name="phone"
        placeholder="phone"
        value={phone}
      />
      <br />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        name="email"
        placeholder="email"
        value={email}
      />
      <br />
      <input
        onChange={(e) => setImg(e.target.value)}
        type="text"
        name="img"
        placeholder="img"
        value={img}
      />
      <br />
      <button onClick={() => handleClick()}>Send</button>
    </div>
  );
};

export default AddContact;
