import Ember from 'ember';

export default Ember.Route.extend({
  model({ id }) {
    return this.store.findRecord('course', id);
  },

  afterModel() {
    this.replaceWith('course.scorecards');
  }
});
