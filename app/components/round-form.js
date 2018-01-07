import Ember from 'ember';

const { Component, computed, inject } = Ember;
const { service } = inject;

export default Component.extend({
  classNames: ['round-form', 'flex-100'],
  store: service(),

  showFriendsSheet: false,
  showCoursesSheet: false,
  didSave: null,
  model: null,
  courseFilter: 'nearby',
  usersFilter: 'users',

  courses: null,
  nearbyCourses: null,
  users: null,
  allUsers: null,

  selectedPlayers: null,

  availableUsers: computed('usersFilter', function() {
    if (this.get('usersFilter') === 'all')  {
      return this.get('users');
    } else {
      return this.get('users');
    }
  }),

  availableCourses: computed('courseFilter', function() {
    if (this.get('courseFilter') === 'all') {
      return this.get('courses');
    } else {
      return this.get('nearbyCourses');
    }
  }),

  init() {
    this._super('arguments');
    const store = this.get('store');

    store.findAll('course').then((courses) => this.set('courses', courses));
    this.set('nearbyCourses', []); //empty for now

    // @todo
    // refactor to use user.users once we have users up and running
    store.findAll('user').then((users) => this.set('users', users));
    this.set('users', this.get('users'));

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
