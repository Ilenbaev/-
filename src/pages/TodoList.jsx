import userEvent from "@testing-library/user-event";
import axios from "axios";
import React, { useState } from "react";
import AddContact from "../components/AddContact/AddContact";
import ReadTodo from "../components/ReadTodo/ReadTodo";

const TodoList = () => {
  const addTask = (obj) => {
    axios.post("http://localhost:8000/users", obj);
  };

  const delTodo = async (id) => {
    await axios.delete(`http://localhost:8000/users/${id}`);
  };

  return (
    <div>
      <AddContact addTask={addTask} />
      <ReadTodo delTodo={delTodo} />
    </div>
  );
};

export default TodoList;
