import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ingredient } from 'src/app/shared/ingredient.model';
import { SoppingListService } from '../sopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
 @ViewChild('nameInput') nameInputRef!:ElementRef;
 @ViewChild('amountInput') amountInputRef!:ElementRef;

  constructor(private slService: SoppingListService){}
  

  onAddItem(form:NgForm){
    const value = form.value;
    const newIngredient = new ingredient(value.name, value.amount);
    this.slService.addIngredient(newIngredient);
  }
}
