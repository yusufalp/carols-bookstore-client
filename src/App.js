import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./shared/components/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./components/Home";
import Admin from "./components/Admin";
import BookDetails from "./components/BookDetails";
import Update from "./components/Update";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Create from "./components/Create";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />
        <Route
          path="/signup"
          element={<Signup user={user} setUser={setUser} />}
        />
        <Route path="/books/:bookId" element={<BookDetails />} />
        <Route element={<ProtectedRoute user={user} />}>
          <Route path="/admin" element={<Admin user={user} />} />
          <Route path="/books/:bookId/update" element={<Update />} />
          <Route path="/create" element={<Create />} />
        </Route>
        <Route path="/*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
