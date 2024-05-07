import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detali',
  templateUrl: './recipe-detali.component.html',
  styleUrls: ['./recipe-detali.component.css']
})
export class RecipeDetaliComponent implements OnInit {
 recipe!: Recipe;
  id!: number;
 constructor(
  private recipeservice : RecipeService,
  private route: ActivatedRoute,
  private router: Router
 ){}

 onAddToShopingList(){
  this.recipeservice.addIngredientSL(this.recipe.ingredients);
 }

 ngOnInit(): void {
     this.route.params
     .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeservice.getRecipe(this.id);
      }
     )
 }

 onEditRecipe(){
   this.router.navigate(['edit']), {relaviTo: this.route}
  // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
 }
}
