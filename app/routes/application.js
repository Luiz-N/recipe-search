import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel (params) {
    if (!params.state.params.recipes) {
      this.transitionTo('recipes');
    }
  }
});
