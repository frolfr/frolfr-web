import ApplicationRoute from 'frolfr-web/routes/application';

export default ApplicationRoute.extend({
  model({ id }) {
    return this.store.findRecord('course', id);
  },

  afterModel() {
    this.replaceWith('course.scorecards');
  }
});
