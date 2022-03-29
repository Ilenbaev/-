import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="nav-list">
          <NavLink to="/">Counter</NavLink>
          <NavLink to="/recep">Receipts</NavLink>
          <NavLink to="/email">Email</NavLink>
          <NavLink to="/todo">TodoList</NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
