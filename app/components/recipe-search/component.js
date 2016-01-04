import Ember from 'ember';

const {
  Component,
  computed,
  inject
} = Ember;

export default Component.extend({

  tagName: 'section',
  classNames: ['col-md-7'],
  store: inject.service(),

  emptySearchResult: computed.lt('recipes.length', 1),

  actions: {
    fetchIngredients: function(recipe) {
      // this action is intended to pre-load ingredients when a user hovers
      // over a recipe item.
      if (recipe.get("ingredients.length") === 0) {
        this.get('store').find('recipe', recipe.get('id'));
      }
    }
  }

});
