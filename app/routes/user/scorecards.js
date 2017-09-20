import ApplicationRoute from 'frolfr-web/routes/application';

export default ApplicationRoute.extend({
  model() {
    return this.modelFor('user').get('scorecards');
  }
});
