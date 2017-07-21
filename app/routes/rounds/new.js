import Ember from 'ember';
import ApplicationRoute from 'frolfr-web/routes/application';

export default ApplicationRoute.extend({
  model() {
    return this.store.createRecord('round');
  },

  actions: {
    goToRound(round) {
      this.transitionTo('round.turns', round.id, 1);
    }
  }
});
