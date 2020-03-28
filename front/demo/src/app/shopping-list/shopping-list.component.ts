import { Component, OnInit, OnDestroy } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingredients: Ingredient[] ;
  private subscription:Subscription;
 



  constructor(private shoppingService:ShoppingService) { }

  ngOnInit() {
    
       this.ingredients=this.shoppingService.ingredients

    this.subscription=this.shoppingService.ingredientChanged.subscribe(
      (ingredient:Ingredient[])=>{

        this.ingredients=ingredient
        
              
        
      }

    );
  }

  onEditItem(index:number){
   this.shoppingService.startEditing.next(index);

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
