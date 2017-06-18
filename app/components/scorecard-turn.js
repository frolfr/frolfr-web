import Ember from 'ember';

export default Ember.Component.extend({
  holeNumber: null,
  scorecard: null,
  tagName: 'td',

  turn: Ember.computed('holeNumber', 'scorecard.turns.[]', function() {
    const scorecard = this.get('scorecard');
    return scorecard.get('turns').findBy('holeNumber', this.get('holeNumber'));
  })
});
