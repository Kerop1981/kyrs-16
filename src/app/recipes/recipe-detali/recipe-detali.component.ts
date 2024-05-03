import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detali',
  templateUrl: './recipe-detali.component.html',
  styleUrls: ['./recipe-detali.component.css']
})
export class RecipeDetaliComponent {
 @Input() recipe!: Recipe;

 constructor(private recipeservice : RecipeService){}
 onAddToShopingList(){
  this.recipeservice.addIngredientSL(this.recipe.ingredients);
 }
}
