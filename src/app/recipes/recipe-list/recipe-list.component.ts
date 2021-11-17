import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Input() recipes: Recipe[] = []
  @Output() recipeClicked = new EventEmitter<Recipe>()

  constructor() { }

  ngOnInit(): void {
  }

  clickedRecipe(recipe: Recipe) {
    this.recipeClicked.emit(recipe)
  }
}
