import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detali',
  templateUrl: './recipe-detali.component.html',
  styleUrls: ['./recipe-detali.component.css']
})
export class RecipeDetaliComponent {
 @Input() recipe!: Recipe;
}
