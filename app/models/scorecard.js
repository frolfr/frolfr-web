import DS from 'ember-data';

export default DS.Model.extend({
  createdAt: DS.attr('date'),
  roundId: DS.attr('number'),

  turns: DS.hasMany('turn'),
  user: DS.belongsTo('user')
});
