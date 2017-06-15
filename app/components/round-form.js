import Ember from 'ember';

export default Ember.Component.extend({
  course: null,

  actions: {
    addCourse(course) {
      this.set('course', course);
    },

    cancelCourse() {
      this.setProperties({
        course: null,
        locatedCourses: null,
        searchedCourses: null
      });
    }
  }
});
