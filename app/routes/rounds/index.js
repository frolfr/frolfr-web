import ApplicationRoute from 'frolfr-web/routes/application';
import Ember from 'ember';

export default ApplicationRoute.extend({
  model(params) {
    return this.store.query('round', {
      page: {
        number: params.page,
        size: params.size
      },
      include: 'course,scorecards,scorecards.turns,users'
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
