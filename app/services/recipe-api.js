import Ember from 'ember';

export default Ember.Service.extend({

  queryText: null,
  response:  null,

  query: function () {
    let service = this;
    let queryText = this.get('queryText');

    Ember.$.ajax({
      url: 'http://localhost:4567/search?q=' + queryText,
      dataType: 'json',
      success: function(data) {
        console.log(data.length);
        service.set('response', data);
      },
      error: function() {
         console.log('DEBUG: GET Failed');
      }
    });
  },
});
