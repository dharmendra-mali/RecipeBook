import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { ShoppingService } from '../shopping-list/shopping.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
 

  constructor(private recipeServiece:RecipeService,
    private shoppingService: ShoppingService) { }

  ngOnInit() {

    

      this.shoppingService.initializeData().subscribe(
        ing=>{this.shoppingService.ingredients=ing;
        console.log(ing);}


      )
  }

}
