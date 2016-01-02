import { moduleForModel, test } from 'ember-qunit';

moduleForModel('ingredient', 'Unit | Model | ingredient', {
  // Specify the other units that are required for this test.
  needs: ['model:recipe']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
