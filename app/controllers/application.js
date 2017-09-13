import Ember from 'ember';

const { Controller, inject } = Ember;

export default Controller.extend({
  sessionAccount: inject.service(),
  session: inject.service(),

  actions: {
    logout() {
      this.get('session').invalidate();
    }
  }
});
