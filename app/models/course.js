import DS from 'ember-data';

export default DS.Model.extend({
  city: DS.attr('string'),
  state: DS.attr('string'),
  country: DS.attr('string'),
  name: DS.attr('string'),
  holeCount: DS.attr('number'),

  rounds: DS.hasMany('round')
});
