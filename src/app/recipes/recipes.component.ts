import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [new Recipe('test recipe', 'this is a test recipe', 'https://static01.nyt.com/images/2021/06/01/dining/11lightveg-roundup-8/11lightveg-roundup-8-articleLarge-v2.jpg?quality=75&auto=webp&disable=upscale'),
                       new Recipe('Pizza', 'Yum, Pizza!', 'https://static01.nyt.com/images/2021/06/01/dining/11lightveg-roundup-8/11lightveg-roundup-8-articleLarge-v2.jpg?quality=75&auto=webp&disable=upscale')]

  selectedRecipe: Recipe = this.recipes[0]

  constructor() { }

  ngOnInit(): void {
  }

  clickedRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe
  }
}
