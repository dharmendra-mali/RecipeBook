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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tavant.recipe.modle.Recipe;
import com.tavant.recipe.service.recipeService;

@RestController
@RequestMapping("/recipe")
@CrossOrigin
public class RecipeController {

	@Autowired
	private recipeService recipeService;

	@GetMapping
	public List<Recipe> getAllRecipe() {

		return recipeService.findAll();
	}

	@GetMapping("/{id}")
	public Recipe getRecipe(@PathVariable("id") long id) {

		return recipeService.findById(id);

	}

	@PostMapping
	public ResponseEntity<Void> createRecipe(@RequestBody Recipe recipe) {

		recipeService.save(recipe);

		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteRecipe(@PathVariable("id") long id) {

		recipeService.delete(id);

		return ResponseEntity.noContent().build();
	}

}
