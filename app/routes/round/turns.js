import Ember from 'ember';
import ApplicationRoute from 'frolfr-web/routes/application';

export default ApplicationRoute.extend({
  model(params) {
    const scorecards = this.modelFor('round').get('scorecards');

    return scorecards.map(function(scorecard) {
      const turns = scorecard.get('turns');

      return turns.findBy('holeNumber', parseInt(params.number));
    });
  },

  afterModel() {
    Ember.$('html, body').animate({ scrollTop: 0 });
  },

  setupController(controller) {
    this._super(...arguments);

    controller.set('round', this.modelFor('round'));
  }
});
