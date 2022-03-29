import React, { useState } from "react";
import axios from "axios";

const ReadTodo = ({ delTodo, editTodo }) => {
  let [user, setUser] = useState([]);

  const getTodo = async () => {
    let { data } = await axios("http://localhost:8000/users");
    setUser(data);
  };
  getTodo();

  return (
    <div
      style={{
        width: "260px",
        display: "flex",
      }}
    >
      {user.map((item) => (
        <ul
          key={item.id}
          style={{
            listStyleType: "none",
            padding: "0px",
            border: "2px solid black",
            margin: "20px",
            borderRadius: "8px",
            padding: "15px",
          }}
        >
          <li>
            <img src={item.img} alt="" width={250} height={250} />
          </li>
          <li>Name: {item.name}</li>
          <li>Phone: {item.phone}</li>
          <li>Email: {item.email}</li>
          <button
            onClick={() => delTodo(item.id)}
            style={{
              color: "red",
              width: "100px",
              fontSize: "16px",
              marginTop: "10px",
            }}
          >
            Delete
          </button>
        </ul>
      ))}
    </div>
  );
};

export default ReadTodo;
