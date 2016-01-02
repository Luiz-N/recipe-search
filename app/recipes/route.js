import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.get('store').query('recipe', {q: params.q})
  },

  actions: {
    refreshModel: function() {
      this.refresh();
    }
  }
});
