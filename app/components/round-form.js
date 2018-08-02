import Ember from 'ember';

const { Component, inject } = Ember;
const { service } = inject;

export default Component.extend({
  classNames: [ 'round-form', 'flex-100' ],
  store: service(),

  didSave: null,
  model: null,
  courses: null,
  nearbyCourses: [],
  users: null,

  selectedPlayers: [],

  init() {
    this._super('arguments');
    const store = this.get('store');

    store.findAll('course').then((courses) => this.set('courses', courses));

    // @todo
    // refactor to use user.users once we have users up and running
    // store.findAll('user').then((users) => this.set('users', users));
    // this.set('users', this.get('users'));
  },

  willDestroyElement() {
    this._super(...arguments);
    let model = this.get('model');

    if (model.get('isNew')) { return model.destroyRecord(); }

    model.rollbackAttributes();
    this._super(...arguments);
  },

  actions: {
    addUser(user) {
      this.get('selectedPlayers').addObject(user);
    },

    removeUser(user) {
      this.get('selectedPlayers').removeObject(user);
    },

    removeCourse() {
      this.set('model.course', null);
    },

    saveRound() {
      this.get('model').save()
      .then((round) => this.sendAction('didSave', round));
    }
  }
});
