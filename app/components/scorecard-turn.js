import Ember from 'ember';

export default Ember.Component.extend({
  holeNumber: null,
  scorecard: null,
  tagName: 'li',

  turn: Ember.computed('holeNumber', 'scorecard.turns.[]', function() {
    const scorecard = this.get('scorecard');
    return scorecard.get('turns').findBy('holeNumber', this.get('holeNumber'));
  })
});
