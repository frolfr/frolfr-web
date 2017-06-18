import DS from 'ember-data';

export default DS.Model.extend({
  holeNumber: DS.attr('number'),
  par: DS.attr('number'),
  strokes: DS.attr('number')
});
