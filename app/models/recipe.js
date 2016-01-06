import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  image: DS.attr('string'),
  publisher: DS.attr('string'),
  source: DS.attr('string'),

  ingredients: DS.hasMany('ingredient'),

  parsedName: Ember.computed('name', function() {
      // parse &amp; to & etc...
      let div = document.createElement('div');
      div.innerHTML = this.get('name');
      return div.firstChild.nodeValue;
  })

});
