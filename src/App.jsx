// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Home from "./pages/Home";
import CreateUser from "./pages/CreateUser";
import NotFoundPage from "./pages/NotFoundPage";
import Users from "./pages/Users";
import Header from "./components/Header";

function App() {
  return (
    <UserProvider>
      <Router>
        <Header /> {/* Header must be inside Router */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
