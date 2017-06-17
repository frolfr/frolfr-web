import Ember from 'ember';

export default Ember.Component.extend({
  locatedCourses: null,
  model: null,
  searchedCourse: null,

  actions: {
    addCourse(course) {
      this.get('model').set('course', course);
    },

    cancelCourse() {
      this.setProperties({
        locatedCourses: null,
        searchedCourses: null
      });

      this.get('model').set('course', null);
    }
  }
});
