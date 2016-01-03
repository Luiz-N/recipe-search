import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['q'],
  q: '',

  // If current path is not heading for a specific recipe then show greeting box.
  // Feels hackish... probably a better way
  noSelectedRecipe: Ember.computed.equal('target.currentPath', 'recipes.index'),

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
