import Ember from 'ember';

const { inject, Service } = Ember;

export default Service.extend({
  session: inject.service(),
  store: inject.service(),

  loadCurrentUser() {
    if (this.get('session.isAuthenticated')) {
      this.get('store')
      .queryRecord('user', { me: true })
      .then((user) => {
        this.set('currentUser', user);
      });
    }
  }
});
