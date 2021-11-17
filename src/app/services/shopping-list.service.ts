import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Injectable()
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10)
  ]

  ingedientsAdded = new EventEmitter<Ingredient[]>()

  constructor() { }

  getIngredients() {
    return this.ingredients.slice()
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients)
    console.log(this.ingredients)
    this.ingedientsAdded.emit(this.ingredients)
  }
}
