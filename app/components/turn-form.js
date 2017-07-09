import Ember from 'ember';

export default Ember.Component.extend({
  classNames: [ 'panel', 'panel-default' ],
  turn: null,
  turns: null,

  init() {
    this._super(...arguments);

    this.set('editId', this.get('turns.firstObject.id'));
  },

  isEditingTurn: Ember.computed('editId', 'turn.id', function() {
    // TODO Why doesn't computed.equal work?
    return this.get('editId') === this.get('turn.id');
  }),

  holeNumber: Ember.computed.alias('turn.holeNumber'),

  status: Ember.computed('turn.score', function() {
    const score = this.get('turn.score');

    if (0 < score - 1) { return 'multiple-above-par'; }
    else if (0 < score) { return 'above-par'; }
    else if (score === 0 || score === null) { return 'at-par'; }
    else if (score + 1 === 0) { return 'below-par'; }
    else { return 'multiple-below-par'; }
  }),

  strokesOptions: Ember.computed(function() {
    return [null, 1, 2, 3, 4, 5, 6, 7, 8];
  }),

  actions: {
    save(strokes) {
      const turn = this.get('turn');
      turn.set('strokes', strokes);

      turn.save()
      .then(() => {
        const turns = this.get('turns');
        const nextTurn = turns.find(function(turn) {
          return turn.get('strokes') === null;
        });

        if (!nextTurn) {
          this.set('editId', null);
        } else {
          this.set('editId', nextTurn.id);
        }
      });
    }
  }
});
