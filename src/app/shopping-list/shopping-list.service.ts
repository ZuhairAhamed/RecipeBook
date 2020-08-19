import { Ingredient } from '../shared/ingredient.model';

import { Subject } from 'rxjs';


export class ShoppingListService {

  ingrediantChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngrediants() {
    return this.ingredients.slice();
  }

  addIngrediant(ingrediant: Ingredient) {
    this.ingredients.push(ingrediant);
    this.ingrediantChanged.next(this.ingredients.slice());
  }

  addIngredients(ingrediants: Ingredient[]) {
    this.ingredients.push(...ingrediants);
    this.ingrediantChanged.next(this.ingredients.slice());
  }
}
