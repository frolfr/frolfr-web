import Ember from 'ember';

export default Ember.Route.extend({
  // TODO: This is a bit of a hack to ensure we hit the API every time.
  model() {
    return this.store.query('round', {});
  }
});
