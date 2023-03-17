import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import StoreNav from "./components/StoreNav";
import List from "./components/List";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <StoreNav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
