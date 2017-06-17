import Ember from 'ember';

export default Ember.Component.extend({
  locatedCourses: null,
  model: null,
  searchedCourses: null,
  searchedUsers: null,
  userFilter: null,

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
    }
  }
});
