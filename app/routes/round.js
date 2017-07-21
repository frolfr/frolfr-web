import Ember from 'ember';
import ApplicationRoute from 'frolfr-web/routes/application';

export default ApplicationRoute.extend({
  model({ id }) {
    return this.store.findRecord('round', id, { include: 'scorecards', reload: true });
  },

  afterModel(model) {
    const scorecards = model.get('scorecards');

    return Ember.RSVP.all(scorecards.getEach('turns'));
  }
});
