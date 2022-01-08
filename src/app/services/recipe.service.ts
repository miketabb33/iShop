import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { Recipe } from '../models/recipe.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Shish Kebab', 
      'Shish kebab is a popular meal of skewered and grilled cubes of meat. It can be found in Mediterranean cuisine and is similar to or synonymous with a dish called shashlik, which is found in the Caucasus region', 
      'https://static01.nyt.com/images/2021/06/01/dining/11lightveg-roundup-8/11lightveg-roundup-8-articleLarge-v2.jpg?quality=75&auto=webp&disable=upscale',
      [new Ingredient("Chicken", 10), new Ingredient("Mushroom", 2), new Ingredient("Cherry Tomato", 2)]
    ),
    new Recipe(
      'Pizza', 
      'A dish of Italian origin consisting of a flat, round base of dough baked with a topping of tomato sauce and cheese, typically with added meat or vegetables.', 
      'https://pizzacharlottenc.com/wp-content/uploads/2020/08/pepperoni-pizza.png',
      [new Ingredient("Dough", 3), new Ingredient("Sauce", 2), new Ingredient("Cheese", 4)]
    ),
  ]
                       
  selectRecipe = new EventEmitter<Recipe>()

  constructor() { }

  getRecipes() {
    return this.recipes.slice()
  }

  getRecipe(index: number) {
    return this.recipes[index]
  }
}
