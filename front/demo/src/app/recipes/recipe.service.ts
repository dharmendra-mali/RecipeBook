import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

   recipeChanged=new Subject<Recipe[]>();
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe',
            'This is simply a test',
            'https://images.pexels.com/photos/263171/pexels-photo-263171.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French fries', 10)
            ]),
        new Recipe('Another Test Recipe',
            'This is simply a test',
            'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
            [
                new Ingredient('Buns', 3),
                new Ingredient('Pateto wengs', 10)
            ]),
        new Recipe('new Testy Recipe', 'This is complex a test', 'https://burpple-3.imgix.net/foods/18701eb09baa4234ed01597794_original.?w=645&dpr=1&fit=crop&q=80', [])
    ]

    constructor(private shoppingService: ShoppingService) { }
    getRecipes() {

        return this.recipes.slice();
    }
    addToShoppingList(ingredient: Ingredient[]) {

        for (let i = 0; i < ingredient.length; i++) {
            this.shoppingService.addIngredientToShopping(ingredient[i]);
        }

    }

    getrecipe(index: number) {
        return this.recipes[index];
    }
    addRecipe(recipe:Recipe){
       this.recipes.push(recipe);
       this.recipeChanged.next(this.recipes.slice());
    }
    updaterecipe(index:number,newRecipe:Recipe){
         this.recipes[index]=newRecipe;
         this.recipeChanged.next(this.recipes.slice());
    }
    deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipeChanged.next(this.recipes.slice());
    }

}