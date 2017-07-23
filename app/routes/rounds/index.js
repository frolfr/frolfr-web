import ApplicationRoute from 'frolfr-web/routes/application';

export default ApplicationRoute.extend({
  model(params) {
    return this.store.query('round', {
      page: {
        number: params.page,
        size: params.size
      }
    });
  },

  queryParams: {
    page: {
      refreshModel: true
    },
    size: {
      refreshModel: true
    }
  }
});
