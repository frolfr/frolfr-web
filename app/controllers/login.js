import Ember from 'ember';

const { Controller, inject } = Ember;

export default Controller.extend({
  sessionAccount: inject.service(),
  session: inject.service(),

  actions: {
    authenticate() {
      const { email, password } = this.getProperties('email', 'password');

      this.get('session')
      .authenticate('authenticator:oauth2', email, password)
      .then(() => {
        this.get('sessionAccount').loadCurrentUser();
      }).catch(() => {
        this.set('errorMessage', 'Invalid email or password');
      });
    }
  }
});
