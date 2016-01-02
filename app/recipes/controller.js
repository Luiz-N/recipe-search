import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['q'],
  q: '',

  noSelectedRecipe: Ember.computed('target.currentPath', function() {
    // see if current path is heading for a specific recipe
    // if not then show greeting box
    return this.target.currentPath != "recipes.recipe";
  }),

  actions: {
    search: function() {
      this.send('refreshModel');
    }
  }
})
