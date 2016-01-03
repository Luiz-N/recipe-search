import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').query('recipe', {q: params.q})
  },

  actions: {
    refreshModel() {
      this.refresh();
    },
    loading(transition) {
      let controller = this.controllerFor('recipes');
      controller.set('currentlyLoading', true);
      transition.promise.finally(function() {
          controller.set('currentlyLoading', false);
      });
    }
  }
});
