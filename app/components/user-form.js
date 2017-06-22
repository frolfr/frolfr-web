import Ember from 'ember';

export default Ember.Component.extend({
  model: null,

  willDestroyElement() {
    let model = this.get('model');

    if (model.get('isNew')) { return model.destroyRecord(); }

    model.rollbackAttributes();
    this._super(...arguments);
  },

  actions: {
    save() {
      this.get('model').save()
      .then((user) => this.sendAction('didSave', user));
    }
  }
});
