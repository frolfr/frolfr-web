import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
  classNames: [ 'round-resource' ],
  round: null,

  courseName: computed('round.course.name', function() {
    return this.get('round.course.name');
  }), 

  click() {
    this.attrs.goToRound(this.get('round'));
  }
});
