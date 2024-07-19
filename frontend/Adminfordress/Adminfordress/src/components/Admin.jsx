import React, { useState, useEffect } from 'react';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../service/apiService';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import Header from './Header';

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleSaveProduct = async (product) => {
    try {
      product.price = Number(product.price);
      await createProduct(product);
      fetchProducts();
      setSelectedProduct(null);
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  const handleEditProduct = async (product) => {
    try {
      product.price = Number(product.price);
      await updateProduct(selectedProduct.id, product);
      fetchProducts();
      setSelectedProduct(null);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleSelectProductForEdit = (product) => {
    setSelectedProduct(product);
  };

  const handleDeleteProduct = async (id) => {
    try {
      await deleteProduct(id);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div>
      <Header />
      <ProductForm
        onSaveProduct={handleSaveProduct}
        selectedProduct={selectedProduct}
        onEditProduct={handleEditProduct}
      />
      <ProductList
        products={products}
        onEditProduct={handleSelectProductForEdit}
        onDeleteProduct={handleDeleteProduct}
      />
    </div>
  );
};

export default Admin;