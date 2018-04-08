import Ember from 'ember';

const { computed, inject: { service }, Service } = Ember;

export default Service.extend({
  router: service(),

  hideAll: false,

  isFabVisible: computed('hideAll', 'router.currentRouteName', function() {
    if (this.get('hideAll')) { return false };

    const disabledRoutes = [ 'rounds.new', 'round.turns' ];
    const currentRouteName = this.get('router.currentRouteName');
    return !disabledRoutes.includes(currentRouteName);
  }),

  isBottomNavVisible: computed('hideAll', 'router.currentRouteName', function() {
    if (this.get('hideAll')) { return false };

    const disabledRoutes = [ 'rounds.new', 'round.turns' ];
    const currentRouteName = this.get('router.currentRouteName');
    return !disabledRoutes.includes(currentRouteName);
  }),

  toggleUi() {
    this.toggleProperty('hideAll');
  }
});
