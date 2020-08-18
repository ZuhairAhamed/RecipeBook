import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';


export class ShoppingListService {

  ingrediantChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngrediants() {
    return this.ingredients.slice();
  }

  addIngrediant(ingrediant: Ingredient) {
    this.ingredients.push(ingrediant);
    this.ingrediantChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingrediants: Ingredient[]) {
    this.ingredients.push(...ingrediants);
    this.ingrediantChanged.emit(this.ingredients.slice());
  }
}
