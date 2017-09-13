import Ember from 'ember';

const { Controller, inject } = Ember;

export default Controller.extend({
  session: inject.service(),

  actions: {
    logout() {
      this.get('session').invalidate();
    }
  }
});
