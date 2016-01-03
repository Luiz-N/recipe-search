import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['q'],
  q: '',

  noSelectedRecipe: Ember.computed('target.currentPath', function() {
    // see if current path is heading for a specific recipe
    // if not then show greeting box. feels hackish... probably a better way
    return this.target.currentPath !== "recipes.recipe";
  }),

  actions: {
    search: function(query) {
      if (query) {
        this.set('q', query);
      }
      this.send('refreshModel');
      ga('send', 'event', 'query', 'new search', this.get('q'));
    }
  }
});
