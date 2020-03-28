import * as ingredientModel from '../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { HttpClient ,} from '@angular/common/http';

import { StoreShopping } from './store-shopping';
import { Subject } from 'rxjs';



@Injectable()
export class ShoppingService{
 ingredientChanged=new Subject<ingredientModel.Ingredient[]>();
 ingredients: ingredientModel.Ingredient[] = [];
 startEditing =new Subject<number>(); 
      

      constructor(private http:HttpClient,private storeShopping:StoreShopping){

      }

      getIngredien(index:number){
               return this.ingredients[index]

      }
     getIngredient(){
      
      return this.ingredients.slice();
     }
      addIngredient(ingredient: ingredientModel.Ingredient){
        console.log("edit mode"+ingredient)
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
        this.storeShopping.add(ingredient).subscribe(
          data=>console.log(data),
          err=>console.log(err)
        );

      }
      initializeData(){

         return this.storeShopping.get()

      }

      addIngredientToShopping(ingredient: ingredientModel.Ingredient){
         this.ingredients.push(ingredient);
         this.storeShopping.add(ingredient).subscribe(
          data=>console.log(data),
          err=>console.log(err)
        );

      }
      updateIngredient(index:number,tempIngredient:ingredientModel.Ingredient){
        this.ingredients[index]=tempIngredient;
        this.ingredientChanged.next(this.ingredients.slice());
        console.log("id of ingredient  "+tempIngredient.ingId);
        
       }

       deleteIngredient(index:number){
            this.ingredients.splice(index,1);
            this.ingredientChanged.next(this.ingredients.slice());
              

       }
    
}