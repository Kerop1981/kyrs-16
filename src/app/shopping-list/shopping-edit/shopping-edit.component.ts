import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ingredient } from 'src/app/shared/ingredient.model';
import { SoppingListService } from '../sopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
 @ViewChild('nameInput') nameInputRef!:ElementRef;
 @ViewChild('amountInput') amountInputRef!:ElementRef;

  constructor(private slService: SoppingListService){}
  

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new ingredient(ingName,ingAmount);
    this.slService.addIngredient(newIngredient);
  }
}
