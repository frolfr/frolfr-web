import Ember from 'ember';

const { Component, computed, inject } = Ember;
const { service } = inject;

export default Component.extend({
  classNames: ['round-form', 'flex-100'],
  store: service(),
  router: service(),

  showFriendsSheet: false,
  showCoursesSheet: false,
  didSave: null,
  model: null,
  courseFilter: 'nearby',
  friendsFilter: 'friends',

  courses: null,
  nearByCourses: null,
  friends: null,
  allUsers: null,

  selectedPlayers: null,

  availableUsers: computed('friendsFilter', function() {
    if (this.get('friendsFilter') === 'all')  {
      return this.get('users');
    } else {
      return this.get('friends');
    }
  }),

  availableCourses: computed('courseFilter', function() {
    if (this.get('courseFilter') === 'all') {
      return this.get('courses');
    } else {
      return this.get('nearByCourses');
    }
  }),

  init() {
    this._super('arguments');
    const store = this.get('store');

    store.findAll('course').then((courses) => this.set('courses', courses));
    this.set('nearByCourses', []); //empty for now

    // @todo
    // refactor to use user.friends once we have users up and running
    store.findAll('user').then((users) => this.set('friends', users));
    this.set('users', this.get('friends'));

    this.set('selectedPlayers', []);
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
    },

    cancelRound() {
      this.get('model').rollbackAttributes();
      this.get('router').transitionTo('rounds.index');
    },

    closeFriendsDialog(args) {
      if(args.action === 'save') {
        this.set('model.users', this.get('selectedPlayers'));
      }
      this.set('showFriendsSheet', false);
    },

    closeCoursesDialog(args) {
      if(args.action === 'save') {
        this.set('model.course', args.value);
      }
      this.set('showCoursesSheet', false);
    }
  }
});
