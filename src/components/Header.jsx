// src/components/Header.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#004b23] text-white py-4 px-8 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">User Management</h1>
      <nav className="space-x-6">
        <NavLink to="/" className="hover:text-[#38b000] transition-all">
          Home
        </NavLink>
        <NavLink to="/create-user" className="hover:text-[#38b000] transition-all">
          Add User
        </NavLink>
        <NavLink to="/users" className="hover:text-[#38b000] transition-all">
          Users
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
