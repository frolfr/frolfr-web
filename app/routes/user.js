import Ember from 'ember';

export default Ember.Route.extend({
  model({ id }) {
    return this.store.findRecord('user', id);
  },

  afterModel() {
    this.replaceWith('user.scorecards');
  }
});
