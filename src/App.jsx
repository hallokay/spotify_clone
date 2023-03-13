import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Layout, Discover } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<Discover />} />
        <Route path="/top-arttist" element={<Discover />} />
      
      </Route>
    </Routes>
  );
}

export default App;
