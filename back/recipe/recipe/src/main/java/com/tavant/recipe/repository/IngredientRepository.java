package com.tavant.recipe.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.tavant.recipe.modle.Ingredient;

public interface IngredientRepository extends JpaRepository<Ingredient, Long> {

	//@Modifying(clearAutomatically = true)
	@Query(value = "SELECT ing_id FROM recipe.ingredient where name='name' and amount='amount';", nativeQuery = true)
	@Transactional
	public long findOnlyId(@Param("name") String name, @Param("amount") int amount);
}
