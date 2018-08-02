import Ember from 'ember';

const { inject, Service, RSVP } = Ember;

export default Service.extend({
  session: inject.service(),
  store: inject.service(),

  loadCurrentUser() {
    if (this.get('session.isAuthenticated')) {
      return this.get('store')
      .queryRecord('user', { me: true })
      .then((user) => {
        this.set('currentUser', user);
      });
    } else {
      return RSVP.resolve();
    }
  }
});
