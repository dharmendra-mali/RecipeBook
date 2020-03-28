
import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router'
import {RecipesComponent} from './recipes/recipes.component'
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';

const appRoutes:Routes=[

{path:'',redirectTo:'recipe',pathMatch:'full'},
{path:'recipe',component: RecipesComponent, children:[
{path:"",component:RecipesStartComponent},
{path:"new",component:RecipesEditComponent},
{path:":id",component:RecipeDetailComponent},
{path:":id/edit",component:RecipesEditComponent}

    
]  },
{path:'shopping-list',component: ShoppingListComponent},
{path:'signup',component: SignupComponent},
{path:'signin',component: SigninComponent}


];

@NgModule({
    imports :[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{



}