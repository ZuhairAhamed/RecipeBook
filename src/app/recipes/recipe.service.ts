import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {

  constructor(private slService: ShoppingListService) {}

  private recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('Bugger', 'This is simply a test', 'https://image.shutterstock.com/image-photo/tasty-pork-buger-on-wooden-260nw-734784787.jpg',
      [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ]),
    new Recipe('Beef Chops', 'This is simply a test', 'https://kfoods.com/images1/newrecipeicon/beef-chops_6052.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Buns', 20)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
