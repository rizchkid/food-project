import { Recipe } from './../recipe.model';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('a Test Recipe', 'This is simply a test',
    'https://upload.wikimedia.org/wikipedia/commons/5/57/990402-ians-recipe-01-IMG_4724.jpg'),
    new Recipe('a Test Recipe', 'This is simply a test',
    'https://upload.wikimedia.org/wikipedia/commons/5/57/990402-ians-recipe-01-IMG_4724.jpg')
  ];

  constructor(){}

  onRecipeSelected(recipe: Recipe) {
  this.recipeWasSelected.emit(recipe);
  }
}
