import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Mango Recipe',
      'Just a name I made up for the purposes of this app',
      'https://www.simplyrecipes.com/wp-content/uploads/2006/08/HT-Cut-A-Mango-LEAD-1.jpg'
    ),
    new Recipe(
      'Pineapple Recipe',
      'Another funny name I made up. Maybe Ill add some actual dishes here',
      'https://i5.walmartimages.com/asr/bc5da1a1-6b40-4233-9abd-1126475d2864_9.0b874251fccc645fd98ac76e797c2d2a.jpeg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
