import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe

  constructor(private recipeService: RecipeService, private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.recipe = this.recipeService.getRecipes()[0]
    this.recipeService.selectRecipe.subscribe(
      (recipe) => { this.recipe = recipe }
    )
  }

  didClickShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients)
  }
}
