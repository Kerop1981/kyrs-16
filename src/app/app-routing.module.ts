import { RouterModule, Routes } from "@angular/router";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { NgModule } from "@angular/core";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeDetaliComponent } from "./recipes/recipe-detali/recipe-detali.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch:'full'},
    {path: 'recipes', component: RecipeListComponent, children: [
        {path: '', component:RecipeStartComponent},
        {path: 'new', component:RecipeEditComponent},
        {path: ':id', component:RecipeDetaliComponent},
        {path: ':id/edit', component:RecipeEditComponent},
    ]},
    {path: 'shoping-list', component:ShoppingListComponent},
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule {

}