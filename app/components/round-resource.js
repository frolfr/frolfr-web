import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
  classNames: [ 'round-resource' ],
  round: null,

  roundIcon: computed('round.users', function() {
    if(this.get('round.users.length') > 1) {
      return 'people';
    } else {
      return 'person';
    }
  }),

  score: computed('round.scorecards.[]', function() {
    return this.get('round.scorecards.firstObject.score');
  }),

  total: computed('round.scorecards.[]', function() {
    return this.get('round.scorecards.firstObject.total');
  }),

  click() {
    this.attrs.goToRound(this.get('round'));
  }
});
