import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  avatarUrl: DS.attr('string'),
  email: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  middleName: DS.attr('string'),
  password: DS.attr('string'),

  scorecards: DS.hasMany('scorecards'),

  name: Ember.computed('_fullNames', function() {
    return this.get('_fullNames').join(' ');
  }),

  initials: Ember.computed('_fullNames', function() {
    return this.get('_fullNames').map(function(name) { return name[0]; }).join('');
  }),

  _fullNames: Ember.computed('firstName', 'middleName', 'lastName', function() {
    return [
      this.get('firstName'),
      this.get('middleName'),
      this.get('lastName')
    ].filter(Boolean);
  })
});
