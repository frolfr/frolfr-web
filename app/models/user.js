import DS from 'ember-data';
import Ember from 'ember';

const DEFAULT_AVATAR = 'http://res.cloudinary.com/frolfr/image/upload/v1450881126/avatar-placeholder_n7w7z8.png';

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

  avatarSrc: Ember.computed('avatarUrl', function() {
    return this.get('avatarUrl') || DEFAULT_AVATAR;
  }),

  _fullNames: Ember.computed('firstName', 'middleName', 'lastName', function() {
    return [
      this.get('firstName'),
      this.get('middleName'),
      this.get('lastName')
    ].filter(Boolean);
  })
});
