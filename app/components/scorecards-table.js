import Ember from 'ember';

export default Ember.Component.extend({
  classNames: [ 'table' ],
  tagName: 'table',
  course: null,
  round: null,
  scorecards: null,

  holeNumbers: Ember.computed('course.holeCount', function() {
    const holeCount = this.get('course.holeCount');

    return Array.from(new Array(holeCount), (val,index) => index + 1);
  })
});
