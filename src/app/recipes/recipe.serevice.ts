import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();


  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Sandwhich',
      'Yummy Sandwhich',
      'https://upload.wikimedia.org/wikipedia/commons/5/57/990402-ians-recipe-01-IMG_4724.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Bread', 2)
      ]),
    new Recipe(
      'Recipe Text',
      'An Aesthetic Text',
      'https://thumbs.dreamstime.com/b/recipe-word-text-green-leaf-logo-icon-design-white-background-suitable-card-typography-143638205.jpg',

      [
        new Ingredient('Vowels', 3),
        new Ingredient('Consonants', 3)
      ])
  ];

  constructor(private slService: ShoppingListService){

  }
  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
