package com.tavant.recipe.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tavant.recipe.modle.Recipe;
import com.tavant.recipe.repository.RecipeRepository;

@Service
public class recipeService {

	@Autowired
	private RecipeRepository recipeRepository;

	public List<Recipe> findAll() {

		recipeRepository.findAll();

		return recipeRepository.findAll();
	}

	public void save(Recipe recipe) {

		recipeRepository.save(recipe);

	}

	public Recipe findById(long id) {
		return recipeRepository.findById(id).get();
	}

	public void delete(long id) {

		Recipe recipe = recipeRepository.findById(id).get();

		recipeRepository.delete(recipe);

	}

}
