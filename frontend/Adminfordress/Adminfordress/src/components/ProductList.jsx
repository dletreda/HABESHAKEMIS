import React from "react";
import '../style.css';

const ProductList = ({ products, onEditProduct, onDeleteProduct }) => {
  if (!products || products.length === 0) {
    return (
      <div>
        <h2>No products available.</h2>
      </div>
    );
  }

  return (
    <div>
      {products.map((product) => (
        <div className="product-item" key={product.id}>
         <img src={`images/${product.image}`} alt={product.productName} />
          <h3>{product.productName}</h3>
          <p>{product.productDescription}</p>  
       
          <p>{product.price}</p>
          <p>{product.rating}</p>
          <button onClick={() => onEditProduct(product)}>Edit</button>
          <button onClick={() => onDeleteProduct(product.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;