import Ember from 'ember';

export default Ember.Component.extend({
  holeNumber: null,
  scorecard: null,
  tagName: 'li',

  isEditingScorecard: Ember.computed('editId', 'scorecard.id', function() {
    // TODO Why doesn't computed.equal work?
    return this.get('editId') === this.get('scorecard.id');
  }),

  strokesOptions: Ember.computed(function() {
    return [null, 1, 2, 3, 4, 5, 6, 7, 8];
  }),

  turn: Ember.computed('holeNumber', 'scorecard.turns.[]', function() {
    const scorecard = this.get('scorecard');
    return scorecard.get('turns').findBy('holeNumber', this.get('holeNumber'));
  }),

  actions: {
    save(strokes) {
      const turn = this.get('turn');
      turn.set('strokes', strokes);

      turn.save()
      .then(() => {
        this.set('editId', null);
      });
    }
  }
});
