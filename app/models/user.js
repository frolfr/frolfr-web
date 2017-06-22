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

  name: Ember.computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  })
});
