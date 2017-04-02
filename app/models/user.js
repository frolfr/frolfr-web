import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  middleName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  avatarUrl: DS.attr('number')
});
