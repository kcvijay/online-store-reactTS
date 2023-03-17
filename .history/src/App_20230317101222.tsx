import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import StoreNav from "./components/StoreNav";

function App() {
  return (
    <div className="App">
      <StoreNav />
      <BrowserRouter></BrowserRouter>
    </div>
  );
}

export default App;
