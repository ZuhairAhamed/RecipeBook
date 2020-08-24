import { Ingredient } from '../shared/ingredient.model';

import { Subject } from 'rxjs';


export class ShoppingListService {

  ingrediantChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngrediants() {
    return this.ingredients.slice();
  }

  getIngrediant(index: number) {
    return this.ingredients[index];
  }


  addIngrediant(ingrediant: Ingredient) {
    this.ingredients.push(ingrediant);
    this.ingrediantChanged.next(this.ingredients.slice());
  }

  addIngredients(ingrediants: Ingredient[]) {
    this.ingredients.push(...ingrediants);
    this.ingrediantChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingrediantChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingrediantChanged.next(this.ingredients.slice());
  }

}
