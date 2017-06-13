import DS from 'ember-data';

export default DS.Model.extend({
  par: DS.attr('number'),
  strokes: DS.attr('number')
});
