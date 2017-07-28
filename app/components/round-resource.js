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

  score: computed('users.user.id', 'scorecards.user.id', function() {
    return this.get('scorecards').findBy('user.id', 4);
  }),

  click() {
    this.attrs.goToRound(this.get('round'));
  }
});
