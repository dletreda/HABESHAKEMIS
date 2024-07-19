import React, { useState, useEffect } from 'react';

const ProductForm = ({ onSaveProduct, selectedProduct, onEditProduct }) => {
  const [product, setProduct] = useState({ productName: '', productDescription: '', price: 0, image: '', rating: 0 });

  useEffect(() => {
    if (selectedProduct) {
      setProduct({
        productName: selectedProduct.productName || '',
        productDescription: selectedProduct.productDescription || '',
        price: selectedProduct.price || 0,
        image: selectedProduct.image || '',
        rating: selectedProduct.rating || 0
      });
    } else {
      setProduct({ productName: '', productDescription: '', price: 0, image: '', rating: 0 });
    }
  }, [selectedProduct]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedProduct) {
      onEditProduct(product);
    } else {
      onSaveProduct(product);
      setProduct({ productName: '', productDescription: '', price: 0, image: '', rating: 0 });
    }
  };

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setProduct({ ...product, image: imageFile.name });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Product Name:</label>
        <input type="text" value={product.productName} onChange={(e) => setProduct({ ...product, productName: e.target.value })} />
      </div>
      <div>
        <label>Product Description:</label>
        <textarea value={product.productDescription} onChange={(e) => setProduct({ ...product, productDescription: e.target.value })} />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" value={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value })} />
      </div>
      <div>
        <label>Image (Filename):</label>
        <input type="text" value={product.image} onChange={(e) => setProduct({ ...product, image: e.target.value })} />
      </div>
      <div>
        <label>Or Upload Image:</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>
      <div>
        <label>Rating:</label>
        <input type="number" value={product.rating} onChange={(e) => setProduct({ ...product, rating: e.target.value })} />
      </div>
      <button type="submit">{selectedProduct ? 'Update Product' : 'Save Product'}</button>
    </form>
  );
};

export default ProductForm;