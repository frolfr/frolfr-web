import Ember from 'ember';
import ApplicationRoute from 'frolfr-web/routes/application';

export default ApplicationRoute.extend({
  model(params) {
    return this.store.query('round', {
      page: {
        number: params.page,
        size: params.size
      },
      include: 'scorecards,scorecards.turns'
    });
  },

  queryParams: {
    page: {
      refreshModel: true
    },
    size: {
      refreshModel: true
    }
  },

  afterModel() {
    Ember.$('html, body').animate({ scrollTop: 0 });
  }
});
