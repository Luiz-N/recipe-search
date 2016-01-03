import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['ingredient.isCompleted:completed'],

  actions: {
    toggleComplete: function(ingredient) {
      ingredient.toggleProperty('isCompleted');
    }
  }
});
