import DS from 'ember-data';
import Ember from 'ember';

const { attr, hasMany, Model } = DS;
const { computed } = Ember;
const DEFAULT_AVATAR = 'http://res.cloudinary.com/frolfr/image/upload/v1450881126/avatar-placeholder_n7w7z8.png';

export default Model.extend({
  avatarUrl: attr('string'),
  email: attr('string'),
  firstName: attr('string'),
  lastName: attr('string'),
  middleName: attr('string'),
  password: attr('string'),

  scorecards: hasMany('scorecards'),

  name: computed('_fullNames', function() {
    return this.get('_fullNames').join(' ');
  }),

  initials: computed('_fullNames', function() {
    return this.get('_fullNames').map(function(name) { return name[0]; }).join('');
  }),

  avatarSrc: computed('avatarUrl', function() {
    return this.get('avatarUrl') || DEFAULT_AVATAR;
  }),

  _fullNames: computed('firstName', 'middleName', 'lastName', function() {
    return [
      this.get('firstName'),
      this.get('middleName'),
      this.get('lastName')
    ].filter(Boolean);
  })
});
