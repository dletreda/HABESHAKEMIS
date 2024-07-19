 
import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';
const MenuBar = () => {
  return (
    <div className="menu-bar">
      <Link to="/admin/add" className="menu-item">Add Product</Link>
      <Link to="/admin/update" className="menu-item">Update Product</Link>
      <Link to="/admin/delete" className="menu-item">Delete Product</Link>
      <Link to="/admin/get" className="menu-item">Get Products</Link>
    </div>
  );
};

export default MenuBar;