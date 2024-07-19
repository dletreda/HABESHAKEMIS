package com.example.demo.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

 
import com.example.demo.dao.ProductRepository;
 
import com.example.demo.exceptions.ProductNotFoundException;
 
import com.example.demo.model.Product;
 
import com.example.demo.service.ProductService;

@Service
public class ProductServiceImpl  implements ProductService{
	
	@Autowired
	ProductRepository repository;
	
 

	@Override
	public List<Product> getProducts() {
		Iterable<Product> products =repository.findAll();
		List<Product> list = new ArrayList<>();
		products.forEach(list::add);
		if(list.isEmpty()) {
			throw new ProductNotFoundException("No Products Available!!");
		}
		return list;
	}

	@Override
	public Product findProductById(int id) {
		Optional<Product> product= repository.findById(id);
		if(product.isPresent()) {
			return product.get();
		}
		else
			throw new ProductNotFoundException("No Products Available!!");
	}

	@Override

    public Product saveProduct(Product product) {
        return repository.save(product);
    }
	
	/*
	 * public void saveProductWithCustomer() { Customer customer = new Customer();
	 * customer.setFirstName("John"); customerRepository.save(customer);
	 * 
	 * Product product = new Product(); product.setProductName("Sample Product");
	 * product.setCustomer(customer);
	 * 
	 * repository.save(product); }
	 */

	@Override
	public String deleteProductById(int id) {
		Optional<Product> product= repository.findById(id);
		if(product.isPresent()) {
			repository.deleteById(id);
			return "Product Deleted Successfully";
		}
		else
			throw new ProductNotFoundException("No Products Available!!");		
	}

	public Product updateProduct(int id, Product product) {
        Product existingProduct = findProductById(id);
        if (existingProduct != null) {
            if (product.getProductName() != null)
                existingProduct.setProductName(product.getProductName());
            if (product.getProductDescription() != null)
                existingProduct.setProductDescription(product.getProductDescription());
            if (product.getImage() != null)
                existingProduct.setImage(product.getImage());
            if (product.getPrice() != 0)
                existingProduct.setPrice(product.getPrice());
            if (product.getRating() != 0)
                existingProduct.setRating(product.getRating());

            repository.save(existingProduct);
            return existingProduct;
        } else {
            throw new ProductNotFoundException("Product with given id: " + id + " is not available !!");
        }
    }


}
