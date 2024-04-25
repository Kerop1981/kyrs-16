import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
 @Output() recipeWasSelected = new EventEmitter<Recipe>()
recipes: Recipe[] = [
  new Recipe('a test recipe',' this is simply a test','https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/06/23/0/FNK_Goulash-H_s4x3.jpg.rend.hgtvcom.826.620.suffix/1592939451186.jpeg'),
  new Recipe('athoer test recipe',' this is simply a test','https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/06/23/0/FNK_Goulash-H_s4x3.jpg.rend.hgtvcom.826.620.suffix/1592939451186.jpeg')
];


onRecipeSelected(recipe: Recipe){
  this.recipeWasSelected.emit(recipe)
}
}
