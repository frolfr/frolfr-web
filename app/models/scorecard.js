import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  createdAt: DS.attr('date'),
  roundId: DS.attr('number'),

  turns: DS.hasMany('turn'),
  user: DS.belongsTo('user'),

  total: Ember.computed.sum('_turnStrokes'),
  score: Ember.computed('_coursePar', 'total', function() {
    return this.get('total') - this.get('_coursePar');
  }),

  _coursePar: Ember.computed.sum('_turnPars'),
  _playedTurns: Ember.computed.filterBy('turns', 'isPlayed'),
  _turnPars: Ember.computed.mapBy('_playedTurns', 'par'),
  _turnStrokes: Ember.computed.mapBy('_playedTurns', 'strokes')
});
