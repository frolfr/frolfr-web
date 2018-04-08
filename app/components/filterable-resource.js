import Ember from 'ember';
const { Component, computed, inject } = Ember;

export default Component.extend({
  filter: '',
  filteredList: null,
  key: 'name',
  modelName: '',

  router: inject.service(),
  store: inject.service(),
  ui: inject.service(),

  label: computed('modelName', function() {
    return 'Search for ' + this.get('modelName').capitalize();
  }),

  actions: {
    autoComplete(filter) {
      this.set('filter', filter);

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
    },

    toggleUi() {
      this.get('ui').toggleUi();
    },

    transitionTo(modelName, item) {
      this.get('router').transitionTo(modelName, item);
    }
  }
});
