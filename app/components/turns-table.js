import Ember from 'ember';

export default Ember.Component.extend({
  editId: null,
  turns: null,

  holeNumber: Ember.computed('turns.firstObject.holeNumber', function() {
    return this.get('turns.firstObject.holeNumber');
  }),

  nextHoleNumber: Ember.computed('course.holesCount', 'holeNumber', function() {
    const holeNumber = this.get('holeNumber');

    if (holeNumber === this.get('course.holesCount')) { return; }

    return holeNumber + 1;
  }),

  par: Ember.computed('turns.firstObject.par', function() {
    return this.get('turns.firstObject.par');
  }),

  previousHoleNumber: Ember.computed('holeNumber', function() {
    const holeNumber = this.get('holeNumber');
    if (holeNumber === 1) { return; }

    return holeNumber - 1;
  }),

  actions: {
    edit(turnId) {
      if (this.get('editId') === turnId) {
        return this.set('editId', null);
      }

      this.set('editId', turnId);
    },

    savePar(par) {
      const turns = this.get('turns');

      turns.forEach(function(turn) {
        turn.set('par', par);
        turn.save();
      });
    }
  }
});
