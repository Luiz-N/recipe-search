import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  tagName: 'li',
  classNameBindings: ['todo.isCompleted:completed'],

  actions: {
    toggleComplete: function(todo) {
      todo.toggleProperty('isCompleted');
    }
  }
});
