import Ember from 'ember';

export default Ember.Route.extend({

  model: function (params) {
    // for some reason findRecord is always making a server call...
    let id = params.recipe_id;
    let store = this.store;
    return store.peekRecord('recipe',id) || store.find('recipe',id);
  }
});
