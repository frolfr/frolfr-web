import ApplicationRoute from 'frolfr-web/routes/application';

export default ApplicationRoute.extend({
  model() {
    return this.controllerFor('application').get('sessionAccount.currentUser');
  }
});
