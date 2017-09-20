import ApplicationRoute from 'frolfr-web/routes/application';

export default ApplicationRoute.extend({
  model() {
    return this.store.createRecord('user');
  },

  actions: {
    goToUser(user) {
      this.transitionTo('user', user);
    }
  }
});
