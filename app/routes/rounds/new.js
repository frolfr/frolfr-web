import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('round');
  },

  actions: {
    goToRound(round) {
      this.transitionTo('round', round);
    }
  }
});
