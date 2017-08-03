import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
  classNames: [ 'round-resource' ],
  round: null,

  score: computed('round.scorecards.[]', function() {
    return this.get('round.scorecards.firstObject.score');
  }),

  courseName: computed('round.course.name', function() {
    return this.get('round.course.name');
  }),

  total: computed('round.scorecards.[]', function() {
    return this.get('round.scorecards.firstObject.total');
  }),

  click() {
    this.attrs.goToRound(this.get('round'));
  }
});
