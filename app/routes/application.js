import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import ResetScrollPositionMixin from 'frolfr-web/mixins/reset-scroll-position';

const { inject, Route } = Ember

export default Route.extend(ApplicationRouteMixin, ResetScrollPositionMixin, {
  sessionAccount: inject.service(),

  beforeModel() {
    return this._loadCurrentUser();
  },

  sessionAuthenticated() {
    this._super(...arguments);
    this._loadCurrentUser();
  },

  _loadCurrentUser() {
    return this.get('sessionAccount').loadCurrentUser().catch(() => this.get('session').invalidate());
  }
});
