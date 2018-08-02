import ApplicationRoute from 'frolfr-web/routes/application';
import Ember from 'ember';

export default ApplicationRoute.extend({
  model(params) {
    return this.store.query('round', {
      page: {
        number: params.page,
        size: params.size
      },
      filter: {
        userId: this.modelFor('user').get('id')
      },
      include: 'course,scorecards,scorecards.turns,scorecards.user'
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
  },

  setupController(controller) {
    this._super(...arguments);

    controller.set('userId', this.modelFor('user').get('id'));
  }
});
