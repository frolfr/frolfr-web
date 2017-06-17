import DS from 'ember-data';

export default DS.Model.extend({
  createdAt: DS.attr('date'),

  course: DS.belongsTo('course'),
  scorecards: DS.hasMany('scorecard'),

  // Used for round-form
  users: DS.hasMany('user')
});
