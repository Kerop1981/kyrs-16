import { EventEmitter, Injectable } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoppingListService {
  ingredientsChanged = new Subject<ingredient[]>()
  private ingredients: ingredient[] = [
    new ingredient('apples',5),
    new ingredient('Tomatos',10),
  ];

  getIndredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  constructor() { }

  addIngredients(ingredients:ingredient[]){
    // for(let ingredient of ingredients){
    //   this.addIngredients(ingredient)
    // }

    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice())
  }
}

