import Ember from 'ember';
import ApplicationRoute from 'frolfr-web/routes/application';

export default ApplicationRoute.extend({
  model({ id }) {
    return this.store.findRecord('user', id);
  },

  afterModel() {
    this.replaceWith('user.scorecards');
  }
});
