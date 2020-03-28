package com.tavant.recipe.controller;

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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tavant.recipe.modle.Ingredient;
import com.tavant.recipe.service.IngredientService;

@CrossOrigin
@RestController
@RequestMapping("/ingredient")
public class IngredientController {

	@Autowired
	private IngredientService ingredientService;

	@GetMapping
	public List<Ingredient> getAllIngredient() {

		return ingredientService.findAll();
	}

	@GetMapping("/{id}")
	public Ingredient getIngredients(@PathVariable("id") long id) {

		return ingredientService.findById(id);

	}

	@PostMapping
	public ResponseEntity<Void> createIngredients(@RequestBody Ingredient ingredient) {

		ingredientService.save(ingredient);

		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteIngredient(@PathVariable("id") long id) {

		ingredientService.delete(id);

		return ResponseEntity.noContent().build();
	}

	@PutMapping()
	public ResponseEntity<Void> updateIngredient(@RequestBody Ingredient ingredient) {

		 long id=  ingredientService.findId(ingredient);
		 ingredient.setIngId(id);
		 ingredientService.save(ingredient);
		
		return new ResponseEntity<Void>(HttpStatus.OK);
	}

	@GetMapping("/find")
	public int findId(@RequestBody Ingredient ingredient) {

		System.out.println("name= "+ingredient.getName()+" amount= "+ingredient.getAmount()+" id ="+ ingredient.getIngId());
		System.out.println("in maethods ");
		return ingredientService.findId(ingredient);
		
	}

}
