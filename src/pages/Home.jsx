// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#9ef01a] flex flex-col justify-center items-center p-8">
      <h1 className="text-4xl font-bold text-[#004b23] mb-6">Home Page</h1>
      <p className="text-lg text-[#004b23] mb-8">
        Bu yerda sizning reklamangiz bo'lishi mumkin edi!
      </p>
      <div className="space-x-4">
        <Link
          to="/users"
          className="bg-[#004b23] text-white px-6 py-3 rounded hover:bg-[#38b000] transition"
        >
          View Users
        </Link>
        <Link
          to="/create-user"
          className="bg-[#004b23] text-white px-6 py-3 rounded hover:bg-[#38b000] transition"
        >
          Add New User
        </Link>
      </div>
    </div>
  );
};

export default Home;
