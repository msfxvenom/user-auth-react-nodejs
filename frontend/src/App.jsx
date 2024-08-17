import React from "react";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import { Routes, Route } from "react-router-dom";
import Notfound from "./Notfound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
