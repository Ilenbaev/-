import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import EditTodo from "./components/EditTodo/EditTodo";
import Navbar from "./components/Navbar/Navbar";
import Counter from "./pages/Counter";
import Email from "./pages/Email";
import Receipts from "./pages/Receipts";
import TodoList from "./pages/TodoList";

const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Counter />} />
          <Route path="/recep" element={<Receipts />} />
          <Route path="/email" element={<Email />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/edit" element={<EditTodo />} />
        </Route>
      </Routes>
    </div>
  );
};

export default MyRoutes;
