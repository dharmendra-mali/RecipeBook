package com.tavant.recipe.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tavant.recipe.modle.Recipe;

public interface RecipeRepository extends JpaRepository<Recipe, Long> {

}
