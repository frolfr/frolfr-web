import Ember from 'ember';

export default Ember.Controller.extend({
  page: 1,
  queryParams: ['page', 'size'],
  size: 5,

  count: Ember.computed('model.meta.pagination.last.number', 'model.meta.pagination.self.number', function() {
    const total = this.get('model.meta.pagination.last.number') || this.get('model.meta.pagination.self.number');
    if (!total) return [];

    return new Array(total+1).join('x').split('').map((e,i) => i+1);
  })
});
