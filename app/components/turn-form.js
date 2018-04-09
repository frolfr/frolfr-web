import Ember from 'ember';

export default Ember.Component.extend({
  turn: null,
  turns: null,

  holeNumber: Ember.computed.alias('turn.holeNumber'),

  status: Ember.computed('turn.score', function() {
    const score = this.get('turn.score');

    if (0 < score - 1) { return 'multiple-above-par'; }
    else if (0 < score) { return 'above-par'; }
    else if (score === 0 || score === null) { return 'at-par'; }
    else if (score + 1 === 0) { return 'below-par'; }
    else { return 'multiple-below-par'; }
  }),

  actions: {
    addOne() {
      const turn = this.get('turn');
      turn.incrementProperty('strokes');

      turn.save();
    },

    subtractOne() {
      const turn = this.get('turn');
      if (turn.get('strokes') === 1) {
        turn.set('strokes', null);
      } else {
        turn.decrementProperty('strokes');
      }

      turn.save();
    }
  }
});
