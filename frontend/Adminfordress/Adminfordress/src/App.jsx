import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./components/Admin";
 
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import "./style.css";

const App = () => {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<Admin />} />  
        
        <Route path="/add-product" element={<ProductForm />} />
        <Route path="/product-list" element={<ProductList />} />
      </Routes>
    </Router>
  );
};

export default App;