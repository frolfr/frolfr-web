import Ember from 'ember';

const { Component, computed, inject } = Ember;
const { service } = inject;

export default Component.extend({
  classNames: ['round-form'],
  store: service(),

  showFriendsSheet: false,
  showCoursesSheet: false,
  didSave: null,
  locatedCourses: null,
  model: null,
  searchedCourses: null,
  searchedUsers: null,
  userFilter: null,

  courses: null,
  nearByCourses: null,

  availableUsers: computed('model.users.[]', 'searchedUsers.[]', function() {
    const searchedUsers = this.get('searchedUsers');
    if (!searchedUsers) return;

    const users = this.get('model.users');

    users.forEach(function(user) { searchedUsers.removeObject(user); });

    return searchedUsers;
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
  },

  willDestroyElement() {
    this._super(...arguments);
    let model = this.get('model');

    if (model.get('isNew')) { return model.destroyRecord(); }

    model.rollbackAttributes();
    this._super(...arguments);
  },

  actions: {
    addCourse(course) {
      this.setProperties({
        locatedCourses: null,
        searchedCourses: null
      });

      this.get('model').set('course', course);
    },

    addUser(user) {
      this.setProperties({
        searchedUsers: null,
        userFilter: null
      });

      this.get('model.users').addObject(user);
    },

    removeCourse() {
      this.get('model').set('course', null);
    },

    removeUser(user) {
      this.get('model.users').removeObject(user);
    },

    save() {
      this.get('model').save()
      .then((round) => this.sendAction('didSave', round));
    },

    closeFriendsDialog(event) {
      if(event === 'save') {
        // do ssomething
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
