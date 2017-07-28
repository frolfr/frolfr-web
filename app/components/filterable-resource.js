import Ember from 'ember';

export default Ember.Component.extend({
  filteredList: null,
  key: 'name',
  modelName: null,
  store: Ember.inject.service(),

  actions: {
    autoComplete() {
      const filter = this.get('filter');
      const filterObject = {};
      filterObject[this.get('key')] = filter;
      const modelName = this.get('modelName');

      if (filter.trim() !== '') {
        this.get('store').query(modelName, { filter: filterObject }).then((result) => {
          this.set('filteredList', result);
        });
      } else {
        this.set('filteredList', []);
      }
    }
  }
});
