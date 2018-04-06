import ApplicationRoute from 'frolfr-web/routes/application';

export default ApplicationRoute.extend({
  model({ id }) {
    return this.store.findRecord('round', id, { include: 'course,scorecards,scorecards.turns,users', reload: true });
  }
});
