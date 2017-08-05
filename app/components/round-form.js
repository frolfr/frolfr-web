import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['round-form'],
  didSave: null,
  locatedCourses: null,
  model: null,
  searchedCourses: null,
  searchedUsers: null,
  userFilter: null,

  availableUsers: Ember.computed('model.users.[]', 'searchedUsers.[]', function() {
    const searchedUsers = this.get('searchedUsers');
    if (!searchedUsers) return;

    const users = this.get('model.users');

    users.forEach(function(user) { searchedUsers.removeObject(user); });

    return searchedUsers;
  }),

  willDestroyElement() {
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
    }
  }
});
