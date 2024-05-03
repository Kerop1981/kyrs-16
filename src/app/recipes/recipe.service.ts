import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { ingredient } from '../shared/ingredient.model';
import { SoppingListService } from '../shopping-list/sopping-list.service';

@Injectable({
  providedIn: 'root'
  
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>;

  private recipes: Recipe[] = [
    new Recipe(
      'a test recipe',
      ' this is simply a test',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/06/23/0/FNK_Goulash-H_s4x3.jpg.rend.hgtvcom.826.620.suffix/1592939451186.jpeg',[
        new ingredient('mat',1),
        new ingredient('mat',3)
      ]),
    new Recipe(
      'athoer test recipe',
      ' this is simply a test',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/06/23/0/FNK_Goulash-H_s4x3.jpg.rend.hgtvcom.826.620.suffix/1592939451186.jpeg',[

      new ingredient('buns',2),
      new ingredient('meat',1)
      ])
  ];
  
  constructor(private servicesl: SoppingListService){}

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientSL(ingredients:ingredient[]){
    this.servicesl.addIngredients(ingredients);
  }
}
