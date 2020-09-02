import { Recipe } from '../recipe.model';
import * as RecipesActions from '../store/recipe.actions';


export interface State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes: []
};

export function recipeReducer(state = initialState, action: RecipesActions.RecipeActions) {
    switch (action.type) {
      case RecipesActions.SET_RECIPES:
        return {
          ...state,
          recipes: [...action.payLoad]
        };
      default:
        return state;
    }
}
