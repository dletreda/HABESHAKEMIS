import axios from 'axios';

const API_URL = 'http://localhost:8080';

const url = axios.create({
  baseURL: API_URL,
});

const getProducts = () => {
  return url.get('/products');
};

const createProduct = (product) => {
  return url.post('/products', product);
};

const updateProduct = (id, product) => {
    console.log({id, product})
  return url.put(`/product/${id}`, product);
};

const   deleteProduct = (id) => {
  return url.delete(`/product/${id}`);
};

export { getProducts, createProduct, updateProduct, deleteProduct };