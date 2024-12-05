// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#004b23] text-white py-4 px-8 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">User Management</h1>
      <nav className="space-x-6">
        <Link to="/" className="hover:text-[#38b000] transition-all">
          Home
        </Link>
        <Link to="/create-user" className="hover:text-[#38b000] transition-all">
          Add User
        </Link>
        <Link to="/users" className="hover:text-[#38b000] transition-all">
          Users
        </Link>
      </nav>
    </header>
  );
};

export default Header;
