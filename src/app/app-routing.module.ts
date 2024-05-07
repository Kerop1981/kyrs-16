import { RouterModule, Routes } from "@angular/router";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { NgModule } from "@angular/core";

const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch:'full'},
    {path: 'recipes', component: RecipeListComponent},
    {path: 'shoping-list', component:ShoppingListComponent},
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule {

}