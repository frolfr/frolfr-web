import Ember from 'ember';

export default Ember.Component.extend({
  editId: null,
  tagName: 'ul',

  actions: {
    edit(scorecardId) {
      if (this.get('editId') === scorecardId) {
        return this.set('editId', null);
      }

      this.set('editId', scorecardId);
    }
  }
});
