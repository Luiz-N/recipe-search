import Ember from 'ember';

export default Ember.Route.extend({
  afterModel(model) {
    ga('send', 'event', 'recipe', 'selected', model.get('parsedName'));
  },
});
