import { Component, OnDestroy, OnInit } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';
import { SoppingListService } from './sopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit , OnDestroy{
  ingredient!: ingredient[]
  private igChangeSub!: Subscription;
   
  constructor(private slService : SoppingListService){}
 

  ngOnInit() {
      this.ingredient = this.slService.getIndredients();
      this.igChangeSub =   this.slService.ingredientsChanged
      .subscribe(
        (ingredient: ingredient[]) => {
          this.ingredient = ingredient;
        }
      );
  }


  ngOnDestroy(): void {
      this.igChangeSub.unsubscribe()
  }
}
