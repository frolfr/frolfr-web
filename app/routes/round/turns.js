import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.modelFor('round');
  },

  setupController(controller, model) {
    this._super(controller, model);

    // TODO: Is there a better way to access params?
    const holeNumber = this.paramsFor('round.turns').number;
    controller.set('holeNumber', parseInt(holeNumber));
  }
});
