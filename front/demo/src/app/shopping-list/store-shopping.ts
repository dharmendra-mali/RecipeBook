import { HttpClient } from '@angular/common/http';
import { Ingredient } from '../shared/ingredient.model';
import { Injectable } from '@angular/core';




@Injectable()
export class StoreShopping {

    private url = "http://localhost:8000/ingredient";

    constructor(private http: HttpClient) { }

    add(ingredient: Ingredient) {

        return this.http.post(this.url, ingredient);

    }

    get(){

        return this.http.get<Ingredient[]>(this.url);
    }
    update(ingredient: Ingredient){
   
        return this.http.put(this.url, ingredient);
      
    }

    delete(id:number){

        return this.http.delete(this.url+id);

    }
    getId(){
        return this.http.get(this.url+"/find");
    }

} 