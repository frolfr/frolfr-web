import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  createdAt: DS.attr('date'),

  turns: DS.hasMany('turn'),
  user: DS.belongsTo('user'),

  total: Ember.computed.sum('_turnStrokes'),
  score: Ember.computed('_coursePar', 'total', function() {
    const diff = this.get('total') - this.get('_coursePar');

    if (diff > 0) { return '+' + diff; }

    return diff;
  }),

  _coursePar: Ember.computed.sum('_turnPars'),
  _playedTurns: Ember.computed.filterBy('turns', 'isPlayed'),
  _turnPars: Ember.computed.mapBy('_playedTurns', 'par'),
  _turnStrokes: Ember.computed.mapBy('_playedTurns', 'strokes')
});
