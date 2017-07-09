import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  holeNumber: DS.attr('number'),
  par: DS.attr('number'),
  scorecard: DS.belongsTo('scorecard'),
  strokes: DS.attr('number'),

  isPlayed: Ember.computed.notEmpty('strokes'),

  score: Ember.computed('par', 'strokes', function() {
    const par = this.get('par');
    const strokes = this.get('strokes');

    if (Ember.isEmpty(strokes)) { return null; }

    return strokes - par;
  })
});
