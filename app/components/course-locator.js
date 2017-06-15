import Ember from 'ember';

export default Ember.Component.extend({
  courses: null,
  foundLocation: false,
  geolocation: Ember.inject.service(),
  latitude: null,
  longitude: null,
  isSearching: false,
  store: Ember.inject.service(),

  actions: {
    locateNearest() {
      this.setProperties({
        courses: null,
        foundLocation: false,
        latitude: null,
        longitude: null,
        isSearching: true
      });

      this.get('geolocation').getLocation().then((geoObject) => {
        const latitude = geoObject.coords.latitude;
        const longitude = geoObject.coords.longitude;
        const location = `${latitude},${longitude}`;

        this.setProperties({
          foundLocation: true,
          latitude: latitude,
          longitude: longitude
        });

        this.get('store').query('course', { filter: { location: location }})
        .then((courses) => {
          this.set('courses', courses);
        })
        .finally(() => {
          this.set('isSearching', false);
        });
      });
    }
  }
});
