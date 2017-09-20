import Ember from 'ember';

const { computed, inject: { service }, Service } = Ember;

export default Service.extend({
  router: service(),

  isFabVisible: computed('router.currentRouteName', function() {
    const disabledRoutes = [ 'rounds.new', 'round.turns' ];
    const currentRouteName = this.get('router.currentRouteName');
    return !disabledRoutes.includes(currentRouteName);
  }),

  isBottomNavVisible: computed('router.currentRouteName', function() {
    const disabledRoutes = [ 'rounds.new', 'round.turns' ];
    const currentRouteName = this.get('router.currentRouteName');
    return !disabledRoutes.includes(currentRouteName);
  })
});
