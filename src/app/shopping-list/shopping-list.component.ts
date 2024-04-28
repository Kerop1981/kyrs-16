import { Component } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredient: ingredient[] = [
    new ingredient('apples',5),
    new ingredient('Tomatos',10),
  ];

  onIngredientAdded(ingredient: ingredient){
    this.ingredient.push(ingredient);
  }
}
