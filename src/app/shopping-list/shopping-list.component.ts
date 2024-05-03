import { Component, OnInit } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';
import { SoppingListService } from './sopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredient!: ingredient[]
   
  constructor(private slService : SoppingListService){}
 

  ngOnInit() {
      this.ingredient = this.slService.getIndredients();
      this.slService.ingredientsChanged
      .subscribe(
        (ingredient: ingredient[]) => {
          this.ingredient = ingredient;
        }
      );
  }

}
