import Ember from 'ember';

export default Ember.Component.extend({
  holeNumber: null,
  scorecard: null,
  tagName: 'td',

  turn: Ember.computed('holeNumber', 'scorecard.turns.[]', function() {
    const scorecard = this.get('scorecard');
    return scorecard.get('turns').findBy('holeNumber', this.get('holeNumber'));
  }),

  status: Ember.computed('turn.score', function() {
    const score = this.get('turn.score');

    if (0 < score - 1) { return 'multiple-above-par'; }
    else if (0 < score) { return 'above-par'; }
    else if (score === 0 || score === null) { return 'at-par'; }
    else if (score + 1 === 0) { return 'below-par'; }
    else { return 'multiple-below-par'; }
  })
});
