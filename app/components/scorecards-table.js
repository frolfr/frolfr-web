import Ember from 'ember';

export default Ember.Component.extend({
  classNames: [ 'table-responsive' ],
  course: null,
  round: null,
  scorecards: null,

  holeNumbers: Ember.computed('course.holesCount', function() {
    const holesCount = this.get('course.holesCount');

    return Array.from(new Array(holesCount), (val,index) => index + 1);
  })
});
