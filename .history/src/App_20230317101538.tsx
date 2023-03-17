import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import StoreNav from "./components/StoreNav";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <StoreNav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={}></Route>
          <Route path="/cart" element={<List />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
