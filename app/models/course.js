import DS from 'ember-data';

export default DS.Model.extend({
  country: DS.attr('string'),
  city: DS.attr('string'),
  holeCount: DS.attr('number'),
  name: DS.attr('string'),
  state: DS.attr('string'),

  rounds: DS.hasMany('round')
});
