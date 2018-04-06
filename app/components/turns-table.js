import Ember from 'ember';

export default Ember.Component.extend({
  turns: null,
  parOptions: [3, 4, 5],

  holeNumber: Ember.computed('turns.firstObject.holeNumber', function() {
    return this.get('turns.firstObject.holeNumber');
  }),

  nextHoleNumber: Ember.computed('course.holesCount', 'holeNumber', function() {
    const holeNumber = this.get('holeNumber');

    if (holeNumber === this.get('course.holesCount')) { return; }

    return holeNumber + 1;
  }),

  par: Ember.computed('turns.[]', {
    get() {
      return this.get('turns.firstObject.par');
    },

    set(key, par) {
      const turns = this.get('turns');

      turns.forEach(function(turn) {
        turn.set('par', par);
        turn.save();
      });

      return par;
    }
  }),

  previousHoleNumber: Ember.computed('holeNumber', function() {
    const holeNumber = this.get('holeNumber');
    if (holeNumber === 1) { return; }

    return holeNumber - 1;
  })
});
