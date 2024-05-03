import { EventEmitter, Injectable } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class SoppingListService {
  ingredientsChanged = new EventEmitter<ingredient[]>()
  private ingredients: ingredient[] = [
    new ingredient('apples',5),
    new ingredient('Tomatos',10),
  ];

  getIndredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  constructor() { }

  addIngredients(ingredients:ingredient[]){
    // for(let ingredient of ingredients){
    //   this.addIngredients(ingredient)
    // }

    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice())
  }
}

