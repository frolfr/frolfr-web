import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import ResetScrollPositionMixin from 'frolfr-web/mixins/reset-scroll-position';

const { inject, Route } = Ember

export default Route.extend(ApplicationRouteMixin, ResetScrollPositionMixin, {
  sessionAccount: inject.service(),

  beforeModel() {
    this.get('sessionAccount').loadCurrentUser();
  }
});
