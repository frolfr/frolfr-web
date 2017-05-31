import Ember from 'ember';

export default Ember.Controller.extend({
  filteredList: [],

  actions: {
    autoComplete(param) {
      if(param.trim() !== '') {
        this.store.query('course', { filter: { name: param }}).then((result) => {
          this.set('filteredList', result);
        });
      }
      else {
        this.set('filteredList', []);
      }
    }
  }
});
