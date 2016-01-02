import Ember from 'ember';

const {
  Component,
  computed,
  inject
} = Ember;

export default Component.extend({

  tagName: 'section',
  classNames: ['col-md-7'],

  recipes: computed.alias('recipeService.response'),
  query: null,
  recipeService: inject.service('recipe-api'),
  store: inject.service(),

  didInsertElement: function() {
    this.get('recipeService').set('queryText', this.get('query'));
    this.get('recipeService').query();
  },

  actions: {
    search: function(newQuery) {
      this.get('recipeService').set('queryText', newQuery);
      this.get('recipeService').query();
    },

    queryRecord: function(id) {
      // this action is intended to pre-load models when a user hovers
      // over a recipe item.
      let store = this.get('store');
      // for some reason findRecord is always making a server call...
      store.peekRecord('recipe',id) || store.find('recipe',id);
    }
  }

});
