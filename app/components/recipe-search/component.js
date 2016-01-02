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
    queryRecord: function(id) {
      // this action is intended to pre-load ingredients when a user hovers
      // over a recipe item.
      let store = this.get('store');
      let recipe = store.peekRecord('recipe', id);
      if (recipe.get("ingredients.length") === 0) {
        store.find('recipe', id);
      }
    }
  }

});
