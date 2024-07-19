package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

 
import com.example.demo.model.Product;
 
import com.example.demo.service.ProductService;

@RestController
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5175"})
public class ShoppingController {
	
	@Autowired
	ProductService productService;
	
	 

	
	@GetMapping("/products")
	public ResponseEntity<List<Product>> getProducts() {
		return new ResponseEntity<>(productService.getProducts(),HttpStatus.OK);
		
	}
	
	 
	 
	

	@PostMapping("/products")
	public ResponseEntity<Product> saveProduct(@RequestBody Product product) {
		return new ResponseEntity<>(productService.saveProduct(product), HttpStatus.CREATED);
		
	}
	
	
	@GetMapping("/product/{id}")
	public ResponseEntity<Product> getProductById(@PathVariable int id) {
		return new ResponseEntity<>(productService.findProductById(id), HttpStatus.OK);
		
	}
	
	 
	
	   
	
	@DeleteMapping("/product/{id}")
	public ResponseEntity<String> deleteProductById(@PathVariable int id) {
		return new ResponseEntity<>(productService.deleteProductById(id), HttpStatus.OK);
			
			
	}
	
 
	 @PutMapping("/product/{id}")
	    public ResponseEntity<Product> updateProduct(@PathVariable int id, @RequestBody Product product){
	        return new ResponseEntity<>(productService.updateProduct(id,product),HttpStatus.ACCEPTED);
	    }
	 
	 
}
