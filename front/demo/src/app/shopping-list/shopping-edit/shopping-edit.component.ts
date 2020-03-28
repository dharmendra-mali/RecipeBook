import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy
} from '@angular/core';

import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent implements OnInit,OnDestroy {
 @ViewChild('formIngredient') shoppingListForm:NgForm
  subscription:Subscription;
  editMode=false;
  editItemIndex:number;
  editItem:Ingredient;
  

  constructor(private shoppingServiec:ShoppingService) { }

  ngOnInit() {
   this.subscription=this.shoppingServiec.startEditing.subscribe(
       (index:number)=>{
           this.editItemIndex=index
           this.editMode=true
           this.editItem=this.shoppingServiec.getIngredien(index)
           console.log("index of "+index)
            this.shoppingListForm.setValue({
              name:this.editItem.name,
              amount:this.editItem.amount
            })
       }

   )

  }

  onAddItem(form:NgForm) {
    const value=form.value;
    const newIngredient = new Ingredient(value.name, value.amount);

    if(this.editMode){
      this.shoppingServiec.updateIngredient(this.editItemIndex,newIngredient)
      console.log("edit mode "+ this.editMode+" "+this.editItem.name+" "+this.editItem.amount )
    }else
    {
      this.shoppingServiec.addIngredient(newIngredient);
    }

    this.shoppingListForm.reset();
    this.editMode=false;
    
  }

  onClear(){
   this.shoppingListForm.reset();
   this.editMode=false;


  }
  onDelete(){
    this.shoppingServiec.deleteIngredient(this.editItemIndex)
    this.onClear();

  }
  ngOnDestroy(){

    this.subscription.unsubscribe();
  }
   
  
}
